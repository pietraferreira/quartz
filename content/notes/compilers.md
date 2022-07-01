---
title:  "Compilers"
tags:
  - work
  - cs-concept
  - compilers
programming-languagues:
created: 2022-06-05
---
# Compilers
---
A compiler is a system that converts a program from one language to another. In the context of this course, we refer to a compiler as a program that converts a high-level language like C, C++ to a low-level language like assembly language or an executable format. Open source compilers like gcc and clang are commonly used to achieve this. These compilers are quite advanced. In a nutshell, they:

- Compile several high-level languages: C, C++, Fortran, Objective C, etc.
- Target several architectures: ARM, Aarch64, MIPS, RISC-V, WebAssembly, X86-64, etc.
- Optimise programs to run faster: Loop unrolling, inlining, vectorisation, etc.
- Provide linting and other software engineering capabilities: static analysis, warnings, etc.
- Provide APIs to be used by other source code introspection and transformation tools.
- Provide source code instrumentation capabilities for performance analysis, program introspection.

- [[llvm|LLVM]]
- [[gcc|GCC]]

## Topics
- [[cross-compilation|Cross-Compilation]]
- [[compiler-optimisation|Compiler Optimisation]]
- [[compiler-instrumentation|Compiler Instrumentation]]
- [[compiler-flags|Compiler Flags]]
- [[formal-languages|Formal Languages]]
- [[intermediate-representations|Intermediate Representations]]
- [[lexical-analysis|Lexical Analysis]]
- [[code-generation|Code Generation]]

## Structure of a Compiler
![](notes/images/compiler-structure.png)

## Languages for Writing Compilers
Possible approaches:

- Use assembly language.
- Use a high level language that is widely available.
- Use the source language itself.
    - Ultimate in portability, but not always suitable.
- Generalised assembly language.

Increasingly mainstream compilers use the **second** approach, with C++ now the language of choice (being ubiquitous (found everywhere)).

## Tools
- [[gdb|GDB]]

## Related Notes
- [[compiler-toolchains|Compiler Toolchains]]
- [[instruction-set-semantics|Instruction Set Semantics]]
- [[llvm#Online resources|Lots of Online Resources]]
- [Writing a C compiler](https://norasandler.com/2017/11/29/Write-a-Compiler.html)
