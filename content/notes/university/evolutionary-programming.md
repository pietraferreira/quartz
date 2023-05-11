---
title:  "Evolutionary Programming"
tags:
  - university/cs2004
last-edited:
created: 2023-02-03
---
---
Similar to [Genetic Algorithms](notes/university/intro-gen-algorithms.md).

The emphasis here is on **mutation** and there is **no crossover**.

Every individual mutates, doubling the population.

The selection/survival operator tends to be **Tournament Selection**.

## Tournament Selection
---
Each member of the population is compared with a fixed number of other individuals. For each comparison, the individual is awarded a point if it's fitness is better than the opponent. The population is then reduced back to its original size by retaining those with the highest score.

### Pseudo-Code
---
```
Input: Population size, number of generations  
and Fitness Function  
1) Create the initial population  
2) For i = 1 to number of generations  
3) Mutate the population  
4) Apply Tournament Selection  
5) End For  
Output: Return the best individual
```
# Genetic Programming
---
It extends Genetic Algorithms.

We evolve computer programs by Natural Selection.

**Symbolic Regression** is a type of Genetic Programming, which represents a mathematical expression as a tree structure.

![](notes/images/Screenshot%202023-02-03%20at%2014.13.27.png)