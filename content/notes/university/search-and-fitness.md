---
title: "Search and Fitness"
tags:
  - university
  - cs2004
last-edited:
created: 2022-12-16
---
---
# Definition of a Search Problem
---
For some problems we need to search for a solution from a (usually) very large number of possibilities, **search problems**.

The solution spaces for many every day problems can be very, very large, too large to search exhaustively.

It might not find the optimal solution, but it will give a good solution in **reasonable time**.

We often need special search algorithms known as **heuristics**.

# Heuristics
---
It is a "rule of thumb" or some loose set of guidelines.
- It might find a solution, but not guaranteed.
- For example: getting out of a maze by keeping your hand against the maze wall.

Usage of domain knowledge in the search process speeds up the search process.

In AI, these are used to improve the performance of methods, in our case, search methods:
- Expert knowledge.
- Common sense.

# Search Problems
---
Many problems can be thought of as searching through candidate solutions to find one that is optimal.
- Systematically search through potential solutions **without** considering all of them.

We need some way to evaluate the fitness of the candidate solutions:
- Optimal = the fittest = the best etc...

Need to compare solutions and see which of the solutions are better or worst.

Also some sense of the adjacency (similarity) of solutions (or neighbourhood).

# Fitness
---
In order to search for a solution, we must be able to compare potential solutions.
- For example, is solution $s_1$ better than solution $s_2$?
    - Thus we have the concept of fitness.

We must derive a function (the **fitness/objective function**) that maps a solution to a value that rates how good the solution solves the problem in hand.

We either try and **maximise** or **minimise** fitness.

A slight change in solution quality should result in a corresponding change in the fitness.
- Solution quality goes down -> fitness goes down (decreases).
- Solution quality goes up -> fitness goes up (increases).

## Fitness Landscapes
---
It can be **helpful** to think of searching a landscape of solutions where:
- The `x` and `y` co-ordinates represent a particular solution.
- Altitude (`z` axis) represents the fitness of that solution.

This leads to the analogy that we wish to search for or climb peaks (or descend...).

The collection of **all possible solutions** can be considered as a high dimensional space, called the **search space** or **fitness landscape**.

Often, some concept of distance between solutions exists and some concept of how "good" each point in the search space is (**fitness/objective function**).

Techniques exist to map a high dimensional space to a two dimensional space, so we can plot the space/landscape.

Smooth and regular spaces are easy to search:

![|500](notes/images/Screenshot%202022-12-16%20at%2011.58.14.png)

Irregular spaces are difficult to search:

![|400](notes/images/Screenshot%202022-12-16%20at%2011.58.50.png)

# Global and Local  Optima
---
The **global optimum** is the point or points in the search space with the best objective function evaluation.

A **local optimum** is the point or points in a subset or section of the search space with the best objective function evaluation.

Note that the subset or section of the search space in question may contain the global optima.

Many search techniques can find local optima, but get "stuck" at them and cannot move on to find the global optima.

![|500](notes/images/Screenshot%202022-12-16%20at%2012.00.35.png)

# Representation
---
When we are trying to solve a search based problem, we need a way to represent a potential solution.

This is usually a mathematical and/or data structure based way of describing the solution to a problem.

A good representation:
- Should be a one to one mapping.
- No redundancy.
- No ambiguities.
- All potential solutions should be represented.

# The Scales Problem
---
Given $n$ objects of various weights, split them into two equally heavy piles (or as equal as possible).

![|500](notes/images/Screenshot%202022-12-16%20at%2012.03.19.png)

We have $n$ weights that are $W = [w_1, w_2, ..., w_n]$ in weight, $w_i > 0$.

We want to divide them into two equals piles in weight, or as equal as possible.

We are going to work with the general case, not a specific set of given weights, we want to solve the problem for **any** W.

We first look to see if there is a simple or standard method to solve the problem, for this example problem **there is not**.

We need to:
- Design a representation.
- Construct a fitness function.
- Apply a heuristic search method.

## Representation
---
Each weight ($w_i$) is either on the left hand side or the right hand side.

Given that we have $n$ items into two piles/sets we could use a binary representation.

We present a solution as an **n length binary string** (or array/vector/list...) where:
- A zero (0) in position $i$ means that weight $i$ is on the left side of the scales.