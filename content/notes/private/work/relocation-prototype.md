---
title: "Relocation Prototype"
tags:
  - relocation-prototype
  - relocations
  - work
  - corev
  - riscv
programming_language:
  - cpp
  - shell
project:
  - relocation-prototype
---
# Relocation Handling Prototype
---
## Introduction to the project
* needed for future psABI meeting
* eg: in COREV we have custom relocations that live in the reserved space, but we need to be able to share that reserved space with other tool chains.
* we need a way for someone else to also use the space and have tools like the linker process the correct version of that relocation number
	
### The Idea
* use a second relocation at the same address that would be used for deciding between whether it's a CORE-V relocation or someone else's.
- `R_RISCV_RELAX` proves that we can have multiple relocations at the same address, its mostly about getting the tools to understand what we want.

### How?
* using a file following our spec, have the linker correctly resolve CORE-V relocations using the right disambiguating magic number (Simon suspects it is just a howto selection, but he's not sure if anything is needed for relaxation).
* have GAS generate files for CORE-V following this spec.
* write the formal spec changes for submitting upstream.

## COREV Relocations
A compilation of my notes on the relocation handler prototype I've been working on.

More info on relocations [here](notes/relocations.md).

* `BFD_RELOC_RISCV_CVPCREL_UI12` -> 12bit relocation for 12bit immediates found in *cv.starti* and *cv.endi*. Relocation number = 224.

* `BFD_RELOC_RISCV_CVPCREL_URS1` -> 5bit relocation for the rs1 operand in *cv.setup*. Relocation number = 225.

---
### Howto Table
* COREV -> `tc-riscv.c` -> 3341

* *Step 1*: Check that symbol address exists via `fixP→fx_addsy`. If false the case will just break and not go through the following steps.
* *Step 2*: Uses the howto table to look up the relocation. The howto table can be found in `bfd/elfxx-riscv.c`. The first field uses the table from `include/elf/riscv.h`.
* *Step 3*: Set the delta and target values to increase objdump readability. Target is the value of the symbol found using `S_GET_VALUE`. Since the symbol is local, it will use `resolve_symbol_value` to find the value. This is called during the final pass over the symbol table to resolve any symbols with complex values. Delta is the PC relative value found via `“target - md_pcrel_from (fixP)”`, where `fixP` is the symbol.
* *Step 4*: Check if the relocation overflows. `bfd_check_overflow` will return  `bfd_reloc_ok` or `bfd_reloc_overflow`. If overflow, as_fatal will be used, ending the assembly.

```cpp
bfd_reloc_status_type bfd_check_overflow
(enum complain_overflow how, // howto->complain_on_overflow
unsigned int bitsize, // Relocation has bitsize significant bits
unsigned int rightshift, // This relocation requires right shift by 1 (common)
unsigned int addrsize, // Machine has addrsize significant bits
bfd_vma relocation); // The relocation found in the howto table
```

* *Step 5*: Remove some of the information from the header records of object files using bfd_putl32. The function masks to remove the information.

```cpp
void
bfd_putl32 (bfd_vma data, void *p) {
bfd_byte *addr = (bfd_byte *) p;
addr[0] = data & 0xff;
addr[1] = (data >> 8) & 0xff;
addr[2] = (data >> 16) & 0xff;
addr[3] = (data >> 24) & 0xff;
}
```

* Changed files:
  * `bfd/elfxx-riscv.c`: Describe the relocation in the howto table. Define `ENCODE_ITYPE_IMM` mask.
  * `include/elf/riscv.h`: Add the relocation number.
  * `bfd/bfd-in2.h`: Regenerate.
  * `bfd/elfnn-riscv.c`: Add relocation mask (eg `ENCODE_ITYPE_IMM` for 12 bit immediate).
  * `bfd/reloc.c`: Add relocation BFD name.

* `fixp`: The relocs associated with the instruction, if any. `fixS *fixp`.

* Entries:
```cpp
  /* Information about an instruction, including its format, operands
     and fixups.  */
  struct riscv_cl_insn
  {
     /* The opcode's entry in riscv_opcodes.  */
     const struct riscv_opcode *insn_mo;
  
     /* The encoded instruction bits.  */
     insn_t insn_opcode;
  
     /* The frag that contains the instruction.  */
     struct frag *frag;
  
     /* The offset into FRAG of the first instruction byte.  */
     long where;
  
     /* The relocs associated with the instruction, if any.  */
     fixS *fixp;
  };
```

Related to: [fixups](notes/fixups.md)

---
### More notes
* RISCV_RELOCID field -> word32, calculation -> Vendor ID for relocation.
* Meaning relocations would share their relocation number but have a "magic
number" disambiguating (4 billion IDs to use).

* How relaxation does selection:

```cpp
if (type == R_RISCV_CALL
        || type == R_RISCV_CALL_PLT)
      relax_func = _bfd_riscv_relax_call;
    else if (type == R_RISCV_HI20
       || type == R_RISCV_LO12_I
       || type == R_RISCV_LO12_S)
      relax_func = _bfd_riscv_relax_lui;
    else if (type == R_RISCV_TPREL_HI20
       || type == R_RISCV_TPREL_ADD
       || type == R_RISCV_TPREL_LO12_I
       || type == R_RISCV_TPREL_LO12_S)
      relax_func = _bfd_riscv_relax_tls_le;
    else
```

* Something similar for RelocID?

```cpp
int type = ELFNN_R_TYPE (rel->r_info);

if (type == R_RISCV_CVPCREL_UI12) {
	// identify as COREV
}
```

* Maybe this is how I could get the relocation to accompany:
 
``` cpp
/* Replace the R_RISCV_CALL reloc.  */
rel->r_info = ELFNN_R_INFO (ELFNN_R_SYM (rel->r_info), r_type);
```

```cpp
fixP->fx_next->fx_r_type = BFD_RELOC_RISCV_RELOCID;
```

* The type of expression is controlled by its position in the script file.
A symbol assigned within a section definition is created relative to the base
of the section; a symbol assigned in any other place is created as an *absolute
symbol*. Since a symbol created within a section definition is relative to the
base of the section, it will remain relocatable if relocatable output is
requested. A symbol may be created with an absolute value even when assigned to
within a section 

```bash
make check all-gas
```

```bash
make install
```

## Commands
- Generate assembly:
```bash
riscv32-corev-elf-gcc -march=rv32imc_xcorevhwlp1p0 test.c -S -o test.s
```

- Compile but don't link:
```bash
riscv32-corev-elf-gcc -march=rv32imc_xcorevhwlp1p0 -c test.s -o test.o
```

- Run with GDB:
```bash
riscv32-corev-elf-gcc -march=rv32imc_xcorevhwlp1p0 test.c -S -o test_1.s -wrapper gdb,--args
```

- The actual command:
```bash
riscv32-corev-elf-as -march=rv32imc_xcorevhwlp1p0 -o test.o ../test.s
```

---
### Related notes:
```dataview
list from #relocation-prototype AND -#report AND -#hub
```

---
### Useful Links 
- https://github.com/riscv-non-isa/riscv-elf-psabi-doc/blob/master/riscv-elf.adoc
- https://www.sifive.com/blog/all-aboard-part-2-relocations
- https://github.com/lowRISC/riscv-llvm/blob/master/docs/06-relocations-and-fixups.mkd
- https://www.embecosm.com/appnotes/ean10/html/ch06s02.html
- https://github.com/bminor/binutils-gdb/commit/45f764234a71431b581340957a3c8338e0593fdb