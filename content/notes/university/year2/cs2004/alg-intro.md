---
title: "Introduction to Algorithms"
tags:
  - university/cs2004
programming-languages:
created: 2022-08-26
---
An algorithm is a set of steps for solving a problem. It is a well-defined computational procedure that takes some value(s) as input and produces some value(s) as output.

They can be seen as a tool for solving well-specified **computational problems**.

We have algorithms because while computers are getting faster, they are not infinitely fast.

```toc
```

## Analysis of an Algorithm
Indication of the time a computer will take to solve a problem given the size of the problem. Without analysis we do not know how long they'll take.

Time is abstract, it is usually measured in operations. This is also known as the **computational complexity** of an algorithm.

## Example
For the **fake coin** problem, we can either compare each coin and get a liner big O or we could use **binary search** (by splitting in half, comparing, then splitting in half again etc) to get a complexity of **O(log N)**. The worst case being log2(N+1) comparisons. log2(64) = 6.

![Pasted image 20220826212941](notes/images/Pasted%20image%2020220826212941.png)

## Module Overview
- Concepts of algorithms:
    - What is an algorithm?
    - What is the analysis of algorithms?
    - Computational Complexity

- Concepts of Data Structure:
    - Notation, list, queues, trees, graphs, hash tables, etc.

- A number of different algorithms:
    - Sorting, searching, graph traversal, heuristic search, evolutionary computation, data clustering, bin packing, optimisation.

- A number of different applications:
    - Examples of searching, graph based problems, based packing problems, data clustering gene expression data, parameter optimisation and the travelling salesperson problem.

## Supplementary Materials
### Where did it all start?
- In ~1900, German mathematician **David Hilbert** listed 23 unsolved mathematical problems.
- He refined to 10 problems to ask if:
    - "Is there a way of determining if an arbitrary first-order symbolic logic statement is true or false?"

This became known as the **Decision Problem** (very hard name in German), a.k.a the **[halting problem](notes/general/halting-problem.md)**.

Briefly, the halting problem means: can we find a program that can predict whether any other program and its input will halt or run forever.

**[Alan Turing](notes/university/year2/cs2004/alan-turing.md)** proved that is is **impossible** to solve the halting problem - which was used to show that the **decision** problem was impossible to solve.

In 1936 Turing created two concepts: **[turing machine](notes/university/year2/cs2004/turing-machines.md)** and **universal turing machine**.

In 1939 Turing created a machine called "The Bombe" which helped crack the German enigma code. 

In 1948, the first computer (Baby) and associated computer program were developed at Manchester University based on Turing's ideas.

## Computer Science and Computation
- Discipline that studies computable problems and computational structures.
- Involves the understanding and design of computers and computational processes.
- Interdisciplinary.

Computation is the procedure of calculating, determining something by mathematical or logical methods.

**Computability** is about what computers can and cannot do.

### What is a Computer and a Computer program?
A **computer** is a device for carrying out certain types of algorithms.

**Algorithms** are a set of steps for solving a problem.

A **computer programming language** describes algorithms to computers, and a **computer program** is a description of a single algorithms and/or problem (usually).

**Computer software** is a collection of programs that carry out a similar or related task.

## Next Lecture
- [Foundation Analysis](notes/university/year2/cs2004/alg-foundation-analysis.md)