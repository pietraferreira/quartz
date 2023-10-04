---
title:  "Network Computing Introduction"
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
- Make one definition of a network computing application.
- Present an example of a network computing application.
- Discuss the importance of resource sharing.
- Define seven major issues in distributed systems and network computing against your example.

# Definition
A network computing application is one in which hardware and software components located at networked computers communicate and coordinate their actions only by passing messages.

The main reason for network computing is **resource sharing**.

## Consequences
- Concurrency.
- No global clock (no global anything).
- Control is distributed - how do you coordinate actions and applications?
- Independent failures.

# Examples
- Internet and Intranets (supporting role).
- The World Wide Web (supporting role?).
- Mobile applications.
- Games.
- Grid computing and Cloud computing.
- Virtual Working Environments.

# The Internet
- A collection of physical networks connected together via routers in a wide area network.
- Unique addressing (**IP**).
- Common protocol (**TCP/IP**).
- Name resolution service (**DNS**).
- Common service provision (socket-based services) to support email, the web and all sorts of services required for interoperation.

![[notes/images/Screenshot 2023-10-04 at 19.08.16.png|480]] ![[notes/images/Screenshot 2023-10-04 at 19.08.43.png|480]]

![[notes/images/Screenshot 2023-10-04 at 19.09.02.png|480]] ![[notes/images/Screenshot 2023-10-04 at 19.09.15.png|480]]

![[notes/images/Screenshot 2023-10-04 at 19.14.06.png|600]]
![[notes/images/Screenshot 2023-10-04 at 19.14.42.png|600]]
# Virtual Working Environments
They used to be called **Groupware**. It is a client tool that allows you to connect to a central server:
- Schedule meetings.
- Conference calls.
- Application sharing.

It is everywhere: Zoom, Teams, gaming environments etc.

# Games
There are plenty of multi-player games out there, just about every new game has "Internet" facilities.

- Real time vs "Turn"-based.
- Not usually cross-platform (interoperability).
- Digital objects for sale!

# Grid Computing
A client sits on your computer and periodically takes work from a server.

It is simple, **scalable** computing.

1 million computers engaged in tasks such as:
- SETI.
- Molecular modelling.
- Fight against malaria.

- Process farming.
- Grid.
- Volunteer computing.
- Cloud computing.

## SAKERGRID Architecture
![[notes/images/Screenshot 2023-10-04 at 19.13.09.png]]

## E-Infrastructure Architecture
![[notes/images/Screenshot 2023-10-04 at 19.13.28.png|500]]

# Service Oriented Architecture
The roots of SOA compare:
- Single-tier client-server architecture.
- Two-tier client-server architecture.
- Multi-tier client-server architecture.
- Distributed Internet architecture.
- RPC architecture.

To:
- Wrapper services.

![[notes/images/Screenshot 2023-10-04 at 19.16.18.png|280]] ![[notes/images/Screenshot 2023-10-04 at 19.16.38.png|280]]


# Reading
- Coulouris: chapter 1.