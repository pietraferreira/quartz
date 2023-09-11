---
title: "Hash Tables"
tags:
  - cs
  - work/engineer-training
programming-languages:
created: 2022-06-05
---
# Hash Tables
---
A hash table is a data structure which offers a fast implementation of the associative array (abstract data structure, also called a map, symbol table or dictionary) [](notes/general/hash-tables.md#API%7CAPI). It maps a **Key** to a **Value**.

Important to note that key and value could be **any type** of data structure.

A hash table consists of an array of 'buckets', each of which stores a key-value pair. In order to locate the bucket where the key-value pair should be stored, the key is passed through a hashing function. This function returns an integer which is used as the pair's index in the array of buckets. When we want to retrieve a key-value pair, we supply the key to the same hashing function, receive its index, and use the index to find it in the array.

Array indexing has algorithmic [complexity](notes/university/year2/cs2004/big-o-notation.md) `O(1)`, making hash tables fast at storing and retrieving data.

- Hash tables are [vector](notes/general/vectors-arrays.md) with *n* entries.

Hash functions:
- H(**k**) gives a key, **k**, yields a value in the range [0,n] (it is important to have an even distribution).
- Store key, **k**, and value, **v**, at index H(**k**) in the [vector](notes/general/vectors-arrays.md).
    - May end up with multiple keys with the same H(**k**).
        - Build up a double linked list of entries (_open_ hash table).
        - Use next available free slot (_closed_ hash table).

## Efficiency
Hash function must have a good distribution and must be **large enough**. _Closed_ tables may run out of space, _open_ tables may get inefficiently large lists.

- Algorithms exist for the [perfect hash function](https://en.wikipedia.org/wiki/Perfect_hash_function).

A well design insertion and lookup is $O(1)$.

## API
Associative arrays are a collection of unordered key-value pairs. Duplicate keys are not permitted. The following operations are supported:

- `search(a, k)`: return the value `v` associated with key `k` from the associative array `a`, or `NULL` if the key does not exist.
- `insert(a, k, v)`: store the pair `k:v` in the associative array `a`.
- `delete(a, k)`: delete the `k:v` pair associated with `k`, or do nothing if `k` does not exist.

## Using Hash Tables
The **hash function** return the **hash value**, which maps the key to an index in the table.

**Collision**: two things with different hash codes could be mapped to the same index.

## Applications
- Address books
- Linking file name and path (local system)
- Password verification