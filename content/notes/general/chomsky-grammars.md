---
title: "Chomsky Grammars"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-16
---
# Chomsky Grammars
---
Type 0 (free) grammars:
- Productions of the form u $\rightarrow$ v, where:
    - **u**, **v** are arbitrary string in **V**.
    - **u** is non-null.

Type 1 (context-sensitive) grammars:
- Productions of the form uXw $\rightarrow$ uvw, where:
- X $\exists$ N
- **u**, **v**, **w** are arbitrary strings in V.
- v is non-null.

Type 2 (context-free) grammars:
- Productions of the form X $\rightarrow$ v, where:
- X $\exists$ N
- v is an arbitrary string in V

Type 3 (regular or free) grammars:
- Productions of the form X $\rightarrow$ a or X $\rightarrow$ aY, where:
- X, Y $\exists$ N
- a $\exists$ T

All **Type 2** grammars can be parsed, but there are some subsets, commonly used for programming language definition - which can be parsed particularly efficiently.

Although **Type 3** grammars are not powerful enough for complete languages, they are widely used to define the lexical elements of a programming language. They can be parsed very efficiently, in particular by a **finite state machine**.

## See Also
- [Formal Languages](notes/general/formal-languages.md)