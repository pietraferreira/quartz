---
title:  "RISC-V Toolchain"
tags:
  - cs-concept
programming-languagues:
created: 2022-06-05
---
# RISC-V Toolchain
---
There are two RISC-V toolchains that are popularly used:

1.  The GNU RISC-V toolchain
2.  The LLVM RISC-V toolchain

Both toolchains provide a state-of-the-art optimising [compiler](notes/private/work/compilers.md), assembler, linker, and various other tools to build applications that run on RISC-V machines.

## Where to download the toolchains and simulator
The official [RISC-V GitHub repository](https://github.com/riscv-collab/riscv-gcc) provides the source code for the `riscv-gnu` toolchain, and the prebuilt toolchain can be downloaded from [here](https://github.com/riscv-software-src/riscv-gnu-toolchain). 

The RISC-V compiler is generally used as a cross-compiler, as many RISC-V processors are used for low-power embedded applications. Currently, the RISC-V cross-compilers can only be run on [ELF targets](https://en.wikipedia.org/wiki/Comparison_of_executable_file_formats) like Linux machines.

The RISC-V LLVM toolchain is not readily available from third-party providers, but one can build it from source by downloading the open source [llvm-project](https://github.com/llvm/llvm-project). We describe an easy way to use the llvm toolchain with gnu sysroot.

The RISC-V simulator can be downloaded from the official RISC-V GitHub repository: [riscv/riscv-isa-sim: Spike, a RISC-V ISA Simulator](https://github.com/riscv/riscv-isa-sim). Although RISC-V boards are readily available from several vendors, using simulators is an easy way to get started with RISC-V development.

## Building Application with the Toolchain
In order to build a RISC-V application, using a [cross-compiler](notes/general/cross-compilation.md) toolchain is the same as any other cross-compiler-based development system. Two things are required:

-   The [compiler toolchain](notes/private/work/compiler-toolchains.md)
-   [sysroot](notes/private/work/sysroot.md)

We have described the compiler toolchain and sysroot in the first chapter. Before learning how to build applications with the RISC-V toolchain, we’d like to introduce an interesting naming convention that has been used for cross-compilers.

### Compiler Naming Convention
When you download the GCC toolchain, you'll find a `riscv64-unknown-elf-gcc` binary in the `bin` directory. This is the same GCC [compiler](notes/private/work/compilers.md) with inbuilt information of sysroot and platform. It is a convention to name [cross-compilers](notes/general/cross-compilation.md) that way. 

The naming is typically using the `arch-vendor-os-abi` format. So, `riscv64-unknown-elf-gcc` means that this is a [cross-compiler](notes/general/cross-compilation.md) for RISC-V 64 bit, and tit will generate an `elf` binary, which can run on Linux machines for example. An excellent reference on naming convention can be found [here](http://web.eecs.umich.edu/~prabal/teaching/eecs373-f12/notes/notes-toolchain.pdf). In cases where a compiler's name doesn't have the target triplet, the `-dumpmachine` flag can be used to get that:

```bash
$ gcc -dumpmachine 
x86_64-linux-gnu
```

With the `riscv64-unknown-elf-gcc` compiler handy, a file can then be compiled in the following ways:

```bash
$ riscv64-unknown-elf-gcc -O2 -o a.out hello.c
$ riscv64-unknown-elf-gcc -O2 hello.c -mabi=lp64d -march=rv64ifd
```

The `-march` flag is used to specify the target sub-architecture for which the assembly will be generated. The `-mabi` flag is used to specify data models. For more details on data models, refer to [](https://en.wikipedia.org/wiki/64-bit_computing#64-bit_data_models) section of 64-bit computing in Wikipedia.

With the [llvm toolchain](notes/general/llvm.md), the binary can be built similarly. Assuming [sysroot](notes/private/work/sysroot.md) is in the `riscv64-unknown-elf` directory:

```bash
$ clang test.c -c --sysroot riscv64-unknown-elf -target  
riscv64-unknown-elf -march=rv64ifd
```

RISC-V applications can be launched on a device, a simulator, or an emulator.

## Running the Applications on Spike Simulator
One of the most convenient ways to run small applications is to use the RISC-V simulator. The build and installation steps are fairly straightforward. For this, you need the following dependencies:

1.  A Linux machine - building a Linux image on non-Linux machines is non-trivial, so it is recommended you have a Linux machine to begin with.
2.  RISC-V toolchain: [https://github.com/riscv-software-src](https://courses.edx.org/xblock/One of the most convenient ways to run small applications is to use the RISC-V simulator. The build and installation steps are fairly straightforward. For this you need the following dependencies: A Linux machine. Building a Linux image on non-Linux machines is non-trivial so it is recommended you have a Linux machine to begin with. RISC-V toolchain (https://github.com/riscv-software-src) RISC-V simulator spike (https://github.com/riscv-software-src/riscv-isa-sim) RISC-V proxy kernel pk (https://github.com/riscv-software-src/riscv-pk)  The instructions to run a simple hello world app on the spike simulator is mentioned in their github README. To install the proxy kernel follow the instructions on their github README. For convenience, you can install both spike and pk in the same directory as the riscv64 toolchain directory by providing the path to toolchain directory as install prefix for both.)
3.  RISC-V simulator spike: [https://github.com/riscv-software-src/riscv-isa-sim](https://github.com/riscv-software-src/riscv-isa-sim)
4.  RISC-V proxy kernel pk: [https://github.com/riscv-software-src/riscv-pk](https://github.com/riscv-software-src/riscv-pk)

The instructions to run a simple `hello-world` app on the Spike simulator are mentioned in their GitHub [](https://github.com/riscv/riscv-isa-sim#compiling-and-running-a-simple-c-program). To install the proxy kernel, follow the instructions on their GitHub [README](https://github.com/riscv-software-src/riscv-pk). For convenience, you can install both `spike` and `pk` in the same directory as the `riscv64` toolchain directory by providing the path to the toolchain directory as install `prefix` for both.

## Running Applications on an Emulator
Running a RISC-V application on an emulator gives you more flexibility, but the installation steps are more involved. In order to run a RISC-V application on an emulator, you need to have the following dependencies:

1.  A Linux machine - building a Linux image on non-Linux machines is non-trivial, so it is recommended you have a Linux machine to begin with.
2.  RISC-V toolchain: [https://github.com/riscv-software-src](https://courses.edx.org/xblock/Running an RISC-V application on an emulator gives you more flexibility but the installation steps are more involved. In order to run a RISC-V application on an emulator you need to have the following dependencies. A Linux machine. Building a Linux image on non-Linux machines is non-trivial so it is recommended you have a Linux machine to begin with. RISC-V toolchain (https://github.com/riscv-software-src) QEMU (git clone --depth 1 --branch v5.0.0 https://github.com/qemu/qemu) Linux (git clone --depth 1 --branch v5.4 https://github.com/torvalds/linux) Busybox (git clone --depth 1 git://git.busybox.net/busybox)  The branches listed above are suggested versions and that may change frequently. You can choose other branches as well. The documentation above may become stale if any of the dependencies have breaking changes. Check https://risc-v-getting-started-guide.readthedocs.io/en/latest/linux-qemu.html to see the latest supported versions. If this documentation does not work, be sure to ask in the linux-riscv mailing list.  Build QEMU with the RISC-V target: cd qemu ./configure --target-list=riscv64-softmmu --prefix=/path/to/keep/qemu make -j $(nproc) make install  Build Linux for the RISC-V target: cd linux make ARCH=riscv CROSS_COMPILE=riscv64-unknown-linux-gnu- defconfig make ARCH=riscv CROSS_COMPILE=riscv64-unknown-linux-gnu- -j $(nproc)  Make sure to have the prefix of the cross compiler match from your toolchain. In the above example the gcc compiler is riscv64-unknown-linux-gnu-gcc so the CROSS_COMPILE flag is riscv64-unknown-linux-gnu-  Build the busybox  cd busybox CROSS_COMPILE=riscv64-unknown-linux-gnu- make defconfig CROSS_COMPILE=riscv64-unknown-linux-gnu- make -j $(nproc)  To run linux image on QEMU run sudo /path/to/keep/qemu/bin/qemu-system-riscv64 -nographic -machine virt /      -kernel /path/to/linux/image -append "root=/dev/vda ro console=ttyS0" /      -drive file=busybox,format=raw,id=hd0 /      -device virtio-blk-device,drive=hd0  You can also run bare metal app on QEMU like this /path/to/keep/qemu/bin/qemu-system-riscv64 -nographic -machine virt -kernel /path/to/binary -bios none  For additional QEMU configurations for RISC-V, checkout the official documentation. In addition to simulators and emulators, RISC-V applications can be run on virtual machines as well as commercially available development boards. Additional documentation to debug bare metal issues can be found here. You can install the RISC-V virtual machine as documented here.)
3.  QEMU: `git clone --depth 1 --branch v5.0.0 https://github.com/qemu/qemu`
4.  Linux: `git clone --depth 1 --branch v5.4 https://github.com/torvalds/linux`
5.  Busybox: `git clone --depth 1 git://git.busybox.net/busybox`

The branches listed above are suggested versions and that may change frequently. You can choose other branches as well. The documentation above may become stale if any of the dependencies have breaking changes. Check the [Running 64- and 32-bit RISC-V Linux on QEMU documentation page](https://risc-v-getting-started-guide.readthedocs.io/en/latest/linux-qemu.html) to see the latest supported versions. If this documentation does not work, be sure to ask in the [linux-riscv](http://lists.infradead.org/pipermail/linux-riscv/) mailing list.

### Build QEMU with the RISC-V target:

```bash
cd qemu  
./configure --target-list=riscv64-softmmu --prefix=/path/to/keep/qemu  
make -j $(nproc)  
make install
```

### Build Linux for the RISC-V target:

```bash
cd linux
make ARCH=riscv CROSS_COMPILE=riscv64-unknown-linux-gnu- defconfig 
make ARCH=riscv CROSS_COMPILE=riscv64-unknown-linux-gnu- -j $(nproc)
```

Make sure to have the prefix of the [cross-compiler](notes/general/cross-compilation.md) match from your toolchain. In the above example, the GCC [compiler](notes/private/work/compilers.md) is `riscv64-unknown-linux-gnu-gcc` so the `CROSS_COMPILE` flag is `riscv64-unknown-linux-gnu-`

### Build the busybox:

```bash
cd busybox
CROSS_COMPILE=riscv64-unknown-linux-gnu- make defconfig 
CROSS_COMPILE=riscv64-unknown-linux-gnu- make -j $(nproc)
```

### To run the Linux image on QEMU, do:

```bash
sudo /path/to/keep/qemu/bin/qemu-system-riscv64 -nographic -machin  
virt   
     -kernel /path/to/linux/image -append "root=/dev/vda ro  
console=ttyS0" \  
     -drive file=busybox,format=raw,id=hd0 \  
     -device virtio-blk-device,drive=hd0
```

### You can also run the bare metal app on QEMU like this:

```
/path/to/keep/qemu/bin/qemu-system-riscv64 -nographic -machine virt  
-kernel /path/to/binary -bios none
```

For additional QEMU configurations for RISC-V, check out the [official documentation](https://wiki.qemu.org/Documentation/Platforms/RISCV). In addition to simulators and emulators, RISC-V applications can be run on virtual machines, as well as commercially available development boards. 

Additional documentation to debug bare metal issues can be found [here](https://embeddedinn.xyz/articles/tutorial/Adding-a-custom-peripheral-to-QEMU/). You can install the RISC-V virtual machine as documented [here](https://wiki.debian.org/RISC-V).

## References
-   [Tech: Toolchain & Runtime Subcommittee mailing list](mailto:tech-toolchain-runtime@lists.riscv.org)
-   [GCC Cross-Compiler](https://wiki.osdev.org/GCC_Cross-Compiler)
-   [](https://en.wikipedia.org/wiki/64-bit_computing#64-bit_data_models)
-   [](https://en.wikipedia.org/wiki/64-bit_computing#64-bit_data_models)
-   [Running 64- and 32-bit RISC-V Linux on QEMU](https://risc-v-getting-started-guide.readthedocs.io/en/latest/linux-qemu.html)
-   [Qemu: Documentation/Platforms/RISCV](https://wiki.qemu.org/Documentation/Platforms/RISCV)
-   [Debian - RISC-V Wiki](https://wiki.debian.org/RISC-V)

### RISC-V Boards: 
The [RISC-V Exchange](https://riscv.org/exchange/) page is a collection of available physical hardware in the RISC-V ecosystem. This list is curated by the community.

### RISC-V Cores:   
The [RISC-V Exchange: Cores & SoCs](https://riscv.org/exchange/cores-socs/) page is a collection of available intellectual property (IP) cores and SoCs in the RISC-V ecosystem.

### Toolchain and other hardware bringup software providers:
-   [RISC-V Software Collaboration](https://github.com/riscv-collab)
-   [sifive/freedom-tools](https://github.com/sifive/freedom-tools/releases)
-   [lowRISC](https://github.com/lowRISC)
-   [stnolting/riscv-gcc-prebuilt](https://github.com/stnolting/riscv-gcc-prebuilt)
-   [SiFive/Software](https://www.sifive.com/software)