---
title: "Linear Equations"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-07
---
# Linear Equations
---
The basic representation is: 
$$\begin{align*}
  \begin{pmatrix} a_{11} & a_{12}\\\ a_{21} & a_{22} \end{pmatrix}
  \begin{pmatrix} x_1\\\ x_2 \end{pmatrix}
  = \begin{pmatrix} b_1\\\ b_2 \end{pmatrix}
\end{align*}$$

- Solution by elimination is $n^3$ and program for specific matrix types can be written (Gustus, Lunger and Willerby).

Consider:

$$\begin{align*}
  \begin{pmatrix} a_{11} & a_{12} & \color{red}{a_{13}}\\\ \color{red}{a_{21}} & a_{22} & \color{red}{a_{23}}\\\ a_{31} & \color{red}{a_{32}} & a_{33}\end{pmatrix}
  \begin{pmatrix} x_1\\\ x_2\\\ x_3 \end{pmatrix}
  = \begin{pmatrix} b_1\\\ b_2\\\ b_3 \end{pmatrix}
\end{align*}$$

- Note that entries in red are **always** zero.

```c
p[1] = a[1][1]
p[2] = a[1][2]
p[3] = a[2][2]
p[4] = a[3][1]
p[5] = a[3][3]
p[6] = b[1]
p[7] = b[2]
p[8] = b[3]
```

## Custom Program
```c
// Elim a[2][1] from eqn 2 by subtracting multiple of eqn 1
// - but a[2][1] is already 0
// Elim a[3][1] from eqn 3 by subtracting multiple of eqn 1
q = p[4] / p[1];
p[4] = -q * p[2];          // p[4] now refers to a[3][2]
p[8] = p[8] - q * p[6];    // x[1] now eliminated
// Elim a[3][2]
q = p[4] / p[3];
p[8] = p[8] - q * p[7];
// Elimination complete
x[3] = p[8] / p[5];
x[2] = p[7] / p[3];
p[6] = p[6] - x[2] * p[2];
x[1] = p[6] / p[1];
```

After elimination stage the matrix is:
$$\begin{align*}
  \begin{pmatrix} a_{11} & a_{12} & 0\\\ 0 & a_{22} & 0\\\ 0 & 0 & a_{33}\end{pmatrix}
\end{align*}$$
## Diagonalisation
Gaussian elimination aims to create an upper-triangular matrix, start by swapping rows and columns.

Consider:
$$ \begin{pmatrix}
0 & a_{12} & 0 & a_{14} & 0 & 0 \\
0 & 0 & a_{23} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & a_{36} \\
0 & 0 & 0 & 0 & a_{45} & 0 \\
0 & 0 & a_{53} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & a_{66} 
\end{pmatrix}  $$

Use pivot of column 2, row 2, swapping with column 5 and row 4:
$$ \begin{pmatrix}
0 & a_{12} & 0 & a_{14} & 0 & 0 \\
0 & a_{45} & a_{23} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & a_{36} \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & a_{53} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & a_{66} 
\end{pmatrix}  $$
Try all possible pivots, choosing the one which will leave the array sparset. 

## See Also
- [](notes/general/algorithms-and-data-structure.md#Mathematical%20Algorithms%7CMathematical%20Algorithms)