---
title:  "Unsupervised Learning - K-Means Clustering"
tags:
  - university
module: cs3002
lecturer: Allan Tucker
created: 2024-04-04
year: '3'
type: lecture
---
# Overview

1. Place K points into the feature space. These points represent initial cluster centroids.
2. Assign each pattern to the closest cluster centroid.
3. When all objects have been assigned, recalculate the positions of the K centroids.
4. Repeat Steps 2 and 3 until the assignments do not change.

Interactive [demo](https://user.ceng.metu.edu.tr/~akifakkus/courses/ceng574/k-means/).

---
# Pros and Cons

Pros:
- May be computationally faster than hierarchical clustering, if K is small.
- May produce tighter clusters than hierarchical clustering, specially if the clusters are globular.

Cons:
- Fixed number of clusters can make it difficult to predict what K should be.
- Different initial partitions can result in different final clusters.
- Potentially empty clusters (not always bad).
- Does not work well with non-globular clusters.

---
# Determining the Number of Clusters (not mandatory)

---
1. How to determine k, the number of clusters?

We can use the **elbow method**, **silhouette analysis**, or **domain knowledge** to determine the optimal number of clusters.

- **Elbow Method:**
   - The elbow method involves running K-Means clustering with a range of values for k (the number of clusters), typically from 1 to some maximum value.
   - For each k, the sum of squared distances from each data point to its assigned cluster centroid (inertia) is calculated.
   - The elbow method looks for an "elbow point" in the plot of inertia against k. This point is where the rate of decrease in inertia sharply changes, indicating an optimal number of clusters.
   - The chosen k typically corresponds to the point where adding more clusters does not significantly reduce inertia.

- **Silhouette Analysis:**
   - Silhouette analysis assesses the quality of clusters by measuring how similar each data point is to its own cluster (cohesion) compared to other nearby clusters (separation).
   - For each data point, a silhouette score is computed, which ranges from -1 to 1. A higher silhouette score suggests better-defined and well-separated clusters.
   - Silhouette analysis is performed for different values of k, and the k with the highest average silhouette score is considered the optimal number of clusters.

- **Domain Knowledge:**
   - Domain knowledge involves leveraging your understanding of the specific problem or dataset to determine the number of clusters.
   - Sometimes, the nature of the data or the goals of the analysis may provide clear guidance on the expected number of clusters.
   - Domain experts or prior research can offer valuable insights into the appropriate clustering structure.
   - While the elbow method and silhouette analysis are data-driven approaches, domain knowledge relies on human expertise and context.

---
2. Any alternative ways of choosing the initial cluster centroids?

Alternative methods include: random initialisation, K-Means++ and custom initialisation based on domain knowledge.

K-Means++ is an improved initialisation technique for K-Means, starting with better cluster centroids.

---
3. Does the algorithm converge to the same results with different selections of initial cluster centroids? If not, what should we do in practice?

No, it can converge to different results with different initial centroids. To address this, it's normal to run the algorithm multiple times with different initialisations and choose the best result based on a suitable criterion, for example minimising the sum of squared distance within clusters.