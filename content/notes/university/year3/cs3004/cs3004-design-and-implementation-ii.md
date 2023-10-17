---
title:  "Design and Implementation II"
tags:
  - university
module: cs3004
lecturer: ST
created: 2023-10-17
year: '3'
type: lecture
---
---
# Design and Implementation Issues
- Three tier architecture.
- Distributed agreement.
- Concurrency control (transactions).
- Communication failure.
- Reliable group communication.
- Distributed commitment.

# The Client-Server Model
- Clients and servers request-reply behaviour:

![[notes/images/Screenshot 2023-10-17 at 17.32.40.png|400]]

## Application Layering
- User-interface level.
- Processing level.
- Data level (important - persistence!).
- Three tiered architecture.

### Example
![[notes/images/Screenshot 2023-10-17 at 17.33.36.png|480]]

#### Possible Protocol
![[notes/images/Screenshot 2023-10-17 at 17.34.17.png|480]]

#### Many Variants
![[notes/images/Screenshot 2023-10-17 at 17.34.34.png|480]]

# Evolution of System-Oriented Architectures
- SOA: Service-Oriented Architecture
- SOA is an architectural approach in software design.
- It has evolved from earlier architectural models.

Comparisons:
- Single-tier client-server architecture
- Two-tier client-server architecture
- Multi-tier client-server architecture
- Distributed Internet architecture
- RPC architecture

Key Points:
- SOA focuses on creating and using loosely coupled, modular, and reusable services.
- Services are self-contained units of functionality.
- They can be accessed by other software components over a network.
- SOA represents a more flexible and modular approach compared to older architectural models.
- "Wrapper services" may be used in SOA to encapsulate and expose functionality.

- SOA emphasises the use of services that can be easily accessed and reused, promoting a more adaptable and scalable approach to software design.

![[notes/images/Screenshot 2023-10-17 at 17.37.14.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.37.44.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.38.10.png|500]]

![[notes/images/Screenshot 2023-10-17 at 17.38.32.png|500]]

![[notes/images/Screenshot 2023-10-17 at 17.38.49.png|500]]

## The Beginning of Web Services and SOA
![[notes/images/Screenshot 2023-10-17 at 17.39.25.png|500]]

#### Web Services and SOA
Key Concepts:
- Service descriptions in Web Services and SOA
- WSDL: Web Services Description Language

1. Service Endpoints and Descriptions:
    - WSDL describes service endpoints.
    - Service endpoints are the points of contact for service providers.
    - They include the formal definition of the endpoint interface.
    - They specify the physical location (address) of the service.
   
2. WSDL Service Definition:
    - A WSDL service definition has two components: a. Abstract Description: Defines the service's functionality in a non-technical manner. b. Concrete Description: Specifies how to interact with the service, including message structure and location.

-  WSDL is crucial in Web Services and SOA for providing detailed information about services, making it easier for requestors to understand and utilise them effectively.

- WSDL definition:
![[notes/images/Screenshot 2023-10-17 at 17.41.37.png|200]]

- Service descriptions (WSDL):
![[notes/images/Screenshot 2023-10-17 at 17.39.54.png|500]]

#### Case Study
![[notes/images/Screenshot 2023-10-17 at 17.40.17.png|500]]

# Summary of Service Interfaces
Key Points:
- Internet services, distributed applications, clients, or processes provide an interface for accessing offered services.
- Various implementation methods are used:
  - RPC/RMI: Client uses a procedure stub to access a server's procedure remotely and transparently.
  - Messages: Clients send messages to servers following a specified protocol.
  - Web Services: Utilises WSDL (the interface) and SOAP (the message).
  - Representational State Transfer (REST): A RESTful API.

- Services have interfaces for accessing them, and different methods like RPC, messages, Web Services, and RESTful APIs are used for this purpose. Each approach has its own characteristics and use cases.

# Quick Word About REST
Key Information:
- In a RESTful Web service, requests to a resource's URI result in responses with payloads in formats like HTML, XML, JSON, etc.
- The response can confirm alterations to the resource state and provide links to related resources.
- URI stands for uniform resource identifier.
- HTML, XML, and JSON are different message formats/contents.
- Abundant online tutorials are available.
- REST follows design principles similar to SOA.

- RESTful Web services use URIs to access resources, and their responses are in various formats. REST design principles align with those of Service-Oriented Architecture (SOA).

# Distributed Agreement
- Can two processes ever agree on anything?

## Two-Army Problem
- Assume "perfect" processes with no comms problem.
- How do two perfect processes reach agreement about one piece of information?

![[notes/images/Screenshot 2023-10-17 at 17.44.53.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.45.33.png|400]]

- Cases when distributed agreement can be reached in general when:
    - Message ordering = ordered (TCP).
    - Comms delay = bounded/unbounded.
    - **But** message must be delivered.

# Concurrency Control
## Transactions
- Transactions are atomic (all or nothing).
    - Failure atomicity (=> recovery).
    - Durable.
- Transactions are isolated.
- Serially equivalent (serialisable).
- Coordinator.

