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
        - `librustc_mir` module for accessing MIR.
        - [Rust Compiler Internals](https://rustc-dev-guide.rust-lang.org/).
    - **Develop a Module or Plugin for Integration:**
        - Create a module or plugin that interfaces with `rustc` to extract relevant data during compilation.
        - Explore available hooks or extension points for integrating your tool into the compilation process.
2. **Data Processing**
    - **Design Data Processing Module**:
        - Identify and understand relevant data structures within the borrow checker's context.
        - Determine how ownership and borrowing information is represented in the MIR.
    - **Transform `rustc` Data for Visualisation:**
        - Design a module or set of functions to transform raw data obtained from `rustc` into a format suitable for visualisation.
        - Consider how to represent ownership relationships, borrows, and other relevant information visually.
    - **Identify Ownership and Borrowing Events:**
        - Explore existing MIR passes or analysis modules within `rustc` that perform borrow checking.
        - Identify opportunities to extract data during these passes for the visualisation module.
        - Capture the relationship between variables during the borrow checking process.
3. **Visualisation Module**
    - **Design Visualisation Component:**
        - Determine the appropriate visual representation for ownership and borrowing events.
        - Consider graphical elements, such as graphs, arrows, or annotations, to convey the relationships effectively.
    - **Integrate Visualization with Data:**
        - Integrate the visualization component with the transformed data from the data processing module.
        - Ensure that the visual representation accurately reflects ownership relationships and borrowing events.
  
# Common challenges faced by learners in understanding Rust's ownership and borrowing system
---
1. **Ownership Concept:**
   - **Challenge:** The concept of ownership is central to Rust but can be initially challenging to grasp. Understanding that each piece of data has a single owner and that ownership must be transferred or borrowed correctly is crucial.
   - **Mitigation:** Providing clear examples and analogies that illustrate ownership principles can help learners internalize this concept. Visual aids and diagrams can also enhance understanding.

2. **Borrowing Rules:**
   - **Challenge:** Learners often find the borrowing rules, including mutable and immutable borrowing, confusing. Distinguishing between references and mutable references and understanding their lifetimes can be complex.
   - **Mitigation:** Use practical examples and exercises to demonstrate borrowing scenarios. Emphasise the importance of lifetime annotations and their role in ensuring safe borrowing.

3. **Lifetime Annotations:**
   - **Challenge:** Lifetime annotations, used to specify how long references are valid, can be intimidating. Learners may struggle to understand when and how to apply lifetime annotations correctly.
   - **Mitigation:** Gradually introduce lifetime annotations, starting with simple cases and progressing to more complex scenarios. Provide exercises that require learners to annotate lifetimes in various code snippets.

4. **Ownership Transfer:**
   - **Challenge:** Knowing when ownership should be transferred versus borrowing can be perplexing. Determining the appropriate ownership pattern for different situations is a common stumbling block.
   - **Mitigation:** Offer real-world examples and scenarios that highlight the need for ownership transfer. Encourage learners to think about ownership in terms of resource management.

5. **Mutable Borrowing Restrictions:**
   - **Challenge:** Understanding Rust's restrictions on mutable borrowing, such as the rule that only one mutable reference to a particular piece of data is allowed in a given scope, can be counterintuitive.
   - **Mitigation:** Provide clear explanations of why these restrictions exist and how they contribute to preventing data races and ensuring memory safety. Offer examples that illustrate the potential issues that mutable borrowing restrictions address.

6. **Lifetime Elision:**
   - **Challenge:** Lifetime elision rules, which automatically infer lifetimes in certain situations, can be challenging to comprehend fully.
   - **Mitigation:** Introduce lifetime elision gradually, explaining its purpose and when it applies. Use simple cases to demonstrate how the compiler infers lifetimes.

7. **Ownership and Threads:**
   - **Challenge:** Understanding ownership and borrowing in the context of multithreading can be advanced. Learners may struggle with concepts like Send and Sync traits and the associated ownership implications.
   - **Mitigation:** Introduce multithreading concepts gradually, emphasising the relationship between ownership and thread safety. Provide examples that demonstrate how Rust's ownership system contributes to concurrent programming safety.

8. **Error Handling with Result and Option:**
   - **Challenge:** Rust's Result and Option types, which are commonly used for error handling, may be challenging for learners to integrate into their understanding of ownership and borrowing.
   - **Mitigation:** Provide practical examples of error handling using Result and Option. Demonstrate how these types interact with ownership and borrowing in various situations.

# Minimal Testcases
## Borrowing
---
While ownership ensures memory safety, it can be restrictive. Borrowing allows temporary access to a value without taking ownership. There are two types of borrowing in Rust:

- **Immutable Borrowing:**
    - Allows multiple read-only references to a value.
    - The borrowed value cannot be modified during the borrowing period.
    - Ensures data integrity without the need for locks.
- **Mutable Borrowing:**
    - Allows a single mutable reference to a value.
    - The borrowed value can be modified during the borrowing period.
    - Enforces a form of exclusive access to prevent data races (two or more threads access shared data concurrently, and at least one of them performs a write operation).
### Immutable
---
```rust
fn main() {
    let x = 42;
    let y = &x; // Immutable borrow of x
    println!("Value of x: {}", x);
    println!("Value of y: {}", y);
} // y goes out of scope, no issues
```

- In this case, `x` is a variable holding the value `42`.
- `let y = &x;` creates an immutable reference `y` pointing to the value of `x`.
- The value of `x` is printed, followed by the value of `y`.
- The reference `y` goes out of scope at the end of the block, and there are no ownership issues.

### Mutable
---
```rust
fn main() {
    let mut x = String::from("Hello");
    let y = &mut x; // Mutable borrow of x
    y.push_str(", World!");
    println!("{}", x); // Error: x is already borrowed mutably
}
```

- `x` is a mutable variable containing a `String` with the value `"Hello"`.
- `let y = &mut x;` creates a mutable reference `y` to the value of `x`.
- `y.push_str(", World!");` modifies the value through the mutable reference.
- Attempting to print `x` after the mutable borrow results in a compilation error because `x` is already borrowed mutably.

## Ownership Transfer
---
```rust
fn main() {
    let x = String::from("Hello");
    let y = x; // Ownership of x is transferred to y
    println!("{}", x); // Error: value moved
    println!("{}", y); // y now owns the value
}
```

- `x` is a variable containing a `String` with the value `"Hello"`.
- `let y = x;` transfers ownership of the `String` from `x` to `y`.
- Attempting to print `x` after the ownership transfer results in a compilation error because the value has been moved.
- `y` now owns the value, and its content can be printed.

In Rust, each piece of data has a single owner at any given time. Ownership is a system that helps manage memory and prevent issues like data races. 

- **Ownership Rules:**
    - Each value in Rust has a variable that is its "owner."
    - A value can only have one owner at a time.
    - When the owner goes out of scope, Rust automatically frees the memory associated with the value.
- **Ownership Transfer:**
    - Ownership can be transferred from one variable to another.
    - This transfer happens through assignment or when passing values to functions.
    - Once ownership is transferred, the original variable can no longer be used.

## Conclusion
---
These concepts ensure memory safety without the need for a garbage collector. Ownership and borrowing play a crucial role in preventing common programming errors such as null pointer dereferencing, data races, and memory leaks. Rust's borrow checker statically analyses code to enforce these ownership and borrowing rules at compile time, providing a robust and safe programming environment.
# More Information
- https://github.com/rust-lang/rfcs/blob/master/text/1211-mir.md
- https://play.rust-lang.org/?version=nightly&mode=debug&edition=2015
- [https://github.com/cohenarthur/rustc_tools_mir](https://github.com/cohenarthur/rustc_tools_mir)
- [[notes/university/rust-mir|rust-mir]]

# TODO
---
- Rust parser
- Yacc, Antlr (grammars)
- Treesitter (use parser generator)
- Focus on tool, work on questions (almost good!)
- Apply to BREO before the holidays

```
let_declaration: $ => seq(
      'let',
      optional($.mutable_specifier),
      field('pattern', $._pattern),
      optional(seq(
        ':',
        field('type', $._type),
      )),
      optional(seq(
        '=',
        field('value', $._expression),
      )),
      optional(seq(
        'else',
        field('alternative', $.block),
      )),
      ';',
    ),
```

