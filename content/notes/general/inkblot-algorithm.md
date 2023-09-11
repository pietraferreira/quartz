---
title: "Inkblot Algorithm"
tags:
  - cs
  - work/engineer-training
programming-languages:
  - c
created: 2022-06-06
---
# Inkblot Algorithm
---
Couldn't find much online about it, but I think it's a "populating" algorithm to find a path (A->B).

## Maze
![inkblot-1](notes/images/inkblot-1.png)

![inkblot-2](notes/images/inkblot-2.png)

## Recording the Path
Use recursion and an accumulator.

```c
struct path
{
  int x;
  int y;
  struct path *next;
}
```

```c
struct route *
blot (int x, int y, struct path *route)
{
  struct node *n = (struct node *) malloc (sizeof (*n));
  if (x,y) is destination
  {
    n->x = x, n->y = y, n->route = route;
    return n;
  }
  else
    for (each point (a,b) adjacent to (x,y)
    {
      n->x = x; n.y = y; n->route = route;
      newroute = blot (a, b, n);
      if (newroute)
        return newroute:
    }
  free (n);  /* Failure, give back node */
  return NULL;
}
```

## Contours
Want the intermediate contour.

Inkblot from both sides until meet, may get artefacts but will be optimal.

![contours](notes/images/contours.png)
