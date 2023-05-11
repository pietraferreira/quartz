---
title:  "Linker"
tags:
  - work/engineer-training
  - help
programming-languagues:
created: 2022-08-04
---
# Linker
---
Official documentation: https://sourceware.org/binutils/docs/ld/

The linker combines a number of object and archive files, relocates their data and ties up symbol references.

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

```toc
```

## Linker Script
Every link is controller by a **linker script** which can be seen by running:

```bash
riscv32-unkown-elf-ld --verbose
```

Each section in an object file has a name and size. Most sections also have an associated block of data, known as the **section contents**.

A section may be marked as **loadable** or **allocatable** (meaning memory needs to be set aside, but nothing to load).

Every loadable or allocatable output section has two addresses: the **VMA** (virtual memory address) and the **LMA** (load memory address).

- VMA: address the section will have when the output file is run.
- LMA: address at which the section will be loaded.

In most cases both are the same.

To see the sections of a program:

```bash
riscv32-unknown-elf-objdump -h <file>
```

To see the symbols:

```bash
nm # OR
riscv32-unknown-elf-objdump -t <file>
```

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

In ELF, each symbol is represented as an instance of an `Elfxx_Sym` structure inside a given [**symbol table**](notes/private/work/plt-and-got.md). (To retrieve them we use bitmasks).

An ELF object may contain a maximum of two **symbol tables**: `.symtab` and `.dynsym`. `.symtab` is the binary's global symbol table. The `.dynsym` holds symbols needed for **dynamic linking** (external objects, shared objects).

![Pasted image 20220802095635](notes/images/Pasted%20image%2020220802095635.png)

Here you can see the binary contains the symbol `_IO_stdin_used`, which is the second `Elf32_Sym` instance in `.dynsym`. The `.dynsym` section is represented as an `Elf32_Shdr` structure, and the index of its **string table** within the **section header** table can be retrieved by its `Elf32_Shdr` link field.

Moreover, the symbol resides within the `.rodata` section as shown by its `Elf32_Sym` `st_shndx` field, fourth instance within `Elf32_Shdr`.

Therefore, we can obtain `_IO_stdin_used` attributes based on its `Elf32_Sym` instance.

`st_value` -> contains a virtual address denoting the symbol's location within its correspondent section, but not the actual value of the symbol.

- **Local variables** go in the stack.
- **Dynamically allocated memory** is taken from the **heap**, and then the **malloc** function keeps track of where all the available space is this area is.

Therefore, the stack grows towards the heap so we only run out of memory if they meet in the middle.

### Duplicate Symbols
In C++, we have a constraint known as the **one definition rule** which says that there has to be exactly one definition for a symbol when it comes to link time.

In C, there has to be exactly one definition of any functions or initialised global variables, but the definition of an uninitialised global variable can be treated as a **tentative definition**. C then allows different source files to have tentative definitions of the same object.

It is common for UNIX linkers to **not** complain about duplicate definitions of symbols are they have to cope with other programming languages than just C and C++.

### Referencing Symbols
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

## Static Linking
![Pasted image 20220802105128](notes/images/Pasted%20image%2020220802105128.png)

**Ld** collects all relevant object files, applies [relocations](notes/general/relocations.md) and combines the file into a single binary.

### Static Libraries
The command to produce them is normally `ar`, and the library file has a `.a` extension. These files are normally also prefixed with `lib` and passed to the linker with a `-l` option followed by the name of the library (so `-lfred` will pick up `libfred.a`).

Libraries are consulted **only** when the normal linking is done and they are processed in order, left to right. This means that if an object pulled in from a library late in the link line needs a symbol from a library earlier in the link time, the linker won't automatically find it.

## Dynamic Linking
It requires **shared** libraries to create a dynamically linked executable. The output file will contain the executable's code and the names of the shared libraries required, embedded within the binary:

![Pasted image 20220802105245](notes/images/Pasted%20image%2020220802105245.png)

So when the binary is executed, we find the required dependencies to load and link together. Therefore, we defer the linking stage from compile-time to run-time.

More details here: https://www.intezer.com/blog/malware-analysis/executable-linkable-format-101-part-4-dynamic-linking/

### Shared Libraries
A disadvantage of **static** linking is that the code in the program is fixed forever, if someone finds a bung in `printf`, then every program has to be linked again in order to pick up the fixed code.

If the linker finds that the definition for a particular symbol is in a shared library, then it doesn't include the definition of that symbol in the final executable. Instead, it records the name of the symbol and which library it is supposed to come from in the executable file instead.

Before the `main` function is run, a smaller version of the linker (`ld.so`) goes through the "promissory notes" and does the last stage of the link there and then.

If a particular symbol is pulled in from a particular shared library (`printf` in `libc.so` for example), then the whole of that shared library is mapped into the address space of that program. This is very different from the behaviour of a static library, where only the particular objects that held undefined symbols got pulled in.

## Related Notes
- [Relocations](notes/general/relocations.md)
- [PLT and GOT](notes/private/work/plt-and-got.md)
- [Howto Table](notes/general/howto-table.md)
- [Linker Relaxation](notes/general/linker-relaxation.md)
- [Jump Table](notes/private/work/jump-table.md)