![[notes/images/Screenshot 2023-10-17 at 17.47.22.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.47.37.png|400]]

- A transaction has a begin and an end, and (fundamentally) is made up of read and write instructions issued by a client to a server (the four bank operations can be rewritten as such).

- A transaction always finishes:
    - …successfully (commits).
    - …unsuccessfully (aborts).
    
- If a transaction **commits** then any changes that it has made to a database is committed permanently.
- If a transaction **aborts** (for whatever reason) we undo any action that it has performed

A transaction has some properties that we can specify: atomicity, consistency, isolation and durability (ACID).

### Atomicity
- A transaction is treated at the atomic unit of data processing.
- All or nothing.
- Must guarantee that if the transaction is stopped during its processing, then a mechanism must be provided to undo or redo that transaction.
- Failure atomicity (all or nothing even if there is a fault).
- Permanent storage of results (durability).

### Consistency
- A transaction must be correct (it must transform the database from one consistent state to another).
- Usually the domain of the programmer.
- Database (integrity rules).

### Isolation
- This requires that a transaction “sees” a consistent database at all times.
- This means that an executing transaction cannot reveal its results to other concurrently executing transactions before commitment.
- Lost updates and inconsistent retrievals will result if transactions are not isolated.
- Still want concurrent access -> interleave transaction execution (**serially equivalent**).

### Durability
- Once a transaction commits, its results are permanent and cannot be erased from the database.
- Transaction is therefore only complete when its results are put in permanent storage.
- Dirty reads and premature writes!

### Some Issues
- A transaction must have a unique identifier (Transaction Identifier - TID).
- A transaction begins, performs some operations then either commits or aborts.
- Lost update (Fig 13.5)
- Inconsistent Retrieval (Fig 13.6)
- Serial equivalence (Figs 13.7, 13.8, 13.9, 13.10)
- Dirty read (Fig 13.11)
- Premature Writes (Fig 13.12)
- Flat vs Nested Transactions (Fig 13.13)

### Figures
![[notes/images/Screenshot 2023-10-17 at 17.51.53.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.52.05.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.52.16.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.52.25.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.52.35.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.52.44.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.53.14.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.53.33.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.54.08.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.54.19.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.56.40.png|400]]

### Locks
- See Figs 13.14-6.
- Lock manager.
- Granularity?
- Transactions acquire locks on data objects (c.f. monitors, critical regions, semaphores).
- Growing Phase, Shrinking Phase.
- Two-phase locking.
- Dirty reads and premature writes?
- => Strict two-phase locking.
- Conflicts? (Busy waiting).

![[notes/images/Screenshot 2023-10-17 at 17.57.34.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.57.45.png|400]]

![[notes/images/Screenshot 2023-10-17 at 17.57.55.png|400]]

### Deadlock
- Waiting for someone waiting for me (fig 13.19).
- A state in which each member of a group of transactions is waiting for some other member to release a lock.
- Wait-for graph (figs 13.20,21,22,23).
- Prevention vs detection.
- Detection - lock manager builds wait-for graph and aborts transactions as necessary.

![[notes/images/Screenshot 2023-10-17 at 17.59.31.png|400]]

## Processes
### Distributed Mutual Exclusion
- How do we stop several processes accessing the same resource?
- Single computer -> critical section problem.
- Multiple computers -> distributed mutual exclusion problem.
- Implementable via a server.
- Consider the problem of a peer-to-peer system (no server).

### Algorithms for Mutual Exclusion
- Consider a set of N processes pi = 1, 2, …, N.

Assume system is asynchronous, processes do not fail, and
message delivery is reliable (messages always delivered
once):
- Need to have for Mutex properties…
    - ME1 – safety, at most one processes may execute in the critical section at any time.
    - ME2 – liveness, requests to enter and exit the critical section eventually succeed.
    - (ME3 – out of scope).
   
Application protocol to implement
- enter() – request permission to enter critical section, block if needed.
- resourceAccesses() – access shared resources in critical section.
- exit() – leave critical section, other processes can now enter.

### Central Server Algorithm
-  See figure 12.2.
- Use a central server to grant permission.
- Send a request for access and wait.
- Reply is effectively an “access token”.
- When access finished, send release message.
- If access token granted, then request is queued.
- ME1, 2 satisfied.
- Bad as server represents a bottleneck.

- CSA:
![[notes/images/Screenshot 2023-10-17 at 18.02.51.png|400]]

### Ring-Based Algorithm
- Fig 12.3.
- Ring topology unrelated to physical network.
- Process receives token from neighbour.
- If the process wants to enter the CS, the process keeps it and then releases when finished.
- If the process does not want to enter the CS, the process passes the token on.
- ME1,2 fine.
- Is this better than the CSA in terms of messages and failure/reliability?.
- Note – ignore Ricart and Agrawala’s algorithm.

![[notes/images/Screenshot 2023-10-17 at 18.04.07.png|300]]

## Communications Failure
- What happens when things go wrong?

