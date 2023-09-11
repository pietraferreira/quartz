---
title: "Exhaustive Search"
tags:
  - university/cs2004
programming-languages:
module:
  - cs2004
last-edited:
created: 2022-11-07
---
It systematically evaluates every possible path in a [graph](notes/university/year2/cs2004/graphs.md). It is guaranteed to find what we are looking for, however it is **unsuitable** for most real world problems.

## Pseudo-Code
```
Algorithm 2. Exhaustive(G, n, p)  
Input: G- the graph  
n- the current node  
p– the path so far  
1) For every edge nm (from n to m) in G do  
2) If m  p then  
3) p = p  {m}  
4) Exhaustive(G, m, p)  
5) End If  
6) End For  
Output: Depends on the purpose of the search...
```

## Running Time
It depends on how the nodes and edges are organised.

For the worst case we would get:

$(n-1)(n-2)(n-3)...1 = O((n-1)!)$.