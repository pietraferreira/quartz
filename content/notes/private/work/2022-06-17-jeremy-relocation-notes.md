---
title:  "2022-06-17 - Jeremy Relocation Notes"
tags:
  - work
  - work/corev
programming-languagues:
created: 2022-06-17
---
# 2022-06-17
---
end of linker -> introduce the issue of being no mechanism for vendor specific relocation -> discuss issue of relocations, we can do vendor specific but not vendor specific relocations. it boisl that we have the relocs for everyone in the linker, and gcc we have target specific

put more in 4th slide -> talk about corev vendor specific field -> we need to put in there second slide -> vendor specific GNU tools -> we can say this is how we do vendor specific target, later on we are going to talk about when it wont work properly

we add to linker assembly, we put in insn builtins, and code generation then optimisation <- talk about 4 stages <- we will apply the first 3 for each of those, the optimisation for the future

show stage1