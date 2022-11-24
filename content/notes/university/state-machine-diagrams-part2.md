---
title: "State Machine Diagrams - Part 2"
tags:
  - uml
programming-languagues:
module:
  - cs2002
term:
  - first
last-edited:
created: 2022-11-24
---
# State Machine Diagrams (PART 2)
---
```toc
```

## Recap: A Simple State
---
![Screenshot 2022-11-24 at 11.10.49](notes/images/Screenshot%202022-11-24%20at%2011.10.49.png)

## Composite State
---
Also known as **complex state** or **nested state**.

It contains other states, **substates**.
- Only one of its substates is active at any point in time.

Arbitrary nesting depth of substates.

![Screenshot 2022-11-24 at 11.12.25](notes/images/Screenshot%202022-11-24%20at%2011.12.25.png)

### Entering a Composite State
---
- Transition to the boundary, the initial node of the composite state is activated.

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S3      |                     |
| e2          | S1/S1.1 | a0-a2-a3-a4         |

![Screenshot 2022-11-24 at 11.14.11](notes/images/Screenshot%202022-11-24%20at%2011.14.11.png)

- Transition to a substate, substate is activated.

| Event       | State   | Executed Activities |
| ----------- | ------- | ------------------- |
| „Beginning“ | S3      |                     |
| e1          | S1/S1.2 | a0-a1-a3-a7         |

![Screenshot 2022-11-24 at 11.24.11](notes/images/Screenshot%202022-11-24%20at%2011.24.11.png)