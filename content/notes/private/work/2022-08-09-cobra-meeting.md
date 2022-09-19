---
title: "2022-08-09 - Cobra Meeting"
tags:
   - meeting/cobra
   - cobra
   - work
programming-languagues:
created: 2022-08-09
---
# 2022-08-09 - Cobra Meeting
We have finished verifying Zc* in the GNU assembler and dealt with all open pull requests.

As we reported yesterday, the number of tests did reduce. The reason for this is because we have consolidated them as to not clutter the test directory.

### Changes
We made explicit the Zca and C equivalency, meaning before we only have the C instruction class and now we have a `INSN_CLASS_C_OR_ZCA`.

- What kind of tests have we produced?

We have created assembly tests for the Zcmt instructions and rectified+expanded the tests for the other extensions.

We have created tests to explore the range of instructions and make sure they match the documentation as well as test for illegal operands.

We also tested the different dependencies of each extension. By that I mean that we tested for example, what is the minimum requirement to run **sign-extend byte**, which is a **Zcb** instruction that needs **Zbb**. Something else we found out, for example, is that Zcb **implies** Zca, meaning it does not need to be explicitly specified.

### Plans
We are now planning to verify the linker (Zcmt jump instructions) and verify with GCC inline assembly to make sure everything is working correctly. 

We also need to update the documentation and incorporate our changes in the official CORE-V Binutils repository.

https://github.com/pietraferreira/corev-binutils-gdb/tree/cobra-stable

### Meeting Minutes
```
Hi all,

Here are the minutes from the Zc* Progress Check meeting:

Tuesday 9 of August 2022, 13:00 UK

Actions
- Provide pre-built binaries ASAP, optimistically aiming for the beginning of next week.
- Verify GCC inline assembly and `-march` configurations.

Items Discussed
- Briefly discussed the intricacies of the Zcmt jump table.
- Clarified what will be included in the pre-built binary.
- Discussed what the testsuite expansion and verification entails.
- Discussed what testing Zcmt entails.
```