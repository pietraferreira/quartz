---
title: "2022-08-08-cobra-report"
tags:
  - work/cobra
programming-languages:
created: 2022-08-08
project: cobra
type: report
---
# Assembler Support for the CORE-V Zc\* Extension - Report
---
## Completed Last Week
-   Verified Zc* with the GNU assembler (gas).  
-   Testsuite has been rectified and expanded.
-   Merged pull requests for Zc* tests.
-   Further refactored Zc* tests based on internal pull request reviews.

## GNU Assembler Test Results
|                        | Previous | Current | Delta |
| ---------------------- | -------- | ------- | ----- |
| # of expected passes   | 803      | 769     | -34   |
| # of expected failures | 22       | 22      | 0     |
| # of unsupported tests | 5        | 5       | 0     |

- Previous = last week's test results
- Current = this week's test results

The reason for a reduced number of tests this week is because we have consolidated these tests to reduce clutter in the test directory.

- All the work can be found here (**cobra-stable**): https://github.com/pietraferreira/corev-binutils-gdb/tree/cobra-stable

## Plans for Current Work
-   Verify Zc* with the linker.
-   Verify Zc* with GCC inline assembly.  
-   Update documentation.
-   Incorporate changes in the official CORE-V Binutils repository.
-   Provide pre-built version of the toolchain.