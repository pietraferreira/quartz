---
title:  "Compiler Optimsation"
tags:
  - cs-concept
  - compilers
programming-languagues:
created: 2022-06-05
---
# Compiler Optimisation
---
[Compilers](notes/compilers.md) perform a set of transformations on the source code. While some of the transformations are necessary to generate machine code, most of the transformations are done to improve the performance of programs or to reduce the code size. 

These transformations are called _compiler optimisations_. This chapter introduces both types of compiler optimisations. The goal of this chapter is to enable learners to use the optimisations effectively. We do not discuss how these optimisations are implemented in the [compilers](notes/compilers.md).

## Performance
When we talk about the performance of an application, we generally refer to how much time it takes to do a certain task. 

An application needs to perform tasks within a reasonable amount of time to be practically useful. In many cases, we want applications to run as fast as possible. Although there are several ways to improve the performance of applications, one of them is taking advantage of compiler optimisation techniques. 

It should be noted that not all parts of a program need to be performant to be practically usable. Only certain parts often called a ‘bottleneck’ need to be as performant as possible.

## Flags
- [](notes/compiler-flags.md#Optimising%20for%20Performance|Optimisation%20flags)

## Optimising Programs for Code Size
The code size of embedded applications has been a concern for a very long time. While storage becomes cheaper and smaller, developers find creative ways to increase code size by adding features or unnecessary software engineering. 

Compilers have come a long way in optimising applications for code size. While most compiler optimisations were focused on application performance, we have seen an increase in code size optimisations in recent years.

### Measuring Code Size and Different Sections
There are three popular tools to measure the code size of a binary.

1.  Size: [GNU Binutils](https://www.gnu.org/software/binutils/)
2.  Strings: [GNU Binutils](https://www.gnu.org/software/binutils/)
3.  [Bloaty](https://github.com/google/bloaty)

#### Size  
The size utility can show the size of each section of a binary.

```bash
$ size gcc/11/libstdc++.dylib

__TEXT    __DATA    __OBJC    others    dec    hex  
1703936    65536    0    1851392    3620864    374000
```

#### Strings  
Shows all the strings in a binary.

```bash
$ strings gcc/11/libstdc++.dylib | wc -l

2180
```

#### Bloaty
This can be used to have a deeper analysis of binaries for different platforms. It even annotates code size to the source file to help better discover code-size opportunities.

```bash
$ bloaty gcc/11/libstdc++.dylib

     FILE SIZE     VM SIZE**  
--------------  -------------- 
 29.1%  1.00Mi  29.0%. 1.00Mi   __TEXT,__text 
 25.0%   882Ki  25.0%   882Ki   String Table 
 16.6%   583Ki  16.5%   583Ki   Symbol Table 
 12.3%   433Ki  12.2%   433Ki   __TEXT,__eh_frame 
  5.0%   176Ki   5.0%   176Ki   Export Info
  4.1%   146Ki   4.1%   146Ki   __TEXT,__consts 
  2.5%  87.8Ki   2.5%  87.8Ki   Weak Binding Infos 
  1.2%  41.6Ki   1.2%  41.6Ki   __DATA,__gcc_except_tabs 
  1.0%  36.9Ki   1.0%  36.9Ki   __DATA_CONST,__consts 
  0.9%  33.3Ki   0.9%  33.3Ki   __TEXT,__text_colds
  0.5%  16.1Ki   0.5%  16.1Ki   [10 Others]s 
  0.5%  15.9Ki   0.0%     945   [__DATA]s 
  0.4%  15.0Ki   0.4%  15.0Ki   __TEXT,__cstrings 
  0.0%    4      0.3%  11.3Ki   [__LINKEDIT]s 
  0.0%    0      0.2%  8.12Ki   __DATA,__bss  
  0.2%  8.01Ki   0.2%  8.01Ki   [__DATA_CONST]s 
  0.2%  7.43Ki   0.2%  7.43Ki   Function Start Addressess 
  0.0%    0      0.2%  6.88Ki   __DATA,__commons 
  0.2%  6.08Ki   0.2%  6.08Ki   Indirect Symbol Tables 
  0.1%  4.59Ki   0.1%  4.59Ki   __DATA,__la_symbol_ptrs 
  0.1%  3.44Ki   0.1%  3.44Ki   __TEXT,__stubs100.0%  3.44Mi 100.0%  3.45Mi   TOTAL
```