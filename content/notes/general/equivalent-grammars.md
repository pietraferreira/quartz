---
title:  "Equivalent Grammars"
tags:
  - cs
  - work/engineer-training
programming-languages:
created: 2022-06-16
---
# Equivalent Grammars
---
Equivalent grammars define the same language:

- G
A $\rightarrow$ Ax | y

- G'
A $\rightarrow$ yB
B $\rightarrow$ yB | $\varepsilon$

- L(G) = L(G')

One grammar may be easier to parse than the other. 

Note however that they have very different parse [trees](notes/university/cs2004/trees.md), and if the parse tree reflects the semantic structure for the language then the semantic information is lost.

Parse tree for yxx:
![parse-tree-leftmost-rightmost](notes/images/parse-tree-leftmost-rightmost.png)

## See Also
- [Formal Languages](notes/general/formal-languages.md)
