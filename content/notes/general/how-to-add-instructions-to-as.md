---
title:  "How to add an instruction to the GNU assembler"
tags:
  - work
  - engineer-training
  - relocations
  - relocation-prototype
  - help
programming-languagues:
created: 2022-07-20
---
# How to add an instruction to the GNU assembler
---
We can use `cv.starti` as an example.  It is part of the hardware loops extension and declares the address of the offset to the start of the loop as well as the loop number, 0 or 1 depending if it is an inner or outer loop.

- `cv.starti Ln, uimmL`

- `Ln`: is it inner or outer loop?
- `uimmL`: offset of the start of the loop.

| BITS  | 31 20       | 19 15 | 14 12  | 11 08 | 7   | 06 00  |
| ----- | ----------- | ----- | ------ | ----- | --- | ------ |
| FIELD | uimmL[11:0] | rs1   | funct3 | rd    | ln  | opcode |

So: `XXXX XXXX XXXX 00000 000 0000 X 111 1011`

## Summary of Changes
We need to change the `opcodes` library (`opcodes/`):

- Table driven encoding and decoding of instructions (`riscv-opc.c` (encoding) and `riscv-dis.c` (decoding)).
- Change the assembler (`gas/config`) to use the new tables (`tc-riscv.c` and `tc-riscv.h`).
- Extend relocations: modify BFD in `bfd/`.

### riscv-opc.c
Entry in `riscv-opc.c`:

```c
{"cv.starti", 0, INSN_CLASS_COREV_HWLP, "di,b1",    MATCH_CV_STARTI, MASK_CV_STARTI, match_opcode, 0}
```

- Instruction mnemonic: `cv.starti`
- xLen: base ISA required for this, either `32` (RV32), `64` (RV64) or `0` (both).
- Instruction class: defined in `include/opcode/riscv.h:riscv_insn_class`.
- Instruction operands: `di` maps to the loop number and `b1` maps to the unsigned immediate value (`cv.starti Ln(di), uimmL(b1)`).
- Match and Mask: defined in `include/opcode/riscv-opc.h`, mask being the **preset bits** and match the **opcode**. Instruction masks are used to hard code common encoding fields in the instruction, such as the opcode, and to mask preset bits with 1 in the operand encoding fields. You can see that how it is calculated here. So if you exclusive OR something with the MATCH, and all bits are the same as MASK, then the return will be 0 `((insn ^ MATCH) & MASK) == 0`.

![[notes/images/Screenshot from 2022-07-20 13-35-38.png]]

Here it hard codes the source register, function, the destination register and the opcode. We then have our match field checking the encoding.

- Match function: determines if a word corresponds to this instruction, if the instruction doesn't require additional assistance then you can use `match_opcode`. It checks the logic behind mask and match:

```c
static int

match_opcode (const struct riscv_opcode *op, insn_t insn)
{
  return ((insn ^ op->match) & op->mask) == 0;
}
```

- Pinfo: collection of bits describing the instruction, mainly any relevant hazard information.

### Riscv-dis.c
Here we add the instructions to the `print_insn_args` function, which disassembles the bit stream:

```c
/* CORE-V Specific.  */                                                       
    case 'b':                                                                                              
      if (oparg[1] == '1')                                                        
        {                                                                                                  
          info->target = (EXTRACT_ITYPE_IMM (l)<<1) + pc; ++oparg;                                         
          (*info->print_address_func) (info->target, info);                                                
          break;                                                                                           
         } 
```

- `EXTRACT_ITYPE_UIMM (l)`: extracts only the required bits from `l`, defined in `include/opcode/riscv.h`:

```c
#define EXTRACT_CV_HWLP_UIMM5(x) \                                                                       
    (RV_X(x, 15, 5))
```

```c
 #define RV_X(x, s, n)  (((x) >> (s)) & ((1 << (n)) - 1)) 
 ```

Then we go to `gas/config/tc-riscv.c` and add the instructions to the `validate_riscv_insn` function - which validates all bits in the instruction are set:

