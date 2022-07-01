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
It is a [[minimum-spanning-subtree|minimum spanning subtree]] algorithm.

It performs well for sparse [[graphs]] due to simple data structures: $O_(E\ log\ N)$.

The way it works:
1. Choose the shortest edge.
2. Choose the next shortest edge, ensure it does not form a cycle in the subtree formed so far. If a cycle is formed, discard the edge.
3. Repeat step 2 until there are $(N-1)$ edges in the subtree.

![](notes/images/kruskals.png)

## See also
- [[minimum-spanning-subtree|Minimum Spanning Subtree]]
- [[trees|Trees]]
- [[graphs|Graphs]]
- [[big-o-notation|Big O Notation]]
- [[pimms-algorithm|Pimm's]]
