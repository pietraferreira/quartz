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
Rust's unmatched performance and memory safety come from its unique ownership model, making it a standout language but also a challenging one to learn. Here you can see that according to Rust developers, ownership is the second hardest topic to grasp.

---

**Slide 3: Ownership in Rust**
Ownership in Rust follows three rules: each value has a single owner, values are dropped when out of scope, and ownership can be transferred, ensuring memory safety. You can see an ownership transfer example here, where we transfer the ownership from s to b.

---

**Slide 4: Borrowing Concept**
But what about when you need to use a value without taking ownership? Thats where borrowing comes into play, allowing both mutable and immutable references to a value without taking over its ownership. This provides flexibility while maintaining safety. You can see an example of a mutable and immutable borrow here.

---

**Slide 5: Research Foundation**
The background research was anchored in the RustViz project and Rust's official documentation, setting a solid foundation for understanding Rust's advanced memory management features. However, unlike RustViz, I am aiming for dynamic analysis and not static. Here you can see what RustViz looks like.

---

**Slide 6: Agile Methodology**
Adopting Agile allowed for a flexible, iterative development process, ensuring a structured approach to achieving project milestones. Here you can see the tasks I set myself as well as deadlines and milestones.

---

**Slide 7: Developing a Parser with Tree-sitter**
I chose Tree-sitter for its fast and efficient parsing, crucial for real-time Rust code visualisation. The custom parser, focuses specifically on Rust's unique ownership and borrowing, offering precise control for detailed visualisation. Now about the parser mechanics, as you can see in the image here, it converts Rust code into syntax trees in textual form.

---

**Slide 8: Approach to Developing the Parser**
Utilising Tree-sitter's choice function, I defined Rust integer types and key constructs/

I then incorporated Rust patterns and type expressions for variable and function declaration, differentiating between assignment, binary operations and method calls.

---

**Slide 9: Example***

Here's an example of how I parse a function declaration. This is the grammar I had to come up with to handle it.

The way it works is:

I start with fn, finding the beginning of a function declaration.

Use identifier to capture any valid Rust function name.

Then parameter to define the function's inputs.

Then we have our optional return type, paired with type_expression to specify the return type.

And we conclude with the function's body, within a block, encapsulating all the logic.

---

**Slide 10: Testing**

Ok now testing. The custom test suite I developed using Tree-sitter checks every aspect of the grammar developed. In the first image you can see the test suite being ran and all the tests it executed (they pass), and below you can see and example of a test, where I give it Rust code and the expected tree.

---

**Slide 11: User Interface**

Moving to the user interface, so user can actually intuitively use my tool. 

I included a text area for code input and a parse button as you can see here.

I employed my custom Tree-sitter parser, converting to WebAssembly for Web support, offering instant feedback on the code.

For visual feedback, I am using colour coding in the output area and also dynamic interactions, allowing for hover events as you can see at the bottom of the image.

---
**Slide 12: How do we know what to highlight?**

How does it know what to highlight?

For an immutable borrow for example, we check if the node we are looking at is a reference_expression. This is a technical way of saying its looking to see if the code is borrowing something.

If the node is a reference_expression, the function then checks all the children nodes to see if any part is a mutable_specifier, meaning the borrow is mutable.

If no nodes have a mutable specifier, then we are correct to assume it is an immutable borrow.

The logic is not perfect, however it is sufficient to correctly identify immutable borrows in most cases.

---

**Slide 13: AI Approach for Code Analysis**

I'm integrating AI to analyse code snippets for ownership and borrowing concepts. The idea is to feed ChatGPT with code snippets, and request its analysis to then compare against the custom parser. 

 Users can submit Rust code which is then processed to figure out OpenAI's capabilities in understanding and analysing complex code patterns without traditional syntactic context.

I believe this opens up new avenues for understanding how AI interprets programming concepts compared to traditional parsers.

---

**Slide 14: Challenges**

Now the challenges.

The complexity of ownership and borrowing posed a significant challenge. The simplistic grammar, while effective in parsing basic structures, sometimes struggle with the contextual depth that we need for accurate analysis. The limitation led to inconsistencies in identifying these key Rust features, revealing the need for a more context-aware approach. Despite these hurdles, I believe the project has laid the groundwork for further refinement.

---

**Slide 15: Next Steps**

As the project moves forward, first, the AI integration needs to be completed. Next, the test suite needs to be expanded, focusing on the accuracy of the highlighting mechanism. Gathering user feedback will be essential to fine-tune usability and effectiveness. And finally develop more documentation and tutorials for the users.

---

**Slide 16: Thank you**

Thank you for listening, do you have any questions?

---

# Version 3
---

**Slide 1: Introduction**
"Hello, I'm Pietra, unveiling 'Visualising Ownership and Borrowing in Rust' today, my endeavor to demystify Rust's pivotal concepts in my final year project."

---

**Slide 2: Why Rust?**
"Rust stands out for its unparalleled performance and memory safety, attributed to its innovative ownership model. This complexity, however, poses a significant learning curve, as highlighted by developers who rank ownership among Rust's most challenging topics."

---

**Slide 3: Ownership in Rust**
"Rust enforces three cardinal rules for ownership: each value is owned by a single entity, ownership ends with scope, and ownership can shift via transfers, exemplified here with 's' transferring to 'b', ensuring memory safety."

---

**Slide 4: Borrowing Concept**
"When direct ownership is overkill, borrowing comes to the rescue, offering mutable and immutable references. This mechanism enhances flexibility while safeguarding against data races, illustrated here with examples of both borrow types."

---

**Slide 5: Research Foundation**
"My groundwork leverages insights from RustViz and official Rust documentation. Unlike RustViz's static lens, my project champions dynamic analysis. Here you can see what RustViz looks like.

---

**Slide 6: Agile Methodology**
"Embracing Agile, I navigated through this project with flexibility and iterative refinement, mapping out tasks, deadlines, and milestones for a structured yet adaptable workflow."

---

**Slide 7: Developing a Parser with Tree-sitter**
"Opting for Tree-sitter for its efficiency in parsing, I tailored a custom parser attuned to Rust's borrowing and ownership, transforming Rust code into comprehensible syntax trees, as shown here."

---

**Slide 8: Approach to Developing the Parser**
"My strategy with Tree-sitter involved defining Rust's syntax through choices and patterns, distinguishing between variable functions, operations, and method calls for a granular parsing approach."

---

**Slide 9: Parsing Function Declarations**
"I'll walk you through parsing a function declaration, starting with 'fn' to pinpoint declarations, using identifiers for names, parameters for inputs, optional types for returns, and finally culminating in the function's logic block."

---

**Slide 10: Testing**
"Developing a custom test suite with Tree-sitter allowed detailed grammar evaluation You can see the suite's execution here, where tests confirm the parser's accuracy with Rust code examples. You can also see an example of a test below it.

---

**Slide 11: User Interface**
"The interface is designed for intuitiveness, featuring a code input area and parse button for immediate feedback. My Tree-sitter parser, now WebAssembly, enables real-time code analysis, enriched with color-coded visual cues and interactive elements."

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
"Addressing ownership and borrowing's intricacies revealed limitations in my grammar's contextual depth, occasionally missing the mark on accurately identifying Rust's key features, prompting a shift towards a more context-aware approach."

---

**Slide 15: Next Steps**
"Looking ahead, completing AI integration and broadening the test suite are priorities to refine the tool's precision. User feedback will drive usability improvements, alongside expanding educational resources for Rust developers."

---

**Slide 16: Thank You**
"Thank you for your attention. I welcome any questions or insights you might have about this project."

---