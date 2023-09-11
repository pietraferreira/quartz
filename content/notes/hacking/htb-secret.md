---
title: "HTB - Secret"
tags:
  - cs/hacking
  - cs/hacking/htb
  - cs/hacking/writeup
programming-languages:
created: 2022-07-18
---
# HTB - Secret
---
It is all about secret ways to extract information from applications.

```bash
~/htb/secret > sudo nmap -sC -sV -oA nmap/secret 10.10.11.120
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-18 17:22 BST
Nmap scan report for 10.10.11.120
Host is up (0.038s latency).
Not shown: 997 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 97:af:61:44:10:89:b9:53:f0:80:3f:d7:19:b1:e2:9c (RSA)
|   256 95:ed:65:8d:cd:08:2b:55:dd:17:51:31:1e:3e:18:12 (ECDSA)
|_  256 33:7b:c1:71:d3:33:0f:92:4e:83:5a:1f:52:02:93:5e (ED25519)
80/tcp   open  http    nginx 1.18.0 (Ubuntu)
|_http-title: DUMB Docs
|_http-server-header: nginx/1.18.0 (Ubuntu)
3000/tcp open  http    Node.js (Express middleware)
|_http-title: DUMB Docs
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 15.41 seconds
```

We can intercept the http://10.10.11.120/docs#section-3 page and send a POST request:

```bash
POST /api/user/register HTTP/1.1
Host: 10.10.11.120
User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://10.10.11.120/
DNT: 1
Connection: close
Upgrade-Insecure-Requests: 1
Cache-Control: max-age=0
Content-Type: application/json
Content-Length: 89


{
	"name": "hanato",
	"email": "root@morioh.cool",
	"password": "Kekc8swFgD6zU"
}
```

We do:

```bash
POST /api/user/login HTTP/1.1
Host: 10.10.11.120
User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://10.10.11.120/
DNT: 1
Connection: close
Upgrade-Insecure-Requests: 1
Cache-Control: max-age=0
Content-Type: application/json
Content-Length: 71

{
	"email": "root@morioh.cool",
	"password": "Kekc8swFgD6zU"
  }
```

And we get:

```bash
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 18 Jul 2022 16:30:19 GMT
Content-Type: text/html; charset=utf-8
Connection: close
X-Powered-By: Express
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ1OGEyMjM4OWQ5YjA0NjIyMGEyYzMiLCJuYW1lIjoiaGFuYXRvIiwiZW1haWwiOiJyb290QG1vcmlvaC5jb29sIiwiaWF0IjoxNjU4MTYxODE5fQ.7YA3c9iLmpHa-RUjWVtDOll-_jptoAj4IrH3JMQogmw
ETag: W/"cf-R75sH2ooX2bWBo5FI5RKlFE4DEc"
Content-Length: 207

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ1OGEyMjM4OWQ5YjA0NjIyMGEyYzMiLCJuYW1lIjoiaGFuYXRvIiwiZW1haWwiOiJyb290QG1vcmlvaC5jb29sIiwiaWF0IjoxNjU4MTYxODE5fQ.7YA3c9iLmpHa-RUjWVtDOll-_jptoAj4IrH3JMQogmw
```

We can decode it:

![Screenshot from 2022-07-18 17-31-38](notes/images/Screenshot%20from%202022-07-18%2017-31-38.png)