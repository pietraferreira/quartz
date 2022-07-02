---
title: "Useful Commands Dump"
tags:
  - help
  - work
---
# Useful Commands Dump
---

Well... where I dump any useful commands I find and them hopefully I'll categorise them... eventually...

## Terminal
* Change file extension of all files:
```bash
for file in *.txt; do mv "$file" "${file%.txt}.md"; done
```

* If Git is hanging after total is because:
```bash
git config --global http.postBuffer 157286400
```

## GDB
| Command                      | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `gdb --args <binary> <args>` | Start the program with an argument list.                         |
| `b FileName:linenum`         | For setting a breakpoint.                                        |
| `bt`                         | For getting backtrace.                                           |
| `thread apply all bt`        | For getting the backtrace of all threads.                        |
| `p variableName`             | For printing the value of a variable/object.                     |
| `up`                         | For going up the stack frame.                                    |
| `down`                       | For going down the stack frame.                                  |
| `l`                          | For listing source lines of code around the current stack frame. |
| `disassemble`                | For showing the assembly code of the current function.           |
| `n`                          | For executing the next source instruction.                       |
| `si`                         | For executing the next machine instruction.                      |
| `q`                          | To quit the debugger.                                            |
| `r`                          | To run the program.                                              |

The docs are [here](https://www.gnu.org/software/gdb/documentation/).
More info on [GDB](notes/gdb.md).

## The dump of dumps

### BSC/Tiger related
```bash
runtest --tool=gcc --tool_exec=bsc-elf-clang  --tool_opts= --directory=${HOME}/tiger/gcc-for-llvm-testing/gcc/testsuite/gcc.target --srcdir=${HOME}/tiger/gcc-for-llvm-testing/gcc/testsuite --target_board=bsc-embdebug --target=bsc-elf "bsc.exp=bsc/or.c"
```

```bash
export PATH=${HOME}/riscv32-clang-gcc-testing/install/bin:$PATH
export BSC_TIMEOUT=300
export BSC_TRIPLE=bsc-elf
export BSC_SIM_COMMAND=bsc-run
export BSC_SIM_FLAGS=
export DEJAGNU=${HOME}/tiger/toolchain/site.exp
export TOOLDIR=${HOME}/tiger/toolchain/
```

```bash
bsc-elf-gdb -ex 'target remote | embdebug --soname bsc --stdin' -ex 'break exit' -ex 'break abort' test2.exe
```

```bash
llvm-objdump -d <testobject>
```

```bash
bsc-run --max-steps=200 --trace-inst --trace-regs --trace-stack ds.exe 2>&1 | tee output.txt
```

```bash
pietraferreira@tom:~/insn-test-tiger$ bsc-elf-gdb -ex 'target remote | embdebug --soname bsc --stdin' -ex 'break exit' -ex 'break abort' sub.exe
```

Ask the front end to produce unoptimised LLVM IR:
```bash
bsc-elf-clang -Wall -O0 -S -emit-llvm --target=bsc 20180309-1.c -o 20180309-1.ll
```

Compile but stop at assembly:
```bash
llc --debug -mtriple=bsc 20180309-1.ll -o 20180309-1.s
```

```bash
llvm-objdump -d sim-test.exe
```

```bash
bsc-elf-gdb sim-test.exe -ex "target remote | embdebug --soname sysc-bsc --vcd=trace-do --debug=0x00070000 --clk-mhz=1 --sim-cycles=10000 --stdin" -ex load -ex c -ex detach -ex quit 2>&1 | tee sim-test.log
```

## Website URL Fix
```bash
grep -rl 'images' . | sort | uniq | xargs perl -e "s/assets/assets\/engineer-training/" -pi
```