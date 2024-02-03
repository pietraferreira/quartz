---
title:  "Python Notes"
tags:
created: 2024-02-03
---
# Python Notes
---
- Dynamically typed (types are determined at run time).

## Multiple assignment:
```python
n, m = 0, "abc"
```

- None is `null`.

- Multi-line conditions, we need the parenthesis as we have things in different lines:
```python
n, m = 1, 2
if ((n > 2 and
    n != m) or n == m):
    n += 1
```

## We can do conditionals like this:
```python
n = 1
if n > 2:
    n -= 1
elif n == 2:
    n *= 2
else:
    n += 2
```

## Loops
- While loop:
```python
n = 0
while n < 5:
    print(n)
    n += 1
```

- For loop, `i` is incremented automatically (we get 0 to 4):
```python
for i in range(5):
    print(i)
```

```python
# start at 2 and not include 6
for i in range(2, 6):
    print(i)

# the opposite (going backwards)
for i in rage(5, 1, -1):
    print(i)
```

## Math
```python
import math

# 2 to the power of 3
print(math.pow(2, 3))
print(math.sqrt(2))
print(math.floor(3/2)) # 1
print(math.ceil(3/2)) # 2

# double slash rounds down
print(5//2) # 2
print(5/2) # 2.5
```

## Arrays
- Also called lists.

```python
arr = [1, 2, 3]
print(arr)

# can use as stack
arr.append(4)
arr.append(5)
print(arr) # [1, 2, 3, 4, 5]

arr.pop()
print(arr) # [1, 2, 3, 4]

# location and value
arr.insert(1, 7)
print(arr) #  [1, 7, 2, 3, 4]

arr[0] = 0
arr[3] = 0
print(arr) # [0, 7, 2, 0, 4]

# initialise arr of size n with default value of 1
n = 5
arr = [1] * n
print(arr) # [1. 1. 1. 1. 1]
print(len(arr)) # 5

arr = [1, 2, 3]
print(arr[-1]) # last value (3)
print(arr[-2]) # 2

# sublists (slicing)
arr = [1, 2, 3, 4]
print(arr[1:3]) # 3 not included, so = [2, 3]

# unpacking
a, b, c = [1, 2, 3]
print(a, b, c) # 1 2 3

# loop through arrays

```