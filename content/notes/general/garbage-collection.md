---
title: "Garbage Collection"
tags:
  - cs-concept
  - engineer-training
programming-languagues:
  - c
created: 2022-06-06
---
# Garbage Collection
---
How do you reuse memory in a program?

Explicit allocation and free: `malloc`/`free` (C), `new`/`delete` (C++).

It traces garbage collection and does reference counting.

**Reach-ability**: reference directly or indirectly by one or more variables.
    - Global variables.
    - Stack variables.

## Syntactic and Semantic Garbage
```c
class Foo;
class Bar;

main ()
{
  Foo *x = new Foo ();
  Bar *y = new Bar ();
  x = new Foo ();
  // The old Foo object assigned to x can never be accessed
  // x is syntactic garbage
  if (x.checkit ())
    x.doit (y);
  else
    x.dontdoit ();
  // In the above, whether y is garbage depends on the result
  // of x.checkit (). y could be semantic garbage

  exit (EXIT_SUCCESS);
}
```

## Tracing
### Mark and Sweep
Naive mark-and-sweep. Start with *root* set:

![mark-and-sweep-1](notes/images/mark-and-sweep-1.png)

Now sweep up anything not marked:

![mark-and-sweep-2](notes/images/mark-and-sweep-2.png)

### Tri-Colour Marking
Tree sets:
- White set (**condemned** set): candidates for memory recycling.
- Black set: object shown to have no reference to the white set and reachable from the root set.
- Grey set: object reachable from the root set, but not yet scanned for reference to white objects.

Tri-colour **invariant**: no black objects reference white objects.

Can be performed "on-the-fly".

Starting state:
- Black set is empty.
- Grey set has objects directly referenced from the root set.
- White set has all other objects.

#### Algorithm
1. Pick an object from the grey set and move it to the black set.
2. Move each white object it references to the grey set.
3. Repeat previous two steps until the grey set is empty.
4. All white objects can now be garbage collected.

## Moving vs Non-Moving
When you free space, should you compact all the free space?

### Advantages
- Clearing mark is trivial.
- New objects can be allocated quickly.
- Can move objects close to the objects they refer to, which is good for caches.

### Disadvantages
- More work when garbage collecting.
- Pointer arithmetic is not preserved.

## Reference Count
### Advantages
- Objects reclaimed as soon as they can no longer be referenced.
- Simple to implement.
- Can be useful input to other parts of the system.

### Disadvantages
- Frequent updates are inefficient.
- Reference cycles are a problem.
- Cannot optimise for caches.
