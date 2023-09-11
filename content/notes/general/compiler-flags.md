---
title:  "Compiler Flags"
tags:
  - cs/compilers
programming-languagues:
created: 2022-06-05
---
# Compiler Flags
---
An industrial-strength [compiler](notes/private/work/compilers.md) like GCC and LLVM has hundreds of flags that affect how the [compiler](notes/private/work/compilers.md) behaves. There are many types of [compiler](notes/private/work/compilers.md) flags and there is no easy way to classify types of [compiler](notes/private/work/compilers.md) flags. But, for simplicity, we attempt to classify the flags to make it easier to understand different kinds of flags briefly:

### Optimisation flags
Flags like `-O2`, `-O3`, `-funroll-loops` can be classified as optimisation flags, as they provide the [compiler](notes/private/work/compilers.md) with what optimisations to perform.

### Diagnostic flags
Flags like `-Wall`, `-Werror`, `-Wnull-dereference` affect the diagnostic outputs by the [compiler](notes/private/work/compilers.md).

### Tuning parameters
Flags like `--param max-inline-insns-small=70` take different values, often numeric, to tune how much of a specific optimisation will be performed.
    
### Instrumentation flags
Flags like `-finstrument-function`, `-profile-generate` enables [compiler](notes/private/work/compilers.md) instrumentation. The instrumented binary will collect runtime profiles that can help with optimisations, detecting bugs, etc.
    
### Linker flags
Flags like `-lpthread`, which is a flag used by the linker to find symbol definitions, make optimisation decisions, etc.
    
### Value supplying flags
Flags like `-D`, `-fprofile-use`, `-stdlib=libstdc++`, supply additional input to the [compiler](notes/private/work/compilers.md) that can help with optimisation, diagnostics, instrumentations, etc.

## Optimising for Performance
[Compilers](notes/private/work/compilers.md) offer various optimisations to improve performance and/or reduce code size. A set of [compiler](notes/private/work/compilers.md) optimisations are put together in umbrella [compiler](notes/private/work/compilers.md) flags referred to as ‘optimisation levels’. The following [compiler](notes/private/work/compilers.md) optimisation levels are common among most compilers:

### -O0
This is the trivial case where no [compiler](notes/private/work/compilers.md) optimisation is performed. However, language-specific optimisations as mandated by the standard are still performed. For example, **compile-time** evaluations required by the C++ standard are still performed. This level is very useful for debugging purposes when combined with the `-g` [compiler](notes/private/work/compilers.md) flag. As `-O0` does not perform optimisations, **compile-time** is the fastest which is quite useful for iterative development.

### -O1
At this level, many optimisations are enabled that improve the performance of the program. For example, loop unrolling, inlining, instruction scheduling, etc. This optimisation level is rarely used as more aggressive optimisation levels are available now.

### -O2
This is one of the most popular optimisation levels. It enables all of `-O1` optimisations, as well as more aggressive optimisations in register allocation, instruction scheduling, partial redundancy elimination, etc. This level is used in building code dominated with branches, for example operating systems.

### -O3
This level includes all of `-O2`, as well as some of the modern optimisations like vectorisation. `-O3` is the de facto optimisation level for maximising the performance of most applications. `-O3` is also used for benchmarking purposes, as it will have all the ‘battle-tested’ [compiler](notes/private/work/compilers.md) optimisations.

### -Ofast
This is simply `-O3` with `-ffast-math`. The `-ffast-math` flag tells the [compiler](notes/private/work/compilers.md) to relax some requirements of floating-point arithmetic, like associativity and commutativity. In many applications, the errors introduced after relaxing this requirement are tolerable at the benefit of higher performance. Without `-ffast-math`, many loops with floating-point operations can’t be vectorised.

### -Os
`-Os` optimises for **code size**. So, most of the optimisations that increase code size will be less aggressive at this level. This is a popular optimisation among embedded systems and mobile applications, as code size is a big concern there.

### -g
To be able to debug an application with source code annotations, the [compiler](notes/private/work/compilers.md) needs to provide additional information in the binary. The `-g` flag tells the [compiler](notes/private/work/compilers.md) to do that. Without this flag, the debugger will only show global symbol names and the disassembly, as it cannot associate a source line of code with the assembly.

### -Og
This enables debugging capabilities just like `-g`, but it also enables some [compiler](notes/private/work/compilers.md) optimisations that benefit debugging, as opposed to `-O0`. So instead of `-O0 -g`, it is preferable to use `-Og`. Because `-Og` enables some optimisations, the application under test runs faster than `-O0`, so the turnaround time for testing may be better with it.

### -finstrument-functions
This flag is used to instrument the entry and exit of functions. Instrumentation allows us to get insights into the behaviour of programs. While using this flag, we also need to define two functions `__cyg_profile_func_enter` and `__cyg_profile_func_exit`, which are called respectively at the entry and exit of each function invocation. If there are functions that should not be instrumented, `__attribute__((no_instrument_function))` can be added to them.

### -fprofile-generate, -fprofile-arcs, -pg
These flags are used in order to instrument programs to collect runtime profiles of different program points. This allows the [compiler](notes/private/work/compilers.md) to do profile-guided optimisations in subsequent compilations. Depending on which flags you use, different types of instrumentation can be achieved. For a detailed overview of various flags see the [1) - Linux manual page](https://man7.org/linux/man-pages/man1/gcc.1.html|gcc(1)).

### -fstack-protector, -fstack-protector-all, -fstack-protector-strong
These options instrument vulnerable functions by inserting guard variables onto its stack frame. Before the function returns, the guard variable is checked to make sure it wasn’t overwritten, thus making sure the stack wasn’t corrupted. 

This is a trivial way to improve buffer overflow attacks. This however may increase the code size of the application. In case this creates an overhead, you may only want to compile security-critical parts of the application with this [compiler](notes/private/work/compilers.md) flag. More details about how to use this flag can be found [here](https://www.keil.com/support/man/docs/armclang_ref/armclang_ref_cjh1548250046139.htm).

## Optimisation for Code Size Reduction
Here are the most common compiler optimisations that can reduce a fair amount of binary size. All the flags mentioned here are widely used in the industry.

- `-Os`: Explained [](notes/general/compiler-flags.md#-Os%7Chere).
- `-Wl`,`--strip-all` (Or do not pass the `-g` flag): This flag tells the linker to remove the debug section.
- `-fno-unroll-loops`: Disable loop unrolling, which is one of the popular compiler optimisations for performance and it increases code size.
- `-fno-exceptions`: Removes exception handling code from the binary. Note that this is not always possible if there is code that ‘throws’.
- `lto (-flto)`: Enabling link-time optimisations with `-flto` results in aggressive compiler optimisations. Many functions and global variables get optimised away, many call sites get de-virtualised. The resulting binary is faster and smaller at the same time. There could be significant compile-time overheads.