---
title: "Kruskal's Algorithm"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-06
---
# Kruskal's Algorithm
---
It is a [[notes/general/minimum-spanning-subtree|minimum spanning subtree]] algorithm.

It performs well for sparse [[notes/general/graphs]] due to simple data structures: $O_(E\ log\ N)$.

The way it works:
1. Choose the shortest edge.
2. Choose the next shortest edge, ensure it does not form a cycle in the subtree formed so far. If a cycle is formed, discard the edge.
3. Repeat step 2 until there are $(N-1)$ edges in the subtree.

![[notes/images/kruskals.png]]

## See also
- [[notes/general/minimum-spanning-subtree|Minimum Spanning Subtree]]
- [[notes/general/trees|Trees]]
- [[notes/general/graphs|Graphs]]
- [[notes/general/big-o-notation|Big O Notation]]
- [[notes/general/pimms-algorithm|Pimm's]]
