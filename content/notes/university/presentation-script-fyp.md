---
title:  "Presentation Script Fyp"
tags:
  - university
module: cs3072
year: '3'
created: 2024-02-13
---
---
Hello, my name is Pietra and today I will be presenting my final year project: Visualising Ownership and Borrowing in Rust.

---

So why Rust? Rust is very powerful, with a performance comparable to C and C++. Its memory safety and efficiency sets it apart from other programming languages, and it is crucial for its promise of safety without garbage collector. All of this is due to ownership. However as you can see, developers state that ownership is the second trickiest topic within Rust. My project aims to help them.

---

Ownership is Rust is based on three simple rules:
1. Each value has a single owner.
2. When the owner goes out of scope, it gets dropped meaning its resources are returned.
3. Ownership can be transferred through move semantics, which is what the image demonstrates.

---

But what about when you need to use a value without taking ownership? Thats where borrowing comes into play, allowing both mutable and immutable references to a value without taking over its ownership. This provides flexibility while maintaining safety. You can see an example of a mutable and immutable borrow here.

---

Here's an overview on how I plan to achieve my goals:

As I said Rust is unique and powerful, however ownership and borrowing pose a significant learning challenge due to their complexity. Recognising this, my project introduces a visualisation tool designed to demystify these principles. The objective is clear: to accelerate the learning process and deepen comprehension of Rust's safety mechanisms. The tool transforms abstract concepts into tangible visuals. Finally through research and iterative design, I came up with a solution to help learners navigate Rust's memory management features.

---

The background research was anchored in the RustViz project and Rust's official documentation, setting a solid foundation for understanding Rust's advanced memory management features. However, unlike RustViz, I am aiming for dynamic analysis and not static. Here you can see what RustViz looks like.

---

I chose the Agile method for this project because of its flexibility and iterative approach. I came up with tasks and gave myself rough deadlines to when they should be completed. This wasn't too hard, as one task builds up on the other so I didn't have to do much parallel work (besides documenting). I also came up with a risk mitigation plan to ensure I can get over any hurdles. 

---

Leveraging Agile methodology, I set out to develop a custom Rust parser with Tree-sitter, emphasising rapid prototyping and iterative development. 

In the design phase, I outlined the features and scope, as well as explored technical possibilities like for example using the Rust compiler instead of a custom parser and leveraging tools like RustViz and Tree-sitter.

My ideas then started to come into shape and I came up with a first prototype. 

And finally, I developed a testing suite and documentation to ensure I met my goals and provide a functional and intuitive tool.

---

I chose Tree-sitter for its fast and efficient parsing, crucial for real-time Rust code visualisation. The custom parser, built on Tree-sitter, focuses specifically on Rust's unique ownership and borrowing, offering precise control for detailed visualisation. Now about the parser mechanics, as you can see in the image here, it converts Rust code into syntax trees in textual form.

---

Utilising Tree-sitter's choice function, I defined Rust integer types and key constructs, for example: statements, expressions and patterns to have a good foundation.

I then incorporated Rust patterns and type expressions for variable and function declaration, differentiating between assignment, binary operations and method calls.

I broke this down into steps: from simple to mutable declarations, type annotations, function and method declarations, macros references and complex block structures and finally finding the nuance in handling borrowing and ownership by focusing specifically in code where it occurs.

---

Here's an example of how I parse a function declaration. This is the grammar I had to come up with to handle it.

The way it works is:

I start with fn, finding the beginning of a function declaration.

Use identifier to capture any valid Rust function name.

Then pattern to define the function's inputs within parentheses, allowing for a detailed parameter list.

Then we have our optional return type, with the arrow symbol signifying a return function, paired with type_expression to specify the return type.

And we conclude with the function's body, within a block, encapsulating all the logic.

---

The final parser supports Rust's complex type system, parsing diverse data structures. It ensures detailed analysis of Rust syntax, from basic constructs to intricate expressions. It adapts to Rust's various statements forms for seamless code interpretation. It integrates Rust's pattern matching capabilities, a super smart system for making decisions based on what data you give it. And finally method calls and macro invocations, for example the print macro.

---

Ok now testing. The custom test suite I developed using Tree-sitter checks every aspect of the grammar developed, ensuring robust support. I have tests for each construct in the grammar, for example both simple and mutable declarations, functions, parameter types etc. In the first image you can see the test suite being ran and the tests executed, and below you can see and example of a test, where I give it Rust code and the expected tree.

---

Moving to the user interface, so user can actually intuitively use my tool. 

I used Bootstrap for adaptable and stylish interface design, also ensuring accessibility across devices out of the box.

I included a text area for code input and a parse button as you can see here.

I employed my custom Tree-sitter parser, converting to WebAssembly for Web support, offering instant feedback on the code.

For visual feedback, I am using colour coding in the output area to differentiate between ownership and mutable/immutable borrows.

Finally I also set up dynamic interactions, handling parsing requests and hover events for an interactive experience as you can see at the bottom of the image.

---

How does it know what to highlight?

The webpage uses Javascript, enhanced by the Tree-sitter parser converted to WebAssembly, to analyse Rust code in real time.

For an immutable borrow for example, we check if the node we are looking at is a reference_expression. This is a technical way of saying its looking to see if the code is borrowing something.

