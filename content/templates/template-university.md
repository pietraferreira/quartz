<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  } 
  tR += "---"
%>
title:  <%* tR += title %>
tags:
programming-languagues:
module:
term:
created: <% tp.date.now("YYYY-MM-DD") %>
---
# <%* tR += title %>