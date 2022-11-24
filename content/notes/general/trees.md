---
title: "Trees"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-06
---
# Trees
---
[Abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type "Abstract data type") that represents a hierarchical [tree structure](https://en.wikipedia.org/wiki/Tree_structure "Tree structure") with a set of connected [nodes](https://en.wikipedia.org/wiki/Node_(computer_science) "Node (computer science)"). Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the _root_ node, which has no parent. 

These constraints mean there are no cycles or "loops" (no node can be its own ancestor), and also that each child can be treated like the root node of its own subtree, making [recursion](https://en.wikipedia.org/wiki/Recursion "Recursion") a useful technique for tree traversal. In contrast to linear data structures, many trees cannot be represented by relationships between neigh-boring nodes in a single straight line.

[Binary trees](notes/general/binary-trees.md) are a commonly used type, which constrain the number of children for each parent to exactly two. When the order of the children is specified, this data structure corresponds to an [ordered tree](https://en.wikipedia.org/wiki/Ordered_tree "Ordered tree") in graph theory. A value or pointer to other data may be associated with every node in the tree, or sometimes only with the _leaf nodes_, which have no children.

The abstract data type can be represented in a number of ways, including a list of parents with pointers to children, a list of children with pointers to parents, or a list of nodes and a separate list of parent-child relations (a specific type of [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list "Adjacency list")). Representations might also be more complicated, for example using [indexes](https://en.wikipedia.org/wiki/Database_index "Database index") or ancestor lists for performance.

Source: [Wikipedia](%3Chttps://en.wikipedia.org/wiki/Tree_(data_structure)>)

## Types of tree
- [Binary Trees](notes/general/binary-trees.md)
- [2-3 Trees](notes/general/2-3-trees.md)
- [B-Trees](notes/general/b-trees.md)
- [Binary Heap](notes/general/binary-heap.md)
- [Parse Trees](notes/general/parse-trees.md)

## See also
- [Graphs](notes/general/graphs.md)
- [Minimum Spanning Subtree](notes/general/minimum-spanning-tree.md)