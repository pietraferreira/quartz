---
tags:
  - help
  - work
  - slides
type: cheatsheet
---
# How to add instructions to the GNU Assembler
---
## Instruction Example

Using **cv.starti** as an example:

```
cv.starti Ln, uimmL
```

- **Ln**: 0 for inner loop, 1 for outer loop.
- **uimmL**: offset of the start of the loop.

![Image](file:///home/pietra/Pictures/starti-bits.png)

---
## Summary of changes
We mainly need to change the **opcodes** library.

1. Table driven encoding and decoding of instructions (**riscv-opc.c** (encoding) and **riscv-dis.c** (decoding)).
2. Change the assembler (**gas/config**) to use the new tables (**tc-riscv.c** and **tc-riscv.h**).
3. Extend relocations: modify BFD in **bfd/**.

---
## Encoding (riscv-opc.c)
```c
{"cv.starti", 0, INSN_CLASS_COREV_HWLP, "di,b1",  
  MATCH_CV_STARTI, MASK_CV_STARTI, match_opcode, 0}
```

- Instruction mnemonic: **cv.starti**
- xlen: base ISA required for this, either **32** (RV32), **64** (RV64) or **0** (both).
- Instruction class: defined in **include/opcode/riscv.h:riscv_insn_class**.
- Instruction operands: **di** maps to the loop number and **b1** maps to the unsigned immediate value (**cv.starti Ln(di), uimmL(b1)**).
---
- Match and Mask: defined in **include/opcode/riscv-opc.h**
- Mask -> **preset bits**, hard code common encoding fields in the instruction, such as the opcode.
- Match -> the **opcode**, mask preset bits with 1 in the operand encoding fields.

---

You can see that how it is calculated here. So if you exclusive OR something with the MATCH, and all bits are the same as MASK, then the return will be 0:

**((insn ^ MATCH) & MASK) == 0**.

![file:///home/pietra/Pictures/starti-mask-match.png](file:///home/pietra/Pictures/starti-mask-match.png)
Here it hard codes the **source register**, **function**, the **destination register** and the **opcode**. 

---
We then have our match field checking the encoding.
- **Match function**: determines if a word corresponds to this instruction, if the instruction doesn't require additional assistance then you can use **match_opcode**. It checks the logic behind mask and match:

```c
static int

match_opcode (const struct riscv_opcode *op, insn_t insn)
{
  return ((insn ^ op->match) & op->mask) == 0;
}
```

---
- Pinfo: collection of bits describing the instruction, mainly any relevant hazard information.
---
## Decoding
Add instructions to the **print_insn_args** function, which disassembles the bit stream:

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
---
- **EXTRACT_ITYPE_UIMM (l)**: extracts only the required bits from **l**, defined in **include/opcode/riscv.h**:

```c
#define EXTRACT_CV_HWLP_UIMM5(x) \                                                                       
    (RV_X(x, 15, 5))
```

```c
 #define RV_X(x, s, n)  (((x) >> (s)) & ((1 << (n)) - 1)) 
 ```

---

Then we go to **gas/config/tc-riscv.c** and add the instructions to the **validate_riscv_insn** function - which validates all bits in the instruction are set:

```c
case 'd':                                                                                              
      if (oparg[1] == 'i')                                                             
        {                                                                              
          used_bits |= ENCODE_CV_HWLP_LN(-1U);                                         
          ++oparg;                                                                     
          break;                                                                       
        } 
```

---
You can see this **ENCODE_CV_HWLP_LN** macro in **include/opcode/riscv.h**:

```c
#define ENCODE_CV_HWLP_LN(x) \                                                  
   (RV_X(x, 0, 1) << 7)  
```

---
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

---
**INSERT_OPERAND()**: to ensure that the it works correctly (in the RISC-V header file) a **mask** for the bits encoded for the operand and the **offset** of the encoded bits must be defined.

These are used in the **INSERT_OPERAND** macro along with the instructions opcode, and the actual value of the operand, to produce the instructions binary representation.

---
- Add masks to `include/opcode/riscv.h`:

```c
#define OP_MASK_LN              0x1                                                                      
#define OP_SH_LN                7
```

- **OP_MASK_LN**: bits encoded.
- **OP_SH_LN**: first bit encoded position.

Used by:

```c
  /* Change INSN's opcode so that the operand given by FIELD has value VALUE.     
     INSN is a riscv_cl_insn structure and VALUE is evaluated exactly once.  */   
  #define INSERT_OPERAND(FIELD, INSN, VALUE) \                                                             
    INSERT_BITS ((INSN).insn_opcode, VALUE, OP_MASK_##FIELD, OP_SH_##FIELD)
```

---
Usage:

```c
INSERT_OPERAND (LN, *ip, imm_expr->X_add_number);
```

---
## Testing GAS
- Input: **\<filename\>.s**
- Output: **\<filename\>.d**
- Error output: **\<filename\>.l**

- Tests are in **gas/testsuite/gas/riscv/**.
- Settings are in **riscv.exp**.

---
For example `cv-hwloop-starti.s`:

```assembly
target:
      cv.starti 0, 0
      cv.starti 1, 3020
      cv.starti 0, 4094
```

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

---
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

---
## Zc*
Group of extensions which define subsets of the existing C extensions (**Zca**, **Zcf**) and new extensions which only contain 16-bit encodings.

There seems to be no tests for any **Zc** instructions.

---
### Zca
All of the existing C extension, **excluding** all 16-bit floating point loads and stores: c.flw, c.flwsp, c.fsw, c.fswsp, c.fld, c.fldsp, c.fsd, c.fsdsp.

It seems like it defines a subset of C with the floating point load/stores removed (**excl.c.f**).

---
### Zcf (RV32 only)
It is the existing set of single precision floating point loads and stores: c.flw, c.flwsp, c.fsw, c.fswsp.

It **requires** Zca.

---
### Zcb
Heavily depends on other extensions.

For example, **c.mul** is only implemented if **M** or **Zmmul** is implemented, **c.sext.b** is only implemented if **Zbb** is implemented.

Here we have loads, stores, zero/sign extend, not and multiply. All but **c.not** are compatible with **RV32** and **RV64**.

---
### Zcmb
This is **incompatible** with the full C-extension, however it is compatible with **F**, **D** and **Zdinx**.

It requires **Zcb**, which requires **Zca**.

---
## Example
**c.lbu**: load unsigned byte, 16-bit encoding: 

`c.lbu rd', uimm(rs1')`

![file:///home/pietra/Pictures/clbu-encoding.png](file:///home/pietra/Pictures/clbu-encoding.png)

| FUNCT3 | --- | rs1 | uimm | rd  | c0  |
| ------ | --- | --- | ---- | --- | --- |
| 100    | 000 | rrr | ii   | ddd | 00  |

---
**cm.lbu**: load unsigned byte, 16-bit encoding:

`cm.lbu rd', uimm(rs1')`

![file:///home/pietra/Pictures/cmlbu-encoding.png](file:///home/pietra/Pictures/cmlbu-encoding.png)

How is it different?

**cm.lbu** can load longer immediates. 

---
**riscv-dis.c** -> In this file there is a function called **print_insn_args** which disassembles a bit stream. All operands must be added to this function. We can use this to ensure that our instructions are being printed out correctly during assembly.

The example on this slide is the branch offset operand, b1. I would like to draw your attention to the EXTRACT macro, which must be defined in the include/opcode directory in the riscv header file. This macro extracts only the bits used for the b1 operand from the bit stream. The other operations are specific for this operand. The immediate field refers to a half word address, because instructions are on half word boundaries. We shift it left 1 bit to turn it into a full byte address and the PC is required as the offset is PC relative.