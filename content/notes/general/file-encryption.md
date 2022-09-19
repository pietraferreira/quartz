---
title:  "File Encryption"
tags:
  - hacking
  - htb
programming-languagues:
created: 2022-07-11
---
# File Encryption
---
## Windows
```powershell
PS Import-Module .\Invoke-AESEncryption.ps1
PS Invoke-AESEncryption.ps1 -Mode Encrypt -Key 'p4ssw0rd' -Path .\scan-results.txt 
```

## Linux
### Encrypt
```bash
openssl enc -aes256 -iter 100000 -pbkdf2 -in /etc/passwd -out passwd.enc
```

### Decrypt
```bash
openssl enc -d -aes256 -iter 100000 -pbkdf2 -in passwd.enc -out passwd
```