---
title:  "Queue"
tags:
  - cs-concept
  - lists
programming-languagues:
module:
  - cs2004
term:
  - first
last-edited:
created: 2022-10-24
---
# Queue
- First in, last out (**FIFO**), double linked [list](notes/general/lists.md) works well.
    - Think of a standard queue, for example at the bank.
    - The add and remove operations are called **enqueue** and **dequeue**.

Items are inserted at one end (rear) and deleted at the other end (the front).

We use `ENQUEUE` for insertion and `DEQUEUE` for deletion.

![Screenshot 2022-10-24 at 12.19.23](notes/images/Screenshot%202022-10-24%20at%2012.19.23.png)

## Applications
- Applications with a single resource that you are trying to share  
- Printer queues  
- Email message queues  
- Processor queues