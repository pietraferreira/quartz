---
title:  "Rust - Borrowing Mechanism"
tags:
  - university
module: cs3072
lecturer:
created: 2023-11-07
year: '3'
type: notes
---
---
Ownership and borrowing are fundamental concepts in Rust that help ensure memory safety and prevent common programming errors like null pointer dereferences and data races. These concepts are essential for understanding how Rust manages memory efficiently and safely.

# Ownership Rules
In Rust, each value has an owner, and there can only be one owner at a time. When the owner goes out of scope, Rust will automatically clean up the associated memory.

# Stack and Heap
In Rust, data is stored either on the stack or the heap. The stack is for data with known, fixed size, while the heap is for data with an unknown size at compiler time or data that might change in size. The stack operates in a last-in, first-out (LIFO) manner, like a stack of plates, while the heap is less organised.

# String Type
Rust provides a `String` type that allows for mutable, growable text data. Unlike string literals, `String` is stored on the heap. Strings can be mutated and are more flexible than string literals:

```rust
let mut s = String::from("hello");
s.push_str(" world :)");
println!("{}", s);
```

# Move and Ownership
When you assign one variable to another in Rust, ownership is transferred. If a type implements the `Copy` trait and is stored on the stack, a shallow copy is made. Otherwise, ownership is moved.

```rust
let s1 = String::from("hello");
let s2 = s1; // s1 is moved to s2
```

# Clone
If you want to create a deep copy of data on the heap, you can use the `clone` method. This creates a new allocation in the heap, allowing both variables to be valid.

```rust
let s1 = String::from("hello");
let s2 = s1.clone(); // creates a deep copy
```

# Stack-Only Data: Copy Trait
Some types, like integers, implement the `Copy` trait, allowing variables to be copied instead of moved. This is because they have a known, fixed size:

```rust
let x = 5;
let y = x; // x is copied, not moved
```

# Functions and Ownership
When passing variables to functions, ownership is transferred unless the type implements the `Copy` trait. Once a variable is moved into a function, it goes out of scope and is automatically cleaned up when the function exits.

```rust
fn takes_ownership(some_string: String) {
    // some_string takes ownership
}

fn makes_copy(some_integer: i32) {
    // some_integer is copied
}
```

# Returning Ownership
Functions can return ownership of values to the calling code. This allows for reusing data without moving it. If a value is moved to a function and returned, it transfers ownership back.

```rust
fn gives_ownership() -> String {
    // ownership is transferred to the calling code
}

fn takes_and_gives_back(a_string: String) -> String {
    // a_string is returned, transferring ownership
}
```

# Borrowing
Borrowing allows functions to access data without taking ownership. It uses references, denoted by `&`. There are two types of borrowing:
- Mutable References: `&mut`, allowing the function to modify data.
- Immutable References: `&`, ensuring data remains read-only.

```rust
fn calculate_length(s: &String) -> usize {
    // s is an immutable reference
}

fn change(s: &mut String) {
    // s is a mutable reference
}
```