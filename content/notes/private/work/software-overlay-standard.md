---
title: "Software Overlay Standard"
tags:
  - work
  - everest
  - overlay
  - riscv
programming-languagues:
created: 2022-08-23
---
# Software Overlay Standard

To solve the limited memory issue with embedded systems, we use **virtual memory**. Meaning the OS will use a hardware MMU (Memory Management Unit) with direct mapping between the virtual and physical memory.

However, there is another technique which can be used: **software overlay**.

An overlay represents a function or read-only data that by some scheme will be loaded into heap when the software requires, for example for a function call. It offers advantages over hardware, since the software controls what needs to be loaded and when.

```toc
```

## High-Level Design
![[notes/images/Pasted image 20220823143228.png]]

- **Firmware**: software executed by the RISC-V core, they might interact with each other.
- **Firmware Module**: responsible for a specific operation in the program, it may reside/execute in different memories (ROM, RAM, FLASH, etc).
- **RT-Engine**: responsible for managing the run time code load and execution. It is compiled and linked as all other firmware modules, thus it may also reside/execute in different memories. Any existing firmware module wishing to invoke a function defined as an overlay function will indirectly use the RT-Engine to dynamically load the function (if not already loaded) and invoke (call) it.

## Overlay Functions
They are gathered in overlay groups with a size range of 512B to 4K each. It may contain one or more overlay functions, and it is responsibility of the toolchain to create the overlay groups encapsulating overlay functions.

Since the group's boundary is always 512B, it is padded with the overlay **Group ID** up to the upper 512B boundary:

![[notes/images/Pasted image 20220823145917.png]]

## Overlay Function Call
On a regular operation, when `foo()` performs a call to `bar()`, the toolchain generates a core-specific **jump** instruction code and resolves the jump address.

In overlay, if `bar()` is defined as an overlay function, the compiler can generate a **jump** instruction, but the linker will not be able to resolve the symbol's address since the jump is not referring a fixed address in memory.

### Implicit RT Engine Invocation
Because the linker can't resolve the actual address of the overlay function `bar()`, and it does know the address to the RT Engine, we plant a **jump** instruction to the RT Engine entry point instead of a jump to `bar()`.

To figure out which overlay function to load and call, the linker will use an **address token** defining the `bar()` overlay function instead of the actual `bar()` address. Sharing a token will allow the RT Engine to prepare (load/call) the correct overlay group in memory along with the `bar()` function offset within the overlay group.

![[notes/images/Pasted image 20220823151908.png]]

### Implicit RT Engine Invocation (for non-overlay)
If `foo()` is declared as an overlay function, and it is calling a non-overlay `bar()`, there is a change that when returning from `bar()`, `foo()` will already be evicted.

Returning to an "already evicted" caller means that all non-overlay function calls that are made from within an overlay function must be done through the RT Engine. The toolchain replaces the call to `bar()` with a call to the RT Engine and sets the token value to point to `bar()`'s address. When `bar()` completes, it will return to RT Engine, which will load `foo()` if not loaded, and return to it.

### Address Token
It is an overlay function descriptor providing all the needed information for the RT Engine to load and invoke an overlay function. A regular address **is always an even number**. Therefore, to differentiate a token address from a standard address, the least significant bit of the address token shall be set to 1 (odd).

## RT Engine Management Tables
### Overlay Offset Table
It is an array of overlay offsets prepared by the linker.

- Table index: overlay group ID.
- Table entry: specific overlay group's offset.

For example, entry

## Reference
- [Official Software Overlay Standard](https://github.com/fossi-foundation/embedded-sw-overlay/blob/master/docs/overlay-software-standard.adoc)
- [Software Overlay for RISCV - HLD Version 0.7](https://github.com/riscv-software-src/riscv-overlay/blob/master/docs/overlay-hld.adoc)