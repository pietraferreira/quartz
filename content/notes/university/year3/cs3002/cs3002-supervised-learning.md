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
- Classification attempts to solve the problem of assigning classes to data.
- It involves allocating a class to new, unassigned cases based on existing data.

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
- **Nodes** represent decisions, **arcs** represent possible answers, and **terminal nodes** represent classification.

Example from Iris data:

![[notes/images/Screenshot 2023-10-13 at 15.45.07.png|350]]

## Classifying with a Decision Tree
- Traverse the tree starting at the root node.
- At each decision node follow the appropriate branch according to the case that you are classifying.
- Repeat until you reach a leaf node.
- Classify according to the label at the leaf node.

## Building a Decision Tree
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

### Iterative Dichotomiser 3 Algorithm
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

#### Entropy
The entropy function is used to quantify the uncertainty or randomness associated with the distribution of different classes within a dataset. In the context of ID3 and decision tree algorithms, it is primarily used to determine the best attribute to split the dataset into subsets during the tree-building process. The attribute with the lowest entropy, after the split, is typically chosen as the root of the tree or the next node.

Here's how the entropy function is defined and used:

1. Entropy Formula:
   The entropy (H) of a dataset with respect to a specific class (e.g., a binary classification task with classes A and B) is calculated using the following formula:

   $H(S) = -p(A) * log2(p(A)) - p(B) * log2(p(B))$

   - H(S) is the entropy of the dataset S.
   - p(A) is the proportion of data points in class A.
   - p(B) is the proportion of data points in class B.

2. Entropy Interpretation:
   - If all the data points in the dataset belong to a single class (e.g., all A or all B), the entropy is 0 because there is no uncertainty (perfectly pure).
   - If the data points are equally divided between the classes, the entropy is at its maximum, which is 1 (for a binary classification problem). In this case, there is a high degree of uncertainty or disorder.

3. Information Gain:
   The information gain measures the reduction in entropy that results from partitioning the dataset based on a particular attribute. It is calculated as follows:

   Information Gain $(IG) = H(S) - ∑(Sv/S) * H(Sv)$

   - IG is the information gain.
   - H(S) is the entropy of the original dataset.
   - Sv represents the subsets obtained by splitting the dataset using the attribute.
   - H(Sv) is the entropy of each subset Sv.
   - S is the total number of data points in the dataset.

4. Attribute Selection:
   In the ID3 algorithm, attributes are evaluated based on their information gain. The attribute that maximises the information gain is chosen for the split. This attribute is expected to reduce the uncertainty or entropy the most when creating subsets.

The ID3 algorithm iteratively constructs a decision tree by selecting attributes at each node to minimise the entropy or maximise the information gain. It continues this process until all the data points are classified into their respective classes.

By using the entropy function and information gain, the ID3 algorithm efficiently builds a decision tree that can be used for classification tasks, with the goal of making accurate predictions based on the features of the data.

### Pruning Decision Trees
- Simpler models are preferred.
- Known as "Occam's razor".
- Prevents overfitting.
- Tree pruning can be performed:
    - Goes through each decision node.
    - Considers converting it into a leaf node.
    - If this does not reduce classification accuracy, then the pruning is carried out.

# K-Nearest Neighbour
- K-nearest neighbor is based on the idea that nearby data points influence classification.
- Case based reasoning.
- Based on the idea that items that are located "nearby" in the data space will influence how unknown data is classified.
- Been around since 1910.
- Requires:
    - Distance Metric.
        - Euclidian.
        - Correlation.
        - Mahalanobis.
    - $k$ parameter (no. of neighbours).
    - Weighting Function.
    - How to combine info from neighbours.

- Example:
    - Metric: Euclidian.
    - No weighting function.
    - Maximum vote of neighbours.

![[notes/images/Screenshot 2023-10-13 at 16.02.14.png|400]]

