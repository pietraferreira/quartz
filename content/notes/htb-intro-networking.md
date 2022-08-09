---
title: "Introduction to Networking"
tags:
  - htb
  - network
programming-languagues:
created: 2022-07-12
---
# Introduction to Networking
---
## Overview
There is a wide array of **topologies** (mesh, tree, star), **mediums** (ethernet, fiber, coax, wireless) and **protocols** (TCP, UDP, IPX).

## Story Time - A Pentesters Oversight
Most networks use a `/24` subnet, so much so that many Penetration Testers will set this subnet mask (255.255.255.0) without checking. The /24 network allows computers to talk to each other as long as the first three octets of an IP Address are the same (ex: 192.168.1.xxx). Setting the subnet mask to `/25` divides this range in half, and the computer will be able to talk to only the computers on "its half." We have seen Penetration Test reports where the assessor claimed a Domain Controller was offline when it was just on a different network in reality. The network structure was something like this:

-   Server Gateway: 10.20.0.1/25
-   Domain Controller: 10.20.0.10/25
-   Client Gateway: 10.20.0.129/25
-   Client Workstation: 10.20.0.200/25
-   Pentester IP: 10.20.0.252/24 (Set Gateway to 10.20.0.1)

The Pentester communicated with the Client Workstations and thought they did an excellent job because they managed to steal a workstation password via Impacket. However, due to a failure to understand the network, they never managed to get off the Client Network and reach more "high value" targets such as database servers. 

## Networking Models
Two networking models describe the communication and transfer of data from one host to another, called `ISO/OSI model` and the `TCP/IP model`. This is a simplified representation of the so-called `layers` representing transferred Bits in readable contents for us.

