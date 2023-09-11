---
title:  "Code Generation"
tags:
  - work/engineer-training
programming-languages:
created: 2022-07-01
---
## What is Code Generation?
The first part of a [compiler](notes/private/work/compilers.md) **analyses** the source code into a structure that carries the meaning of the program; this structure is generally the abstract syntax tree that's been checked and decorated. Decorated here means that all identifier references have been resolved.

From this structure we can **generate** the corresponding code in the **target** language. This is what a code generator does.

![code-generation-01](notes/images/code-generation-01.png)

Some compilers generate **twice**: they first generate code in some "intermediate language" like SIL, LLVM IR, MIR etc. Then they do the "real" **code generation** into a target language that is directly runnable (or really close to it), like virtual machine code, assembly language, or machine language.

![code-generation-02](notes/images/code-generation-02.png)

## What to address?
Consider code generation of target code from TAC `a := b + c`:

```assembly
LDI    b,   R_i
LDI    c,   R_j
ADD    R_i, R_j
STI    R_j, a
```

How do we choose `R_i` and `R_j`?

## Goals of Code Generation
- Correctness
- Efficiency
- Self-efficiency

## Source
- CS LMU - Intro to CodeGen ([here](https://cs.lmu.edu/~ray/notes/codegen/))
