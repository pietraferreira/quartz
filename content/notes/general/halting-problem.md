---
title: "Halting Problem"
tags:
  - cs
  - work/engineer-training
programming-languages:
created: 2022-06-07
---
A program to determine if **any** given program will complete in finite time.

So imagine you write this program, P, and in its main program it has:
```c
if (willhalt (prog))
  printf ("Supplied program will halt");
else
  printf ("Supplied program will not halt");
```

Now edit P to create program Q:
```c
if (willhalt (q))
  whilte (1);
else
  exit (0);
```

Feed Q to itself. Will it halt?

- Restricting the problem makes it tractable.
- Event loops are often infinite loops.
- Beware requirements masquerading as the halting problem.

## See also
- [Problems](notes/general/cs-problems.md)