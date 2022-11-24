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

![Pasted image 20220814184657](notes/images/Pasted%20image%2020220814184657.png)

**Objects** store data and provide methods for accessing and modifying data. Every **object** is an instance of a **class**, which defines the **type** of the object and the kind of operations it performs. The **members** of a class are:
    - Data of objects are stored in **instance variables** (aka **fields**).
    - Operations can act on data, **methods**.

## Class Modifiers
Access control modifiers, meaning they control the level of access (visibility) that the defining class grants to other classes.

The ability to limit access among classes -> encapsulation.

### Public
All classes may access the defined aspect. For example:

```java
public class Counter {
```

All other classes, such as CounterDemo, are allowed to construct new instances of the Counter class, as well as to declare variables and parameters of type Counter.

Each **public class** must be defined in **a separate file**, class name = `classname.java`.

The designation of **public** access for a particular method of a class allows any other class to make a call to that method. For example:

```java
public int getCount() {
    return count;
}
```

The CounterDemo class may call `c.getCount()`.

Therefore, if an instance variable is declared as public, dot notation can be used to directly access the variable by code in any other class that possesses a reference to an instance of this class. For example, if Counter is public, CounterDemo would be allowed to read or modify that variable using syntax such as `c.count`.

### Protected
Access is only granted to the following groups of other classes:

- **Subclasses** through inheritance.
- Classes that belong to the same **package**.

### Private
Access is only granted within that class, neither subclass nor any other classes have access to such members.

For example, we defined the count instance variable of the Counter class to have private access level. We were allowed to read or edit its value from within methods of that class (such as getCount, increment, and reset), but other classes such as CounterDemo cannot directly access that field. 

Of course, we did provide other public methods to grant outside classes with behaviours that depended on the current count value.

### No control modifier
Then we default to **package-private** access level.

### Static
The class' value is associated with the class as a whole, rather than with each individual instance of that class.

Static variables are used to store **"global"** information about a class. For example, to maintain the total number of instances of that class that have been created. Static variables exist even if no instance of their class exists.

Being static is **associated with the class itself, and not with a particular instance of the class**. This means that the method is not invoked on a particular instance of the class using the traditional dot notation, instead it uses the name of the class as a qualifier.

For example, the `java.lang` package has a Math class that provides many static methods, including `sqrt`, square root. To compute a square root, you do not need to create an instance of the Math class, you use `Math.sqrt(2)` for example, with the class name Math as the qualifier before the dot operator.

"Static methods can be useful for providing utility behaviours related to a class that need not rely on the state of any particular instance of that class."

### Abstract
Any subclass of a class with abstract methods is expect to provide a concrete implementation for each abstract method.

Abstract methods are an advanced feature of object-oriented programming to be combined with inheritance.

A class with one or more abstract methods must also be formally declared as **abstract**, because it is incomplete. As a result, Java won't allow any instances of an abstract class to be constructed, although reference variables may be declared with an abstract type.

### Final
A variable declared with final can be initialised but can never again be assigned a new value. If it is a base type, then it is a constant. If a reference is final, then it will always refer to the same object. If a member variable of a class is declared as final, it will typically be declared as **static** as well, because it would be unnecessarily wasteful to have every instance store the identical value when that value can be shared by the entire class.

A final method cannot be overridden by a subclass, and a final class cannot even be subclassed.

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

![Pasted image 20220814190529](notes/images/Pasted%20image%2020220814190529.png)

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

![Pasted image 20220814192407](notes/images/Pasted%20image%2020220814192407.png)

## Enum Types
Enumerated types. Only allowed to take on values that come from a specified set of names declared inside a class as follows:

```java
modifier enum name { val_name0, val_name1, ..., val_namen-1};
```

where the modifier can be blank, public, protected or private. Another example:

```java
public enum Day { MON, TUE, WED, THU, FRI, SAT, SUN };
```

![Pasted image 20220814192633](notes/images/Pasted%20image%2020220814192633.png)

## Return Types
If the method doesn't return a value, then we use **void**. If the return type is void, the method is called a **procedure**.

## Parameters
They are passed **by value**, meaning that any time we pass a parameter to a method, a copy of that parameter is made for use within the method body. So if we pass an **int** to a method, then that variable's integer value is copied. The method can change the copy but not the original. If we pass an object by reference as a parameter to a method, then the reference is copied as well.

## Constructor
Special kind of method that is used to initialise a newly created instance of the class so that it will be in a consistent and stable initial state. The general syntax is:

```java
modifiers name(type, parameter) {
    // constructor body...
}
```

```java
public fish (int w, String n) {
    weight = w;
    name = n;
}
```

1. Constructors cannot be **static**, **abstract** or **final**. Only public, protected, private or default.
2. The name of the constructor must be identical to the name of the class it constructs. For example, when defining the Counter class, a constructor must be named Counter as well.
3. We don't specify a **return type** for a constructor, not even **void**. Nor does the body of a constructor explicitly return anything.

A class can have many constructors, but each must have a different **signature**, meaning each must be distinguished by the type and number of the parameters it takes.

Constructors **must** be called using the **new** operator. For example:

```java
Fish myFish = new Fish(8, "Bob");
```

As an example, our Counter class defines the following pair of constructors: 

```java
public Counter() { }  
public Counter(int initial) { count = initial; }
```

The first of these has a trivial body, { }, as the goal for this default constructor is to create a counter with value zero, and that is already the default value of the integer instance variable, count. 

However, it is still important that we declared such an explicit constructor, because otherwise none would have been provided, given the existence of the non-default constructor. In that scenario, a user would have been unable to use the syntax, `new Counter()`.

## This
Within the body of a (non-static) method in Java, the keyword this is automatically defined as a reference to the instance upon which the method was invoked. 

That is, if a caller uses a syntax such as `thing.foo(a, b, c)`, then within the body of method foo for that call, the keyword this refers to the object known as thing in the caller’s context.

Why we need it from within a method body:

1. To store the reference in a variable, or send it as a parameter to another method that expects an instance of that type as an argument.

## Arrays
(Page 60)