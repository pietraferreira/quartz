---
title: "Lexical Analysis"
tags:
  - cs
  - work/engineer-training
programming-languagues:
created: 2022-06-27
---
# Lexical Analysis
---
It is the process of grouping individual characters into basic entities, known as **tokens** or **lexemes**.

Examples: integer, variable, addition operator.

The **lexical analyser** (aka scanner) takes a source file and produces a stream of tokens, error messages and diagnostics.

Here you can see a [parse tree](notes/general/parse-trees.md) with lexing:
![parse-tree-lexing](notes/images/parse-tree-lexing.png)

## Grammars for lexical analysis
Related to [Formal Languages](notes/general/formal-languages.md).

Type 3 grammar for **binary numbers**:

- integer $\rightarrow$ 0 | 1 | integer0 | integer 1

Derived from the trivially equivalent but clearer type 2 grammar:

- integer $\rightarrow$ digit | integer digit
digit $\rightarrow$ 0 | 1

Typical tokens:

| Type     | Description                   | Example        |
| -------- | ----------------------------- | -------------- |
| integer  | string of decimal digits      | 1729, 561, 0   |
| variable | string starting with a letter | loopvar, t1, x |
| operator | one of +, -, * or /           | +, /           |
| VAR      | the letters V, A, R           | VAR               |

## Symbol Tables
They are used throughout the [compiler](notes/private/work/compilers.md) to build information about symbols:

```c
struct symbtab
{
  char *name;
  int type;
  int blockno;  /* Block where declared */
  int addr;
}
```
