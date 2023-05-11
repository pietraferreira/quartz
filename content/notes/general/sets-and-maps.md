---
title: "Sets and Maps"
tags:
  - engineer-training
  - university/cs2004 
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
> [!failure]- Failure 
>   Error: There is another generation process
>   
>   - plugin:obsidian-textgenerator-plugin:56949 TextGenerator.eval
>     plugin:obsidian-textgenerator-plugin:56949:31
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>   - plugin:obsidian-textgenerator-plugin:62 __async
>     plugin:obsidian-textgenerator-plugin:62:10
>   
>   - plugin:obsidian-textgenerator-plugin:56935 TextGenerator.generate
>     plugin:obsidian-textgenerator-plugin:56935:12
>   
>   - plugin:obsidian-textgenerator-plugin:58440 AutoSuggest.eval
>     plugin:obsidian-textgenerator-plugin:58440:52
>   
>   - Generator.next
>   
>   - plugin:obsidian-textgenerator-plugin:78 eval
>     plugin:obsidian-textgenerator-plugin:78:61
>   
>   - new Promise
>   
>  
