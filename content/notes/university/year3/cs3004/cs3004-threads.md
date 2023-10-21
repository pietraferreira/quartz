---
title:  "Threads"
tags:
  - university
module: cs3004
lecturer:

created: 2023-10-21
year: '3'
type: lab
---
---
# What are threads?
- Threads are like different acts within a single teather play. They allow multiple activities to take place within a single process, such as your computer's main program or application.
- Think of them as lightweight actors in a play. Each actor (thread) has its own script (code), memory (stack), and props (local variables).
- Threads are like nested sequences of actions or dialogues in a play. They follow a particular script, just like threads execute a series of statements.
- These actors (threads) share the same stage, props, and sometimes even interact with each other during the play (share memory and resources).

# Why do we use threads?
- Threads are like backstage crew members that help make the show run smoothly. They enable various tasks to be performed simultaneously, similar to how a theater play might have actors rehearsing, while the stage is being set for the next act.
- In a graphical user interface (GUI) application, threads make the program responsive. It's like a magician performing tricks while the audience can still interact with the show.
- Threads can take advantage of multiprocessor systems, like having multiple chefs cooking in a big kitchen. However, for coordination between them, they need to communicate well, just like chefs using messages to coordinate.
- When you have different characters with independent stories happening at the same time in a play, using threads can simplify your program's logic.

## Creating a Thread
- Creating a thread is like casting a new character for a play.
- There are two ways to do it:
  1. Using the Thread constructor is like creating a new actor from scratch.
  2. Extending the Thread class is like having a new actor that inherits the general script but has a unique role.

```java
public class ThreadDemo extends Thread {

    public void run() {
        System.out.println("My thread is in the running state.");
    }

    public static void main(String args[]) {
        // Create the new thread
        ThreadDemo thisIsTheThread = new ThreadDemo();
        // Start it
        thisIsTheThread.start();
    }
}
```

# Thread Lifecycle
- A thread's life is like a character's journey in a story. It starts when the curtain rises and ends when the final scene is played out.

## How a Thread Ends
- A thread's journey ends when its role in the play is over. This is similar to an actor leaving the stage when their part is done.
- It can also end abruptly if something goes wrong, like an actor suddenly getting sick during a performance.
- Or it might end when the entire play concludes and the curtain falls.
- Sometimes, another character (thread) can make a thread exit prematurely by calling the "stop" method, like a director telling an actor to leave the stage.

## Threads Need Synchronisation
- In a busy teather, actors may share props or need to perform tasks in sync. Without coordination, chaos can ensue.
- Synchronisation in threads is like having a stage manager who ensures only one actor can access a specific prop at a time. The others must wait their turn.
- The "synchronized" keyword acts like a backstage pass that only one actor can hold at a time. The rest have to wait for their turn, like waiting in line to use a makeup mirror.

## Waiting and Notifying
- Threads can communicate like actors leaving notes for each other.
- The "wait" method is like an actor leaving a note and exiting the stage, allowing others to perform.
- "notify" and "notifyAll" are like other actors picking up those notes and returning to the stage to perform their roles.

## Running and Yielding
- Threads have priorities, just like actors in a play might have different importance.
- "Yield" is like an actor stepping aside, giving others with the same importance (priority) a chance to perform.

## Sleeping and Waking Up
- Sometimes, actors need a break or a character has to take a nap in the story.
- "Sleep" is like an actor temporarily leaving the stage for some rest and then coming back to continue the performance.

## Monitors
- In a theater, only one actor can be in a dressing room (monitor) at a time.
- In concurrency, monitors ensure only one thread can access a specific resource or method at any given moment.

```java
public class SharedData {
    private boolean accessing = false; // true a thread has a lock, false otherwise

    // Attempt to acquire a lock
    public synchronized void acquireLock() throws InterruptedException {
        while (accessing) {
            System.out.println(me.getName() + " waiting to get a lock as someone else is accessing...");
            wait();
        }
        accessing = true;
        System.out.println(me.getName() + " got a lock!");
    }

    // Releases a lock when a thread is finished
    public synchronized void releaseLock() {
        accessing = false;
        notifyAll();
        Thread me = Thread.currentThread();
        System.out.println(me.getName() + " released a lock!");
    }
}
```

### Example: Sharing Data Among Threads
- Think of a theater play where actors share props, and to avoid conflicts, they have to follow specific rules.
- In this example, shared data is like a prop that actors (threads) want to use.
- The "acquireLock" method is like a rule stating that only one actor can use the prop at a time.
- The "releaseLock" method is like an actor returning the prop and notifying others that it's available. Threads are like actors following these rules to access and return the prop, ensuring orderly interactions during the play.

### More Examples
#### Thread Creation by Extending the Thread Class:
```java
public class ThreadDemo extends Thread {

    public void run() {
        System.out.println("My thread is in running state.");
    }

    public static void main(String args[]) {
        // Create the new thread
        ThreadDemo thisIsTheThread = new ThreadDemo();
        // Start it
        thisIsTheThread.start();
    }
}
```

#### Counting with Threads:
```java
public class Count extends Thread {
    Count() {
        super("MY THREAD");
        System.out.println("The thread just created is called " + this.getName());
        start();
    }

    public void run() {
        try {
            for (int i = 0; i < 10; i++) {
                System.out.println("Printing the count " + i);
                Thread.sleep(1000); // Pause the thread
                long threadID = Thread.currentThread().getId();
                System.out.println("Child " + threadID);
            }
        } catch (InterruptedException e) {
            System.out.println("My thread interrupted");
        }
        System.out.println("My thread run is over");
    }

    public static void main(String args[]) {
        Count cnt = new Count();
    }
}
```