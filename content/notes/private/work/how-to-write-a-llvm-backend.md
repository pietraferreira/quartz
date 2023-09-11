---
title: "How to Write a LLVM Backend"
tags:
  - cs/compilers/llvm
programming-languages:
created: 2022-06-05
---
# How to Write a LLVM Backend
---
More information [here](https://llvm.org/docs/WritingAnLLVMBackend.html).

LLVM converts LLVM IR to code for a specific target, the steps are:
1. Create a subclass of the **TargetMachine** class (describes the actual target machine characteristics - `BSCTargetMachine.h` and `BSCTargetMachine.cpp`)
2. Describe the register set of the target. TableGen generates code for register definition, aliases and classes from a target-specific file (`BSCRegisterInfo.td`)
3. Describe the instruction set of the target, you should write a subclass of the `TargetInstrInfo` class to represent machine instructions supported by the target machine.
4. Describe the selection and conversion of the LLVM IR from a DAG representation of instructions. Write code for `ISelLowering.cpp` to replace or remove operations and data types that are not supported natively in a SelectionDAG.
5. Write code for assembly printer, which converts LLVM IR to a GAS format for the target machine. Add assembly strings to the instructions defined in target-specific version of `TargetInstInfo.td`, also code for a subclass of `AsmPrinter` that performs the LLVM-to-assembly conversion.
6. Add support for subtargets, also subclass which allows the use of `-mcpu=` and `-matter=`.
7. Optionally JIT support.

* `BSCTargetMachine.h` - declares the BSC specific subclass of TargetMachine
* `BSCTargetMachine.cpp` - implements the BSC specific subclass of TargetMachine