---
title:  "Equivalent Grammars"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
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

Note however that they have very different parse [trees](trees.md), and if the parse tree reflects the semantic structure for the language then the semantic information is lost.

Parse tree for yxx:
![](images/parse-tree-leftmost-rightmost.png)

## See Also
- [Formal Languages](formal-languages.md)
