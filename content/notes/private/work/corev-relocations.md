---
title:  CORE-V Relocations
tags:
  - work
  - work/corev
  - cs/riscv
programming-languagues:
created: 2022-06-05
---
# CORE-V Relocations
---
There are two custom relocations:
- `BDF_RELOC_RISCV_CVPCREL_URS1`: 5-bit relocation for the `rs1` operand in `cv.setup`, its relocation number is 225.
- `BFD_RELOC_RISCV_CVPCREL_UI12`: 12-bit relocation for 12-bit immediates found in `cv.starti` and `cv.endi`, its relocation number is 224.

They both are **PC relative**, **local** and require **1-bit right shift**.

An example of [fix-up](notes/fixups.md) for the 5-bit register is:

```bash
$2 = {type = 225, size = 1, bitsize = 32, rightshift = 1, bitpos = 0, complain_on_overflow = complain_overflow_unsigned, negate = 0, pc_relative = 1, partial_inplace = 0, pcrel_offset = 1, src_mask = 0, dst_mask = 1015808, special_function = 0x5555555fb266 <bfd_elf_generic_reloc>, name = 0x5555556b2b71 "R_RISCV_CVPCREL_URS1"}
```

## GCC March
###  `riscv.opt`
The march command line function is defined in `riscv.opt`. It is defined as “Target Report RejectNegative Joined”.

- Target: The option is available for all languages but is target-specific.
- RejectNegative: The option does not have a “no-” form. All options beginning with “f”, “W” or “m” are assumed to have a “no-” form unless this property is used.
- Joined: Indicates that the option and argument can be included in the same `argv` entry .
- Report: The state of the option should be printed by `-fverbose-asm`.

## TARGET_COREV_LOOPS
To get a target, `build/gcc-stage1/gcc/` must produce something similar to:

```bash
#define TARGET_COREV_LOOPS ((target_flags & MASK_COREV_LOOPS) != 0)
```

In `riscv-c.c`, add a built-in define function. 

This function is defined in `gcc/libcpp/directives.c` as `cpp_define`. It processes the string passed as if it appeared as a `#define`. It gets defined with value 1.

```c
if (TARGET_COREV_LOOPS)
  builtin_define ("__riscv_corev_loops");
```

Add the mask to `gcc/common/config/riscv/riscv-common.c`.

Then you can use **TARGET_COREV_LOOPS** as an attribute to your built-ins in `riscv.md`.

## References
- [Howto Table](notes/howto-table.md)
- [Relocations](notes/relocations.md)