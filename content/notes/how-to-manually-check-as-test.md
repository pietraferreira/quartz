---
title: "How to Manually Check a Test"
tags:
  - work
  - help
  - cobra
programming-languagues:
  - assembly
created: 2022-07-27
---
# How to Manually Check a Test
---
Instruction listing:

![[notes/images/Pasted image 20220727125733.png]]
![[notes/images/Pasted image 20220727125701.png]]

So we have:

```bash
011u uurr ruud dd00
```

For example, if we want to test:

```assembly
flw fa0, 100(a0)
```

It decompiles to:

```assembly
4:	7168                	c.flw	fa0,100(a0)
```

Here we have the register encoding for compressed instructions:

![[notes/images/Pasted image 20220727130200.png]]

100 in binary is `0110 0100`, where:

|  7  | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 1   | 0   | 0   | 1   | 0   | 0   |

We will first use bits 5 to 3, then 2 followed by 6 as you can see in the encoding.

So the final encoding would look like this:

```bash
011u uurr ruud dd00

u = 0110 0100
r = 010
d = 010

0111 0001 0110 1000
```

Which in hex is: 7168 - matching exactly the decoding.