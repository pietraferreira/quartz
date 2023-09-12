---
title: "Heapsort"
tags:
  - cs
  - work/engineer-training
programming-languages:
  - c
created: 2022-06-06
---
# Heapsort
---
Uses [binary heap trees](notes/general/binary-heap.md) to [sort](notes/university/year2/cs2004/sorting.md) (I think!).

It has average [](notes/private/work/compiler-optimisation.md#Performance|performance): $O_{n\ log\ n}$
Worst case performance: $O_{n\ log\ n}$

- Refer to [big o notation](notes/university/year2/cs2004/big-o-notation.md).

It is not [](notes/university/year2/cs2004/sorting.md#Stability|stable).

Valuable data representation for anything where you need to quickly access the largest (smallest) element.    
- e. g.:  time ordered queue, with the next item at the root.

```c
void
heapify (int *a, int i, int n)
{
  int lc = 2 * i + 1;          /* Index of left child */
  int rc = 2 * i + 2;          /* Index of right child */

  if (lc <= (n - 1))           /* Not a leaf */
  {
    int k;                     /* Larger child (if > a[i]) */
    if (rc > (n - 1))
      if (a[lc] > a[i])
        k = lc;                /* Swap left child */
      else
        return;                /* Heap in order */
    else if ((a[lc] >= a[i]) && (a[lc] >= a[rc]))
      k = lc;                  /* Swap left child */
    else if (a[rc] >= a[i])
      k = rc;                  /* Swap right child */
    else
      return;                  /* Heap in order */

    swap ((&a[i]), &(a[k]));   /* Swap the larger child */
    heapify (a, k, n);
  }
}
```

## Buildheap
```c
void
buildheap (int *a)
{
  int i;

  for (i = N - 1; i >= 0; i--)
    heapify (a, i, N);
}
```

### To sort with a binary heap:
```c
buildheap(a);

for (i = N - 1; i >= 0; i--)
{
  swap (&(a[0]), &(a[i]));
  heapify (a, 0, i);
}
```

## Output
### Building the heap
```bash
16 16  0 14  9 11 10  2  3  4  1 11  8 17 14  5 11 12 15 16
16 16  0 14  9 11 10  2  3 16  1 11  8 17 14  5 11 12 15  4
16 16  0 14  9 11 10  2 15 16  1 11  8 17 14  5 11 12  3  4
16 16  0 14  9 11 10 11 15 16  1 11  8 17 14  5  2 12  3  4
16 16  0 14  9 11 17 11 15 16  1 11  8 10 14  5  2 12  3  4
16 16  0 14 16 11 17 11 15  9  1 11  8 10 14  5  2 12  3  4
16 16  0 15 16 11 17 11 14  9  1 11  8 10 14  5  2 12  3  4
16 16 17 15 16 11  0 11 14  9  1 11  8 10 14  5  2 12  3  4
16 16 17 15 16 11 14 11 14  9  1 11  8 10  0  5  2 12  3  4
16 16 17 15 16 11 14 11 14  9  1 11  8 10  0  5  2 12  3  4
17 16 16 15 16 11 14 11 14  9  1 11  8 10  0  5  2 12  3  4
```

### Creating the sort
```bash
16  4 16 15 16 11 14 11 14  9  1 11  8 10  0  5  2 12  3 17
16 16 16 15  4 11 14 11 14  9  1 11  8 10  0  5  2 12  3 17
16 16 16 15  9 11 14 11 14  4  1 11  8 10  0  5  2 12  3 17
16  3 16 15  9 11 14 11 14  4  1 11  8 10  0  5  2 12 16 17
16 15 16  3  9 11 14 11 14  4  1 11  8 10  0  5  2 12 16 17
16 15 16 14  9 11 14 11  3  4  1 11  8 10  0  5  2 12 16 17
16 15 16 14  9 11 14 11 12  4  1 11  8 10  0  5  2  3 16 17
16 15  3 14  9 11 14 11 12  4  1 11  8 10  0  5  2 16 16 17
16 15 14 14  9 11  3 11 12  4  1 11  8 10  0  5  2 16 16 17
16 15 14 14  9 11 10 11 12  4  1 11  8  3  0  5  2 16 16 17
15  2 14 14  9 11 10 11 12  4  1 11  8  3  0  5 16 16 16 17
15 14 14  2  9 11 10 11 12  4  1 11  8  3  0  5 16 16 16 17
15 14 14 12  9 11 10 11  2  4  1 11  8  3  0  5 16 16 16 17
14  5 14 12  9 11 10 11  2  4  1 11  8  3  0 15 16 16 16 17
14 12 14  5  9 11 10 11  2  4  1 11  8  3  0 15 16 16 16 17
14 12 14 11  9 11 10  5  2  4  1 11  8  3  0 15 16 16 16 17
14 12  0 11  9 11 10  5  2  4  1 11  8  3 14 15 16 16 16 17
14 12 11 11  9  0 10  5  2  4  1 11  8  3 14 15 16 16 16 17
14 12 11 11  9 11 10  5  2  4  1  0  8  3 14 15 16 16 16 17
12  3 11 11  9 11 10  5  2  4  1  0  8 14 14 15 16 16 16 17
12 11 11  3  9 11 10  5  2  4  1  0  8 14 14 15 16 16 16 17
12 11 11  5  9 11 10  3  2  4  1  0  8 14 14 15 16 16 16 17
11  8 11  5  9 11 10  3  2  4  1  0 12 14 14 15 16 16 16 17
11  9 11  5  8 11 10  3  2  4  1  0 12 14 14 15 16 16 16 17
11  9  0  5  8 11 10  3  2  4  1 11 12 14 14 15 16 16 16 17
11  9 11  5  8  0 10  3  2  4  1 11 12 14 14 15 16 16 16 17
11  9  1  5  8  0 10  3  2  4 11 11 12 14 14 15 16 16 16 17
11  9 10  5  8  0  1  3  2  4 11 11 12 14 14 15 16 16 16 17
10  9  4  5  8  0  1  3  2 11 11 11 12 14 14 15 16 16 16 17
 9  2  4  5  8  0  1  3 10 11 11 11 12 14 14 15 16 16 16 17
 9  8  4  5  2  0  1  3 10 11 11 11 12 14 14 15 16 16 16 17
 8  3  4  5  2  0  1  9 10 11 11 11 12 14 14 15 16 16 16 17
 8  5  4  3  2  0  1  9 10 11 11 11 12 14 14 15 16 16 16 17
 5  1  4  3  2  0  8  9 10 11 11 11 12 14 14 15 16 16 16 17
 5  3  4  1  2  0  8  9 10 11 11 11 12 14 14 15 16 16 16 17
 4  3  0  1  2  5  8  9 10 11 11 11 12 14 14 15 16 16 16 17
 3  2  0  1  4  5  8  9 10 11 11 11 12 14 14 15 16 16 16 17
 2  1  0  3  4  5  8  9 10 11 11 11 12 14 14 15 16 16 16 17
 1  0  2  3  4  5  8  9 10 11 11 11 12 14 14 15 16 16 16 17
 0  1  2  3  4  5  8  9 10 11 11 11 12 14 14 15 16 16 16 17
```

## Code Example
```c
/* Basic heapsort

   Copyright (C) 2020 Embecosm Limited <www.embecosm.com>
   Contributor: Jeremy Bennett <jeremy.bennett@embecosm.com>
   SPDX-License-Identifier: GPL-3.0-or-later */

#include <stdlib.h>
#include <stdio.h>

#ifndef N
#define N 20
#endif

void
populate (int arr[])
{
  for (int i = 0; i < N; i++)
    arr[i] = rand () % N;
}

void
swap (int *a, int *b)
{
  int t = *a;
  *a = *b;
  *b = t;
}

void
dump_array (int arr[])
{
  for (int i = 0; i < N; i++)
    printf ("%2d ", arr[i]);

  printf ("\n");
}

void
heapify (int *a, int i, int n)
{
  int lc = 2 * i + 1;		/* Index of left child */
  int rc = 2 * i + 2;		/* Index of right child */

  if (lc <= (n - 1))		/* Not a leaf) */
    {
      int  k;			/* Larger child (if > a[i]) */
      if (rc > (n - 1))
	if (a[lc] > a[i])
	  k = lc;		/* Swap left child */
	else
	  return;		/* Heap in order */
      else if ((a[lc] > a[i]) && (a[lc] >= a[rc]))
	k = lc;			/* Swap left child */
      else if (a[rc] >= a[i])
	k = rc;			/* Swap right child */
      else
	return;			/* Heap in order */

      swap ((&a[i]), &(a[k]));	/* Swap the larger child */
      dump_array (a);
      heapify (a, k, n);
    }
}

void
buildheap (int *a)
{
  int i;

  for (i = N - 1; i >= 0; i--)
    heapify (a, i, N);
}

int
main ()
{
  int a[N];
  int i;

  srand (561U);

  populate (a);
  dump_array (a);

  buildheap (a);
  printf ("\n");

  for (i = N - 1; i >= 0; i--)
    {
      swap (&(a[0]), &(a[i]));
      heapify (a, 0, i);
    }
  dump_array (a);
  return 0;
}

/*
Local Variables:
mode: C
c-file-style: "gnu"
End:
*/
```