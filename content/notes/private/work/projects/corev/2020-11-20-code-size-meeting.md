---
title:  "20/11/20 - Code Size Meeting"
tags:
  - work/corev
programming-languages:
created: 2020-11-20
project: corev
type: meeting
---
# 20/11/20 - Code Size Meeting
---
(By "he" I think I mean Jiawei)

- He needs to add tests to the GAS testsuite for RISC-V, testing boundary
  conditions and pattern match the binaries.
- He is struggling with illegal operands, he tried modifying the instruction in
  'riscv-opc.c' but to no avail (fabs, fsqrt, fmax, fmin, fsgnj..).
- The result binary of an instruction with a floating point would be the result
  of it without the floating point, the existing ones.
- Another meeting with them !
- Can share a draft of Mary's appnote that might be very helpful.