![image](https://academy.hackthebox.com/storage/modules/34/redesigned/net_models4.png)

### The OSI Model
The `OSI` model, often referred to as `ISO/OSI` layer model, is a reference model that can be used to describe and define the communication between systems. The reference model has `seven` individual layers, each with clearly separated tasks.

The term `OSI` stands for `Open Systems Interconnection` model, published by the `International Telecommunication Union` (`ITU`) and the `International Organization for Standardization` (`ISO`). Therefore, the `OSI` model is often referred to as the `ISO/OSI` layer model.

The goal in defining the `ISO/OSI` standard was to create a reference model that enables the communication of different technical systems via various devices and technologies and provides compatibility. The `OSI` model uses `seven` different layers, which are hierarchically based on each other to achieve this goal. These layers represent phases in the establishment of each connection through which the sent packets pass. In this way, the standard was created to trace how a connection is structured and established visually.

| **Layer** | **Function** |
| --- | --- |
| `7.Application` | Among other things, this layer controls the input and output of data and provides the application functions. |
| `6.Presentation` | The presentation layer's task is to transfer the system-dependent presentation of data into a form independent of the application. |
| `5.Session` | The session layer controls the logical connection between two systems and prevents, for example, connection breakdowns or other problems. |
| `4.Transport` | Layer 4 is used for end-to-end control of the transferred data. The Transport Layer can detect and avoid congestion situations and segment data streams. |
| `3.Network` | On the networking layer, connections are established in circuit-switched networks, and data packets are forwarded in packet-switched networks. Data is transmitted over the entire network from the sender to the receiver. |
| `2.Data Link` | The central task of layer 2 is to enable reliable and error-free transmissions on the respective medium. For this purpose, the bitstreams from layer 1 are divided into blocks or frames. |
| `1.Physical` | The transmission techniques used are, for example, electrical signals, optical signals, or electromagnetic waves. Through layer 1, the transmission takes place on wired or wireless transmission lines. |

The layers `2-4` are `transport oriented`, and the layers `5-7` are `application oriented` layers. In each layer, precisely defined tasks are performed, and the interfaces to the neighbouring layers are precisely described. Each layer offers services for use to the layer directly above it. To make these services available, the layer uses the services of the layer below it and performs the tasks of its layer.

If two systems communicate, all seven layers of the `OSI` model are run through at least `twice`, since both the sender and the receiver must take the layer model into account. Therefore, a large number of different tasks must be performed in the individual layers to ensure the communication's security, reliability, and performance.

When an application sends a packet to the other system, the system works the layers shown above from layer `7` down to layer `1`, and the receiving system unpacks the received packet from layer `1` up to layer `7`.

### The TCP/IP Model
`TCP/IP` (`Transmission Control Protocol`/`Internet Protocol`) is a generic term for many network protocols. The protocols are responsible for the switching and transport of data packets on the Internet. The Internet is entirely based on the `TCP/IP` protocol family. However, `TCP/IP` does not only refer to these two protocols but is usually used as a generic term for an entire protocol family.

For example, `ICMP` (`Internet Control Message Protocol`) or `UDP` (`User Datagram Protocol`) belongs to the protocol family. The protocol family provides the necessary functions for transporting and switching data packets in a private or public network.

The most important tasks of `TCP/IP` are:

| **Task** | **Protocol** | **Description** |
| --- | --- | --- |
| `Logical Addressing` | `IP` | Due to many hosts in different networks, there is a need to structure the network topology and logical addressing. Within TCP/IP, IP takes over the logical addressing of networks and nodes. Data packets only reach the network where they are supposed to be. The methods to do so are `network classes`, `subnetting`, and `CIDR`. |
| `Routing` | `IP` | For each data packet, the next node is determined in each node on the way from the sender to the receiver. This way, a data packet is routed to its receiver, even if its location is unknown to the sender. |
| `Error & Control Flow` | `TCP` | The sender and receiver are frequently in touch with each other via a virtual connection. Therefore control messages are sent continuously to check if the connection is still established. |
| `Application Support` | `TCP` | TCP and UDP ports form a software abstraction to distinguish specific applications and their communication links. |
| `Name Resolution` | `DNS` | DNS provides name resolution through Fully Qualified Domain Names (FQDN) in IP addresses, enabling us to reach the desired host with the specified name on the internet. |

### ISO/OSI vs. TCP/IP
`TCP/IP` is a communication protocol that allows hosts to connect to the Internet. It refers to the `Transmission Control Protocol` used in and by applications on the Internet. In contrast to `OSI`, it allows a lightening of the rules that must be followed, provided that general guidelines are followed.

`OSI`, on the other hand, is a communication gateway between the network and end-users. The OSI model is usually referred to as the reference model because it is older. It is also known for its strict protocol and limitations.

## Packet Transfers
In a layered system, devices in a layer exchange data in a different format called a `protocol data unit` (`PDU`). For example, when we want to browse a website on the computer, the remote server software first passes the requested data to the application layer. It is processed layer by layer, each layer performing its assigned functions. The data is then transferred through the network's physical layer until the destination server or another device receives it. The data is routed through the layers again, with each layer performing its assigned operations until the receiving software uses the data.

![image](https://academy.hackthebox.com/storage/modules/34/redesigned/net_models_pdu2.png)

During the transmission, each layer adds a `header` to the `PDU` from the upper layer, which controls and identifies the packet. This process is called `encapsulation`. The header and the data together form the PDU for the next layer. The process continues to the `Physical Layer` or `Network Layer`, where the data is transmitted to the receiver. The receiver reverses the process and unpacks the data on each layer with the header information. After that, the application finally uses the data. This process continues until all data has been sent and received.

![image](https://academy.hackthebox.com/storage/modules/34/packet_transfer.png)

For us, as penetration testers, both reference models are useful. With `TCP/IP`, we can quickly understand how the entire connection is established, and with `ISO`, we can take it apart piece by piece and analyse it in detail. This often happens when we can listen to and intercept specific network traffic. We then have to analyse this traffic accordingly, going into more detail in the `Network Traffic Analysis` module. Therefore, we should familiarise ourselves with both reference models and understand and internalise them in the best possible way.

## Subnetting
The division of an address range of IPv4 addresses into several smaller address ranges is called `subnetting`.

A subnet is a logical segment of a network that uses IP addresses with the same network address. We can think of a subnet as a labeled entrance on a large building corridor. For example, this could be a glass door that separates various departments of a company building. With the help of subnetting, we can create a specific subnet by ourselves or find out the following outline of the respective network:

-   `Network address`
-   `Broadcast address`
-   `First host`
-   `Last host`
-   `Number of hosts`

Let us take the following IPv4 address and subnet mask as an example:

-   IPv4 Address: `192.168.12.160`
-   Subnet Mask: `255.255.255.192`
-   CIDR: `192.168.12.160/26`

We already know that an IP address is divided into the `network part` and the `host part`.

#### Network Part

| **Details of** | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Decimal** |
| --- | --- | --- | --- | --- | --- |
| IPv4 | `1100 0000` | `1010 1000` | `0000 1100` | `10`10 0000 | 192.168.12.160`/26` |
| Subnet mask | `1111 1111` | `1111 1111` | `1111 1111` | `11`00 0000 | `255.255.255.192` |
| Bits | /8 | /16 | /24 | /32 |  |

In subnetting, we use the subnet mask as a template for the IPv4 address. From the `1`\-bits in the subnet mask, we know which bits in the IPv4 address `cannot` be changed. These are `fixed` and therefore determine the "main network" in which the subnet is located.

#### Host Part

| **Details of** | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Decimal** |
| --- | --- | --- | --- | --- | --- |
| IPv4 | 1100 0000 | 1010 1000 | 0000 1100 | 10`10 0000` | 192.168.12.160/26 |
| Subnet mask | 1111 1111 | 1111 1111 | 1111 1111 | 11`00 0000` | 255.255.255.192 |
| Bits | /8 | /16 | /24 | /32 |  |

The bits in the `host part` can be changed to the `first` and `last` address. The first address is the `network address`, and the last address is the `broadcast address` for the respective subnet.

The `network address` is vital for the delivery of a data packet. If the `network address` is the same for the source and destination address, the data packet is delivered within the same subnet. If the network addresses are different, the data packet must be routed to another subnet via the `default gateway`.

The `subnet mask` determines where this separation occurs.

#### Separation Of Network & Host Parts

| **Details of** | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Decimal** |
| --- | --- | --- | --- | --- | --- |
| IPv4 | 1100 0000 | 1010 1000 | 0000 1100 | 10`|`10 0000 | 192.168.12.160/26 |
| Subnet mask | `1111 1111` | `1111 1111` | `1111 1111` | `11|`00 0000 | 255.255.255.192 |
| Bits | /8 | /16 | /24 | /32 |  |

#### Network Address

So if we now set all bits to `0` in the `host part` of the IPv4 address, we get the respective subnet's `network address`.

| **Details of** | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Decimal** |
| --- | --- | --- | --- | --- | --- |
| IPv4 | 1100 0000 | 1010 1000 | 0000 1100 | 10`|00 0000` | `192.168.12.128`/26 |
| Subnet mask | `1111 1111` | `1111 1111` | `1111 1111` | `11|`00 0000 | 255.255.255.192 |
| Bits | /8 | /16 | /24 | /32 |  |

#### Broadcast Address

If we set all bits in the `host part` of the IPv4 address to `1`, we get the `broadcast address`.

| **Details of** | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Decimal** |
| --- | --- | --- | --- | --- | --- |
| IPv4 | 1100 0000 | 1010 1000 | 0000 1100 | 10`|11 1111` | `192.168.12.191`/26 |
| Subnet mask | `1111 1111` | `1111 1111` | `1111 1111` | `11|`00 0000 | 255.255.255.192 |
| Bits | /8 | /16 | /24 | /32 |  |

Since we now know that the IPv4 addresses `192.168.12.128` and `192.168.12.191` are assigned, all other IPv4 addresses are accordingly between `192.168.12.129-190`. Now we know that this subnet offers us a total of `64 - 2` (network address & broadcast address) or `62` IPv4 addresses that we can assign to our hosts.

| **Hosts** | **IPv4** |
| --- | --- |
| Network Address | `192.168.12.128` |
| First Host | `192.168.12.129` |
| Other Hosts | `...` |
| Last Host | `192.168.12.190` |
| Broadcast Address | `192.168.12.191` |

## Subnetting Into Smaller Networks
Let us now assume that we, as administrators, have been given the task of dividing the subnet assigned to us into 4 additional subnets. Thus, it is essential to know that we can only divide the subnets based on the binary system.

| **Exponent** | **Value** |
| --- | --- |
| 2`^0` | \= 1 |
| 2`^1` | \= 2 |
| 2`^2` | \= 4 |
| 2`^3` | \= 8 |
| 2`^4` | \= 16 |
| 2`^5` | \= 32 |
| 2`^6` | \= 64 |
| 2`^7` | \= 128 |
| 2`^8` | \= 256 |

___

Therefore we can divide the `64 hosts` we know by `4`. The `4` is equal to the exponent 2`^2` in the binary system, so we find out the number of bits for the subnet mask by which we have to extend it. So we know the following parameters:

-   Subnet: `192.168.12.128/26`
-   Required Subnets: `4`

Now we increase/expand our subnet mask by `2 bits` from `/26` to `/28`, and it looks like this:

| **Details of** | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Decimal** |
| --- | --- | --- | --- | --- | --- |
| IPv4 | 1100 0000 | 1010 1000 | 0000 1100 | 1000`|` 0000 | 192.168.12.128`/28` |
| Subnet mask | `1111 1111` | `1111 1111` | `1111 1111` | `1111|` 0000 | `255.255.255.240` |
| Bits | /8 | /16 | /24 | /32 |  |

Next, we can divide the `64` IPv4 addresses that are available to us into `4 parts`:

| **Hosts** | **Math** | **Subnets** | **Host range for each subnet** |
| --- | --- | --- | --- |
| 64 | / | 4 | \= `16` |

So we know how big each subnet will be. From now on, we start from the network address given to us (192.168.12.128) and add the `16` hosts `4` times:

| **Subnet No.** | **Network Address** | **First Host** | **Last Host** | **Broadcast Address** | **CIDR** |
| --- | --- | --- | --- | --- | --- |
| 1 | `192.168.12.128` | 192.168.12.129 | 192.168.12.142 | `192.168.12.143` | 192.168.12.128/28 |
| 2 | `192.168.12.144` | 192.168.12.145 | 192.168.12.158 | `192.168.12.159` | 192.168.12.144/28 |
| 3 | `192.168.12.160` | 192.168.12.161 | 192.168.12.174 | `192.168.12.175` | 192.168.12.160/28 |
| 4 | `192.168.12.176` | 192.168.12.177 | 192.168.12.190 | `192.168.12.191` | 192.168.12.176/28 |

## Mental Subnetting
It may seem like there is a lot of math involved in subnetting, but each octet repeats itself, and everything is a power of two, so there doesn't have to be a lot of memorization. The first thing to do is identify what octet changes.

| **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** |
| --- | --- | --- | --- |
| /8 | /16 | /24 | /32 |

It is possible to identify what octet of the IP Address may change by remembering those four numbers. Given the Network Address: `192.168.1.1/25`, it is immediately apparent that 192.168.2.4 would not be in the same network because the `/25` subnet means only the fourth octet may change.

The next part identifies how big each subnet can be but by dividing eight by the network and looking at the `remainder`. This is also called `Modulo Operation (%)` and is heavily utilized in cryptology. Given our previous example of `/25`, `(25 % 8)` would be 1. This is because eight goes into 25 three times (8 \* 3 = 24). There is a 1 leftover, which is the network bit reserved for the network mask. There is a total of eight bits in each octet of an IP Address. If one is used for the network mask, the equation becomes 2^(8-1) or 2^7, 128. The table below contains all the numbers.

| **Remainder** | **Number** | **Exponential Form** | **Division Form** |
| --- | --- | --- | --- |
| 0 | 256 | 2^8 | 256 |
| 1 | 128 | 2^7 | 256/2 |
| 2 | 64 | 2^6 | 256/2/2 |
| 3 | 32 | 2^5 | 256/2/2/2 |
| 4 | 16 | 2^4 | 256/2/2/2/2 |
| 5 | 8 | 2^3 | 256/2/2/2/2/2 |
| 6 | 4 | 2^2 | 256/2/2/2/2/2/2 |
| 7 | 2 | 2^1 | 256/2/2/2/2/2/2/2 |

By remembering the powers of two up to eight, it can become an instant calculation. However, if forgotten, it may be quicker to remember to divide 256 in half the number of times of the remainder.

The tricky part of this is getting the actual IP Address range because 0 is a number and not null in networking. So in our `/25` with 128 IP Addresses, the first range is `192.168.1.0-127`. The first address is the network, and the last is the broadcast address, which means the usable IP Space would become `192.168.1.1-126`. If our IP Address fell above 128, then the `usable ip space` would be 192.168.129-254 (128IPs the network and 255 is the broadcast).

