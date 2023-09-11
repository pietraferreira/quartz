---
title: "Meet-up 2020 CORE-V - Script" 
tags:
  - work/corev
  - work
  - script
programming-languagues:
created: 2022-06-05
---
# Meet-up 2020 CORE-V - Script
---
Slides can be found [here](assets/meetup-2020-corev-presentation-v11.odp).

Good evening, I’m Pietra and today together with my colleagues Mary and Jessica we will be presenting our work on porting the GNU CORE-V toolchain.

(next slide)

Here we see all the components which make up a modern GNU tool chain. For standard RISC-V we can already compile Ada, C and C++ and in the future Fortran and OpenMP. We have the compiler GCC, the GNU assembler, gas, the GNU Debugger, GDB and a set of binary utilities. We have low-level libraries to support C and C++ on any RISC-V variant and a range of standard C libraries for systems both large and small. We have the option to use a hand-written assembler, or to use CGEN to generate the assembler, disassembler and simulator from a semi-formal description.

(next slide)

Let us look at supporting the CORE-V variants of RISC-V. These are all standard RISC-V cores, so can use the standard assembler and compiler. However CORE-V has a number of instruction set extensions, which we wish to support as well. Our initial focus is to extend the compiler and assembler (highlighted in red) to support them. For now we finished implementing our first instruction in both Binutils and GCC. In the future, we hope to extend CGEN to give us automatic generation, together with a simulator.

(next slide)

Here you can see how we approached the implementation. We first provide support in the assembler and linker, followed by GCC builtin function support, and finally GCC optimization patterns to use these instructions automatically. These three steps are the structure that will be used to implemented each instruction, starting with hardware loop. Code optimisation for now is out of scope of this project.

(next slide)

This project has been running since the middle of August. We plan to support the five group of intructions shown here. To make it clear that the tool chain is targeting CORE-V, we use the vendor field of the target triplet. Thus we shall have riscv32-corev-elf instead of riscv32-unknown-elf. We provide additional architecture specifications to specify either the whole CORE-V support (Xcorev), or just selected parts - for example for hardware loops it is (Xcorevhwlp). Finally all CORE-V instructions will be prefixed by “cv.”.

The first commit to upgrade the assembler to support hardware loops was made and is downloadable as source from the Open Hardware Group GitHub repositories and as a pre-packaged binary from Embecosm.

(next slide)

Now we will be explaining how was our process of adding an instruction. It is important to note that while the examples and files shown are RISC-V specific, the information is transferable to other architecture ports.

We will be using cv.starti as an example throughout the presentation. Cv.starti is part of the CORE-V hardware loops extension and declares the address of the offset to the start of the loop as well as the loop number, which can be 0 or 1 depending if it is an inner or an outer loop. It is important to note that hardware loop provides a total of six instructions, cv.starti being one of them. Here you can see its generic pattern:

(next slide)

Let’s move on to the first part of the implementation: binutils.

(next slide)

So in order to follow this implementation, some changes will need to be made: we need to modify the opcodes library (both encoding and decoding), modify the assembler to use the new table entries and extend our linker relocations. Here you can see all the main files changed.

(next slide)

Let’s implement a new instruction. First we add the instruction to the RISC-V opcodes structure, which contains all the instructions available for the RISC-V architecture. Note that the structure is generic, but the specifics of it are RISC-V. In other words, other architectures will have similar tables but the details vary from architecture to architecture. Let’s break it down:

(next slide)

We have the name of the instruction, cv.starti.

(next slide)

Xlen which indicates instruction length requirements (either 32 or 64 or 0), 0 for both.

(next slide)

The instruction class which is defined in the RISC-V header file inside an enum set. In this example we had to add an specialised class for the HW loop extension. This might not be necessary if you’re new instruction already fits an existing class.

(next slide)

The instruction operands which in this example are di and b1, di mapping to the loop number while b1 maps to the immediate. They are given in the order they appear in the symbolic assembler and not the encoded instruction, as you can see.

