---
title: "UML Class Diagram"
tags:
  - cs2002/uml
  - cs2002/uml/classdiagram
  - lecture
programming-languagues:
module:
  - cs2002
term:
  - first
created: 2022-10-21
---
# UML - Class Diagram

```toc
```
---
## Objects
Individuals of a system:

![Screenshot 2022-10-21 at 13.10.25](notes/images/Screenshot%202022-10-21%20at%2013.10.25.png)

### Object Diagram
The objects of a system and their relationships, snapshot of objects at a specific moment in time:

![Screenshot 2022-10-21 at 13.11.07](notes/images/Screenshot%202022-10-21%20at%2013.11.07.png)

## Classes
A class is a **construction plan** for a set of similar object of a system.

Object are **instances** of classes.

- Attributes: structural characteristics of a class.
- Operations: behaviour of a class.

![300](notes/images/Screenshot%202022-10-21%20at%2013.12.30.png)

![Screenshot 2022-10-21 at 13.12.54](notes/images/Screenshot%202022-10-21%20at%2013.12.54.png)

### Attribute Syntax
![Screenshot 2022-10-21 at 13.13.11](notes/images/Screenshot%202022-10-21%20at%2013.13.11.png)

#### Visibility:
   - `+`: public -> everybody.
   - `-`: private -> only the object itself.
   - `#`: protected -> class itself and subclasses.
   - `~`: package -> classes that are in the same package.

- `/`: attribute is derived from other attributes, for example `/age` as it is calculated from the date of birth.

#### Type: 
   - User-defined classes.
   - Data type:
       - Primitive data type
           - Pre-defined: Boolean, Integer, String.
           - User-defined: `<<primitive>>`
           - Composite data type: `<<datatype>>`
       - Enumerations: `<<enumeration>>`

#### Multiplicity:
   - Number of values an attribute may contain.
   - Default value: 1
   - Notation `[min..max]`
       - no upper limit: `[*]` or `[0..*]`

![400](notes/images/Screenshot%202022-10-21%20at%2013.20.52.png)

#### Properties
- Pre-defined properties:
    - `{readOnly}`: value cannot be changed.
    - `{unique}`: no duplicates permitted.
    - `{non-unique}`: duplicates permitted.
    - `{ordered}`: fixed order of the values.
    - `{unordered}`: no fixed order of the values.

- Attribute specification:
    - Set: `{unordered, unique}`
    - Multi-set: `{unordered, non-unique}`
    - Ordered set: `{ordered, unique}`
    - List: `{ordered, non-unique}`

#### Parameters
Similar to attributes.

- Direction of the parameter:
    - `in`: input parameter.
    - `out`: output parameter.
    - `inout`: combined.

### Class Variable and Class Operations
- Instance variable (instance attribute): attributes defined on instance level.
- Class variable (class attribute):
    - Defined only per class, shared by all instances of the class.
    - For example: counters for the number of instances of a class, constants, etc.
- Class operation:
    - Can be used if no instance was created, for example: constructors, counting operations, math functions etc.

![Screenshot 2022-10-21 at 13.27.01](notes/images/Screenshot%202022-10-21%20at%2013.27.01.png)

## Specification of Classes: Different Levels of Detail
![Screenshot 2022-10-21 at 13.27.38](notes/images/Screenshot%202022-10-21%20at%2013.27.38.png)

## Association
Models possible relationships between instances of classes.

![Screenshot 2022-10-21 at 13.28.01](notes/images/Screenshot%202022-10-21%20at%2013.28.01.png)

### Binary Association
Connects two instances of two classes with one another.

![Screenshot 2022-10-21 at 13.28.30](notes/images/Screenshot%202022-10-21%20at%2013.28.30.png)

#### Navigability
Object knows its partner objects and can therefore access their visible attributes and operations (open arrow head).

#### Non-Navigability
Indicated by a class, for example: `A` can access attributes and operations of `B` but `B` cannot access any attributes and operations of `A`.

