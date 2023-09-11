---
title: "Best-First Search"
tags:
  - university/cs2004
programming-languages:
last-edited:
created: 2022-11-07
---
It is an improvement upon [depth-first search](notes/university/cs2004/depth-first-search.md).

A heuristic is used to decide which node is explored next:
- A **heuristic** is a rule of thumb or best practice.

For example, nodes are expanded in order of lowest cost.

## A* Search
Very good for route finding applications:
- The AA website.
- The tube.

It needs **two estimates**:
- How much a partial path has cost.
- An estimate (**under estimate**) of how far is left to the goal state, for example lower bound on how far to travel.

It will find an optimal path without necessarily considering all the routes.

It scores each partial path with the function $f = g + h$, where $g$ is the **cost so far** and $h$ is the **estimate of the cost to the goal state**.
- London to Manchester: Land transport 200.21 miles, crow-flies 163.05 miles.

If $h$ is always zero (we don't have any information about how far away the goal is), then the algorithm becomes similar to [depth-first search](notes/university/cs2004/depth-first-search.md).

If $g$ is always zero, then the algorithm is called **Greedy Search**.
- Making locally optimal choices at each stage with the hope of finding the global optimum.

### Example
![Screenshot 2022-11-07 at 11.41.25](notes/images/Screenshot%202022-11-07%20at%2011.41.25.png)