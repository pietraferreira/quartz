---
title: "01/12/20 - Code Size Meeting" 
tags:
  - meeting
  - report
programming-languagues:
created: 2020-12-01
---
# 01/12/20 - Code Size Meeting
---
## ZFinx Notes
- Jiawei had some issues with some arithmetic instructions (fsqrt, fmin, fmax),
  an error about 'unsatisfied constraints'

- He found that the root of the bugs was the ABI flag, so after some changes to
  how the flag is handled he fixed it: https://github.com/pz9115/riscv-binutils-gdb/commit/bc7715694e2b97ba55791e8ef7409377bd7fb1f5
  (more details below)

- He is not sure if the changes he made to the ABI makes sense, he said it
  might still have errors.

- He re-added the mABI argument constraints with ilp32e, ilp32 and lp64 as
  a suggestion from Kito Cheng but can't find the restriction on the docs so
  he'd like to update the documentation.

## Git Notes
### fix moudle linker error due to ABI flags 
- bfd/elfnn-riscv.c:
  - Here he just disallowed linking different floats ABI, so he added
    EF_RISCV_ZFINX_ABI to an if statement that OR's old_flags and new_flags.
    So he fixed the error "can't link %s modules with %s modules"

- binutils/readelf.c:
  - Instead of doing a case to get_machine_flags he now uses an if statement
    trying to do something similar as his previous case statement

- include/elf/riscv.h:
  - He just changed the value of the define EF_RISCV_ZFINX_ABI (0x000A to
    0x0003)