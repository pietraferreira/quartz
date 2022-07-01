---
title:  "Bucket Sort"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
created: 2022-06-06
---
# Bucket Sort
---
Generally you can't do better than $O_{n\ log\ n}$ with **binary comparison**.

However, can do better if the structure of the data is known, which allows to sort it into **buckets** in a single operation.

For example:
- Integers (buckets on digits), a.k.a. [_radix_ sort](https://en.wikipedia.org/wiki/Radix_sort).
- Words (buckets on letters).

The [[compiler-optimisation#Performance|performance]] for bucket for on a given number of digit is $O_{_(n)}$ but also $O_(d)$ in the number of digits.

It is [[sorting#Stability|stable]].

## Example
```bash
```

Start by sorting on the least significant digit:
| Bins | Sublist       |
| ---- | ------------- |
| 0    |               |
| 1    |               |
| 2    | 472  432      |
| 3    |               |
| 4    | 254  534  654 |
| 5    |               |
| 6    |               |
| 7    | 477           |
| 8    |               |
| 9    | 459  649  239 | 

Then we go to the second digit, preserving ordering from first sort:
| Bins | Sublist       |
| ---- | ------------- |
| 0    |               |
| 1    |               |
| 2    |               |
| 3    | 432  534  239 |
| 4    | 649           |
| 5    | 654  254  459 |
| 6    |               |
| 7    | 472  477      | 
| 8    |               |
| 9    |               |

And then finally on the third digit, again preserving ordering:
| Bins | Sublist            |
| ---- | ------------------ |
| 0    |                    |
| 1    |                    |
| 2    | 239  254           |
| 3    |                    |
| 4    | 432  459  472  477 |
| 5    | 534                |
| 6    | 649  654           |
| 7    | 472  477           |
| 8    |                    |
| 9    |                    |