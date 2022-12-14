---
title: "Activity Diagram"
tags:
  - university
  - cs2002
  - cs2002/uml
last-edited:
created: 2022-12-14
---
---
## Introduction
---
The focus of the activity diagram is the **procedural processing aspects**.

It uses flow-oriented language concepts and it is based on:
- languages for defining business processes.
- established concepts for describing concurrent communicating processes (token concept as found in petri nets).

Concepts and notation variants cover a **broad area of applications**:
- Modelling of object-oriented and non-object-oriented systems.

## Activity
---
It is the specification of user-defined behaviour at different levels of granularity.

Example:
- Definition of the behaviour of an operation in the form of individual instructions.
- Modelling the course of actions of a use case.
- Modelling the functions of a business process.

An activity is a directed graph:
- Nodes: actions and activities.
- Edges: for control and object flow.

The control flow and object flow define the execution.

Optional:
- Parameter.
- Pre and postconditions.

![|350](notes/images/Screenshot%202022-12-14%20at%2012.05.00.png)

## Action
---
It has a **basic element** to specify user-defined behaviour.

It is **atomic** but can be aborted.

No specific rules for the description of an action. The definition is in natural language or in any programming language.

Process input values to produce output values.

Special notation for predefined types of actions, most importantly:
- Event-based actions.
- Call behaviour actions.

## Edges
---
It connects activities and actions to one another.

Express the execution order.

Types:
- Control flow edges.
    - Defines the order between nodes.
- Object flow edges.
    - Used to exchange data or objects.
    - Express a data/causal dependency between nodes.

Guard (condition):
- Control and object flow only continue if guards in square brackets evaluate to true.

![|300](notes/images/Screenshot%202022-12-14%20at%2012.31.12.png)

## Token
---
It is a **virtual coordination mechanism** that describes the execution exactly:
- No physical component of the diagram.
- Mechanism that grants the execution permission to actions.

If an action receives a token, the action can be executed. When the action has completed, it passes the token to a subsequent action and the execution of this action is trigged.

Guards can prevent the passing of a token, as they are **stored in the previous node**.

**Control token**: "execution permission" for a node.

**Object token**: transport data + "execution permission".

![|160](notes/images/Screenshot%202022-12-14%20at%2012.34.15.png)

## Beginning and Termination of Activities
---
![|20](notes/images/Screenshot%202022-12-14%20at%2012.34.56.png) Initial node:
- Starts the execution of an activity.
- Provides tokens at all outgoing edges.
- Keeps tokens until the successive nodes accept them.
- Multiple initial nodes to model concurrency.

![|20](notes/images/Screenshot%202022-12-14%20at%2012.36.17.png) Activity final node:
- Ends all flows of an activity.
- First token that reaches the activity final node terminates the entire activity.
    - Concurrent subpaths included.
- Other control and object tokens are deleted.
    - Exception: object tokens that are already present at the output parameters of the activity.

![|20](notes/images/Screenshot%202022-12-14%20at%2012.38.44.png) Flow final node:
- Ends one execution path of an activity.
- All other tokens of the activity remain unaffected.

## Alternative Paths 
---
![|600](notes/images/Screenshot%202022-12-14%20at%2012.44.32.png)

### Decision Node
---
Used to defined alternative branches.

„Switch point“ for tokens.

Outgoing edges have guards:
- Syntax: \[Boolean expression].
- Token takes **one** branch.
- Guards must be mutually exclusive.
- Predefined: \[else].

![|300](notes/images/Screenshot%202022-12-14%20at%2012.42.25.png)

Decision behaviour:
- Specify behaviour that is not necessary for the evaluation of the guards.
- Execution must not have side effects.

![|150](notes/images/Screenshot%202022-12-14%20at%2012.42.06.png)

### Merge Node
---
Used to bring **alternative** subpaths together. It passes the token to the next node.

Combined decision and merge node:

![|100](notes/images/Screenshot%202022-12-14%20at%2012.43.36.png)

Decision and merge nodes can also be used to model loops:
![|500](notes/images/Screenshot%202022-12-14%20at%2012.44.00.png)

## Concurrent Paths
### Parallelisation Node
---
Used to split path into concurrent subpaths.

Duplicates token for all outgoing edges, example:

![|500](notes/images/Screenshot%202022-12-14%20at%2012.46.00.png)

### Synchronisation Node
---
Used to merge concurrent subpaths.

Token processing:
- Waits until tokens are present at all incoming edges.
- Merges all control tokens into one token and passes it on.
- Passes on all object tokens.

Combined parallelisation and synchronisation node:
![|70](notes/images/Screenshot%202022-12-14%20at%2012.47.10.png)

## Examples
### Equivalent Control Flow
---
![|600](notes/images/Screenshot%202022-12-14%20at%2012.48.30.png)

### Create and Send Invitations to a Meeting
---
While invitations are printed, already printed invitations are addressed.

When all invitation are addressed, then the invitations are sent.

![|600](notes/images/Screenshot%202022-12-14%20at%2012.48.48.png)

### Conduct Lecture (Student Perspective)
---
![|600](notes/images/Screenshot%202022-12-14%20at%2012.49.39.png)

### Token (Control Flow)
---
![](notes/images/Screenshot%202022-12-14%20at%2012.50.09.png)