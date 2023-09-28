---
title:  "Lecture 2: Software Maintenance and Evolution"
tags:
  - university
module:
lecturer:
created: 2023-09-28
year: '3'
type: lecture
---
---
# Software Maintenance
---
- Definition: the process of **modifying** a software system or component to correct **bugs**, improve **performance** or other attributes, or adapt to a **changed environment**.

## Types of Maintenance
---
- **Adaptive** maintenance: adapting to changes in the environment, both hardware and software.
- **Corrective** maintenance: correcting errors/bugs and preventing failures, error vs bug vs failure.
- **Perfective** maintenance: making what's there "better".
- **Preventative** maintenance: "future-proofing" the code for later.

## Harsh Facts
---
- Maintenance is **expensive**, 70% software costs is due to it. For example, the US air force project cost £20 per line of code to develop, but £2,500 to maintain.
- Maintenance is **difficult**, 47% effort goes into understanding the system and identifying **dependencies**. Making changes is **risky**, because of **ripple effects** and dependencies. It can also be a low morale job.

## Factors that affect maintenance and evolution
---
1. Team stability.
2. Poor development practice (**quality**).
3. Staff skills.
4. Program age and structure.
5. The amount of "technical debt" in a system:
    1. The result of not doing maintenance when you should.
    2. That "ignored" maintenance will come back to haunt you later.

## Seven Relevant Topics to Maintenance (and hence system evolution)
---
### Software Evolution Theory
---
Lehman's Laws of Software Evolution:
1. Continuing Change: system must be continually adapted else it becomes less satisfactory to use.
2. Increasing Complexity: as the system evolves its complexity increases unless work is done to maintain or reduce it.
3. Continuing Growth: the functional capability of systems must be continually increased to maintain user satisfaction over the system lifetime.
4. Declining Quality: unless rigorously adapted to take into account changes in the operational environment, the quality of a system will appear to decline as it is evolved.
5. Feedback System: evolution processes are multi-level, multi-loop, multi-agent feedback systems.

### Defensive Programming
---
- Definition: technique where you assume the worst for all inputs.

It helps maintenance because you are insuring for the future.

The rules are:
1. Never assume anything about the input.
2. Use standards.
3. Keep you code as simple as possible.

### Mob Programming
---
- Definition: a software development approach where the whole team works on the same thing, at the same time, in the same space, and at the same computer. It builds on principles of lean manufacturing, extreme programming and lean software development.

It covers definition of user stories or requirements, designing, coding, testing, deploying software, and working with the customer and business experts.

Work is handled in working meetings or workshops:
- All involved in creating the software are considered to be team members, including the customer and business experts.
- Also works for distributed teams in the same virtual space using screen sharing.

### Bathtub Curve
---
![](notes/university/year3/cs3003/content/assets/Screenshot%202023-09-28%20at%2017.15.45.png)

#### What affects the shape of the bathtub?
---
- If the system is poor:
    - There will be high numbers of problems at the start and it will take longer to reach the stability period.
    - The period of 'constant failure rate' in the middle will be shorter.
    - The decline will be much quicker.

- What would a good system's bathtub look like?
    - Low numbers of problems at the start.
        - Reach the 'constant failure rate' stage quickly.
    - Long period of 'constant failure rate'.
    - A slow decline.

### Brook's Law
---
"Adding human resources to a late software project makes it later".

- Why?
    - Ramp-up.
        - Getting staff trained up on "what's happening" with the project.
    - Complexity of communication.
        - With two people in a team, there is only one communication channel (between person x and person y).
        - With five people there are ten.

![](notes/university/year3/cs3003/content/assets/Screenshot%202023-09-28%20at%2017.18.56.png)

### Death March
---
A project which is believed by participants to be destined for failure, or that requires a stretch of unsustainable overwork.

The project marches to its death as its members are forced by their superiors to continue the project against their better judgement.

### Pareto Analysis
---
It is named after Vilfredo Pareto. 

He established that 20% of the population in Italy owned 80% of the land.

![](notes/university/year3/cs3003/content/assets/Screenshot%202023-09-28%20at%2017.20.46.png)

Some examples in day-to-day life:
- 80% of customers complaints arise from 20% of products and services.
- 20% of products and services account for 80% of your profit.
- 20% of sales force produces 80% of your company revenues.

In 1963, IBM found out that roughly 80% of a computer's time was spent executing only 20% of the instructions.

# Questions
---
- Question 1: What is Brooks’ Law and why is it important?
- Question 2: It is impossible to change the shape of the Bathtub Curve. Discuss.
- Question 3: Appraise the use of defensive programming.
- Question 4: What are the advantages and disadvantages of Mob Programming?

1. Brooks' Law says that "adding human resources to a late software project makes it later". This means that if a project is already behind schedule, adding more developers is unlikely to speed it up (it might even further delay the project). This happens because the new team members need time to ramp up, understand the project and create a relationship with the team to communicate effectively. It is important to mention that the complexity of communication grows exponentially with the number of people involved. The law is important because it shows the challenges of managing software development projects effectively. 

2. The Bathtub Curve normally has three phases: an initial high failure rate (early life failures), a constant failure rate (random failures) and a wear-out failure rate (due to ageing or deterioration). I think it is possible to influence, and even alter the shape of the curve. The team can implement better design practices, quality control and testing during the development, possibly reducing the number of early life failures, which can flatten the initial rising part of the curve. Regular maintenance can extend the life of the product, prolonging the constant failure rate. And technology advancements can extend the lifespan of products and even reduce the overall failure rates.

3. 
