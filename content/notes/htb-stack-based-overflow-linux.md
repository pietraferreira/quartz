---
title:  "Stack-based Overflow - Linux x86"
tags:
  - htb
  - hacking
  - stack-overflow
programming-languagues:
created: 2022-07-11
---
# Stack-based Overflow - Linux x86
---
They are caused by incorrect program code, which cannot process too large amounts of data correctly by the CPU and can, therefore, manipulate the CPU's processing.

For example if too much data is written to a reserved memory **buffer** or **stack** that it is not limited, then the specific registers will be overwritten, which may allow code to be executed.

A buffer overflow can overwrite the specific program's **return address** with arbitrary data, allowing an attacker to execute commands with the **privileges of the process** vulnerable to the buffer overflow by passing arbitrary machine code.

- [CPU Architecture](notes/cpu-architecture.md)
    - [Stacks and Queues](notes/stacks-and-queues.md)
    - [Endianness](notes/endianness.md)
- [GDB](notes/gdb.md)
- [Take Control of EIP](notes/take-control-eip.md)
- [Generate Shellcode](notes/generate-shellcode.md)
- [Identification of the Return Address](notes/identify-return-address.md)
- [Prevention Techniques and Mechanisms](notes/so-prevention-techniques.md)