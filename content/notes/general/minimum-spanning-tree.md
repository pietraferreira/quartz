---
title: "Minimum Spanning Tree"
tags:
  - engineer-training
  - university/cs2004
programming-languagues:
created: 2022-06-06
last-modified: 2022-11-07
---
It is a subtree with the minimum possible edge weight that connects all nodes together.

There must exist **no cycles** in the tree, meaning it is usually a **complete** [graph](notes/general/graphs.md).

The **cost** of a spanning tree is the sum of all the edge weights and a minimum spanning tree (MST) is the spanning tree with the minimum cost.

A graph **can** have multiple minimum spanning subtrees:
![minimum_spanning_subtree](notes/images/minimum_spanning_subtree.png)

The two most popular algorithms are [Kruskal's](notes/general/kruskals-algorithm.md) and [Prim's](notes/general/prims-algorithm.md).

## Example
![Screenshot 2022-11-07 at 11.47.26](notes/images/Screenshot%202022-11-07%20at%2011.47.26.png)

![400](notes/images/Screenshot%202022-11-07%20at%2011.47.39.png)

## Applications
Network Design:
- Computer networks, telecommunications networks, transportation networks, water supply networks etc.

CfA redshift survey:
- MSTs used for understanding the large-scale structure of the universe.

Approximation algorithms for NP-hard problems:
- Travelling salesperson problem.

Cancer imaging:
- The British Columbia Cancer Research centre uses them to describe the arrangements of nuclei in skin cells.

## Visualisation
Prim's Algorithm for working out the Minimum Spanning Trees: [https://www.cs.usfca.edu/~galles/visualization/Prim.html](https://www.cs.usfca.edu/~galles/visualization/Prim.html)

## See also
- [Trees](notes/general/trees.md)
- [Graphs](notes/general/graphs.md)
