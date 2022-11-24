---
title: "GNU"
tags:
  - engineer-training
  - compilers
  - relocations
programming-languagues:
created: 2022-07-11
---
# GNU
---
Extensive collection of free software which can be used as an operating system or in parts with other operating systems.

## The "Big" Utilities
- **gold**: the ELF only linker.
- **gprof**: the GNU profiler.
- **gcov**: the GNU coverage tool (not part of binutils, but GCC)

## The "Small" Utilities
- **ar** and **ranlib**: creating static libraries.
- **nm**: list the symbols in a file.
- **objcopy**: copy binary files.
- **objdump** and **readelf**: examine binary files.
- **size**: print all the strings in a binary program.
- **strip**: strip all symbols from a file.
- **c++filt**: C++ name demangler.
- **addr2line**: convert an address to source code line.
- **elfedit**: update ELF headers.

### Link Time Optimisation (LTO)
1. Compile only to intermediate representation (IR), still held in`.o` files.
2. It then links into one giant file, treating all globals as static.
3. Apply optimisations to entire file.

## The Assembler
### libopcodes
 It is in the `opcode` directory, with headers in `include/opcode`.
 
-  `<target>-opc.c` and `<target>-opc.h` (optional) are for assembly.
-  `<target>-dis.c` and `<target>-dis.h` (optional) are for disassembly. It prints disassembled instructions and matches opcodes and operands.

Also need to have target specific changes in `configure.in`, `disassemble.c` and `Makefile.am` files in the `opcodes` directory.

**CGEN** will create these automatically for you.

### Sections and Relocation
A section is a **range of address with no gaps**. 

The linker `ld` reads many object files and combines them into a runnable program. When the assembler emits an object file, the program is assumed to start at address 0. `ld` assigns the final addresses for the partial program, so that different programs don't overlap.

`ld` moves blocks of bytes to their run-time addresses. These blocks slide as rigid units, their length doesn't change neither does the order of bytes. These are called **sections**. Assigning run-time addresses to sections is called **relocation**. It includes the task of adjusting mentions of object-file addresses so they refer to the proper run-time addresses.

An object file written by the assembler has at least three sections:
- `text`
- `data`
- `bss`

To let `ld` know which data changes when the sections are relocated, and how to change that data, `as` also writes to the object file details of the relocation needed. `ld` must know this each time an address is mentioned:

- Where in the object file is the beginning of this reference to an address?
- How long (in bytes) is this reference?
- Which section does the address refer to? What is the numeric value of `(address) - (start-address of section)`?
- Is the reference to an address **program-counter relative**?

Every address `as` ever uses is expressed as `(section) + (offset into section)`.

### Linker Sections
![Screenshot from 2022-07-11 11-19-21](notes/images/Screenshot%20from%202022-07-11%2011-19-21.png)

- **text** and **data** section:  they hold the program, they are treated as separate but equal sections. When the program is running however, the **text** section is unalterable as it is often shared among processes: it contains instructions, constants etc. The data section is usually alterable, for example C variables would be stored there.
- **bss** section: it contains 0 bytes when the program begins running. It holds uninitialised variables or common storage.
- **absolute** section: address 0 of this section is always "relocated" to runtime address 0. This is useful if you want to refer to an address that `ld` must not change when relocating.
- **undefined** section: catch-all for address references to objects no in the preceding sections.

#### Symbols
The programmer uses symbols to name things, the linker uses symbols to link, and the debugger uses symbols to debug.

- `typedef` from `struct symbol` in `as.h`.
- Defined in `symbols.c`.

#### Labels
They are written as a symbol immediately followed by a colon `:`. The symbol then represents the current value of the active location counter, and is, for example, a suitable instruction operand.

If you use the same symbol to represent two different locations: first definition overrides any other definitions.

#### Fixup
More [here](notes/general/fixups.md).

Anything that cannot be resolved in the first pass. It is either resolved at the end of assembly or else becomes a relocation.

## Resources
- Binutils Porting Guide ([here](https://www.sourceware.org/binutils/binutils-porting-guide.txt))
- [Linker Relaxation](notes/general/linker-relaxation.md)
- [Relocations](notes/general/relocations.md)
- [RISCV Toolchain](notes/general/riscv-toolchain.md)
- [Compiler Toolchains](notes/general/compiler-toolchains.md)
- [GCC](notes/general/gcc.md)
- [Fix-ups](notes/general/fixups.md)