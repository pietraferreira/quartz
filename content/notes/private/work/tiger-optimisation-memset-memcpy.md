---
title:  "Tiger Optimisation (memset/memcpy)"
tags:
  - work/tiger
programming-languages:
created: 2021-01-13
project: tiger
---
## Optimising expansion of memcpy/memset using hardware loops
Currently memcpy and memset get expanded to a list of stores and loads for small sized values. If the size of the memcpy/memset is very large, then generate a call to implementation, which is provided by newlib.

Ed thinks we can do better by using the hardware loop instructions. So for a large memset/memcpy, instead of generating a call to implementation we should be able to generate an inline hardware loop.

### The approach
1. Replace the implementation of memset/memcpy with a handwritten assembly implementation using a hardware loop in newlib. This should give an idea of whether it is worth expanding this in the compiler.

If I look [here] (https://tiger.git.embecosm.com/tiger/newlib/-/tree/tiger-3.3.0-newlib/newlib/libc/machine/bsc)

I'll need to add a `memset.s` and `memcpy.s` to the directory above.

Then update the `Makefile.am` to refer to `memset.s` and `memcpy.s` (like `setjmp.s` in the `lib_a_SOURCES` variable in that file)

Finally run `automake` from that directory to regenerate `Makefile.in`

(Might run into assembly bugs)

## More stuff
This is the optimisation: https://tiger.git.embecosm.com/tiger/llvm-project/-/issues/113

I need to write a memset.S and a memcpy.S using hardware loops.

There's a file newlib/libgloss/bsc/crt0.S which has an example of some assembly code. It looks like this:

```assembly
  .text
  .global _start
  .type   _start, @function
_start:
  # clear bss 
  mviu r0, __bss_start
  mviu r1, __bss_end
  mvib r2, 0
.Lbss_clear_start:
  ge r0, r1
  jc .Lbss_clear_end
  stw r2, r0, 1
  j .Lbss_clear_start
.Lbss_clear_end:

  # For now set the stack pointer to the end of the data section.
  # For now just set the stack pointer to the end of the data section.
  # Since the stack pointer rises and nothing is allocated to the memory
  # afterwards this essentially allocates any remaining memory to the stack.
  mviu sp, __stack_start

  # Set argc and argv with 0
  mvib r0, 0
  mvib r1, 0
  cl main
  cl exit
  .size  _start, .-_start
```

The start of memset.S would probably look like this:

```
  .text
  .global memset
  .type memset,@function
memset:
  ... <<< stuff goes here
  ret
```

As for how to write a memset, you have three arguments: a pointer to the destination, a value to write, and a size to write. Where these arguments are depends on the calling convention which is defined in the compiler in `BSCCallingConv.td`, but the short answer is that they will be in the registers r0, r1 and r2

As for the instructions you can use - there's documentation of the instructions here: https://tiger.git.embecosm.com/tiger/bst/-/blob/master/simple-iss-cronus/doc/cronus.md

You might also need to look at the `BSCInstrInfo.td` in the compiler to work out the exact syntax though.

A good starting point for assembly might be to see what gets generated at the moment.  Code for a really simple memset looks like this:

```c
void memset(char *dst, int value, int size) {
  for (int i = 0; i < size; i++)
    dst[i] = value;
}
```

If you compile that with `bsc-elf-clang -O1 -S test.c` you'll get a `test.s` which might be a good example of what the assembly looks like

It looks like this:

```assembly
        .text
        .file   "test.c"
        .globl  memset                          # -- Begin function memset
        .type   memset,@function
memset:                                 # @memset
# %bb.0:                                # %entry
        mvib    r3, 1
        lt      r2, r3
        jc      .LBB0_3
# %bb.1:                                # %for.body.lr.ph
        mvib    r3, 0
.LBB0_2:                                # %for.body
                                        # =>This Inner Loop Header: Depth=1
        add     r4, r0, r3
        nop
        stw     r1, r4, 0
        add_imm r3, r3, 1
        eq      r2, r3
        jc      .LBB0_3
        j       .LBB0_2
.LBB0_3:                                # %for.cond.cleanup
        ret
.Lfunc_end0:
        .size   memset, .Lfunc_end0-memset
                                        # -- End function
        .ident  "clang version 11.0.0
(https://tiger.git.embecosm.com/tiger/llvm-project.git
5f5620c0f445066875824efbd24e2c0ad44831a4)"
        .section        ".note.GNU-stack","",@progbits
        .addrsig
```

The idea is to check the code generated from the compiler for memset and memcpy to figure out what goes on internally to then move on to prototyping the generation of a hardware loop in the compiler itself.

`memset.S` written by Ed for NXP:

```
.file    "memset.S"
    .text
    .globl    memset
    .align    2
    .type    memset,@function
memset:
    mov.w   r6,     r4      ; copy dest
.L1:
    cmp.w   r1,     #0      ; num == 0
    beq     .L2
    mov.b   @r4+,   r0l
    sub.w   r1,     #1      ; num--
    bra     .L1
.L2:
    mov.w   r0,     r6      ; return dest
    ret
```
> [!failure]- Failure 
>   Error: There is another generation process
>   
>   - plugin:obsidian-textgenerator-plugin:56949 TextGenerator.eval
>     plugin:obsidian-textgenerator-plugin:56949:31
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>   - plugin:obsidian-textgenerator-plugin:62 __async
>     plugin:obsidian-textgenerator-plugin:62:10
>   
>   - plugin:obsidian-textgenerator-plugin:56935 TextGenerator.generate
>     plugin:obsidian-textgenerator-plugin:56935:12
>   
>   - plugin:obsidian-textgenerator-plugin:58440 AutoSuggest.eval
>     plugin:obsidian-textgenerator-plugin:58440:52
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>  
