---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: OSL740 Assignment 1
---

# Assignment 1

The purpose of the OSL740 assignments is to showcase your abilities in the course thus far, and conduct a bit of independent research. Some of what you'll be asked to complete will be familiar to you, while other parts will require you to think a bit and do some light Googling. It's expected you won't have all the answers right away, but you can find them. **As a result, unlike labs, your professor cannot provide any help or troubleshooting for your assignment.**

**Weight**: 15% of your overall grade

**Due Date**: Refer to your section's Blackboard announcements.

## Create a new virtual machine

Create a new Ubuntu 22.04 Desktop VM (Normal installation) in **VMWare**, using the following information. You may refer to your lab instructions, logbook and google for any of the steps. The installation process is the same as **debhost** in **Lab 1**. When asked for partition information, use the defaults.

- Install a new Ubuntu VM.
- The virtual machine name and the internal hostname for the machine must include your Seneca username in the following format (Example: jmcarman-ubuntu)
- The regular user created during installation must also be your Seneca username.
- Ensure LVM is used in your installation partitioning.
- **Memory:** 8192 MB
- **Disk space:** 20 GB
- **Number of Processors:** 4
- **Number of Cores:** 1
- Use your existing virtual network
- **Remember:** Select "store as a single file" for the virtual hard disk.

The rest of this assignment should be done after the installation is completed successfully.

## Post Installation Tasks

Use `apt` to accomplish the following:

- Find and install the Cinnamon desktop environment: `apt install cinnamon`
- Do the rest of the assignment (including the assignment submission) while running Cinnamon.
- Update the system
- Use systemctl to confirm the default firewall is running (Hint: the default firewall in Ubuntu is **ufw**)
- Use `apt` to install `Chromium`.  You may need to use Google to accomplish this.

## Install a Second Linux Distribution as a Virtual Machine
Create a new Linux Mint VM (Cinnamon Edition) in **VMWare**, using the following information. Use the default partitioning and installation options.

- **VM name &amp; Hostname:** youruser-mint (Example: jmcarman-mint)
- **Username:** Your Seneca Username
- **Memory:** 8192 MB
- **Disk space:** 20 GB
- **Number of Processors:** 4
- **Number of Cores:** 1
- The virtual machine name and the hostname for the machine must be your learn user ID followed by **-mint**. For example jmcarman-mint
- Install **Linux Mint** as the OS for the new virtual machine (VMWare).
- **Remember:** Select "store as a single file" for the virtual hard disk.

## Post Installation Tasks
- Update the system using `apt`.
- Use `apt` to install `Chromium`.  You may need to use Google to accomplish this.

## Submission

Submit the following screenshots on BlackBoard that show you've completed the work.

### Ubuntu VM
- Ubuntu VM installed
- Output of the hostname command
- Cinnamon desktop installed and in use
- Chromium installed

### Linux Mint VM
- Linux Mint VM installed
- Output of the hostname command
- Chromium installed

## Rubric

| Task |	Maximum mark |	Actual mark |
| --- | --- | --- |
| New Ubuntu VM installed (Seneca username) |	5	| |
| Correct hostname (Seneca username) |	2	| |
| Using Cinnamon |	2	| |
| Chromium installed in Ubuntu VM |	2	| |
| Linux Mint VM installed |	5	| |
| Correct hostname (Seneca username) | 2 | |
| Chromium installed in Mint VM |	2	| |
| **Total** |	20	| |

## Resources
- [Ubuntu](https://ubuntu.com)
- [Linux Mint](https://linuxmint.com)
