---
title:  "Stacks and Queues"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-05
---
# Stacks and Queues
---
- **Stack**: last in, first out (LIFO), simple [[lists|list]] works well for this. 
    - Think of a stack of plates.
    - The add and remove operations are called **push** and **pop**.

- **Queue**: first in, last out (FIFO), double linked [[lists|list]] works well.
    - Think of a standard queue, for example at the bank.
    - The add and remove operations are called **enqueue** and **dequeue**.

## Stack API
A basic interface is:

```java
public interface StringStack {
  StringStack();
  void push(String item);
  String pop();
  boolean isEmpty();
  // optional
  int size();
}
```