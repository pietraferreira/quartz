---
title: "GCC Guide by Maxim"
tags:
  - gcc
  - daily
  - work
  - help
programming-languagues:
created: 2020-09-18
---
# GCC Guide by Maxim
---
## 1: How Generic GCC lowers GIMPLE memory operations into RTL memory operations, and how we can have a hand in its operation
This is the top level function that GCC calls when it is lowering GIMPLE -> RTL, and wishes to generate a memory move/memory copy operation:

-> [gcc/expr.c:1560] emit_block_move_hints()

Here is an important piece of code from the above function that makes the decision as to how to emit memcpy:
```
  if (CONST_INT_P (size) && can_move_by_pieces (INTVAL (size), align))
    move_by_pieces (x, y, INTVAL (size), align, RETURN_BEGIN);
  else if (emit_block_move_via_movmem (x, y, size, align,
                                       expected_align, expected_size,
                                       min_size, max_size, probable_max_size))
    ;
  else if (may_use_call
           && ADDR_SPACE_GENERIC_P (MEM_ADDR_SPACE (x))
           && ADDR_SPACE_GENERIC_P (MEM_ADDR_SPACE (y)))
    {
      if (may_use_call < 0)
        return pc_rtx;

      retval = emit_block_copy_via_libcall (x, y, size,
                                            method == BLOCK_OP_TAILCALL);
    }

  else
    emit_block_move_via_loop (x, y, size, align);
```

First, GCC attempts to see if it can emit, using RTL, a generic by-pieces memcopy (GCC refers to it as memmove), by asking if we `can_move_by_pieces()`, and if so, it calls `move_by_pieces()`.

If this fails, it will try calling via the `movmem` RTL pattern (`emit_block_move_via_movmem()`). You can find it in [gcc/config/riscv/riscv.md:1505]:
```
(define_expand "movmemsi"
  [(parallel [(set (match_operand:BLK 0 "general_operand")
                   (match_operand:BLK 1 "general_operand"))
              (use (match_operand:SI 2 ""))
              (use (match_operand:SI 3 "const_int_operand"))])]
  ""
{
  if (riscv_expand_block_move (operands[0], operands[1], operands[2]))
    DONE;
  else
    FAIL;
})
```

Notice that it is a `define_expand`: `define_expand` works by allowing you, the developer, to specify exactly how a particular template should be expanded into RTL.

(More info on define_expand): https://gcc.gnu.org/onlinedocs/gccint/Expander-Definitions.html#Expander-Definitions

So, everywhere GCC lowers GIMPLE into RTL, if it generates a movmemsi, it will then call this function to ATTEMPT to expand it.

Notice, this is allowed to fail - if an expansion FAILs, that tells GCC that it needs to find another way to expand this RTL. So it returns all the way back up, and will consequently execute the final "else" statement:

```
      retval = emit_block_copy_via_libcall (x, y, size,
                                            method == BLOCK_OP_TAILCALL);
```

You will, an all likelyhood, want to focus your efforts on riscv_expand_block_move.

Here is a call trace of some of the functions that emit_block_move_hints() calls, that may be worth looking at. 

***Remember you can find all of this for yourself by simply single-stepping through the emit_block_move_hints() function.***

  -> [gcc/expr.c] can_move_by_pieces()
    -> targetm.use_by_pieces_infrastructure()

      # This is a target-specific function pointer.
      # If RISC-V had defined the TARGET_USE_BY_PIECES_INFRASTRUCTURE_P
      # macro, then this invocation would call our function. Since RISC-V
      # does not, it calls the default fallback defined by GCC.

      -> [gcc/targhooks.c:1742] default_use_by_pieces_infrastructure()

        # Decides whether or not to "use by-pieces infrastructure" - "by pieces"
        # typically means to do something using registers, bit by bit. For instance,
        # we can do a memcpy by calling memcpy, or by moving through the registers,
        # bit-by-bit - i.e. "by pieces".

        # Notice it serves many block-oriented operations - CLEAR_BY_PIECES,
        # MOVE_BY_PIECES (the one we're interested in), etc. Notice the
        # parameters used for decision making:
        # * MOVE_MAX_PIECES (***conditionally*** defined in [gcc/defaults.h:1000])
        # * get_move_ratio()
        # * speed_p (Whether we are optimizing for speed or size)
        # * SET_RATIO()

	-> [gcc/expr.c:/790] by_pieces_ninsns
        # ... and so on...

## Defining instructions in RTL templates.
You will probably need to define the cv.starti (etc) insns in riscv.md. GCC has no sane way of understanding these insns, so just mark them as UNSPEC (Unspecified, aka "Hey GCC, you're not allowed to make any assumptions about this insn, except that if it doesn't access the registers or memory, you can assume this insn wont change it")

((Aside: There is also UNSPEC_VOLATILE, which tells GCC "Hey, you cannot assume ANYTHING after executing this insn, so don't even touch it."

If GCC still does "overly clever" things about your custom RTL insn, try marking it as UNSPEC_VOLATILE instead of just UNSPEC)).

Good examples:
(define_insn "riscv_mret"...
(define_insn "riscv_sret"...
(define_insn "riscv_uret"...

(just copy these)

Then, notice how we can generate them:
config/riscv/riscv.c:4096:
```
      if (mode == MACHINE_MODE)
        emit_jump_insn (gen_riscv_mret ());
```

so, gen_riscv_mret() will generate the `riscv_mret`. Try adding a "cv_starti" template just like it, and emit it from somewhere, to see what happens.

## Hooking up the RTL insns to RISCV target specific code
Recall from the first section, there was specified that GCC will attempt using the `movmem` RTL template. This is where `riscv_expand_block_move` will get called, and where we have total control as to what happens.

The call chain from this point looks something like this:

(...somewhere up here is emit_block_move_hints()...)
...
-> [gcc/config/riscv/riscv.c:3034] riscv_expand_block_move()
  -> [gcc/config/riscv/riscv.c:2923] riscv_block_move_straight()
    -> [gcc/expr.c:1211] move_by_pieces()
  -> [gcc/config/riscv/riscv.c:2987] riscv_block_move_loop()

We can change anything we like here with comfort, since this is the target specific part of the compiler. You will most likely want to emit the PULP -specific loop insns from here (that is, from riscv_expand_block_move(), or its callees.)

---

goes into riscv_block_move_straight
riscv_expand_block_move -> DONE
 
look at emit functions!! 18/09 emit_insn