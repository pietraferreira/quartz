# Assembler Support for the CORE-V Zc\* Extension - Report

We currently have a working toolchain with verified assembler. We had planned to provide the build today, however we have a remaining bug to fix. We will provide the pre-built binaries tomorrow.

## Completed Last Week
- Verified and added Zc\* tests for GCC inline assembly as to check if the `-march` is being accepted.

No further testing of GCC is planned.

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
| # of expected passes     | 402      | 564     | +162  |
| # of unexpected failures | 0        | 22      | +22   |
| # of unsupported tests   | 0        | 9       | +9    |

The results reflect only the `Zc*` test results, not the full the testsuite. The 22 failures represent a problem in one file which is tested in various ways.

- All the work can be found here (**cobra-stable**): https://github.com/pietraferreira/corev-gcc/tree/cobra-stable

## Plans for Current Work
- Complete testing of linker.
-  Incorporate all changes in the official CORE-V Binutils/GCC repositories.
- Provide final pre-built version of the toolchain.