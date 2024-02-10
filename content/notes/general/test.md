---
title:  "Test"
tags:

created: 2024-02-10
bibliography: ~/Desktop/zotero-library-uni.bib
---
# Test
---
Visualising Ownership and Borrowing in Rust Programming

![Macintosh HD:Users:simonkent:Downloads:BUL_LOGO_POS_RGB.jpg](Aspose.Words.81ea18b0-d9ce-403d-aec6-e682d324d32a.001.jpeg)

**Department of Computer Science**

**BSc (Hons) Computer Science (with Artificial Intelligence)**


Academic Year 2023 - 2024


**Visualising Ownership and Borrowing in Rust Programming**

Pietra Ferreira Tadeu Madio

2041368

A report submitted in partial fulfilment of the requirements for the degree of 

Bachelor of Science


Brunel University London

Department of Computer Science

Uxbridge

Middlesex

UB8 3PH

United Kingdom 

T: +44 1895 203397

F: +44 (0) 1895 251686
#

# <a name="_toc145504647"></a>**Abstract**
This project, “Visualising Ownership and Borrowing in Rust Programming”, tackles the intricate challenge of comprehending Rust’s unique ownership and borrowing system. Rust, known for its memory safety features, without a garbage collector, imposes a steep learning curve due to these complex concepts, essential for writing efficient code.

The approach involves developing a visualisation tool that makes ownership and borrowing events in Rust code more discernible and understandable. This tool is designed to facilitate learning by providing a visual representation of these static events, enhancing learners’ grasp of Rust.

The contribution of this project lies in its potential to significantly improve the learning experience for Rust developers. By visually demystifying the ownership and borrowing mechanics, the tool aims to accelerate understanding and proficiency in Rust. The expected outcomes include enhanced comprehension, smoother learning progression, and a more accessible introduction to Rust’s advanced programming paradigms.
# <a name="_toc145504648"></a>**Acknowledgements**
This page is where you have the opportunity to give thanks to anyone, or anything that inspired or helped you with your project.


















![](Aspose.Words.81ea18b0-d9ce-403d-aec6-e682d324d32a.002.png)


`	`Total Words: 2005
18
# <a name="_toc145504649"></a>**Table of Contents**

Abstract	i

Acknowledgements	ii

Table of Contents	iii

List of Tables	iv

List of Figures	v

1	Introduction	1

1.1	Aims and Objectives	1

1.2	Project Approach	2

1.3	Dissertation Outline	3

2	Background	4

3	Methodology (Or Approach)	6

4	Design (Or What you did Part One)	7

5	Implementation (Or What you did Part Two)	8

6	Testing and Evaluation	9

7	Conclusions	10

7.1	Future Work	10

References	11

Appendix A	Personal Reflection	12

A.1	Reflection on Project	12

A.2	Personal Reflection	12

Appendix B	Ethics Documentation	13

B.1	Ethics Confirmation	13

Appendix C	Other Appendices	13

More relevant material	13



#
# <a name="_toc145504650"></a>**List of Tables**
Table 1 - A risk analysis table	4




#
# <a name="_toc145504651"></a>**List of Figures**

Figure 1 - A generic model of the Final Year Project	5


1. # <a name="_toc145504652"></a>**Introduction**
This dissertation focuses on a pivotal aspect of modern programming languages: memory safety and management. Among such languages, Rust stands out for its innovative approach of these concerns, particularly through its ownership and borrowing system. However, this system, while enhancing safety and efficiency, introduces a significant learning barrier due to its complexity and unconventional nature.

The problem at hand is the steep learning curve associated with Rust’s ownership and borrowing concepts. These are fundamental to Rust’s design, offering memory safety without a garbage collector, but they demand a high level of mental tracking and understanding from programmers. This complexity can hinder both beginners and experienced developers in fully grasping Rust’s potential.

The RustViz project, a key background study for this dissertation, addresses similar challenges. It demonstrates the utility and impact of visualisation in comprehending complex programming concepts. Drawing inspiration from this, my project aims to further explore and enhance the ways through which visualisation can aid in demystifying Rust’s unique features.

This introduction sets the stage for the subsequent sections, where the specific aims and objectives of developing a Rust visualisation tool will be detailed. The tool aims not just to simplify the learning process, but also provide a deeper insight into efficient programming practices within the Rust ecosystem.
1. ## <a name="_toc145504653"></a>**Aims and Objectives**

The aim of this project is to simplify the learning process of Rust’s ownership and borrowing system by developing a visualisation tool, thereby enhancing the overall understanding and proficiency in using Rust for programming tasks. The objectives are:

