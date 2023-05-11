---
title: "Kruskal's Algorithm"
tags:
  - cs-concept
  - work/engineer-training
programming-languagues:
created: 2022-06-06
---
# Kruskal's Algorithm
---
It is a [minimum spanning subtree](notes/university/cs2004/minimum-spanning-tree.md) algorithm.

It performs well for sparse [graphs](notes/university/cs2004/graphs.md) due to simple data structures: $O_(E\ log\ N)$.

The way it works:
1. Choose the shortest edge.
2. Choose the next shortest edge, ensure it does not form a cycle in the subtree formed so far. If a cycle is formed, discard the edge.
3. Repeat step 2 until there are $(N-1)$ edges in the subtree.

![kruskals](notes/images/kruskals.png)

## See also
- [Minimum Spanning Subtree](notes/university/cs2004/minimum-spanning-tree.md)
- [Trees](notes/university/cs2004/trees.md)
- [Graphs](notes/university/cs2004/graphs.md)
- [Big O Notation](notes/university/cs2004/big-o-notation.md)
- [Pimm's](notes/general/prims-algorithm.md)
