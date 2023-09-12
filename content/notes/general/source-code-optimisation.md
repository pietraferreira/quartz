---
title:  "Source Code Optimisation"
tags:
  - cs
programming-languages:
created: 2022-06-05
---
# Source Code Optimisation
---
In addition to [compiler](notes/private/work/compilers.md) optimisations, there are several software engineering techniques to reduce code size. These techniques take advantage of well-known software engineering methodologies and programming language features.

## Code Refactoring
Moving function definitions to the `.c/.cpp` file. When function definitions are put in header files, they get duplicated in every translation unit that includes the header file. Even though only one definition remains in the end (thanks to ODR), these functions may have been inlined in their callers and that extra code size will persist in the binary. So, it is a good idea to put function definitions in `.c/.cpp` files.

In addition to functions that were written by developers, there are [compiler](notes/private/work/compilers.md)-generated functions like constructors, destructors, operator overloads, etc. Even these functions can contribute to code size depending on the structure of the type and language rules. So, programmers can explicitly instantiate these methods in the `.cpp` file. One can either do a ‘default’ instantiation or an explicit instantiation. For example:

In `test.h`, the class is declared

```cpp
class A {  
  A(); 
  A(A const&);
  ~A();
};
```

In `test.cpp`, the definitions are instantiated:

```cpp
A::A() = default;  
A(A const&) = default;  
A::~A() = default;
```

Similar to how function definitions in header files contribute to code size, template functions do the same. It is however a non-trivial amount of work to reduce their overhead. It is often the case that some types are used more often than others. For the commonly used types, we can explicitly instantiate them in a `.cpp` file. For example:

In the `test.h` file, the template is defined:

```cpp
template<class T>  
struct  a {  
void f(T t) { /* */ }  
};
```

In the `test.cpp` file, the template is explicitly instantiated:

```cpp
template struct A<int>;
```

Explicit instantiations also save compile time as the instantiation happens once. For more ideas on source code optimisations, you can watch Aditya Kumar's presentation at the RISC-V Global Forum 2020: [_"Code Size Compiler Optimisations and Techniques for Embedded Systems"_](https://www.youtube.com/watch?v=6IuDWfuMEno).

## Function Attributes

Function attributes that reduce inline potential can help reduce code size. For example:

- `__attribute__((cold))`
- `__attribute__((noinline))`

Note that in some cases, inlining may reduce the code size. Especially, with tiny functions, inlining removes the function call overhead, which may be more than the size of the function body itself. It is advisable to use these attributes in limited cases as they affect the readability of programs.

## Reducing Binary Size by Moving Evaluations Out of the Binary**
With a good knowledge of [compiler](notes/private/work/compilers.md) optimisations and requirements of the programming language, it is possible to move evaluations out of the binary. Some of the expressions can be evaluated at compile time, while some others can be delayed until runtime. Both approaches help reduce the binary size. Following are motivating examples:

Early evaluation: Using language features like `constexpr`, `static_assert` of C++ some of the expressions can be evaluated early for example:

```cpp
constexpr auto gcd(int a, int b){  
 while (b != 0){  
  auto t= b;  
  b= a %b;  
  a= t;  
 }  
 return a;  
}

int main(){  
   int a= 11;  
   int b= 121;  
   int j= gcd(a,b);  
   constexpr int i= gcd(10,12); // saves ‘2’ in the final assembly.  
   return i + j;  
}
```

Compiling the above program with `g++ -std=c++17 -fno-exceptions -S`:

```assembly
main:  
       mov     edx, 121  
       mov     eax, 11  
.L2:                 # inlined call to gcd(a, b)  
       mov     ecx, edx  
       cdq  
       idiv    ecx  
       mov     eax, ecx  
       test    edx, edx  
       jne     .L2  
       add     eax, 2 # Precomputed value of gcd(10,12)  
       ret
```

We can see in the assembly that the second `gcd` has been evaluated at the compile time, but the first call to `gcd` has the entire code in it. This is because the second call to the `gcd` function is a `constexpr`. You can learn more about `constexpr` expressions on the [constexpr specifier web page](https://en.cppreference.com/w/cpp/language/constexp).

## Simple Tricks to Find Dead Code in Binary
In any large project, there is likely dead code because of various reasons. Some of the dead code can be removed with simple tricks; for example:

- Finding testing and debugging code shipped in production. It is non-trivial to find testing/debugging code by grepping the source code; however, searching in the binary provides a high signal/noise ratio. `nm` can be used to search symbol names in a binary. 
 
`nm <Binary> | grep -i "test\|debug"`

- Finding strings in the binary using the `strings` tool. As explained before, strings will print all the C-strings hardcoded in the binary. By looking at the strings we can investigate why a particular string ends up in the final binary.