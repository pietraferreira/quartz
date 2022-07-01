---
title:  "Pimm's Algorithm"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-06
---
# Pimm's Algorithm
---
It is a [[minimum-spanning-subtree|minimum spanning subtree]] algorithm.

It scales well, fast with dense [[graphs]].

It has a [[compiler-optimisation#Performance|performance]] of $O_{E\ log\ N}$ with [[binary-heap|binary heap]] and $O_{E\ +\ log\ N}$ with Fibonacci heap.

It works like this:
1. Choose any node.
2. Choose nearest node that is not included in the spanning subtree formed so far.
3. Repeat step 2 until all nodes are included in the subtree.

![](notes/images/prims.png)

## See also
- [[minimum-spanning-subtree|Minimum Spanning Subtree]]
- [[trees|Trees]]
- [[graphs|Graphs]]
- [[big-o-notation|Big O Notation]]
- [[kruskals-algorithm|Kruskal's]]
