---
title: "Cobra"
tags:
  - work/cobra
project: cobra
type: hub
---
## Cheatsheet Notes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/cobra 
WHERE type = "cheatsheet"
sort file.ctime desc
```
## Related Notes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/cobra 
WHERE type != "report"
WHERE type != "meeting"
WHERE type != "hub"
sort file.ctime desc
```

## Minutes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/cobra
WHERE type = "meeting"
sort file.ctime desc
```

## Reports
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/cobra
WHERE type = "report"
sort file.ctime desc
```