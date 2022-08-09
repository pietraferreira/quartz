---
title: "2022-06-27"
tags:
  - daily
  - vms
programming-languagues:
created: 2022-06-27
---
# 2022-06-27
---
## React Game of Life ([Here](https://www.freecodecamp.org/news/create-gameoflife-with-react-in-one-hour-8e686a410174))

`npm init react-app react-gameoflife`

## HackTheBox
### Setting Up
- Can track commands on the terminal by doing:

```bash
script <name>.log
...COMMANDS...
exit
```

- Output redirection:

```bash
./custom-tool.py 10.129.28.119 > logs.custom-tool
```

```bash
./custom-tool.py 10.129.28.119 | tee -a logs.custom-tool
```

#### Benefits of VM's
1. Applications and services of a VM do not interfere with each other.
2. Complete independence of the guest system from the host system's operating system and the underlying physical hardware.
3. VMs can be moved or cloned to other systems by simple copying.
4. Hardware resources can be dynamically allocated via the hypervisor.
5. Better and more efficient utilisation of existing hardware resources.
6. Shorter provisioning times for systems and applications.
7. Simplified management of virtual systems.
8. Higher availability of VMs due to independence from physical resources.

| Virtual Machine                                                    | Container                                                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Contain applications and the complete operating system             | Contain applications and only the necessary operating system components such as libraries and binaries |
| A hypervisor such as VMware ESXi provides virtualisation           | The operating system with the container engine provides its own virtualisation                         |
| Multiple VMs run in isolation from each other on a physical server | Several containers run isolated from each other on one operating system                                |