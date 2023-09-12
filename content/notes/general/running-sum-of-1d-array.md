---
title: "Running Sum of 1D Array"
tags:
  - leetcode
created: 2023-05-24
---
# Intuition
---
First I thought about just summing index 1, not 0, with the previous element (e.g.: i - 1). However, the output needs to be an integer array. This is my initial non-working code:

```java 
class Solution {

    public int[] runningSum(int[] nums) {
        int[] runningSum = 0;

        for (int i = 1; i < nums.length; i++) {
            runningSum = nums[i] + nums[i-1];
        }
        return runningSum;
    }
}
```

# Approach
---
Not much to say, pretty simple.

# Complexity
---
- Time complexity: $O(n)$

- Space complexity: $O(1)$ (constant)

# Code
---
```java
class Solution {
    public int[] runningSum(int[] nums) {
        int[] res = new int[nums.length];

        // the first sum is always the first value
        res[0] = nums[0];

        for (int i = 1; i < nums.length; i++) {
            res[i] = nums[i] + res[i-1];
        }
        return res;
    }
}
```

```java
class Solution {
    public int[] runningSum(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            nums[i] += nums[i-1];
        }
        return nums;
    }
}
```