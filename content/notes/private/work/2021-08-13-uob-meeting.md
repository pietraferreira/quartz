---
title:  "University of Bologna Meeting"
tags:
  - work/meeting
  - work/report
  - work
programming-languagues:
created: 2021-08-13
---
# University of Bologna Meeting

They seem to be working on Immediate Branching

I reported that we finished all testing

Just Nazareno showed up. He finalised all the pulls request for load/store and
immediate branch extensions. Now someone can review all the pull requests.

Regarding the other main activity, which is the support of standard lib
functions in Pulp-SDK in other to use the standard function on GV sock. They
implemented at least the allocation and reallocation and allocation with memset
to 0, so calloc, malloc, realloc functions.

Jeremy: sbrk and write are what matters when testing Newlib and GCC.

The starting of this activity they wanted to implement a function using
integrating the equal in GV Sock, but after 2 days of work they decided to move
to integrating their own version of the SDK(?). The allocation works but now
they have to implement and support the string functions.

What they want to do for PULP is restore a model to support the eCall when
the ISS gets an eCall. There is a function to execute the eCall but it wasn't
very supported, so it is a work in progress. They want to restore this model
in order to support the eCall but probably it will take more than one or two
days, so at the moment they changed their plan and they are going to integrate
their own version of sbrk.

Semi hosting, when you are operating a simulation on a debug, if someone says
WRITE for example. Typically when you are debugging the debugger traps and plays
it out on the console you have the debugger. This is called TargetIO or HostIO
in GDB. For that to work, when debugging, the simulator needs to be able to
tell GDB "Ive done something that will need the hardware". So to control
hardware you need to be in Supervisor mode as you don't want users to control it
just hte OS. So to get there you need a trap, and within RISCV we have something
called EQUAL which is like an internal interrupt. eCall drop into the debugger.

He's got 2 pull requests to be reviewed.

Jeremy: they need to figure out how to do WRITE

The equivalent of eCall on ARM the debugger doesn't let you trap. So ARM compiles
a special version of the library. In simulation they put a magic sequence of
instructions (nop, break, nop). When we hit the break it will be trapped, but then
the debugger looks at the instruction before and after and check if they are
the magic nops. If they are, then it knows it is not a break but a eCall. This
is called semi hosting, HostIO.