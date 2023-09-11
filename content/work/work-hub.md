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
- [Hub](notes/engineer-training-hub.md)

### RISC-V
- [Notes](notes/riscv.md)

### Relocation Handling Prototype (CORE-V)
* [Notes](notes/private/work/relocation-prototype.md)
* [Reports](notes/private/work/relocation-prototype-reports-hub.md)

### CORE-V
- [CORE-V Toolchain](notes/corev-toolchain.md)
- [Assembly Test Example](notes/private/work/assembly-test-example-corev.md)

### Cobra (CORE-V)
- [Notes](notes/private/work/cobra.md)
* [Reports](work/cobra-reports-hub.md)

#### Videos
- [Porting the GNU CORE-V Toolchain](https://www.youtube.com/watch?v=RT0GqJySnBc&t=333s)
- [Adding an Instruction to the GNU assembler](https://www.youtube.com/watch?v=GcnkcK3uYYI&t=228s)
- [GNU toolchain for CORE-V](https://www.youtube.com/watch?v=3f3VuSzslxU&t=1418s) (Jessica talks about relocation handling [here](https://youtu.be/3f3VuSzslxU?t=1192))

### Tiger
- [Introduction to the project](assets/tiger.pdf)

### DejaGNU
- [DejaGNU documentation notes](notes/private/work/dejagnu-documentation-notes.md)

### LLVM
- [LLVM Toolchain](notes/llvm.md)
- [How to Write a LLVM backend](notes/how-to-write-a-llvm-backend.md)

### GCC
- [GCC Toolchain](notes/gcc.md)

## Talks
### 2020 Meetup
- [Script](notes/private/work/meetup-2020-corev-script.md)
- [Slides](assets/meetup-2020-corev-presentation-v11.odp)

### Facial Recognition - Coral Board
- [Script](notes/private/work/facial-recognition-board-talk-script.md)

### Strode College Talk - About me
- [Script](notes/private/work/strode-talk-script.md)

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