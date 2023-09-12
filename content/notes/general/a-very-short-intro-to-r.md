---
title:  "A Very Short Introduction to R"
tags:
  - university
module: cs3002
created: 2023-09-12
year: '3'
type: notes
programming-languages: r
---
---
# A (very) short introduction to R
---
Original material by Paul Torfs & Claudia Brauer.

R is for statistical computing and graphics, and iti s a public domain (GNU) project.

To set the working directory: `setwd("/Users/pietra/etc")`.

To check the installed packages: `library()` in the console.
- To install: `install.packages("geometry")`.
- We then load: `library("geometry")`.

To remove all variables from memory: `rm(list=ls())`.

To define a vector we use **c** meaning **concatenate**: `b=c(3,4,5)`.

- `rnorm()`: creates random samples from a normal distribution.
    - `rnorm(10, mean=1.2, sd=3.4)`.

We can then do something like:

```r
x = rnorm(100)
plot(x)
```

In doubt, we can do `help(rnorm)` or even `example(rnorm)`.

- `CTRL+SHIFT+S` runs the whole script, whereas `CTRL+ENTER` runs a line.

## Vectors
---
**WE INDEX FROM 1, NOT 0!!!**

- To construct: `vec1 = c(1,4,5,8,10)`.
    - Alternatively: `vec1 = seq(from=0, to=1, by=0.25)`.
- To change a value: `vec1[3] = 12`.
- We can then do things like: `sum(vec1)`.

## Matrices
---
2-d vectors.

- To construct: `mat=matrix(data=c(9,2,3,4,5,6),ncol=3)`.
    - Can also specify `nrow`.
    - We get:

|        | \[,1\] | \[,2\] | \[,3\] |
| ------ | ------ | ------ | ------ |
| \[1,\] | 9      | 3      | 5      |
| \[2,\] | 2      | 4      | 6      | 

Some operations are: 
- Address an element: `mat[1,2]`.
- Select a whole row: `mat[2,]`.
- Function example: `mean(mat)`.

## Data frames
---
A matrix with names above the columns.

```r
> t = data.frame(x = c(11,12,14), y = c(19,20,21), z = c(10,9,7))

> t
  x y z
 11 19 10
 12 20 9
 14 21 7

> mean(t$z)
8.666667

> mean(t[["z"]])
8.66666
```

## List
---
The "columns" don't need to be of the same length, unlike matrices and data frames.

```r
> L = list(one=1, two=c(1,2), five=seq(0, 1, length=5))

> L
$one
1
$two
1 2
$five
0.00 0.25 0.50 0.75 1.00

> names(L)
"one" "two" "five"
> L$five + 10
10.00 10.25 10.50 10.75 11.00
```

## Graphics
---
```r
x1 = rnorm(100)
x2 = rnorm(100)
x3 = rnorm(100)

t = data.frame(a=x1, b=x1+x2, c=x1+x2+x3)

plot(t$a, type="l", ylim=range(t), lwd=3, col=rgb(1,0,0,0.3))
lines(t$b, type="s", lwd=2, col=rgb(0.3,0.4,0.3,0.9))
points(t$c, pch=20, cex=4, col=rgb(0,0,1,0.3))
```
- `ylim=range(t)`: sets the y-axis limit to the range of values in the entire data frame **t**, ensuring the entire plot is visible.
- `lwd=3`: sets the line width to 3.
- `pch=20`: sets the type of points to solid circles.
- `cex=4`: scales the size of the points by a factor of 4.

## Reading and writing data files
---
```r
d = data.frame(a =c(3,4,5), b = c(12,32,54))
write.table(d, file="test.txt", row.names=FALSE)
d2 = read.table(file="test.txt", header=TRUE)
```
