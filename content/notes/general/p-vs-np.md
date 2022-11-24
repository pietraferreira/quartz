---
title: "P vs NP Problem"
tags:
  - cs-concept
  - problem
  - engineer-training
programming-languagues:
created: 2022-06-06
---
# P vs NP Problem
---
Imagine an Oracle. Guesses and gets the right answer.

Build by (infinitely) many processors in a tree. If $2^n$ possible answers, tree is $n$ deep. A non-deterministic computer.

- _P_ - the set of problems solvable in polynomial time.
- _NP_ - the set of problems solvable in polynomial time on a non-deterministic computer.
    - Alternatively, verifiable in polynomial time on a deterministic computer.
- _NP hard_ - any problem at least as hard as the hardest problems in _NP_.
- _NP complete_ - a set of _NP hard_ problems, all of which are equivalent.

- $P$ $\subseteq$ $NP$
- $NP$ $\neq$ $P$ has not been proven yet, but widely believed to be true.

![p-np](notes/images/p-np.png)

## See also
- [Problems](notes/general/cs-problems.md)
