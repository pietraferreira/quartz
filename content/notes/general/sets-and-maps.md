---
title: "Sets and Maps"
tags:
  - cs-concept
  - engineer-training
programming_languages:
  - c
  - cpp
---
# Sets and Maps
---
**Sets** are a collection of objects:
  - They might be ordered or unordered.
  - Two variants:
      1. Single instance of any object.
      2. Multiple instances.

**Maps** associate a *value* or *values* with a *key*:
  - They might be ordered or unordered.
  - Two variants:
      1. Single value per key.
      2. Multiple values per key.

Example:
```c
#include <map>

std::map<size_t, std::string> map;

map[0] = "Hello";
map[1] = "you";
map[2] = "there!";
```

Example in C++:
```cpp
#include <map>
#include <string>
using namespace std;

int main() {
  map<int, string> sample_map;
  sample_map.insert(pair<int, string>(1, "one"));
  sample_map.insert(pair<int, string>(2, "two"));

  cout << sample_map[1] << " " << sample_map[2] << endl;
}
```

Another example but needs C++11:
```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
  map<int, string> sample_map { { 1, "one"}, { 2, "two" } };

  cout << sample_map[1] << " " << sample_map[2] << endl;
}
```
```ad-note
C++ has great built-in support for these, C does not.
```

---
### Resources
[C++ Maps Explained](https://www.udacity.com/blog/2020/03/c-maps-explained.html)