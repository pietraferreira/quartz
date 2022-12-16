---
title: "Asymptotic Analysis"
tags:
  - university
  - cs2004
last-edited:
created: 2022-12-16
---
---
The asymptotic analysis of an algorithm determines the running time in [Big O](notes/general/big-o-notation.md) notation.

To perform the asymptotic analysis:
- We find the worst-case number of primitive operations executed as a function of the input size, $T(n)$.
- We express this function with [Big O](notes/general/big-o-notation.md) notation.

[Big O](notes/general/big-o-notation.md) notation defines an upper bound of an algorithm (worst-case).

The runtime in terms of how quickly it grows is relative to the input, as the input gets larger.

More info [here](notes/university/time-complexity.md) (Time Complexity).

## Big-O Runtime Analysis
---
1. Find out the input and what $n$ represents.
2. Calculate the primitive operations of the algorithm in terms of $n$.
3. Drop the lower-order terms.
4. Remove all constant factors.

![|500](notes/images/Screenshot%202022-12-16%20at%2011.27.11.png)

## Example
---
The algorithm `ArrayMax` executes at most $T(n) = 8n - 5$ primitive operations.

We say that algorithm `ArrayMax` runs in $O(n)$ time.

Since constant factors and lower-order terms are eventually dropped, we can disregard them when counting primitive operations.

We do not have to be 100% accurate as long as we get he powers of $n$ correct.

## Rank from Fast to Slow
---
| Before       | After                          |
| ------------ | ------------------------------ |
| $T(n) = n^4$ | $T(n) = log_n \equiv O(log_n)$ |
| $T(n) = n log_n$ | $T(n) = n \equiv O(n)$ |
| $T(n) = n^2$ | $T(n) = n + 2n \equiv O(n)$ |
| $T(n) = n^2 log_n$ | $T(n) = n log_n \equiv O(n log_n)$ |
| $T(n) = n$ | $T(n) = n^2 \equiv O(n^2)$ |
| $T(n) = 2^n$ | $T(n) = n^2 log_n \equiv O(n^2 log_n)$ |
| $T(n) = log_n$ | $T(n) = n^4 \equiv O(n^2 log_n)$ |
| $T(n) = n + 2n$ | $T(n) = 2^n \equiv O(2^n)$ |

# Polynomial Time
---
An algorithm is solvable in **polynomial time** if the number of steps required to complete the algorithm for a give input  is $O(n^k)$ for some non-negative integer $k$, $n$ being the complexity of the input.
