---
title: "Admonition Cheatsheet"
tags:
  - help
---
# Admonition Cheatsheet
---
```
ad-<type> # Admonition type. 
title: # Admonition title.
collapse: # Create a collapsible admonition.
icon: # Override the icon.
color: # Override the color.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```

## Code Block
```ad-bug
title: I'm a bug!
~~~javascript
throw new Error("Oops, I'm a bug.");
~~~
```

## Nested
````ad-info

```ad-bug
title: I'm Nested!
~~~javascript
throw new Error("Oops, I'm a bug.");
~~~
```

```javascript
console.log("Hello!");
```

````

## Admonition Types

The following admonition types are currently supported:

| Type     | Aliases                     |
| -------- | --------------------------- |
| note     | note, seealso               |
| abstract | abstract, summary, tldr     |
| info     | info, todo                  |
| tip      | tip, hint, important        |
| success  | success, check, done        |
| question | question, help, faq         |
| warning  | warning, caution, attention |
| failure  | failure, fail, missing      |
| danger   | danger, error               |
| bug      | bug                         |
| example  | example                     |
| quote    | quote, cite                 |

---
More info [here](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) and [here is the repo](https://github.com/valentine195/obsidian-admonition).