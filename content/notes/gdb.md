---
title: "GDB"
tags:
  - work
  - cs-concept
programming-languagues:
created: 2022-06-05
---
# GDB
---
All the basic commands can be found [here](notes/useful-commands-dump.md#GDB).

## Remote Debugging
gdb can be used to debug programs running on another machine. On the remote machine, a program called `gdbserver` is run, which responds and acts on the requests made by gdb on the client machine. 

Remote debugging can be more convenient in some cases; for example, it enables inspecting the program on the machine where the bug has occurred instead of trying to replicate the scenario on a dev machine. This can save a lot of time. Remote debugging is quite popular among mobile app developers, where the app runs on a mobile device, while the debugger runs on the development machine.

The [_Remote debugging with GDB_ blog post](https://developers.redhat.com/blog/2015/04/28/remote-debugging-with-gdb) can get you started in case you are interested. The [gdbserver(1) - Linux manual page](https://man7.org/linux/man-pages/man1/gdbserver.1.html) also offers great documentation. The official [RISC-V binutils repository](https://github.com/riscv-collab/riscv-binutils-gdb) has the `gdbserver` source code.

## Assembly Syntax
```bash
student@nix-bow:~$ gdb -q bow32

Reading symbols from bow...(no debugging symbols found)...done.
(gdb) disassemble main

Dump of assembler code for function main:
   0x00000582 <+0>: 	lea    0x4(%esp),%ecx
   0x00000586 <+4>: 	and    $0xfffffff0,%esp
   0x00000589 <+7>: 	pushl  -0x4(%ecx)
   0x0000058c <+10>:	push   %ebp
   0x0000058d <+11>:	mov    %esp,%ebp
   0x0000058f <+13>:	push   %ebx
   0x00000590 <+14>:	push   %ecx
   0x00000591 <+15>:	call   0x450 <__x86.get_pc_thunk.bx>
   0x00000596 <+20>:	add    $0x1a3e,%ebx
   0x0000059c <+26>:	mov    %ecx,%eax
   0x0000059e <+28>:	mov    0x4(%eax),%eax
   0x000005a1 <+31>:	add    $0x4,%eax
   0x000005a4 <+34>:	mov    (%eax),%eax
   0x000005a6 <+36>:	sub    $0xc,%esp
   0x000005a9 <+39>:	push   %eax
   0x000005aa <+40>:	call   0x54d <bowfunc>
   0x000005af <+45>:	add    $0x10,%esp
   0x000005b2 <+48>:	sub    $0xc,%esp
   0x000005b5 <+51>:	lea    -0x1974(%ebx),%eax
   0x000005bb <+57>:	push   %eax
   0x000005bc <+58>:	call   0x3e0 <puts@plt>
   0x000005c1 <+63>:	add    $0x10,%esp
   0x000005c4 <+66>:	mov    $0x1,%eax
   0x000005c9 <+71>:	lea    -0x8(%ebp),%esp
   0x000005cc <+74>:	pop    %ecx
   0x000005cd <+75>:	pop    %ebx
   0x000005ce <+76>:	pop    %ebp
   0x000005cf <+77>:	lea    -0x4(%ecx),%esp
   0x000005d2 <+80>:	ret    
End of assembler dump.
```

The hexadecimal numbers in the first column represent the **memory addresses**. The plus sign (**+**) show the **address jumps** in memory bytes. We also have the **assembler instructions** (**mnemonics**) with registers and their **operation suffixes**. 

The current syntax is **AT&T**, which we can recognise by the **%** and **$** characters.

| Memory Address | Address Jumps | Assembler Instruction | Operation Suffixes |
| -------------- | ------------- | --------------------- | ------------------ |
| 0x00000582     | <+0>:         | lea                   | 0x4(%esp),%ecx     |
| 0x00000586     | <+4>:         | and                   | $0xfffffff0,%esp   |
| ...            | ...           | ...                   | ...                   |

We can change to the **Intel** syntax:

```bash
(gdb) set disassembly-flavor intel
(gdb) disassemble main

Dump of assembler code for function main:
   0x00000582 <+0>:	    lea    ecx,[esp+0x4]
   0x00000586 <+4>:	    and    esp,0xfffffff0
   0x00000589 <+7>:	    push   DWORD PTR [ecx-0x4]
   0x0000058c <+10>:	push   ebp
   0x0000058d <+11>:	mov    ebp,esp
   0x0000058f <+13>:	push   ebx
   0x00000590 <+14>:	push   ecx
   0x00000591 <+15>:	call   0x450 <__x86.get_pc_thunk.bx>
   0x00000596 <+20>:	add    ebx,0x1a3e
   0x0000059c <+26>:	mov    eax,ecx
   0x0000059e <+28>:	mov    eax,DWORD PTR [eax+0x4]
<SNIP>
```

Or set it as default:

```bash
echo 'set disassembly-flavor intel' > ~/.gdbinit
```

Another difference between **Intel** and **AT&T** syntax is the order. For example the instruction:

```bash
0x0000058d <+11>:	mov    ebp,esp
```

With **Intel** syntax:

| Instruction | Destination | Source |
| ----------- | ----------- | ------ |
| mov         | **ebp**     | esp    |

With **AT&T** syntax:

| Instruction | Destination | Source   |
| ----------- | ----------- | -------- |
| mov         | %esp        | **%ebp** |

## See Also
- [Debugging Techniques](notes/debugging-techniques.md)
- [Stack Overflow](notes/htb-stack-based-overflow-linux.md)