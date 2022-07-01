---
title:  "Embedded Applications"
tags:
  - cs-concept
programming-languagues:
created: 2022-06-05
---
# Embedded Applications
---
The definition and use case of embedded systems have evolved over time. While embedded systems are used to denote computing systems performing very specific tasks, it is no longer the case in many situations. Although most embedded systems are designed to perform a limited set of tasks, depending on the application, the tasks themselves may be simple or quite complex. 

Embedded systems may have simple microcontrollers, or complex Digital Signal Processors (DSPs), or even microprocessors. Even with substantial variabilities across systems, few things are generally true for all:

-   They are low-powered or battery-operated devices.
-   They have limited storage.
-   They do not upgrade the applications frequently.

There might be other things, but these three are a good starting point to understand how we can optimise these applications using compiler techniques.

## Optimising for Power
In order to reduce the power consumed while the application is running, there are two schools of thought:

- Execute/Design instructions that are low-powered
- Execute instructions as fast as possible and go to idle mode.

Each approach has its pros and cons.

### Execute/Design instructions that are low-powered
A processor has many instructions that can achieve the same computation. Each type of instruction consumes different amounts of system resources and is suitable for specific cases. For example, a floating-point operation may be more expensive than integer operations. In several embedded hardware, floating-point units aren’t present to begin with, and they use software routines to perform in case any floating-point operations arise in rare cases.

Compilers, to the best of our knowledge, do not have a direct way to select only low-power consuming instructions. As a result, this approach is mostly applicable for hardware engineers. In limited situations, compiler engineers can take advantage of this approach when they have better insight into the processor and running applications; for example, vectorisation can be disabled as vector units often consume more power than scalar instructions.

There are also situations where a system can have [big+little configuration](https://www.arm.com/why-arm/technologies/big-little). The more powerful processors are only used when the demand for compute increases, otherwise computations are performed on low-power processors. If we can compile compute-heavy parts of the code for powerful processors ([`-mtune` flag](https://gcc.gnu.org/onlinedocs/gcc/ARM-Options.html)) and rest for the low-power processor, we can take advantage of this feature. This strategy will require regular updates to build flags combined with profile-guided optimisation.

### Execute instructions as fast as possible and go to idle mode
Some processors can have advanced [dynamic voltage and frequency scaling](https://en.wikipedia.org/wiki/Dynamic_frequency_scaling) capabilities. So, whenever there is no work to do, processors go into low-power idle mode. As a result, it makes sense to run applications as fast as possible and defer the responsibility of power management to the processor. To run the application as fast as possible, we can use higher optimisation levels like `-O3`, `-Ofast`; we can combine that with link time optimisations and profile guided optimisation to achieve even better performance.

## Optimising for Binary Size
Check out [[compiler-optimisation#Optimising Programs for Code Size|Optimising for Code Size]].

## References
- [RISC-V Toolchain and Compiler Optimization Techniques](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFD113x+3T2021/home)
- [Aditya Kumar - Code Size Compiler Optimizations and Techniques for Embedded Systems](https://www.youtube.com/watch?v=6IuDWfuMEno)
- [Aditya Kumar & Sebastian Pop - Performance analysis and optimization of C++ standard libraries](https://www.youtube.com/watch?v=OTCp_AkAyRQ)
- [Visual Studio Developer Community - pragma optimize off is not working as expected](https://developercommunity.visualstudio.com/t/192628900-pragma-optimize-off-is-not-working-as-ex/1091452)
- [nm(1) - Linux man page](https://linux.die.net/man/1/nm)
- [GCC Instrument functions](https://hacktalks.blogspot.com/2013/08/gcc-instrument-functions.html)
- [Nitin Kumar - Profile-guided optimization (PGO) using GCC on IBM AIX](https://developercommunity.visualstudio.com/t/192628900-pragma-optimize-off-is-not-working-as-ex/1091452)
- [Aditya Kumar - Performance analysis and optimization](https://developercommunity.visualstudio.com/t/192628900-pragma-optimize-off-is-not-working-as-ex/1091452)
- [Vinodha Ramasamy, Paul Yuan, Dehao Chen, Robert Hundt - Feedback-Directed Optimizations in GCC with Estimated Edge Profiles from Hardware Event Sampling](https://research.google/pubs/pub36576/)