---
title: "Relocations"
tags:
  - relocations
  - cs-concept
programming-language:
---
# Relocations
---
## What is a relocation?
They are very common in position-dependant code and implemented at link time.

Before linking, an instruction might need a label which gets assigned
a temporary symbolic reference. Then during the link stage, the label might be
moved (once optimised). Once the actual address is found, the symbol gets
replaced by the relocated address label.

The [howto table](notes/howto-table.md) stores a list of pointers to the absolute address called
[fixups](notes/fixups.md), which are changed when the code gets relocated.

* Overflow = [fixup](notes/fixups.md) crossed boundary.

## Useful Commands
To separate the linker from the compiler:

```bash
riscv32-unknown-elf-as -march=rv32imc_xcorevhwlp1p0 -o file.o file.s
riscv32-unknown-elf-gcc -march=rv32imc -Os -c file0.c
riscv32-unknown-elf-gcc -o file file0.o file.o
```

Note: `-c` stops before link time.

## Adding a New Relocation
### Testing
The `ld` testsuite contains the linker tests, the tests for the relocations. They will look similar to `gas` tests.

### Changed files (for CORE-V)
* `bfd/elfxx-riscv.c`: Describe the relocation in the [howto table](notes/howto-table.md). Define ENCODE_ITYPE_IMM mask.
* `include/elf/riscv.h`: Add the relocation number.
* `bfd/bfd-in2.h`: Regenerate.
* `bfd/elfnn-riscv.c: Add relocation mask (eg ENCODE_ITYPE_IMM for 12 bit immediate).
* `bfd/reloc.c`: Add relocation BFD name.