---
title:  "Project Synopsis"
tags:
  - university
module: cs3072
lecturer:
created: 2023-10-10
year: '3'
type: assignment
---
---
# Provisional Title
Some ideas:
- A Visual Approach to Ownership and Borrowing within the Rust programming language.
- A Visual Learning Companion for Rust's Ownership System.
- Visualising Ownership and Borrowing in Rust Programming.

---
# Problem Definition

The problem revolves around the intricacies of learning Rust, a programming language used widely due to its memory safety features, achieved without relying on a garbage collector. Rust's unique resource ownership and borrowing system, while powerful, can be a significant challenge for both novice and experienced programmers. Understanding this system is crucial for writing robust and efficient code in Rust.

The primary issue is the complexity of Rust's ownership and borrowing system, which often needs mental tracking of events and state changes. This can negatively impact the learning process and slow down the development.

To address this problem, I aim to introduce a visualisation tool. The tool will be designed to visually depict ownership and borrowing events within Rust code. By integrating these visualisations, I aim to make the static events and their impact more obvious and tangible for learners. Therefore, the objective is to enhance the learning experience for students, by providing them with a resource that accelerates their understanding of this powerful programming language.

---
# Aims and Objectives

The aim of the project is to enhance the learning experience for individuals seeking to understand the Rust programming language by addressing the complexities of its ownership and borrowing system. This will be achieved through the introduction of a visualisation tool designed to make ownership and borrowing events in Rust code more comprehensible and accessible.

The objectives are:
- Develop a user-friendly visualisation tool, to represent ownership and borrowing events in Rust code, facilitating a clearer understanding of these concepts for students.
- Assess the impact of the visualisation tool on students' comprehension of Rust's ownership and borrowing system through evaluations.

---
# Background Sources

## Problem Justification:
- [Rust's language ergonomics initiative](https://blog.rust-lang.org/2017/03/02/lang-ergonomics.html): A blog post from the official Rust website which highlights the significance of language ergonomics. It expands on how Rust's ownership system, while powerful, can present a challenge for programmers, justifying the need for improvements in its usability and learnability.
- [Rust - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html): The official documentation for understanding the core problem. It provides insights into Rust's ownership and borrowing, emphasising its importance and complexities.
- [Stack Overflow Annual Developer Survey](https://insights.stackoverflow.com/survey): This source can provide statistical evidence of the challenges programmers face while learning Rust.

## Proposed Solution:
- [RustViz](https://web.eecs.umich.edu/~comar/rustviz-vlhcc22.pdf): RustViz is a central source, as it directly pertains to the proposed solution. The paper provides detailed insights into how visualisation can aid in understanding Rust's ownership system.
- [A Beginner's Guide to Parsing in Rust](https://depth-first.com/articles/2021/12/16/a-beginners-guide-to-parsing-in-rust/): This source highlights the importance of parsing in Rust. The success of my project depends on understanding and effectively representing Rust code structures, which parsing is fundamental to.
- [Tree-sitter - Creating Parsers](https://tree-sitter.github.io/tree-sitter/creating-parsers): Tree-sitter is a library for code parsing, it will be important to understand how it can be leveraged into my tool. 
- [CUPV - A Visualisation Tool for Generated Parsers](https://dl.acm.org/doi/pdf/10.1145/331795.331801): This source provides insights into a similar tool, demonstrating the efficacy of visualisation tools in the context of parsers.

## Relevant Approaches and Techniques:
- [Syn - Parser for Rust source code](https://github.com/dtolnay/syn): Syn is a library for parsing Rust code. Understanding how it works can be beneficial to learn how to parse Rust code for visualisation.
- [Crafting Interpreters](https://craftinginterpreters.com/): This resource can provide insights into parsing techniques and how they can be applied to the development of the visualisation tool.

## Requirements:
- [Rust - Lexing and Parsing](https://rustc-dev-guide.rust-lang.org/the-parser.html): Understanding the lexing and parsing processes in Rust is essential. This source can help to define the requirements related to that aspect.
- [Types of Parsers in Compiler Design](https://www.geeksforgeeks.org/types-of-parsers-in-compiler-design/): Different types of parsers are used in compiler design, and understanding these can help define the parser component of the tool.
- [What are the Borrowing Rules in Rust?](https://levelup.gitconnected.com/what-are-the-borrowing-rules-in-rust-6ff431e92d53): Understanding Rust's borrowing rules is critical for the tool's accuracy. This source can help to derive requirements related to highlighting ownership and borrowing events accurately.

---
# Approach
## Justification of Approach
The chosen approach explained above is justified by several key factors:
- **Enhanced Learning Experience**: One of the main challenges in learning Rust lies in understanding the ownership and borrowing intricacies. By providing visual representation of these concepts, the learning experience can be enhanced. This way, learners can better comprehend the subtleties of the system, which hopefully leads to faster skill development.
- **Existing Research and Tools**: The existence of RustViz demonstrates the feasibility of this approach, offering insights into the benefits of visualising Rust code structures.
- **Relevance of Parsing**: Parsing Rust code is an essential step in creating effective visualisations. Resources like "A Beginner's Guide to Parsing in Rust" provide a strong foundation for integrating parsing techniques into the tool.
- **Ethical Considerations**: The ethical implication I'm mostly worried about is ensuring that the tool's design and usage does not encourage cheating or plagiarism. The tool should focus on educational benefits, and not compromise the integrity of the learning process.

---
# Evaluation

- **Aim**: To enhance the learning experience of Rust programming, particularly in understanding Rust's ownership and borrowing system.

- **Evaluation**: Success here will be determined by assessing whether the visualisation tool has indeed improved the learning experience for students. This evaluation will involve conducting usability testing and comparing the performance of learners who used the tool against a group that did not.