---
title: "Linear Knapsack Problem"
tags:
  - work/engineer-training
programming-languages:
created: 2022-06-06
---
# Linear Knapsack Problem
---
Also known as the **stock cutting** problem.

Consider capacity 100, and object of size {53, 53, 49, 49, 3}.

- **Greedy** algorithm: start with largest object - 47% wastage.
- **Miserly** algorithm: start with smallest object - 48% wastage.
- **Heuristic** algorithm: for each object try using that object and **greedy** on rest - 2% wastage.

    - {**53**, 3} →  44% wastage
    - {**53**, 3}  →  44% wastage
    - {**49**, 49}  →  2% wastage
    - {**49**, 49}  →  2% wastage
    - {**3**, 53}  →  44% wastage

## Heuristic Algorithms
The first two algorithms have up to 50% wastage. The worst case for heuristic algorithm is with {35, 35, 33, 33, 33} which means **70%** wastage.

Generalise to:
```c
for each set of k objects
  use k objects
  use greedy on the rest
```

Worst case efficiency is $(k+1)/(k+2)$, in practic k = 2 is sufficient.

## See also
- [Problems](notes/general/cs-problems.md)