---
title:  "Unsupervised Learning"
tags:
  - university
module: cs3002
lecturer: Allan Tucker
created: 2023-10-03
year: '3'
type: lecture
---
---
# Table of Contents

1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Introduction to Unsupervised Learning|Introduction]]
2. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Clustering: Definition|Clustering: Definition]]
3. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Applications of Clustering|Applications of Clustering]]
    1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Social Networks|Social Networks]]
    2. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Customer Segmentation|Customer Segmentation]]
    3. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Gene Networks|Gene Networks]]
4. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Methodologies for Clustering|Methodologies for Clustering]]
    1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#How to do Clustering|How to do Clustering]]
    2. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Pattern Similarity and Distance Metrics|Pattern Similarity and Distance Metrics]]
        1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Euclidean|Euclidean]]
            1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Example|Example]]
        2. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Manhattan|Manhattan]]
    3. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Embeddings|Embeddings]]
5. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#K-Means Clustering|K-Means Clustering]]
    1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Overview|Overview]]
    2. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Pros and Cons|Pros and Cons]]
    3. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Determining the Number of Clusters|Determining the Number of Clusters]]
6. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Hierarchical (Agglomerative) Clustering|Hierarchical Clustering]]
    1. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Overview|Overview]]
    2. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Dendrogram Explanation|Dendrogram Explanation]]
    3. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Algorithm Overview|Algorithm Overview]]
    4. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Re-computing Distances|Re-computing Distances]]
    5. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Pros and Cons|Pros and Cons]]
7. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Limitations of K-Means and Hierarchical Clustering|Limitations]]
8. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Other Clustering Methods|Other Methods]]
9. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Association Rules|Association Rules]]
10. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Glossary|Glossary]]
11. [[notes/university/year3/cs3002/cs3002-unsupervised-learning#Reading|Reading]]

---
# Introduction to Unsupervised Learning

- **Unsupervised learning**: learning without the desired output ('teacher' signals).

Some methods are:
- Dimensionality reduction (e.g. PCA).
- Association Rules/Recommender Systems.
- **Clustering**: one of the widely-used unsupervised learning methods.

---
# Clustering: Definition

Partition dataset into subsets (clusters), so that the data in each subset shares some common trait, often similarity or proximity.

Clusters are collections of similar objects without the need for 'teacher' signals.

A collection of objects which are "similar" between them and are "dissimilar" to the objects belonging to other clusters.

![[notes/images/img1.png|300]]  ![[notes/images/Screenshot 2023-10-03 at 12.24.33.png|400]]

---
# Applications of Clustering
## Social Networks

For purposes like marketing, terror networks, resource allocation in companies/universities.

---
## Customer Segmentation

![[notes/images/Screenshot 2023-10-03 at 12.25.55.png|500]]

---
## Gene Networks

Helps understand gene interactions and identify genes linked to diseases.

---
# Methodologies for Clustering
## How to do Clustering?

![[notes/images/Screenshot 2023-10-03 at 12.27.12.png|400]]

---
## Pattern Similarity and Distance Metrics

- Clusters are formed by similar patterns.
- Commonly adopted similarity metric is **distance**.
- **Euclidean** and **Manhattan** distances are commonly used metrics.

More distance metrics:
- Correlation.
- Minkowski.
- Mahalanobis.

They are often application dependant. The important things are the **shape**, **distance** and **scale**.

---
### Euclidean

The square root of the sum of the squared differences between coordinates.

- Formula: $(d(x,y) = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \ldots + (x_N - y_N)^2})$

---
#### Example

| x   | 5.5 | 2.9 | 4.8 | 6.7 | 0.6 |     |
| --- | --- | --- | --- | --- | --- | --- |
| y   | 0.2 | 1.0 | 4.8 | 3.8 | 9.2 |     |

Therefore, $d(x,y)$:

$= \sqrt{((5.5 - 0.2)^2 + (2.9 - 1.0)^2 + (4.8 - 4.8)^2 + (6.7 - 3.8)^2 (0.6 - 9.2)^2)}$

$= \sqrt{((5.3)^2 + (1.9)^2 + (0.0)^2 + (2.9)^2 + (-8.6)^2)}$

$= \sqrt{(28.09 + 3.61 + 0.0 + 8.41 + 73.96)}$

$= \sqrt(114.07) = 10.68$

---
### Manhattan

The sum of the absolute differences between the coordinates of two points.

- Formula: $(d(x,y) = |x_1 - y_1| + |x_2 - y_2| + \ldots + |x_N - y_N|)$

Therefore, $d(x,y)$:

$(|5.5 - 0.2| + |2.9 - 1.0| + |4.8 - 4.8| + |6.7 - 3.8| + |0.6 - 9.2|)$

$= 5.3 + 1.9 + 0.0 + 2.9 + 8.6$

$= 18.7$

---
## Embeddings

It means to map data onto a new space to capture different characteristics.

![[notes/images/Screenshot 2023-10-03 at 12.44.01.png|300]] ![[notes/images/Screenshot 2023-10-03 at 12.44.21.png|300]]

---
# K-Means Clustering 
## Overview

1. Place K points into the feature space. These points represent initial cluster centroids.
2. Assign each pattern to the closest cluster centroid.
3. When all objects have been assigned, recalculate the positions of the K centroids.
4. Repeat Steps 2 and 3 until the assignments do not change.

Interactive [demo](https://user.ceng.metu.edu.tr/~akifakkus/courses/ceng574/k-means/).

---
## Pros and Cons

Pros:
- May be computationally faster than hierarchical clustering, if K is small.
- May produce tighter clusters than hierarchical clustering, specially if the clusters are globular.

Cons:
- Fixed number of clusters can make it difficult to predict what K should be.
- Different initial partitions can result in different final clusters.
- Potentially empty clusters (not always bad).
- Does not work well with non-globular clusters.

---
## Determining the Number of Clusters (not mandatory)

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

---
# Hierarchical (Agglomerative) Clustering
## Overview

It results in a series of clustering results.

Starts with each object in its cluster and it ends with all objects in the same cluster, with the intermediate clusters being created by a series of merges.

---
## Dendrogram Explanation

The resultant tree is called a **dendrogram**:

![[notes/images/Screenshot 2023-10-03 at 13.03.03.png|300]]

---
## Algorithm Overview

1. Each item is assigned to its own cluster (n clusters of size one).
2. Let the distances between the clusters equal the distances between the objects they contain.
3. Find the closest pair of clusters and merge them into a single cluster (one less cluster).
4. Re-compute the distances between the new cluster and each of the old clusters.
5. Repeat steps 3 and 4 until there is only one cluster left.

---
## Re-computing Distances (Single, Complete, Average Linkage)


![[notes/images/Screenshot 2023-10-03 at 13.04.18.png|400]]

| Link     | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| Single   | Smallest distance between any two pairs from the two clusters (one from each) being compared/measured. |
| Average  | Average distance between pairs.                                                                        |
| Complete | Largest distance between any two pairs from the two clusters (one from each) being compared/measured.  |

Other methods:
- Ward.
- McQuitty.
- Median.
- Centroid.

Can find a demo [here](https://macdobry.shinyapps.io/free-clust/).

---
## Pros and Cons

Pros:
- Can produce an ordering of the objects, might be informative for data display.
- Smaller clusters are generated, might be helpful for discovery.

Cons:
- No provision for a relocation of objects that may have been 'incorrectly' grouped at an early stage.
- Different distance metrics for measuring distances between clusters may generate different results.

---
# Limitations of K-Means and Hierarchical Clustering
## Challenges with Hard Assignment in Clustering

At each iteration, a pattern can be assigned to one cluster only (the assignment is **hard**).

For example, **x** here in the middle of the two cluster centroids will either:
- drag m1 down, or
- drag m2 up.

![[notes/images/Screenshot 2023-10-03 at 14.05.37.png|300]]

---
# Other Clustering Methods
## Fuzzy Clustering

For example: Fuzzy c-Means.

- No sharp boundary.
- Fuzzy clustering is often better suited.
- Fuzzy c-Means is a fuzzification of k-Means and the most well-known.

The cluster membership is now a weight **between 0 or 1** and the distance to a centroid is multiplied by the membership weight.

---
## DBSCAN

- Density based clustering algorithm, density being the number of points within a specified radius (Eps).
- A point is a core point if it has more than a specified number of points (MinPts) within Eps.
- Core point is in the interior of a cluster.

![[notes/images/Screenshot 2023-10-03 at 14.09.24.png|300]] ![[notes/images/Screenshot 2023-10-03 at 14.09.38.png|300]] ![[notes/images/Screenshot 2023-10-03 at 14.09.49.png|300]]

---
# Evaluating Cluster Quality

How do we know if the discovered clusters are any good?

The choice of metric is vital.

## Cohesion and Separation

-  Reduce separation and increase cohesion.

![[notes/images/Screenshot 2023-10-03 at 14.11.13.png|300]]


---
## Supervised

We can use the "true clusters" to test the effectiveness of different clustering algorithms.

### Comparing Clusters

We can use metrics to measure how similar two arrangements are.

---
## Weighted-Kappa

- 0 is random.
- -1 something weird is going on.
- Between 0.8 and 1 is good.


![[notes/images/Screenshot 2023-10-03 at 14.13.16.png|400]]

---
# Association Rules

- Works with **sets** of things.
- Learn structure, find different rules to know what group go well together.
## Overview

- Another form of unsupervised learning.
- Works with "**basket data**".
- Recommender System.

![[notes/images/Screenshot 2023-10-03 at 14.14.30.png|450]]

## Support, Confidence and Lift

![[notes/images/Screenshot 2023-10-03 at 14.14.52.png|400]]

Given a large amount of basket data, generate rules.

---
# Glossary

- **Cluster centroid**: central point within clusters, the average position of all data points assigned to a particular cluster. The heart or core of each cluster.

---
# Reading

- [[notes/university/year3/cs3002/cs3002-principles-of-data-mining-chap9-sec93|Principles of Data Mining Chap 9 Section 9.3]]
- Pang-Ning Tan “Introduction to Data Mining” (Chapter 8): http://www-users.cs.umn.edu/~kumar/dmbook/index.php
- Anil Jain: “Data Clustering: 50 Years Beyond K-Means”, Pattern Recognition Letters
- Tang et al., Kumar, Introduction to Data Mining (Chapter 6): https://www-users.cs.umn.edu/~kumar001/dmbook/index.php