If the node is a reference_expression, the function then checks all the children nodes to see if any part is a mutable_specifier, meaning the borrow is mutable.

If no nodes have a mutable specifier, then we are correct to assume it is an immutable borrow.

The logic is not perfect, however it is sufficient to correctly identify immutable borrows in most cases.

---

In the subject of testing, I'm integrating AI to analyse code snippets for ownership and borrowing concepts. The idea is to feed ChatGPT with code snippets, and request its analysis to then compare against the custom parser. 

My initial setup includes an Express server, which facilitates the communication between the user's code submissions and AI analysis. I have dotenv to ensure the API key remains protected, ensuring safe interactions with GPT. Through the /analyse-code endpoint, users can submit Rust code which is then processed asynchronously to leverage OpenAI's capabilities in understanding and analysing complex code patterns without traditional syntactic context.

This doesn't only extend the parser functionally, but opens up new avenues for understanding how AI interprets programming concepts compared to traditional parsers.

---

Now the challenges.

The complexity of ownership and borrowing posed a significant challenge. The simplistic grammar, while effective in parsing basic structures, sometimes struggle with the contextual depth required for accurate analysis. The limitation led to inconsistencies in identifying these key Rust features, revealing the need for a more context-aware approach. Despite these hurdles, I believe the project has laid the groundwork for further refinement.

---

In the design phase, before deciding on Tree-sitter, I considered an alternative approach. The idea was to integrate the tool with the Rust compiler, harnessing deep insights into code structure and semantics, offering the context that I believe the parser is missing. By extracting nuanced data directly from the compilation process, we enable a level of analysis that goes beyond surface-level parsing. However, this seemed out of scope for this project given the time-frame and complexity.

---

As the project moves forward, the next steps are crucial for enhancing the tool. First, the AI integration to refine the comparative analysis need to be completed. Next, the test suite needs to be expanded, focusing on the accuracy of the highlighting mechanism. Gathering user feedback will be essential to fine-tune usability and effectiveness, however the tool is not accurate enough yet for that to be executed. Together, I think these steps will enhance the learning and development experience for Rust programmers.

---

Thank you for listening, do you have any questions?


# Version 2
---

**Slide 1: Introduction**
Hello, I'm Pietra, and today I'll present "Visualising Ownership and Borrowing in Rust," my final year project aimed at simplifying these core Rust concepts.

---

**Slide 2: Why Rust?**
Rust's unmatched performance and memory safety come from its unique ownership model, making it a standout language but also a challenging one to learn.

---

**Slide 3: Ownership in Rust**
Ownership in Rust follows three rules: each value has a single owner, values are dropped when out of scope, and ownership can be transferred, ensuring memory safety.

---

**Slide 4: Borrowing Concept**
Borrowing allows mutable and immutable references to values, enabling safe and flexible use of data without taking ownership.

---

**Slide 5: Project Goals**
The project introduces a visualisation tool to demystify ownership and borrowing, aiming to accelerate learning and comprehension of Rust's safety mechanisms.

---

**Slide 6: Research Foundation**
Grounded in research from RustViz and official documentation, my tool focuses on dynamic analysis for a real-time understanding of Rust code.

---

**Slide 7: Agile Methodology**
Adopting Agile allowed for a flexible, iterative development process, ensuring a structured approach to achieving project milestones.

---

**Slide 8: Development Strategy**
Using Tree-sitter for parsing, the project emphasized rapid prototyping and iterative development, leading to the creation of a custom Rust parser.

---

**Slide 9: Technical Approach**
The parser, built on Tree-sitter, offers detailed visualisation of Rust's ownership and borrowing by precisely converting code into syntax trees.

---

**Slide 10: Grammar and Parsing**
I developed a grammar to capture Rust's syntax, focusing on accurately parsing complex code structures related to ownership and borrowing.

---

**Slide 11: Parser Mechanics**
The parser supports Rust's type system and pattern matching, crucial for interpreting diverse data structures and expressions.

---

**Slide 12: Testing Framework**
A custom test suite verifies the parser's accuracy across various Rust constructs, ensuring robust support for the language's syntax.

---

**Slide 13: User Interface Design**
The tool features an intuitive interface using Bootstrap, with real-time visual feedback through color coding to highlight ownership and borrowings.

---

**Slide 14: Visual Feedback Mechanism**
Utilizing JavaScript and WebAssembly, the tool analyzes Rust code in real-time, identifying mutable and immutable borrows for visual representation.

---

**Slide 15: AI Integration**
Exploring AI to complement traditional parsing, the tool uses AI analysis for a deeper understanding of Rust's concepts through code snippets.

---

**Slide 16: Challenges Encountered**
Addressing the complexity of accurately visualizing ownership and borrowing required overcoming limitations in contextual analysis.

---

**Slide 17: Alternative Approaches**
Considering integration with the Rust compiler for deeper analysis was explored but deemed out of scope due to project constraints.

---

**Slide 18: Future Enhancements**
Enhancing the tool involves refining AI integration, expanding the test suite, and gathering user feedback to improve accuracy and usability.

---

**Slide 19: Conclusion**
This project lays the groundwork for a comprehensive learning tool, aiming to simplify the complexity of Rust for developers.

---

**Slide 20: Q&A**
Thank you for your attention. I'm now ready to take any questions you might have about my project.

---