(next slide)

We then have our MATCH and MASK defined in the RISC-V opcodes header file. Instruction masks are used to hard code common encoding fields in the instruction, such as the opcode, and to mask preset bits with 1 in the operand encoding fields. You can see that how it is calculated here. So if you exclusive OR something with the MATCH, and all bits are the same as MASK, then the return will be 0.

(next slide)

Here you can see a table that shows how the mask works for our cv.starti example. It hard codes the source register, function, the destination register and the opcode. We then have our match field checking the encoding.

(next slide)

We then have the match function, which determines if a word corresponds to this instruction. Match_opcodes will give you a simple pattern match, meaning that it doesn’t require any additional assistance from the fuction.

(next slide)

The match function does the encoding & mask = match calculation that I previously mentioned, but in a different manner as you can see. Meaning that in the actual code base, a different boolean formula is used but it is equivilant.

(next slide)

And lastly we have Pinfo, a collection of bits describing the instruction, notably any relevant hazard information. For example, it can be used to indicate it is an alias, a macro or even a branch instructions. Mary will now give details on disassembly and assembly.

(M-next slide) (opcodes/riscv-dis.c)

The other file that must be edited in the opcodes directory is riscv-dis.c. In this file there is a function called print_insn_args which disassembles a bit stream. All operands must be added to this function. We can use this to ensure that our instructions are being printed out correctly during assembly. As described later, this is essential for testing.

The example on this slide is the branch offset operand, b1. I would like to draw your attention to the EXTRACT macro, which must be defined in the include/opcode directory in the riscv header file. This macro extracts only the bits used for the b1 operand from the bit stream. The other operations are specific for this operand. The immediate field refers to a half word address, because instructions are on half word boundaries. We shift it left 1 bit to turn it into a full byte address and the PC is required as the offset is PC relative.

(next slide) (gas/config/tc-riscv.c)

So now we move on to the gas/config directory, in the file tc-riscv.c, the validate_riscv_insn() function ensures that all bits in the instruction are set. The ENCODE macro, which is defined in the riscv header file, is passed a value of all 1’s. This returns a value with only the bits set by the operand high. This is then OR’d with all the bits set so far. The example on this slide is the loop number, which would only return a value of 1 in the 7th bit position. At the end of this function, all bits in the variable used_bits must be set to 1, otherwise an error will be generated.

(next slide) (gas/config/tc-riscv.c)

In this same file there is a function called riscv_ip() which assembles an instruction into its binary format. All operands must be added here. In this function you can check that an operand is an acceptable value. This example shows the code for a loop number, as previously explained, a loop number is a constant value of 0 or 1. In this function we check these bounds and the type, if it is not what is expected then we produce an error.

The main part of this function that does most of the work is INSERT_OPERAND

(next slide) (INSERT OPERAND)

To ensure that the INSERT_OPERAND macro works correctly, in the riscv header file, a mask for the bits encoded for the operand, and the offset of the encoded bits must be defined. These are used in the INSERT_OPERAND macro along with the instructions opcode, and the actual value of the operand, to produce the instructions binary representation.

(next slide)

Now we are going to go into detail on how we added a relocation to GNU binutils.

The linker is an important part of binutils. It performs two operations relaxtion, replaced by simpler instruction, and relocation.

Relocations are implemented at link time, so it is tested as part of the linker tests and not assembly.

Before link time, an instruction might make use of a label, for our example the immediate in cv.starti. The label will then be assigned as a temporary symbolic reference until link time. During link time, the label may change its position as the code is relaxed. Once the actual address is known, the temporary symbolic reference is replaced by the relocated address label.

The relocation table or howto table – which we will explain in detail later on – stores a list of pointers to the absolute addresses called fixups. These are changed when the loader relocates the code. If a fixup crosses a boundary, an overflow error is flagged by the assembler.

(next slide)

