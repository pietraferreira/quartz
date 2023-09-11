---
title: "Testing Relaxation - COREV" 
tags:
  - work/corev
programming-languages:
created: 2020-09-07
project: corev
---
`readelf -r` on .o files -> looks for particular relocations -> instead of -a
it checks if we're getting the right relocation

Construct a file that we know it is going to relax, so you could create an assembly file with a cv.start and a reference to something that it is away and put in between stuff that we know it will get relaxed away. So something that will force the loop to shorten.

- Things get shorten from 32bits to 16bits.
- What we need to do is: add x3, x4, x5.
- They are all register we can do a compressed add.
- Need to see what the compressed instructions are find a comp instruction that can only sort out at relaxation time how can we force something to relax.

- So that we know that the file is being shorten

- Create cv.start and put the label (L2) and put the instruction in between so it will assemble thinking it has 4bits but knowing it has to relax down to 2bits.

Example:

```assembly
      cv.starti   0,L2
      lui         x3,const ; materialize const to 0, linker will relax
      addi        x3,x3,50 ; (doesnt know what const is)
L2:   nop
```

- Assemble this then link it, linker command line you can set constant to 0 in ld it could be an immediate as well.

Normal call:

```assembly
auipc   ra(register A),100(const)
jalr    ra
```

The linker, because it has the info about the dist between the functions can fold that down to just a 'jal' instruction.

- So it takes a program counter, add 100 to it and stores in ra. 

``` assembly
func: ret
;; the actual test code
      cv.starti   0,L2
      auipc       ra,ret ; linker, will fold these two instructions
      jalr        ra     ; down to jal ra, func 
L2:   nop
```

- Two 32bit instructions, but we will end up with them folded down to a single jal instruction, causing the relocation.

- In .d file, look at disassembly and make sure it got reduced as expected.

RELU12
RELU5