![200](notes/images/Screenshot%202022-10-21%20at%2013.30.17.png)

![Screenshot 2022-10-21 at 13.30.34](notes/images/Screenshot%202022-10-21%20at%2013.30.34.png)

#### Binary Association as Attribute
![Screenshot 2022-10-21 at 13.31.06](notes/images/Screenshot%202022-10-21%20at%2013.31.06.png)

In Java:
```java
class Professor()

class Student {
    public Professor[] lecturer;
    ...
}
```

#### Multiplicity and role
- Multiplicity: number of objects that may be associated with exactly one objet of the opposite side.

![Screenshot 2022-10-21 at 13.32.02](notes/images/Screenshot%202022-10-21%20at%2013.32.02.png)

- Role: the way in which an object is involved in an association relationship.

![500](notes/images/Screenshot%202022-10-21%20at%2013.32.24.png)

#### Xor Constraint
An object of class `A` is to be associated with an object of class `B` or an object of class `C` **but not with both**.

![Screenshot 2022-10-21 at 13.33.17](notes/images/Screenshot%202022-10-21%20at%2013.33.17.png)

## Unary Association - Example
![Screenshot 2022-10-21 at 13.33.44](notes/images/Screenshot%202022-10-21%20at%2013.33.44.png)

## n-ary Association
More than two partner objects are involved in the relationship.

No navigation directions.

![Screenshot 2022-10-21 at 13.34.24](notes/images/Screenshot%202022-10-21%20at%2013.34.24.png)

![Screenshot 2022-10-21 at 13.34.43](notes/images/Screenshot%202022-10-21%20at%2013.34.43.png)

## Association Class
Assign attributes to the relationship between classes rather than to a class itself.

![Screenshot 2022-10-21 at 13.36.08](notes/images/Screenshot%202022-10-21%20at%2013.36.08.png)

Necessary when modelling `n:m` Associations:

![Screenshot 2022-10-21 at 13.36.37](notes/images/Screenshot%202022-10-21%20at%2013.36.37.png)

With `1:1` or `1:n` possible but not necessary:

![Screenshot 2022-10-21 at 13.36.56](notes/images/Screenshot%202022-10-21%20at%2013.36.56.png)

### Association Class vs Regular Class
![Screenshot 2022-10-21 at 13.37.18](notes/images/Screenshot%202022-10-21%20at%2013.37.18.png)

### Unique/Non-Unique
![Screenshot 2022-10-21 at 13.37.41](notes/images/Screenshot%202022-10-21%20at%2013.37.41.png)

## Aggregation
Special form of association used to express that a class is part of another class.

Properties of the aggregation association:
- **Transitive**: if `B` is part of `A` and `C` is part of `B`, `C` is also part of `A`.
- **Asymmetric**: it is not possible for `A` to be part of `B` and `B` to be part of `A` simultaneously.

Two types: **shared aggregation** and **composition**.

### Shared Aggregation
- Expresses a weak belonging of the parts to a whole, meaning they also exist independently of the whole.
- Multiplicity at the aggregating end may be > 1, meaning one element can be part of multiple other elements simultaneously.
- Spans a **directed acyclic graph**.
- Syntax: hollow diamond at the aggregating end.

Example:
- **Student** is part of **LabClass**
- **Course** is part of **StudyProgram**

![450](notes/images/Screenshot%202022-10-21%20at%2013.41.11.png)

### Composition
- Existence dependency between the composite object and its parts.
- Multiplicity at the aggregating end max of 1, the composite objects form a tree.
- If the composite object is deleted, **its parts are also deleted**.
- Syntax: solid diamond at the aggregating end.

Example:
- **Beamer** is part of **LectureHall** is part of **Building**.

![Screenshot 2022-10-21 at 13.42.53](notes/images/Screenshot%202022-10-21%20at%2013.42.53.png)

