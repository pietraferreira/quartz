---
title: "Lists"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
  - c
created: 2022-06-05
---
# Lists
---
![](images/lists.png)

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
