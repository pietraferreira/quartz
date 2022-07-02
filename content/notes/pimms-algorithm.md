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
It is a [minimum spanning subtree](minimum-spanning-subtree.md) algorithm.

It scales well, fast with dense [graphs](graphs.md).

It has a [](compiler-optimisation.md#Performance%7Cperformance) of $O_{E\ log\ N}$ with [binary heap](binary-heap.md) and $O_{E\ +\ log\ N}$ with Fibonacci heap.

It works like this:
1. Choose any node.
2. Choose nearest node that is not included in the spanning subtree formed so far.
3. Repeat step 2 until all nodes are included in the subtree.

![](images/prims.png)

## See also
- [Minimum Spanning Subtree](minimum-spanning-subtree.md)
- [Trees](trees.md)
- [Graphs](graphs.md)
- [Big O Notation](big-o-notation.md)
- [Kruskal's](kruskals-algorithm.md)
