---
title: "Endianness"
tags:
  - cs/hacking
  - cs/hacking/htb
programming-languagues:
created: 2022-07-12
---
This is part of a guide that you can find [here](notes/hacking/htb-stack-based-overflow-linux.md).

Bytes are loaded in different order, called **endianness**.

- **Big-endian**: the digits with the highest valence are initially.
- **Little-endian**: the digits with lowest valence are beginning.

Mainframe processors use the **big-endian** format, some RISC architectures, minicomputers and TCP/IP also tend to use **big-endian**.

-   Address: `0xffff0000`
-   Word: `\xAA\xBB\xCC\xDD`

| **Memory Address** | **0xffff0000** | **0xffff0001** | **0xffff0002** | **0xffff0003** |
| --- | --- | --- | --- | --- |
| Big-Endian | AA | BB | CC | DD |
| Little-Endian | DD | CC | BB | AA |