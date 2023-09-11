---
title: "State Machine Diagrams - Part 2"
tags:
  - cs/uml
  - university/cs2002
programming-languagues:
last-edited:
created: 2022-11-24
---
# Recap: A Simple State
---
![Screenshot 2022-11-24 at 11.10.49](notes/images/Screenshot%202022-11-24%20at%2011.10.49.png)

# Composite State
---
Also known as **complex state** or **nested state**.

It contains other states, **substates**.
- Only one of its substates is active at any point in time.

Arbitrary nesting depth of substates.

![Screenshot 2022-11-24 at 11.12.25|600](notes/images/Screenshot%202022-11-24%20at%2011.12.25.png)

## Entering a Composite State
---
Transition to the boundary, the initial node of the composite state is activated:

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S3      |                     |
| e2          | S1/S1.1 | a0-a2-a3-a4         |

![Screenshot 2022-11-24 at 11.14.11|600](notes/images/Screenshot%202022-11-24%20at%2011.14.11.png)

Transition to a substate, substate is activated:

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S3      |                     |
| e1          | S1/S1.2 | a0-a1-a3-a7         |

![Screenshot 2022-11-24 at 11.24.11|600](notes/images/Screenshot%202022-11-24%20at%2011.24.11.png)

## Exiting from a Composite State
---
Transition from a substate:

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S1/S1.1 | a3-a4               |
| e3          | S2      | a6-a5-a2-a1         |

![|600](notes/images/Screenshot%202022-11-24%20at%2013.06.41.png)

Transition from the composite state:

Note that no matter which substate of S1 is active, as soon as e5 occurs, the system changes to S2.

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S1/S1.1 | a3-a4               |
| e5          | S2      | a6-a5-a3-a1         |

![|600](notes/images/Screenshot%202022-11-24%20at%2013.09.20.png)

Completion transition from the composite state:

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S1/S1.1 | a3-a4               |
| e4          | S1/S1.2 | a6-a7               |
| e4          | S2      | a8-a5-a1            | 

![|600](notes/images/Screenshot%202022-11-24%20at%2013.11.15.png)

# Parallelisation and Synchronisation Node
---
### Parallelisation node
- Pseudostate.
- Splits the control flow into multiple concurrent flows.
- **1** incoming edge.
- **>1** outgoing edges.

### Synchronisation node
- Pseudostate.
- Merges multiple concurrent flows.
- **>1** incoming edges.
- **1** outgoing edge.

![|500](notes/images/Screenshot%202022-11-24%20at%2013.13.59.png)

# Orthogonal State
---
When a **composite state** is divided into two or more regions separated by a dashed line.

One stage of each region is always active at any point in time, i.e.: concurrent substates.

**Entry**: transition to the boundary of the orthogonal state actives the initial states of all regions.

**Exit**: final state must be reached in all regions to trigger completion event.

![Screenshot 2022-11-24 at 14.14.48](notes/images/Screenshot%202022-11-24%20at%2014.14.48.png)

# Submachine State (SMS)
---
To reuse parts of state machine diagrams in other state machine diagrams.

Notation: `state:submachineState`.

As soon as the submachine state is activated, the behaviour of the submachine is executed. This corresponds to calling a **subroutine** in a programming language.

![](notes/images/Screenshot%202022-11-24%20at%2014.16.17.png)

# History State
---
![](notes/images/Screenshot%202022-11-24%20at%2014.16.38.png)

It remembers which substate of a composite state was the last active one. It also activates the "old" substate and all entry activities are conducted sequentially from the outside to the inside of the composite state.

Exactly one outgoing edge of the history state points to a substate which is used if:
- the composite state was never active before.
- the composite state was exited via the final state.

**Shallow** history state restores the state that is on the same level of the composite state (H).

**Deep** history state restores the last active substate over the entire nesting depth (H*).

![Screenshot 2022-11-24 at 14.18.50|600](notes/images/Screenshot%202022-11-24%20at%2014.18.50.png)

![|600](notes/images/Screenshot%202022-11-24%20at%2014.18.57.png)

![|600](notes/images/Screenshot%202022-11-24%20at%2014.19.07.png)

![|600](notes/images/Screenshot%202022-11-24%20at%2014.19.14.png)

# Entry and Exit Points
---
**Encapsulation** mechanism:
- A composite state shall be entered or exited via a state or other than the initial and final states.
- The external transition must/need not know the structure of the composite state.

![](notes/images/Screenshot%202022-11-24%20at%2014.30.24.png)

![](notes/images/Screenshot%202022-11-24%20at%2014.30.47.png)

# Summary (Notation Elements)
---
![|600](notes/images/Screenshot%202022-11-24%20at%2014.31.05.png)

![|600](notes/images/Screenshot%202022-11-24%20at%2014.31.17.png)