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

- Service descriptions (WSDL):
![[notes/images/Screenshot 2023-10-17 at 17.39.54.png|500]]

#### Case Study
![[notes/images/Screenshot 2023-10-17 at 17.40.17.png|500]]

