---
title: "Tmux Cheatsheet"
tags:
  - help
programming-languages:
created: 2022-06-09
type: cheatsheet
---
# Tmux Cheatsheet
---
**tmux** is a terminal multiplexer: it enables a number of terminals to be created, accessed, and controlled from a single screen.  **tmux** may be detached from a screen and continue running in the background, then later reattached.

   When **tmux** is started, it creates a new session with a single window and displays it on screen.  A status line at the bottom of the screen shows information on the current session and is used to enter interactive commands.

   A session is a single collection of pseudo terminals under the management of **tmux**.  Each session has one or more windows linked to it.  A window occupies the entire screen and may be split into rectangular panes, each of which is a separate pseudo terminal. Any number of **tmux** instances may connect to the same session, and any number of windows may be present in the same session.  Once all sessions are killed, **tmux** exits.

   Each session is persistent and will survive accidental disconnection (such as ssh connection timeout) or intentional detaching (with the `C-t d` key strokes).  **tmux** may be reattached using:

```bash
 $ tmux attach
```

In **tmux**, a session is displayed on screen by a client and all sessions are managed by a single server. The server and each client are separate processes which communicate through a socket in `/tmp`.

## Commands
`tmux info` - Show every session, window, pane, etc...
`tmux new -s mysession` - Start a session with the name _mysession_.
`tmux ls` - List all sessions.
`tmux a -t mysession` - Attach to _mysession_.
`tmux kill-ses -t mysession` - Kill _mysession_.
`tmux kill-session -a -t mysession` - Kill all but _mysession_.

## Sessions
| Shortcut         | Function               |
| ---------------- | ---------------------- |
| `Ctrl` + `t`     | Leader key.            |
| `<leader>` + `$` | Rename session.        |
| `<leader>` + `d` | Detach from session.   |
| `<leader` + `s`  | Show all sessions.     |

## Windows
| Shortcut         | Function               |
| ---------------- | ---------------------- |
| `<leader>` + `c` | Create window.         |
| `<leader>` + `,` | Rename current window. |
| `<leader>` + `&` | Close current window.  |
| `<leader>` + `n` | Next window.           |

## Panes
| Shortcut         | Function                  |
| ---------------- | ------------------------- |
| `<leader>` + `-` | Split pane horizontally.  |
| `<leader>` + `\` | Split pane vertically     |
| `<leader>` + `{` | Move pane left.           |
| `<leader>` + `}` | Move pane right.          |
| `<leader>` + `!` | Convert pane into window. |
| `<leader>` + `x` | Close current pane.       |

## Other
| Shortcut         | Function          |
| ---------------- | ----------------- |
| `<leader>` + `?` | List key bindings |