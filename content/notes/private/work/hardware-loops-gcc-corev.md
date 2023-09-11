---
title: "Hardware Loops - COREV"
tags:
  - work/corev
programming-languages:
created: 2020-09-25
project: corev
---
```
(define_insn "set_hwloop_cvstart"
 [(set (match_operand:SI 0 "le_register_operand" "=t")
       (label_ref (match_operand 1 "" "" ))
  )
  (use (match_operand:SI 2 "immediate_operand" "I"))
]
 ""
 "cv.starti\tx%2,%1\t # loop setup, start"
 [(set_attr "type" "move")
  (set_attr "mode" "SI")]
)

(define_insn "cv_starti"
  [(set(pc)
       (us_plus (pc) 
                (ashift (label_ref (match_operand 1 "" ""))                 
                        (1))))
   (unspec [(("match_operand:SI 0 "immediate_operand"   "I")
             (label_ref ("match_operand 1 "" ""))
            )] UNSPECV_CV_STARTI)]
  "TARGET_COREV_LOOPS" ;TODO: Add this condition
  "cv.starti %0,%1") ;imm, symbol
```

******************************************************************************
**MATCH_OPERAND**:

| m   | n   | predicate           | constraint |
| --- | --- | ------------------- | ---------- |
| SI  | 0   | le_register_operand | =t           |

- So it has `t` for operand 0, nothing for operand 1 and I for operand 2

I -> REFER BELOW -> may be defined in a dependent fashion to permit immediate integer operands with explicit integer values in specified ranges. For example, 'I' can be defined to stand for the range of values 1 to 8 (any letter from I to P).

t -> REFER BELOW

whitespace -> are ignored, can be inserted at any position except first. enables each alternative for different operands to be visually aligned in the machine description even if they have different number of constraints and modifiers.

= -> means that this operand is written to by this instruction: the previous value is discarded and replaced by new data.

match_operand -> placeholder for operand number *n* of the insn, so when constructing an insn, operand number *n* will be substituted.

It must satisfy the predicate or the inst pattern will not match.

Operands must be consecutively counting from zero in each instruction pattern.

predicate -> it is a string that is the name of a function that accepts two arguments, an expression and a machine mode -> m is the mode argument.

constraints -> controls reloading and the choice of the best register class to use for a value.

therefore, predicate helps decide whether a given insn matches the pattern while the constraint plays no role in the decision, instead, it controls various decisions in the case of an insn which does match.

## PREDICATE
- Determines whether match_operand matches or not.

All predicates are boolean functions of two arguments: RTL expression that is being considered at that position and the machine mode that the match_operand specifies.

The first argument is called OP and the second called MODE .

Operand predicates can allow operands that are not actually acceptable to the hardware, as long as the constraints give reload the ability to fix them up.

OP must have the same mode, unless OP is a CONST_INT or integer CONST_DOUBLE.

```
;; Return nonzero if OP is a LE register.
(define_predicate "le_register_operand"
  (and (match_code "reg")
       (match_test "REGNO (op) == REG_LE0 || REGNO (op) == REG_LE1")))
```

match_code -> evaluates to true if OP or a specified subexpression of OP has one of given list of RTX (RTL expression), the operand is a string constant containing a comma-separated list of RTX code names, these are the codes for which MATCH_CODE will be true.

match_test -> has one operand, a string containing a C expression.

---
there is a HWLOOP_REGISTER_FIRST in config/riscv/riscv.h:880i.

define_register_constraint -> name regclass docstring.

- name ->  will appear in the match_operand expression.
- regclass -> register class.
- docstring -> documenting the meaning of the constraint.

```
;; HW Loop register constraints, loop end
(define_register_constraint "t" "LE_REGS"
  "LE0 or LE1.")

(define_constraint "I"
  "An I-type 12-bit signed immediate."
  (and (match_code "const_int")
       (match_test "SMALL_OPERAND (ival)")))
```


## CONSTRAINTS
The constraints are used when doing the register allocation and final instruction selection. Many architectures have constraints on the operands, such as m68k that has 16 registers (a0–a7 and d0–d7), but only d0–d7 are allowed in a muls instruction. This is expressed by a constraint telling the register allocator that it must use register d0–d7.

- define_insn -> template given is inserted into the insn list.

The compiler chooses the pattern with the right name and apply the operands, without regard for the RTL template or operand constraints.

define_split and define_peephole -> once the insn list is generated, various  optimisation passes happen like convert, replace and rearrange the insns.

Finally the insn list's RTL is matched up with the RTL templates in the define_insn patterns, which are used to emit the final assembly code.

define_insn acts like its unnamed, since the names are ignored.

## INSTRUCTION PATTERNS
define_insn is an RTL expression containing 4 to 5 operands:

1. optional name.
2. RTL template: describes the semantics of the instruction (match_operand, match_operator and match_dup for example).
3. the condition: string which contains a C expression so when the compiler attempts to match the RTL against a pattern, the condition is evaluated it may not depend on the data that it is being matched, but only the target-machine-types flags.
4. output template or output statement: either a string, or a fragment of C code that returns a string.
5. OPTIONAL: insn attributes.

```bash
riscv32-unknown-elf-gcc -DN=10 -02 -Wall -march=rv32imc -mabi=ilp32 -S -o
10.test.s test.c
```
```
emit_insn (gen_cv_starti(ob0));
p debug_rtx(ob0)
```

CREATING LABELS AT THIS POINT, CANT PRINT THEM.

LABEL WOULD BE END, BUT WHERE DOES IT PRINT IT?

PULP PRE-SETS A LOOP START REGISTER AND COUNT TO 70 71 72 ALWAYS THAT, THE START WILL ALWAYS START AT 70.

So pulp pre-sets a register for loop start and count, it always goes from 70 then 71, 72. Meaning that the loop start will be always start.

---
Earlier we went in to emit label and made sure the value was passed in correctly
and after the label we get a label number at the end of the function it says
0 uses, so we went into another function which does correctly print out the
label but we get the exact same results. 

We think it is the pass_expand:execute in gcc/gcc/cfgexpand.c
