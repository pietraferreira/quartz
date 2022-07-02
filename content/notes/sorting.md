---
title:  "Sorting"
tags:
  - cs-concept
  - engineer-training
  - sorting
programming-languagues:
created: 2022-06-05
---
# Sorting
---
## Sorting methods
- [Bubble Sort](notes/bubble-sort.md)
- [Shell Sort](notes/shell-sort.md)
- [Quicksort](notes/quicksort.md)
- [Heapsort](notes/heapsort.md)
- [Bucket Sort](notes/bucket-sort.md)

## Stability
A **stable** sort guarantee to preserve the ordering from a first sort, where the second sort finds the records to be equal.

An **unstable** sort does not make this guarantee.

### Examples
- Stable methods:
    - Merge sort and variants.
    - Variants of [bubble sort](notes/bubble-sort.md).
    - Insertion sort and variants.
    - Variants on [bucket sort](notes/bucket-sort.md).
        - Counting sort and variants.
    - Timsort (merge/insertion variant, Python).

**Unstable methods can all be made stable**.

- Add second level of comparison for equal keys.