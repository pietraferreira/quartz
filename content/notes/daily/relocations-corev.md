---
title:  "Relocations - COREV"
tags:
  - daily
  - relocations
  - work
  - corev
programming-languagues:
created: 2020-10-02
---
# Relocations - COREV
---
what is complain and overflow?

howto_table in bfd/elfxx-riscv.c

what is size?
bitsize?
pc relative is a pc relative rellocation

they need to know what to put in each one

it looks up in the table, what does every field mean?
****************************************************************************************
assembly notes:
allocatable -> goes into real memory

symbol table are not allocatable, they are just sections with useful information

nop -> does nothing -> x0 is always 0, add x0, x0, x0 is a perfectly valid nop

## RELOCATION

Conceptually, the linker merges one or more relocatable files to form the output. It first determines how to combine and locate the input files; then it updates the symbol values, and finally it perform the relocation.

## RELOCATION TABLE
reloc_howto_type howto_table[] <- relocation table used for SHT_RELA sections -> SHT_RELA is a section type, it identifies relocation entries with explicit addends, such as type Elf32_Rela for the 32-bit class of object files (https://docs.oracle.com/cd/E19683-01/816-1386/chapter6-94076/index.html)

32 bit relocation -> HOWTO of type R_RISCV_32 which is a runtime relocation with field of word32 and calculation S + A (symbol + addend), the addend is used to compute the value of the relocatable field while S represents the value of the symbol whose index reside in the relocation entry. 

The relocation type specifies which bits to change and how to calculate their values.

---
We declare labels for addresses, the computer can't do its full job without knowing the 'whole' program as so to determine addresses. Instead it just creates two tables to keep track of these names that will be needed to be replaced by addresses eventually.

The symbol table record the list of items in the files that can be used by the code, for example subprograms. Each entry in the table has the name of the label and its offset within this object file.

The relocation table records the list of items that this file needs (from other object files or libraries)

Header -> where in the file the sections below are located
Text segment -> contains all the source code
Data segment -> combines all data and segments ?
Relocation table -> identifies the lines of code that need to be 'fixed'
Symbol table -> list of this file's reference-able labels

---
## CONTROL TRANSFER INSTRUCTIONS
RV32I provides two types of control transfer instructions: unconditional jumps and conditional branches.

JAL -> jump and link instruction -> encodes a signed offset in mutiples of 2 bytes -> the offset is sign-extended and added to the address of the jump instruction to form the jump target address. JAL stores the address of the instruction following the jump (pc+4) into register rd. The standard software calling convention uses x1 as the return address register and x5 as an alternate link register.

JALR -> jumper and link register -> the target address is obtained by adding the sign-extended 12-bit I-immediate to the register rs1, then setting the least_significant bit of the result to zero. The address of the instruction following the jump (pc+4) is written to resgister rd. Register x0 can be used as the destination if the result is not required.i

Least significant bit is the lowest bit in a series of numbers, it is either the leftmost or rightmost. If the LSB is on the right, the architecture is "little endian". If it is on the left, big endian. For example, in a little endian the LSB of 00000001 is 1.

LUI (load upper immediate)
AUIPC (add upper immediate to pc)

a word is 32 bits (4 bytes)
zero-extend -> pad with zeros

if the symbol and the call site are not in the same compile unit, then compiler doesn't know the symbol offsets. AUIPC and JALR pair will be generated to guarantee the function call can reach the symbol. Linker knows the symbol address if its a static linker, can transfer the pair to a single JAL.

The linker rewrites offsets according to relocation records

The relocation record contains info like: which instructions need to be relocated (the offsets), which symbols are involved with the reloc and how to relocate the files relative to the symbols.

So the type (R_RISCV_32) tells how to relocate the field relative to symbols.

Symbol can be something like bar + 0 (symb name + addend)