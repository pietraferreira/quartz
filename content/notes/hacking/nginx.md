---
title:  "Nginx"
tags:
  - cs/hacking
  - cs/hacking/htb
programming-languagues:
created: 2022-07-11
---
Used for transferring files to Apache.

## Create Directory to Handle Uploaded Files
```bash
sudo mkdir -p /var/www/uploads/SecretUploadDirectory
```

## Change the Owner to www-data
```bash
sudo chown -R www-data:www-data /var/www/uploads/SecretUploadDirectory
```

## Create Nginx Configuration File
In `/etc/nginx/sites-available/upload.conf`:

```bash
server {
    listen 9001;

    location /SecretUploadDirectory/ {
        root /var/www/uploads;
        dav_methods PUT;
    }
}
```

## Symlink our Site to the sites-enabled Directory
```bash
sudo ln -s /etc/nginx/sites-available/upload.conf /etc/nginx//sites-enabled/
```

## Start Nginx
```bash
sudo systemctl restart nginx.service
```

Error messages can be found in: `/var/log/nginx/error.log`.

For example:

```bash
ss -lnpt | grep '80'
```

```bash
ps -ef | grep '2811'
```

Could output something like `python -m websockify 80 localhost:5901 -D` which means there is a module already listening to port 80. To get around we can get rid of the default Nginx configuration:

```bash
sudo rm /etc/nginx/sites-enabled/default
```

And now we test:

```bash
curl -T /etc/passwd
```

```bash
tail -1 /var/www/upload/SecretUploadDirectory/users.txt
```

Then we can navigate to `http://localhost/SecretUploadDirectory`.