## Generalisation
- Characteristics (attributes and operations), associations, and aggregations that are specified for a general class (superclass) are passed on to its subclasses. 
- Every instance of a subclass is simultaneously an indirect instance of the superclass.  
- Subclass inherits all characteristics, associations, and aggregations of the superclass except private ones.  
- Subclass may have further characteristics, associations, and aggregations.  
- Generalisations are transitive.

![450](notes/images/Screenshot%202022-10-21%20at%2013.45.47.png)

### Abstract Class
- Used to highlight common characteristics of their subclasses.  
- Used to ensure that there are no direct instances of the superclass.  
- Only its non-abstract subclasses can be instantiated.  
- Useful in the context of generalisation relationships.  
- Notation: keyword `{abstract}` or class name in italic font.

### Multiple Inheritance
- UML allows multiple inheritance.
- A class may have multiple superclasses.

Example:
![Screenshot 2022-10-21 at 13.46.52](notes/images/Screenshot%202022-10-21%20at%2013.46.52.png)

### With vs Without Generalisation
![Screenshot 2022-10-21 at 13.47.13](notes/images/Screenshot%202022-10-21%20at%2013.47.13.png)

## Creating a Class Diagram
- Not possible to completely extract classes, attributes and associations from a natural language text automatically.  
- Guidelines:
    - **Nouns** often indicate **classes**.
    - **Adjectives** indicate attribute **values**.
    - **Verbs** indicate **operations**.

- Example: The library management system stores users with their unique ID, name and address as well as books with their title, author and ISBN number. 

![Screenshot 2022-10-21 at 13.48.48](notes/images/Screenshot%202022-10-21%20at%2013.48.48.png)

## Notation
| Name                             | Notation                                                | Description                                                                                         |
| -------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Class                            | ![Screenshot 2022-10-21 at 13.51.48](notes/images/Screenshot%202022-10-21%20at%2013.51.48.png) | Description of the structure and behaviour of a set of objects.                                     |
| Abstract Class                   | ![Screenshot 2022-10-21 at 13.54.37](notes/images/Screenshot%202022-10-21%20at%2013.54.37.png) | Class that cannot be instantiated.                                                                  |
| Association                      | ![Screenshot 2022-10-21 at 13.55.00](notes/images/Screenshot%202022-10-21%20at%2013.55.00.png) | Relationship between classes where navigability is unspecified or bidirectional or one directional. |
| n-ary Association                | ![Screenshot 2022-10-21 at 13.55.59](notes/images/Screenshot%202022-10-21%20at%2013.55.59.png) | Relationship between n (here 3) classes.                                                            |
| Association Class                | ![Screenshot 2022-10-21 at 13.56.24](notes/images/Screenshot%202022-10-21%20at%2013.56.24.png) | More detailed description of an association.                                                        |
| `xor` Relationship               | ![Screenshot 2022-10-21 at 13.56.47](notes/images/Screenshot%202022-10-21%20at%2013.56.47.png) | An object of `C` is in a relationship with `A` or with `B` but not both.                            |
| Shared aggregation               | ![Screenshot 2022-10-21 at 13.57.45](notes/images/Screenshot%202022-10-21%20at%2013.57.45.png) | Parts-whole relationship (`A` is part of `B`)                                                       |
| Strong aggregation (composition) | ![Screenshot 2022-10-21 at 13.58.08](notes/images/Screenshot%202022-10-21%20at%2013.58.08.png) | Existence-dependant parts-whole relationship (`A` is part of `B`)                                   |
| Generalisation                   | ![Screenshot 2022-10-21 at 13.58.34](notes/images/Screenshot%202022-10-21%20at%2013.58.34.png) | Inheritance relationship (`A` inherits from `B`)                                                    |
| Object                           | ![Screenshot 2022-10-21 at 13.58.54](notes/images/Screenshot%202022-10-21%20at%2013.58.54.png) | Instance of class.                                                                                  |
| Link                             | ![Screenshot 2022-10-21 at 13.59.15](notes/images/Screenshot%202022-10-21%20at%2013.59.15.png) | Relationship between objects.                                                                                                    |
