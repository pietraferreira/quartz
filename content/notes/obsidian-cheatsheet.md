---
title: "Obsidian Cheatsheet"
tags:
  - help
---

# Obsidian Cheatsheet

Where I dump all the useful Obsidian commands I'd hope to remember.

[Here](https://morioh.netlify.app/) is the website and everything on how to run it [here](obsidian-website).

## Essentials
### Some basics

_Make new note_ — `Cmd-n`
_Create note in new pane_ — `Cmd-shift-n`
_Open the link you’re hovering over in a new pane (while in edit mode)_ — `Cmd-click`
_Toggle edit/preview mode_ — `Cmd-e`
_Open quick switcher_ — `Cmd-o`
_Close active pane_ — `Cmd-w`
_Go back_ — `Cmd-backspace`
_Fold all_ — `Cmd-shift-.`
_Unfold all_ — `Cmd-shift-,`

### Formatting basics

_Undo, cut, copy, paste, bold, italicise — `Cmd-z,x,c,v,b,i`

---

## Intermediate

_Open command palette_ — `Cmd-p`
_Search and replace in current file_ — `Cmd-f`
_Search in all files_ — `Cmd-shift-f`
_Split horizontally_ — `Cmd-d`
_Split vertically_ — `Cmd-shift-d`
_Save as PDF_ — `Cmd-shift-p`

---
## Advanced
### Changing the view

_Toggle left sidebar_ — I mapped this to: `Cmd-LeftArrow`
_Toggle right sidebar_ — I mapped this to: `Cmd-RightArrow`

### Setup and File Management

_Open settings_ — `Cmd-,`

### Very cool!

_Multiple cursors_ — `option-click`

---

## Community Plugins

- [Admonition Cheatsheet](notes/admonition-cheatsheet.md)
- [Ozan's Image Editor](notes/ozans-image-editor.md)

### Hotkeys++

_Change list type_ — `Cmd-shift-m`
_Toggle to-do list type_ — `Cmd-m`
_Toggle to-do list_ — `Cmd-enter`

### Advanced tables

_Can use : on the left or right_ — makes it left or right aligned

### Note Refactor

The default hotkeys are:

| Hotkey                                                                   | Action                           |
| ------------------------------------------------------------------------ | -------------------------------- |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>                    | **Extract selection to new note - first line as filename:** Copy selection into new note with the first line as the file name and replace with a link.                 |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>                    | **Extract selection to new note - /notes only:** Copy selection into new note, prompt for a file name and replace with a link.                 |

```ad-warning
title: Warning

Hotkey defaults are deliberately not set for note splitting commands to avoid unwanted accidents.
```

The new note file is created at the root of the vault with the filename as the first line of the selected text and the /notes as the rest of the selected text.

Heading characters (`#`) and other illegal characters for filenames are removed including `:`, `\`, `/`.

## Resources
Dataview [Wiki](https://blacksmithgu.github.io/obsidian-dataview/).