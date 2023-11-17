---
title:  "Rust MIR"
tags:
  - university
module: cs3072
lecturer:
created: 2023-11-13
year: '3'
type: research
---
---
Start here: [[notes/university/intro-rust-mir|intro-rust-mir]].

![[notes/images/Screenshot 2023-11-13 at 09.25.25.png]]

**MIR**: mid-level intermediate representation, it comes between the HIR and LLVM.

MIR enables much more flexible borrowing, more information [here](https://github.com/rust-lang/rfcs/issues/811).

MIR reduces Rust down to a simple core, removing almost all the syntax such as `for` loops, `match` expressions and method calls. Instead, they are translated into primitives.

### Example
---
```rust
for elem in vec {
    process(elem);
}
```

This iterates over all elements in a vector and processes them one by one.

A `for` loop in Rust, converts a value into an iterator and repeatedly calls `next` on that iterator. A `while let` loop iterates until some condition is met. We can rewrite the `for` loop into a `while let` loop:

```rust
let mut iterator = vec.into_iter();
while let Some(elem) = iterator.next() {
    process(elem);
}
```

We still have multiple kinds of loops, now we can rewrite it into a simple `loop` combined with a `match`:

```rust
let mut iterator = vec.into_iter();
loop {
    match iterator.next() {
        Some(elem) => process(elem),
        None => break,
    }
}
```

We already eliminate two constructs (`for` and `while` loops), but we can go further. More information [here](https://blog.rust-lang.org/2016/04/19/MIR.html):

```rust
// Rather than `vec.into_iter()`, we are calling
// the function `IntoIterator::into_iter`. This is
// exactly equivalent, just more explicit.
let mut iterator = IntoIterator::into_iter(vec);
loop {
    // Similarly, `iterator.next()` can be rewritten
    // to make clear which trait the `next` method
    // comes from. We see here that the `.` notation
    // was also adding an implicit mutable reference,
    // which is now made explicit.
    match Iterator::next(&mut iterator) {
        Some(elem) => process(elem),
        None => break,
    }
}
```

Now to reduce even more we can use `goto`:

```rust
    let mut iterator = IntoIterator::into_iter(vec);

loop:
    match Iterator::next(&mut iterator) {
        Some(elem) => { process(elem); goto loop; }
        None => { goto break; }
    }

break:
    ...
```

> **MIR construction is type-driven.** We saw that all method calls like `iterator.next()` can be desugared into fully qualified function calls like `Iterator::next(&mut iterator)`. However, doing this rewrite is only possible with full type information, since we must (for example) know the type of `iterator` to determine which trait the `next` method comes from. In general, constructing MIR is only possible after type-checking is done.

> **MIR makes all types explicit.** Since we are constructing MIR after the main type-checking is done, MIR can include full type information. This is useful for analyses like the borrow checker, which require the types of local variables and so forth to operate, but also means we can run the type-checker periodically as a kind of sanity check to ensure that the MIR is well-formed.

#### Control-flow graphs
---
![[notes/images/Screenshot 2023-11-13 at 09.33.28.png]]