1. Conduct a Background Study: Investigate existing literature and resources related to Rust programming, particularly focusing on the challenges associated with learning its ownership and borrowing system. Study the RustViz project as the main background study to understand the effectiveness of visual tools in this context.
1. Identify an Effective Approach: Determine a methodology that, when executed, will yield meaningful results. This includes selecting appropriate visualisation techniques and deciding on the scope and functionality of the tool to be developed.
1. Design and Implement the Tool: Develop a software tool that visually represents the ownership and borrowing concepts in Rust. Ensure the tool is user-friendly and accurately reflects the intricacies of Rust’s system.
1. Tailor Objectives to Specific Project Needs: Adapt these objectives to align with the specific challenges and requirements of visualising Rust’s ownership and borrowing system, ensuring a unique and focused approach.
1. Evaluate the Tool’s Effectiveness: Establish a framework for assessing the tool’s impact on learning and understanding Rust’s ownership and borrowing system. This could involve user testing, comparative studies with other learning methods, and feedback analysis. 


## <a name="_toc145504654"></a>**1.2	Project Approach**

The project will be conducted in several structured phases:

1. Initial Research and Study: This phase involves an in-depth study of existing literature and resources related to Rust programming, focusing on its ownership and borrowing system. Special attention will be given to the RustViz project to understand the impact of visualisation tools in this area.
1. Design Methodology: The approach to designing the tool will involve identifying the most effective visual representation techniques for Rust’s ownership and borrowing concepts. This phase will include creating initial design mock-ups and establishing the technical framework for the tool.
1. Development Phase: In this phase, the visualisation tool will be developed. This will involve coding, integrating the visualisation techniques identified in the design phase, and continuously testing for accuracy and usability.
1. Iterative Testing and Refinement: The tool will undergo a series of iterative tests to ensure functionality and accuracy. Feedback will be actively sought from potential users, and the tool will be refined accordingly.
1. Evaluation and Analysis: The final phase involves evaluating the tool’s effectiveness in aiding the learning process. This will be done through user studies and comparative analysis.

Each phase is designed to build upon the previous one, ensuring a comprehensive approach to the development and evaluation of the visualisation tool. The methodology is aimed at producing a tool that not only addresses the learning challenges in Rust programming, but also contributes to the field of educational tools in programming.


## <a name="_toc145504655"></a>**1.3	Dissertation Outline**

Traditionally, dissertations tend to contain a description of each chapter:

Chapter 2, discusses the background for my project, and identifies some key techniques that can be adopted during the development of the proposed solution.  Chapter 3 explains how the project will be undertaken . . . etc, etc.  

This approach is acceptable, however it can make quite bland reading.  You might like to consider drawing a flow-chart of your project, showing how information such as background data, questionnaire data, results of studies, running computer programs, or undertaking user studies act as input to, or output from your chapters. You can also indicate how each chapter relates to your objectives.  This kind of diagram can help to add clarity for your reader, and can help you to get your head round the structure of your project.


1. # <a name="_toc145504656"></a>**Background**
The complexity of Rust’s ownership and borrowing system presents a significant learning challenge, a concept thoroughly explored in “The Rust Programming Language” documentation (Klabnik & Nichols, 2018). This system is vital for ensuring memory safety and efficiency in Rust, but its intricacies can be difficult for both new and experienced developers to grasp. This difficulty stems from the need to manage memory without a garbage collector, requiring a deeper understanding of how ownership and references work in the language.

RustViz, an important reference for this project, offers a novel approach to visualizing Rust’s ownership and borrowing mechanics (Ray et al., 2022). It demonstrates how visual aids can make abstract concepts more tangible, facilitating easier comprehension. However, RustViz, while pioneering, leaves room for improvement, particularly in the realm of handling more complex scenarios and integrating these visualisations into educational resources effectively.

Further insight into parsing in Rust, crucial for the development of any tool aimed at visualising Rust code, is provided by resources like Tree-sitter (Sridhara, 2021) and Rust Analyzer (Jessen, 2021). These resources highlight the importance of efficient and accurate parsing in programming languages tools and. The challenges in creating parsers that can handle complex syntax and provide useful feedback.

In synthesizing these sources, the project recognizes the need for a more intuitive, accessible tool that builds upon RustViz’s foundation. This approach involves not only a deep dive into Rust’s ownership and borrowing principles, but also an exploration into effective parsing techniques and visual representation methods.

- Klabnik, S., & Nichols, C. (2018). The Rust Programming Language. No Starch Press.
- Ray, B., Sridhara, G., Enders, R., & Zhai, E. (2022). RustViz: Generating Interactive Visualizations to Improve Rust Borrow Checker Reasoning.
- Sridhara, G. (2021). Tree-sitter: A New Approach to Parsing in Rust.
- Jessen, W. (2021). Rust Analyzer: A Comprehensive Guide.






1. # <a name="_toc145504657"></a>**Methodology (Or Approach)**
The methodology for this project centres around the development and evaluation of a Rust parser using Tree-sitter, designed to highlight and visually display ownership and borrowing events in Rust code. The approach is structured as follows:

