---
title: "Valid Anagram"
tags:
  - leetcode
created: 2023-05-25
---
# Intuition
---
Get the frequencies from each String, then compare them and if 0 then it is an anagram.

# Approach
---
We keep track of the frequency of each letter in the two Strings. We check if the length is the same, if not then we return false as anagrams need to be the same length. We loop through each character in both Strings and increment the frequency of the corresponding letter. We do:

```java
x.chatAt(i) - 'a'
```

We subtract 'a', the Unicode/ASCII character with code 97. Therefore, when 'a' is subtracted by itself, the result is 0, meaning the index of **a** in the alphabet. With b for example, 'a' - 'b' is 1, indicating the index of 1. The range is 0 to 25, that's why the storing int array is of size 26.

# Complexity
---
- Time complexity: $O(n)$

- Space complexity: $O(1)$

# Code
---
```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        int[] x = new int[26];

        for (int i=0; i<s.length(); i++) {
            x[s.charAt(i) - 'a']++;
            x[t.charAt(i) - 'a']--;
        }

        for (int num : x) {
            if (num != 0) {
                return false;
            }
        }
        return true;
    }
}
```