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