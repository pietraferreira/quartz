---
title: "2022-08-08-cobra-report"
tags:
  - report
  - work
  - cobra
programming-languagues:
created: 2022-08-08
---
# Assembler Support for the CORE-V Zc\* Extension - Report
---
8th of August 2022

All Zc\* extensions have been tested in the assembler and the testsuite has been both rectified and expanded.

## Activities
### Assembler
- Merged pull requests for Zc\* tests.
- Further refactored Zc\* tests based on the internal pull request reviews.

### Linker
- Continue to verify the correctness of the Zcmt extension instructions.

## Tests Status
- Base PLCT Binutils:

```bash
=== gas Summary ===

# of expected passes		744
# of expected failures		22
# of unsupported tests		5
```

- Refactored PLCT Binutils:

```bash
=== gas Summary ===

# of expected passes		769
# of expected failures		22
# of unsupported tests		5
```

<div style="page-break-after: always;"></div>

- Last week's metrics:

```bash
=== gas Summary ===

# of expected passes		803
# of expected failures		22
# of unsupported tests		5
```

A reduced number of tests was expected as we have merged them together where it made sense. This way we ensure the testsuite is not unnecessarily cluttered.

- All the work can be found here (**cobra-stable**): https://github.com/pietraferreira/corev-binutils-gdb/tree/cobra-stable

## Planned Activities
- Update documentation.
- Incorporate changes in the official CORE-V Binutils repository.
- Provide pre-built version of the toolchain.