---
title: "Syntax Directed Translation"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-16
---
# Syntax Directed Translation
---
Use **attribute grammars**, where productions are supplemented with information to control semantic analysis and translation.

Associate attributes with each grammar symbol to describe its properties.

For each production add **semantic rules** (aka semantic actions) to compute attribute values.

dig $\rightarrow$ 0 { dig.val = 0 }
           1 { dig.val = 1}
           ...
           9 { dig.val = 9}

## Decorated Syntax of a Digit
$int_1 \rightarrow$ dig         { $int_1$.val = dig.val }
        |    $int_2$dig  { $int_1$.val = $int_2$.val * 10 + dig.val }

![](notes/images/decorated-parse-tree.png)

## See Also
- [Formal Languages](notes/formal-languages.md)
