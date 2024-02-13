---
title:  "Presentation Script Fyp"
tags:
  - university
module: cs3072
year: '3'
created: 2024-02-13
---
---
Hello, my name is Pietra and today I will be presenting my final year project: Visualising Ownership and Borrowing in Rust.

---

So why Rust? Rust is very powerful, with a performance comparable to C and C++. Its memory safety and efficiency sets it apart from other programming languages, and it is crucial for its promise of safety without garbage collector. All of this is due to ownership. However as you can see, developers state that ownership is the second trickiest topic within Rust. My project aims to help them.

---

Ownership is Rust is based on three simple rules:
1. Each value has a single owner.
2. When the owner goes out of scope, it gets dropped meaning its resources are returned.
3. Ownership can be transferred through move semantics, which is what the image demonstrates.

---

But what about when you need to use a value without taking ownership? That where borrowing comes into play, allowing both mutable and immutable references to a value without taking over its ownership. This provides flexibility while maintaining safety. You can see an example of a mutable and immutable borrow here.

---





