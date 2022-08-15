---
title:  "Linker"
tags:
  - work
  - help
  - engineer-training
  - compilers
  - toolchain
  - gnu
  - gcc
  - llvm
programming-languagues:
created: 2022-08-04
---
# Linker
---
Official documentation: https://sourceware.org/binutils/docs/ld/

The linker combines a number of object and archive files, relocates their data and ties up symbol references.

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

In ELF, each symbol is represented as an instance of an `Elfxx_Sym` structure inside a given [**symbol table**](notes/plt-and-got.md). (To retrieve them we use bitmasks).

An ELF object may contain a maximum of two **symbol tables**: `.symtab` and `.dynsym`. `.symtab` is the binary's global symbol table. The `.dynsym` holds symbols needed for **dynamic linking** (external objects, shared objects).

![](notes/images/Pasted%20image%2020220802095635.png)

Here you can see the binary contains the symbol `_IO_stdin_used`, which is the second `Elf32_Sym` instance in `.dynsym`. The `.dynsym` section is represented as an `Elf32_Shdr` structure, and the index of its **string table** within the **section header** table can be retrieved by its `Elf32_Shdr` link field.

Moreover, the symbol resides within the `.rodata` section as shown by its `Elf32_Sym` `st_shndx` field, fourth instance within `Elf32_Shdr`.

Therefore, we can obtain `_IO_stdin_used` attributes based on its `Elf32_Sym` instance.

`st_value` -> contains a virtual address denoting the symbol's location within its correspondent section, but not the actual value of the symbol.

### Duplicate Symbols


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
![](notes/images/Pasted%20image%2020220802105128.png)

**Ld** collects all relevant object files, applies [relocations](notes/relocations.md) and combines the file into a single binary.

## Dynamic Linking
It requires **shared** libraries to create a dynamically linked executable. The output file will contain the executable's code and the names of the shared libraries required, embedded within the binary:

![](notes/images/Pasted%20image%2020220802105245.png)

So when the binary is executed, we find the required dependencies to load and link together. Therefore, we defer the linking stage from compile-time to run-time.

More details here: https://www.intezer.com/blog/malware-analysis/executable-linkable-format-101-part-4-dynamic-linking/

## Related Notes
- [Relocations](notes/relocations.md)
- [PLT and GOT](/notes/plt-and-got.md)
- [Howto Table](notes/howto-table.md)
- [Linker Relaxation](notes/linker-relaxation.md)
- [Jump Table](notes/jump-table.md)