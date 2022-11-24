---
title:  "Stack-based Overflow - Linux x86"
tags:
  - hacking
  - help
  - htb
  - stack-overflow
programming-languagues:
created: 2022-07-11
---
# Stack-based Overflow - Linux x86
---
They are caused by incorrect program code, which cannot process too large amounts of data correctly by the CPU and can, therefore, manipulate the CPU's processing.

For example if too much data is written to a reserved memory **buffer** or **stack** that it is not limited, then the specific registers will be overwritten, which may allow code to be executed.

A buffer overflow can overwrite the specific program's **return address** with arbitrary data, allowing an attacker to execute commands with the **privileges of the process** vulnerable to the buffer overflow by passing arbitrary machine code.

- [CPU Architecture](notes/general/cpu-architecture.md)
    - [Stacks and Queues](notes/general/stack.md)
    - [Endianness](notes/general/endianness.md)
- [GDB](notes/general/gdb.md)
- [Take Control of EIP](notes/general/take-control-eip.md)
- [Generate Shellcode](notes/general/generate-shellcode.md)
- [Identification of the Return Address](notes/general/identify-return-address.md)
- [Prevention Techniques and Mechanisms](notes/general/so-prevention-techniques.md)

## CPU Architecture
A **Von-Neumann** architecture consists of four functional units:
- Memory
- Control Unit
- Arithmetic Logical Unit
- Input/Output Unit

The most important units, **Arithmetic Logical Unit** (ALU) and **Control Unit** (CU), are combined in the actual **Central Processing Unit** (CPU).

## Memory
### Primary
It is the **cache** and the **Random Access Memory** (RAM).

The cache is integrated into the processor and serves as a buffer. Before the program code and data enter the processor for processing the RAM serves as data storage.

When the primary memory loses power, all stored contents are lost.

### Secondary
This is the external data storage,  such as **HDD/SSD**, **Flash Drives** and **CD/DVD-ROMs** of a computer, which is **not** directly accessed by the CPU, but via the **I/O** interfaces.

## Control Unit
It is responsible for the correct interworking of the processor's individual parts. The tasks can be summarised as:

- Reading data from the RAM
- Saving data in RAM
- Provide, decode and execute an instruction
- Processing the inputs from peripheral devices
- Processing of outputs to peripheral devices
- Interrupt control
- Monitoring of the entire system

The **CU** contains the **Instruction Register** (IR), which contains all instructions that the processor decodes and executes. The instruction decoder translates the instruction and passes them to the execution unit, which then executes the instruction. The execution unit transfers the data to the **ALU** for calculation and receives the result back from there.

Data used during execution temporarily is stored in **registers**.

## Central Processing Unit
It provides the actual processing power. It fetches commands from memory one after the other and initiates data processing.

The processor is also often referred to as **microprocessor** when placed in a single electronic circuit, as in our PCs.

The best-known **CPU architectures** are:
- x86/i386 - (AMD and Intel)
- x86-64/amd64 - (Microsoft and Sun)
- ARM - (Acorn)

Each of them is built in a specific way, called **Instruction Set Architecture** (ISA). It describes the behaviour of a CPU concerning the instruction set used. Above all, ISA gives us the possibility to understand the unified behaviour of **machine code** in **assembly language** concerning **registers**, **data types** etc.

There are four different types of ISA:
- CISC - Complex Instruction Set Computing
- RISC - Reduced Instruction Set Computing
- VLIW - Very Long Instruction Word
- EPIC - Explicitly Parallel Instruction Computing

## Instruction Cycle
| Instruction                | Description                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Fetch                      | Read from the **Instruction Address Register** (IAR) then load from the **cache** or **RAM** into the **Instruction Register** (IR).           |
| Decode                     | Converts instruction and starts to execute.                                                                                                    |
| Fetch Operands             | If further data needs to be loaded, load from **cache** or **RAM**.                                                                            |
| Execute                    | The instruction is executed. It could be operations in the ALU for example, or the control of peripheral devices.                              |
| Update Instruction Pointer | If no jump has been executed, the **IAR** is now increased by the length of the instruction so that it points to the next machine instruction. |
>>>>>>> e671289f5537f91a2b4e49523f95459c6288c3fc
