- K-nearest neighbour is based on the idea that nearby data points influence classification.
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