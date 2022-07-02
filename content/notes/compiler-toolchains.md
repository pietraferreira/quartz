---
title:  "Compiler Toolchains"
tags:
  - work
  - cs-concept
  - compilers
programming-languagues:
created: 2022-06-05
---
# Compiler Toolchains
---
- [GCC Toolchain](notes/gcc.md)
- [LLVM Toolchain](notes/llvm.md)
- [RISC-V Toolchain](notes/riscv-toolchain.md)
- [CORE-V Toolchain](notes/corev-toolchain.md)

## What is a Compiler Toolchain?
A compiler toolchain is a set of tools, supporting libraries, and header files that help build a program from source to an executable that can run on a machine.

Have you ever wondered what dependencies are required to compile a simple `hello-world` program? Even a small `hello-world` program needs a set of header files and libraries that are used by the compiler. 

The header file (e.g., `iostream`), is required to find the declaration of functions that are not available in the `hello-world` program (e.g, `std::cout`). 

The libraries are required to find definitions of functions (e.g., `std::operator<<`) during the linkage process. As a result of the compilation process, an executable is created and runs on the machine.

## The Compilation Process
When a compiler like g++ is used to compile a C++ program, the compilation process actually involves multiple steps depending on what output is desired. To see the steps involved in the compilation process, `-v` needs to be passed to the compiler. 

We can use a small `hello-world` program like the following to understand the compilation process:

```c
#include<iostream>  
int main() {  
   std::court << "Hello world\n";  
   return 0;  
}
```

Let’s inspect the output of the invocation of the g++ compiler by enabling the verbose output. Although the verbose invocation outputs a lot of information, the relevant lines are the compiler invocation, the assembler invocation, and the linker invocation. 

Didn’t we say just before that `g++ hello.cpp` was a compiler invocation? That is partially true because g++ is not a compiler, it is a _compiler-driver_. This may sound strange to many, but that is true. A _compiler-driver_ is a program that invokes different tools in the compiler toolchain to translate source code to a target language.

The compiler in this case is `cclplus` and the invocation is below.

```bash
$ g++ hello.cpp -v  
/usr/lib/gcc/x86_64-linux-gnu/7/cc1plus -quiet -v -imultiarch  
x86_64-linux-gnu -D_GNU_SOURCE hello.cpp -quiet -dumpbase hello.cpp  
-mtune=generic -march=x86-64 -auxbase hello -version  
-fstack-protector-strong -Wformat -Wformat-security -o /tmp/ccWH0EQc.s  
...  
GGC heuristics: --param ggc-min-expand=100 --param  
ggc-min-heapsize=131072  
ignoring duplicate directory "/usr/include/x86_64-linux-gnu/c++/7"  
ignoring nonexistent directory "/usr/local/include/x86_64-linux-gnu"  
ignoring nonexistent directory  
"/usr/lib/gcc/x86_64-linux-gnu/7/../../../../x86_64-linux-gnu/include"  
include "…" search starts here:  
include <…> search starts here:  
/usr/include/c++/7  
/usr/include/x86_64-linux-gnu/c++/7  
...
```

As we can see from the command, the compiler compiles `hello.cpp` and outputs assembly code in the file `/tmp/ccWH0EQc.s`. During the compilation, `cc1plus` needs to find the header file `iostream`, which is present in `/usr/include/c++/7`.

Next up is the assembler invocation. It reads the output of the compiler (i.e., `/tmp/ccWH0EQc.s`) and outputs an 'object-file' `/tmp/ccTpqU8Z.o`. The assembler does not have any dependencies:

```bash
/usr/bin/x86_64-linux-gnu-as -v --64 -o /tmp/ccTpqU8Z.o /tmp/ccWH0EQc.s**
```

And lastly, we have the linker invocation. The linker `collect2` reads the output of assembler `/tmp/ccTpqU8Z.o`, an object file, and outputs the executable. The linker has a lot of dependencies. 

The most interesting ones are the runtime support files viz. `crt1.o`, `crti.o`, `crtendS.o`, `crtn.o` and the standard libraries `libc`, `libgcc`, `libgcc_s`, `libm`, etc. See if you can spot how these dependencies are passed to the linker. Now the linker needs to know where these files are; actually, the compiler-driver g++ needs to know where these files are such that it can invoke the linker with appropriate libraries (see the flags starting with `-l`) and appropriate paths (see the flags starting with `-L`).

```bash
/usr/lib/gcc/x86_64-linux-gnu/7/collect2 -plugin
/usr/lib/gcc/x86_64-linux-gnu/7/liblto_plugin.so
-plugin-opt=/usr/lib/gcc/x86_64-linux-gnu/7/lto-wrapper
-plugin-opt=-fresolution=/tmp/cc2j00rN.res
-plugin-opt=-pass-through=-lgcc_s -plugin-opt=-pass-through=-lgcc
-plugin-opt=-pass-through=-lc -plugin-opt=-pass-through=-lgcc_s
-plugin-opt=-pass-through=-lgcc --sysroot=/ --build-id --eh-frame-hdr
-m elf_x86_64 --hash-style=gnu --as-needed -dynamic-linker
/lib64/ld-linux-x86-64.so.2 -pie -z now -z relro
/usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu/Scrt1.o
/usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu/crti.o
/usr/lib/gcc/x86_64-linux-gnu/7/crtbeginS.o
-L/usr/lib/gcc/x86_64-linux-gnu/7
-L/usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu
-L/usr/lib/gcc/x86_64-linux-gnu/7/../../../../lib
-L/lib/x86_64-linux-gnu -L/lib/../lib -L/usr/lib/x86_64-linux-gnu
-L/usr/lib/../lib -L/usr/lib/gcc/x86_64-linux-gnu/7/../../..
/tmp/ccTpqU8Z.o -lstdc++ -lm -lgcc_s -lgcc -lc -lgcc_s -lgcc
/usr/lib/gcc/x86_64-linux-gnu/7/crtendS.o
/usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu/crtn
```

So, essentially, **a compiler toolchain is a set of tools, supporting libraries, and header files that help build a program from source to an executable that can run on a machine**. 

Note that a compiler toolchain is necessary to build executables, but it is not sufficient. What is missing from the toolchain to have 'everything' that is needed to build executable programs is the [sysroot](notes/sysroot.md).

## The Compiler Toolchain
Apart from sysroot, a compiler toolchain contains various other binaries to help in the compilation process. In some cases, the compiler itself comes as a part of the toolchain. The following is a list of items packaged with the toolchain.

- binutils (assembler, linker, etc.)  
- Various compilers (gcc, g++, etc.)  
- C-Library (glibc, uClibc, etc.)  
- Runtime support libraries (crtbegin.o, crtend.o, etc.)  
- debugger (gdb) - C/C++ standard header files (iostream, stdio.h, etc.)  
- standard libraries (libstdc++, libm, libgcc, libunwind, etc.)  
- Compiler specific header files (stdint.h, stdc-predef.h)  
- Runtime support libraries for sanitizers (libasan, libubsan, etc.)

### Further Reading
-   [Toolchains](https://elinux.org/Toolchains)
-   [How Initialisation Functions Are Handled (C runtime)](https://gcc.gnu.org/onlinedocs/gccint/Initialization.html)