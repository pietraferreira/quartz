---
title:  "Ambiguous Grammars"
tags:
  - cs-concept
  - work/engineer-training
programming-languagues:
created: 2022-06-16
---
# Ambiguous Grammars
---
- An ambiguous grammar permits more than one parse [tree](notes/university/cs2004/trees.md) for some sentences. For example, parsing **xxx** with the following grammar:

S $\rightarrow$ AA

A $\rightarrow$ x | xx

- But useful:

expression $\rightarrow$ expression binop expression | integer

binop $\rightarrow$ + | - | * | /

- Use rules (e.g. BODMAS) to disambiguate, and/or rewrite:

expression $\rightarrow$ expression termop term | term

termop $\rightarrow$ + | -

term $\rightarrow$ term factorop integer | integer

factorop $\rightarrow$ * | /

## See Also
- [Formal Languages](notes/general/formal-languages.md)
