---
title: "Howto Table" 
tags:
  - work
  - relocations
  - help
programming-languagues:
created: 2022-06-05
---
# Howto Table
---
The [relocation](notes/relocations.md) table records the list of items that the file needs (from other object files or libraries).

The relocation record contains information like: which instructions need to be relocated (the offsets), which symbols are involved with the relocation and how to relocate the files relative to the symbols.

## Definition
```c
HOWTO (R_RISCV_CVPCREL_UI12,          /* type */
         1,                             /* rightshift */
         2,                             /* size */
         32,                            /* bitsize */
         TRUE,                          /* pc_relative */
         0,                             /* bitpos */
         complain_overflow_unsigned,    /* complain_on_overflow */
         bfd_elf_generic_reloc,         /* special_function */
         "R_RISCV_CVPCREL_UI12",        /* name */
         FALSE,                         /* partial_inplace */
         0,                             /* src_mask */
         ENCODE_ITYPE_IMM (-1U),        /* dst_mask */
         TRUE),                         /* pcrel_offset */
```

* _type_: type field is there mainly for documentary use, meaning that the back end can do what it wants with it. It is important to note that normally the back end will store their idea of an external relocation number in this field.
* _right shift_: the value the final relocation is shifted right by, it drops any unwanted data from the relocation
* _size_: encoded size of the item to be relocated, it is not a power of two measure. You can use `bfd_get_reloc_size` to find the size of the item in bytes.
* _bitsize_: the number of bits in the field to be relocated, it is used when doing overflow checking.
* _pc_relative_: boolean -> if the relocation is relative to the item being relocated.
* _bitpos_: the bit position of the relocation value in the destination. The relocated value is left shifted by this amount.
* _complain_on_overflow_: what type of overflow error should be checked for when relocating -> Complain if the value overflows when considered as an unsigned number.
* _special_function_: if this field is non-null (it is) then the supplied function is called rather than the normal function, allowing really strange relocations to be accomplished.
  * _bfd_elf_generic_reloc_: in `bfd/elf.c:1307` -> it is for relocations against symbols (`SHT_RELA` etc).
* _name_: textual name of the relocation type.
* _partial_inplace_: some formats record a relocation addend in the section contents rather than with the relocation. For ELF formats this is the distinction between `USE_REL` and `USE_RELA`. The value is false if addends are recorded within the relocations. All relocations for all ELF `USE_RELA` targets should set this field to false.
* _src_mask_: it detected the part of the instruction to be used in the relocation sum -> if relocations do have an addend in the relocation, then this field should normally be zero.
* _dst_mask_: selects which part of the instruction are replaced with a relocated value.
* _pcrel_offset_: when some formats create PC relative instructions, they leave the value of the pc of the place being relocated in the offset slot of the instruction, so that a PC relative relocation can be made by just adding in an ordinary offset. in the cases that the displacement part of the instruction is empty, this flags signals the fact.

## Related Notes
- [Relocations](notes/relocations.md)
- [PLT and GOT](/notes/plt-and-got.md)
- [Linker](notes/linker.md)
- [Linker Relaxation](notes/linker-relaxation.md)
- [Jump Table](notes/jump-table.md)