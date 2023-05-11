---
title: "Breadth-First Search"
tags:
  - university/cs2004
programming-languagues:
term:
  - first
last-edited:
created: 2022-11-07
---
It explores the graph differently from [depth-first search](notes/university/cs2004/depth-first-search.md).

It considers the **neighbouring** nodes first:
- All the neighbours at the start node are expanded first.
- Then the neighbours of the neighbours.
- Until the goal state is found.

It is a very expensive search since all the partial paths being considered must be stored.

It will eventually find a path to the goal but it may not be the best path.

It is similar to the [exhaustive search](notes/university/cs2004/exhaustive-search.md) but it stops when the goal node is reached.

![400](notes/images/Screenshot%202022-11-07%20at%2011.32.54.png)

## Visualisation
Breadth-First Search: [https://www.cs.usfca.edu/~galles/visualization/BFS.html](https://www.cs.usfca.edu/~galles/visualization/BFS.html)