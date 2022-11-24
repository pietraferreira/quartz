---
title: "Vim Cheatsheet"
tags:
  - help
---
# Vim Cheatsheet

Thankfully I remember most of these but all of them are great :)

* **MD to PDF** and **MD to HTML** are custom.

**Shortcut** | **Function**
-------- | --------
`g` + `t` | Next tab
`g` + `T` | Previous tab
`z` + `z` | Center on this line
`Ctrl` + `[`, `Ctrl` + `]` | Previous or next tab
`Ctrl` + `w` + `s` | Horizontal split
`Ctrl` + `w` + `v` | Vertical split
`Ctrl` + `w` + `q` | Close 
`Ctrl` + `w` + `w` | Switch splits 
`Ctrl` + `j`, `h`, `k`, `l` | Move around
`<leader>` + `N` | Toggle number
`<leader>` + `r` | Shortcut to replace, press * on word then type replacement
`<leader>` + `p` + `p` | MD to PDF
`<leader>` + `p` + `h` | MD to HTML 

## How to macro

To enter a macro, type: `q<letter><commands>q`

To execute the macro **number** of times (once by default), type:
`<number>@<letter>`

So, the complete process looks like:

Command | What happens
------- | ------------
`qd` | start recording to register
`...` | your complex series of commands
`q` | stop recording
`@d` | execute your macro
`@@` | execute your macro again

 ## Insert text into multiple lines at once
 Press `Ctrl + v` to enter into visual block mode.

Use `↑` / `↓` / `j` / `k` to select multiple lines.

Press `Shift + i` and start typing what you want.

After you press `Esc`, the text will be inserted into all the lines you selected.

## Plugins
### Telescope
**Shortcut** | **Function**
-------- | --------
`leader` + `f` + `f` | Find files
`leader` + `f` + `g` | Live grep
`leader` + `f` + `k` | List key-maps and search
`Ctrl` + `x` | Open in vertical split
`Ctrl` + `v` | Open in horizontal split

### FzF
| Shortcut   | Function                 |
| ---------- | ------------------------ |
| `:Files`     | Search files.            |
| `:GFiles?`    | Git files (`git status`).  | 
| `:Buffers`   | Open buffers.            | 

### LSP
| Shortcut                             | Function                   |
| ------------------------------------ | -------------------------- |
| `g` + `l`                            | Check message on the side. |
| `g` + `D`                            | Go to declaration.         |
| `g` + `d`                            | Go to definition.          |
| `K`                                  | Hover message.             |
| `g` + `r`                            | Goto references.           |
| `:lua vim.lsp.buf.formatting_sync()` | Format code.               |
