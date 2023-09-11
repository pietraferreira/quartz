---
title:  Assembly Test Example - CORE-V
tags:
  - work/corev
  - cs/riscv
  - work
  - help
programming-languagues:
created: 2022-06-03
---
# Assembly Test Example - CORE-V

```c
* { dg-do run } */
#include <stdlib.h>
volatile int my_global;

void zero_test(){
  asm volatile ("mvib   r0, 0\n"
                "mvib   r1, 0\n"
                "mvib   r2, 0\n"
                "add    r0, r1, r2\n"
                "st     r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

void min_test1(){
  asm volatile ("mvib     r0, 0\n"
                "mviu     r1, 0x0000\n"
                "mvih     r1, 0x8000\n"
                "mvib     r2, 0\n"
                "add      r0, r1, r2\n"
                "st       r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

void min_test2(){
  asm volatile ("mvib     r0, 0\n"
                "mvib     r1, 0\n"
                "mviu     r2, 0x0000\n"
                "mvih     r2, 0x8000\n"
                "add      r0, r1, r2\n"
                "st       r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

//Out of bounds (ignore carry)
void min_test3(){
  asm volatile ("mvib     r0, 0\n"
                "mviu     r1, 0x0000\n"
                "mvih     r1, 0x8000\n"
                "mviu     r2, 0xfffd\n"
                "mvih     r2, 0xffff\n"
                "add      r0, r1, r2\n"
                "st       r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

void max_test1(){
  asm volatile ("mvib     r0, 0\n"
                "mviu     r1, 0xffff\n"
                "mvih     r1, 0x7fff\n"
                "mvib     r2, 0\n"
                "add      r0, r1, r2\n"
                "st       r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

void max_test2(){
  asm volatile ("mvib     r0, 0\n"
                "mvib     r1, 0\n"
                "mviu     r2, 0xffff\n"
                "mvih     r2, 0x7fff\n"
                "add      r0, r1, r2\n"
                "st       r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

//Out of bounds (ignore carry)
void max_test3(){
  asm volatile ("mvib    r0, 0\n"
                "mviu     r1, 0xffff\n"
                "mvih     r1, 0x7fff\n"
                "mvib     r2, 0x1\n"
                "add     r0, r1, r2\n"
                "st      r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

void misc_test1(){
  asm volatile ("mvib    r0, 0\n"
                "mvib    r1, 3\n"
                "mvib    r2, -2\n"
                "add     r0, r1, r2\n"
                "st      r0, my_global"
                :::"r0", "r1", "r2", "memory");
}
void misc_test2(){
  asm volatile ("mvib    r0, 0\n"
                "mvib    r1, -70\n"
                "mvib    r2, 22\n"
                "add     r0, r1, r2\n"
                "st      r0, my_global"
                :::"r0", "r1", "r2", "memory");
}

int main()
{
  zero_test();
  if (my_global != 0)
    abort();

  min_test1();
  if (my_global != 0x80000000)
    abort();

  min_test2();
  if (my_global != 0x80000000)
    abort();

  min_test3();
  if (my_global != 0x7ffffffd)
    abort();

  max_test1();
  if (my_global != 0x7fffffff)
    abort();

  max_test2();
  if (my_global != 0x7fffffff)
    abort();

  max_test3();
  if (my_global != 0x80000000)
    abort();

  misc_test1();
  if (my_global != 1)
    abort();

  misc_test2();
  if (my_global != -48)
    abort();

  return 0;
}
```