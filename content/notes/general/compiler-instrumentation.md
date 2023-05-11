---
title:  "Compiler Instrumentation"
tags:
  - cs-concept/compilers
programming-languagues:
created: 2022-06-05
---
# Compiler Instrumentation
---
As the [compiler](notes/private/work/compilers.md) transforms the source code, it can also 'insert' additional code into a program. These transformations are called [compiler](notes/private/work/compilers.md) instrumentation. There are many uses of [compiler](notes/private/work/compilers.md) instrumentation, one of the common purposes is to collect the 'runtime profile' of a program. 

To collect the runtime profile, a [compiler](notes/private/work/compilers.md) would insert 'counters' at certain parts of the program and those counters would increment every time the program execution reaches the site of instrumentation. 

After the program is finished, the counters can be used to understand the performance profile. The hottest parts of the program are most interesting to performance engineers.

## Using Compiler Instrumentation
Compilers can insert ‘counters’ at interesting program points to collect runtime profiles. The code is instrumented by passing `-fprofile-generate` to the compiler.

```bash
$ gcc -O2 -fprofile-generate=/path/to/outputfile test.c -o a.out
```

Because of instrumentation, the application itself will then log events/counters that can be used by the compiler during the next compilation. After the program exits, it will create a file in the `/path/to/outputfile/` directory with `.gcda` extension. Then recompiling the application with `-fprofile-use=/path/to/outputfile` will result in an optimised program.

```bash
$ gcc -O2 -fprofile-use=/path/to/outputfile test.c -o b.out
```

`b.out` is optimised with profile information. The compiler often optimises the code layout, function inlining, and loops with profile information. It is common to see performance improvements of over 10% with PGO (Profile-Guided Optimisation).