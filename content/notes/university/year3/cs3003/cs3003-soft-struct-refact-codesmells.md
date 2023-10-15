---
title:  "Software Structure, Refactoring and Code Smells"
tags:
  - university
module: cs3003
lecturer: Steve Counsell
created: 2023-10-15
year: '3'
type: lecture
---
---
# Law of Demeter (LoD)
- Principle of least knowledge.
- A design guideline for developing software, particularly where coupling is a big factor.
    - Coupling refers to the degree of interdependence or connection between different components, modules or objects within a software system. It is about how tightly one part of the software is connected or relies on another part.
- Each class should have only limited knowledge about other classes: only classes "closely" related to the current class.
- Only talk to your immediate friends.

![[notes/images/Screenshot 2023-10-15 at 19.09.46.png|480]]

# Single Responsibility Principle (SRP)
- A class developed with high cohesion has only one responsibility: follow the Single Responsibility Principle.
- A class developed with low cohesion may have many responsibilities: violates the Single Responsibility Principle.

# What does software degrade?
- Bugs lead to improper maintenance and rush jobs.
- As code ages, coupling tends to grow, leading to increased complexity.
- Technical debt rises as a system ages.
    - Putting off work on the code now and paying the price later.
- Link with previous lectures:
    - [[notes/university/year3/cs3003/cs3003-lecture2#Lehman's Laws of Software Evolution|Lehman's Laws]].
    - Relationship to the [[notes/university/year3/cs3003/cs3003-lecture2#Bathtub Curve|Bathtub Curve]].

## Bathtub curve re-visited

![[notes/images/Screenshot 2023-10-15 at 19.15.17.png|480]]

# Code Smell
A "code smell" is a term used in software development to describe certain patterns or characteristics in source code that may indicate potential problems or areas for improvement. Code smells are not necessarily bugs or errors in the code, but rather they are signs that the code might be poorly structured, less maintainable, or not following best practices. Identifying and addressing code smells is important for code quality, readability, and maintainability.

Common code smells include:
1. **Duplicate Code**: Repeating the same or similar code in multiple places, which can lead to maintenance challenges when updates are needed.
2. **Long Methods or Functions**: Very long and complex methods or functions that can be hard to understand, test, and maintain.
3. **Large Classes or Modules**: Classes or modules that have too many responsibilities or are overly complex, violating the Single Responsibility Principle.
4. **Inconsistent Naming Conventions**: Inconsistent or unclear variable, function, or class names that make the code less readable.
5. **Comments and Documentation Smells**: Excessive comments, comments that are out of date, or lack of documentation can indicate problems with code clarity.
6. **Nested Loops and Conditionals**: Deeply nested loops and conditional statements can make code hard to follow.
7. **Feature Envy**: When one class or module seems overly interested in the data or behaviour of another class, it can be a sign that the responsibilities are not well-distributed.
8. **Inappropriate Comments**: Comments that explain what the code does instead of why it does it can be a sign that the code itself is not self-explanatory.
9. **Data Clumps**: When certain groups of data variables are frequently used together, it may indicate that they should be grouped into a single data structure.
10. **Long Parameter Lists**: Functions or methods with many parameters can be challenging to work with and understand.

Identifying and addressing code smells is an important aspect of code refactoring and maintenance. By cleaning up code smells, developers can improve code quality, make the code more maintainable, and reduce the likelihood of introducing bugs when making changes or additions to the codebase.

# Refactoring

> When a software system is successful, there is always a need to keep enhancing it, to fix problems and add new features. After all, it's called software for a reason! But the nature of a code-base makes a big difference on how easy it is to make these changes. Often enhancements are applied on top of each other in a manner that makes it increasingly harder to make changes. Over time new work slows to a crawl. To combat this change, it's important to refactor code so that added enhancements don't lead to unnecessary complexity. (Fowler et al 1999)

- Refactoring is:

> The process of changing a software system in such a way that it does not alter the external behaviour of the code, yet improves its internal structure. (Fowler et al 1999)

- Does not change behaviour and user should not notice any difference.
- Constant regression testing importance.
- A form of preventative and perfective maintenance.
- Important in an XP (Extreme Programming) environment and TDD (Test-Driven Development).

Starts with an existing code base and the idea of refactoring is to:
- Reduce duplicate code.
- Improve cohesion, reduce coupling.
- Improve understandability, maintainability, etc.

Fowler et al 1999 suggests:
- 22 code smells - rotten structure in code.
- 72 refactoring - how to eliminate code smells.

## How do you do refactoring?
- Fowler says refactoring is not something you should dedicate two weeks every six months to... rather, you should refactor consistently and mercilessly.
- Refactor when you:
    - Recognise a warning sign (a "bad smell").
    - Have to fix a bug.
        - After fixing a bug, you could refactor the code affected.
    - Do a code review (as part of pair or mob programming).
- Many tools support refactoring: Eclipse, NetBeans etc.

### Extract Method