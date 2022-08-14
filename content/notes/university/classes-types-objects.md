---
title: "Classes, Types and Objects"
tags:
programming-languagues:
  - java
module:
  - algorithms
term:
  - summer
created: 2022-08-14
---
# Classes, Types and Objects
Notes from "Data Structures and Algorithms in Java by Michael T. Goodrich".

```toc
```

![](notes/images/Pasted%20image%2020220814184657.png)

**Objects** store data and provide methods for accessing and modifying data. Every **object** is an instance of a **class**, which defines the **type** of the object and the kind of operations it performs. The **members** of a class are:
    - Data of objects are stored in **instance variables** (aka **fields**).
    - Operations can act on data, **methods**.

## Class Modifiers
Optional keywords that precede the **class** keyword:

- **abstract**: signifies that a class/method is expected to be overridden, they are empty. A class with nothing but abstract methods and no instance variables is called an **interface**.
- **final**: can't have sub classes.
- **public**: can be instantiated or extended by anything in the same package or by anything that imports the class.
- if public is not used, the class is considered **friendly**. This means it can be used and instantiated by all classes in the same **package** (this is the default class modifier).

## Primitive Types (Base Types)
- Boolean: true or false.
- Char: 16-bit Unicode character.
- Byte: 8-bit signed two's complement integer.
- Short: 16-bit two's complement integer.
- Int: 32-bit two's complement integer.
- Long: 64-bit two's complement integer.
- Float: 32-bit floating-point number.
- Double: 64-bit floating-point number.

Floating-points constants, like 3.1415, are of type **double** unless followed by an 'F' or 'f'.

```java
public class Primitive_Types {
    public static void main (String[] args) {
        boolean flag = true;
        char ch = 'A';
        byte b = 12;
        short s = 23;
        int i = 341;
        long l = 561L;
        float f = 3.1415F;
        double d = 6.4231;

        System.out.println("flag = " + flag);
        System.out.println("ch = " + ch);
        System.out.println("b = " + b);
        System.out.println("s = " + s);
        System.out.println("i = " + i);
        System.out.println("l = " + l);
        System.out.println("f = " + f);
        System.out.println("d = " + d);
    }
}
```
## Objects
New objects are created by using the **new** operator. It creates a new object and returns a **reference** to that object. We must immediately follow our use of the **new** operator by a call to a constructor for that type of object.

![](notes/images/Pasted%20image%2020220814190529.png)

Three events occur:

1. New object is dynamically allocated in memory and all instance variables are initialised to standard default values. Default is **null** for object variables and 0 for all base types except **boolean** which is false.
2. Constructor is called with the parameters specified. It fills in meaningful values for the instance variables and performs any additional computations to create the object.
3. After constructor returns, the **new** operator returns a reference (memory address) to the newly created object.

## Dot Operator
Every object reference variable must refer to some object, unless it is **null**. 

An object can have many references pointing to it, the same one. One of the main uses of an object reference variable is to access the members of the class for this object, for example methods. This access is performed with the dot operator.

A method's name, number and types of parameters is called a method's **signature**. For example:

```java
oven.cookDinner();
oven.cookDinner(food);
oven.cookDinner(food, seasoning);
```
Each of these methods calls is referring to a different method with the same name defined in the class that oven belongs to. 

The signature of a method in Java **does not** include the type that the method returns, meaning Java doesn't allow two methods with the same signature to return different types.

## Variable Modifiers
The **scope** can be controlled by the following variable modifiers:

1. **public**: anyone can access it.
2. **protected**: only methods of the same package or of its sub classes can access it.
3. **private**: only methods of the same class can access it.
4. If none used then it is **friendly**, meaning anyone in the same package can access.

**Usage modifiers**:
1. **static**: variable is associated with the class, not with the individual instances of that class. They store **global** information about a class.
2. **final**: must be assigned an initial value and then can never be assigned a new value after that.

![](notes/images/Pasted%20image%2020220814192407.png)

## Enum Types
Enumerated types. Only allowed to take on values that come from a specified set of names declared inside a class as follows:

```java
modifier enum name { val_name0, val_name1, ..., val_namen-1};
```

where the modifier can be blank, public, protected or private. Another example:

```java
public enum Day { MON, TUE, WED, THU, FRI, SAT, SUN };
```

![](notes/images/Pasted%20image%2020220814192633.png)

## Return Types
If the method doesn't return a value, then we use **void**. If the return type is void, the method is called a **procedure**.

## Parameters
They are passed **by value**, meaning that any time we pass a parameter to a method, a copy of that parameter is made for use within the method body. So if we pass an **int** to a method, then that variable's integer value is copied. The method can change the copy but not the original. If we pass an object by reference as a parameter to a method, then the reference is copied as well.

## Constructor
Initialises newly created objects:

```java
public fish (int w, String n) {
    weight = w;
    name = n;
}
```

Return statements are not allowed in a constructor body.

Constructors **must** be called using the **new** operator. For example:

```java
Fish myFish = new Fish(8, "Bob");
```

## Arrays
(Page 60)