---
title: "Lists"
tags:
  - cs/algorithms
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
- [Arrays](notes/general/arrays.md)
- [Linked List](notes/general/linked-list.md)
- [Stack](notes/general/stack.md)
- [Queue](notes/general/queue.md)
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
- Often used to implement other data structures e.g. [queue](notes/general/queue.md)s and [stack](notes/general/stack.md)s  
- Used for mathematical vectors and matrices
