---
title: "Relocations"
tags:
  - relocations
  - help
  - work
  - riscv
  - linker
programming-languagues:
created: 2022-08-02
---
# Relocations
---
```toc
```
---
When one object file references functions or variables, which do not exist within the file's context but exist in other object files (dependencies) then they must be linked. 

Linking allow the use of separate, independent sources of code by providing a way to merge the code together in a single file, meaning the developer is spared of the low-level detail.

For example:

```c
#include <stdio.h>

void main() {
    printf("Hello mum!");
}
```

Here we don't implement the `printf` function, we link our file, `file.o`, against `printf.o` which is imported from `stdio.h`. It is important to notice that we import the definition of `printf` not the implementation.

## Symbols
When a symbol is declared, two things happen:

1. The compiler reserves enough space in the program's memory to hold the **value** of the symbol.
2. The compiler creates an entry in the program's symbol table which holds the symbol's **address** (block of memory holding the symbol's value).

For example if we have:

```c
int foo = 1000;
```

It creates an entry called `foo` in the symbol table, which holds the address of an `int` sized block of memory where the number 1000 is initially stored.

Symbolic references get translated into offsets and addresses during compilation. However, this doesn't only happen during machine code generation, it can also be exported from **source code**. This is done to improve the interpretation of the generated machine code.

The linker interacts with a symbol table to reference/modify/match a given symbol inside and ELF object at linktime.

In ELF, each symbol is represented as an instance of an `Elfxx_Sym` structure inside a given [**symbol table**](notes/plt-and-got.md). (To retrieve them we use bitmasks).

An ELF object may contain a maximum of two **symbol tables**: `.symtab` and `.dynsym`. `.symtab` is the binary's global symbol table. The `.dynsym` holds symbols needed for **dynamic linking** (external objects, shared objects).

![](notes/images/Pasted%20image%2020220802095635.png)

Here you can see the binary contains the symbol `_IO_stdin_used`, which is the second `Elf32_Sym` instance in `.dynsym`. The `.dynsym` section is represented as an `Elf32_Shdr` structure, and the index of its **string table** within the **section header** table can be retrieved by its `Elf32_Shdr` link field.

Moreover, the symbol resides within the `.rodata` section as shown by its `Elf32_Sym` `st_shndx` field, fourth instance within `Elf32_Shdr`.

Therefore, we can obtain `_IO_stdin_used` attributes based on its `Elf32_Sym` instance.

`st_value` -> contains a virtual address denoting the symbol's location within its correspondent section, but not the actual value of the symbol.

## Referencing Symbols
When a program references a symbol, the compiler generates code to first access the symbol table to find the address of that symbol's memory block and then code to read the value from that memory block, so:

```c
foo = 1;
```

Looks up the symbol `foo` in the symbol table, gets the address associated with the symbol and then writes the value 1 into that address. Whereas:

```c
int * a = & foo;
```

Looks up the symbol `foo` in the symbol table, gets it address and then copies this address into the block of memory associated with the variable `a`.

**Linker scripts** symbol declarations create an entry in the symbol table but do not assign any memory to them. Thus they are an address without a value, for example:

```c
foo = 1000;
```

Creates an entry in the symbol table called `foo` which holds the address of memory location 1000, but nothing is stored there. This means that you cannot access the **value** of a linker script defined symbol, all you can do is access the **address**.

Hence we should always take the address of the symbol, and never attempt to use its value.

## Relocations
Symbolic references and symbolic definitions have to be connected with one another. The mechanism to connect them is what is known as Relocations.

A relocation can be thought of as a note that a particular address will need to be fixed at load time. Before the code is ready to run you will need to go through and read all the relocations and fix the addresses it refers to to point to the right place.

For example, we have a program that adds the value of two global variables together. In order for them to be successfully referenced, their address have to resolved. Or for example if the program is calling a function from an external dependency, the address of that function will also have to be computed prior to transferring control of execution to it.

During compilation, there is a specific stage were relocatable objects are generated. They contain all the information required to map symbolic references to its corresponding definitions. Populating symbolic references on symbolic definitions takes place during the linking phase of the compilation process.

Compilation process:

![](notes/images/Pasted%20image%2020220802100501.png)

We can relocate:

- Generic object files (`*.o`)
- Kernel object files (`*.ko`)
- Shared object files (`*.so`)

Generic object files are the ones used for static linking, they are only relevant in the compilation process and essentially, any given symbolic definition will become part of the main executable being generated.

Some of the benefits are that there is no need to rely on external dependencies. On the other hand, they can become pretty large as they need all of the dependencies in the binary.

Shared objects support being linked on runtime, and they may be shared across different processes. However, relocations of dynamic dependencies have to be done at runtime -> [**dynamic linking**](notes/linker.md).

They happen at runtime because the symbolic definitions do not exist within the main binary's context, but within external shared objects. These dynamic references do not get populated until the correspondent external dependencies are loaded in memory.

### Relocation Entries
Relocation information is held in relocatable entries, located in specific relocation sections within the ELF object. They are implemented in the form of structures, there are two different ones: `Elfxx_Rel` and `Elfxx_Rela`:

![](notes/images/Pasted%20image%2020220802101452.png)

The only different is that `Rela` has an extra field for the addend. They are mutually exclusive, meaning only one type of entry is used.

Normally the type of entry is architecture dependant, for example in x86 `Elf32_Rel` is used whereas for `x86_64` they use `Elf64_Rela`.

What do the fields mean?

- `r_offset`: holds the location where a particular relocation has to take place, address to fix.
- `r_info`: both the symbol index within a symbol table of the correspondent symbol that has to be relocation and the relocation type for that specific symbol. What has to be done to fix this code up, a "fix-up". They are retrieved using macros like:

```c
ELF32_R_SYM(info)((info)>>8)
ELF32_R_TYPE(info)((unsigned char)(info))
```

- `r_addend`: a constant addend to be added to compute the value to be stored in a given relocation reference. For example, if the relocation is for symbol `i` because the original code is doing something like `i[8]`, the addend will be set to 8. This means: find address of i and go 8 past it.

Relocation entries are always found in some relocation section, every relocation section may reference two additional sections:

- A relocation section will always be linked to its corresponded symbol table. The table can be located as a section in the section header table, and its index can be retrieved by the `sh_link` field of the relocation section's `Elfxx_Shdr` instance.
- The section index where to apply the offset can be retrieved by the relocation section's `Elxx_Shdr sh_info` field.

![](notes/images/Pasted%20image%2020220802102836.png)

As you can see, the relocation section is linked to two other sections. One of them is the symbol table, where the symbols that will be relocated are held. In this example, the section is the `.dynsym` section, the symbol table that holds symbols for dynamic linking.

The additional section linked to the relocation section is where the relocations are going to take place: the **.got.plt** section, which holds a table of pointers (an interface for the application to access relocated dynamically linked procedures addresses).

### Relocation Types
`r_info` of `Elfxx_Rela` and `Elfxx_Rel` contains two encoded values, which are the **symbol index** where the relocation is being applied to and the **relocation type** to apply. 

## RISC-V Relocations
Can be found [here](https://github.com/riscv-non-isa/riscv-elf-psabi-doc/blob/master/riscv-elf.adoc).

## Implementation (Practical)
### Important Commands
```bash
riscv32-unknown-elf-as -march=rv32i -o <file>.o <file>.s
riscv32-unknown-elf-gcc -march=rv32i -Os -c <newfile>.c
riscv32-unknown-elf-gcc -o <newfile>.c <newfile>.o <file>.o
```

- `-c` stops the compiler before link time, the third command links the object files together.

### Where are the relocations?
They can be found in:

```bash
bfd/elfxx-riscv.c # -> describes the relocation in the howto table
bfd/elfnn-riscv.c # -> add relocation mask 
bfd/reloc.c # -> add the relocation BFD name
include/elf/riscv.h # -> add the relocation number
gas/config/tc-riscv.c # -> where the magic happens
```

If we use the CORE-V relocations as an example, we have `BFD_RELOC_RISCV_CVPCREL_UI12`, which is a 12-bit relocation for 12-bit immediates found in `cv.starti` and `cv.endi`. Its relocation number is 224.

You can find the [**howto** table](notes/howto-table.md) in `bfd/elfxx-riscv.c` which contains entries for each relocation. The first field uses the table from `include/elf/riscv.h`.

### Howto Table (notes on how CORE-V relocation was implemented)
**Step 1:** Check that symbol address exists via _fixP→fx_addsy_. If false the case will just break and not go through the following steps.

**Step 2:** Uses the howto table to look up the relocation. The howto table can be found in _**bfd/elfxx-riscv.c**_. The first field uses the table from _**include/elf/riscv.h**_.

**Step 3:** Set the _delta_ and _target_ values to increase objdump readability.

Target is the value of the symbol found using _S_GET_VALUE_. Since the symbol is local, it will use _resolve_symbol_value_ to find the value. This is called during the final pass over the symbol table to resolve any symbols with complex values.

Delta is the PC relative value found via “_target - md_pcrel_from (fixP)”_, where fixP is the symbol.

**Step 4:** Check if the relocation overflows. _bfd_check_overflow_ will return _bfd_reloc_ok_ or _bfd_reloc_overflow_. If overflow, _as_fatal_ will be used, ending the assembly.

```
bfd_reloc_status_type bfd_check_overflow
    (enum complain_overflow how, // howto->complain_on_overflow
    unsigned int bitsize, // Relocation has bitsize significant bits
    unsigned int rightshift, // This relocation requires right shift by 1 (common)
    unsigned int addrsize, // Machine has addrsize significant bits
    bfd_vma relocation); // The relocation found in the howto table
```

**Step 5:** Remove some of the information from the header records of object files using _bfd_putl32_. The function masks to remove the information.

```
void
bfd_putl32 (bfd_vma data, void *p) {
    bfd_byte *addr = (bfd_byte *) p;
    
    addr[0] = data & 0xff;
    addr[1] = (data >> 8) & 0xff;
    addr[2] = (data >> 16) & 0xff;
    addr[3] = (data >> 24) & 0xff;
}
```

---
## References
- https://www.intezer.com/blog/malware-analysis/executable-and-linkable-format-101-part-3-relocations/
- https://github.com/riscv-non-isa/riscv-elf-psabi-doc/blob/master/riscv-elf.adoc#reloc-table
- https://www.intezer.com/blog/malware-analysis/executable-linkable-format-101-part-4-dynamic-linking/
- https://man7.org/linux/man-pages/man8/ld.so.8.html
- https://codywu2010.wordpress.com/2014/11/29/about-elf-pie-pic-and-else/
- http://bottomupcs.sourceforge.net/csbu/x3824.htm
- https://www.sifive.com/blog/all-aboard-part-2-relocations

## Related Notes
- [Linker](/notes/linker.md)
- [Howto Table](notes/howto-table.md)
- [PLT and GOT](notes/plt-and-got.md)
- [Linker Relaxation](notes/linker-relaxation.md)
- [Jump Table](notes/jump-table.md)