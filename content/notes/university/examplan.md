---
title: "Exam Revision Plan"
tags:
  - university
  - exam
last-edited:
created: 2023-04-27
---
---
- [Exam timetable](https://intra.brunel.ac.uk/Exam.aspx):

![](notes/images/Screenshot%202023-04-27%20at%2009.06.27.png)

---
- [CS2003 Usability Engineering (04/05)](notes/university/cs2003-exam.md)
---
# Software Development and Management (10/05)

- [Moodle environment](http://moodle.uml.ac.at/moodle/login/index.php).
- [Lectures](https://brightspace.brunel.ac.uk/d2l/common/dialogs/quickLink/quickLink.d2l?ou=28488&type=lti&rcode=339B4F8A-E47B-4026-A41B-4BD5BFF27ADC-13330&srcou=6606&launchFramed=1&framedName=Panopto).

Best way to revise:
- Moodle.
- Use the book:
    - Chapter 3 to 7.
- Watch professor Stephen lectures as they are not in the book, 5 questions are related to this. Software Process lecture 10.

50 multiple choice questions, with only one correct answer.

---
# Networks and Operating Systems

- 4 questions.
- An answer should be around 500 to 800 words.

## Study Plan (by ChatGPT)
---
### Day 1: Computer Networks
- [ ] Chapter 1: sections 1.1.1, 1.1.2, 1.1.3, 1.5
- Chapter 2: sections 2.1, 2.2, 2.3, 2.7

### Day 2: Computer Networks
- Chapter 3: sections 3.1, 3.2, 3.3, 3.5, 3.7
- Chapter 4: sections 4.1.1, 4.2.1, 4.3, 4.3.1, 4.3.2, 4.3.3, 4.3.5

### Day 3: Computer Networks
- Chapter 5: section 5.2

### Day 4: Operating Systems Concepts
- Chapter 2: sections 2.1, 2.2, 2.3, 2.4, 2.5
- Chapter 3: sections 3.1, 3.2

### Day 5: Operating Systems Concepts
- Chapter 3: sections 3.6.2, 3.6.3
- Chapter 4: section 4.1

### Day 6: Operating Systems Concepts
- Chapter 5: sections 5.1, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8

## Question 1
---
- Questions 1 is a short answer about anything.

### Example questions:  
1. Which two of the OSI model’s layers are NOT included in the TCP/IP stack?  
2. The Internet Standards are described in formal documents. What are these documents called?  
3. What is the interface between a process and the network?  
4. Complete the phrase: “The Transport layer provides logical communication between ...“  
5. Is a “link state” routing algorithm centralised or decentralised?  
6. Memory can be dynamically allocated to a process during runtime. What is it called?  
7. Does a thread share its code section with other threads belonging to the same process?  
8. In which part of its code can a process change shared variables?  
9. Is Trojan Horse an example of program threat?  
10. For the screenshot of Wireshark examining HTTP behaviour, what are the IP address and port number of the client host?

![](notes/images/Screenshot%202023-04-27%20at%2009.18.01.png)

## Question 2
---
- Short essay.

- Topics:
    - Application layer (incl. Distributed Systems)  
    - Transport layer  
    - Network layer

### Example questions:
- Answer the questions below. Use examples to illustrate your answers:
1. Discuss how two processes communicate over a network. Include in your answer the role of Sockets, Ports, IP Addresses and what is required from Transport Services available to Applications.  

2. Define Multiplexing and Demultiplexing in the Transport Layer. Discuss how Transport Layer segments are sent and received in connectionless and connection-oriented protocols.

### Networks revision topics
- Internet components & services (hosts, protocols, RFCs, IETF, ...)  
- Protocol layers (OSI, TCP/IP)  
- Main principles of network applications (client-server, P2P, message exchange, IP addresses, sockets, port numbers, data integrity, throughput, ...)  
- Web services (HTTP, messages, request, response, headers, ...)
- Electronic mail over the Internet (user agent, mail server, SMTP, POP3, IMAP, HTTP, ...)  
- How processes communicate (messages, sockets, port numbers, IP addresses, ...)  
- Transport services (mux/demux, reliable data transfer, flow control, congestion control, ...)  
- TCP, UDP
- Segment structure (port #, seq, ack numbers, receive window, ...)  
- Forwarding/routing  
- Routing algorithms  
- Router components  
- IPv4 & IPv6 datagram  
- IPv4 addressing  
- Fragmentation / reassembly

## Question 3
---
- Short essay.

- Topics:
    - Operating Systems Structures  
    - Processes  
    - Threads  
    - Synchronisation

### Example questions:
- Answer the questions below. Use examples to illustrate your answers:  
1. What are system programs? What is their purpose and how are they different from application programmes. Discuss FIVE categories of system programs.  

2. What are the main states of a Java Thread? Discuss the lifecycle of a Java Thread and how it shares run time with other Threads.

### Operating Systems revision topics  
- Operating systems services  
- Operating systems interfaces (users, programs)  
- System calls  
- System programs  
- What is a process (structure, PCB, ...)?  
- Process states and lifecycle  
- Process scheduling (schedulers, queues, ...)  
- Concurrency / parallelism  
- What is a thread?  
- Threads states and lifecycle (in Java)  
- Critical section problem  
- Critical section problem solution requirements  
- Bounded buffer (producer-consumer) problem  
- Race condition  
- Mutex locks, semaphores, monitors  
- Deadlock / starvation

## Question 4
---
- Short essay.

- Topics:
    - Security problem (threats and attacks)  
    - Encryption 

### Example questions
1. Discuss THREE types of Program Threats. Give an example for each one.  

2. What are accidental or malicious security violations. Discuss FOUR types and THREE levels at which security measures could be taken.

### Security revision topics  
- Security violations  
- Security measures  
- Program threats and examples  
- System and network threats and examples  
- Cryptography terms  
- Encryption  
- Encryption algorithms essential property  
- Symmetric encryption and example algorithms  
- Asymmetric encryption and example algorithms

---
## Textbook References:
### Computer Networks  
- Chapter 1 Computer Networks and the Internet  
    - 1.1 What Is the Internet?  
    - 1.1.1 A Nuts-and-Bolts Description  
    - 1.1.2 A Services Description  
    - 1.1.3 What Is a Protocol?  
    - 1.5 Protocol Layers and Their Service Models  
- Chapter 2 Application Layer  
    - 2.1 Principles of Network Applications  
    - 2.2 The Web and HTTP  
    - 2.3 Electronic Mail in the Internet  
    - 2.7 Socket Programming: Creating Network Applications  
- Chapter 3 Transport Layer  
    - 3.1 Introduction and Transport-Layer Services  
    - 3.2 Multiplexing and Demultiplexing  
    - 3.3 Connectionless Transport: UDP  
    - 3.5 Connection-Oriented Transport: TCP  
    - 3.7 TCP Congestion Control
- Chapter 4 The Network Layer: Data Plane  
    - 4.1.1 Forwarding and Routing: The Data and Control Planes  
    - 4.2 What’s Inside a Router? (overview and 4.2.1 Input Port Processing and Destination-Based Forwarding ONLY)  
    - 4.3 The Internet Protocol (IP): IPv4, Addressing, IPv6, and More
    - 4.3.1 IPv4 Datagram Format  
    - 4.3.2 IPv4 Datagram Fragmentation  
    - 4.3.3 IPv4 Addressing (excluding “Obtaining a block of addresses” & “Obtaining a Host Address: The Dynamic Host Configuration Protocol”)  
    - 4.3.5 IPv6 (excluding “Transitioning from IPv4 to IPv6”)  
- Chapter 5 The Network Layer: Control Plane  
    - 5.2 Routing Algorithms (overview ONLY)

### Operating Systems Concepts  
- Chapter 2 Operating-System Structures  
    - 2.1 Operating-System Services  
    - 2.2 User and Operating-System Interface  
    - 2.3 System Calls  
    - 2.4 Types of System Calls  
    - 2.5 System Programs  
- Chapter 3 Processes  
    - 3.1 Process Concept  
    - 3.2 Process Scheduling  
    - 3.6.2 Remote Procedure Calls  
    - 3.6.3 Pipes  
- Chapter 4 Threads  
    - 4.1 Overview  
    - My slides and links: Java Threads
- Chapter 5 Process Synchronisation  
    - 5.1 Background  
    - 5.2 The Critical-Section Problem  
    - 5.3 Peterson’s Solution  
    - 5.5 Mutex Locks  
    - 5.6 Semaphores  
    - 5.7 Classic Problems of Synchronisation  
    - 5.8 Monitors  
- Chapter 15 Security  
    - 15.1 The Security Problem  
    - 15.2 Program Threats  
    - 15.3 System and Network Threats  
    - 15.4.1 Encryption  
- Chapter 17 Distributed Systems  
    - 17.1 Advantages of Distributed Systems