---
title:  "Depth-First Search"
tags:
  - university/cs2004
programming-languages:
module:
  - cs2004
last-edited:
created: 2022-11-07
---
# Depth-First Search
It allows us to explore nodes and edges of a [graph](notes/university/cs2004/graphs.md).

The traversal will go as far as possible down a path until a **dead end** is reached.

In an [undirected](notes/university/cs2004/graphs.md#Undirected|undirected) graph:
- A node is a dead end if all of the nodes adjacent to it have already been visited.

In an [directed](notes/university/cs2004/graphs.md#Directed|directed) graph:
- A node is a dead end if it has no outgoing edges and we visited everything else.

### Undirected Graph
![400](notes/images/Screenshot%202022-11-07%20at%2009.58.41.png)

![400](notes/images/Screenshot%202022-11-07%20at%2009.58.55.png)

![400](notes/images/Screenshot%202022-11-07%20at%2010.00.55.png)

### Directed Graphs
![400](notes/images/Screenshot%202022-11-07%20at%2010.01.48.png)

## Steps
1. Visit the starting node and then proceed to follow links through the graph until a dead end is reached.
2. Back up along our path until we find an unvisited adjacent node, and continue in that new direction.
3. The process completes when we back up to the starting node and all the nodes adjacent to it have been visited.
4. If presented with two choices, we choose the node with numerically and/or alphabetically smaller label (for convenience).

## Pseudo-Code
```
Algorithm 1. DFS(G,n)  
Input: G- the graph  
n- the current node  
1) Visit(n) [Do something to/at node n...]  
2) Mark(n)  
3) For every edge nm (from n to m) in G do  
4) If m is not marked then  
5) DFS(G,m)  
6) End If  
7) End For  
Output: Depends on the purpose of the search...
```

## Running Time
DFS is called on each node exactly once, $n$ nodes: $O(n)$.

Every edge is examined exactly twice, once from each of its vertices/nodes - $m$ edges: $O(2m)$.

Therefore, $O(n) + O(2m) \equiv O(n+m)$.

If we assume that the work done as we visit each node is the most complex part of the process, the traversal is of order $O(n)$.

## Visualisation
Depth-First Search: [https://www.cs.usfca.edu/~galles/visualization/DFS.html](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
> [!failure]- Failure 
>   Error: There is another generation process
>   
>   - plugin:obsidian-textgenerator-plugin:56949 TextGenerator.eval
>     plugin:obsidian-textgenerator-plugin:56949:31
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>   - plugin:obsidian-textgenerator-plugin:62 __async
>     plugin:obsidian-textgenerator-plugin:62:10
>   
>   - plugin:obsidian-textgenerator-plugin:56935 TextGenerator.generate
>     plugin:obsidian-textgenerator-plugin:56935:12
>   
>   - plugin:obsidian-textgenerator-plugin:58440 AutoSuggest.eval
>     plugin:obsidian-textgenerator-plugin:58440:52
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>  
