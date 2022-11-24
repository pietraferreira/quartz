---
title: "Blockchain"
tags:
  - blockchain
  - help
programming-languagues:
created: 2022-07-01
---
# Blockchain
---
- Video [source](https://www.youtube.com/watch?v=gyMwXuJrbJQ).
- More https://github.com/smartcontractkit/full-blockchain-solidity-course-js#welcome-to-the-course.

## What is a Blockchain?
It is a distributed database or ledger that is shared among the nodes of a computer network. It stores information electronically in digital format. 

They are best known for their role in cryptocurrency system, such as Bitcoin, for maintaining a secure and decentralised record of transactions.

The main difference between a typical database and a blockchain is how the data is structured. A **blockchain** collects information together in groups, known as **blocks**, that hold sets of information. They have certain storage capacities and, when filled, are closed and linked to the previous filled block, forming a **chain** of data known as the blockchain. A database usually structures its data into tables.

## What is a Smart Contract?
They are computer programs that are hosted and executed on a blockchain network.

Each smart contract consists of code specifying **predetermined** conditions that, when met, trigger outcomes. By running on a decentralised blockchain instead of a centralised server, smart contracts allow multiple parties to come to a shared result in an accurate, timely and **tamper-proof** manner.

They are a powerful infrastructure for automation because they are not controlled by a central administrator and are not vulnerable to single points of attack by malicious entities.

One smart contract can have multiple different conditions and one application can have multiple different smart contracts to support an interconnected set of processes. 

An example of a contract language for programming is Ethereum's [Solidity](https://docs.soliditylang.org/en/v0.8.7/).

Any developer can create a smart contract and deploy it on a public blockchain for their own purposes, e.g., a personal yield aggregator that automatically shifts their funds to the highest-earning application. However, many smart contracts involve multiple independent parties that may or may not know one another and don’t necessarily trust one another. 

The smart contract defines exactly how users can interact with it, involving who can interact with the smart contract, at what times, and what inputs result in what outputs.  The result is multi-party digital agreements that evolve from today’s probabilistic state, where they will **probably** execute as desired, to a new deterministic state where they are **guaranteed** to execute according to their code.

## What is an Oracle?
A [blockchain oracle](https://blog.chain.link/oracles-the-key-to-unlocking-smart-contracts/) is any device or entity that connects a deterministic blockchain with off-chain data.

![Screenshot 2022-07-01 at 09-53-33 What Is a Blockchain Oracle](notes/images/Screenshot%202022-07-01%20at%2009-53-33%20What%20Is%20a%20Blockchain%20Oracle.png)

If there is an API in the middle, the nodes could be interfered.

In blockchain, the mechanism for agreeing upon a data value is called [consensus](https://blockgeeks.com/guides/blockchain-consensus/), and determinism is important so that nodes can come to a consensus.

Oracles enter every data input through an external transaction. This way, we can be sure that the blockchain itself contains all of the information required to verify itself. This is why oracles are known as blockchain middleware: They are the bridge between the two worlds.

![Screenshot 2022-07-01 at 09-55-17 What Is a Blockchain Oracle](notes/images/Screenshot%202022-07-01%20at%2009-55-17%20What%20Is%20a%20Blockchain%20Oracle.png)

[The oracle problem](https://ethereum.stackexchange.com/a/84645/57451) is these two pieces combined:

1.  Blockchains alone can’t access outside data.
2.  Using centralised oracles nullifies the advantage of smart contracts — and are major security risks

[Chainlink](https://chain.link/) solves both of these and is the standard for decentralised oracles.

### What is a decentralised oracle?
A [decentralised oracle](https://docs.chain.link/docs/architecture-decentralised-model) or decentralised oracle network is a group of independent blockchain oracles that provide data to a blockchain. Every independent node or oracle in the decentralised oracle network independently retrieves data from an off-chain source and brings it on-chain. The data is then aggregated so the system can come to a deterministic value of truth for that data point. Decentralised oracles solve the oracle problem.

Chainlink is a framework for choosing your independent network of nodes to connect the real world’s data to the blockchain to enable smart contracts to reach their true potential. With this, we are leveraging the same reliable decentralised infrastructure concept the blockchain has, but for blockchain oracles. If nodes/sources are hacked, depreciated, or deleted, the network of Chainlink will leverage the decentralised network and carry on.

![decentralised Oracles are the solution to the Oracle Problem.](https://miro.medium.com/max/700/1*86phwklV3lpLzdz6Ob1gdg.png)

There are massive marketplaces leveraging the Chainlink technology to help you pick your network of independent nodes to pull your data from. This way, your smart contracts can easily never have a single point of failure.

The technology is blockchain agnostic and is constantly working to integrate with more blockchains so all blockchains can have access to reliable secure off-chain data. And best of all, the [documentation](https://docs.chain.link/docs) is great for beginner engineers and experienced alike.

Using one blockchain oracle is a huge risk and chainlink offers a fantastic new ecosystem around data. Blockchain oracles are the key to unlocking the future that smart contracts have for us. Oracles also provide a way for blockchains to see into each other. This is known as [interoperability](https://cointelegraph.com/explained/blockchain-interoperability-explained), and is an important next step as well.

## Web3
An idea for a new World Wide Web which incorporates concepts such as decentralisation, using blockchain technologies for example.