1. Requirements Gathering: Identify specific challenges and areas of confusion in understanding Rust’s ownership and borrowing system.
1. Parser Development: Utilise Tree-sitter to develop a Rust parser that can accurately identify and annotate ownership and borrowing events in Rust code. This parser will serve as the core engine for the visualization tool.
1. Visualisation Design and Implementation: Design a minimalistic interface that effectively displays the results of the parser, highlighting ownership and borrowing in an intuitive and educational manner. Implement this interface with an emphasis on usability and clarity.
1. Testing and User Feedback: Conduct a series of tests, both technical and user centric. Technical tests will ensure the accuracy and efficiency of the parser and visualisation tool. User testing, involving potential learners of Rust, will assess the tool’s effectiveness in improving understanding of Rust’s concepts.
1. Evaluation: Compare the effectiveness of traditional methods with the utilization of the developed tool. Evaluate the results to determine the tool’s impact on learning efficiency and comprehension.
1. Iterative Refinement: Based on feedback and study results, iterate on the tool’s design and functionality to enhance its educational value.

This methodology is design to ensure that the tool is not only technically sound, but also effective in its educational purpose. 








1. # <a name="_toc145504658"></a>**Design (Or What you did Part One)**
These middle chapters are the places for you to write what you have done in more detail.  This might mean the design, implement, test elements of a software project.   It might mean the model, evaluate re-model phases of some kind of business modeling or simulation modeling project.  It might be the data capture, requirements gathering, system design and mock-up test stages of an IS project trying to evaluate the feasibility of a software system to solve a particular problem.  

You need to divide the material up amongst these middle chapters in a way that will make sense to your reader.

1. # <a name="_toc145504659"></a>**Implementation (Or What you did Part Two)**
We are following a seven chapter model, which gives you a couple of chapters in the middle for the “What you did” part, but if you really think it is better to have eight chapters, that is fine too.  If you go for many fewer than seven, you have probably missed something, and if you have many more than seven, you may be going a bit fine-grained.
1. # <a name="_toc145504660"></a>**Testing and Evaluation**
This is where you will present your results and provide an evaluation of your solution against the problem.   Try and structure your results in a meaningful way.  Try and help the reader.  Do not just take some numbers, load them into a statistics package such as SPSS and then present every statistical analysis technique in the known world.  Use appropriate methods for analysing, presenting and summarising your data.  
1. # <a name="_toc145504661"></a>**Conclusions**
This is where you draw your final conclusions. You have presented your findings or data, now summarise how you have met each objective, and draw a conclusion as to whether you have met your overall aim.  You should provide some justification for this.  There are three possibilities here:

1. You have completely met your aim, and solved your problem (unlikely)
1. ` `Your results show that your solution does not solve the problem at all (unlikely)
1. You conclude that your solution addresses your problem to some extent, but that there are weaknesses in the approach in other regards (most likely)

In each case, you will have produced a valid result, and each of these is equally valuable when it comes to grading your work.

What is less valuable is drawing the conclusion that you have solved all the problems with only weak justification.

1. ## <a name="_toc145504662"></a>**Future Work**
You should find that when you reach the end of your project, it will be defined more by what you haven’t had time to do, than what you have managed to do.  If you engage properly with the process, you will continually raise questions, and spin-off projects which it would be interesting to explore, but which you simply did not have time to pursue while focusing on the primary aim of your FYP.  This is your place to write about these areas as inspiration for future students.


# <a name="_toc145504663"></a>**References**
Brunel University Library (2013) *Harvard Referencing Guide.* Available at: http://www.brunel.ac.uk/\_\_data/assets/pdf\_file/0020/161471/Harvard-Guide.pdf (Accessed: 18 November 2013)


1. ####### <a name="_toc145504664"></a>**Personal Reflection** 
This **compulsory** appendix should contain a personal reflection on your project.  It should contain two sections:
1. ######## <a name="_toc246428037"></a><a name="_toc145504665"></a>**Reflection on Project**
In this section, you should reflect on the project you have undertaken, and consider, with you specific knowledge of the topic area, studies that you undertook, and problems you encountered, how you might have undertaken it differently.

It is important that you acknowledge if you have used generative AI tools in your work.  You must make clear how you have used these tools and reflect on the application.
1. ######## <a name="_toc145504666"></a>**Personal Reflection**
In this section, you should consider more personally how you might have worked differently to deliver an improved project if you had your time again.
1. ####### <a name="_toc145504667"></a>**Ethics Documentation**
   1. ######## <a name="_toc145504668"></a>**Ethics Confirmation**
      Attach the ethics confirmation email from the college research office here. This is **compulsory** for all projects, whether user participants are used in your project or not.  See lecture 3 for more information. 

1. ####### <a name="_toc145504669"></a>**Other Appendices**
######## <a name="_toc145504670"></a>**More relevant material**
The remaining appendices can contain relevant material which is not essential to be included in the main body of the dissertation, but which may be useful to support your dissertation.  

- Examples of relevant material might include:
- Example questionnaires
- More detailed designs
- Relevant results which didn’t fit in the main body

Examples of material that should not go into an appendix:

- A dump of all your code
- Transcripts of all your interviews

Remember, that the appendices should be there in case the reader wants to refer to them.  They will not be read as part of the dissertation story, so do not just use them to put essential material because you ran out of room.  Also, do not be tempted to pad out your dissertation to the full 60 pages just by adding lots of unnecessary material to the appendices.

Any supplementary materials can be uploaded electronically with your submission.
