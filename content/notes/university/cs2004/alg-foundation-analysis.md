---
title: "Foundation of Algorithm Analysis" 
tags:
  - university/cs2004
programming-languages:
created: 2022-08-28
---
- Running time.
- Pseudo-code.
- Counting primitive operations.

## Running Time
---
Varies with the input and typically grows with the input size.

An algorithm may run faster on certain data set compared to others.

We have the following run times:
- Best case.
    - Not very informative as it might not happen very often.
- Worst case.
    - Easier to analyse, crucial to applications such as traffic control etc.
- Average case.
    - Take all inputs, calculate time for all inputs then sum all calculated values and divide by total inputs.

We can use `System.currentTimeMillis()` for example to get a measure of running time in Java.

### Limitations
---
- We would need same software and hardware environments.
- Sometimes difficult to implement algorithm.
- One algorithm can perform better than the rest for some inputs.

The solution is **asymptotic analysis**.

### Asymptotic Analysis
---
It uses a high-level description of the algorithm instead of an implementation.

We evaluate the performance of an algorithm in terms of input size and calculate how does the time taken by an algorithm increases with the input size.

# T(n)
---
We use it to measure the running time/computation of an algorithm.

Where **n** is the size of the input, if there is more than one input we might have T(n,m) where **n** and **m** are the sizes of the inputs.

We can use T(n) to calculate the **[Big O](notes/university/cs2004/big-o-notation.md)**.

# Pseudo-Code
---
![Screenshot 2022-09-03 at 22.19.59](notes/images/Screenshot%202022-09-03%20at%2022.19.59.png)

We do not call functions unless we describe the pseudo-code for them or describe what they do.

For example, we would not say:

```
X = Y.toLowerCase();
```

However we could say:

```
Let X equal the lower case version of Y
```

## Variables
---
![Screenshot 2022-09-03 at 22.22.12](notes/images/Screenshot%202022-09-03%20at%2022.22.12.png)

## If Statements
---
![Screenshot 2022-09-03 at 22.22.27](notes/images/Screenshot%202022-09-03%20at%2022.22.27.png)

## For Loops
---
![Screenshot 2022-09-03 at 22.22.39](notes/images/Screenshot%202022-09-03%20at%2022.22.39.png)

## Full Example
---
![Screenshot 2022-09-03 at 22.22.56](notes/images/Screenshot%202022-09-03%20at%2022.22.56.png)

# Primitive Operations
---
They are basic computations performed by an algorithm, for example:

- Evaluating an expression (x>y)
- Assigning a value to a variable.
- Indexing into an array.
- Calling a method.
- Returning from a method.

![Screenshot 2022-09-03 at 22.25.34](notes/images/Screenshot%202022-09-03%20at%2022.25.34.png)

The most difficult part is getting all of the nest loops correct.

![Screenshot 2022-09-03 at 22.34.28](notes/images/Screenshot%202022-09-03%20at%2022.34.28.png)

![Screenshot 2022-09-03 at 22.43.31](notes/images/Screenshot%202022-09-03%20at%2022.43.31.png)

![Screenshot 2022-09-03 at 22.45.28](notes/images/Screenshot%202022-09-03%20at%2022.45.28.png)

- Normally **if statements** have 9 primitive operations.

![Screenshot 2022-09-03 at 22.46.31](notes/images/Screenshot%202022-09-03%20at%2022.46.31.png)

---
[cs2004-exam](notes/university/cs2004/cs2004-exam.md)