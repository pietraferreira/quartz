---
title:  "C"
tags:
programming-languagues:
  - c
created: 2022-08-15
---
# C
## Declaration vs Definition
A **definition** associates a name with an implementation of that name, either data or code:

 - A definition of a **variable** induces the compiler to reserve some space for that variable and possibly fill that space with a particular value.
- A definition of a **function** induces the compiler to generate code for that function.

A **declaration** tells the compiler that a definition of something exists elsewhere in the program, probably in a different C file. A definition is also a declaration, but it also happens to fill in the particular "elsewhere".