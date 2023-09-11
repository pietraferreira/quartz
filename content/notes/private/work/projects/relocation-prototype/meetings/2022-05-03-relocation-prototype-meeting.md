---
title: "2022-05-03 - Relocation Prototype Meeting"
tags: 
  - work/relocation-prototype/meeting
---
# Monthly (or quaterly?) meeting - Relocation Prototype

```c
../../../binutils-gdb/bfd/elfxx-riscv.c:1046:1: warning: no previous prototype for ‘riscv_reloc_name_lookup_custom’ [-Wmissing-prototypes]
 riscv_reloc_name_lookup_custom (bfd *abfd ATTRIBUTE_UNUSED, const char *r_name)
 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

* Have secondary howto table with `RELOCID` 
* `special_function` is what triggers `perform_relocation` -> prototype a function for COREV
* Make sure to set the flag which looks for `howto_table` back to 0

* `bfd_elf_generic_reloc` is in `bfd/elf.c`

* Look into `riscv_elf_add_sub_reloc`, we'll try to replicate it but for `RELOCID`
`howto` in `riscv_elf_add_sub_reloc` is basically just a pointer for the other function (i think `perform_relocation`)