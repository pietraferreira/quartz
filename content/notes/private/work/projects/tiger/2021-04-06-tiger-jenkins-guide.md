---
title: "2021-04-06 - Tiger Jenkins Guide"
tags:
  - work/tiger
programming-languages:
created: 2021-04-06
project: tiger
---
# 2021-04-06 - Tiger Jenkins Guide
---
go to main wiki

jenkins

tiger-user-branches

go to build with parameters

choose my branch

riscv32-clang-gcc-testing

imc ilp 32

bootstrap-sources -> clones all sources

we might end up with slightly different test numbers

taken patches we had and rebased them from where we had in the old GCC gittree to the new one, based on proper git GCC tree

fork the repo and add new remote and open PR agaisnt it (all-fixes-rebase)

so you need to fork this: https://git.embecosm.com/simon/riscv32-clang-gcc-testing

then run the file `bootstrap-sources.sh` which will clone all the other repos for you

run `build-riscv32-clang.sh` (you might need to specify a newer version of CMake)

then run `run-tests.py`

turning failures into unsupported

from 0 to 117 then to 277 then last 15

```
/* { dg-require-effective-target gcc_frontend } */

gcc.c-torture/compile/pr25224.c funswitch-loops
gcc.dg/loop-unswitch-4.c funswitch-loops
pr92115.c funswitch-loops
pr92591-1.c -fno-dce -fno-sched-pressure -fmodulo-sched -fweb -fno-ivopts

57 Executing on host: riscv32-unknown-elf-clang /home/pietraferreira/riscv32-clang-gcc-testing/gcc-for-llvm-testing/gcc/testsuite/gcc.dg/pr92591-1.c  -march=rv32imc -mabi=ilp32     -O2 -fmodulo-sched -fweb -fno    -dce -fno-ivopts -fno-sched-pressure -fno-tree-loop-distribute-patterns --param sms-dfa-history=1 -S   -o pr92591-1.s    (timeout = 300)
58 spawn -ignore SIGHUP riscv32-unknown-elf-clang /home/pietraferreira/riscv32-clang-gcc-testing/gcc-for-llvm-testing/gcc/testsuite/gcc.dg/pr92591-1.c -march=rv32imc -mabi=ilp32 -O2 -fmodulo-sched -fweb -fno-dc    e -fno-ivopts -fno-sched-pressure -fno-tree-loop-distribute-patterns --param sms-dfa-history=1 -S -o pr92591-1.s
59 clang-13: ^[[0;1;31merror: ^[[0m^[[1munknown argument: '-fno-dce'^[[0m
60 clang-13: ^[[0;1;31merror: ^[[0m^[[1munknown argument: '-fno-sched-pressure'^[[0m
61 clang-13: ^[[0;1;31merror: ^[[0m^[[1munknown argument: '-fno-tree-loop-distribute-patterns'^[[0m
62 clang-13: ^[[0;1;35mwarning: ^[[0m^[[1moptimization flag '-fmodulo-sched' is not supported [-Wignored-optimization-argument]^[[0m
63 clang-13: ^[[0;1;35mwarning: ^[[0m^[[1moptimization flag '-fweb' is not supported [-Wignored-optimization-argument]^[[0m
64 clang-13: ^[[0;1;35mwarning: ^[[0m^[[1moptimization flag '-fno-ivopts' is not supported [-Wignored-optimization-argument]^[[0m
65 compiler exited with status 1
66 FAIL: gcc.dg/pr92591-1.c (test for excess errors)

gcc summary:

# of expected passes		32938
# of unexpected failures	6964
# of unexpected successes	10
# of expected failures		222
# of unresolved testcases	1898
# of unsupported tests		6278

here area couple of regression failures that you might "like":
test gcc.c-torture/execute/960416-1.c:

clang-11: /home/jenkins/workspace/tiger/llvm-project/llvm/lib/CodeGen/SelectionDAG/LegalizeIntegerTypes.cpp:1438: bool llvm::DAGTypeLegalizer::PromoteIntegerOperand(llvm::SDNode*, unsigned int): Assertion `Res.getValueType() == N->getValueType(0) && N->getNumValues() == (IsStrictFp ? 2 : 1) && "Invalid operand expansion"' failed.

/* { dg-require-effective-target gcc_frontend } */
/* { dg-require-effective-target builtin_setjmp_longjmp } */
/* { dg-require-effective-target not_llvm } */
```
> [!failure]- Failure 
>   Error: There is another generation process
>   
>   - plugin:obsidian-textgenerator-plugin:56949 TextGenerator.eval
>     plugin:obsidian-textgenerator-plugin:56949:31
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>   - plugin:obsidian-textgenerator-plugin:62 __async
>     plugin:obsidian-textgenerator-plugin:62:10
>   
>   - plugin:obsidian-textgenerator-plugin:56935 TextGenerator.generate
>     plugin:obsidian-textgenerator-plugin:56935:12
>   
>   - plugin:obsidian-textgenerator-plugin:58440 AutoSuggest.eval
>     plugin:obsidian-textgenerator-plugin:58440:52
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>  
