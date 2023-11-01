---
title:  "Cs3004 - Coursework"
tags:
  - university
module: cs3004
lecturer:
created: 2023-11-01
year: '3'
type: coursework
---
---
- Title page:

Be sure to include your student ID number, the title of the assignment, the name, module code and year of the module and the submission date.

# Introduction
The main goal of this assignment is to develop a network computing application that simulates a car park management system, known as the WLFB Car Park (WCP). The car park has two entrances (Entrance A and Entrance B) and two exits (Exit A and Exit B). Cars can enter the car park and leave when a space is available. In this assignment, it is a requirement to implement a multi-threaded client-server system using Java sockets and thread to manage the car park.

# Requirements
Below you can find the essential requirements:
1. Four Clients: four clients must be created to simulate the two entrances and two exists. Each client will only perform specific operations.
2. Client Operations: clients should be able to perform the following operations:
    - `check_space`: returns the current number of available spaces in the car park.
    - `add_car`: removes one car from the entrance queue and instructs the server to add one car to the car park.
    - `remove_car`: instructs the server to remove one car from the car park.
3. Thread Safety: to ensure data consistency in a multi-threaded environment, locking mechanisms must be used. Proper synchronisation is required to avoid race conditions.
4. Server Functionality: the server should manage the car park variables and execute client instructions. It should appropriately respond to client requests and confirm changes to the car park's state.

# Design
The primary focus is on the protocol used for communication between clients and the server.

## Protocol between Entrance Client and Server
- `check_space`: the client sends a request to check the current available spaces in the car park. The server responds with the number of available spaces.
- `add_car`: the client requests to add a car to the car park. The server processes the request by adding a car to the car park.

## Protocol between Exit Client and Server
- `remove_car`: the exit client instructs the server to remove a car from the car park. The server processes the request by decreasing the number of cars in the car park.

## Locking and Synchronisation Mechanisms
In the multi-threaded client-server system, proper locking and synchronisation mechanisms are essential to prevent race conditions and ensure data consistency. These mechanisms are used to coordinate access to shared resources, such as the car park variables. Here's how they are applied:

1. **Acquiring Locks**: before a client or the server accesses shared data, it must acquire a lock. In the context of the car park, clients need to acquire a lock before making requests, and the server needs to acquire a lock before processing those requests. This prevents multiple clients from accessing the server simultaneously.
2. **Releasing Locks**: 

## Protocol Table
| Client          | Message       | Description                                | Server Response             |
| --------------- | ------------- | ------------------------------------------ | --------------------------- |
| Entrance Client | `check_space` | Request to check available parking spaces. | Number of available spaces. |
| Entrance Client | `add_car`     | Request to add a car to the car park.      | Confirmation message.       |
| Exit Client     | `remove_car`  | Request to remove a car from the car park. | Confirmation message.       |

In the protocol table above:
- **Client**: represents whether the client is and Entrance or Exit Client.
- **Message**: indicates the specific operation requested by the client.
- **Description**: provides a brief explanation of the message's purpose.
- **Server Response**: specifies the response sent by the server after processing the message.
# Implementation

# Testing

# Conclusions