---
title:  "Presentation FYP Final"
tags:
  - university
module: cs3072
lecturer:
created: 2024-02-14
year: '3'
type: script
---
---
**Slide 1: Introduction**
"Hello, I'm Pietra, today I'll be presenting my project:'Visualising Ownership and Borrowing in Rust', which aims to demystify Rust's complex concepts."

---

**Slide 2: Why Rust?**
Rust is a modern programming language known for its performance, reliability, and productivity, with a strong emphasis on memory safety and efficient concurrency without a garbage collector. Its unique ownership model and zero-cost abstractions allow developers to write high-level, efficient code, effectively managing memory at compile time to prevent common parallel programming issues. However, this complexity introduces a significant learning curve, with developers often citing ownership among Rust's most challenging aspects. 

---

**Slide 3: Ownership in Rust**
"Rust enforces three cardinal rules for ownership: each value is owned by a single entity, ownership ends with scope, and ownership can shift via transfers, exemplified here with 's' transferring to 'b', ensuring memory safety."

**Why is it memory safe**?
- Eliminates **dangling pointers**: pointer still points to a memory location that has been freed/deallocated.
- **Double frees**: when the program attempts to free the same block of memory more than once.
- **Memory leaks**: when a program allocates memory but never deallocates it after it's no longer needed.

All without a **garbage collector**: automatic memory management, it attempts to reclaim memory occupied by objects that are no longer in use. However, it introduces an overhead and can affect performance, as it requires tracking object references and determining when objects are no longer reachable.


---

**Slide 4: Borrowing Concept**
But what about when you need to use a value without taking ownership? Thats where borrowing comes into play, allowing both mutable and immutable references to a value without taking over its ownership. This provides flexibility while maintaining safety. You can see an example of a mutable and immutable borrow here.

**Data race**: when two or more threads in a parallel application access the same memory location concurrently.

**Difference between ownership and borrowing, where they are used:**: if you want to be the sole entity responsible for the variable's life cycle, you need full control over it, then ownership is the way to go. However, if you need to read or modify data temporarily, without wanting to manage its lifecycle, borrowing offers a way to interact with that data. With borrowing you also have shared access, as you can read from the same location safely.

---

**Slide 5: Research Foundation**
The background research was anchored in the RustViz project and Rust's official documentation, setting a solid foundation for understanding Rust's advanced memory management features. However, unlike RustViz, I am aiming for dynamic analysis and not static. Here you can see what RustViz looks like.

---

**Slide 6: Agile Methodology**
"Embracing Agile, I navigated through this project with flexibility and iterative refinement, mapping out tasks, deadlines, and milestones for a structured yet adaptable workflow."

---

**Slide 7: Developing a Parser with Tree-sitter**
A parser translates code into a format that's easier for computers to understand, and Tree-sitter is an efficient parser generator designed for modern programming needs. It is really good at constructing syntax trees from code, enabling detailed analysis and manipulation of the source code. 

Opting for Tree-sitter for its parsing efficiency, I tailored a custom parser specifically attuned to Rust's complex borrowing and ownership concepts. This approach transforms Rust code into comprehensible textual syntax trees, as shown here, facilitating deeper insights into code structure and behaviour, and leveraging Tree-sitter's high performance and error recovery capabilities for enhanced code analysis.

---

**Slide 8: Approach to Developing the Parser**
"My strategy with Tree-sitter involved defining Rust's syntax through choices and patterns, distinguishing between variable functions, operations, and method calls for a granular parsing approach."

Choices and patterns are specific constructs used in grammar definitions. 

- **Choice**: allows the parser to recognise different possible structures or tokens in the input text at a particular points. For example, when parsing an expression, the parser might need to choose between interpreting it as a variable access, a function call, or an operator expression.
- **Pattern**: used to describe the specific structure or sequence of tokens that make up a syntactical element of the language. For example, the specific arrangements of tokens that form a function declaration, a method call, or a control flow statement.

**Token**: unit of syntax, a string of characters that a collective meaning as a single element.

---

**Slide 9: Parsing Function Declarations**
"I'll walk you through parsing a function declaration, starting with 'fn' to pinpoint declarations, using identifiers for names, parameters for inputs, optional types for returns, and finally culminating in the function's logic block."

Here's an example of how I parse a function declaration. This is the grammar I had to come up with to handle it.

The way it works is:

I start with fn, finding the beginning of a function declaration.

Use identifier to capture any valid Rust function name.

Then parameter to define the function's inputs.

Then we have our optional return type, paired with type_expression to specify the return type.

And we conclude with the function's body, within a block, encapsulating all the logic.

---

**Slide 10: Testing**
"Developing a custom test suite with Tree-sitter allowed detailed grammar evaluation You can see the suite's execution here, where tests confirm the parser's accuracy with Rust code examples. You can also see an example of a test below it.

---

**Slide 11: User Interface**
"The interface is designed for intuitiveness, featuring a code input area and parse button for immediate feedback. My Tree-sitter parser, now WebAssembly, enables real-time code analysis, enriched with colour-coded visual cues and interactive elements."

---

**Slide 12: Highlighting Logic**
"How do we discern what to highlight? By analysing reference expressions to detect borrowing. Absence of a mutable specifier denotes an immutable borrow, a method effective in most scenarios, as illustrated here."

How does it know what to highlight?

For an immutable borrow for example, we check if the node we are looking at is a reference_expression. This is a technical way of saying its looking to see if the code is borrowing something.

If the node is a reference_expression, the function then checks all the children nodes to see if any part is a mutable_specifier, meaning the borrow is mutable.

If no nodes have a mutable specifier, then we are correct to assume it is an immutable borrow.

The logic is not perfect, however it is sufficient to correctly identify immutable borrows in most cases.

---

**Slide 13: AI Approach for Code Analysis**
"Integrating AI, I aim to juxtapose ChatGPT's analysis with my parser for a better understanding of Rust code, exploring AI's potential to grasp complex programming concepts beyond traditional syntax analysis."

---

**Slide 14: Challenges**
Now the challenges.

The complexity of ownership and borrowing posed a significant challenge. The simplistic grammar, while effective in parsing basic structures, sometimes struggle with the contextual depth that we need for accurate analysis. The limitation led to inconsistencies in identifying these key Rust features, revealing the need for a more context-aware approach. Despite these hurdles, I believe the project has laid the groundwork for further refinement.

---

**Slide 15: Next Steps**
As the project moves forward, first, the AI integration needs to be completed. Next, the test suite needs to be expanded, focusing on the accuracy of the highlighting mechanism. Gathering user feedback will be essential to fine-tune usability and effectiveness. And finally develop more documentation and tutorials for the users.

---

**Slide 16: Thank You**
"Thank you for your attention. I welcome any questions or insights you might have about this project."