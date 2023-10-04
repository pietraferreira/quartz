---
title:  "Design and Implementation"
tags:
  - university
module: cs3004
lecturer: ST
created: 2023-10-04
year: '3'
type: lecture
---
---
# Learning Outcomes
- To define the basics of client-server communication.

# Client-Server
- Client-Server programs consist of software processes that interact via messages.
- Each process is connected via program constructs (sockets) to an input/output interface in a computer called a "port".
- A **port** is a memory location shared with network software (actually more complex than this).
- Software on the other side of the port makes sure that the message you send gets there (**TCP/IP**).
- Java package `java.net` is the Java version of the **socket API**.

## Sockets
There are four possible operations that a socket can perform:
- Connect to a remote machine.
- Send data.
- Receive data.
- Close the connection.

A socket may not be connected to more than a host at a time.

A socket may not reconnect after it is closed (you have to start again).

## Connecting
- You must at least specify the remote host and port to connect to.
- The host may be specified as either a string, like `xxx.brunel.ac.uk` or as an **InetAddress** object.

# Different Systems
![[notes/images/Screenshot 2023-10-04 at 19.35.05.png|400]]  ![[notes/images/Screenshot 2023-10-04 at 19.35.31.png|400]]

![[notes/images/Screenshot 2023-10-04 at 19.35.53.png]]

# Message Passing Protocols
![[notes/images/Screenshot 2023-10-04 at 19.36.24.png|400]]  ![[notes/images/Screenshot 2023-10-04 at 19.36.36.png|400]]

We can represent in a table:
![[notes/images/Screenshot 2023-10-04 at 19.36.57.png]]

## What really happens
![[notes/images/Screenshot 2023-10-04 at 19.38.36.png]]

# Example

Text based protocol that asks someone for 50p:

![[notes/images/Screenshot 2023-10-04 at 19.37.22.png]]

![[notes/images/Screenshot 2023-10-04 at 19.37.34.png]]

![[notes/images/Screenshot 2023-10-04 at 19.37.43.png]]

Simultaneously:

![[notes/images/Screenshot 2023-10-04 at 19.37.54.png]]
# Reading
This is very general and lots of support material can be found on the web – basically you are looking for socket programming in Java.

- Try:
- download.oracle.com/javase/tutorial/networking/sockets/index.html
- www.cafeaulait.org/slides/sd2003west/sockets/Java_Socket_Programming.html
- http://en.wikipedia.org/wiki/Berkeley_sockets