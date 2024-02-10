---
title: "Time Complexity"
tags:
  - university/cs2004
last-edited:
created: 2022-12-16
---
Time complexity is a way to describe the amount of computational time that an algorithm takes to complete as a function of the length of the input. It gives us an idea of the growth rate of the runtime as the size of input data increases. 
## Basics of Time Complexity
- **Constant Time $(O(1))$**: The execution time remains constant regardless of the input size.
  - Example: Accessing any element in an array by index.
- **Linear Time $(O(n))$**: The execution time grows linearly with the increase in input size.
  - Example: Finding the maximum element in an unsorted list.
- **Quadratic Time $(O(n^2))$**: The execution time grows quadratically with the increase in input size.
  - Example: Bubble sort or other simple sorting algorithms.
- **Logarithmic Time $(O(log n))$**: The execution time grows logarithmically as the input size increases.
  - Example: Binary search in a sorted array.
- **Linearithmic Time $(O(n log_n))$**: The execution time grows in n log n manner.
  - Example: Efficient sorting algorithms like [[notes/general/quicksort|quicksort]] and mergesort.

## Examples and How to Figure Out Time Complexity
### Example 1: Constant Time Complexity $(O(1))$
```python
def get_first_element(my_list):
    return my_list[0]
```
- **Explanation**: No matter how large the list is, this function always takes the same time to return the first element.

### Example 2: Linear Time Complexity (O(n))
```python
def find_max(my_list):
    max_value = my_list[0]
    for value in my_list:
        if value > max_value:
            max_value = value
    return max_value
```
- **Explanation**: The function goes through each element once to find the maximum, so the time taken grows linearly with the size of the input list.

#### Example 3: Quadratic Time Complexity (O(n^2))
```python
def bubble_sort(my_list):
    n = len(my_list)
    for i in range(n):
        for j in range(0, n-i-1):
            if my_list[j] > my_list[j+1]:
                my_list[j], my_list[j+1] = my_list[j+1], my_list[j]
    return my_list
```
- **Explanation**: For each element in the list, the algorithm performs another loop over the remaining elements. This results in time complexity of O(n^2).

#### Example 4: Logarithmic Time Complexity (O(log n))
```python
def binary_search(my_list, item):
    low = 0
    high = len(my_list) - 1
    while low <= high:
        mid = (low + high) // 2
        guess = my_list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None
```
- **Explanation**: The search space is halved each time, leading to a logarithmic growth in execution time with respect to the size of the input list.

### Tips for Figuring Out Time Complexity
1. **Identify the Basic Operations**: Look for loops, recursive calls, and any operations that depend on the size of the input.
2. **Consider the Worst Case**: Time complexity often refers to the worst-case scenario.
3. **Count the Nested Loops**: The number of nested loops often indicates the degree of the polynomial time complexity (e.g., two nested loops usually mean O(n^2)).
4. **Look for Divide and Conquer**: Algorithms that divide the problem in half at each step typically have a logarithmic time complexity.

By understanding these concepts and applying them to code, you can effectively analyze and articulate the time complexity of various algorithms.
# Sorting
---
It is one of the most common tasks in data analysis.

Examples:
- Print out a collection of employees sorted by salary.
- Print out a list of names in alphabetical order.

**Selection sort** repeatedly finds the smallest element in the unsorted tail region of a list and moves it to the front.

More info [here](notes/university/year2/cs2004/selection-sort.md) (Selection Sort).

# How Fast is an Algorithm?
---
With an array of size `n`, count how many **primitive operations** are needed.

- To find the smallest, visit $n$ elements + 2 operations for the swap.
- To find the next smallest, visit $(n-1)$ elements + 2 operations for the swap.
- The last term is 2 elements visited to find the smallest + 2 operations for the swap.

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

More info [here](notes/university/year2/cs2004/graphs.md) (Graph Search).

# Binary Search vs Linear Search
---
Binary search is an $O(log2(n))$ algorithm:
- $n$ elements -> $n/2$ elements -> $n/4$ elements -> ... -> 1 element.

Linear search algorithm of order $O(n)$.

Which algorithm is faster?
- Binary search algorithm is much faster, **but** it only works on sorted data.

Examples of binary search:
- Spell checkers, phone books, dictionaries...