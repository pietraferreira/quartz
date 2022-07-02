---
title: "Formal Languages"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-12
---
# Formal Languages
---
Formal languages are used among others as the basis for defining the grammar of programming languages and formalised versions of subsets of natural languages in which the words of the language represent concepts that are associated with particular meanings or semantics.

- [Parse Trees](notes/parse-trees.md)
    - [Chomsky Grammars](notes/chomsky-grammars.md)
    - [Equivalent Grammars](notes/equivalent-grammars.md)
    - [Ambiguous Grammars](notes/ambiguous-grammars.md)
- [Syntax Directed Translation](notes/syntax-directed-translation.md)

## Defining a Language
- **Non-terminal** symbols appear on the **left** of productions.
- **Terminal** symbols only ever appear on the **right** of productions.

 A **grammar** is a 4-tuple {_S_, P, N, T}, were S $\exists$ N is the **sentence** symbol, P is a set of **productions**, N is the set of **non-terminal** symbols and T is the set of **terminal** symbols.

Grammars generate strings. They are description of languages that provide a mean for generating all possible strings contained in the language.

A **sentence** is a string of symbols in T derived from S using one or more applications of productions in P.

The **language**, L(G) defined by a grammar, G, is the set of sentences derivable using G.

## Context-Free Grammar (CFG)
Each production has the form A $\rightarrow$ w, where A is a **nonterminal** and w is a string of terminals and nonterminals.  Informally, a CFG is a grammar where any nonterminal can be expanded out to any of its productions at any point. The language of a grammar is the set of strings of terminals that can be derived from the start symbol.

A **context-free grammar** (CFG) consists of:
1.  A set of _terminals_ (tokens produced by the lexer).
2.  A set of _nonterminals_.
3.  A set of _productions_ (rules for transforming nonterminals). These are written  
        LHS → RHS  
    where the LHS is a **single** nonterminal (that is why this grammar is **context-free**) and the RHS is a string containing nonterminals and/or terminals.
4.  A specific nonterminal designated as start symbol.

## Context-Sensitive Grammar (CSG)
Each production has the form wAx $\rightarrow$ wyx, where w and x are strings of terminals and nonterminals and y is also a string of terminals. In other words, the productions give rules saying "if you see A **in a given context**, you may replace A by the string y." It's an unfortunate that these grammars are called "context-sensitive grammars" because it means that "context-free" and "context-sensitive" are not opposites, and it means that there are certain classes of grammars that arguably take a lot of contextual information into account but aren't formally considered to be context-sensitive.

To determine whether a string is contained in a CFG or a CSG, there are many approaches. First, you could build a recogniser for the given grammar. For CFGs, the _[pushdown automaton](http://en.wikipedia.org/wiki/Pushdown_automaton)_ (PDA) is a type of automaton that accepts precisely the context-free languages, and there is a simple construction for turning any CFG into a PDA. For the context-sensitive grammars, the automaton you would use is called a _[linear bounded automaton](http://en.wikipedia.org/wiki/Linear_bounded_automaton)_ (LBA).

More info [here](https://stackoverflow.com/questions/8236422/context-free-grammars-versus-context-sensitive-grammars).
## Derivation
- Productions (Backus-Naur Form, BNF):
$A \rightarrow B_1, B_2, B_3, ..., B_n$
assign_stmnt $\rightarrow$ variable := expression
assign_stmnt := variable ':=' expression

Sentence symbol at the top of the grammar:
$S\rightarrow A_1, A_2, A_3, ..., A_n$

Alternative definitions of a symbol:
$A\rightarrow B_1, B_2, B_3, ..., B_n$
$A\rightarrow C_1, C_2, C_3, ..., C_n$

$A\rightarrow B_1, B_2, B_3, ..., B_n | C_1, C_2, C_3, ..., C_n$

Self-referential (recursive productions):
$A \rightarrow A\ x | y$

Empty production:
$A \rightarrow B\ |\ \varepsilon$

### Another Example
Terminals: 0 1 2 3 4 5 6 7 8 9 + -
    Nonterminals: list digit
    Productions:
        list → list + digit
        list → list - digit
        list → digit
        digit → 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    Start symbol: list

Watch how we can generate the string 7+4-5 beginning with the start symbol, applying productions, and stopping when no productions can be applied (because only terminals remain).

    list → list - digit
         → list - 5
         → list + digit - 5
         → list + 4 - 5
         → digit + 4 - 5
         → 7 + 4 - 5s

## Recursive Productions
Recursive productions are defined in terms of themselves:

varlist $\rightarrow$ variable | varlist, variable

if one of the alternatives contains the recursion at its **leftmost end**, the production is called **left recursive**:

A $\rightarrow$ u | Av

Where A $\exists$ N and u, v are arbitrary strings in V.

We also have **right recursive** productions:

A $\rightarrow$ u | vA

Left recursion in particular can be problematic.

## Attribute Types
Values of attributes of items on the LHS of productions derived from values of attributes on the RHS are known as **synthesised** attributes:

X $\rightarrow$ $Y_1, Y_2, ..., Y_n$

Each semantic rule can be written as:

X.a = f($Y_1$.a, $Y_2$.a, ..., $Y_n$.a)

We can also have **inherited attributes**, where values of attributes on the RHS are derived from values of attributes on both the LHS and RHS.

## Types of Attribute Grammars
**S-attributed** grammars only use synthesised attributes, can evaluate correctly by a bottom-up walk over the parse tree.

**L-attributed** grammars have inherited attributes in which all inherited attributes are only functions of symbols to their left in the production. They can be evaluated by left-to-right depth first traversal of the parse tree.

## See Also
- [Compilers](notes/compilers.md)
- [Trees](notes/trees.md)