<%* let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  } 
-%>
<%*
  result = title.charAt(0).toUpperCase() + title.slice(1);
  tR += "---"
%>
title:  <%* tR += "\"" + result + "\"" %>
tags:
  - daily
created: <% tp.date.now("YYYY-MM-DD") %>
---
# <%* tR += result %>
---
<% tp.file.cursor(1) %>