---
title: "Building Cobra"
tags:
  - work/cobra
  - help
programming-languages:
project: cobra
created: 2022-08-03
type: cheatsheet
---
# How to build
I have a `cobra` folder which contains:

```bash
❯ ls
binutils  build  install  logs  toolchain
```

Here binutils is my `corev-binutils-gdb` fork, I just renamed it so the build script can find it.

```bash
❯ git status
On branch cobra-stable
Your branch is up-to-date with 'origin/cobra-stable'.
```

Inside **toolchain** I have the `build-all.sh` script.

I can just run: `./build-all.sh` (if that doesn't work make sure you make it executable by running `chmod +x <filename>`).

After that, make sure you have the tools that you built in your PATH, else you have to go in the `bin` folder and run the tool from there, not from anywhere. To do that you run:

```bash
export PATH=$PATH:/home/<....>/cobra/install/bin
```

Then you should be able to run the assembler with:

```bash
riscv32-unknown-elf-as -march=rv32ifd_zcf zc-zcf-flw-upper.s
```

And disassemble with:
```bash
riscv32-unknown-elf-objdump -d a.out -Mno-aliases
```
## Related Notes
- [Cobra Hub](notes/private/work/projects/cobra/cobra-hub.md)