---
title: "Richest Customer Wealth"
tags:
  - leetcode
created: 2023-05-24
---
# Intuition
---
![](notes/images/Screenshot%202023-05-24%20at%2012.36.11.png)

I'd sum each row, find the one with the highest value and then return that value.

# Approach
---

# Complexity
---
- Time complexity: $O(m * n)$

- Space complexity: $O(1)$

# Code
---
```java
class Solution {
    public int maximumWealth(int[][] accounts) {
        int max = -1;

        for (int i = 0; i < accounts.length; i++) {
            int sum = 0;

            for (int j = 0; j < accounts[0].length; j++) {
                sum += accounts[i][j];
            }
            max = Math.max(max, sum);
        }
        return max;
    }
}
```

```java
class Solution {
    public int maximumWealth(int[][] accounts) {
        int maxNow = 0;

        for (int[] customer : accounts) {
            int currentWealth = 0;

            for (int bank : customer) {
                currentWealth += bank;
            }
            maxNow = Math.max(maxNow, currentWealth);
        }
        return maxNow;
    }
}
```

```cpp
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int x = INT_MIN;

        for (int i=0; i<accounts.size(); i++) {
            int sum = 0;

            for (int j=0; j<accounts[i].size(); j++) {
                sum += accounts[i][j];
            }
            x = max(x, sum);
        }
        return x;
    }
};
```