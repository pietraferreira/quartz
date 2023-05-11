---
title: "CS2005 - Exam"
tags:
  - university/exam2023 
  - university/cs2005 
last-edited:
created: 2023-05-03
---

- 4 questions.
- An answer should be around 500 to 800 words.

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

### Answers:  
1. The two layers of the OSI model that are not included in the TCP/IP stack are:
    - Presentation Layer (Layer 6): This layer is responsible for data representation and translation, such as encryption and decryption. The TCP/IP stack does not have a separate layer for these functions.
    - Session Layer (Layer 5): This layer establishes, manages, and terminates connections between applications. In the TCP/IP stack, these functions are typically handled by the Transport Layer (Layer 4).
    
2. The Internet Standards are described in formal documents called Request for Comments (RFCs). RFCs are documents that define protocols, procedures, and standards for the Internet.

3. The interface between a process and the network is typically provided by the Socket API (Application Programming Interface). The Socket API allows processes to create network sockets, which are endpoints for sending and receiving data over the network. Through the socket interface, processes can establish network connections, send and receive data, and manage network communication.

4. Complete the phrase: "The Transport layer provides logical communication between processes or applications on different hosts."

5. A "link state" routing algorithm is typically decentralised. In a link state routing algorithm, each router collects information about the state of its directly connected links and shares this information with other routers in the network. Each router then independently calculates the best path to reach a destination based on the collected link state information. This decentralised approach allows routers to make routing decisions autonomously.

6. Memory that can be dynamically allocated to a process during runtime is called heap memory or dynamic memory. Heap memory is used for storing data structures and objects that are created and destroyed dynamically at runtime using functions like malloc() and free().

7. Yes, a thread does share its code section with other threads belonging to the same process. Threads within a process share the same code section, also known as the text section or code segment, of the process. Each thread has its own stack and data section, but they all execute the same code.

8. A process can change shared variables in the section of its code where the shared variables are accessed or modified. Typically, this is done within a critical section or a mutually exclusive region where proper synchronization mechanisms, such as locks or semaphores, are used to ensure that only one thread or process can access the shared variables at a time, preventing data inconsistencies or race conditions.

9. Yes, a Trojan Horse is an example of a program threat. A Trojan Horse is a type of malicious software or code that disguises itself as a legitimate program or file, tricking users into executing it. Once executed, it can perform various malicious activities, such as stealing data or providing unauthorised access to the attacker. Program threats generally refer to vulnerabilities or weaknesses in software programs that can be exploited to compromise their security, such as buffer overflows or code injection attacks.

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

### Answers:
**Discuss how two processes communicate over a network. Include in your answer the role of Sockets, Ports, IP Addresses and what is required from Transport Services available to Applications.**

Two processes communicate over a network by utilising various network protocols and components. One of the key components involved in the communication process is sockets. Sockets act as endpoints for communication, allowing processes to send and receive data over the network. Each socket is identified by a unique combination of IP address and port number. The IP address identifies the host or device on the network, while the port number identifies the specific process or application running on that host.

For example, consider two processes, Process A and Process B, running on different hosts. Process A wants to send data to Process B over the network. Firstly, Process B creates a socket and binds it to a specific port number on its host. This allows Process B to listen for incoming connections. Process A then creates a socket and specifies the IP address of Process B's host and the corresponding port number to establish a connection.

IP addresses play a crucial role in the communication process as they uniquely identify each host on the network. They are used to route the data packets from the source host to the destination host.

Transport services, such as those provided by the Transport Layer protocols (e.g., TCP and UDP), are required to facilitate reliable and efficient communication between the two processes. The Transport Layer segments the data received from the application layer into smaller units called segments. These segments are then encapsulated with header information, including source and destination port numbers, sequence numbers, and other control information.

**Define Multiplexing and Demultiplexing in the Transport Layer. Discuss how Transport Layer segments are sent and received in connectionless and connection-oriented protocols.**

Multiplexing and demultiplexing are essential functions of the Transport Layer.

- Multiplexing refers to the process of combining multiple data streams into a single stream for transmission over a network. It allows multiple processes or applications running on the same host to share the network resources. Multiplexing is achieved by assigning different source port numbers to each data stream.

- Demultiplexing is the process of separating the received data stream back into individual streams and delivering them to the respective processes or applications. It is done by examining the destination port number in the received Transport Layer segment and forwarding the data to the appropriate socket.

