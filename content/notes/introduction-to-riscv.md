---
title: "Introduction to RISC-V"
tags:
  - work
  - riscv
programming-languagues:
created: 2022-06-05
---
# Introduction to RISC-V
---

Notes on the [Introduction to RISC-V](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFD110x+1T2021/home) LinuxFoundation course.

* [](notes/introduction-to-riscv.md#Chapter%201%20-%20Getting%20to%20know%20RISC-V|Chapter%201) - Getting to know RISC-V
* [](notes/introduction-to-riscv.md#Chapter%202%20-%20The%20RISC-V%20Story|Chapter%202) - The RISC-V Story
* [](notes/introduction-to-riscv.md#Chapter%203%20-%20The%20RISC-V%20Community|Chapter%203) - The RISC-V Community
* [](notes/introduction-to-riscv.md#Chapter%204%20-%20Developing%20RISC-V|Chapter%204) - Developing RISC-V
* [](notes/introduction-to-riscv.md#Chapter%205%20-%20RISC-V%20In%20Practice|Chapter%205) - RISC-V in Practice

---
## Chapter 1 - Getting to know RISC-V
### Overview
* Difference between RISC-V [ISA](notes/isa.md) and RISC-V international.
* Description of the organisation around the RISC-V community.
* Goals of RISC-V international as a community-driven organisation.

### What is RISC-V?
[RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer) is short for **Reduced Instruction Set Computer** as was designed in the 1980s.

RISC-V can refer to different things:
  - The Instruction Set Architecture ([ISA](notes/isa.md))
  * The community of users and developers who develop and use the [ISA](notes/isa.md).
  * The RISC-V International Association that manages the [ISA](notes/isa.md).
  * The hardware and IP products built on the [ISA](notes/isa.md).

### The RISC-V Community
Everyone shares a common interest in developing an **openly** available instruction set architecture specification and the ecosystem around it, including:

- Physical hardware - processors, development boards, System-on-Chips (SoCs), System-on-Modules (SoMs), and other physical systems
- “Soft” IP processor cores that can be loaded into emulators or onto field-programmable gate array (FPGAs), or written in silicon
- The entire software stack, from boot-loaders and firmware up to full operating systems and applications
- Educational materials, including courseware, curricula, lesson plans, online courses like this one, tutorials, podcasts, lab assignments, even books
- Services, including verification, custom board design, and many more

All of this community output is recognised on the RISC-V Exchange, an organised section on the RISC-V website that describes the ecosystem in terms of available hardware and software, services, learning materials, and discussion points.

### RISC-V Internation
The RISC-V community spans over more than 40 countries and RISC-V international is a Swiss non-profit organisation.

RISC-V international does not produce hardware, they provide the basics for all of its members organisations to create new technology based on the foundational support of the RISC-V [ISA](notes/isa.md).

## Chapter 2 - The RISC-V Story
### Overview
- How the RISC-V Instruction Set Architecture was created.
- The structure of RISC-V international.
- How member organisations work together to develop an open source community.

### How it all started
It started at UC Berkeley Parallel Computing Lab while discussing the importance of open source and open standards.

### Importance of Open Source and Open Standards
Because technology does not persist in isolation - as the world becomes more complex and connected, global standards ensure that society realises the benefits of interoperability from the inventor to the consumer.

[Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) for example led a revolution to standardise the protocols we use on the internet (HTML, URL, HTTP).

Advances in software and hardware standardisation through global collaboration and consensus as well as open source development and delivery has accelerated technical progress at an unprecedented global scale.

As an [ISA](notes/isa.md), RISC-V is not "open source" in the same way as software (as an [ISA](notes/isa.md) is not made of source code). It is an **open specification**.

### History of RISC and Open ISAs
Reduced Instruction Set Computers ([RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer)) where created at the University of California at Berkeley (UCB) nearly at the same time as MIPS at Stanford (in the 1980s).

Some popular RISC architectures are: the SPARC line, DEC's Alpha line, Intel's i860 and i960 processors and ARM processors. **RISC-V is the latest iteration of it**.

### RISC-V Origins: UC Berkeley Architecture Research
The RISC-V instruction set was started by Prof. Krste Asanovic and graduate students Yunsup Lee and Andrew Waterman as part of the Parallel Computing Laboratory ([Par Lab](notes/parlab.md)) at UC Berkeley, of which Prof. David Patterson was Director.

The following report is the **first publication** that describes the RISC-V instruction set: [_The RISC-V Instruction Set Manual_](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2011/EECS-2011-62.pdf).

[DARPA](https://www.darpa.mil/work-with-us/for-universities) (Defense Advanced Research Projects Agency) plays a significant role.

### The RISC-V Name
The name RISC-V was chosen to represent the fifth major RISC [ISA](notes/isa.md) design from UC Berkeley (RISC-I, RISC-II, SOAR and SPUR).

### What is RISC-V International?
The RISC-V Foundation was founded in 2015 and it is controlled by its members.

Incorporation in Switzerland has the effect of calming concerns of political disruption to the open collaboration model. RISC-V international does not maintain any commercial interest in products or services.

The RISC-V International Association was incorporated in Switzerland in March 2020.

### RISC-V Membership
It is free for individual people, academic institutions and non-profit organisations. There are three membership levels available for for-profit organisations.

1. Premier Members
2. Strategic Members
3. Community Organisations
4. Community Individuals

### RISC-V International Governance
RISC-V international is governed by its Board of Directors. The Board is composed of Directors elected to represent all classes of membership to ensure voice at all levels. They also have a Technical Steering Committee (TSC) which provides leadership to technical initiatives.

There is also a range of committees and task groups.

### RISC-V Community Working Model
There are three public forums that anyone can participate:

- The RISC-V public mailing lists: [ISA-Dev](https://groups.google.com/u/1/a/groups.riscv.org/g/isa-dev?pli=1) and [SW-Dev](https://groups.google.com/u/1/a/groups.riscv.org/g/sw-dev).
- The [Exchange forums](https://exchange.riscv.org/).
- The [RISC-V Slack channel](https://risc-v-international.slack.com/) for live chat.

### RISC-V's Relationship with the Linux Foundation
In November 2018 the RISC-V Foundation announced a joint collaboration with the Linux Foundation.

## Chapter 3 - The RISC-V Community
### Overview
-   Understand how the technical organisation works in RISC-V.
-   Know where to go for information as well as communication.
-   Completely understand the RISC-V Code of Conduct and how it applies to all forms of communication within the organisation.

### Culture of Community Engagement
RISC-V operates primarily as a group of motivated organisations and individuals pursuing a common goal by working in concert rather than as adversaries, even if those organisations compete with each other in other areas.

As of February 2021 there are well over 2,000 people working on RISC-V, representing over 230 organisations.

### Intellectual Property Policy
At the core of the RISC-V membership is the [membership agreement](https://riscv.org/wp-content/uploads/2020/03/RISC-V_Membership_Agreement_NFS.pdf).

### Code of Conduct and Privacy
You can find it [here](https://riscv.org/community/community-code-of-conduct/).

RISC-V also follows the [Linux Foundation's privacy policy](https://linuxfoundation.org/privacy/).

### RISC-V's Technical Organisation
Krste Asanovic, Yunsup Lee and Andrew Waterman all participate daily as technical task group and committee chairs as well as mentors to other technical leaders. David Patterson and Krste Asanovic represent member organisations on the Board of Directors.

### Terminology
#### Technical Steering Committee (TSC)
Primary decision-making body within the technical organisation.

#### Chief Technology Office (CTO)
Runs TSC voting process, Leadership Strategy Meeting (LSM) and Chairs meetings, strategy, organisation, IT, roadmap, resources, escalations.

#### ISA Committees (IC)
Approve and oversee packages for TSC votes for the creation of ISA Extension TGs, as well as filling the chair and vice-chair vacancies for its TGs. Develop strategy for the groups under it and complete coverage of areas of responsibility under it including gaps.

#### Horizontal Committees (HC)
Approve and oversee TGs working on activities other than ISA extensions. Has responsibilities to make sure that all ISA TGs cover the area overseen by the HC before ratification. Responsible for developing a holistic strategy and reaching out to the external ecosystem and community groups.

#### **Horizontal Subcommittees (HSC)**
Subcommittees underneath the Horizontal Committees, with similar responsibilities over a more focused topic.

#### **Task Groups (TG)**
Must have a charter that defines deliverable work products: extension specifications, standards, requirements, best practices, etc. TGs under the unpriv and priv SC can have ISA extension work products. TGs under HCs should not have ISA extension work products.

#### **Special Interest Groups (SIG)**
Topic discussion. No work product. Can be created by the TSC, ICs or HCs with TSC approval not required.

#### **Chair & Vice-Chair**
Leadership positions for a committee, task group, or SIG. These positions are generally elected on an annual basis. Chairs are always from member organisations, while vice-chairs may be either Individual members or representing organisations. Chairs and vice-chairs meet weekly to collaborate and discuss organisational details.

### Technical Leadership and Governance
Direct work on the specifications is driven by individual task groups working on specific specifications, software initiatives, testing or compliance frameworks, and many other ongoing projects. This work is organised and directed by technical leadership, and enabled and tracked by RISC-V’s neutral technical staff.

### Technical Steering Committee
The Technical Steering Committee (TSC) provides leadership to our technical initiatives. They are assisted by the Standing Committees, Technical Task Groups, and Special Interest Groups, all of which report to the TSC.

The TSC delegates responsibilities to organisational components below it in the hierarchy of groups. In addition, it discusses and decides on strategy, escalations, group and chair and preliminary charter approvals, and extension ratification.

<center><img src="https://courses.edx.org/images/courseware/v1/018aa36ba6fcc105a26bf62c7b8307a0/asset-v1:LinuxFoundationX+LFD110x+1T2021+type@asset+block/technical_organization__1_.png"></center>
<center><img src="https://courses.edx.org/images/courseware/v1/ca6261ee043dbf7127a39665a81feed4/asset-v1:LinuxFoundationX+LFD110x+1T2021+type@asset+block/technical_organization__2_.png"></center>
<center><img src="https://courses.edx.org/images/courseware/v1/a72d7d1c9a596f5e327dab9c3c640b54/asset-v1:LinuxFoundationX+LFD110x+1T2021+type@asset+block/technical_organization__3_.png"></center>

### ISA and Horizontal Committees and Subcommittees
Committees are responsible for directing work within the scope of their charter. ISA committees - “priv” and “unpriv”, referring to the Privileged and Unprivileged RISC-V specification volumes - direct the creation of specific extensions. **Horizontal committees** - including Software, Security, ISA Infrastructure, SOC Infrastructure, Implementation, and others - are responsible for directing specification work in their areas other than ISA extensions. _All ISA extensions must be signed off by each of the Horizontal committees prior to ratification_.

Horizontal committees sometimes also have subcommittees, particularly for those committees with a very large scope (such as Software). Subcommittees have largely the same responsibilities, although procedural decisions, including decisions on chairs, are made by the primary committee.

### Task Groups
This is where the actual work is done on specifications, software, test frameworks, and other concrete deliverables. Task groups are usually started for a specific purpose, which is then written into their charter and approved by the committee responsible for them. Some task groups finish their work relatively quickly (within 3-6 months) while others work for much longer to make sure the final product is worthy of inclusion.

The chair for each group is responsible for directing the activities, overseeing the creation of the deliverable work product (spec, software, etc.), reporting back to the Committee and the technical organisation on status, and attending a weekly chairs meeting. Vice-chairs share the responsibilities and the effort, but chairs hold the final responsibility for the group. Chairs and vice-chairs are elected by the community and serve 1-year terms between election cycles, although there are no term limits and existing chairs may reapply.

### Technical Staff
#### Chief Technical Officer
The CTO role is vital, as it provides a neutral leadership function that can’t be filled by a member. The CTO takes all members’ needs into account to both instigate and drive organisation and initiatives within the technical hierarchy, and to facilitate negotiation at all levels within working groups, committees, and governance groups. The CTO also creates and seeks approval for organisational policies, and reports technical progress up to the Board of Directors and functions as the neutral voice of the technical community in workshops and public events.

#### Technical Program Managers
This is a catch-all term for experienced individuals who perform all of the operational activities within the project, including everything from running meetings to setting up calendar entries and conference calls to organising technical information and even writing detailed technical policies.

#### Other Technical Staff
While the above roles are the only permanent staff in the technical organisation, RISC-V occasionally hires contractors for specific tasks, including test development and documentation.

### Additional Roles
#### Board of Directors
The Board is the primary decision-making body for RISC-V. As such, it has representation from all members. Premier members each have a seat at the table, while Strategic, Community Organisation, and even Community Individual level members elect representatives each year.

#### Marketing & Visibility
RISC-V has a Director of Marketing who is responsible for driving the visibility of RISC-V worldwide. Working with the Marketing Committee, a member group that provides feedback and resources, the Director of Marketing manages all visibility activities, including the main Marketing Committee, Events, Content (including written, video, and in-person content), social media and PR (supported by an outside firm), and developer advocacy activities including online learning, RISC-V Ambassadors, Regional and Industry Alliances, and the quickly-growing RISC-V user community.

#### Operations & Program Management
Operations include the day-to-day management of member activities - joining RISC-V, onboarding, paying dues, becoming part of the Member Portal, and other member activities - as well as support for all other business functions within RISC-V International.

### RISC-V Wiki
The wiki can be found [here](https://wiki.riscv.org/).

### Public Discussion Groups
Can join discussions and others using links from the [technical page](https://riscv.org/technical/technical-forums/) on the website.

### The RISC-V Exchange
The Exchange contains:

- _Available Boards_ - RISC-V based single board computers (SBCs) both open source hardware and proprietary designs. These range from simple microcontroller boards to complex System on Chip (SoC) designs.
- _Available Cores & SoCs_ - These hardware designs might be open source or proprietary, and may be available for free or for purchase.
- _Available Software_ - Software is available in binary form and in source code form. Licenses stretch across the spectrum from permissive open source to restrictive proprietary licenses.
- _Available Services_ - Many organisations provide services relevant to RISC-V product development, including design, verification, software tooling, and more.
- _Available Learning_ - Books, online courses, curricula and academic materials, and anything else related to learning about RISC-V.

## Chapter 4 - Developing RISC-V
### Overview
- Describe the process used to develop the RISC-V ISA and extensions.
- Differentiate between the RISC-V Base ISAs, Extensions, and Standards.
- Understand the basics of the Unprivileged and Privileged specifications.

### How the RISC-V ISA is Different
The most notable difference between RISC-V and other [ISAs](notes/isa.md) is that RISC-V is developed by a member organisation that is completely free to join and licenses its ISA with permissive open source licenses. This means that anyone can contribute to the specifications, and no one company or group of companies can drive the direction of the standards.

RISC-V International is governed by its Board of Directors. The Board is composed of members elected to represent all classes of membership to ensure we offer a strategic voice at all levels. In addition, the Technical Steering Committee (TSC) provides leadership to our technical initiatives in setting long term strategy, forming tactical committees and work groups, and approving technical deliverables for ratification or release.

### Collaborative Development Model
A RISC-V Specification starts its life as a **Task Group** approved by the Technical Steering Committee (TSC). Once a Task Group has an approved charter, they begin work publicly on GitHub by writing their documents in **AsciiDoc format**. These repositories on GitHub can only receive pull requests from RISC-V International members, however the work is done publicly and transparently. 

For groups who choose to take minutes, those minutes from the Task Group meetings are published publicly as well. The public is free to submit issues to the GitHub repository in order to give early feedback on any specification. Non-ISA specifications and standards (e.g. processor trace, architectural tests, software overlay) are developed in a similar fashion.

RISC-V Specifications live on GitHub and are housed alongside dozens of software projects. See [a list of ratified specifications](https://riscv.org/technical/specifications/) and the links to their GitHub repositories.

### Creating and Curating Open Specifications
The process of writing the specifications is usually led by a Hardware Architect at one of the RISC-V International member organisations. They may not write the actual text, but they act as the chair to the Task Group overseeing the specification’s development. It can take anywhere from several months to more than a year for the group to complete a specification. We will talk about the lifecycle of an extension later in this chapter.

What makes this development process open hinges on three key facts:

1.  The Task Group mailing list is publicly visible.
2.  The specification document is publicly visible and comments can be left.
3.  There is a public mailing list where anyone can send email. (isa-dev@groups.riscv.org)

Using this methodology, even non-members can participate in the development of any specification or standard by asking questions, making suggestions, or simply following along. Furthermore, during the ratification process, there is a 45 day window where all specification work must be frozen and the specification published publicly for review. Anyone is welcome to comment at this time and all issues will be brought to resolution before the vote for ratification happens.

While becoming a member of RISC-V International is the easiest way to contribute to open specifications, it is not the only way. Anyway can contribute by interacting with the Task Groups in public forums like the [mailing list](https://riscv.org/mailing-lists/) and GitHub.

### RISC-V Extensions Lifecycle
Each RISC-V extension goes through several stages on its way to ratification. In this section we will briefly review each stage known as a “milestone”.

1. _Inception_ - RISC-V technical leaders approve pursuing the extension.
2. _Kickoff_ - Leadership approves an “acting chair” to drive the process in a task group. The chair creates a name for a task group, preliminary charter, and deliverables.
3. _Plan_ - The group develops a final charter and sets some timeline estimates.
4. _Experimental Versions_ - The groups releases several versions considered unstable.
5. _Freeze_ - The group produces a complete final draft of the specification with no major unknowns and no expected changes (only to fix issues but no new features).
6. _Ratification Ready_ - The draft specification is sent out for public review, any public comments or questions are addressed, and the Technical Steering Committee is made aware that a vote is required.
7._Complete_ - The extension is ratified and supported as part of the RISC-V ISA.

<center><img src="https://courses.edx.org/images/courseware/v1/e9ec87214f09abf0169226df15e0388d/asset-v1:LinuxFoundationX+LFD110x+1T2021+type@asset+block/Extension_lifecycle_and_milestone_definitions.jpg"></center>

Once an extension has been ratified it is added to either the **Unprivileged** or **Privileged** Specification. Occasionally a specification is created as part of a separate document, with the debug specification being the most common example. However, this is a rare case and usually indicates that the extension is not part of the [ISA](notes/isa.md), but rather a “standard” or “non-ISA specification”. We will now review the Unprivileged and Privileged Specification in greater detail.

### Organising the Specifications
The RISC-V [ISA](notes/isa.md) is broken up into two parts:

-   Volume 1, Unprivileged Specification
-   Volume 2, Privileged Specification

To understand why the specification is broken up into two different parts, we must first understand a bit about computer architecture and security. Historically, processors used hierarchical protection domains, often called protection rings, to protect data and code from malicious actors.

<center><img src="https://courses.edx.org/images/courseware/v1/a747ba9c1697a0bea78672847048eed5/asset-v1:LinuxFoundationX+LFD110x+1T2021+type@asset+block/Privilege_rings_for_the_x86__along_with_their_common_uses.png"></center>
The most privileged code runs in “Ring 0” and has access to the entire system. The processor will decide which privileges to grant executing code based on the privilege level. As an example, accessing memory by physical address may be restricted to “Ring 0” such that other rings must reference the virtual address space. Typically the processor can run in only one of the privilege modes at a time and there are special instructions to move between modes. All of these details can change from system to system, however they must follow the rules set out in the specification documents of a given architecture.

RISC-V currently has three privilege levels: **User Mode** (U-mode), **Supervisor Mode** (S-mode), and **Machine Mode** (M-mode). One can think of these as “Ring 2”, “Ring 1”, and “Ring 0” respectively. Other modes like a hypervisor mode (H-mode) will likely be added in the near future. Much like in the figure above, U-mode is for user processes, S-mode is for kernel and/or device drivers, and M-mode is used for bootloader and/or firmware. Each privilege level has access to specific _Control and Status Registers_ (CSRs), and higher privilege levels can access the CSRs of those less privileged levels.

### Inside the Unprivileged Specification
Simply put, the unprivileged specification details items that are not related to machine mode (M-mode) or to Supervisor Mode (S-mode). The unprivileged specification includes the base ISA as well as extensions to that base like integer (I), float (F), double (D), compressed instructions (C), and many more.

The base instruction sets describe the instruction format, basic integer instructions, load and store instructions, and other fundamental details of the ISA. We break these up into several bases:

1.  RV32I - Integer 32 bit
2.  RV32E - Reduced RV32I for embedded purposes
3.  RV64I - Integer 64 bit
4.  RV128I - Integer 128 bit

All these “Base ISA’s” either reduce or extend off the RV32I base instruction set. As an example, RV64I widens the integer registers and the supported user address space to 64 bits. This means that the LOAD and STORE instructions work a bit differently than in RV32I and the unprivileged specification contains the chapter explaining these differences.

### Base ISA Extensions
The unprivileged specification also contains the descriptions of the extensions to these base ISAs. Again, any extension that does note require M-mode to operate can be described in the unprivileged specification.

Each extension to the base ISA is developed and maintained by a Task Group:

-   _Crypto Task Group_ working on cryptographic extensions which can move many complex cryptographic algorithms into hardware, improving reliability and speed.
-   _B Extension Task Group_ working on bit manipulation extensions which can speed up many common mathematical tasks.
-   _Vector (V) Extension Task Group_ working on vector instructions which are at the heart of many graphical processing computations.

Once ratified, these extensions are added to the unprivileged specification. The following are some of the ratified extensions that you might see in a RISC-V processor:

#### “M” Standard Extension
Chapter 7 of the [Unprivileged Specification](https://riscv.org/technical/specifications/) describes how integer multiplication and division should be accomplished. It describes how each of the multiplication instructions (MUL, MULH, MULHU, MULHU, MULW) will behave, which registers are used for the multiplier and multiplicand, and where the result will be stored. It does the same for division since functionally one can view division as simply the inverse of multiplication. It may seem odd to you that this extension is not required. However, for many embedded processors, multiplication can be done in software if it is not required very often or even at all. Removing this logic from a processor will save money on development, keeping the end product cost lower.

#### **“F” Standard Extension**
Chapter 11 describes how we add single-precision floating-point computational instructions that are compliant with the IEEE 754-2008 arithmetic standard. There are many resources available covering the details of floating-point arithmetic in computing. It is enough to understand that this chapter describes how this process is implemented in RISC-V, and is complimented by Chapter 12 (the D extension) which describes double-precision floating-point computational instructions. Lastly, Chapter 13 covers the Q standard extension for 128-bit quad-precision binary floating-point instructions. All three of these conform to IEEE standards. Again, many embedded applications do not require floating point logic, and hence this extension is not part of the Base ISAs.

#### **“C” Standard Extension**
Chapter 16 describes the compressed instruction-set extension which reduces static and dynamic code size by adding short 16-bit instruction encodings for common operations. Typically, 50%–60% of the RISC-V instructions in a program can be replaced with RVC instructions, resulting in a 25%–30% code-size reduction. The C extension is compatible with all other standard instruction extensions. The C extension allows 16-bit instructions to be freely intermixed with 32-bit instructions, with the latter able to start on any 16-bit boundary. As such, with the addition of the C extension to any system, no instructions can raise instruction-address-misaligned exceptions.

This covers most of the currently ratified extensions in the unprivileged specification. However, it is important to note that many extensions are included in the specification in a “draft” or “frozen” stage. As we discussed in the section on “[](notes/introduction-to-riscv.md#RISC-V%20Extensions%20Lifecycle|RISC-V%20Extension%20Lifecycle)”, these specifications are not yet ratified and any implementation should avoid using them in production.

### The Privileged Specification
As its name suggests, the privileged specification contains descriptions of the RISC-V [ISA](notes/isa.md) which operate in Machine Mode (M-mode) or Supervisor Mode (S-mode). These modes have elevated privileges and are therefore described in a completely separate document from the base [ISA](notes/isa.md) and standard extensions. This specification also contains additional functionality required for running rich operating systems like Linux.

The first part of each chapter of the privileged specification details the Control and Status Registers (CSRs) which are only accessible from M-mode and S-mode. We will not cover these details here, but will rather focus on other details specific to these two modes.

### Machine-Level (M-Mode) ISA
M-mode is used for low-level access to a hardware platform and is the first mode entered at reset, when the processor finishes initialising and is ready to execute code.

M-mode can also be used to implement features that are too difficult or expensive to implement in hardware directly. A good example of this would be a watchdog timer implemented in low level software (firmware) which helps the system recover from faults.

### Non-Maskable Interrupts (NMIs)
Non-maskable interrupts (NMIs) are only used for hardware error conditions. When fired, they cause an immediate jump to an NMI handler running in M-mode, regardless of how that hardware thread has its interrupt enable bit set. In other words, that interrupt will be serviced without a way to block the service in configuration. 

Each NMI will have a “mcause” register associated with it. This allows implementations to decide how they wish to handle these interrupts and allows them to define many possible causes. NMIs do not reset processor state which enables diagnosis, reporting, and possible containment of the hardware error.

### Physical Memory Attributes (PMA)
The physical memory map for a system includes address ranges like: memory regions, memory-mapped control registers, and empty holes in the address space. Some memory regions might not support reads, writes, or execution; some might not support subword or subblock accesses; some might not support atomic operations; and some might not support cache coherence or might have different memory models. In RISC-V systems, these properties and capabilities of each region of the machine’s physical address space are termed physical memory attributes (PMAs).

The PMAs of some memory regions are fixed at chip design time—for example, for an on-chip ROM. Others are fixed at board design time, depending, for example, on which other chips are connected to off-chip buses. Some devices might be configurable at run time to support different uses that imply different PMAs—for example, an on-chip scratchpad RAM might be cached privately by one core in one end-application, or accessed as a shared non-cached memory in another end-application. Most systems will require that at least some PMAs are dynamically checked in hardware later in the execution pipeline after the physical address is known, as some operations will not be supported at all physical memory addresses, and some operations require knowing the current setting of a configurable PMA attribute.

For RISC-V, we separate out specification and checking of PMAs into a separate hardware structure, the “PMA checker”. In many cases, the attributes are known at system design time for each physical address region, and can be hardwired into the PMA checker. Where the attributes are run-time configurable, platform-specific memory-mapped control registers can be provided to specify these attributes at a granularity appropriate to each region on the platform (e.g., for an on-chip static random-access memory (SRAM) that can be flexibly divided between cacheable and uncacheable uses).

The details of PMAs could easily take up an entire chapter of this course. We will not cover memory-ordering PMAs, idempotency PMAs, coherence PMAs, or cacheability PMAs. The details of PMAs are described in detail in section 3.5 of the [Privileged Specification](https://riscv.org/technical/specifications/). Advanced users may want to review this section.

### Physical Memory Protection (PMP)
A common feature of most modern processors is some way of performing secure remote computation or a “trusted execution environment”. Examples of this technology include Intel Software Guard Extensions (SGX), AMD Secure Encrypted Virtualization (SEV), and Arm TrustZone. While the RISC-V ISA does not provide an end-to-end solution for Trusted Execution Environments, the physical memory protection (PMP) capabilities are a solid foundation on which one might construct such a system.

RISC-V PMP limits the physical addresses accessible by software running on a hart (hardware thread). An optional PMP unit provides per-hart machine-mode control registers to allow physical memory access privileges (read, write, execute) to be specified for each physical memory region. The PMP values are checked in parallel with the PMA checks we covered in the last section. The granularity of PMP access control settings are platform-specific and within a platform may vary by physical memory region, but the standard PMP encoding supports regions as small as four bytes. Certain regions’ privileges can be hardwired—for example, some regions might only ever be visible in machine mode but in no lower-privilege layers.

PMP entries are described by an 8-bit configuration register and one 32 (or 64) bit address register. Up to 16 PMP entries are supported. If any PMP entries are implemented, then all PMP CSRs must be implemented, but any PMP CSR fields may be hardwired to zero. PMP CSRs are only accessible to M-mode.

<center><img src="https://courses.edx.org/images/courseware/v1/2bc57c54106ee5b9e0462510442bf21c/asset-v1:LinuxFoundationX+LFD110x+1T2021+type@asset+block/Example_illustrating_how_to_set_up_two_different_contexts__one_untrusted_and_one_with_access_to_Enclave_E1.png"></center>
Source: By Lee, D., Kohlbrenner, D., Shinde, S., Song, D., & Asanovic, K. (2019). Keystone: A Framework for Architecting TEEs. _CoRR, vol. abs/1907.10119_ [http://arxiv.org/abs/1907.10119](https://arxiv.org/abs/1907.10119).

Here we see an example of how one might set up two different contexts, one untrusted and one with access to “Enclave E1”. In this example an application is run in user context U1. That application only has access to its own memory and the memory inside enclave E1. The memory inside enclave E2 and that located in the “security monitor” (SM) are not available to the user application. In this way, data confidentiality is assured simply by allowing the security monitor (running in M-mode) to change the PMP settings allowing or denying access to memory regions based on the PMP configurations.

### Supervisor-Level (S-Mode) ISA
This chapter describes the RISC-V supervisor-level architecture, which contains a common core that is used with various supervisor-level address translation and protection schemes. Supervisor mode is deliberately restricted in terms of interactions with underlying physical hardware, such as physical memory and device interrupts, to support clean virtualisation. In this spirit, certain supervisor-level facilities, including requests for timer and interprocessor interrupts, are provided by implementation-specific mechanisms. In some systems, a supervisor execution environment (SEE) provides these facilities in a manner specified by a supervisor binary interface (SBI). Other systems supply these facilities directly, through some other implementation-defined mechanism.

RISC-V supports Page-Based 32-bit, 39-bit, and 48-bit virtual memory addressing. The supervisor (S-Mode) memory-management fence instruction (SFENCE.VMA) is used to synchronise updates to in-memory memory-management data structures with current execution. Executing this instruction guarantees that any previous stores already visible to the current RISC-V hart (hardware thread) are ordered before all subsequent implicit references from that hart to the memory-management data structures.

Virtual Memory is a concept which takes several months of graduate level education to grasp and is beyond the scope of this course. It is enough for this course that you understand that RISC-V supports Page-Based virtual memory of several widths, and that there is a special S-Mode instruction used for synchronising updates between hardware threads.

### Non-ISA Specifications
Task Groups can also work on software or standards that are not part of the [ISA](notes/isa.md). For example, the following groups work on projects that do not lead to specifications being written, but rather standards that encourage communities to develop their products around a common framework:

-   _Debug Task Group_ working on external debugging support and standards.
-   _Compliance Task Group_ working on RISC-V ISA compliance tests and frameworks.
-   _Configuration Structure Task Group_ working on how to represent the configuration structure of a given hardware implementation both in a human-readable format, as well as a binary format.

## Chapter 5 - RISC-V In Practice
### Overview
-   Understand how to emulate a simple Linux system using QEMU.
-   Write a simple “Hello World” program in RISC-V 64 bit assembly language.
-   Compile and run a RISC-V application in emulation.

### Required Documentation
First off, Chapter 2 of the RISC-V [](notes/introduction-to-riscv.md#Inside%20the%20Unprivileged%20Specification|Unprivileged%20Specification) goes into detail about the RV32I Base Integer Instruction Set, including a programming model and an explanation of instruction formats. While this information is not required for this course it is certainly helpful in understanding how the RISC-V architecture executes instructions.

For programming assembly instructions, we can use both the ABI reference documentation and the ASM manual to answer any questions we may have along the way. You can find those documents here:

-   [RISC-V Specifications](https://riscv.org/technical/specifications/)
-   [ABI Documentation](https://github.com/riscv/riscv-elf-psabi-doc/blob/master/riscv-elf.md)
-   [ASM Manual](https://github.com/riscv/riscv-asm-manual/blob/master/riscv-asm.md)

Again, none of this information is required knowledge for this chapter, but you can reference it if you have any questions not answered here.

### Assembly Language Overview
This chapter will be a very high level overview of RISC-V assembly instructions and will only cover a few of those instructions in practice. The hope is that this tutorial will give you the tools you need to continue your journey programming assembly language. If your goal is simply to understand the basics and develop applications in a higher level language, this course will likely cover most of the information you need.

RISC-V is a “reduced instruction set” architecture, and as such, there are not many instructions to learn. In this tutorial, we only use 3 instructions: `LA` (load absolute address), `ADDI` (add immediate), and `ECALL`. The `ECALL` instruction is used to make a service request to the execution environment. We will only use two calls in our Hello World app, one to “write” and one to “exit”.

For a full list of instructions you can see the [Unprivileged Specification Chapter 24 "RV32/64G Instruction Set Listings"](https://riscv.org/wp-content/uploads/2019/12/riscv-spec-20191213.pdf#129).  For more information, visit [RISC-V website](https://riscv.org/community/learn/).

### Compiling Required Binaries
Instructions for compiling required binaries can be found in the _["RISC-V - Getting Started Guide"](https://risc-v-getting-started-guide.readthedocs.io/en/latest/linux-qemu.html)_.

### Creating a Custom RISC-V System
If you are already comfortable with compiling the Linux kernel, QEMU, and software suites like BusyBox, you may want to take things a step further. There is a build system for creating Linux based root file systems and emulating them called the Yocto Project. RISC-V has a “layer” which can be used to create a completely custom Linux distribution. For more details see [meta-riscv](https://github.com/riscv/meta-riscv) on GitHub.

### Environment Overview
The hello world application we will be using:

```assembly
# Simple RISC-V Hello World

.global _start

_start: addi x0, x0, 1
        la   a1, helloworld
        addi a2, x0, 13
        addi a7, x0, 64
        ecall

        addi a0, x0, 0
        addi a7, x0, 93
        ecall

.data
helloworld:    .ascii "Hello World!\n"
```

There are also two ways of compiling this code, either using GCC or calling “as” and “ld” directly:

```bash
# GCC  
riscv64-linux-gnu-gcc -o rv-hello rv-hello.s -nostdlib -static
```
```bash
# AS & LD  
riscv64-linux-gnu-as -march=rv64imac -o rv-hello.o rv-hello.s  
riscv64-linux-gnu-ld -o rv-hello rv-hello.o
```

---
## More information
- [riscv.org](https://riscv.org/)
- [Benefits of open instructions.](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2014/EECS-2014-146.pdf)
- [RISC-V Genealogy](https://riscv.org/technical/specifications/risc-v-genealogy/)