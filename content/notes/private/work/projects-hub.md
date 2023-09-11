---
title: "Projects"
tags:
  - work
project: 
type: hub
---
## Project
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/tiger 
WHERE type = "cheatsheet"
sort file.ctime desc
```
## Related Notes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/tiger 
WHERE type != "report"
WHERE type != "meeting"
WHERE type != "hub"
sort file.ctime desc
```

## Minutes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/tiger
WHERE type = "meeting"
sort file.ctime desc
```

## Reports
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/tiger
WHERE type = "report"
sort file.ctime desc
```