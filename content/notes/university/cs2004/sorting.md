---
title:  "Sorting"
tags:
  - university/cs2004
programming-languages:
last-edited: 2022-10-24
created: 2022-06-05
---
# Sorting
---
The sorting problem is a mapping from $x$ to $y$, where:
- $x$ and $y$ are both **n** length real vectors (lists and/or arrays).
- $y$ is a permutation of $x$ (different ordering).
- $y_i < y_{i+1}$ for all $i = 0, ..., n-1$.

It is the problem or reordering items of an array in a certain order.

## Sorting methods
- [Bubble Sort](notes/general/bubble-sort.md)
- [Quicksort](notes/general/quicksort.md)
- [Radix Sort](notes/university/cs2004/radix-sort.md)
- [Shell Sort](notes/general/shell-sort.md)
- [Heapsort](notes/general/heapsort.md)
- [Bucket Sort](notes/general/bucket-sort.md)
- [Selection Sort](notes/university/cs2004/selection-sort.md)

## Stability
A **stable** sort guarantee to preserve the ordering from a first sort, where the second sort finds the records to be equal.

An **unstable** sort does not make this guarantee. Unstable methods can all be made stable.

### Examples
- Stable methods:
    - Merge sort and variants.
    - Variants of [bubble sort](notes/general/bubble-sort.md).
    - Insertion sort and variants.
    - Variants on [bucket sort](notes/general/bucket-sort.md).
        - Counting sort and variants.
    - Timsort (merge/insertion variant, Python).

## Comparison of Sorting Algorithms
![Screenshot 2022-10-24 at 17.11.12](notes/images/Screenshot%202022-10-24%20at%2017.11.12.png)