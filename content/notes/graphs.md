---
title: "Graphs"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-06
---
# Graphs
---
A graph consists of:
- A set of fixed objects, **nodes**.
- A set of **edges**, which may have arrows and have values attached.

![](images/graph.png)

## Terminology
- An **undirected** graph has no arrows on edges.
- A **directed** graph or **digraph** has arrows on edges.
- Two nodes connected by an edge are **adjacent**.
- A **weighted graph** has values attached to edges.
- A path from a node back to itself is a **cycle**.
- An **undirected** graph with **no cycles** is a [tree](notes/trees.md).
- A **directed** graph with **no cycles** is a **directed acyclic graph** or DAG.
- A **DAG** where no node is pointed to by more than one node is a **directed** [tree](notes/trees.md).

## See also
- [Trees](notes/trees.md)
- [Minimum Spanning Subtree](notes/minimum-spanning-subtree.md)
- [Dijkstra](notes/dijkstra-algorithm.md)
- [Floyd-Warshall](notes/floyd-warshall.md)
- [Inkblot](notes/inkblot-algorithm.md)
- [Graphviz](notes/graphviz.md)
