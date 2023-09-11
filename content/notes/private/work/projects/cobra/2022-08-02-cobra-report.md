---
title: "2022-08-02-cobra-report"
tags:
  - work/cobra
programming-languages:
created: 2022-07-29
project: cobra
type: report
---
# Assembler Support for the CORE-V Zc\* Extension - Report
---
2nd of August 2022

The Zc\* extensions are being carefully tested and the testsuite for Zc\* has been expanded.

## Activities
### Assembler
-  Verified the accuracy of the PLCT Zc* extension tests.
- Expanded tests focusing on verifying the range of instructions supported by each extension.
- Verified and tested the dependencies of each extension.

### Linker
- Started verifying the correctness of the Zcmt extension instructions.

## Tests Status
- Base PLCT Binutils:

```
=== gas Summary ===

# of expected passes		744
# of expected failures		22
# of unsupported tests		5
```

- Refactored PLCT Binutils:

```
=== gas Summary ===

# of expected passes		803
# of expected failures		22
# of unsupported tests		5
```

- All the work can be found here (**cobra-stable**): https://github.com/pietraferreira/corev-binutils-gdb/tree/cobra-stable

## Planned Activities
- Finish verifying the correctness of the Zcmt extension.
- Incorporate changes in the official CORE-V Binutils repository.
- Provide pre-built version of the toolchain.