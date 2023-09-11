---
title: "Stack-overflow Prevention Techniques and Mechanisms"
tags:
  - cs/hacking
  - cs/hacking/stack-overflow
  - cs/hacking/htb
programming-languages:
created: 2022-07-12
---
# Stack-overflow Prevention Techniques and Mechanisms
---
Security mechanisms:

- Canaries
- Address Space Layout Randomisation ([](notes/hacking/cpu-architecture.md#ASLR))
- Data Execution Prevention (DEP)

## Canaries
They are known values written to the stack between buffer and control data to detect buffer overflows.

In case of a buffer overflow, the canary would be overwritten first and the operating system checks during runtime if the canary is present and unaltered.

## Address Space Layout Randomisation (ASLR)
It makes it difficult to find target addresses in memory. The operating system uses it to hide the relevant memory addresses from us.

To disable:

```bash
sudo su
echo 0 > /proc/sys/kernel/randomize_va_space
cat /proc/sys/kernel/randomize_va_space
0
```

Then we can compile into a 32-bit ELF binary:

```bash
gcc bow.c -o bow32 -fno-stack-protector -z execstack -m32
file bow32 | tr "," "\n"
```

## Data Execution Prevention (DEP)
It is a feature in Windows XP and later in Service Pack 2 (SP2). It monitors programs during execution to ensure that they access memory areas cleanly.

It terminates the program if a program attempts to call or access the program code in an unauthorised manner.