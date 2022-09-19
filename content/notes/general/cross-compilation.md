---
title:  "Cross-Compilation"
tags:
  - compilers
  - cs-concept
programming-languagues:
created: 2022-06-05
---
# Cross-Compilation
---
To understand the concept of cross-compilation, let’s revisit the definition of a [[notes/general/compilers|compiler]]. A [[notes/general/compilers|compiler]] is a program that converts a program from one language to another. But the word 'compiler' is often used to refer to a program that translates a program to a machine language to create an executable that runs on a computing device. Commonly, a [[notes/general/compilers|compiler]] is used to generate machine code for the same machine that the [[notes/general/compilers|compiler]] itself is running. By the same machine, we mean the same architecture. For example, a [[notes/general/compilers|compiler]] running on a linux-x64 machine compiling a C++ program and generating machine code for the same linux-x64 machine. This program can run on all linux-x64 machines, as long as a similar environment is provided.

However, there are situations where we want to generate binaries for a machine type other than the [[notes/general/compilers|compiler]] it is running on. For example, if the target machine is not powerful enough. This is often the case while generating binaries for embedded devices, mobile apps, etc. A cross-compiler generates binaries that will run on a different machine (target machine) than the one where the [[notes/general/compilers|compiler]] itself is running (the host machine). This is a slightly complicated process, as it requires all the dependencies of the target machine to be present on the host machine.

As an example, when compiling a simple `hello-world` program for a host machine, the `stdio.h` header file in place like `/usr/include/stdio.h` is used. For generating a cross-compiled `hello-world` program, the `stdio.h` will be found in a different [[notes/general/sysroot]]. So, the [[notes/general/compilers|compiler]] invocation may look like:

```bash
gcc --sysroot=/path/to/aarch64/sysroot -march=armv8-a hello.c
```

An even more convoluted setup is the [[https://en.wikipedia.org/wiki/Cross_compiler#Canadian_Cross]], where there are two cross-compilers involved. In this setup, there are three machines A, B, and C. The cross-compiler in A (CA) will generate another cross-compiler (CB) that will run on B. CB will generate code for machine C.