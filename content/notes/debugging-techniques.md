---
title:  "Debugging Techniques"
tags:
  - cs-concept
  - work
programming-languagues:
created: 2022-06-05
---
# Debugging Techniques
---
Debugging is an essential part of the software development lifecycle. Even with the most robust programming practices bugs creep in, and debugging them is not a pleasant experience. On any widely used software, there are many developers contributing code, and debugging takes a significant portion of developers' time. 

That is why software development methodologies like [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development), [Defensive Programming](https://en.wikipedia.org/wiki/Defensive_programming), and [Programming/Design by contract](https://en.wikipedia.org/wiki/Design_by_contract) are adopted by many organisations. Some programming languages even provide support for some methodologies; for example, [D](https://en.wikipedia.org/wiki/D_(programming_language)) implements [contract programming](https://dlang.org/spec/contracts.html) features.

Debugging native applications is difficult because of the semantics of the programming language, the variety of dependent software, the dependencies on hardware features like threading model, memory model, etc. It is therefore essential to know the different debugging technologies available to us.

## Types of Bugs in Programs
In general, application failures can be broadly classified into three categories:

1. Programming errors (syntax errors, semantic errors, runtime errors)
2. System failure (memory errors, file corruption, network failure, etc.)
3. Invalid data (bad file name, bad data)

Some bugs are difficult to classify in a specific bucket as the classification may depend on the point of reference. For example, data corruption by one application may cause a dependent application to throw a runtime error. 

Depending on the type of failure, different tools and methodologies are deployed. In this chapter, we focus on programming errors and the following sections introduce tools and techniques pertaining to those.

## Debugging Tools and Techniques
While working on toolchains, system bringup or developing system software, commonly used debugging techniques can be divided into four categories:

1. Instrumentation-based debugging
2. Debugging using a debugger
3. Remote debugging using gdb
4. JTAG-based debugging

### Instrumentation debugging
Instrumentation-based debugging techniques are methods to insert code to programs, either manually or programmatically. This helps get insights into the code when the program runs. There are three commonly used techniques in this category:

1. Print debugging
2. Assertion-based debugging
3. Sanitisers

While print and assertion-based debugging are some of the earliest debugging techniques, sanitisers are relatively new. We briefly describe each technique below.

#### Print Debugging 
The simplest debugging technique is to add a set of print statements in the program and observe the printed values. Inserting print statements at carefully identified program points can help debug the program. 

This is one of the earliest debugging techniques and is quite useful even today. This approach however fails in several cases, as it does not scale well. Unless the programmer has good knowledge of the code at hand, it is difficult to find issues quickly with this approach.

#### Assertion-based Debugging
In order to establish preconditions and postconditions at various program points, it is common to insert assertions. Failure of assertion simplifies debugging. It also helps detect bugs early during the development stage. Usually, assertions are disabled in production code, so one of the first steps to debug is to enable assertions and run the failing test scenario.

#### Sanitisers
Both clang and GCC provide instrumentations (sanitisers) that can detect several well-known classes of errors like buffer overflow, memory corruption, etc. There are sanitiser, sanitiser, undefined behaviour sanitiser, thread sanitiser, etc.

This provides an automated way of detecting bugs. Sanitisers also require runtime support to find bugs and it is not available on all platforms. RISC-V for example currently has support for sanitiser and sanitiser only. [This document](https://github.com/google/sanitizers) is the source of truth for all sanitiser documentation.

On some platforms, [Valgrind](https://valgrind.org/) can also detect errors that are detected by some sanitisers, like memory corruption, leaks, etc. Unfortunately, Valgrind is currently not available for RISC-V platforms.

## Debugging Using a Debugger
When a debugger is available, it becomes very convenient to inspect programs, get backtraces, values of objects, the state of different threads, etc. Learning to effectively use a debugger like [gdb](gdb.md) greatly simplifies software development. [](useful-commands-dump.md#GDB%7CFrequently%20used%20%60gdb%60%20commands.)

## Remote Debugging
Info on remote debugging on GDB can be found [](gdb.md#Remote%20Debugging%7Chere).

## JTAG-based Debugging
During the early bringup phase of hardware, there are no software capabilities. In order to debug bare metal applications or access different hardware blocks, JTAG (named after the Joint Test Action Group) is used as the transport mechanism. 

Most modern hardware provides ways to directly trace instructions and data using a standard protocol called JTAG, although each hardware vendor may have different levels of support. It is frequently used to debug hardware issues. 

RISC-V defines a standard interface for external debugging, this includes accessing hardware threads (hart) from the very first instruction, accessing memory, single-stepping instructions, etc.

## References
- [Cornell University, CS312 Lecture 26, Debugging Techniques](https://www.cs.cornell.edu/courses/cs312/2006fa/lectures/lec26.html)
- [Debugging with GDB](https://www.sourceware.org/gdb/current/onlinedocs/gdb.html)
- [Tim Newsome - RISC-V External Debug (aka JTAG debugging)](https://riscv.org/wp-content/uploads/2016/01/Tues1030-RISC-V-External-Debug.pdf)
- [Tim Newsome and Megan Wachs - RISC-V External Debug Support Version 0.13.2](https://riscv.org/wp-content/uploads/2019/03/riscv-debug-release.pdf)
- [Five EmbedDev - An Embedded RISC-V Blog](https://five-embeddev.com/riscv-debug-spec/latest/introduction.html#sec:intro)
- [University of San Francisco - Programming "By Contract"](https://www.cs.usfca.edu/~parrt/course/601/lectures/programming.by.contract.html)
- [Debugging With Gdb](https://github.com/riscv/riscv-isa-sim#debugging-with-gdb)