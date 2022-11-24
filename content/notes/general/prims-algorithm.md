---
title:  "Prim's Algorithm"
tags:
  - cs-concept
  - engineer-training
  - graphs
  - graph-search
module:
  - cs2004
programming-languagues:
created: 2022-06-06
last-modified: 2022-11-07
---
# Prim's Algorithm
---
It is a [minimum spanning tree](notes/general/minimum-spanning-tree.md) algorithm.

It scales well, fast with dense [graphs](notes/general/graphs.md).

It has a [](notes/general/compiler-optimisation.md#Performance%7Cperformance) of $O_{E\ log\ N}$ with [binary heap](notes/general/binary-heap.md) and $O_{E\ +\ log\ N}$ with Fibonacci heap.

It works like this:
1. Choose any node.
2. Choose nearest node that is not included in the spanning subtree formed so far.
3. Repeat step 2 until all nodes are included in the subtree.

![prims](notes/images/prims.png)

## Pseudo-Code
```
Algorithm 4. PrimsMST(G=(V,E))  
Input: G- a weighted graph (V- vertices, E- Edges)  
1) Let x be a random node from V  
2) Let Vnew = {x}  
3) Let Enew = {}  
4) While Vnew  V  
5) Choose an edge (u,v) with minimal weight,  
such that u  Vnew and v  Vnew  
6) Vnew = Vnew  {v}  
7) Enew = Enew  {(u,v)}  
8) Wend  
Output: Gnew = (Vnew,Enew)
```

## Example
![650](notes/images/Screenshot%202022-11-07%20at%2011.48.43.png)

## See also
- [Minimum Spanning Tree](notes/general/minimum-spanning-tree.md)
- [Trees](notes/general/trees.md)
- [Graphs](notes/general/graphs.md)
- [Big O Notation](notes/general/big-o-notation.md)
- [Kruskal's](notes/general/kruskals-algorithm.md)
