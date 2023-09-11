---
title: "Three Address Code"
tags:
  - work/engineer-training 
programming-languages:
created: 2022-06-16
---
# Three Address Code
---
[Parse trees](notes/general/parse-trees.md) are sometimes used in early stages of [compilers](notes/private/work/compilers.md).

- They are **not** ideal for [optimisation](notes/private/work/compiler-optimisation.md).

Main part of the compilers today use [](notes/general/instruction-set-semantics.md#^44cfb5%7Cthree%20address%20code):

`result = operand1 operator operand2`

## Example
The expression $a * b + a * b$ might be represented in TAC as:

```assembly
t1 := a  * b
t2 := a  * b
c  := t1 + t2
```

## Types
- **Binary operators.**
- **Unary operators** - one argument is ignored.
- **Assignment** - one argument and operator is ignored.
- **Unconditional jump** - result is label of a TAC instruction.
- **Conditional jump** - variants for comparing arguments and jumping to result, or compare to generate `bool` followed by jump on a `bool`.
- **Call and return** - one argument is the address, result is the return value.

## Representation in C
```c
struct tac {
  int op;
  struct tacarg arg1;
  struct tacarg arg2;
  struct tacarg res;
}
```

```c
struct tacarg {
  int disc;
  union
  {
    int const;
    struct symtab *name;
    struct tac *label;
  } data;
}
```

Rather than allocating each node in turn and linking them together, we can represent in a vector:
```c
struct tac icode[1000];
```

Then have a function to generate a new node:
```c
void tacgen (int op, struct tacarg a, struct b, struct c) {
  icode[pc].op = op;
  icode[pc].arg1 = a;
  icode[pc].arg2 = b;
  icode[pc].res = c;
  pc++;
}
```

## Syntax Directed Translation
Related to [this](notes/general/syntax-directed-translation.md).

asgmt $\rightarrow$ var := expr
                {tacgen(TAC_COPY, var.entry, NULL,
                expr.place);}

- The **entry** attribute would be the variable's symbol table entry.
- The **place** attribute would be the location of the expression.
    - Generated during the parsing of `expr`.
    - Could be a variable, temporary variable or constant.