---
title: "GCC"
tags:
  - cs/compilers
programming-languagues:
created: 2022-06-05
---
The popular gcc [compiler](notes/private/work/compilers.md) ships with the gcc toolchain. It can be downloaded from [GCC mirror sites](https://gcc.gnu.org/mirrors.html). In order to download the precompiled binaries that are ready to use, go to the _[Installing GCC: Binaries](https://gcc.gnu.org/install/binaries.html)_ page.

The toolchain contains the following top-level directories:

```bash
bin include libexec lib share
```

The `bin` folder contains all the executable binaries, like the C [compiler](notes/private/work/compilers.md) (gcc), the C++ [compiler](notes/private/work/compilers.md) (g++), the Fortran [compiler](notes/private/work/compilers.md) (gfortran), and the D [compiler](notes/private/work/compilers.md)(gdc). It may contain the Go [compiler](notes/private/work/compilers.md) (gccgo) depending on the distribution. It also contains a set of other useful tools like `gcov`, `lto-dump`, etc.

The `include` folder contains a set of header files that are included during compilation. For example, the C++ header files like `iostream`, etc. Notice that C header files like `stdio.h` are not supplied with the toolchain because they are part of [sysroot](notes/private/work/sysroot.md).

The `lib` folder contains libraries like libstdc++, libatomic, etc. These libraries may be used by the gcc [compiler](notes/private/work/compilers.md) during the compilation process or can be used as a reusable set of libraries.

The `libexec` folder contains binaries that are invoked by the driver programs (gcc, g++, gdc). For example, gcc invokes `cc1` (the C [compiler](notes/private/work/compilers.md)), `collect2` (the linker), `lto1` (the link time optimiser), etc.

The `share` folder contains the documentation which can be installed as man pages, and a non-essential set of scripts.

## Online resources
-   [GCC online documentation](https://gcc.gnu.org/onlinedocs/)
-   [GCC Resource Center](https://www.cse.iitb.ac.in/grc/)
-   [Essential Abstractions in GCC](https://www.cse.iitb.ac.in/grc/index.php?page=gcc-pldi14-tut)
-   [Videos of Lectures on Essential Abstractions in GCC -2012](https://www.cse.iitb.ac.in/grc/index.php?page=videos)
-   [Compiler Internals Lecture by IIT Bombay [Part 1]](https://www.youtube.com/watch?v=IlovhbAI7Cw&list=PLy-CGmBdq2VGjl56cyaEjxcAMyAvUKbCz)
-   [GNU Tools Cauldron](https://www.youtube.com/channel/UCQ4JGczdlU3ofHWf3NuCX8g/featured)

### Mailing lists
-   [The Gcc-help Archives](https://gcc.gnu.org/pipermail/gcc-help/)

## See Also
- [Relocations](notes/private/work/relocations.md)
- [Linker Relaxation](notes/general/linker-relaxation.md)