In connectionless protocols, such as UDP (User Datagram Protocol), Transport Layer segments are sent independently without establishing a dedicated connection between the sender and receiver. Each segment is routed individually, and the receiving process can handle them in any order. However, UDP does not provide reliable delivery or congestion control.

In connection-oriented protocols, such as TCP (Transmission Control Protocol), a reliable and ordered connection is established between the sender and receiver before data transmission. Transport Layer segments are sent over this established connection, ensuring reliable delivery, flow control, and congestion control. The segments are received, reassembled in the correct order, and delivered to the receiving process.

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

### Answer:

**What are system programs? What is their purpose, and how are they different from application programs? Discuss FIVE categories of system programs.**

System programs are a collection of software programs that provide essential services and functionality to the operating system and users. They are designed to manage and control various aspects of the computer system. Unlike application programs, which are developed to fulfil specific user tasks, system programs are responsible for managing the resources and supporting the execution of application programs.

The purpose of system programs is to enhance the overall efficiency, performance, and usability of the computer system. They provide an interface between the user and the hardware, enabling users to interact with the system and perform various tasks. System programs also facilitate the management of system resources, such as memory, files, and devices.

Here are five categories of system programs:

1. **Operating System (OS):** The operating system is the core system program that manages and controls the overall operation of the computer system. It provides services such as process management, memory management, file management, device management, and user interface. Examples of operating systems include Windows, macOS, Linux, and Android.

2. **Device Drivers:** Device drivers are system programs that facilitate communication between the operating system and hardware devices. They provide the necessary instructions and interfaces for the operating system to interact with specific hardware components such as printers, keyboards, mice, and network adapters. Device drivers ensure that the hardware devices work seamlessly with the rest of the system.

3. **Utilities:** Utilities are system programs that perform specific tasks related to system management and maintenance. They provide tools for tasks such as disk management, file system analysis, data backup, system optimisation, and virus scanning. Examples of utilities include disk defragmenters, antivirus software, file compression tools, and system monitoring tools.

4. **Compilers and Interpreters:** Compilers and interpreters are system programs that translate high-level programming languages into machine code that can be executed by the computer. Compilers convert the entire program into machine code, while interpreters translate and execute the program line by line. They are essential for executing application programs written in languages such as C, Java, Python, and JavaScript.

5. **System Libraries:** System libraries are collections of pre-compiled code and functions that provide reusable routines and functionality to application programs. They include libraries for graphics, networking, input/output operations, and mathematical computations. System libraries simplify the development process by providing ready-made code that can be used by application programmers.

In summary, system programs are critical components of the operating system that provide essential services and functionality. They differ from application programs in that they manage and control system resources and provide services to application programs and users.

**What are the main states of a Java Thread? Discuss the lifecycle of a Java Thread and how it shares runtime with other Threads.**

In Java, a thread represents an independent unit of execution within a program. Threads allow concurrent execution of tasks, enabling multiple operations to occur simultaneously. A Java thread can be in one of the following main states:

1. **New:** When a thread is created but has not yet started, it is in the "New" state. In this state, the thread is allocated system resources, but it has not begun its execution.

2. **Runnable:** A thread enters the "Runnable" state when it is eligible to run, but it may or may not be currently executing. In this state, the thread can be executing its task or waiting for its turn to be scheduled by the operating system.

3. **Blocked:** A thread in the "Blocked" state is waiting for a certain condition to be satisfied before it can resume execution. For example, a thread may be blocked if it is waiting for a lock or for input/output operations to complete.

4. **Waiting:** A thread enters the "Waiting" state when it waits for a specific condition to occur. Unlike the "Blocked" state, a waiting thread is not waiting for a lock or input/output operation but for another thread to explicitly notify it to resume execution.

5. **Terminated:** A thread reaches the "Terminated" state when it completes its execution or when an exception terminates it.

The lifecycle of a Java thread consists of several stages:

1. **Creation:** In this stage, a thread is created using the `new` keyword or by extending the `Thread` class or implementing the `Runnable` interface. The thread is in the "New" state.

2. **Runnable:** Once the thread is created, it can be started using the `start()` method. The thread moves to the "Runnable" state and is eligible for execution. The thread scheduler then determines when to execute the thread.

3. **Running:** When the thread scheduler selects the thread for execution, it enters the "Running" state. The thread's `run()` method is executed, and it performs its designated tasks.

