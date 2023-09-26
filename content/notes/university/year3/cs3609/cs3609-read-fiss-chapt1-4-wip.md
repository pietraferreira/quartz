---
title:  "Introduction to Cybersecurity"
tags:
  - university
module: cs3609
lecturer: Nura Abubakar
created: 2023-09-21
year: '3'
type: book-notes
---
---
# Notes on FISS (Chapters 1 and 4)
---
## Chapter 1 Topics
---
This chapter covers the following topics and concepts:

• What unauthorised access and data breaches are
• What information systems security is
• What the tenets of information systems security are
• What the seven domains of an IT infrastructure are
• What the weakest link in an IT infrastructure is
• How an IT security policy framework can reduce risk
• How a data classification standard affects an IT infrastructure’s security needs

## Chapter 1 Goals
---
When you complete this chapter, you will be able to:

• Describe how unauthorised access can lead to a data breach
• Relate how availability, integrity, and confidentiality requirements affect the seven
domains of a typical IT infrastructure
• Describe the risk, threats, and vulnerabilities commonly found within the seven domains
• Identify a layered security approach throughout the seven domains
• Develop an IT security policy framework to help reduce risk from common threats and vulnerabilities
• Relate how a data classification standard affects the seven domains

## The Three Tenets (CIA Model)
---
- **Confidentiality**: only authorised users can view information.
- **Integrity**: only authorised users can change information.
- **Availability**: information is accessible by authorised users whenever they request the information.

![](notes/university/content/assets/Screenshot%202023-09-21%20at%2015.50.50.png)

### Confidentiality
---
Includes:

- Private data of individuals.
- Intellectual property of business.
- National security for countries and governments.

**Security control**: conducting annual security awareness training for employees, putting an **IT security policy framework** in place, performing periodic security risk assessments, minimising software weaknesses by updating computers and servers with patches and security fixes etc.

Security control specific to ensuring data confidentiality:

- Having organisation-wide policies to protect confidential data.
- Adopting a **data classification standard** that defines how to treat data.
- Limit access to systems and applications that house confidential data to only those authorised.
- Using cryptography techniques to hide confidential data.
- Encrypting data.

**Cryptography**: the practice of hiding data from cleartext into **ciphertext**.

### Integrity
---
Deals with the validity and accuracy of data. Unauthorised changes to data can undermine its' value.

### Availability
---
The amount of time users can use a system, application and data.

Common time measurements are:

- **Uptime**: total amount of time that a system, application and data are accessible. Normally measured in seconds, minutes and hours or a percentage of time available.
- **Downtime**: the opposite of uptime.
- **Availability**: (Total Uptime) / (Total Uptime + Total Downtime).
- **Mean time to failure (MTTF)**: average amount of time between failures.
- **Mean time to repair (MTTR)**: average amount of times it takes to repair a system, application or component.
- **Mean time between failures (MTBF)**: predicted amount of time between failures of an IT system during operation.
- **Recovery time objective (RTO)**: amount of time it takes to recover and make a system, application and data available for use after an outage.

**Service-level agreement (SLA)**: a contract that guarantees a minimum monthly availability of service for wide area network (WAN) and Internet access links (normally from 99.5% to 99.999%).

## Seven Domains of a Typical IT Infrastructure
---
### User Domain
---
- Defines the people who access an organisation's information system.

#### Roles, Responsibilities and Accountability
---
- **Roles and tasks**: users can access systems, data and applications depending upon their defined access rights. Here you find an **acceptable use policy (AUP)**, which defines what users are allowed and not allowed to do with organisation-owned IT assets. First layer of defence starts here.
- **Responsibilities**: employees are responsible for their use of IT assets.
- **Accountability**: normally an organisation's human resources department is accountable for implementing proper employee background checks.

#### Risks, Threats, and Vulnerabilities
---
![](notes/university/content/assets/Screenshot%202023-09-21%20at%2016.14.05.png)

### Workstation Domain
---
A **workstation** can be a desktop, laptop, special-purpose terminal, any device that connects to the network.

- **Thin client**: software or an actual computer with no hard drive that runs on a networks and relies on a server to provide applications, data and all processing. Normally used in large organisations, libraries and schools.
- **Thick client**: more fully featured hardware that contains a hard drive and applications and processes data locally, going to the server mainly for file storage. An ordinary PC is an example of a thick client.

#### Roles, Responsibilities and Accountability
---
- **Roles and tasks**: staff should have access necessary to be productive. The system should be **hardened**, meaning ensure that controls are in place to handle any software revisions, security patches and system configurations. It also needs additional layers of defence, referred to as **defence in depth**.
- **Responsibilities**: enforce defined standards, safeguard controls, define proper access controls and assign access rights to systems, applications and data.
- **Accountability**: an organisation's IT desktop manager is typically accountable for allowing employees the greatest use of the Workstation Domain.

#### Risks, Threats and Vulnerabilities
---
Requires tight security and access controls. Requires a logon ID and password for access.

![](notes/university/content/assets/Screenshot%202023-09-21%20at%2016.23.31.png)

### LAN Domain
---
A **local area network (LAN)** is a collection of computers connected to one another or to a common connection medium.

The physical part of the LAN Domain consists of:

- **Network interface card (NIC)**: interface between the computer and the LAN physical media.
- **Ethernet LAN**.
- **Unshielded twisted-pair cabling**.
- **LAN switch**: connects workstations into a physical Ethernet LAN. There are two kinds:
    - **Layer 2 switch**: examines the MAC layer address and makes forwarding decisions based on MAC layer address tables.
    - **Layer 3 switch**: examines the network layer address and routes packets based on routing protocol path determination decisions, it is the same thing as a router.
- **File server and print server**: provide file sharing and data storage for users within a department.
- **Wireless access point (WAP)**.

The logical part of the LAN Domain consists of:

- **System administration**: setup of user LAN accounts with logon ID and password access controls.
- **Design of directory of file services**.
- **Configuration of workstation and server TCP/IP software and communication protocols**: this involves IP addressing, the **IP default gateway router, subnet, mask address**, etc. The IP default gateway router acts as the entry/exit to the LAN. The subnet mask address defines the IP network number and IP host number. 
- **Design of server disk storage space; backup and recovery of user data**.
- **Design of virtual LANs (VLANs)**: With Layer 2 and Layer 3 LAN switches, Ethernet ports can be configured to be on the same VLAN, even though they may be connected to different physically connected LANs. This is the same thing as configuring workstations and servers to be on the same Ethernet LAN or broadcast domain.

#### Roles, Responsibilities and Accountability
---
- **Roles and tasks**:

## Glossary
---
- **Cyberspace**: is all the accessible users, networks, webpages, and applications working in this worldwide electronic realm.
- **SIP-enabled (Session Initiation Protocol-enabled applications)**: unified communications, e.g.: Google Chat instant messaging service.
- **Risk** is the likelihood that something bad will happen to an asset.
- **Threat** is any action that could damage an asset.
- **Business continuity plan (BCP)**: gives priorities to the functions an organisation needs to keep going.
- **Disaster recovery plan (DRP)**: defines how a business gets back on its feet after a major disaster such as a fire or hurricane.
- **Virus**: is a computer program written to cause damage to a system, an application, or data. 
- **Malicious code (malware)**: is a computer program written to cause a specific action to occur, such as erasing a hard drive.
- **Vulnerability**: is a weakness that allows a threat to be realised or to have an effect on an
asset. 

- A threat by itself does not always cause damage; there must be a vulnerability for a threat to be realised.
- Software vendors must protect themselves from the liabilities of their own vulnerabilities with an **End-User License Agreement (EULA)**. 
