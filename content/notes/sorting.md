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
- [[bubble-sort|Bubble Sort]]
- [[shell-sort|Shell Sort]]
- [[quicksort|Quicksort]]
- [[heapsort|Heapsort]]
- [[bucket-sort|Bucket Sort]]

## Stability
A **stable** sort guarantee to preserve the ordering from a first sort, where the second sort finds the records to be equal.

An **unstable** sort does not make this guarantee.

### Examples
- Stable methods:
    - Merge sort and variants.
    - Variants of [[bubble-sort|bubble sort]].
    - Insertion sort and variants.
    - Variants on [[bucket-sort|bucket sort]].
        - Counting sort and variants.
    - Timsort (merge/insertion variant, Python).

**Unstable methods can all be made stable**.

- Add second level of comparison for equal keys.