4. **Blocked/Waiting:** While running, a thread might encounter situations that cause it to enter the "Blocked" or "Waiting" state. For example, if a thread tries to acquire a lock that is held by another thread, it becomes blocked. If a thread calls the `wait()` method, it goes into the "Waiting" state.

5. **Termination:** A thread completes its execution or is terminated if an exception occurs. Once the thread finishes its task or encounters an exception, it enters the "Terminated" state and cannot be restarted.

Threads share runtime with other threads through a mechanism called thread scheduling. The operating system's thread scheduler assigns a time slice or execution time to each thread. Threads take turns executing their tasks, allowing concurrent execution. The scheduling algorithm determines the order and duration of execution for each thread.

Threads can interact and share resources through shared variables or objects. However, proper synchronization mechanisms, such as locks or synchronised blocks, should be used to ensure thread safety and avoid data races or inconsistencies when multiple threads access shared resources simultaneously.

In summary, the lifecycle of a Java thread includes creation, runnable, running, blocked/waiting, and termination stages. Threads share runtime by being scheduled by the operating system's thread scheduler. They can interact and share resources, but care must be taken to ensure thread safety using synchronization mechanisms.

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

### Answers:

**1. Discuss THREE types of Program Threats. Give an example for each one.**

a) **Viruses**: Viruses are malicious programs that attach themselves to legitimate files or programs and replicate when the infected file or program is executed. They can cause damage to the system, steal sensitive information, or disrupt normal operations. For example, the "Melissa" virus spread through email attachments and infected documents, leading to widespread disruption in 1999.

b) **Malware**: Malware, short for malicious software, refers to a broad category of software threats designed to harm or exploit computer systems. This includes various types such as worms, trojans, ransomware, and spyware. An example of malware is the "WannaCry" ransomware, which encrypted files on infected systems and demanded a ransom for their release.

c) **Logic Bombs**: Logic bombs are code snippets or programs that lie dormant within a system until triggered by a specific event or condition. Once triggered, they execute malicious actions, such as deleting files or causing system failures. An example is the "Michelangelo" virus, which lay dormant and activated on March 6, Michelangelo's birthday, when it would destroy data on infected systems.

**2. What are accidental or malicious security violations? Discuss FOUR types and THREE levels at which security measures could be taken.**

Accidental or malicious security violations refer to actions that compromise the security of a system either unintentionally or intentionally. Here are four types of security violations:

a) **Unauthorised Access**: Unauthorised access occurs when an individual gains entry to a system or resource without proper authorisation. This could be due to weak passwords, misconfiguration, or exploiting vulnerabilities. For example, an attacker guessing a user's password to gain access to their online banking account.

b) **Data Breach**: A data breach is the unauthorised access, acquisition, or exposure of sensitive data. It can result from hacking, social engineering, or insider threats. An example is when a hacker infiltrates a company's database and steals customer information like credit card details or personal records.

c) **Denial of Service (DoS) Attacks**: DoS attacks aim to disrupt or prevent legitimate users from accessing a system or service. Attackers overload the target system with a flood of requests, exhausting its resources and causing it to become unresponsive. An example is a Distributed Denial of Service (DDoS) attack, where multiple compromised computers flood a target server with traffic, making it unavailable to legitimate users.

d) **Information Theft**: Information theft involves stealing sensitive data for malicious purposes, such as identity theft or financial fraud. It can happen through methods like phishing, key-logging, or exploiting software vulnerabilities. For instance, an attacker intercepting credit card details during an online transaction.

Security measures can be implemented at various levels:

1. **Physical Level**: Security measures at the physical level focus on securing the physical infrastructure of the system or network. This includes measures like access controls, surveillance cameras, and secure data centres.

2. **Network Level**: Network-level security measures protect the communication and data transmission within a network. This includes implementing firewalls, intrusion detection systems, and encryption protocols to secure network traffic.

3. **Host Level**: Security measures at the host level focus on securing individual computer systems or servers. This involves employing antivirus software, implementing strong authentication mechanisms, and keeping the software and operating systems up to date.

