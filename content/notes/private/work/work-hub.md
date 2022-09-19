---
title: "Work Hub"
tags:
  - hub
---
# Work Hub

<center><img src="https://www.embecosm.com/app/uploads/logo-1.png"></center>

Everything work related, mostly organised by project.

## Useful Links
* [Wiki](https://internal.embecosm.com/wiki/Main_Page)
* [Engineering Training](https://git.embecosm.com/engineering-training)
- [Onboarding Guide for the OpenHW Group](https://docs.google.com/document/d/1wLbqSYdxl5GMawt9ggqnX9Yuqy6FLsH0t0uuXcZ_Tms/edit)

## Projects
### Engineer Training
- [[notes/general/engineer-training-hub|Hub]]

### RISC-V
- [[notes/general/riscv|Notes]]

### Relocation Handling Prototype (CORE-V)
* [[notes/private/work/relocation-prototype/relocation-prototype|Notes]]
* [[notes/private/work/relocation-prototype/relocation-prototype-reports/relocation-prototype-reports-hub|Reports]]

### CORE-V
- [[notes/general/corev-toolchain|CORE-V Toolchain]]
- [[notes/private/work/assembly-test-example-corev|Assembly Test Example]]

### Cobra (CORE-V)
- [[notes/private/work/cobra|Notes]]

#### Videos
- [Porting the GNU CORE-V Toolchain](https://www.youtube.com/watch?v=RT0GqJySnBc&t=333s)
- [Adding an Instruction to the GNU assembler](https://www.youtube.com/watch?v=GcnkcK3uYYI&t=228s)
- [GNU toolchain for CORE-V](https://www.youtube.com/watch?v=3f3VuSzslxU&t=1418s) (Jessica talks about relocation handling [here](https://youtu.be/3f3VuSzslxU?t=1192))

### Tiger
- [[assets/tiger.pdf|Introduction to the project]]

### Everest
- [[notes/private/work/software-overlay-standard|Overlay Standard]]

### DejaGNU
- [[notes/private/work/dejagnu-documentation-notes|DejaGNU documentation notes]]

### LLVM
- [[notes/general/llvm|LLVM Toolchain]]
- [[notes/general/how-to-write-a-llvm-backend|How to Write a LLVM backend]]

### GCC
- [[notes/general/gcc|GCC Toolchain]]

## Talks
### 2020 Meetup
- [[notes/private/work/meetup-2020-corev-script|Script]]
- [[assets/meetup-2020-corev-presentation-v11.odp|Slides]]

### Facial Recognition - Coral Board
- [[notes/private/work/facial-recognition-board-talk-script|Script]]

### Strode College Talk - About me
- [[notes/private/work/strode-talk-script|Script]]

## Meeting Notes
```dataview
table without ID
file.link as "Link", file.ctime as "Created Time"
from #meeting
sort file.ctime desc
```

## Notes by Project
### Cobra
```dataview
table without ID
title as "Title", file.ctime as "Created Time", file.link as "Link"
from #work and -#report and #cobra
sort file.ctime desc
```

### Tiger
```dataview
table without ID
title as "Title", file.ctime as "Created Time", file.link as "Link"
from #work and -#report and #tiger
sort file.ctime desc
```

### CORE-V
```dataview
table without ID
title as "Title", file.ctime as "Created Time", file.link as "Link"
from #work and -#report and #corev
sort file.ctime desc
```