---
title: "CPU Architecture"
tags:
  - hacking
  - hacking/htb
programming-languagues:
created: 2022-07-12
---
This is part of a guide that you can find [here](notes/hacking/htb-stack-based-overflow-linux.md).

A **Von-Neumann** architecture consists of four functional units:
- Memory
- Control Unit
- Arithmetic Logical Unit
- Input/Output Unit

The most important units, **Arithmetic Logical Unit** (ALU) and **Control Unit** (CU), are combined in the actual **Central Processing Unit** (CPU).

```toc
style: number min_depth: 1 max_depth: 6 
```

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

## Memory
When the program is called, the sections are mapped to the segments in the process, and the segments are loaded into memory as described by the **ELF** file.

![Screenshot 2022-07-11 at 16.50.22.png](Screenshot%202022-07-11%20at%2016.50.22.png)

- `.text` - contains the actual assembler instructions of the program, can be read-only.
- `.data` - contains global and static variables.
- `.bss` - data segment, which contains statically allocated variables represented by 0 bits.

### Primary
It is the **cache** and the **Random Access Memory** (RAM).

The cache is integrated into the processor and serves as a buffer. Before the program code and data enter the processor for processing the RAM serves as data storage.

When the primary memory loses power, all stored contents are lost.

### Secondary
This is the external data storage,  such as **HDD/SSD**, **Flash Drives** and **CD/DVD-ROMs** of a computer, which is **not** directly accessed by the CPU, but via the **I/O** interfaces.

## Heap
This area starts at the end of the `.bss` segment and grows to the higher memory addresses.

## CPU Registers
There are General registers, Control registers and Segment registers.

Within the General registers we have the Data registers, Pointer registers and Index registers.

### Data Registers
| **32-bit Register** | **64-bit Register** | **Description** |
| --- | --- | --- |
| `EAX` | `RAX` | Accumulator is used in input/output and for arithmetic operations |
| `EBX` | `RBX` | Base is used in indexed addressing |
| `ECX` | `RCX` | Counter is used to rotate instructions and count loops |
| `EDX` | `RDX` | Data is used for I/O and in arithmetic operations for multiply and divide operations involving large values |

### Pointer registers
| **32-bit Register** | **64-bit Register** | **Description** |
| --- | --- | --- |
| `EIP` | `RIP` | Instruction Pointer stores the offset address of the next instruction to be executed |
| `ESP` | `RSP` | Stack Pointer points to the top of the stack |
| `EBP` | `RBP` | Base Pointer is also known as `Stack Base Pointer` or `Frame Pointer` thats points to the base of the stack |

### Index Registers
| **Register 32-bit** | **Register 64-bit** | **Description** |
| --- | --- | --- |
| `ESI` | `RSI` | Source Index is used as a pointer from a source for string operations |
| `EDI` | `RDI` | Destination is used as a pointer to a destination for string operations |

## Instruction Cycle
| Instruction                | Description                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Fetch                      | Read from the **Instruction Address Register** (IAR) then load from the **cache** or **RAM** into the **Instruction Register** (IR).           |
| Decode                     | Converts instruction and starts to execute.                                                                                                    |
| Fetch Operands             | If further data needs to be loaded, load from **cache** or **RAM**.                                                                            |
| Execute                    | The instruction is executed. It could be operations in the ALU for example, or the control of peripheral devices.                              |
| Update Instruction Pointer | If no jump has been executed, the **IAR** is now increased by the length of the instruction so that it points to the next machine instruction. |

## Vulnerable C Functions
- `strcpy`
- `gets`
- `sprintf`
- `scanf`
- `strcat`

## The Call Instruction
It performs two operations:

1. Pushes the return address onto the **stack** so that the execution of the program can be continued after the function has successfully fulfilled its goal.
2. Changes the **instruction pointer** (**EIP**) to the call destination and starts execution there.

## See Also
- [Stack Overflow Guide - HTB](notes/hacking/htb-stack-based-overflow-linux.md)
- [Stacks and Queues](notes/general/stack.md)
- [Endianness](notes/hacking/endianness.md)
- [GDB](notes/private/work/gdb.md)