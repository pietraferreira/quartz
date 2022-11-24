---
title:  "Stack"
tags:
  - cs-concept
  - engineer-training
  - lists
programming-languagues:
created: 2022-06-05
---
# Stack
---
- Last in, first out (**LIFO**), simple [list](notes/general/lists.md) works well for this. 
    - Think of a stack of plates.
    - The add and remove operations are called **push** and **pop**.

All insertions and deletions take place at one end.

- To add an item to the stack you **push** it onto the top.
- To remote an item from the top you **pop** it.

In the example below the top of the stack is on the right hand side:

![Screenshot 2022-10-24 at 12.17.29](notes/images/Screenshot%202022-10-24%20at%2012.17.29.png)


## In depth
The **stack** is a defined area in **RAM**. Usually in RAM's lower area above the global and static variables. The contents are accessed via the **stack pointer**, set to the upper end of the stack during initialisation. During execution, the stack grows down to the lower memory addresses.

Modern memory protections (**DEP**/**ASLR**) would prevent the damage cause by buffer overflows. DEP (Data Execution Prevention), marked regions of memory "Read-Only". The read-only memory regions is where some user-input is stored (Example: The Stack), so the idea behind DEP was to prevent users from uploading shellcode to memory and then setting the instruction pointer to the shellcode. Hackers started utilising ROP (Return Oriented Programming) to get around this, as it allowed them to upload the shellcode to an executable space and use existing calls to execute it. With ROP, the attacker needs to know the memory addresses where things are stored, so the defense against it was to implement ASLR (Address Space Layout Randomisation) which randomises where everything is stored making ROP more difficult.

Users can get around ASLR by leaking memory addresses, but this makes exploits less reliable and sometimes impossible. For example the ["Freefloat FTP Server"](https://www.exploit-db.com/exploits/46763) is trivial to exploit on Windows XP (before DEP/ASLR). However, if the application is ran on a modern Windows operating system the buffer overflow exists but it is currently non-trivial to exploit due to DEP/ASLR because there's no known way to leak memory addresses.

### Stack Frames
The **base pointer** points to the beginning (base) of the stack in contrast to the **stack pointer**, which points to the top.

As the stack grows it is divided into regions called **Stack Frames**, which allocate the required memory in the stack for the corresponding function. It defines a frame with the beginning (**EBP**) and the end (**ESP**) that is pushed onto the stack when a function is called.

Since the memory is built on a **LIFO** data structure, the first step is to store the **previous EBP** position on the stack, which can be restored after the function completes.

#### Prologue
```bash
(gdb) disas bowfunc 

Dump of assembler code for function bowfunc:
   0x0000054d <+0>:	    push   ebp       # <---- 1. Stores previous EBP
   0x0000054e <+1>:	    mov    ebp,esp   # <---- 2. Creates new Stack Frame
   0x00000550 <+3>:	    push   ebx
   0x00000551 <+4>:	    sub    esp,0x404 # <---- 3. Moves ESP to the top
   <...SNIP...>
   0x00000580 <+51>:	leave  
   0x00000581 <+52>:	ret    
```

#### Epilogue
```bash
(gdb) disas bowfunc 

Dump of assembler code for function bowfunc:
   0x0000054d <+0>:	    push   ebp       
   0x0000054e <+1>:	    mov    ebp,esp   
   0x00000550 <+3>:	    push   ebx
   0x00000551 <+4>:	    sub    esp,0x404 
   <...SNIP...>
   0x00000580 <+51>:	leave  # <----------------------
   0x00000581 <+52>:	ret    # <--- Leave stack frame
```

### Stack API
A basic interface is:

```java
public interface StringStack {
  StringStack();
  void push(String item);
  String pop();
  boolean isEmpty();
  // optional
  int size();
}
```



## Applications
- Reverse a string  
- Undo mechanism in text editors  
- Web pages navigation in a web browser  
- Compilers – syntax evaluation