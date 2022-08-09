---
title: "How to Use Creduce by Ed"
tags:
  - work
  - daily
  - tiger
  - help
programming-languagues:
created: 2021-04-23
---
# How to Use Creduce by Ed
---
As for steps on how to use Creduce:

Take a copy of the failing test in a temporary directory:

```bash
mkdir -p <temporary_dir>
cp <failing_test.c> <temporary_dir>
vim <temporary_dir>/reduce.sh
```

Create a script `reduce.sh`. This contain the command which builds your failing test and triggers the crash. If it crashes then it should return 0, otherwise it should return non-zero:

```
#!/usr/bin/env bash
bsc-elf-clang <options_to_trigger_failure> failing_test.c 2>&1 | grep 'Node emitted out of order'
```

In the above, grep will return 0 if it matches the 'Node emitted out of order' on stderr.

Then to actually use Creduce:

```
cd <temporary_dir>
creduce ./reduce.sh failing_test.c

```

Creduce will repeatedly run ./reduce.sh, then it will continually remove bits from failing_test.c until it comes up with a minimal .c file which reproduces the error .