---
title: "REST API"
tags:
programming-languagues:
module:
  - cs2001
  - cs2002
term:
  - first-term
created: 2022-09-19
---
# REST API
APIs provide a standardised way for two applications to send data back and forth. 

REST is a set of guidelines that software can use to communicate over the internet in order to make integrations simple and scalable.

REST stands for **Representational State Transfer**, meaning that when a client requests a resource using a REST API, the server transfer back the current state of the resource in a standardised representation.

For example, my program can ask Youtube's REST API for information about a specific video, Youtube will respond to the request with the resource state, which includes attributes like the video name, publishing date, view count and video link - all packaged in a format that the receiving program can quickly parse and use. 

1. Client-Server Separation.
2. Uniform Interface.
3. Stateless.
4. Layered System.
5. Cacheable.
6. Code on Demand (Optional).

## Why use REST APIs?
- They are flexible, scalable and they incorporate existing web technologies.