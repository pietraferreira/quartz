---
title:  "Classification - Supervised Learning"
tags:
  - university
module: cs3002
lecturer:
created: 2023-10-13
year: '3'
type: lecture
---
---
# Introduction
- Classification attempts to solve the problem:
    - Given some data.
    - Where each case in the data has been allocated a class.
    - Assign a class to a new unassigned case.

Example:

| Case | Age | Salary | Class |
| ---- | --- | ------ | ----- |
| 1    | 50  | 40     | 1     |
| 2    | 32  | 20     | 0     |
| 3    | 36  | 45     | 0     |
| 4    | 55  | 55     | 1     |
| 5    | 61  | 50     | 0     |
| 6    | 29  | 30     | 0     |
| 7    | 48  | 35     | 0     |
| 8    | 65  | 45     | 1     |
| 9    | 23  | 40     | 0     |
| 10   | 51  | 25     | 1     | 
![[notes/images/Screenshot 2023-10-13 at 15.42.46.png|250]]

New data:

| Case | Age | Salary | Class |
| ---- | --- | ------ | ----- |
| 11   | 60  | 45     | ?     |
| 12   | 40  | 30     | ?     |
| 13   | 47  | 40     | ?     | 

![[notes/images/Screenshot 2023-10-13 at 15.44.09.png|350]]

# Decision Trees
- Very popular.
- **Nodes** represent decisions.
- **Arcs** represent possible answers.
- **Terminal nodes** represent classification.

Example from Iris data:

![[notes/images/Screenshot 2023-10-13 at 15.45.07.png|350]]

## Classifying with a Decision Tree
- Traverse the tree starting at the root node.
- At each decision node follow the appropriate branch according to the case that you are classifying.
- Repeat until you reach a leaf node.
- Classify according to the label at the leaf node.

## Building a Decision Tree
- Using the example data we used before:

![[notes/images/Screenshot 2023-10-13 at 15.46.29.png|400]]

What happens if we add new data?

![[notes/images/Screenshot 2023-10-13 at 15.47.02.png|400]]

Demo [here](https://cs.stanford.edu/~karpathy/svmjs/demo/demoforest.html).

- Often known as **rule induction**.
- Nodes are repeatedly **split**