The CORE-V hardware loop extension has a relocation for cv.starti as you can see. The relocation is used by the 12 bit immediate and refers to the start of the loop. It is PC relative, local and requires a 1 bit left shift.

(next slide)

The first step to add a new relocation is to add the ELF and BFD relocation types.

This requires a small change in three files: include/elf/riscv.h, bfd/elfxx-riscv.c and bfd/reloc.c.

Each relocation is assigned a number 0 to 225. The relocation number for this relocation is temporally 224. I will describe later on a issue with this.
  
(next slide)

Then, add a description of how the ELF relocation will be handled in bfd/elfnn-riscv.c. The relocation requires a 1 bit left shift which is performed by the ENCODE macro already introduced. The amount to be shifted is recorded in the howto table. Please note that while the howto field is called rightshift, it is a left shift that we are performing and we are saving the amount of bits shifted to this field.

(next slide)

This is the example of a fixup, a howto table entry. Remember, the relocation is PC relative, and to be left shifted 1 bit. The assembler will throw an error if the relocation overflows using the complain_overflow_unsigned function.

(next slide)

The final step is to return to tc-riscv.c and add the bfd type to the md_apply_fix function. This will be the function that is called to handle fixups.

-   First it looks up the fixup in the howto table.

(next slide)

- Then it defines target and delta, two variables that alter what is printed at disassembly.

(next slide)
-   Then it checks for an overflow.

(next slide)

- Finally it removes some of the information from the header records of object files using bfd_putl32.

(next slide)

For this extension, the relocations have been given temporary numbers. This is because vendor specific linker relocations do not yet have a mechanism to add numbers without maybe stepping on someones toes.

Only once the relocation numbers have been set in stone can we upstream our work.

(next slide) (TESTING)

Now that we have added an instruction, we come to the most important step; testing. To test the assembler, Binutils has the GAS testsuite. The tests assemble the given input and pattern match the produced disassembly output with the given expected disassembly.

To add a test for RISC-V, add an assembly file, disassembly file and if the test expects to fail, a .l file.

An example of a cv.starti input test file is shown on the slide.

(next slide)

The corresponding output file is shown here. This file starts with hash options defining how to produce the disassembly.

You can see the assembler options include a march option. This will be discussed in more detail when I explain how to run the assembler. The next line describes the disassembly options, -d for objdump.

The hash options are followed by the expected disassembly pattern. Since the tests use pattern matching, it is possible to use regular expressions in the tests.

(next slide)

To test the relocations, Binutils has the LD testsuite. The tests use the same format as the GAS tests, an assembly file, disassembly file and an error file. Except the error output file is now a .ld file. The test must be added to ld-riscv.exp, which will call it.

Here you can see the cv.starti test assembly file.

(next slide)

This is the start of the corresponding disassembly file. As with the GAS tests, the file starts with hash options which define how to produce the disassembly. The -r disassembler option prints the relocations.

(next slide)

This is the rest of the disassembly file. As you can see, the labels are printed.

(next slide) (BUILDING)

Finally, we will need to build it. This slide shows the commands I use to build the assembler. I create and enter a binutils build directory. Then, I run configure with a CORE-V specific target. Next, I run make and run the tests with make check-gas and make check-ld.

If all tests pass use make install to install the assembler to the given install directory.

(next slide)

To use the assembler, run the command shown on the slide where test.s is your assembly file. The march option tells the assembler that the instructions belong to the 32 bit base integer RISC-V instruction set with the standard multiply and compressed extensions and a CORE-V hardware loop custom extension.

Jessica will now tell you about our work with GCC.

(next slide)

GCC

Now we are going to move onto GCC

(next slide)

The main files we edit are in the gcc/config/riscv directory. In this directory there are some machine description files. The existing RISC-V machine description file can be edited or a new one can be created depending on the types of changes made. The predicates machine description file defines all operand constraints.

(next slide)

In order to generate the assembly for cv.starti we must define the instruction in a machine description file. For CORE-V we have created a new file specifically for the CORE-V extensions. An example is given on the slide, so let’s break it down...

