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
- Visualising Ownership and Borrowing in Rust Programming.

---
# Problem Definition

The problem revolves around the intricacies of learning Rust, a programming language used widely due to its memory safety features, achieved without relying on a garbage collector. Rust's unique resource ownership and borrowing system, while powerful, can be a significant challenge for both novice and experienced programmers. Understanding this system is crucial for writing robust and efficient code in Rust.

The primary issue is the complexity of Rust's ownership and borrowing system, which often needs mental tracking of events and state changes. This can negatively impact the learning process and slow down the development.

To address this problem, I aim to introduce a visualisation tool. The tool will be designed to visually depict ownership and borrowing events within Rust code. By integrating these visualisations, I aim to make the static events and their impact more obvious and tangible for learners. Therefore, the objective is to enhance the learning experience for developers, by providing them with a resource that accelerates their understanding of this powerful programming language.

---
# Aims and Objectives

The aim of the project is to enhance the learning experience for individuals seeking to understand the Rust programming language by addressing the complexities of its ownership and borrowing system. This will be achieved through the introduction of a visualisation tool designed to make ownership and borrowing events in Rust code more comprehensible and accessible.

The objectives are:
1. **Conduct Comprehensive Background Research**:
    - Review existing literature, educational materials and resources related to Rust programming.
    - Analyse common challenges faced by learners in understanding Rust's ownership and borrowing system.
    - Examine existing visualisation tools and techniques used in programming education to identify best practices and state-of-art technology.
2. **Project Planning and Deliverables**:
    - Define the project scope, timeline and deliverables, including milestones and deadlines.
    - Identify potential risks and develop a mitigation plan to address unforeseen challenges that may arise during the project.
3. **Design the Visualisation Tool**:
    - Determine the appropriate visualisation techniques and representations to illustrate ownership and borrowing events effectively.
    - Create a user-friendly interface that allows learners to interact with the tool easily.
4. **Develop and Test the Visualisation Tool**:
    - Implement the designed tool, ensuring it accurately visualises Rust's ownership and borrowing system.
    - Refine tool based on user feedback and iterate as necessary.
5. **Evaluate Learning Outcomes**:
    - Evaluate the impact of the visualisation tool on learners' understanding of Rust's ownership and borrowing.
    - Compare the learning outcomes of those who used the tool with a control group that did not have access to the tool.
6. **Documentation**:
    - Document the design, development and testing process, creating comprehensive user guides and documentation for the tool.

---
# Background Sources

