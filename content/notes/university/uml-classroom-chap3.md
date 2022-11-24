---
title: "UML @ Classroom - Chapter 3 (Use Case Diagram)" 
tags:
  - uml
  - cs2002
  - uml@classroom
programming-languagues:
created: 2022-10-03
last-modified: 2022-11-24
---
# Use Case Diagram
---
- Allows to describe the possible usage scenarios (use cases) that a system is developed for.
- Doesn't address realisation details, for example data structures or algorithms.
- Use case: what the customer wants the system to do, the requirements.

We can employ it to answer the following questions:

1. What is being described? (The system)
2. Who interacts with the system? (The actors)
3. What can the actors do? (The use cases)

## Use Cases
---
Describes the functionality expected from the system to be developed.

It is triggered either by invocation of an actor or by a **trigger event**. They are determined by collecting customer wishes and analysing problems. They can also be used to document the functionality that a system offers.

![Screenshot 2022-10-03 at 15.41.51](notes/images/Screenshot%202022-10-03%20at%2015.41.51.png)

The rectangle symbolises the boundaries of the system to be described:

![Screenshot 2022-10-03 at 15.42.24](notes/images/Screenshot%202022-10-03%20at%2015.42.24.png)

## Actors
---
Who works and interacts with the system.

They can be human or non-human.

- Active actor: initiates the execution of use cases.
- Passive actor: is used by the system.

In the example below Professor is an **active** actor while the E-mail Server is **passive**.

- Primary actor: takes an actual benefit from the execution of the use case (the Professor).
- Secondary actor: receives no direct benefit from the execution of the use case. It **does not** need to be necessarily passive.

As you can see, both Professor and Student are actively involved in the execution of the use case Exam, the main beneficiary being the Student. Professor has a lower benefit from the exam but is necessary for the execution of the use case.

![Screenshot 2022-10-03 at 15.46.30](notes/images/Screenshot%202022-10-03%20at%2015.46.30.png)

Actors are **always** outside the system.

## Associations
---
Expresses that the actor communicates with the system and uses a certain functionality.

Every actor must communicate with at least one use case and vice-versa.

Associations are always binary, meaning that it is always specified between one use case and one actor.

- Multiplicity:

![Screenshot 2022-10-03 at 15.48.24](notes/images/Screenshot%202022-10-03%20at%2015.48.24.png)

Actors represent **roles**.

## Relationships between Actors
---
Actors can have common properties. For example, not only professors but assistants are permitted to view student data. To handle this, we use an **inheritance relationship** (generalisation).

When actor Y (sub-actor) inherits from actor X (super-actor), Y is involved with all use cases with which X is involved.

In the image below the actors Professor and Assistant inherit from the actor Research Associate, meaning every professor and every assistant is a research associate. Every research associate can Query student data, but only professors can create a new course and tasks can only be published by assistants. To execute Issue certificate, we need a professor but an assistant can be involved optionally (0..1).

![Screenshot 2022-10-03 at 15.52.06](notes/images/Screenshot%202022-10-03%20at%2015.52.06.png)

Two actors participating in a use case vs two actors having a common super-actor that participates in the use case:

![Screenshot 2022-10-03 at 15.53.02](notes/images/Screenshot%202022-10-03%20at%2015.53.02.png)

- **Abstract**: if there is no instance of an actor.

## Relationships between Use Cases
---
![Screenshot 2022-10-03 at 15.58.12](notes/images/Screenshot%202022-10-03%20at%2015.58.12.png)

### Include
The behaviour of the included use case (B) is integrated into the behaviour of the base use case (A). The included use case can be executed on its own. It is analogous to **calling a subroutine**.

![Screenshot 2022-10-03 at 15.58.20|200](notes/images/Screenshot%202022-10-03%20at%2015.58.20.png)

In the example, Announce lecture is the **base use case** - meaning when a new lecture is announced, the use case Assign lecturer must also be executed. The actor Professor is involved in the execution of **both** use cases.

Points from the base.

### Extend
If a use case B is in an `<<extend>>` relationship with a use case A (base use case), then A can use the behaviour of B (extending use case) but does not have to. B can be activated by A in order to insert the behaviour of B in A.

Both use cases can be executed independently of one another.

![Screenshot 2022-10-03 at 16.00.27|200](notes/images/Screenshot%202022-10-03%20at%2016.00.27.png)

For example, when a new lecture is announced, it is possible (not mandatory) to reserve a lecture hall. 

A use case can act as an extending use case several times or can itself be extended by several use cases.

Points towards the base.

### Condition
Extending relationships can have conditions, which must be fulfilled for the base use case to insert the behaviour of the extending use case.

![Screenshot 2022-10-03 at 16.01.47](notes/images/Screenshot%202022-10-03%20at%2016.01.47.png)

### Extension Points
Allows you define the point at which the behaviour of the extending use cases must be inserted in the base use case.

### Generalisation
Allows to group common properties and behaviours of different use cases in a parent use case.

If A generalises B, B inherits the behaviours of A, which B can either extend or overwrite. It also inherits all relationships from A. Therefore, B adopts the basic functionality of A but decides itself what part of A is executed or changed.

Uses an arrow:

![Screenshot 2022-10-03 at 16.45.00|200](notes/images/Screenshot%202022-10-03%20at%2016.45.00.png)

For example, Announce event passes on its properties and behaviours to Announce lecture and Announce talk. As a result of `<<include>>`, both must execute the behaviour of the use case Assign lecturer. When a lecture is announced, an exam can also be announced at the same time. They both inherit the relationship from the use case Announce event to the actor Professor. Thus, all use cases are connected to at least one actor.

![Screenshot 2022-10-03 at 16.05.57](notes/images/Screenshot%202022-10-03%20at%2016.05.57.png)

We grouped the common features of Announce lecture and Announce talk, meaning we don't have to model both the `<<include>>` relationship and the association with the professor twice.

## More information
---
- [Creating a Use Case Diagram](notes/university/creating-a-use-case-diagram.md)