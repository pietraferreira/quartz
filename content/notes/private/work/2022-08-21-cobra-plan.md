---
title: "2022-08-21 - Cobra Plan of Action"
tags:
  - work
  - cobra
programming-languagues:
created: 2022-08-21
---
# Cobra Plan of Action
## Overview of Work (August)
### 05 of Aug
#### Nandni (14hrs)
- Verified tests (no added changes besides whitespaces and typos).
- Documented verified tests on the test table spreadsheet.
- Make sure we have supported and unsupported tests.

#### Charlie (19h19min)
- PR for Zc\* tests and refactored them accordingly.
- Learning how to test the linker for Zcmt instructions.
- Review my PR cleaning the tests.
- Submitted end of week report.

#### Simon (30min)

### 12 of Aug
#### Nandni
- Verified Charlie's relaxation tests for the assembler.
- Created linker tests which didn't actually test the linker.
- Began writing the release note.
- Wrote a plan for her and Charlie.

#### Charlie

#### Simon (5hrs)

### 19 of Aug
#### Nandni (18hrs)
- Tests to check for correct relaxation messages for `c.lbu`, `c.lhu`, `c.lh`, `c.sb`, `c.sh` and their corresponding `cm` instruction (PR 12).
- Tests to check consistency of immediate values (PR 12).
- Extra GAS tests for JVT.

#### Charlie (20h42min)
- Meetings.
- Building releases.
- Adding tests for Zc\* being passed through.
- Bug fixes.

#### Simon (3hrs)
- Helping with build/support issues.

## Work to be done
1. What will be done about `Zca` and `C` being explicitly equivalent?

`C` includes float and double instructions, needs `F` for the floats.

More [here](https://github.com/riscv/riscv-code-size-reduction/issues/145) and [here](https://github.com/riscv/riscv-code-size-reduction/issues/144).

We need `c.nop` to align 16-bit instructions, if `Zc*` is not a subset of `C`, then we don't have access to that.

Tariq expects `C` to mean that the core supports 16-bit encodings, and the minimal set is `Zca`.

---
2. Jump tables.

They are implemented in the linker, however relaxation never creates them.

They are also in `.text` when they should probably be in `.rodata`.

---
3. Cleanup commits and make sure ChangeLogs are in place so everything can be upstreamed.

## Tasks Completed
### AS
- Made sure `c.lbu` etc are in range (4-15).
- `c.jt` is now <=63 not < 64.
- Added march accept and march reject tests for each Zc\* extension.
- Added `JVT` to the CSR tests (we need `Zicsr`).
- Made `Zca` and `C` equivalent (might need to revert).

### GCC
- Tested if Zc\* is correctly passed to the assembler.