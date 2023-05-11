---
title: "Lists"
tags:
  - work/engineer-training
created: 2022-06-05
last-edited: 2022-10-24
---
# Lists
---
A **list** is a sequence of zero or more data items, with the total number of items being the **length** of the list.

It can grow and shrink on demand and items can be accessed, inserted or deleted at any position.

![lists](notes/images/lists.png)

---
## Types of Lists
- [Arrays](notes/university/cs2004/arrays.md)
- [Linked List](notes/university/cs2004/linked-list.md)
- [Stack](notes/general/stack.md)
- [Queue](notes/university/cs2004/queue.md)
- [Hash Tables](notes/general/hash-tables.md)

## Lists in C
```c
struct elem {
  struct elem *next;
  int val;
};
```

```c
struct elem
  struct elem *next;
  struct elem *head;
  int val;
};
```

```c
struct elem *head = NULL;
struct elem *tail = NULL;
```
## Applications
- Often used to implement other data structures e.g. [queue](notes/university/cs2004/queue.md)s and [stack](notes/general/stack.md)s  
- Used for mathematical vectors and matrices