### Reliable Client-Server Communication
- RPC Communication Failure:
![[notes/images/Screenshot 2023-10-17 at 18.05.01.png|400]]

- Client cannot locate the server.
    - Server might be down.
    - The name service might be down.
    - The communication network might be down/not connected.
    - Client/server incompatible versions.
   
Handle by
- Specific error code like exceptions.

But
- The extra coding required invalidates RPC transparency.

- Lost request messages:
    - Is the request message lost?
    - Has the server crashed?
    - Has the reply message been lost?

- Timeout and retransmit
    - Multiple retransmissions?
    - Can the server deal with multiple retransmitted requests?
    - What does the client do if the server never returns?

![[notes/images/Screenshot 2023-10-17 at 18.06.36.png|400]]

- Server crashes: Different semantic models:
    - Client keeps trying… at least once semantics.
    - Client gives up and reports failure… at most once semantics.
    - Guarantee nothing.
    - Better – **exactly once semantics**.

- Scenario:
    - Client requests the server to print some text.
    - Client receives an acknowledgement that the request has been delivered to the server.
    - Server sends completion message to the client.

If the server crashes, recovers and informs the client that it is running again.

How does the client know that the job was printed?

- Four strategies for the client…
    - **Never** reissue a request (risk the job might not be printed).
    - **Always** reissue a request (risk multiple printing).
    - Reissue only if it received receipt acknowledgement (assumes server crashed during printing) (**Only when ACKed**).
    - Reissue if receipt acknowledgement not received (assumes the server did not get the request) (**Only when not ACKed**).
    
Two strategies for the server…
- Send a completion message before the printer begins **(A)**.
- Send a completion message after the printer finishes **(B)**.

Six possible event orderings at the server:
- **M → P → C**
    - Crash occurs after sending the completion message and printing the text (A).
- **M → C (→ P)**
    - Crash occurs after sending the completion message, but before the text could be printed.
- **P → M → C**
    - Crash occurs after printing the text and sending the completion message (B).
- **P → C (→ M)**
    - Crash occurs after printing the text, the completion message is not sent.
- **C (→ P → M)**
    - Crash occurs, nothing else happens.
- **C (→ M → P)**
    - Crash occurs, nothing else happens.

![[notes/images/Screenshot 2023-10-17 at 18.10.09.png|400]]

- Lost Reply Messages:
    - Use a timer, resend the request.
    - But – did the request or the reply get lost, or is the server just slow?
    - Various approaches, none ideal.
   
- Client crashes:
    - If the server does its just, replies and the client crashes, then we have an **orphan** computation.
    - Orphan prevention approaches (Nelson).
        - Extermination.
        - Reincarnation.
        - Gentle reincarnation.
        - Expiration.

Basic reliable-multicasting schemes:
- Not point-to-point but one-to-many (group).
- One sender wants to multicast a message to multiple receivers.

![[notes/images/Screenshot 2023-10-17 at 18.11.46.png|400]]

# Distributed Commitment
- How does a coordinator process agree with participant processes that an action has finished?
    - Distributed databases
    - Replication servers

**Coordinator and two or more participants.**

Two-phase commit protocol:
- Distributed transactions - Coordinator tells participants to do something with atomic behaviour.

### Two-Phase Commit
- The coordinator sends a VOTE_REQUEST message to all participants.
- When a participant receives a VOTE_REQUEST message, it returns either a VOTE_COMMIT message or a VOTE_ABORT message.
- Coordinator collects votes. If all VOTE_COMMIT it sends a GLOBAL_COMMIT message to all participants, else it sends a GLOBAL_ABORT message.
- Each participant either waits for a decision and if GLOBAL_COMMIT the participant locally commits, if GLOBAL_ABORT the participant locally aborts.

![[notes/images/Screenshot 2023-10-17 at 18.13.34.png|400]]

**Problem** - blocking means that if a process fails, another process will wait until timeout.

- Participant in INIT state waiting for VOTE_REQUEST:
    - Local abort and send VOTE_ABORT
   
- Coordinator in WAIT state waiting for votes:
    - Timeout decision to abort and send GLOBAL_ABORT.
   
- Participant in READY state waiting for decision:
    - Just keep waiting.

![[notes/images/Screenshot 2023-10-17 at 18.14.31.png|400]]

![[notes/images/Screenshot 2023-10-17 at 18.14.44.png|400]]

# Exam Questions
- Only one will be there!!!!
- It’s going to be one of these, possibly with different wording but will ask for similar knowledge.

- Define the four fundamental properties of transactions. Discuss two problems that can occur if two transactions are run together without concurrency control. Define an approach and algorithm to prevent this (not that running transactions one by one is not a solution!)? Discuss how your approach guarantees the four fundamental properties of transactions and how it prevents the four concurrency control problems.

- What can be done to avoid or recover from failure in client-server communication? Discuss, using worked examples, the FIVE sources of communication failure and what can be done to recover from that form of failure. Also, discuss if it is possible for a print server to guarantee to print exactly once.

- 3-4 page answers in detail