---
title:  "Radix Sort"
tags:
  - cs-concept/sorting
programming-languagues:
module:
  - cs2004
term:
  - first
last-edited:
created: 2022-10-24
---
# Radix Sort
It is a non-comparison sorting method which only works on **binary** or **integer** data.

It takes $O(nb)$ time complexity, where:
- $n$ is the number of items.
- $b$ is the number of bits.
- best, worse and average case.

It is **very fast**.

It works by using a binary bucked sort for each binary digit:

1. Sort by the least significant bit.
2. Split input into 2 sets (bucket) based on the bit, those that have a 0 and those that have a 1 (ordering of data must be maintained).
3. Proceed to the next significant bit and repeat until we run out.

![400](notes/images/Screenshot%202022-10-24%20at%2017.13.50.png)