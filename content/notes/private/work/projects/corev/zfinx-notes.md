---
title:  "ZFinx Notes"
tags:
  - work/corev
programming-languages:
created: 2020-11-13
project: corev
type: meeting
---
# ZFinx Notes
---
Hi I'm Pietra, I've been looking at your problem with my colleagues Mary and Jessica. I'm wondering if there were any changes to the problem since we last spoke? Did the video help? 

Change disassembly to print out a floating point number instead
Because the disassembly will print %d not %f, meaning you'd have to make a whole new one

tc-riscv.c
riscv-dis.c
include/opcode/riscv.h

Maybe we didnt fully understand, could you please give us a day to have a look

To my understanding, Zfinx (Z F-in-X) changes all existing floating point extensions that use floating point registers to use integer registers instead. Also removes all the floating point encodings, so it only uses the integer encodings.

So it loads integer data and then it has the FP arithmetic for Zfinx, so for example ADD would be of F encoding.o

Vendor specific -> instead of unknown it will be COREV

From what I found out, it is very similar to the softfloat routines 

Update documentation for COREV

You have 32 Int regs and 32 FP regs, they are very expensive
So cant we repurpose the int register and when you do FP operations, its held physically in an integer register.

it takes an integer class register not a floating point class register 

upstream binutils -> maybe try to implement one of his intructions

info@embecosm.com
6xEvk42bUgrxFVg

It depends if the operand is encoded, it will find out what bits are set for that operand. They need to match the encoding.

Zfinx how to switch the opcodes to make it do choose?

to add a new target gcc/common/config/riscv/riscv-common.c:650