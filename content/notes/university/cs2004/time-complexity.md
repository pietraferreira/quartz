---
title: "Time Complexity"
tags:
  - university/cs2004
last-edited:
created: 2022-12-16
---
# Sorting
---
It is one of the most common tasks in data analysis.

Examples:
- Print out a collection of employees sorted by salary.
- Print out a list of names in alphabetical order.

**Selection sort** repeatedly finds the smallest element in the unsorted tail region of a list and moves it to the front.

More info [here](notes/university/cs2004/selection-sort.md) (Selection Sort).

# How Fast is an Algorithm?
---
With an array of size `n`, count how many **primitive operations** are needed.

- To find the smallest, visit $n$ elements + 2 operations for the swap.
- To find the next smallest, visit $(n-1)$ elements + 2 operations for the swap.
- The  last term is 2 elements visited to find the smallest + 2 operations for the swap.

The number of operations:
- $(n+2) + [(n-1) + 2] + [(n-2) + 2] + ... + (1+2) + 2$.
- Which can be simplified to $n^2/2 + 5n/2 + 2$.
- $5n/2 + 2$ is small compared to $n^2/2$, so we can ignore it.
- We can also ignore the $1/2$, we use the **simplest** expression of the class.
- So it is simplified to $n^2$.
- Using Big-O notation:
    - $O(n^2)$.

# Search Algorithm
---
Check for an element from any data structure where it is stored.

Classed into two categories:
- Sequential Search (linear search).
    - The list is traversed sequentially, and every element is checked.
    - The list does **not** need to be sorted.
- Interval Search (binary search).
    - A divide and conquer algorithm.
    - The list **must** be sorted.

More info [here](notes/university/cs2004/graphs.md) (Graph Search).

# Binary Search vs Linear Search
---
Binary search is an $O(log2(n))$ algorithm:
- $n$ elements -> $n/2$ elements -> $n/4$ elements -> ... -> 1 element.

Linear search algorithm of order $O(n)$.

Which algorithm is faster?
- Binary search algorithm is much faster, **but** it only works on sorted data.

Examples of binary search:
- Spell checkers, phone books, dictionaries...