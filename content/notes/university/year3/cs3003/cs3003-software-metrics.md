---
title:  "Software Metrics"
tags:
  - university
module: cs3003
lecturer: Steve Counsell
created: 2023-10-06
year: '3'
type: lecture
---
---
Testing is really important, as you can see by one of **Norman Fenton**'s results:

![[notes/images/Screenshot 2023-10-06 at 18.48.24.png|480]]

We will try to answer these questions:
- How can software size be measured?
- How can software structure be measured?
- Complexity metrics
- How can objected-oriented code be measured?
- What topics are related?

# Use of Measurement
Measurement helps us to **understand**, making the current activity visible and establishing guidelines (for example: methods too long, classes too long etc).

It allows us to **control**, predict outcomes and change processes.

It also encourages us to **improve**, we can establish quality targets and aim to improve.

# Software Size
It is important as the larger a class, the more bugs it is likely to contain.

Lines of code (**LOC**) is a common measure of size.

# How can software structure be measured?
Information flow within the system:
- Indicator of maintainability and "coupling".
- Identifies critical stress parts of the system and design problems.
- Based on:
    - Fan-in: number of modules calling a module.
    - Fan-out: number of modules called by a module.

![[notes/images/Screenshot 2023-10-06 at 18.52.39.png|480]]

# Complexity Metrics
Why use complexity metrics like [[notes/university/year3/cs3003/cs3003-software-metrics#McCabe's Cyclometric Complexity Measure|CC]] (Cyclometric Complexity Measure):

## Henry and Kafura's Complexity Metric
- A module X is 10 lines long.
- It has fan-in of 3 and fan-out of 2.
- Complexity of a $module = module\ length * (fan\ in * fan\ out)^2$

Therefore:
- Complexity of $X = 10 * (3 * 2)^2 = 360$

## McCabe's Cyclometric Complexity Measure
Used to measure the complexity of a program's control flow. It qualifies the number of independent paths through a program's source code. The higher the cyclomatic complexity, the more complex and potentially error-prone the code may be.

The formula is: $CC(P) = E - N + 2$ where $E$ means edges and $N$ nodes.

Edges normally represent transitions between different parts of the code (e.g. branching statements like if-else or loops) and nodes represent decision points in the code where the control flow can change (e.g. conditions or loops).

- Commonly used by industry.
- In lots of tools.
- Based on control flow graph.
- Very useful for identifying white box test cases.
- Attributed to Tom McCabe who worked for IBM in the 1970's.

![[notes/images/Screenshot 2023-10-06 at 18.59.32.png|480]]