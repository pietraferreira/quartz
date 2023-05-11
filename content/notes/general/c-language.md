---
title:  "C"
tags:
  - work
programming-languagues:
  - c
created: 2022-08-15
---
## Declaration vs Definition
A **definition** associates a name with an implementation of that name, either data or code:

 - A definition of a **variable** induces the compiler to reserve some space for that variable and possibly fill that space with a particular value.
- A definition of a **function** induces the compiler to generate code for that function.

A **declaration** tells the compiler that a definition of something exists elsewhere in the program, probably in a different C file. A definition is also a declaration, but it also happens to fill in the particular "elsewhere".

For **variables**, the definition is split into two sorts:

- **global**: exist for the whole lifetime of the program ("static extent"), and are usually accessible in lots of different functions.
- **local**: only exist while a particular function is being executed ("local extent") and are only accessible within that function.

Couple special cases:

- **static local variables** are actually global variables, because they exist for the lifetime of the program, even though they are only visible inside a single function.
- **static global variables** are the same, even though they can only be accessed by the functions in the particular file where they were defined.

Making a function **static** just narrows down the number of places that are able to refer to that function by name.

We can use **malloc** or **new** to store information in memory that is dynamically allocated. Because we can't refer to the space allocated by name, we use pointers instead. The memory can be reallocated with **free** or **delete**.

```c
/* This is the definition of a uninitialized global variable */
int x_global_uninit;

/* This is the definition of a initialized global variable */
int x_global_init = 1;

/* This is the definition of a uninitialized global variable, albeit
 * one that can only be accessed by name in this C file */
static int y_global_uninit;

/* This is the definition of a initialized global variable, albeit
 * one that can only be accessed by name in this C file */
static int y_global_init = 2;

/* This is a declaration of a global variable that exists somewhere
 * else in the program */
extern int z_global;

/* This is a declaration of a function that exists somewhere else in
 * the program (you can add "extern" beforehand if you like, but it's
 * not needed) */
int fn_a(int x, int y);

/* This is a definition of a function, but because it is marked as
 * static, it can only be referred to by name in this C file alone */
static int fn_b(int x)
{
  return x+1;
}

/* This is a definition of a function. */
/* The function parameter counts as a local variable */
int fn_c(int x_local)
{
  /* This is the definition of an uninitialized local variable */
  int y_local_uninit;
  /* This is the definition of an initialized local variable */
  int y_local_init = 3;

  /* Code that refers to local and global variables and other
   * functions by name */
  x_global_uninit = fn_a(x_local, x_global_init);
  y_local_uninit = fn_a(x_local, y_local_init);
  y_local_uninit += fn_b(z_global);
  return (y_global_uninit + y_local_uninit);
}
```
## Dissecting an Object File
We can use `nm` to look at the file above:

```bash
Symbols from c_parts.o:

Name                  Value   Class        Type         Size     Line  Section

fn_a                |        |   U  |            NOTYPE|        |     |*UND*
z_global            |        |   U  |            NOTYPE|        |     |*UND*
fn_b                |00000000|   t  |              FUNC|00000009|     |.text
x_global_init       |00000000|   D  |            OBJECT|00000004|     |.data
y_global_uninit     |00000000|   b  |            OBJECT|00000004|     |.bss
x_global_uninit     |00000004|   C  |            OBJECT|00000004|     |*COM*
y_global_init       |00000004|   d  |            OBJECT|00000004|     |.data
fn_c                |00000009|   T  |              FUNC|00000055|     |.text
```

- **U**: undefined reference.
- **t** or **T**: indicates where code is defined, indicating whether the function is local to this file (**t**) or not (**T**) (`.text`).
- **d** or **D**: initialised global variable, **d** meaning local and **D** global (`.data`).
- **b** is for static/local **uninitialised** global variables, and **B** and **C** if it is not static/local (`.bss`).