---
title: "Linux Fundamentals"
tags:
  - help
type: cheatsheet
---
# Linux Fundamentals
---

Bunch of old notes on Linux stuff.

## Find command

``` 
	-type f -> type: file

	-name *.conf -> all files owned by root

	-size +20k -> larger than 20KiB

	-exec ls -al {} \ -> executes the specified command* 

	2>/dev/null -> STDERR redirection to the null device

	-newermt 2020-03-03 -> newer than this date
```

* the backlash escapes the next character from being interpreted by the
  shell, otherwise the semicolon would terminate the command too soon.

## File Descriptors

The file descriptor is an indicator of connection maintained by the kernel to

perform Input/Output (I/O) operations.

1. Data Stream for Input
	* STDIN - 0

2. Data Stream for Output
	* STDOUT - 1

3. Data Stream for Output that relates to an error occurring
	* STDERR - 2

Redirect STDOUT to a File

`find /etc/ -name shadow 2>/dev/null > results.txt`

Redirect STDOUT and STDERR to different files

`find /etc/ -name shadow 2> stderr.txt 1> stdout.txt`

Redirect STDIN

`cat < stdout.txt`

Redirect STDOUT and Append to a File

```
find /etc/ -name passwd >> stdout.txt 2>/dev/null
cat stdout.txt
```

Redirect STDIN Stream to a File

```
cat << EOF > stream.txt
cat stream.txt
```

Piping

`find /etc/ -name *.conf 2>/dev/null | grep systemd | wc -l`

We can sort output with:

`cat /etc/passwrd | sort`

## Permission

- rwx rw- r--   1 root root 1641 May  4 23:42 /etc/passwd

```
---- --- ---   |  |    |    |   |__________|
|  |   |   |    |  |    |    |        |_ Date
|  |   |   |    |  |    |    |__________ File Size
|  |   |   |    |  |    |_______________ Group
|  |   |   |    |  |____________________ User
|  |   |   |    |_______________________ Number of hard links
|  |   |   |_ Permission of others (read)
|  |   |_____ Permissions of the group (read, write)
|  |_________ Permissions of the owner (read, write, execute)
|____________ File type (- = File, d = Directory, l = Link, ... )
```

r -> read

w -> write

x -> execute

Permissions can be modified using the `chmod` command (`u` - owner, `g`

- Group, `o` - others, `a` - All users) with either a [`+`] or [`-`] to add or

remove permissions.

Example apply read permissions to all users:

`chmod a+r shell && ls -l shell`

To change owner:

`chown <user>:<group> <file/directory>`

### SUID and GUID

Set User ID (SUID) and Set Group ID (GUID)

They allow, for example, users to run programs with the rights of another user.

Administrators often use it to give their user special rights to certain app or

file.

## Shortcuts

`[CTRL] + A` -> move to beginning of the line
`[CTRL] + E` -> move to end of the line

`[CTRL] + U` -> erase everything from current position of the cursor to
beginning of the line
`[CTRL] + K` -> delete to the end of line

`[CTRL] + Y` -> pastes erased word

`[CTRL] + L` -> clear terminal