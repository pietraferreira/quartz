---
title: "Instruction Set Semantics"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-12
---
# Instruction Set Semantics
---
Most general is the **three address instruction set**:

`result = operand1 operator operand2` ^44cfb5

**Two address instruction sets** use one of the operand addresses for the **result**.

**One address instruction sets** have a fixed register for one operand and the result, usually known as the _accumulator_.

**Zero address instruction sets** work by popping arguments from a stack in main memory and pushing the results back.

Modern RISC designs are **three address instruction sets**. One address instruction sets are found in DSPs (Digital Signal Processors).

## See Also
- [Compilers](notes/compilers.md)