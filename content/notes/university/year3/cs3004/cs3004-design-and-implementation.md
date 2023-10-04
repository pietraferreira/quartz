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
- The port should be an int **between 1 and 65535**.
- You cannot just connect to any port on any host, the remote host must actually be listening for connections on that port.
- You can use the constructors to determine which ports on a host are listening for connections.

- Sending and receiving operations are implemented via the socket interface (connected to a port).
    - Sending is usually **asynchronous**.
    - Receiving is usually **synchronous**.

![[notes/images/Screenshot 2023-10-04 at 19.52.46.png]] ![[notes/images/Screenshot 2023-10-04 at 19.53.25.png]]

## Protocols
- Client and server.
- Tend to send, receive, send, receive, etc.
- Special instructions using Socket API.
- Can however just send, send, send but the server needs to receive, receive, receive.

## Servers
- Sockets connect clients and servers.
- Servers wait for a client to connect to it.
- A server uses a **Server Socket**.
- A server socket binds to a particular port on the local machine and waits (listens).
- When a server detects a connection attempt, it *accepts* the connection.
    - This allows the client and server to communicate.

## Multiple Clients
- Several clients can connect to the same port on the server at the same time.
- Incoming data is distinguished by the port to which it is addressed and the client host and port from which it came.
- Incoming connections are stored in a queue until the server can accept them.
- Once the queue fills up, further incoming connections are refused until space in the queue opens up.

## Internet Services Approach
- Each service has a port number that if you connect to (via a socket) you access the service.
- Most are text based.

![[notes/images/Screenshot 2023-10-04 at 19.57.15.png]]

### HTTP Request Message
![[notes/images/Screenshot 2023-10-04 at 19.57.36.png]]

### HTTP Reply Message
![[notes/images/Screenshot 2023-10-04 at 19.58.06.png]]

### Sockets and Ports
![[notes/images/Screenshot 2023-10-04 at 19.58.25.png]]

## Other Network Services and Protocols
- Two types:
    - Connectionless (UDP)
    - Connection-oriented (TCP)
    
- echo 7/tcp
- echo 7/udp
- ftp 21/tcp
- telnet 23/tcp
- smtp 25/tcp
- whois 43/tcp
- finger 79/tcp
- http 80/tcp

## Processes
They communicate with other processes via sockets connected to ports onto the internetworking layers and then onto a network.

![[notes/images/Screenshot 2023-10-04 at 20.00.01.png]]

## Berkley Socket API
- `socket()`:
    - creates a new socket of a certain socket type, identified by an integer number, and allocates system resources to it.
- `bind()`:
    - is typically used on the server side, and associates a socket with a socket address structure, i.e. a specified local port number and IP address.
- `listen()`:
    - is used on the server side, and causes a bound TCP socket to enter listening state.
- `connect()`:
    - is used on the client side, and assigns a free local port number to a socket. In case of a TCP socket, it causes an attempt to establish a new TCP connection.
- `accept()`:
    - is used on the server side. It accepts a received incoming attempt to create a new TCP connection from the remote client, and creates a new socket associated with the socket address pair of this connection.
- `send()` and `recv()`, or `write()` and `read()`, or `sendto()` and `recvfrom()`:
    - are used for sending and receiving data to/from a remote socket.
- `close()`:
    - causes the system to release resources allocated to a socket. In case of TCP, the connection is terminated.
- `gethostbyname()` and `gethostbyaddr()`:
    - are used to resolve host names and addresses. IPv4 only.
- `select()`:
    - is used to pend, waiting for one or more of a provided list of sockets to be ready to read, ready to write, or that have errors.
- `poll()`:
    - is used to check on the state of a socket in a set of sockets. The set can be tested to see if any socket can be written to, read from or if an error occurred.
- `getsockopt()`:
    - is used to retrieve the current value of a particular socket option for the specified socket.
- `setsockopt()`:
    - is used to set a particular socket option for the specified socket.

# A "Client" Program
- It is a template that you can use to connect to any server on any machine.
- Need to be aware of the socket number and the machine address or name.

![[notes/images/Screenshot 2023-10-04 at 20.05.05.png]]

![[notes/images/Screenshot 2023-10-04 at 20.05.15.png]]

# EchoServer Network Application
Simple client-server program that sends and receives (echos) from client to the server.

![[notes/images/Screenshot 2023-10-04 at 20.05.44.png]]

```java
//echoserver
WHILE NOT TERMINATED
    RECEIVE messageX from echoClient
    SEND messageX to echoClient
ENDWHILE
```

```java
//echoclient
WHILE NOT TERMINATED
    READ messageX FROM user
    SEND messageX TO echoServer
    RECEIVE messageX FROM echoServer
    PRINT messageX
ENDWHILE
```

# Single Client Knock, Knock
![[notes/images/Screenshot 2023-10-04 at 20.07.16.png]]

```java
// KKClient
WHILE NOT TERMINATED
    #C3 RECEIVE “Knock Knock” FROM KKSERVER
    #C1 SEND “Who’s there?” TO KKSERVER
    RECEIVE message FROM KKSERVER
    IF message = “You are supposed to say “Who’s there?”” THEN
        GOTO #C1
    ELSE
        [message is First_part_of_joke]
        #C2 SEND First_part_of_joke + “who?” TO KKSERVER
    ENDIF
    RECEIVE message FROM KKSERVER
    IF message = “You are supposed to say Joke+“Who?” THEN
        GOTO #C2
    ELSE
        [message is answer + “Would you like another go?”]
        IF YES THEN
            SEND “y” TO KKSERVER
            GOTO #C3
        ELSE
            SEND “n” to KKSERVER
        ENDIF
    ENDIF
    [Terminate]
ENDWHILE
```

```java
// KKServer
[accept KKClient connection]
WHILE NOT TERMINATED
    #S1 SEND “Knock Knock” TO KKCLIENT
    RECEIVE message FROM KKCLIENT
    IF message = “Who’s there?” THEN
        [Select first part of joke]
        SEND First_part_of_joke TO KKCLIENT
    ELSE
        SEND “You are supposed to say “Who’s there?”” TO KKCLIENT
    ENDIF
    RECEIVE message FROM KKCLIENT
    IF message = First_part_of_joke + “who?” THEN
        [Select answer]
        SEND answer + “Would you like another go?” TO KKCLIENT
    ELSE
        SEND “You are supposed to say Joke+Who?” TO KKCLIENT
    ENDIF
    RECEIVE message FROM KKCLIENT
    IF message = “y” THEN
        GOTO #S1
    ENDIF
    [message is “n”]
    [Terminate]
ENDWHILE
```

# Multi-Client Knock, Knock
![[notes/images/Screenshot 2023-10-04 at 20.10.06.png]]

```
kkmserver
create a serversocket object and connect it to port 4444
while not terminated
    wait for a client to connect
    make the connection and start a new thread of execution using kkmsthread
endwhile

kkmsthread
begin
    perform the same tasks as the original kkserver
end
```

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