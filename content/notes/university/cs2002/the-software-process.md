---
title: "The Software Process"
tags:
  - university/cs2002
programming-languagues:
last-edited:
created: 2022-12-09
---
The software process is a structured set of activities required to develop a software system.

Three main models:
- Waterfall model.
- Prototyping model.
- Extreme programming (XP) model - part of Agile.

More info [here](notes/university/cs2003/user-centred-design.md).

# Waterfall Model
---
![|350](notes/images/Screenshot%202022-12-14%20at%2011.27.13.png)

## Software Specification
---
It is the process of establishing what services are required and the constraints on the system's operation and development.

The requirements engineering process entails:
- Requirements elicitation and analysis.
- Requirements specification.
- Requirements validation.

Using natural language is often problematic, for example:
- Fruit flies.
- President Kennedy.

## Design and Implementation
---
It is the process of converting the system specification into an executable system, including the UML part.

**Software design**: design a software structure that realises the specification.

**Implementation**: translate this structure into an executable program such as Java.

Design and implementation are closely related and its' activities may be inter-leaving. For example, code can be automatically generated from UML.

## Testing
---
It is intended to show that a system conforms to its specification and meets the requirements of the system customer.

System testing involves executing the system with test cases derived from the specification of the real data to be processed by the system.

## Software Evolution
---
![|450](notes/images/Screenshot%202022-12-14%20at%2011.34.36.png)

## Maintenance
---
???

## Waterfall Strengths
---
- Easy to understand and use.
- Provides structure to inexperienced staff.
- Milestones are well understood.
- Sets requirements stability.
- Good for management control (plan, staff, track).

## Waterfall Deficiencies
---
- All requirements must be known up-front.
- Deliverables created for each phase are considered frozen - inhibits flexibility.
- Integration is one "big bang" at the end.
- Little opportunity for customer to preview the system, until it is too late.
- The Software Crisis existed despite the Waterfall model.

# Prototyping Model
---
There are two types:
- Throwaway.
- Evolutionary.

## Throwaway
---
It is a rapid, close-ended prototyping model.

It entails the creation of a model that will be discarded rather than becoming part of the final delivered software.

It is done after preliminary requirements gathering, used to visually show the users what their requirements may look like when implemented.

The focus is on **quickly developing the model**, which is not on good programming practices and can be messy.

### Steps
---
- Write preliminary requirements.
- Design the prototype.
- User uses the prototype, specifies/suggests new requirements.
- Repeat if necessary.
- Use the product.
- Then discard it.

## Evolutionary
---
The developers build a prototype during the requirements phase, which is evaluated by end users.

The users give corrective feedback and the developers then further refine the prototype.

When the user is satisfied, the prototype code is brought up to the standards needed for a final product.

## Best uses of Prototyping
---
It is most beneficial for systems that will have many interactions with end users (use cases).

The greater the interaction between the computer and the user, the greater the benefit of building a quick system for the user to play with.

It is especially good for designing good human-computer interfaces.

### Risk Reduction
---
![|450](notes/images/Screenshot%202022-12-14%20at%2011.44.21.png)

## Software Evolution
---
Software is inherently flexible and can change. As requirements change through changing business circumstances, the software that supports the business must also evolve and change.

# Extreme Programming (XP)
---
![|550](notes/images/Screenshot%202022-12-14%20at%2011.45.58.png)

![|550](notes/images/Screenshot%202022-12-14%20at%2011.46.09.png)