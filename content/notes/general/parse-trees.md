---
title: "Parse Trees"
tags:
  - cs
  - work/engineer-training
created: 2022-06-16
---
![parse-tree-example](notes/images/parse-tree-example.png)

## Grammatically 
$S \rightarrow A | B$
$A \rightarrow A\ x | y$
$B \rightarrow z$

- Parse tree for *yxxz*:
![parse-tree](notes/images/parse-tree.png)

### Parsing Sentences
Apply successive productions.

Consider parsing the sentence **yz** using this grammar:

S $\rightarrow$ AB
A $\rightarrow$ A x|y
B $\rightarrow$ z

We use three productions:

S $\rightarrow$ AB  (giving sentential form AB)
A $\rightarrow$ y  (giving sentential form yB)
B $\rightarrow$ z  (giving the sentence yz)

This is a **leftmost derivation**.

We could instead have used:

S $\rightarrow$ AB (giving the sentential form AB)
B $\rightarrow$ z (giving the sentential form Az)
A $\rightarrow$ y (giving the sentential form yz)

This is a **rightmost derivation**.

Whilst the resulting parse tree is the same, the order of the the derivation governs the order in which the language structures appear in the parse tree as it is built.

## C Representation
```c
struct node {
  int nodetype;
  struct node *field1;
  struct node *field2;
  struct node *field3;
  struct node *field4;
  struct node *field5;
}
```

- `nodetype` can be defined as small constants:
```c
#define NT_PROGRAM 1
#define NT_FUNCTION_LIST 2
#define NT_FUNCTION 3
...
```

### Simplification
No need for a **program** node, use `function_list`.

Avoid lexical detail, for example:

integer $\rightarrow$ digit | integer digit
digit      $\rightarrow$ 0 | 1 | ... | 8 | 9

Just add a appropriate fields to `struct` node:
```c
struct nnode {
  int nodetype;
  struct node *field1;
  ...
  struct node *field5;
  char *name; // variables and text
  int value;  // integer constants
}
```

## DAGs for Parse Trees
A DAG (Directed Acyclic Graph) can allow us to share common parse tree structures. It saves space and identifies possible common sub-expressions for optimisation.

However, they are hard to construct and syntactic identify does not mean semantic identity.

## See Also
- [Formal Languages](notes/general/formal-languages.md)
- [Trees](notes/university/cs2004/trees.md)
