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
- http://martinfowler.com/bliki/CodeSmell.html
- https://blog.codinghorror.com/code-smells/

- Large class:
    - Classes try to do too much, which reduces cohesion.
    - You break it up with the extract class refactoring.
- Long parameter list:
    - Hard to understand, can become inconsistent.
    - You resolve it with the remove parameter refactoring.
- Lazy class:
    - A class that no longer "pays its way", e.g.: may be a class that was downsized by a previous refactoring, or represented planned functionality that did not pan out.
- Solution sprawl:
    - You need to add or remove a feature from a project, but in order to do so much change many different components in many different classes.
- Data class:
    - These are classes that have fields, getting and setting methods for the fields, and nothing else; they are data holders, but objects should be about data **and** behaviour.
- Refused bequest:
    - A subclass ignores most of the functionality provided by its superclass.
- Comments:
    - Comments are sometimes used to hide bad code.
    - What is a good comment...

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

## Comments Code Smell
- Fowler claims that comments are a sign of:
    - Complicated code.
    - Code that is in need of explanation but that actually needs restructuring rather than commenting.
- Fowler advocates:
    - Self-evident coding practices by making methods short, comments meaningful.
    - Commenting the decision making process for the solution implemented, e.g.: why something is there, not what it does.
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

## Advantages
- Reduces duplicate and inefficient code.
- Improve cohesion, reduce coupling.
- Improves the understandability of code, maintainability etc. by reducing complexity.
- Can help reduce technical debt.
- Can help reduce bugs since the code is more maintainable.
- Can be done at any stage of a system's life.

## Disadvantages
- Opportunity cost: there are many other things that can be done instead of refactoring and this might be time better spent.
- Complex in many cases and always needs significant re-testing.
- No guarantee that the refactoring won’t break despite testing or that it makes code any less bug-prone.
- Time: it takes time to do refactoring and communication overhead if you’re working in a team.
- There is not a huge amount of evidence that refactoring actually provides the benefits it claims.
- Does it make future maintenance easier?
- Can lead to developers going down “rabbit holes”.

### Extract Method
Applies when you have a code fragment inside some code block where the lines of code should always be grouped together.
- Turn the fragment into a method whose name explains the purpose of the block of code.

#### Example
![[notes/images/Screenshot 2023-10-15 at 19.26.28.png|480]]

### Extract Class
You have one class doing work that should be done by two different classes.
- Create a new class and move the relevant fields and methods from the old class to the new class.

#### Example
![[notes/images/Screenshot 2023-10-15 at 19.27.25.png|280]]

### Extract Subclass
When a class has features (attributes and methods) that would only be useful in specialised instances, we can create a specialisation of the class and give it those features.

![[notes/images/Screenshot 2023-10-15 at 19.28.14.png|480]]

### Move Method
A method is used more by another class, or uses more code in another class, than its own class.
- Well, then, move it. Create a new method with a similar body in the class it uses most.

#### Example
![[notes/images/Screenshot 2023-10-15 at 19.29.03.png|280]]

### Move Field
A field is used by another class more than it is in its own class.
- Well then, move it to the class that uses it most.

#### Example
![[notes/images/Screenshot 2023-10-15 at 19.29.41.png|280]]

### Encapsulate Field
![[notes/images/Screenshot 2023-10-15 at 19.29.59.png|280]]

### Replace Magic Number with Symbolic Constant
- Before:
```java
// Calculate the length of the outer crust of each
// piece of pizza given the diameter of the pizza
// and number of desired pieces.
public float lengthOfOuterCrust(float diameter, int numberOfPieces) {
    return (3.1415 * diameter) / numberOfPieces;
}
```

- After:
```java
public static final float PI = 3.1415;
public float lengthOfOuterCrust(float diameter, int numberOfPieces) {
    float circumference = PI * diameter;
    return circumference / numberOfPieces;
}
```

### Remove Dead Code
```java
public class DeadCodeInJava {
    void DeadCode_method(boolean b) {
        if(b) { 
            return;
        }
        else {
            return;
        }
        System.out.println(“Dead Statement");
    }
}
```

The code you've provided is considered "dead code" because the statements following the conditional `if` and `else` blocks will never be executed.

In your `DeadCode_method`, you have a conditional `if(b)` followed by a `return` statement in both the `if` and `else` blocks. Since both branches of the conditional have `return` statements, the flow of execution will exit the method before it reaches the `System.out.println("Dead Statement");` statement. As a result, that `System.out.println` statement will never be executed, making it dead code.

To eliminate the dead code, you can simply remove the `if` and `else` blocks and the `System.out.println` statement, resulting in a more concise and readable method:

```java
public class DeadCodeInJava {
    void DeadCode_method(boolean b) {
        if(b) { 
            return;
        }
    }
}
```

### Consolidate Conditional Duplicate Fragments

```java
if (isSpecialDeal()) {
    total = price * 0.95;
    send();
}
else {
    total = price * 0.98;
    send();
}
```

```java
if (isSpecialDeal()) {
    total = price * 0.95;
}
else {
    total = price * 0.98;
}
send();
```

We moved the `send()` to outside the if statement.

This principle is a form of refactoring in which you reduce duplication in your code and make it more maintainable by eliminating redundant code within conditional branches.

In your original code, you have an `if-else` statement with two branches, and both branches perform the same action of calculating `total` and then calling the `send()` function. This means that regardless of whether the condition `isSpecialDeal()` is true or false, you are always calling the `send()` function. This results in duplicated code that can be simplified.

