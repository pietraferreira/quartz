---
title:  "Principles of Data Mining Chap 9 Sec 9.3"
tags:
  - university
module: cs3002
lecturer:

created: 2024-03-11
year: '3'
type:
---
---
## Key Points

- **Objective of Cluster Analysis:** Partitioning a dataset into groups where points within each group are similar to each other and distinct from points in other groups.
- **Two Main Objectives:**
  - **Segmentation or Dissection:** Partitioning data for practical convenience, such as market segmentation.
  - **Identification of Natural Subclasses:** Discovering inherent groupings within data to reveal underlying heterogeneity, without aiming for practical convenience.
- **Technical Goal:** To determine if data can be divided into distinct groups with intra-group similarity and inter-group dissimilarity.

---
## Summary

Cluster analysis is a fundamental data mining task that aims at organizing data into meaningful groups or clusters. This task is divided into two objectives: segmentation, which focuses on dividing data for practical purposes like market segmentation, and the identification of natural subclasses, which seeks to uncover inherent groupings in the data based on their characteristics. The essence of cluster analysis lies in assessing how data points within a group are similar to each other and how they differ from points in other groups, primarily relying on the notion of distance between data points.

---
## Applications

- Market segmentation based on consumer behaviour for targeted promotions.
- Analysis of retail chain performance by comparing outlets based on various operational and demographic factors.
- Identification of disease subtypes in medicine and psychiatry through clustering.
- Classification of species in biology and ecological studies based on cluster analysis.

---
## Challenges and Considerations

- **Distance Measurement:** Central to cluster analysis, with various metrics available to define similarity or dissimilarity between data points.
- **Method Selection:** Critical to align the clustering method with the specific objectives of the analysis, acknowledging that different algorithms may be biased towards detecting certain types of cluster structures.
- **Validation of Results:** Difficult to ascertain due to the lack of a direct notion of generalisation to a test data set as in predictive modelling. The validity of clustering is often subjective and depends on the meaningful insights derived from the analysis.

---
## Insights

- Cluster analysis spans a vast and continuously evolving literature, with new methods developed often without full awareness of existing techniques.
- The effectiveness of cluster analysis is largely determined by the match between the method chosen and the specific analytical objectives.
- While predefined notions of what constitutes a cluster guide the selection of analysis tools, remaining open to unexpected findings is crucial for discovering novel insights.

---
## Conclusion
Cluster analysis is a versatile and widely applied technique in data mining that serves both practical and exploratory objectives. Despite its broad applicability, it presents unique challenges, particularly in method selection and result validation. Successfully leveraging cluster analysis requires a careful balance between adhering to analytical objectives and remaining open to novel discoveries that may arise from the data.