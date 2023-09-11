---
title: "Facial Recognition Google Board - Script" 
tags:
  - work
  - script
programming-languages:
created: 2020-08-05
---
# Facial Recognition Google Board - Script
---
Will was the one to actually deliver this talk as I wasn't feeling well on that day.

## Facial Recognition on Google's Edge TPU
* AI is typically associated with high power computing and big data.
* However, there is an increasing need for development of AI systems for embedded applications.
  
## Google's Edge TPU
* Main purpose of prototyping on-device machine learning models.
* High-speed machine learning interferencing.
* Coprocessor capable of performing 4 trillion operations per second (TOPS), at low energy (0.5 watts for each TOPS, being 2 TOPS per  watt).
* For example, it can execute MobileNet v2 at almost 400 FPS, while being power efficient.
* It runs a derivative of Debian Linux, called Mendel
* TensorFlow Lite models can now be compiled to run on the Edge TPU
  
## Facial Recognition
* The hardware design of the Edge TPU was developed to accelerate deep feed-forward neural networks.
* Some examples are CNNs, RNNs and LSTMs
* At the time there were only demos for classification and object detection models.
* Therefore, facial recognition seemed like a reasonable next step.
  
NOTE: Can speak about how we pondered over the idea of working with sound. However, for the reasons mentioned above, models that process sound are out of the Edge TPU's capabilities as they normally rely on time based architectures such as RNNs and LSTMs.

## Compatibility
* The board supports only TensorFlow Lite models that are fully quantised and then specifically compiled for the Edge TPU.
* TensorFlow Lite:
    * It is a lightweight version of TensorFlow designed for mobile  and embedded devices.
    * TensorFlow Lite models can be made even smaller and more efficient through quantisation, which converts 32-bit parameter data into 8-bit representations.

![](https://coral.ai/static/docs/images/edgetpu/compile-workflow.png)

* Those are the steps of porting a model to the board

## Implementing Facial Recognition
* There are three steps to implementing facial recognition:

1. Pre-processing - take a set of image and covert to a uniform format.
2. Embedding - learns representations of faces in a multidimensional space where distance corresponds to a measure of face similarity.
3. Classification - uses information given by the embedding process to separate distinct faces.

* Given the three stages, we constructed an architecture for our specific implementation:
  
  1. Use an alignment script to perform preprocessing.
  2. Train a deep MobileNet model to recognise faces, then split it at a layer which represents embeddings.
  3. Attach a single layer classification model and train it using weight imprinting.
  
## Aligning
* This step occurs on the machine, not on the Edge TPU.
* Used an alignment script from the FaceNet GitHub repository.
* By executing it, we can specify the size of the face thumbnails and have them aligned.
* We used the CASIA Webface for testing, which contains hundreds of thousands of images.
* It took us 30 minutes in a 20 cores server machine, 2.5h on a Macbook Pro.
* We then had to convert it to a TFRecord format.

## Embedding
* The embedding model is a concatenation of convolution layers which looks for features and maps them to multidimensional space.
* We started with a pre-trained version of MobileNet and retrained it.
* For training we used a Python script which takes as input a dataset in TFRecord format and checkpoints.
* We had to then save a GraphDef of the model and freeze the graph.
* Important to strip out the L2-norm operator as it is not supported by the Edge TPU.

## Classification
* The model needs to get split into two parts, the embedding extractor and the classification layer, and then re-joined.
* The reason for the split is because we plan to use the embeddings as input for a single layer classification model.
* This step ensures that we are able to use weight imprinting, meaning that the model will be able to train on a limited dataset (from around five to ten images) to recognise a face it has never seen before.
* Firstly we converted the entire frozen graph to a TFLite file to then create the base graph as its own file.
* From this we have our embedding extractor completely separated from the classification layer.
* We can now create the head graph and compile the base graph using the Edge TPU compiler.
* Finally, the compiled base graph and the head graph gets re-joined.

## Project Update (?)
* One of our biggest challenges was to keep up with the constant updates that the board was receiving as the software was on BETA when we started the project.
* Quantisation was another challenge to overcome, it limited our choice of models.