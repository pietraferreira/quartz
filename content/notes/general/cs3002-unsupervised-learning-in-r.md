---
title: Unsupervised Learning in R
tags:
  - university
module: cs3002
lecturer: 
created: 2023-09-13
year: "3"
type: notes
source: https://lgatto.github.io/IntroMachineLearningWithR
---
---
# Introduction
---
In **unsupervised learning**, no labels are provided.
    - Algorithm detects structure in unlabelled input data.

There are two types:
    - **Clustering**: goal is to find homogeneous subgroups within the data (based on the distance between observations).
    - **Dimensionality reduction**: goal is to identify pattens in the features of the data. Often used to visualise data as well as pre-process it.

# K-means clustering
---
Partitions $n$ observations into a fixed number of $k$ clusters. It finds **homogeneous** clusters.

```r
stats::kmeans(x, centers=3, nstart=10)
```

where
- `x` is a numeric data matrix.
- `centers` is a pre-defined number of clusters.
- k-means has a random component and can be repeated `nstart` times to improve the model.