---
title:  "Ant Colony Optimisation and Particle Swarm Optimisation"
tags:
  - university/cs2004
last-edited:
created: 2023-02-03
---
---
# Swarm Intelligence
---
The **interaction** of many simple parts creating **complex** behaviour. This means that the net effect of group's collective wisdom is greater than the sum of the individuals.

Emergent behaviour as a side effect of the system - behaviours that are not programmed or designed in the algorithm.

The study is **decentralised**, no central control. It entails simple rules for each individual.

## Flocking
---
"Boids" model created by Craig Reynolds in 1986.

Only three simple rules:
1. Separation.
2. Alignment.
3. Cohesion.

# Ant Colony Optimisation
---
A **heuristic** optimisation method inspired by biological systems.

It is a multiple agent based approach for solving difficult combinatorial optimisation problems, mainly **graph** problems.

- Three key rules:
    - Route Selection.
    - Pheromone Update.
    - Pheromone Evaporation.

## Ant Behaviour
---
- Ants (blind) navigate from nest to food sources.
- The shortest path is discovered via pheromone trails.
- Each ant moves at random (biased).
- **Pheromone** is deposited onto the path.
- Ants detect the lead ants path and are inclined to follow.
- More pheromone on the path means an increased probability of the path being followed.
- Pheromone upgrade: **evaporation**.

### Dealing with Obstacles
![](notes/images/Screenshot%202023-02-03%20at%2014.22.45.png)

### Stigmergy
---
Indirect coordination/communication between agents or actions.

- Individual behaviour modifies the environment, which in turn modifies the behaviour of other individuals.
- Stimulates the performance of subsequent actions leading to the spontaneous emergence of coherent, apparently systematic activity.
- Reduces (or eliminates) communications between agents.
- Supports efficient collaboration between simple agents.
- Produces complex, seemingly intelligent structures, without need for any planning, control, or even direct communication between the agents.

### Route Selection
---
At the beginning of the search process, a constant amount of **pheromone** is assigned to all arcs.

When located at node $i$ an ant $k$ uses the **pheromone** trail to compute the probability of choosing $j$ as the next node:

![|300](notes/images/Screenshot%202023-02-03%20at%2014.31.10.png)

The probability is zero for nodes that are unreachable from node $i$.

It is similar to the **Roulette Wheel Selection** in a [Genetic Algorithm](notes/university/intro-gen-algorithms.md).

## Summary
---
The search process in ant colony optimisation involves assigning a constant amount of pheromone to all arcs at the beginning. When an ant reaches a node, it uses the pheromone trail to calculate the probability of choosing the next node. This probability is zero for nodes that cannot be reached from the current node, and is similar to Roulette Wheel Selection in Genetic Algorithms.