### Substitute Algorithm Example
- Summing up the integers 1..n:

- Before:
```
int sum = 0, i;
for (i=1; i<=n++; ++i) sum += i;
```

- After:
```
int sum = n*(n+1)/2;
```

### NASA uses refactoring
![[notes/images/Screenshot 2023-10-15 at 23.00.55.png]]

### Refactoring at Google (Marty Stepp)
> At Google, refactoring is very important and necessary/inevitable for any code base. If you're writing a new app quickly and adding lots of features, your initial design will not be perfect. Ideally, do small refactoring tasks early and often, as soon as there is a sign of a problem.

> Refactoring is unglamorous because it does not add features. At many companies, people don't refactor because you don't get promoted for it, and their code turns into hacky beasts.

> Google feels refactoring is so important that there are company-wide initiatives to make sure it is encouraged and rewarded.

Common reasons not to do refactoring:

> a) 'Don't have time; features more important' – refactoring is a luxury that we can’t afford.
b) 'We might break something' – If it ain’t broke, don’t fix it.
c) 'I want to get promoted and companies don't recognize refactoring work' -- This is a common problem. Solution varies depending on company. Seek buy-in from your team, gather data about regressions and flaws in the design, and encourage them to buy-in to code quality."
Victoria Kirst,
Software Engineer, Google

# Questions
- Question 1: Describe any FOUR code smells that you know of. Include in your answer an explanation of why you think each smell is problematic for code.

1. **Duplicate Code**:
    - Duplicate code occurs when the same or similar code is repeated in multiple places in a codebase.
    - This code smell is problematic because it makes maintenance difficult. When changes are needed, you must update each occurrence of the duplicated code, which can lead to errors if you miss any.
2. **Long methods or functions**:
    - Long methods or functions are overly complex and contain a large number of lines of code.
    - Long methods are challenging to understand, test and maintain. They often violate the Single Responsibility Principle, as a single method should ideally perform a single, well-defined task.
3. **Large classes or modules**:
    - Large classes or modules are those that have too many responsibilities and are overly complex.
    - Large classes violate the Single Responsibility Principle, making the code less modular and maintainable. They are hard to test and understand, and changes to one part of the class may unintentionally affect other parts. This can increase coupling between classes.
4. **Inappropriate comments**:
    - Inappropriate comments are comments that explain what the code does rather than why it does it.
    - They are problematic because they can indicate that the code itself is not self-explanatory. Instead of addressing the root cause of complexity or unclear code, developers resort to adding comments as a band-aid solution. Over time, these comments become outdated, leading to confusion.

---
- **Question 2**: What is the Law of Demeter? Use a diagram to explain your understanding.

The Law of Demeter (LoD), also known as the Principle of Least Knowledge, is a design guideline in software development. It suggests that a class should have limited knowledge about other classes, only communicating with classes that are "closely" related to it. In other words, an object should not have too much knowledge about the internal structure of other objects. This principle helps reduce coupling (interdependence) between classes, making the system more maintainable and less tightly bound.

In this diagram:

- Class A interacts directly with Class B, which is considered its immediate or closely related friend.
- However, Class A does not directly interact with Class C, which is not its immediate friend.
- Instead, Class A communicates with Class C through Class B, using Class B as an intermediary.

The Law of Demeter promotes this kind of "talk only to your immediate friends" relationship to minimise direct interactions between unrelated classes, which can lead to tight coupling and increased complexity.

---
- **Question 3**: What would your advice be on the writing of comments in code to ensure that you make the code as maintainable as possible?

When writing comments in code to ensure maximum maintainability, consider the following guidelines:

1. **Explain Why, Not What**:
    - Comments should focus on explaining the intent, purpose, or reasoning behind the code rather than describing what the code does. Well-written code should be self-explanatory in terms of its functionality.
   
2. **Use Clear and Concise Language**:
    - Write comments using clear and concise language. Avoid jargon or overly technical terms that might confuse other developers.
   
3. **Keep Comments Updated**:
    - Regularly review and update comments to ensure they remain accurate and relevant. Outdated comments can be misleading.
   
4. **Comment Non-Obvious Code**:
    - Concentrate on explaining sections of code that are not immediately obvious. If the code is straightforward and self-explanatory, excessive commenting can make the code harder to read.
   
5. **Avoid Redundant Comments**:
    - Avoid adding comments that duplicate the code's meaning. Redundant comments can become outdated and lead to confusion.
   
6. **Use Inline Comments Sparingly**:
    - Inline comments are valuable for explaining complex algorithms or tricky logic. However, excessive inline comments can clutter the code. Keep them concise and relevant.
   
7. **Header Comments for Files and Functions**:
    - Consider using header comments at the beginning of files or functions to provide an overview of their purpose and usage.
   
8. **Follow a Consistent Style**:
    - Establish a consistent style guide for writing comments, such as using a specific format (e.g., Javadoc, Doxygen) and adhering to naming conventions.
   
9. **Use Version Control for Documentation**:
    - Consider maintaining more extensive documentation, such as design documents or README files, outside the codebase. Version control systems like Git can help keep this documentation up-to-date.
   
10. **Code Refactoring Over Comments**:
    - If code is difficult to understand due to complexity, consider refactoring the code to make it more self-explanatory rather than relying solely on comments.
   
11. **Collaborative Review**:
    - Encourage code reviews within your team. Comments can be an essential part of the review process, helping reviewers understand your thought process.

By following these guidelines, you can ensure that comments in your code contribute to its maintainability and readability without adding unnecessary clutter or confusion
