---
title:  "Introducing MIR"
tags:
  - university
module: cs3072
lecturer:
created: 2023-11-13
year: '3'
type: research
---
---
---
# Introducing MIR

**Date: Apr. 19, 2016**
**Author: Niko Matsakis**

## Overview:
The blog post introduces MIR (Mid-Level Intermediate Representation), a significant transformation in the Rust compiler's internal architecture. MIR acts as an intermediate step between the High-Level IR (HIR) and LLVM, aiming to simplify and enhance various aspects of the compiler.

## Why MIR?
1. **Faster Compilation Time:**
   - MIR facilitates incremental compilation, saving and reloading only necessary parts during recompilation.
   - Provides a foundation for efficient data structures, reducing redundancy, and enhancing compilation speed.

   Example:
   - When recompiling, only the changed portions of the code are reprocessed.

2. **Faster Execution Time:**
   - Allows Rust-specific optimizations before reaching LLVM, exploiting Rust's rich type system.
   - Enables performance improvements like "non-zeroing" drop.

   Example:
   - Optimizations are performed on Rust code before it reaches the LLVM stage.

3. **More Precise Type Checking:**
   - Improves flexibility in borrowing, enhancing Rust's ergonomics and learning curve.

   Example:
   - MIR enables more flexible borrowing, reducing artificial restrictions imposed by the current compiler.

## Engineering Benefits:
1. **Eliminating Redundancy:**
   - Centralizes logic in MIR construction, reducing duplication among different compiler passes.

   Example:
   - Safety analyses and LLVM IR production no longer need redundant logic; they rely on MIR.

2. **Raising Ambitions:**
   - Simplifies working with MIR, enabling complex tasks that were challenging before.

   Example:
   - Non-zeroing drop is explored, showcasing the simplification achievable with MIR.

## MIR Core Language:
- **Reducing Rust to a Simple Core:**
  - MIR simplifies Rust, abstracting away many language features.
  - Demonstrates the reduction of Rust constructs like loops and method calls to MIR primitives.

   Example:
   - Transforms a Rust for loop into an MIR representation with explicit control flow.

## Control-Flow Graphs:
1. **Control-Flow Graphs:**
   - Represents MIR internally as control-flow graphs, aiding in flow-sensitive analysis.
   - Structured as basic blocks connected by edges, facilitating optimization.

   Example:
   - A loop in Rust translates into a cycle in the control-flow graph.

2. **Simplifying Match Expressions:**
   - Introduces switches and variant downcasts in MIR to simplify match expressions.

   Example:
   - Separates checking the variant from extracting data, enhancing clarity in control flow.

## Explicit Drops and Panics:
- **Explicit Drops and Panics:**
  - Makes drops explicit in MIR, handling destructor execution during unwinding.
  - Introduces panic edges into the control-flow graph to represent potential panics.

   Example:
   - Explicitly represents where values are dropped and when unwinding might occur.

## Non-Zeroing Drop:
- **Drops and Stack Flags:**
  - Introduces non-zeroing drop as a long-awaited improvement to Rust.
  - Uses boolean stack flags for more efficient and optimized resource management.

   Example:
   - Demonstrates how MIR enables the implementation of non-zeroing drop, improving code generation.

# Conclusion:
- **MIR's Transformative Potential:**
  - Foresees MIR's transformative impact on the compiler, opening avenues for language improvements.
  - Examples include drop flags and enhanced lifetime system precision.

   Example:
   - MIR paves the way for a more powerful constant evaluator and interpreters like miri.

- **Transition to MIR:**
  - Acknowledges the ongoing transition to MIR within the compiler.
  - Encourages contributions and highlights ongoing work on LLVM generation and borrow checker porting.

# Related
---
- [[notes/university/rust-mir|rust-mir]]
