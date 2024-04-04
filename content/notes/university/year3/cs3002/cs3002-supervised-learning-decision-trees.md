- Very popular.
- **Nodes** represent decisions, **arcs** represent possible answers, and **terminal nodes** represent classification.

Example from Iris data:

![[notes/images/Screenshot 2023-10-13 at 15.45.07.png|350]]

# Classifying with a Decision Tree

- Traverse the tree starting at the root node.
- At each decision node follow the appropriate branch according to the case that you are classifying.
- Repeat until you reach a leaf node.
- Classify according to the label at the leaf node.

# Building a Decision Tree

Building a decision tree involves repeatedly splitting nodes until all elements belong to one class.

- Using the example data we used before:

![[notes/images/Screenshot 2023-10-13 at 15.46.29.png|400]]

What happens if we add new data?

![[notes/images/Screenshot 2023-10-13 at 15.47.02.png|400]]

Demo [here](https://cs.stanford.edu/~karpathy/svmjs/demo/demoforest.html).

- Often known as **rule induction**.
- Nodes are repeatedly **split** until all elements represented belong to one class.
- Nodes then become terminal nodes.
- Deciding which nodes to split next as well as the evaluation function used to split it depends on the algorithm.

## Iterative Dichotomiser 3 Algorithm

- `ID3(examples, target_classes)`:

```
Create root node, root
If all examples are pos. then return single node with label +
If all examples are neg. then return single node with label -
Otherwise
    a = attribute that best classifies examples
    Set the decision attribute for root to a
    For all values of a, v_i
        add a new node corresponding to a = v_i
        Set examples_v_i = all cases in examples where a = v_i
        If examples_v_i is empty Then add a leaf node labelled with most
        common value of target in examples
        Else Call ID3(examples_v_i, target_classes)
    End For
End
Return root
```

- How do we decide which attribute best classifies the examples?
    - We can use the **entropy** function: $-\sum_{j} p_j logp_j$
        - Where: $j$ is a class, $p_j$ is the proportion of cases that take on the class $j$.
    - ID3 uses **information gain** which is the expected reduction in entropy.

# [[notes/university/year3/cs3002/cs3002-supervised-learning-entropy]]

# Pruning Decision Trees

- Simpler models are preferred.
- Known as "Occam's razor".
- Prevents overfitting.
- Tree pruning can be performed:
    - Goes through each decision node.
    - Considers converting it into a leaf node.
    - If this does not reduce classification accuracy, then the pruning is carried out.
