---
title: "Vectors and Arrays"
tags:
  - cs-concept
  - work/engineer-training
---
# Vectors and Arrays
---
- Vectors are typically 1-d whereas arrays can be multi-dimensional.
- in **C/C++** they are indexed from zero.

Declared arrays have *literal* constant size **fixed** at compile time:
```c
#define SIZE 42
int c[SIZE];
```

We **cannot** use *const* variables as size:
```c
const int NEW_SIZE = 561
int c[NEW_SIZE];  /* This is not a literal constant! */
```

For **variable size** vectors we use **malloc** and **pointers** (allocated on the heap). However there are some constraints on its use:
```c
int func(int n) {
  int *vec = (int *) malloc (n * sizeof (*vec));

  for(int i=0; i<n; i++) {
  vec[i] = n; 
  }
}
```

```ad-note
We can also use **alloca** (allocated on the stack).
```

## Associative arrays
- Also known as **addressable arrays** or [maps](notes/university/cs2004/sets-and-maps.md).

Ordinary arrays/vectors when given an index into the array output a value whereas **associative arrays** when given a value outputs an index.

They are common in hardware and efficient to implement. However they are harder to implement in software.

## Sparse arrays
It is an array of data in which many elements have a value of zero. It can be compressed or truncated to fit storage spaces. For example, rather than holding all of the zero values in variables, the array could simply point to the number of zero values in a sequence or otherwise compress the array's data storage.

If they are regular (e.g. in numerical analysis), then map mathematically to vector.

If irregular, use a vector of pointers to sparse rows, represented in compact form (e.g. column/value pairs or linked list).

Reference: [Sparse Array - Techopedia](https://www.techopedia.com/definition/9480/sparse-array)