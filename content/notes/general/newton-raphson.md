---
title: "Newton-Raphson Iteration"
tags:
  - cs
  - work/engineer-training
programming-languages:
created: 2022-06-12
---
# Newton-Raphson Iteration
---
Want to find the root of $f(x)$, for example a value for $x$ such that $f(x) = 0$.

Newton-Raphson starts with an initial estimate, $x_0$, and computes a better estimate, $x_1$
$x_1 = x_0 - \dfrac {f(x_0)}{f'(x_0)}$

For example, to compute $\dfrac {1}{b}$, we use:
$f(x) = \dfrac {1}{x} - b$
        $=$ $x^{-1} - b$
        
$f'(x) = -x^{-2}$

Leading to the formula:
$x_1 = x_0 - \dfrac {x_0^{-1} - b}{-x_0^{-2}}$
     $=$ $2x_0 - bx_0^{2}$

## Division
$c = \dfrac {a}{b}$

Compute $r = \dfrac {1}{b}$, then $c = r * a$

Algorithm:
  - $r_0$ as guess for $\dfrac {1}{b}$.
  - $r_{i+1} = 2r_i = br_i^{2}$ (Newton-Raphson)

Second order convergent, so $O(log\ r)$.

---
## See Also
- [](notes/university/cs2004/algorithms-and-data-structure.md#Mathematical%20Algorithms|Mathematical%20Algorithms)