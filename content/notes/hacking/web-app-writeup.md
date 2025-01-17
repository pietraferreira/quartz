---
title:  2022-06-29
tags:
  - cs/hacking
created: 2022-06-29
---
## Web App Guide
Source [here](https://joelmccracken.github.io/entries/a-simple-web-app-in-rust-pt-1/).

Easy way to record when I take my creatine. When a link is tapped on the home screen, it records the visit and this preserves a record of when creatine was taken.

It is much easier to build separate, individual programs while exploring APIs instead of trying to do everything all at once.

The plan:
1. Build a simple web server that displays "hello world" when visited.
2. Build a tiny program that logs the formatted date and time whenever its run.
3. Integrate the two into a single application.
4. Deploy the application to a server (maybe Digital Ocean VPS?)

## Included Write-Up (HTB)
Websites like `http://{target_IP}?file=home.php` are dynamically loaded and **local file inclusion** can be applied to it (sometimes).

Local file inclusion (also known as **LFI**) is the process of including files, that are  
already locally present on the server, through the exploitation of vulnerable inclusion  
procedures implemented in an application.  

We can easily determine if this is the case by attempting to load a file that we know definitely exists on the system and is readable by all users. One of those files is /etc/passwd and to load it, change the file parameter from home.php to /etc/passwd . For consistency reasons we will show this process with the cURL command line utility instead of a browser.   

This is successful and a list of users is returned. It is worth noting that inputting /etc/passwd might not always work if the inclusion already specifies a working directory. For instance, consider the following code:

`curl 'http://{target_IP}/?file=/etc/passwd'`