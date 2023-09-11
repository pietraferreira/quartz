---
title: "Linker Relaxation"
tags:
  - cs/compilers
programming-languages:
created: 2022-07-03
---
How the linker optimises instructions for the compiler by having a second relaxation.

## Example
 ```bash
$ cat test.c
int func(int a) __attribute__((noinline));
int func(int a) {
  return a + 1;
}

int _start(int a) {
  return func(a);
}
$ riscv64-unknown-linux-gnu-gcc test.c -o test -O3
$ riscv64-unknown-linux-gnu-objdump -d -r test.o
test.o:     file format elf64-littleriscv
Disassembly of section .text:

0000000000000000 <func>:
   0:   2505                    addiw   a0,a0,1
   2:   8082                    ret

0000000000000004 <_start>:
   4:   00000317                auipc   ra,0x0
                        4: R_RISCV_CALL func
                        4: R_RISCV_RELAX        *ABS*
   8:   00030067                jr      ra
 ```

Here you can see the relocation `R_RISCV_CALL` between `auipc` and `jalr` (`jr` as shorthand), and it **points** to the symbol that should be the target of the jump, in this case the **func** symbol. You can see how it is paired with the `R_RISCV_RELAX` relocation.

In RISC-V, there are two unconditional control transfer instructions: `jalr`, which jumps to an absolute address as specified by an immediate offset from a register; and `jal`, which jumps to a pc-relative offset as specified by an immediate. The only difference between the `auipc+jalr` pair and `jal` are that the pair can only address a 21-bit signed offset from the current PC, and that the `jal` instruction is half the size.

The compiler doesn't know if the offset between `_start` and `func` will fit within that range, so it is forced to generate the longer call. Because we don't want to impose this cost in cases where it is not necessary, we optimise it in the linker. This is a result of a linker relaxation:

```bash
$ riscv64-unknown-linux-gnu-objdump -d -r test
test:     file format elf64-littleriscv

Disassembly of section .text:

0000000000010078 <func>:
   10078:       2505                    addiw   a0,a0,1
   1007a:       8082                    ret

000000000001007c <_start>:
   1007c:       ffdff06f                j       10078 <func>
```

As you can see, the linker knows that the call from `_start` to `func` fits within the 21-bit offset of the `jal` instruction and converts it to a single instruction.

## Source
- All Aboard, Part 3: Linker Relaxation in the RISC-V Toolchain ([here](https://www.sifive.com/blog/all-aboard-part-3-linker-relaxation-in-riscv-toolchain))

---
## Related Notes
- [2022-07-03 - Relaxation](notes/private/work/2022-07-03-relaxation.md)
- [Testing Relaxation - COREV](notes/private/work/testing-relaxation-corev.md)
- [Fixups](notes/general/fixups.md)