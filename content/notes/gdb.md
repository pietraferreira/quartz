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
All the basic commands can be found [[useful-commands-dump#GDB|here]].

## Remote Debugging
gdb can be used to debug programs running on another machine. On the remote machine, a program called `gdbserver` is run, which responds and acts on the requests made by gdb on the client machine. 

Remote debugging can be more convenient in some cases; for example, it enables inspecting the program on the machine where the bug has occurred instead of trying to replicate the scenario on a dev machine. This can save a lot of time. Remote debugging is quite popular among mobile app developers, where the app runs on a mobile device, while the debugger runs on the development machine.

The [_Remote debugging with GDB_ blog post](https://developers.redhat.com/blog/2015/04/28/remote-debugging-with-gdb) can get you started in case you are interested. The [gdbserver(1) - Linux manual page](https://man7.org/linux/man-pages/man1/gdbserver.1.html) also offers great documentation. The official [RISC-V binutils repository](https://github.com/riscv-collab/riscv-binutils-gdb) has the `gdbserver` source code.

## See Also
- [[debugging-techniques|Debugging Techniques]]