Demo can be found [here](http://vision.stanford.edu/teaching/cs231n-demos/knn/)

# Testing Performance
- Aim is to classify new unseen data.
- Often look at a simple error rate to assess our classifiers.
- error = number of errors / number of cases
- *Empirical* error rate is not the same as *true* error rate.
    - Empirical is based on a sample.
    - True is based on infinite cases.
- Is it possible to estimate the true error rate?

## Training and Test Sets
- Obviously a good idea to split data into a training set and a test set.
- Known as the **holdout** method.
- Use training set to learn model.
- Use test set to score the accuracy.
- Ideally the two sets are independent (generated separately).

## Resampling
- What if the sample of data is small or biased?
- *Resampling* methods can be used.
    - Randomly select training and test sets.
    - Repeat for a fixed number of iterations.
- Methods include:
    - Cross-validation.
    - Bootstrapping.

### Cross-validation
- K-fold cross validation:
    - Randomly split the data up into $k$ subsets of equal size.
    - Remove one of the subsets and train classifier on remaining subsets.
    - Test on the removed subset.
    - Repeat for all subsets.
- Cross-validation is considered an unbiased estimator of true error.

![[notes/images/Screenshot 2023-10-13 at 16.07.32.png|400]]

### Bootstrapping
- For the bootstrap $n$ training data items are sampled **with replacement** from $n$ cases.
- Cases that are not found in the training set are used for the test set.
- Generally produces worse rates than the true error rate (worse case scenario).

![[notes/images/Screenshot 2023-10-13 at 16.09.24.png|400]]

# Resampling and Random Forests
![[notes/images/Screenshot 2023-10-13 at 16.09.52.png|400]]

# Confusion Matrix
- If errors are of differing importance:
    - E.g. failing to diagnose a disease can be more serious than diagnosing one that is not present.
- Then use a confusion matrix:
    - Class versus Prediction.
    - False positives and negatives.

## Sensitivity and Specificity
Common measures make use of false positives and negatives:

![[notes/images/Screenshot 2023-10-13 at 16.11.37.png|300]]

![[notes/images/Screenshot 2023-10-13 at 16.11.59.png|500]]

- For example, a classifier can have high *sensitivity* if it successfully classifies people who have developed cancer but a low *specificity* if it also classifies non-sufferers with cancer.

- But what about data where there are only a few positive cases: imbalanced?

Examples:

![[notes/images/Screenshot 2023-10-13 at 16.15.21.png|250]]  ![[notes/images/Screenshot 2023-10-13 at 16.15.36.png|250]]

|                   | Class Pos. (C+) | Class Neg. (C-) |
| ----------------- | --------------- | --------------- |
| Predict Pos. (P+) | 15              | 1               |
| Predict Neg. (P-) | 10              | 24              | 

- True Positives (TP) = 15
- False Positives (FP) = 10
- True Negatives (TN) = 24
- False Negatives (FN) = 1

Precision (P) is defined as TP / (TP + FP), and Recall (R) is defined as TP / (TP + FN). The F1-score is the harmonic mean of precision and recall, given by:

$F1 = 2 * (P * R) / (P + R)$

In this case, for Confusion Matrix 1:

- Precision (P) = 15 / (15 + 10) = 15 / 25 = 0.6
- Recall (R) = 15 / (15 + 1) = 15 / 16 ≈ 0.9375

$F1 = 2 * (0.6 * 0.9375) / (0.6 + 0.9375) ≈ 0.7308$

|                   | Class Pos. (C+) | Class Neg. (C-) |
| ----------------- | --------------- | --------------- |
| Predict Pos. (P+) | 24              | 10              | 
| Predict Neg. (P-) | 1               | 15              |

- True Positives (TP) = 24
- False Positives (FP) = 1
- True Negatives (TN) = 15
- False Negatives (FN) = 10

For Confusion Matrix 2:

- Precision (P) = 24 / (24 + 1) ≈ 0.960
- Recall (R) = 24 / (24 + 10) = 24 / 34 ≈ 0.7059

$F1 = 2 * (0.960 * 0.7059) / (0.960 + 0.7059) ≈ 0.8149$

---

- Which would be most suitable for detecting patients with high-risk of cancer for follow up tests?

Comparing the F1-scores:

- F1-score for Confusion Matrix 1 ≈ 0.7308
- F1-score for Confusion Matrix 2 ≈ 0.8149

Based on the F1-scores, Confusion Matrix 2 is more suitable for detecting patients with a high risk of cancer for follow-up tests. It has a higher F1-score, indicating a better balance between precision and recall. This means that Matrix 2 has a higher likelihood of correctly identifying high-risk patients while keeping false positives relatively low.

---

- Which would be best for selecting patients for high-risk surgery?

When selecting patients for high-risk surgery, you typically want to prioritize patient safety and ensure that those chosen for the surgery have a low risk of complications. In this case, you should consider high precision as a priority because you want to minimize the number of false positives (i.e., patients who are not suitable for high-risk surgery but are selected).

Precision is defined as the ratio of true positives to the total number of predicted positives, and it measures the accuracy of positive predictions. In the context of selecting patients for high-risk surgery, high precision means that a high proportion of the selected patients are indeed suitable for the surgery, reducing the risk of operating on patients who may not benefit from it.

Let's calculate the precision for both confusion matrices:

**Confusion Matrix 1:**

- True Positives (TP) = 15
- False Positives (FP) = 10

Precision (P) is defined as TP / (TP + FP), and for Confusion Matrix 1:

$P = 15 / (15 + 10) = 15 / 25 = 0.6$

**Confusion Matrix 2:**

- True Positives (TP) = 24
- False Positives (FP) = 1

For Confusion Matrix 2:

$P = 24 / (24 + 1) ≈ 0.960$

Comparing the precisions:

- Precision for Confusion Matrix 1 = 0.6
- Precision for Confusion Matrix 2 ≈ 0.960

Based on the precision values, Confusion Matrix 2 is more suitable for selecting patients for high-risk surgery. It has a significantly higher precision, meaning that a higher proportion of selected patients are likely suitable for the surgery, reducing the chances of unnecessary high-risk procedures on unsuitable candidates.

---

- Which is the best?

In general, the choice between the two confusion matrices depends on your specific objectives and priorities. There isn't a one-size-fits-all answer as to which is "best" because it depends on the trade-offs between precision and recall, and your priorities may vary based on the application.

- **Confusion Matrix 1** (lower precision, higher recall) is more suitable if you want to cast a wider net and prioritise capturing as many true positives as possible, even if it means accepting a higher risk of false positives. This approach is more lenient in selecting patients, which can be beneficial if you want to ensure that you don't miss any patients who may genuinely benefit from high-risk surgery.

- **Confusion Matrix 2** (higher precision, lower recall) is more suitable if you prioritise patient safety and want to minimise the chances of conducting high-risk surgery on patients who are not suitable. It provides a higher degree of certainty that selected patients are indeed appropriate candidates for high-risk surgery, even if it means potentially missing some who are suitable (lower recall).

In many real-world medical applications, patient safety and minimising unnecessary procedures are of paramount importance. Therefore, **Confusion Matrix 2** (higher precision) is often preferred, as it minimises the risk of false positives and the associated risks and costs. However, the specific context, risks, and objectives of the high-risk surgery scenario may influence the choice between these two matrices.
## Precision and Recall
Good for imbalanced data:

![[notes/images/Screenshot 2023-10-13 at 16.13.37.png|500]]

### ROC Curves vs PR Curves
- Receiver Operating Characteristic curve:
    - Sensitivity / Specificity tradeoff.

![[notes/images/Screenshot 2023-10-13 at 16.14.25.png]]

- Precision Recall curve:
    - Precision / Recall tradeoff.