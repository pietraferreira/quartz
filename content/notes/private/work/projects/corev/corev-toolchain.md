---
title:  "CORE-V Toolchain"
tags:
  - work/corev
programming-languages:
created: 2022-06-05
project: corev
---
CORE-V is a family of RISC-V cores developed by the OpenHW Group.

The first two projects within the OpenHW Group’s CORE-V family of RISC-V cores are the **CV32E40P** and **CVA6**.

Currently, **two variants** of the CV32E40P are defined: the **CV32E40X** and **CV32E40S**. The OpenHW Group’s work builds on several RISC-V open-source projects, particularly the **RI5CY** and **Ariane** projects from PULP-Platform. 

**CV32E40P** is a derivation of the **RI5CY** project, and CVA6 is derived from Ariane.

In addition, the verification environment for CORE-V leverages previous work done by **lowRISC** and others for the Ibex project, which is a fork of the PULP-Platform’s zero-riscy core.

## Repositories
- binutils-gdb - [GitHub](https://github.com/openhwgroup/corev-binutils-gdb) (development)
- GCC - [GitHub](https://github.com/openhwgroup/corev-gcc) (development)
- CORE-V docs - [GitHub](https://github.com/openhwgroup/core-v-sw)

### To build
- binutils-gdb-sim - [GitHub](https://github.com/embecosm/riscv-binutils-gdb.git) (spc-cgen-sim-rve)
- newlib - [GitHub](https://mirrors.git.embecosm.com/mirrors/newlib-cygwin.git) (master)

## `-march` Options
All instructions must work for the xcorev -march option as well as their specific option:

- Hardware Loop: xcorevhwlp1p0 (or 1p1 but not sure)
- Multiply-Accumulate: xcorevmac
- Post-Increment and Register-Indexed Load/Store: xcorevpostinc
- Direct Branches: xcorevbi
- General ALU Operations: xcorevalu

## Environment
```bash
#!/usr/bin/env bash

export PULP_RISCV_GCC_TOOLCHAIN=/home/pietraferreira/corev/install/
export DEJAGNU=/home/pietraferreira/corev/riscv-toolchain-scripts/site.exp
export PATH=/home/pietraferreira/corev/install/bin:$PATH
source "/home/pietraferreira/corev/pulp-sdk/configs/pulp-open-cv32e40p.sh"
```

## Resources
- [Docs](https://core-v-docs-verif-strat.readthedocs.io/en/latest/intro.html)
- [Assembly Test Example](notes/private/work/projects/corev/assembly-test-example-corev.md)
- [CORE-V Relocations](notes/private/work/corev-relocations.md)