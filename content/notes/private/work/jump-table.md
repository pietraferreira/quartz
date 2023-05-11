---
title:  "Jump Table"
tags:
  - work
  - cs-concept/relocations
  - cs-concept/linker
programming-languagues:
created: 2022-08-04
---
# Jump Table
---
It can either be an array of pointers to functions or an array of machine code jump instructions. 

If you have a relatively static set of functions, for example system calls, then you can create a table once and call the functions using a simple index into the array. This means retrieving the pointer and calling a function or jumping to the machine code depending on the type of table used.

The benefits are:
- Indexes are more memory efficient than MC or pointers.
- The index will remain stable and changing the function is as simple as swapping out the function pointer.

It is kind of like a **switch** statement:

```c
JT(int c)
{
   switch(state)
   {
      case 0:
         goto func0label;
      case 1:
         goto func1label;
      case 2:
         goto func2label;
   }
}
```