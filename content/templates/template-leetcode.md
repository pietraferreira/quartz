<%* let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  } 
-%>
<%*
  let result = title.replace(/-/g, ' ')
  result = result.charAt(0).toUpperCase() + result.slice(1);
  tR += "---"
%>
title:  <%* tR += "\"" + result + "\"" %>
tags:
  - leetcode
created: <% tp.date.now("YYYY-MM-DD") %>
---
# Intuition
---
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
---
<!-- Describe your approach to solving the problem. -->

# Complexity
---
- Time complexity:

<!-- Add your time complexity here, e.g. $O(n)$ -->

- Space complexity:

<!-- Add your space complexity here, e.g. $O(n)$ -->

# Code
---