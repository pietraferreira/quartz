---
title:  "Shell Sort"
tags:
  - cs-concept
  - engineer-training
  - sorting
programming-languagues:
  - c
created: 2022-06-05
---
# Shell Sort
---
Shell sort adds one more loop outside [[notes/general/bubble-sort|bubble sort]].

It starts by sorting small overlapping subsets, then makes then smaller but by then the array is mostly sorted.

It is an **unstable** sort.

## Shell Sort in C
```c
m = N;

do {
  m = (m + 2) / 3;

  for (i = 0; i < m; i++) 
    for (k = i + m; k < N; k += m) 
      for (j = k; (j > 0) && (a[j] < a[j - m]); j -= m) {
        swap (&(a[j]), &(a[j - m])); 
        dump_array(a);     
      }
  }
while (m != 1);
```

### Output:
```bash
16 16 0 14 9 11 10 2 3 4 1 11 8 17 14 5 11 12 15 16
2 16 0 14 9 11 10 16 3 4 1 11 8 17 14 5 11 12 15 16
2 16 0 14 9 11 10 14 3 4 1 11 8 17 16 5 11 12 15 16
2 3 0 14 9 11 10 14 16 4 1 11 8 17 16 5 11 12 15 16
2 3 0 14 9 11 10 14 5 4 1 11 8 17 16 16 11 12 15 16
2 3 0 1 9 11 10 14 5 4 14 11 8 17 16 16 11 12 15 16
2 3 0 1 9 11 10 14 5 4 12 11 8 17 16 16 11 14 15 16
2 3 0 1 9 8 10 14 5 4 12 11 11 17 16 16 11 14 15 16
1 3 0 2 9 8 10 14 5 4 12 11 11 17 16 16 11 14 15 16
1 3 0 2 9 8 4 14 5 10 12 11 11 17 16 16 11 14 15 16
1 3 0 2 9 8 4 14 5 10 12 11 11 17 16 15 11 14 16 16
1 3 0 2 9 8 4 12 5 10 14 11 11 17 16 15 11 14 16 16
1 3 0 2 9 8 4 12 5 10 14 11 11 11 16 15 17 14 16 16
1 3 0 2 9 8 4 12 5 10 11 11 11 14 16 15 17 14 16 16
1 3 0 2 9 8 4 11 5 10 12 11 11 14 16 15 17 14 16 16
1 3 0 2 9 8 4 11 5 10 12 11 11 14 16 15 16 14 16 17
1 3 0 2 9 5 4 11 8 10 12 11 11 14 16 15 16 14 16 17
1 3 0 2 9 5 4 11 8 10 12 11 11 14 14 15 16 16 16 17
1 0 3 2 9 5 4 11 8 10 12 11 11 14 14 15 16 16 16 17
0 1 3 2 9 5 4 11 8 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 9 5 4 11 8 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 5 9 4 11 8 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 5 4 9 11 8 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 4 5 9 11 8 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 4 5 9 8 11 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 4 5 8 9 11 10 12 11 11 14 14 15 16 16 16 17
0 1 2 3 4 5 8 9 10 11 12 11 11 14 14 15 16 16 16 17
0 1 2 3 4 5 8 9 10 11 11 12 11 14 14 15 16 16 16 17
0 1 2 3 4 5 8 9 10 11 11 11 12 14 14 15 16 16 16 17
```

## Code Example
```c
/* Basic Shell's sort

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
    printf ("%d ", arr[i]);

  printf ("\n");
}

int
main ()
{
  int a[N];
  int i, j, k, m;

  srand (561U);

  populate (a);
  dump_array (a);

  m = N;

  do
    {
      m = (m + 2) / 3;

      for (i = 0; i < m; i++)
	for (k = i + m; k < N; k += m)
	  for (j = k; (j > i) && (a[j] < a[j - m]); j -= m)
	    {
	      swap (&(a[j]), &(a[j - m]));
	      dump_array (a);
	    }
    }
  while (m != 1);

  return 0;
}

/*
Local Variables:
mode: C
c-file-style: "gnu"
End:
*/
```