In conclusion, accidental or malicious security violations encompass various threats and actions that compromise the security of computer systems. Examples include unauthorised access, data breaches, DoS attacks, and information theft. Security measures can be implemented at the physical, network, and host levels to mitigate these risks.

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
- [x] 1.1 What Is the Internet? ✅ 2023-05-11
- [x] 1.1.1 A Nuts-and-Bolts Description ✅ 2023-05-11
- [x] 1.1.2 A Services Description ✅ 2023-05-11
- [x] 1.1.3 What Is a Protocol? ✅ 2023-05-11
- [x] 1.5 Protocol Layers and Their Service Models ✅ 2023-05-11
- Chapter 2 Application Layer  
- [x] 2.1 Principles of Network Applications ✅ 2023-05-11
- [x] 2.2 The Web and HTTP ✅ 2023-05-11
- [x] 2.3 Electronic Mail in the Internet ✅ 2023-05-11
- [x] 2.7 Socket Programming: Creating Network Applications ✅ 2023-05-11
- Chapter 3 Transport Layer  
- [x] 3.1 Introduction and Transport-Layer Services ✅ 2023-05-11
- [x] 3.2 Multiplexing and Demultiplexing ✅ 2023-05-11
- [x] 3.3 Connectionless Transport: UDP ✅ 2023-05-11
- [x] 3.5 Connection-Oriented Transport: TCP ✅ 2023-05-11
- [x] 3.7 TCP Congestion Control ✅ 2023-05-11
- Chapter 4 The Network Layer: Data Plane  
- [x] 4.1.1 Forwarding and Routing: The Data and Control Planes ✅ 2023-05-11
- [x] 4.2 What’s Inside a Router? (overview and 4.2.1 Input Port Processing and Destination-Based Forwarding ONLY) ✅ 2023-05-11
- [x] 4.3 The Internet Protocol (IP): IPv4, Addressing, IPv6, and More ✅ 2023-05-11
- [x] 4.3.1 IPv4 Datagram Format ✅ 2023-05-11
- [x] 4.3.2 IPv4 Datagram Fragmentation ✅ 2023-05-11
- [x] 4.3.3 IPv4 Addressing (excluding “Obtaining a block of addresses” & “Obtaining a Host Address: The Dynamic Host Configuration Protocol”) ✅ 2023-05-11
- [x] 4.3.5 IPv6 (excluding “Transitioning from IPv4 to IPv6”) ✅ 2023-05-11
- Chapter 5 The Network Layer: Control Plane  
- [x] 5.2 Routing Algorithms (overview ONLY) ✅ 2023-05-11

### Operating Systems Concepts  
- Chapter 2 Operating-System Structures  
- [x] 2.1 Operating-System Services ✅ 2023-05-11
- [x] 2.2 User and Operating-System Interface ✅ 2023-05-11
- [x] 2.3 System Calls ✅ 2023-05-11
- [x] 2.4 Types of System Calls ✅ 2023-05-11
- [x] 2.5 System Programs ✅ 2023-05-11
- Chapter 3 Processes  
- [x] 3.1 Process Concept ✅ 2023-05-11
- [x] 3.2 Process Scheduling ✅ 2023-05-11
- [x] 3.6.2 Remote Procedure Calls ✅ 2023-05-11
- [x] 3.6.3 Pipes ✅ 2023-05-11
- Chapter 4 Threads  
- [x] 4.1 Overview ✅ 2023-05-11
- [x] My slides and links: Java Threads ✅ 2023-05-11
- Chapter 5 Process Synchronisation  
- [x] 5.1 Background ✅ 2023-05-11
- [x] 5.2 The Critical-Section Problem ✅ 2023-05-11
- [x] 5.3 Peterson’s Solution ✅ 2023-05-11
- [x] 5.5 Mutex Locks ✅ 2023-05-11
- [x] 5.6 Semaphores ✅ 2023-05-11
- [x] 5.7 Classic Problems of Synchronisation ✅ 2023-05-11
- [x] 5.8 Monitors ✅ 2023-05-11
- Chapter 15 Security  
- [x] 15.1 The Security Problem ✅ 2023-05-11
- [x] 15.2 Program Threats ✅ 2023-05-11
- [x] 15.3 System and Network Threats ✅ 2023-05-11
- [x] 15.4.1 Encryption ✅ 2023-05-11
- Chapter 17 Distributed Systems  
- [x] 17.1 Advantages of Distributed Systems ✅ 2023-05-11

---
## Book Reviewing 
- [PDF with annotations.](notes/university/cs2005/annotation-computer-networks.md)