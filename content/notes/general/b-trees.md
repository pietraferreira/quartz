---
title:  "B-Trees"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-05
---
# B-Trees
---
A B-tree of order **m** has the following properties:
- every node has at most **m** children.
- every non-leaf node (except root) has at least **m/2** children.
- the root has at least 2 children if its not a leaf.
- a non-leaf node with **k** children contains **k**-1 data elements.
- all leaves appear in the same level and carry no information.

## Sorted B-Trees
If the data elements of a node are $a_1$, $a_2$, ..., $a_n$, then:
* all elements in the leftmost subtree will be **less than** $a_1$.
* all elements in the rightmost subtree will be **greater than** $a_n$.
* all elements in the subtree between $a_{k-1}$ and $a_k$ will be **greater than** $a_{k-1}$ and **less than** $a_k$.

**2-3 trees are B-trees of order 3**.

B-trees are useful where data is in large blocks, hence databases and filesystems.