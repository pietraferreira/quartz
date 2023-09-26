---
title:  "Perceptron"
tags: cs/ai
created: 2023-09-26
---
# Perceptron
---
Simplified model of a biological neuron, introduced by **Frank Rosenblatt** in the late 1950s.

## Inspiration from Biological Neurons
---
The model was inspired by the way biological neurons work. They receive electrical signals (inputs) from dendrites, process these signals and produce an output signal through an axon.

## Inputs and Weights
---
It takes multiple binary inputs (0 or 1), where each input is associated with a weight (which represents the importance or strength of that input).

## Processing
---
The Perceptron calculates the weighted sum of its inputs, which is often called the **activation** or **net input**. It then applies an activation function to this weighted sum to produce an output.

A simple step function can be used as the activation function, where the output is 1 if the weighted sum is above a certain threshold and 0 otherwise.

## Output
---
It is a binary value, typically 0 or 1. It represents the decision or classification made based on its inputs and weights. In some cases, the output might be modified to be -1 and 1 instead of 0 and 1.

## Learning
---
