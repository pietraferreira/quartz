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


# What is Refactoring?
- Quote from Fowler (refactoring.com):

> “When a software system is successful, there is always a need to keep enhancing it, to fix problems and add new features. After all, it's called software for a reason! But the nature of a code-base makes a big difference on how easy it is to make these changes. Often enhancements are applied on top of each other in a manner that makes it increasingly harder to make changes. Over time new work slows to a crawl. To combat this change, it's important to refactor code so that added enhancements don't lead to unnecessary complexity.”

