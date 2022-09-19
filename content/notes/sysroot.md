---
title:  "Sysroot"
tags:
  - work
  - cs-concept
programming-languagues:
created: 2022-06-05
---
# Sysroot
---
Any [[notes/general/compilers|compiler]] needs to know where the standard headers, standard libraries, and the c-runtime are present. All of these are packaged together for each target (e.g., arm64, x86) in a directory called `sysroot`. When we compile a program, we need to pass the path to `sysroot` for a compiler to know where to look for standard headers during compilation, and where to look for common libraries (`libc`, `libstdc++`, etc.) during linkage.

Normally, when we compile a program for the same machine, the compiler uses the standard headers available in `/usr/include` and libraries from `/usr/lib`. These paths are hardcoded in the compiler itself, so we never have to think about it. However, when building a custom compiler or when cross-compiling programs, we tell the compiler where the `sysroot` is by passing a flag (e.g. `gcc --sysroot="/path/to/arm64/sysroot/usr" hello.cpp`). 

Most often, pre-packaged cross compilers come with a script/binary that has a `sysroot` path embedded into it (e.g., `aarch64-linux-gnu-gcc)` [[10.3.0-8ubuntu1cross1) package](https://packages.ubuntu.com/impish/devel/g++-10-aarch64-linux-gnu|g++-10-aarch64-linux-gnu (10.3.0-8ubuntu1cross1) package]].