(next slide)

When defining the instruction, a name is given. This will be used to generate a gen function during building. This function can be called to print out the desired assembly with given operands. Note that the operands are numbered, in this example we use 0 and 1, in the order that they will be passed into the gen function.

(next slide)

To ensure that your new instructions are not optimized out, we declare this as an unspec volatile. This must also be defined in the unspec v enum at the top of the file.

(next slide)

In order to validate any operands we use match_operand and define a predicate in the predicates machine description file. We have created two new predicates for cv.starti. However this will not be required if your operand matches the constraints in an existing predicate. The example on the slide shows the predicate for a loop number, here we ensure that it is a constant value using match code and is either 1 or 0.

(next slide)

If the instruction is target specific then we must state this. The cv.starti instruction is specific for CORE-V, therefore we add the CORE-V hardware loop target – this can be left blank if the instruction is not target specific.

(next slide)

Finally we add the desired assembly for the instruction, the cv.starti instruction has two operands loop number indicated by operand 0 and the label or a constant indicated by 1. The percent sign in front of the operand number will print out the actual value of these operands in assembly.

(next slide)

Now we build GCC. GCC is built in two stages; the second build stage uses the first. For now, the most important stage is the first. The build steps are very similar to Binutils; open and enter a build directory, configure, make and make install. The only change is the configure options. This slide shows the configure command used for GCC Stage One.

After building stage one, we can use the compiler as is or build Newlib and recompile GCC as a second stage. This would follow same steps, just with different configuration options.

(next slide)

We identified memcpy as a key function that could benefit from the use of hardware loops. Memcpy is sometimes called when copying data, an example of this is when copying one large structure to another. The slide shows how we defined a hwlp_memcpy instruction in the same format as previously explained.

(next slide)

In the RISC-V C file we call the gen function of this instruction, passing it the destination and source registers as well as a temporary register that will be used to implement the copy. This is called instead of the generic memcpy when both optimisation is switched on and the target is CORE-V. This is indicated by an -march option of xcorev or xcorevhwlp.

(next slide)

Now that we have shown you how we added the hardware loop extension to GCC, it’s time to show that it works via a demo. The demo will revolve around memcpy.

In this demo we will be compiling this file. In the command line, we are able to change the value of N and thus the size of the structures copied. For different sizes, the methods used to copy the structures changes. The demonstration will combine the assembler, linker and GCC that we have previously explained. I’ll now hand you over to Mary to run the demonstration.

(DEMO)

(terminal)

First I will compile this file with a very low structure size of 4 bytes. As you can see the compiler uses an intrinsic version of the nano Newlib library memcpy function to copy the structure byte by byte.

If I increase to 12 bytes, you can see that it uses the same method but the code size has ballooned. Any larger will be inefficient.

If I increase the amount of bytes by 1 to 13, the methods have changed; it now uses the hardware loop built-in function to copy the structures.

This critical boundary needs to be investigated. For now it uses the same boundary as memcpy. Once we have physical hardware we will be able to test where the best place to put the boundary to improve speed when using hardware loops.

If I were to run the same command again without hardware loops. Memcpy will be used.

I will compile with 40 byte structures.

Now I will show you how the Binutils assembler and disassembler works. I will assemble the 40 byte file. And then disassemble it.

Here you can see the binary output of the c source file.

(next slide)

Thank you Mary. If you just wish to try using the new compiler, you can download a

convenient pre-built binary from the Embecosm website. You’ll find versions for all the major operating systems, along with links to the source code, scripts to build the tool chain and test results.

But we’d also encourage you to become developers. You can find out more via the OpenHW Group Mattermost Software, in the GNU Tools channel. You can sign up to the OpenHW SW mailing list and attend our monthly meetings. And finally we’d welcome your pull requests against the development code bases on GitHub.

(next slide)

Thank you all very much for listening. Please ask any question.

(final words)