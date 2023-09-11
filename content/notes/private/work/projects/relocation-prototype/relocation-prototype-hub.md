---
title: "Relocation Prototype Reports"
tags:
  - work/relocation-prototype
project:
  - relocation-prototype
type: hub
---
## Cheatsheet Notes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/relocation-prototype  
WHERE type = "cheatsheet"
sort file.ctime desc
```
## Related Notes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/relocation-prototype AND -#work/relocation-prototype/report AND -#work/relocation-prototype/meeting
WHERE type != "hub"
sort file.ctime desc
```

## Minutes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/relocation-prototype/meeting 
sort file.ctime desc
```

## Reports
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #work/relocation-prototype/report
sort file.name desc
```