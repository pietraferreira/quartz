---
title: "Tiger - Sync-up"
tags:
  - work/tiger
programming-languages:
created: 2020-11-18
project: tiger
type: meeting
---
Paolo been working on testing. He has TIGER/toolchain/gcc-test-scan, inside he has folders with errors for practicality. First take the directories from Jenkins and run the script. The message shows where in the compiler the error is happening. Can run 'make show' shows how many error are in each category, prioritise the ones occur the most.

Keep digging for more messages and fix errors.

Some tests give us error messages because of the whole using LLVM and GCC, ending up in conflicting error messages.

* First step is to fetch the latest GCC.log and download
* Look at the file
* Download and run Paolo's script to replicate
* Add more cases to better filter out

After that send Paolo messages!!

If you start working on a bug put it as an Issue on Git.