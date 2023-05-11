---
title: "Assembler Support for the RISC-V Zc* Extension - Report"
tags:
  - work
  - work/report
programming-languagues:
created: 2022-08-22
---
# Assembler Support for the RISC-V Zc\* Extension - Report

We've provided an interim release of the pre-built binaries and any support necessary to use them. We are now working on testing the jump table so we can incorporate the changes in the official CORE-V Binutils/GCC repositories.

We aim to make our final release by Friday the 26th.

## Completed Last Week
- Provided an interim release of pre-built binaries and support necessary to use them.
- Moved the Zcmt jump table from the `.text` section to the `.rodata` section.
- Fixed version numbers associated with Zc\* in both GAS and GCC.
- Fixed invalid operands being accepted for `cm.lbu`, `cm.lhu`, `cm.lh`, `cm.sb`, and `cm.sh`.
- Fixed binary incompatibility issue involving `lbu` and related instructions being relaxed to custom extension encodings.
- Update CSR tests to account for JVT.

## GNU Assembler Test Results
|                        | Previous | Current | Delta |
| ---------------------- | -------- | ------- | ----- |
| # of expected passes   | 769      | 769     | 0     |
| # of expected failures | 22       | 22      | 0     |
| # of unsupported tests | 5        | 5       | 0     | 

- All the work can be found here (**cobra-stable**): https://github.com/pietraferreira/corev-binutils-gdb/tree/cobra-stable

## GCC Test Results
|                          | Previous | Current | Delta |
| ------------------------ | -------- | ------- | ----- |
| # of expected passes     | 564      | 582     | +18   | 
| # of unexpected failures | 22       | 0       | -22   |
| # of unsupported tests   | 9        | 0       | -9    |

Note that the total number of tests has remained unchanged, however more expected passes are present now as we fixed those tests resulting in unexpected failure.

- All the work can be found here (**cobra-stable**): https://github.com/pietraferreira/corev-gcc/tree/cobra-stable

## Plans for Current Work
- Complete testing of linker.
- Incorporate all changes in the official CORE-V Binutils/GCC repositories.
- Make final release.
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
