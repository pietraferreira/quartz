---
title: "PLT and GOT"
tags:
  - relocations
  - help
  - work
  - riscv
  - linker
programming-languagues:
created: 2022-08-02
---
## Procedure Linkage Table and Global Offset Table
If a program receives an incorrect input for example, it terminates, rendering useless all of the relocation work performed by the [dynamic linker](/notes/linker.md). To solve this, we can resolve function references **when they are called** instead of at load-time.

This is enabled by the Procedure Linkage Table (PLT) and the Global Offset Table (GOT).

- GOT: holds entries of addresses of global variables and external functions.
- PLT: short entries of instructions used to reach external functions by redirecting control flow of execution to its corresponding GOT entry.

In general, external functions are reached by calling their respective PLT entry:

![](notes/images/Pasted%20image%2020220802105911.png)

Then the PLT entry will retrieve the function's address from the function's GOT entry, and call it:

![](notes/images/Pasted%20image%2020220802105930.png)

---
## Related Notes
- [Relocations](notes/relocations.md)
- [Linker](/notes/linker.md)
- [Howto Table](notes/howto-table.md)
- [Linker Relaxation](notes/linker-relaxation.md)
- [Jump Table](notes/jump-table.md)