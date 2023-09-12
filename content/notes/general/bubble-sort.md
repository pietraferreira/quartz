---
title:  "Bubble Sort"
tags:
  - cs/sorting
  - work/engineer-training
created: 2022-06-05
---
# Bubble Sort
---
Bubble sort is $O(n_2)$ meaning it is:
- efficient if **n** is small.
- efficient if the array is mostly sorted.

It is a **stable** sort.

It repeatedly compares adjacent parts of elements then swap the elements in part putting the smaller first. When it reaches the end of the list, it starts over. It stops when no more swaps can be made.

There are $n-1$ comparisons in the best case, with $O(n)$.

The worst case would be when the data is in reverse order.

![500](notes/images/Screenshot%202022-10-24%20at%2017.00.36.png)

## Implementation
```c
#define N 5

void swap (int *a, int *b) {
  int t = *a;
  *a = *b;
  *b = t;
}

int main () {
  int a[N];
  int j, k;

  for (k=1; k<N; k++) {
  for (j=k; (j>0) && (a[j] < a[j-1]); j--)
    swap (&(a[j]), &(a[j-1]));
  }
}
```

Output:
```bash
$ ./bubble5
96 96 20 94 9
96 20 96 94 9
20 96 96 94 9
20 96 94 96 9
20 94 96 96 9
20 94 96 9 96
20 94 9 96 96
20 9 94 96 96
9 20 94 96 96
```

## Code Example
```c
/* Basic bubble sort

   Copyright (C) 2020 Embecosm Limited <www.embecosm.com>
   Contributor: Jeremy Bennett <jeremy.bennett@embecosm.com>
   SPDX-License-Identifier: GPL-3.0-or-later */

#include <stdlib.h>
#include <stdio.h>

#ifndef N
#define N 5
#endif

void
populate (int arr[])
{
  for (int i = 0; i < N; i++)
    arr[i] = rand () % 100;
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
    printf ("%d ", arr[i]);

  printf ("\n");
}

int
main ()
{
  int a[N];
  int j, k;

  srand (561U);

  populate (a);
  dump_array (a);

  for (k = 1; k < N; k++)
    for (j = k; (j > 0) && (a[j] < a[j - 1]); j--)
      {
	swap (&(a[j]), &(a[j - 1]));
	dump_array (a);
      }

  return 0;
}

/*
Local Variables:
mode: C
c-file-style: "gnu"
End:
*/
```