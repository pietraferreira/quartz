---
title:  "LeetCode Concepts"
tags:
  - leetcode
created: 2024-02-10
---
---
# Arrays and Hashing
## Dynamic Arrays
- Dynamic arrays can resize, unlike static arrays with fixed capacities.
- Both array types allow $O(1)$ [time complexity](notes/university/year2/cs2004/time-complexity) for accessing elements.
- Dynamic arrays might waste more memory due to over-allocation compared to [[notes/university/year2/cs2004/linked-list|linked lists]].
- They manage capacity through expansion or shrinking based on usage, usually doubling the capacity upon resizing.

### Example in Python (List)
```python
dynamic_arr = []
print(len(dynamic_arr))

# add elements
for i in range(10):
    dynamic_arr.append(i)
print("Dynamic Array: ", dynamic_arr)

# removing
for i in range(5):
    dynamic_arr.pop()
print("Resised Dynamic Array: ", dynamic_arr)
```
