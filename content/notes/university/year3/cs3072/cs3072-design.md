---
title:  "FYP Design"
tags:
  - university
module: cs3072
lecturer:
created: 2023-11-09
year: '3'
type: notes
---
---
# Architecture
1. **Tool Integration with `rustc`**
    - Explore `rustc`'s APIs or intermediate representation (IR).
        - Documentation and Source code.
        - `librustc_mir` module.
        - [Rust Compiler Internals](https://rustc-dev-guide.rust-lang.org/).
    - Develop a module or plugin that interfaces with `rustc` to extract relevant data during compilation.
2. **Data Processing**
    - Design a data processing module to interpret the information obtained from `rustc`.
        - Identify relevant data structures to the borrow checker.
    - Transform `rustc` data into a format suitable for visualisation.
        - Design a module or set of functions to transform raw data obtained from `rustc` into a format suitable for visualisation.
        - Determine how I want to represent ownership relationships, borrows etc.
    - Identify ownership and borrowing events, capturing the relationship between variables.
        - Explore existing MIR passes or analysis modules within `rustc` that perform borrow checking.
        - Identify opportunities to extract data during these passes for the visualisation module.

# User Interface (UI)
1. **Visualisation**:
    - Create an intuitive visualisation interface.
    - Use graphical elements to represent Rust code, highlighting ownership transfers, borrows and other relevant events.
2. **Integration with Rust code**:
    - Implement a seamless integration with Rust code, allowing users to view visualisations alongside their code.
