---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: OSL740 Assignment 
---

# Assignment 2
## Overview
In Assignment 2 you will install configure a LAMP stack, which is an acronym that originally stood for Linux, Apache, MySQL and PHP. LAMP is a commonly used acronym and combination of technologies for hosting web based applications. In fact, newer technologies that have come along to replace elements of the LAMP stack tend to pick their name based on the letter in the acronym that they are providing services for (ie MariaDB or MongoDB, Perl or Python). You will then use this platform to install and host Wordpress (a popular free and open source content management system or CMS). You will also configure your firewall to further enhance the security of your computer system.

This assignment will be completed inside your Ubuntu VM from Assignment 1.

## Important information
**Weight**: 15% of your overall grade

**Due Date**: Refer to your section's Blackboard announcements.

**Submission**: You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)

**NOTE:** Do this assignment inside the **ubuntu** virtual machine and use your user (ie: **jason.carman** or **ataur.rahman**) you created in **Assignment 1**.

**NOTE:** It is YOUR responsibility to backup your **ubuntu** VM for this assignment! You are required to frequently backup your VM prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs.

## Setting your Ubuntu VM to command line
Using the appropriate systemctl commands, set your Ubuntu vm to boot into CLI (multi-user.target) by default. Either reboot or use isolate to set it to CLI. Do the rest of the assignment using this interface.

## Setting a static IP & hostname
### Set a static IP on your Ubuntu VM:
- edit /etc/netplan/99_config.yaml (remember to use sudo)
- substitute enp1s0 with the interface on your VM (confirm with ip a)
- add the following configuration to the file:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp1s0:
      addressess:
        - 192.168.245.5/24
      routes:
        - to: default
          via: 192.168.245.1
      nameservers:
          addresses: [192.168.245.1]
```

Issue the following command to apply the changes. If you receive any error messages, check your configuration file.
```bash
sudo netplan apply
```

### Configuring local hostname resolution
Edit /etc/hosts (on your Ubuntu VM and debhost) to allow local hostname resolution for **username-ubuntu** to **192.168.245.5**

Test your network connectivity (both internally and to the internet) using ping before continuing.

## Updating and Installing Packages
Before proceeding make sure you have updated your system using apt.

### Install the following packages using apt
- **apache2**: this is the Apache web server software.
- **php**: this is the PHP server software, which allows Apache to run more complex websites.
- **php-mysql**: this is a PHP extension that allows PHP to use a MySQL server.
- **mariadb-server**: this is the database software.
- **wordpress**: a popular LAMP application used to build websites.

### Configuring Apache
- Confirm the apache2 service is running using **systemctl**, and that it is set to start automatically on boot. Use the appropriate **systemctl** commands if either of these is not configured.
- Confirm that you can connect to your web server using a web browser 

  * from your Ubuntu VM (you can test using **lynx**) 
  * from the host (you can test using Firefox with your Ubuntu VM’s IP address). You should see the Apache Test Page.



### Configuring MariaDB
- Confirm the mariadb service is running using **systemctl**, and that it is set to start automatically on boot. Use the appropriate **systemctl** commands if either of these is not configured.

-  Run the mysql secure installation script by issuing the command **sudo mysql_secure_installation** and follow the prompts onscreen to:
  
    * Set the root password to your Seneca username
    * Remove anonymous users
    * Disallow root login remotely
    * Remove the test database and access to it
    * Reload the privilege tables

- This following part is challenging so take your time and read the instructions to make sure you do it properly, we have to set up a dedicated user and database for wordpress:

- You will need to run the following commands in a terminal on your Ubuntu VM.
  - Your adminusername is root
  - Your databasename is myblog
  - Your wordpressusername is your Seneca username
  - The password should also be your Seneca username
  - Your hostname is localhost

- Connect to the database using the following command. Type the password when prompted: 
```bash 
mysql –h localhost –u root –p
```
- Create the database: 
```bash
CREATE DATABASE myblog;
```
- Create the new user (change wordpressusername and password to your Seneca username):
```bash
CREATE USER wordpressusername@localhost IDENTIFIED BY 'password';
```
- Grant your new user privileges to that database (change wordpressusername and password to your Seneca username):
```bash
GRANT ALL PRIVILEGES ON myblog.* TO wordpressusername@localhost IDENTIFIED BY 'password';
```
- Reload the privilge tables: 
```bash
FLUSH PRIVILEGES;
```

## Configuring Wordpress
Create a virtual host file in **/etc/apache2/sites-available/wordpress.conf** with the following contents:
```bash
Alias /blog /usr/share/wordpress
<Directory /usr/share/wordpress>
    Options FollowSymLinks
    AllowOverride Limit Options FileInfo
    DirectoryIndex index.php
    Order allow,deny
    Allow from all
</Directory>
<Directory /usr/share/wordpress/wp-content>
    Options FollowSymLinks
    Order allow,deny
    Allow from all
</Directory>
```

Enable the new WordPress site
```bash
sudo a2ensite wordpress
```

- Use systemctl to restart the apache service.

#### UPDATED TO HERE

- Now we need to allow Apache to modify the wordpress installation. To do this use chown and chgrp with -R option to make the owner and group of every file and directory inside wordpress "www-data".
- Check your work so far by pointing your web browser (Firefox on your host) to http://centos3/wordpress/
- If you get an error starting with "There doesn't seem to be a wp-config.php file", copy the wp-config-sample.php file to wp-config.php and edit the new file:
  - Change the DB_NAME, DB_USER, DB_PASSWORD to the appropriate values. (Do not use the root account for your database connection! Marks will be deducted.)

- Now go back to http://centos3/wordpress/ - you should see a Wordpress Welcome/Setup page. Follow the prompts on screen and enter the appropriate information.
  - Use the **Database Name**, **Username** and **Password** you configured above in mariadb.
  - Set the title to Your Name's Blog. For example for me it would be "OSL740 Professor's Blog"
  - Set the username to your Seneca ID.
  - Set the password to your Seneca ID. You may need to check the box to **Confirm use of weak password**
  - Set the email to your Seneca email address.
  - Click "Install Wordpress", you should see a "Success!" message.

## Write-up
Write a blog post on your new blog explaining:
- What is Apache, PHP, MySQL, and Wordpress.
- What problems (minor and major) you ran into during the installation and how you solved 
them.

Write a second post on your blog including for example:
- Are you ready for the exam or not?
- List the material you are strong on.
- List the material you are worried about.
- List any questions or topics you would like me to address during exam review.

Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc.

## Submission
On your **deb3** vm issue the following command to download the check script. You may need to install git using apt.

```bash
git clone https://github.com/OPS245/a2-check
```

Give the **marka2.bash** script execute permission and run it.

Upload the following to the Assignment 2 folder on blackboard:
- Output from the Assignment 2 check script (a2output.txt)
- A screenshot showing your first blog post on wordpress
- A screenshot showing your second blog post on wordpress

## Rubric
| Task | Mark |
| :--- | :--- |
| Correct packages installed | 1 |
| Apache configured and running | 3 |
| MariaDB configured and running | 3 |
| Wordpress extracted correctly | 1 |
| Wordpress configured correctly | 2 |
| Wordpress showing in Firefox | 1 |
| Blog accessed using local hostname resolution | 2 |
| iptables rules configured correctly | 3 |
| First blog post | 1 |
| Second blog post | 1 |
| Submitted correctly | 2 |
| **Total** | **20** |