## Problem Justification:
- [Rust's language ergonomics initiative](https://blog.rust-lang.org/2017/03/02/lang-ergonomics.html): A blog post from the official Rust website which highlights the significance of language ergonomics. It expands on how Rust's ownership system, while powerful, can present a challenge for programmers, justifying the need for improvements in its usability and learnability.
- [Rust - References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html): The official documentation for understanding the core problem. It provides insights into Rust's ownership and borrowing, emphasising its importance and complexities.
- [Stack Overflow Annual Developer Survey](https://insights.stackoverflow.com/survey): This source can provide statistical evidence of the challenges programmers face while learning Rust.
- [The Usability of Ownership](http://arxiv.org/abs/2011.06171): Paper by W. Crichton that discusses the usability of Rust's ownership system. It's relevant to understanding the challenges associated with Rust's ownership model.
- [Understanding and Evolving the Rust Programming Language](https://publikationen.sulb.uni-saarland.de/bitstream/20.500.11880/29647/2/thesis-screen.pdf): 

## Proposed Solution:
- [RustViz](https://web.eecs.umich.edu/~comar/rustviz-vlhcc22.pdf): RustViz is a central source, as it directly pertains to the proposed solution. The paper provides detailed insights into how visualisation can aid in understanding Rust's ownership system.
- [A Beginner's Guide to Parsing in Rust](https://depth-first.com/articles/2021/12/16/a-beginners-guide-to-parsing-in-rust/): This source highlights the importance of parsing in Rust. The success of my project depends on understanding and effectively representing Rust code structures, which parsing is fundamental to.
- [Tree-sitter - Creating Parsers](https://tree-sitter.github.io/tree-sitter/creating-parsers): Tree-sitter is a library for code parsing, it will be important to understand how it can be leveraged into my tool. 
- [CUPV - A Visualisation Tool for Generated Parsers](https://dl.acm.org/doi/pdf/10.1145/331795.331801): This source provides insights into a similar tool, demonstrating the efficacy of visualisation tools in the context of parsers.

## Relevant Approaches and Techniques:
- [Syn - Parser for Rust source code](https://github.com/dtolnay/syn): Syn is a library for parsing Rust code. Understanding how it works can be beneficial to learn how to parse Rust code for visualisation.
- [Crafting Interpreters](https://craftinginterpreters.com/): This resource can provide insights into parsing techniques and how they can be applied to the development of the visualisation tool.
- [An alias-based formulation of the borrow checker](https://smallcultfollowing.com/babysteps/blog/2018/04/27/an-alias-based-formulation-of-the-borrow-checker/): Online source that discusses an alias-based formulation of the borrow checker in Rust.
- [Borrowing - Rust By Example](https://doc.rust-lang.org/rust-by-example/scope/borrow.html): Online resource from the official Rust documentation that explains borrowing in Rust.
- [Identifying Gaps in the Secure Programming Knowledge and Skills of Students](https://doi.org/10.1145/3478431.3499391): A paper that discusses gaps in secure programming knowledge and skills of students.
- [Learning and programming challenges of Rust: A Mixed-Method Study](https://doi.org/10.1145/3510003.3510164): A study on the learning and programming challenges in Rust.
- [References and Borrowing - The Rust Programming Language](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html): An online resource from the official Rust book that explains references and borrowing.
- [RustEdu Workshop 2022 - RustViz](https://www.youtube.com/watch?v=zCF8QVkc6IY): A video resource about RustViz and visualising ownership and borrowing.

## Requirements:
- [Rust - Lexing and Parsing](https://rustc-dev-guide.rust-lang.org/the-parser.html): Understanding the lexing and parsing processes in Rust is essential. This source can help to define the requirements related to that aspect.
- [Types of Parsers in Compiler Design](https://www.geeksforgeeks.org/types-of-parsers-in-compiler-design/): Different types of parsers are used in compiler design, and understanding these can help define the parser component of the tool.
- [What are the Borrowing Rules in Rust?](https://levelup.gitconnected.com/what-are-the-borrowing-rules-in-rust-6ff431e92d53): Understanding Rust's borrowing rules is critical for the tool's accuracy. This source can help to derive requirements related to highlighting ownership and borrowing events accurately.

---
# Approach

## Justification of Approach
Considering a project timeline of October to January (estimates):

- **Deliverables**:
    1. Project Scope and Plan Document (**by the end of October**):
        - Detailed project plan outlining the objectives, tasks and timeline (spreadsheet for example).
        - Initial risk assessment and mitigation plan.
        - An initial `hello world` prototype as a proof of concept, demonstrating the borrowing mechanism in Rust.
    2. Background Research (**by the end of November**):
        - Comprehensive review of existing literature, educational materials, and resources related to Rust programming.
        - Analysis of common challenges faced by learners in understanding Rust's ownership and borrowing system.
        - Identify best practices in visualisation tools and techniques in programming education.
    3. Design Specification (**by mid-December**):
        - Design document specifying the scope and features.
        - Selection of appropriate visualisation techniques and representations.
    4. Tool Prototype (**by the end of December**):
        - Development of an initial prototype of the visualisation tool based on the design specifications.
    5. Usability Testing and User Feedback (**by mid-January**):
        - Testing of the tool (unit tests etc).
        - Document and analyse user feedback for improvement.
    6. Final Tool (**by the end of January**):
        - Refinement of the tool based on feedback.
        - Development of the final version ready for public release.
    7. Documentation and Knowledge Dissemination (**end of January**):
        - User guides and documentation for the tool.
        - Preparation for submission of research findings.

- **Milestones**:
    1. Project Initiation:
        - Define objectives and scope.
        - Identify potential risks and mitigation strategies.
    1. Background Research:
        - Complete thorough background research report.
    2. Design Specification:
        - `helloworld` application.
        - Complete design specification.
    4. Prototype Development:
        - Develop a working prototype of the tool.
    5. Testing and Feedback:
        - Conduct testing and gather feedback.
        - Analyse both for refinements.
    6. Final Tool Development:
        - Refine tool based on feedback and finish development.
    7. Documentation and Knowledge Dissemination:
        - Create user guides and documentation.
        - Prepare and submit findings.

- **Risk Mitigation**:
    1. Scope Creep (uncontrolled expansion):
        - Clearly define the project score and objectives from the get-go.
        - Assess and approve any scope changes to better manage it.
    2. Technical Challenges:
        - Maintain ongoing communication with my supervisor to address technical challenges effectively.
        - Consider involving experts to resolve complex technical issues.
    3. Time Constraint:
        - Have a clear schedule and effective project planning to ensure a timely completion.

---
# Evaluation

- **Aim**: To enhance the learning experience of Rust programming, particularly in understanding Rust's ownership and borrowing system.

- **Evaluation**: Success here will be determined by assessing whether the visualisation tool has indeed improved the learning experience for students. This evaluation will involve conducting usability testing and comparing the performance of learners who used the tool against a group that did not. It will involve various aspects, including:
    1. **Usability Testing**: Testing with the target audience, which includes novice and experienced Rust developers.
    2. **Unit Testing of Parser**: Rigorous unit testing of the parser component of the tool to ensure it accurately parsers Rust code. This testing will involve running various test cases, including valid and invalid Rust code snippets, to verify the parser's correctness.
    3. **Functional Testing**: Evaluate the functionality of the tool by testing its ability to accurately depict ownership and borrowing events within Rust code. 
    4. **Comparative Analysis**: Compare the performance of two groups:
        - Group A (Tool Users): Participants using the tool during their learning process.
        - Group B (Control Group): Participants who did not have access to the tool and learned Rust through traditional methods.
    5. **Quantitative Metrics**: Collect data on interactions with the tool, including number of sessions, frequency and duration of tool usage, and specific tool features utilised.
    6. **Qualitative Feedback**: Feedback from users through surveys and interviews.