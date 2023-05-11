---
title: "UML - Sequence Diagram"
tags:
  - uml
  - university/cs2002
programming-languagues:
created: 2022-10-20
last-modified: 2023-05-11
---
**Inter-object behaviour**: interactions between objects.

**Interaction**: how data is exchanged between interaction partners.

**Interaction partners**:
    - Human (lectures, administrator, ...)
    - Non-human (sever, printer, executable software, ...)

Examples of interactions: 
- Conversation between persons.
- Message exchange between humans and a software system.
- Communication protocols.
- Sequence of method calls in a program.

# Interaction Diagrams
---
Used to:
1. Specify interactions.
2. Model concrete scenarios.
3. Describe communication sequences at different levels of detail.

They show:
- System's interaction with its environment.
- Interaction between system parts in order to show how a specific use case can be implemented.
- Interprocess communication in which the partners involved must observe certain protocols.
- Communication at class level (operation calls, inter-object behaviour).

## Interaction Partners
---
Depicted as lifelines.

Head of the lifeline:
- `roleName:Class`
- Roles are a more general concept than objets.
- Objects can take on different roles over its lifetime.

Body of the lifeline:
- Vertical, dashed line.
- Lifetime of the object associated with it.

![Screenshot 2022-10-20 at 12.13.13|600](notes/images/Screenshot%202022-10-20%20at%2012.13.13.png)

# Sequence Diagram
---
Interaction = sequence of event specifications.

- Horizontal axis: involved interaction partners.
- Vertical axis: chronological order of the interaction.

![Screenshot 2022-10-20 at 12.11.41|500](notes/images/Screenshot%202022-10-20%20at%2012.11.41.png)

# Exchanging Messages
---
Interaction: sequence of events.

**Message** is defined via send event and receive event.

Execution specification:
- Continuous bar.
- Used to visualise when an interaction partner executes some behaviour.

![Screenshot 2022-10-20 at 12.47.57|600](notes/images/Screenshot%202022-10-20%20at%2012.47.57.png)

Order of messages:
![Screenshot 2022-10-20 at 12.48.16|550](notes/images/Screenshot%202022-10-20%20at%2012.48.16.png)

## Messages
---
**Synchronous message**:
- Filled arrow.
- Sender waits for a response before continuing.
- Syntax of message name: `msg(par1, par2)`

**Asynchronous message**:
- Normal arrow.
- Sender continues without waiting for a response message.
- Syntax: `msg(par1, par2)`

**Response message**;
- Dashed lines, normal arrow.
- May be omitted if content and location are obvious.
- Syntax: `att=msg(par1, par2):val`
    - `att`: return value can optionally be assigned to a variable.
    - `msg`: name of the message.
    - `val`: return value.

Found message: sender of a message is unknown or not relevant.
Lost message: receiver is unknown or not relevant.

![Screenshot 2022-10-20 at 14.31.09|150](notes/images/Screenshot%202022-10-20%20at%2014.31.09.png)

**Time-consuming message**:
- Message with duration.
- Usually messages are assumed to be transmitted without any loss of time.
- Expresses that time elapses between the sending and the receipt of a message.

![Screenshot 2022-10-20 at 14.32.16|550](notes/images/Screenshot%202022-10-20%20at%2014.32.16.png)

# Objects
---
Object creation:
- Arrowhead points to the head of the lifeline of the object to be created.
- Keyword: `new`.

Object destruction:
- Object is deleted.
- Large cross at the end of the lifeline.

![Screenshot 2022-10-20 at 14.33.37|150](notes/images/Screenshot%202022-10-20%20at%2014.33.37.png) ![Screenshot 2022-10-20 at 14.36.41|400](notes/images/Screenshot%202022-10-20%20at%2014.36.41.png)

# Combined Fragments
---
It models various control structures and has **12 predefined types of operators**.

![Screenshot 2022-10-20 at 14.40.55|550](notes/images/Screenshot%202022-10-20%20at%2014.40.55.png)

## Types of Combined Fragments
---
![Screenshot 2022-10-20 at 14.41.12|500](notes/images/Screenshot%202022-10-20%20at%2014.41.12.png)

### Alt Fragment
- To model alternative sequences, similar to **switch statement**.
- Guards: used to select one path to be executed.
    - Modelled in square brackets.
    - default: `true`
    - predefined: `[else]`
    - Have to be **disjoint** to avoid indeterministic behaviour.

- Multiple operands.

### Opt Fragment
- To model an optional sequence.
- Execution at runtime is dependent on the guard.
- Exactly **one** operand.
- Similar to **if statement** without the else branch.
- Equivalent to **alt** fragment with two operands, one of which is empty.

![Screenshot 2022-10-20 at 14.42.57|500](notes/images/Screenshot%202022-10-20%20at%2014.42.57.png)

### Loop Fragment
- To express that a sequence is to be executed repeatedly.
- Exactly **one** operand.
- `loop` followed by the min/max number of iterations.
    - default: `(*) ..` no upper limit.

Guard:
- Evaluated as soon as the minimum number of iterations has taken place.
- Checked for each iteration within the `(min, max)` limits.
- If the guard evaluates to false, the execution of the loop is terminated.

![Screenshot 2022-10-20 at 14.46.51|500](notes/images/Screenshot%202022-10-20%20at%2014.46.51.png)

### Break Fragment
- Simple form of **exception handling**.
- Exactly one operand with a guard.
- If the guard is true:
    - Interactions within this operand are executed.
    - Remaining operations of the surrounding fragment are omitted.
    - Interaction continues in the next higher level fragment.
    - Different behaviour than `opt` fragment.

![Screenshot 2022-10-20 at 14.48.11|150](notes/images/Screenshot%202022-10-20%20at%2014.48.11.png)

Note that **D** is not executed if **break** is executed.

#### Loop and Break Fragment - Example
![Screenshot 2022-10-20 at 14.49.23|450](notes/images/Screenshot%202022-10-20%20at%2014.49.23.png)

### Seq Fragment
- Default order of events.
- Weak sequencing:
    1. Ordering of events within each of the operands is maintained in the result.
    2. Events on different lifelines from different operands may come in any order.
    3. Events on the same lifeline from different operands are ordered such that an event of the first operand comes before that of the second operand.

![Screenshot 2022-10-20 at 14.50.46|500](notes/images/Screenshot%202022-10-20%20at%2014.50.46.png)

#### Seq Fragment - Example
![Screenshot 2022-10-20 at 14.51.13|500](notes/images/Screenshot%202022-10-20%20at%2014.51.13.png)

### Strict Fragment
- Sequential interaction with order.
- Order of event occurrences on different lifelines between different operands is significant.

Messages in an operand that is **higher up** on the **vertical** axis are always exchanged before the messages in an operand that is lower down on the vertical axis.

![Screenshot 2022-10-20 at 14.52.14|500](notes/images/Screenshot%202022-10-20%20at%2014.52.14.png)

#### Strict Fragment - Example
![Screenshot 2022-10-20 at 14.52.29|500](notes/images/Screenshot%202022-10-20%20at%2014.52.29.png)

### Par Fragment
- To set aside chronological order between messages in different operands.
- Execution paths of different operands can be interleaved.
- Restrictions of each operand need to be respected.
- Order of the different operands is irrelevant.
- Concurrency, no true parallelism

![Screenshot 2022-10-20 at 14.53.25|500](notes/images/Screenshot%202022-10-20%20at%2014.53.25.png)

#### Par Fragment - Example
![Screenshot 2022-10-20 at 14.53.39|500](notes/images/Screenshot%202022-10-20%20at%2014.53.39.png)