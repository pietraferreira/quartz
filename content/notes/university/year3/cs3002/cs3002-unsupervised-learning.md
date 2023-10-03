---
title:  "Unsupervised Learning"
tags:
  - university
module: ai
lecturer: Allan Tucker
created: 2023-10-03
year: '3'
type: lecture
---
---
There are two classes of learning:
- **Unsupervised learning**: learning without the desired output ('teacher' signals).
- **Supervised learning**: learning with the desired output.
- **Reinforcement learning**: involves reward/punishment signals.

# Unsupervised Learning
---
Learning without the desired output ('teacher' signals).

Some methods are:
- Dimensionality reduction (e.g. PCA).
- Association Rules/Recommender Systems.
- **Clustering**: one of the widely-used unsupervised learning methods.

## Clustering
---
Partition dataset into subsets (clusters), so that the data in each subset shares some common trait, often similarity or proximity.

Clusters are collections of similar objects without the need for 'teacher' signals.

A collection of objects which are "similar" between them and are "dissimilar" to the objects belonging to other clusters.

![](notes/university/year3/cs3002/content/assets/Screenshot%202023-10-03%20at%2012.24.17.png)

![](notes/university/year3/cs3002/content/assets/Screenshot%202023-10-03%20at%2012.24.33.png)

### Uses of Clustering
---
#### Social Networks
---
For purposes like marketing, terror networks, resource allocation in companies/universities.

#### Customer Segmentation
---
![](notes/university/year3/cs3002/content/assets/Screenshot%202023-10-03%20at%2012.25.55.png)

#### Gene Networks
---
Helps understand gene interactions and identify genes linked to diseases.

### How to do Clustering?
---
![](notes/university/year3/cs3002/content/assets/Screenshot%202023-10-03%20at%2012.27.12.png)

### Pattern Similarity and Distance Metrics
---
- Clusters are formed by similar patterns.
- Commonly adopted similarity metric is **distance**.
- **Euclidean** and **Manhattan** distances are commonly used metrics.

- Euclidean: $(d(x,y) = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \ldots + (x_N - y_N)^2})$
- Manhattan: $(d(x,y) = |x_1 - y_1| + |x_2 - y_2| + \ldots + |x_N - y_N|)$

# Supervised Learning
--- 
Learning with the desired output.

Some methods are:
- Classification.
- Regression.