```c
case 'd':                                                                                              
      if (oparg[1] == 'i')                                                             
        {                                                                              
          used_bits |= ENCODE_CV_HWLP_LN(-1U);                                         
          ++oparg;                                                                     
          break;                                                                       
        } 
```

You can see this `ENCODE_CV_HWLP_LN` macro in `include/opcode/riscv.h`:

```c
#define ENCODE_CV_HWLP_LN(x) \                                                  
   (RV_X(x, 0, 1) << 7)  
```

Add the operand to the `riscv_ip` function - which assembles an instruction into its binary format:

```c
case 'd': /* Destination register.  */                                                             
          if (oparg[1] == 'i')                                                    
      {                                                                                                    
        ++oparg;                                                                  
        my_getExpression (imm_expr, asarg);                                                                
        asarg = expr_end;                                                         
        if (imm_expr->X_op != O_constant ||                                       
            imm_expr->X_add_number < 0 || imm_expr->X_add_number > 1)             
          as_bad (_("%s loop number must be 0 or 1"),                                                      
            ip->insn_mo->name);                                                   
        INSERT_OPERAND (LN, *ip, imm_expr->X_add_number);                                                  
        continue;                                                                                          
      } 
```

If we look into `INSERT_OPERAND()`: to ensure that the it works correctly, in the RISC-V header file, a mask for the bits encoded for the operand, and the offset of the encoded bits must be defined. These are used in the `INSERT_OPERAND` macro along with the instructions opcode, and the actual value of the operand, to produce the instructions binary representation.

- Add masks to `include/opcode/riscv.h`:

```c
#define OP_MASK_LN              0x1                                                                      
#define OP_SH_LN                7
```

- `OP_MASK_LN`: bits encoded.
- `OP_SH_LN`: first bit encoded position.

Used by:

```c
  /* Change INSN's opcode so that the operand given by FIELD has value VALUE.     
     INSN is a riscv_cl_insn structure and VALUE is evaluated exactly once.  */   
  #define INSERT_OPERAND(FIELD, INSN, VALUE) \                                                             
    INSERT_BITS ((INSN).insn_opcode, VALUE, OP_MASK_##FIELD, OP_SH_##FIELD)
```

Usage:

```c
INSERT_OPERAND (LN, *ip, imm_expr->X_add_number);
```

### Testing GAS
- Input: `test.s`
- Output: `test.d`

- Tests are in:

```bash
gas/testsuite/gas/riscv/
```

- Settings: `riscv.exp`
- Error output: `test.l`

For example `cv-hwloop-starti.s`:

```assembly
target:
      cv.starti 0, 0
      cv.starti 1, 3020
      cv.starti 0, 4094
```

Then the output:

```disassembly
#as: -march=rv32i_xcorev
#objdump: -d

.*:[ 	]+file format .*


Disassembly of section .text:

0+000 <target>:
[ 	]+0:[ 	]+0000007b[ 	]+cv.starti[ 	]+0,0 <target>
[ 	]+4:[ 	]+5e6000fb[ 	]+cv.starti[ 	]+1,bd0 +<target\+0xbd0>
[ 	]+8:[ 	]+7ff0007b[ 	]+cv.starti[ 	]+0,1006 +<target\+0x1006>
```

Here you can see me assembling it manually:

```bash
pietraferreira@tom:~$ cat test-hwlp.s && riscv32-corev-elf-as -march=rv32imc_xcorev1p0 test-hwlp.s && riscv32-corev-elf-objdump -rd a.out 
cv.starti 0, 0
cv.starti 1, 3020
cv.starti 0, 4094 

a.out:     file format elf32-littleriscv


Disassembly of section .text:

00000000 <.text>:
   0:	0000007b          	cv.starti	0,0x0
   4:	5e6000fb          	cv.starti	1,0xbd0
   8:	7ff0007b          	cv.starti	0,0x1006
```