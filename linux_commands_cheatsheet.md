# Linux Study - Comprehensive Command Cheatsheet

This document contains all the practical terminal commands and examples extracted directly from the 16 interactive Linux Study modules.

## Getting Started

## Command Line

### The Shell

```bash
username@hostname:~$

```

### pwd, cd, ls

```bash
$ pwd
/home/username/Documents

$ cd /var/log        # Go to /var/log
$ cd ..              # Go up one level
$ cd ~               # Go to home directory
$ cd -               # Go to previous directory
$ cd                 # Go to home (same as cd ~)

$ ls                 # List files
$ ls -l              # Long format with details
$ ls -a              # Show hidden files
$ ls -lh             # Human-readable sizes
$ ls -la             # Combine options
$ ls -R              # Recursive listing
$ ls -t              # Sort by modification time

-rw-r--r-- 1 user group 1234 Mar 7 10:30 file.txt

```

### touch, file, cat, less, history

```bash
$ touch newfile.txt           # Create empty file
$ touch file1 file2 file3    # Create multiple files
$ touch existing.txt         # Update timestamp

$ file document.pdf
document.pdf: PDF document, version 1.4
$ file script.sh
script.sh: Bash shell script, ASCII text executable
$ file image.jpg
image.jpg: JPEG image data

$ cat file.txt              # Display file
$ cat file1 file2           # Display multiple files
$ cat file1 file2 > merged  # Combine files
$ cat > newfile.txt         # Create file (Ctrl+D to save)

$ less largefile.log

$ history                # Show all commands
$ history 10             # Show last 10 commands
$ !100                   # Run command #100
$ !!                     # Run last command
$ !cat                   # Run last cat command
$ Ctrl+R                 # Search history interactively

```

### cp, mv, mkdir, rm

```bash
$ cp source.txt destination.txt    # Copy file
$ cp file.txt /tmp/                 # Copy to directory
$ cp -r folder/ backup/             # Copy directory recursively
$ cp -i file.txt dest.txt           # Interactive (ask before overwrite)
$ cp -v file.txt dest.txt           # Verbose (show what's being done)
$ cp -p file.txt dest.txt           # Preserve attributes

$ mv oldname.txt newname.txt       # Rename file
$ mv file.txt /tmp/                 # Move to directory
$ mv file1 file2 /destination/      # Move multiple files
$ mv -i file.txt dest.txt           # Interactive mode
$ mv -v file.txt dest.txt           # Verbose mode

$ mkdir newfolder                   # Create directory
$ mkdir dir1 dir2 dir3              # Create multiple
$ mkdir -p parent/child/grandchild  # Create nested directories
$ mkdir -v folder                   # Verbose output

$ rm file.txt                       # Remove file
$ rm file1 file2 file3              # Remove multiple files
$ rm -i file.txt                    # Interactive (ask confirmation)
$ rm -r folder/                     # Remove directory recursively
$ rm -rf folder/                    # Force remove (dangerous!)
$ rm -v file.txt                    # Verbose output

```

### find

```bash
$ find [path] [options] [expression]

$ find . -name "file.txt"          # Find exact name
$ find . -name "*.txt"              # Find all .txt files
$ find . -iname "FILE.txt"          # Case-insensitive search
$ find /home -name "*.log"          # Search in specific directory

$ find . -type f                    # Find files only
$ find . -type d                    # Find directories only
$ find . -type l                    # Find symbolic links

$ find . -size +100M                # Larger than 100MB
$ find . -size -10k                 # Smaller than 10KB
$ find . -size 50M                  # Exactly 50MB

$ find . -mtime -7                  # Modified in last 7 days
$ find . -mtime +30                 # Modified more than 30 days ago
$ find . -atime -1                  # Accessed in last 24 hours

$ find . -perm 644                  # Exact permissions
$ find . -perm -644                 # At least these permissions
$ find . -perm /u+w                 # User writable

$ find . -name "*.tmp" -delete     # Delete found files
$ find . -name "*.txt" -exec cat {} ;  # Run command on each
$ find . -type f -exec chmod 644 {} ;  # Change permissions

$ find . -name "*.log" -size +1M   # AND condition
$ find . -name "*.txt" -o -name "*.log"  # OR condition
$ find . ! -name "*.txt"            # NOT condition

```

### help, man, whatis, alias, exit

```bash
$ help cd                           # Help for cd command
$ help                              # List all built-ins
$ help -m printf                    # Manual format

$ man ls                            # Manual for ls
$ man 5 passwd                      # Section 5 of passwd
$ man -k search                     # Search manual descriptions
$ man -f command                    # Same as whatis

$ whatis ls
ls (1) - list directory contents
$ whatis cp mv rm
cp (1) - copy files and directories
mv (1) - move (rename) files
rm (1) - remove files or directories

$ alias ll='ls -lah'                # Create alias
$ alias                             # List all aliases
$ unalias ll                        # Remove alias
$ alias rm='rm -i'                  # Make rm safer

alias update='sudo apt update && sudo apt upgrade'
alias ..='cd ..'
alias ...='cd ../..'

$ exit                              # Exit with last status
$ exit 0                            # Exit with success status
$ exit 1                            # Exit with error status

```

### Command-Line Shortcuts & Tips

```bash
$ cd -                              # Go to previous directory
$ mkdir -p path/to/nested/dir       # Create nested directories
$ command &                         # Run in background
$ command1 && command2              # Run command2 if command1 succeeds
$ command1 || command2              # Run command2 if command1 fails
$ command1 ; command2               # Run both regardless
$ command > file.txt                # Redirect output to file
$ command >> file.txt               # Append output to file
$ command 2> error.log              # Redirect errors
$ command &> all.log                # Redirect both output and errors

```

### Environment Variables

```bash
$ env                               # List all environment variables
$ printenv                          # Same as env
$ printenv HOME                     # Show specific variable
$ echo $HOME                        # Display variable value
$ echo $PATH                        # Show PATH variable

$ MY_VAR="Hello World"              # Create variable
$ echo $MY_VAR                      # Display it
$ export MY_VAR="Hello"             # Make available to child processes

export EDITOR=vim
export PATH=$PATH:/new/directory
export MY_APP_CONFIG=/path/to/config

$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

# Add directory to PATH
$ export PATH=$PATH:/new/directory

# Add to beginning (higher priority)
$ export PATH=/new/directory:$PATH

$ unset MY_VAR                      # Remove variable

$ export JAVA_HOME=/usr/lib/jvm/java-11
$ export PATH=$PATH:$JAVA_HOME/bin
$ export HISTSIZE=10000             # Increase history size
$ export HISTFILESIZE=20000

```

## Basic Text-Fu

### stdout (Standard Out)

```bash
$ echo "Hello, Linux!" > greeting.txt    # Creates or overwrites the file
$ echo "Welcome back." >> greeting.txt   # Appends to the end of the file
$ ls -l > files_list.txt                 # Saves the directory listing to a file

```

### stdin (Standard In)

```bash
$ sort < unsorted_names.txt        # Sends the file contents into the 'sort' command
$ wc -l < script.sh                  # Counts the lines in the script

```

### stderr (Standard Error)

```bash
$ ls /nonexistent_folder 2> error.log    # The error message goes to the file, not the screen
$ find / -name "secret" 2> /dev/null     # Throw away all "Permission denied" errors!

$ command > all_output.log 2>&1    # The classic way (redirect 2 into 1)
$ command &> all_output.log        # The modern, shorter way

```

### pipe and tee

```bash
$ ls -l /etc | less                # Pipe a massive list into a pager so you can scroll
$ ls /bin | grep "zip"             # Pipe the list into a filter that only shows "zip"

$ echo "Server started" | tee server.log      # Writes to file AND prints to screen
$ ls -l | tee contents.txt | grep "drwx"      # Save full list, but only screen-print directories

```

### env (Environment)

```bash
$ env                     # Print all environment variables
$ env | grep USER         # Quickly find your USER variable

$ env EDITOR=nano visudo  # Temporarily forces the EDITOR variable to 'nano' just for this command
$ env -i bash             # Start a completely empty, wiped-clean bash shell for testing

```

### cut

```bash
$ cut -d: -f1 /etc/passwd            # Extract field 1 (usernames) using colon as delimiter
$ cut -d: -f1,7 /etc/passwd          # Extract field 1 (username) AND field 7 (shell)
$ echo "apple,banana,cherry" | cut -d, -f2  # Returns 'banana'

$ echo "abcdefgh" | cut -c2-5        # Extract characters 2 through 5 (returns 'bcde')

```

### paste

```bash
$ paste names.txt ages.txt 
Alice   25
Bob     30

$ paste -d "=" names.txt ages.txt
Alice=25
Bob=30

```

### head

```bash
$ head /var/log/syslog              # View the first 10 lines
$ head -n 5 /etc/passwd             # View exactly the first 5 lines

$ head -c 20 /dev/urandom | base64  # Grab 20 random bytes for a rapid password generator

```

### tail

```bash
$ tail /var/log/syslog              # View the last 10 lines (most recent logs)
$ tail -n 20 /var/log/auth.log      # View the last 20 lines

$ tail -f /var/log/syslog           # Watch the system logs actively scroll in real-time
# Press Ctrl+C to exit follow mode!

```

### expand and unexpand

```bash
$ expand code.py > fixed_code.py    # Replaces tabs with spaces (default is 8 spaces per tab)
$ expand -t 4 code.py               # Replaces each tab with exactly 4 spaces

$ unexpand -a spaces.txt > tabs.txt # The -a flag forces it to convert ALL spaces, not just leading indentation

```

### join and split

```bash
# file1 has: "1 Alice", file2 has "1 HR"
$ join file1.txt file2.txt          # Output: "1 Alice HR"

$ split -l 1000 biglog.txt chunk_   # Splits into files of 1000 lines each (chunk_aa, chunk_ab...)
$ split -b 50M bigvideo.mp4 vpart_  # Splits a binary file into exactly 50 Megabyte pieces
$ cat vpart_* > bigvideo.mp4        # How to easily glue them back together!

```

### sort

```bash
$ sort fruits.txt                   # Sorted alphabetically (A to Z)
$ sort -r fruits.txt                # Reverse sort (Z to A)

$ sort -n prices.txt                # Sort numerically (1, 2, 10, 20)
$ sort -h sizes.txt                 # Human-readable numeric sort (handles 1K, 5M, 2G sizes!)

$ ls -l | sort -k 5 -n              # Sort directory listing by the 5th column (file size) numerically

```

### tr (Translate)

```bash
$ echo "hello world" | tr 'a-z' 'A-Z'   # Output: HELLO WORLD

$ echo "Phone: 555-1234" | tr -d '-'    # Removes all hyphens

$ echo "Name       Age      City" | tr -s ' '  # Squeezes multiple spaces down to a single space

```

### uniq (Unique)

```bash
$ sort names.txt | uniq             # The standard way to get a list of unique names

$ sort access.log | uniq -c         # Groups the text and prints a count next to each unique line
$ sort access.log | uniq -c | sort -nr # Count occurrences, then sort highest-to-lowest (Top 10 list!)

$ sort emails.txt | uniq -d         # Only print emails that appeared more than once

```

### wc and nl

```bash
$ wc /etc/passwd                    # Outputs: Lines Words Characters Filename
$ wc -l /etc/passwd                 # Only output the Line count
$ ls -1 /etc | wc -l                # Amazing trick: Count exactly how many files are in a directory!

$ nl code.py                        # Prints the file with numbered lines
$ cat -n code.py                    # (Alternative using cat. Very similar result!)

```

### grep

```bash
$ grep "root" /etc/passwd           # Search for the exact word 'root'
$ ls -l | grep "drwx"               # Pipe output into grep to filter for directories
$ grep -i "failed" /var/log/auth.log # Case-insensitive (finds FAILED, Failed, failed)
$ grep -v "debug" app.log           # Invert match: Print all lines that DO NOT contain 'debug'

$ grep -r "TODO" ./src/             # Recursive: Search through every file in a folder!
$ grep -n "function" file.js        # Print the Line Number alongside the matches
$ grep -C 2 "error" server.log      # Context: Print the match AND 2 lines above/below it

```

## Advanced Text-Fu

### regex (Regular Expressions)

```bash
$ grep "^root" /etc/passwd       # Find lines starting with 'root'
$ grep "bash$" /etc/passwd       # Find lines ending with 'bash'

```

### Vim Search Patterns

```bash
/error        # Type this in normal mode and press Enter to find the word 'error'
n             # Press 'n' to go to the second 'error' occurrence

```

### Vim Saving and Exiting

```bash
Esc         # 1. Ensure you are in Normal mode
:wq         # 2. Type colon, w, q
Enter       # 3. Press Enter to execute

```

### Emacs Manipulate Files

```bash
1. Press Ctrl+x, then Ctrl+f
2. Look at the bottom prompt
3. Type /tmp/notes.txt and press Enter
4. Type your notes
5. Press Ctrl+x, then Ctrl+s to save.

```

### Emacs Exiting and Help

```bash
C-x C-c    # The absolute sequence to quit Emacs completely.
# (If you have unsaved files, it will ask you if you want to save them first).

```

## User Management

### Users & Groups Architecture

```bash
$ cat /etc/passwd   # Shows username:x:UID:GID:Comment:HomeDir:Shell
$ cat /etc/shadow   # Stores the actual encrypted passwords (requires root)
$ cat /etc/group    # Lists groups and their members

```

### Managing User Accounts

```bash
$ sudo useradd -m -s /bin/bash alice  # Creates pure user 'alice' with a home dir and bash shell
$ sudo passwd alice                   # Set alice's password
$ sudo userdel -r alice               # Deletes 'alice' and completely removes her home directory

$ sudo groupadd developers            # Create a new group called 'developers'
$ sudo usermod -aG developers bob     # Append (-a) bob to the supplementary group (-G) 'developers'

```

### The Power of Root & Sudo

```bash
$ sudo apt update     # Run a single command with root privileges
$ sudo -i             # Switch to an interactive root shell (your prompt will change to #)
$ su - bob            # Switch user to 'bob' (requires bob's password)

```

### File Permissions (chmod & chown)

```bash
$ sudo chown alice:developers project.txt   # Changes owner to 'alice' and group to 'developers'
$ sudo chown -R bob:bob /var/www            # Recursively changes ownership of the entire folder

# Symbolic Mode (u=user, g=group, o=others, a=all)
$ chmod u+x script.sh          # Add eXecute permission for the User (Owner)
$ chmod g-w secret.txt         # Remove Write permission for the Group
$ chmod a=r file.txt           # Set exact permissions: All users can only Read

# Octal Mode (4=Read, 2=Write, 1=eXecute. Add them up!)
# 7 = 4+2+1 (rwx), 5 = 4+1 (r-x), 0 = ---
$ chmod 755 server.py          # User gets 7 (rwx), Group gets 5 (r-x), Others get 5 (r-x)
$ chmod 644 document.txt       # Standard file: User gets 6 (rw-), Group/Others get 4 (r--)

```

## Processes & Jobs

### Static Monitoring (ps)

```bash
$ ps aux | less                  # Pipe into less so you can scroll through hundreds of processes
$ ps aux | grep "nginx"          # Quickly find the PID of the Nginx web server

```

### Dynamic Monitoring (top & htop)

```bash
$ top              # Launch the classic live monitor
$ htop             # Launch the modern interactive monitor (often needs to be installed via apt/yum)

```

### The /proc Virtual Filesystem

```bash
$ cat /proc/cpuinfo     # Read raw hardware data straight from the kernel about your processor
$ cat /proc/meminfo     # View extreme detail regarding system memory layout

$ ls -l /proc/1         # View the internal secrets of the systemd process (PID 1)
$ cat /proc/1/status    # View human-readable status information about PID 1

```

### Process Priority (nice and renice)

```bash
$ nice -n 10 tar -czf backup.tar.gz /var/log/    # Start a CPU-heavy task as 'Nice' so it doesn't freeze the system
$ renice -n -5 -p 1234                           # Change an ALREADY RUNNING process (PID 1234) to a negative (high) priority. Requires sudo.

```

### Sending Signals

```bash
$ kill -l          # List all 64 unique signals available in your Linux kernel!

```

### Terminating Processes

```bash
$ kill 5678              # Polite Terminate (Sends SIGTERM 15) to PID 5678
$ kill -9 5678           # Force Murder (Sends SIGKILL 9) to PID 5678

$ pkill firefox          # Politlely kills ANY process whose name contains 'firefox'
$ killall -9 nginx       # Force kills any process exactly named 'nginx'

```

### Background Jobs

```bash
$ ./massive_backup_script.sh &
[1] 14522                # Bash tells you this is Job 1, mapped to PID 14522.

$ jobs                   # View all background jobs managed by your current terminal session

```

### Foregrounding and Suspending

```bash
$ wget largefile.iso     # Oh no, it's blocking the terminal!
Ctrl+Z                   # Paused! Prompt returned.
$ bg                     # Command continues downloading in the background.

$ jobs                   # Check status of jobs
$ fg %1                  # Bring Job [1] back to the foreground to watch it finish.

```

## Software Management

### dpkg (Debian Package Manager)

```bash
$ sudo dpkg -i google-chrome-stable_current_amd64.deb

$ dpkg -l                    # List ALL installed packages on the system
$ dpkg -L nginx              # List all files installed by a specific package

```

### apt (Advanced Package Tool)

```bash
$ sudo apt update                 # 1. Fetch the latest catalog of software from your repos
$ apt search "web server"         # 2. Search the catalog for keywords
$ sudo apt install nginx          # 3. Install the package AND all its dependencies
$ sudo apt upgrade                # Upgrade ALL installed software to the latest versions

$ sudo apt remove nginx           # Uninstall, but KEEP configuration files just in case
$ sudo apt purge nginx            # NUKE the program and erase ALL configuration files
$ sudo apt autoremove             # Clean up 'orphaned' dependencies you no longer need

```

### rpm (Red Hat Package Manager)

```bash
$ sudo rpm -ivh package.rpm       # Install, Verbose, display Hash marks (progress bar)
$ rpm -qa                         # Query All installed packages
$ rpm -qi bash                    # Query Information about a specific package
$ sudo rpm -e package_name        # Erase (uninstall) a package

```

### yum and dnf (Fedora/RHEL)

```bash
$ sudo dnf check-update           # See what needs updating
$ sudo dnf install httpd          # Install the Apache Web Server
$ sudo dnf remove httpd           # Remove a package

$ sudo dnf history                # See a numbered list of everything installed/removed
$ sudo dnf history undo 14        # Instantly rollback Transaction #14!

```

### pacman (Arch Linux)

```bash
$ sudo pacman -Syu                # Sync, y(refresh), upgrade. (The command to update the whole system)
$ sudo pacman -S neofetch         # Sync (Install) a specific package
$ sudo pacman -Rs neofetch        # Remove the package and its unused dependencies (s)

```

### Universal Packages (Snap & Flatpak)

```bash
$ snap install spotify            # Works exactly the same on Ubuntu, Fedora, or Arch
$ flatpak install flathub gimp    # Universal install of the GIMP image editor

```

### tar (Tape Archive)

```bash
$ tar -cvf backup.tar /var/log/   # Bundles the entire log directory into one file

$ tar -xvf backup.tar             # eXtracts the archive into the current directory

```

### Compression (gzip and bzip2)

```bash
$ tar -czvf web_backup.tar.gz /var/www/html/    # Create, Zip, Verbose, File
$ tar -xzvf web_backup.tar.gz                   # eXtract, Zip(decompress), Verbose, File

```

### Compiling from Source

```bash
# 1. Inspects your system to ensure you have necessary background libraries
$ ./configure

# 2. Reades the "Makefile" and actually compiles the code into binary
$ make

# 3. Copies the finished binary payload into system folders like /usr/local/bin
$ sudo make install

```

## Devices & Hardware

### Everything is a File (/dev)

```bash
$ ls -l /dev/sda
brw-rw---- 1 root disk 8, 0 Mar  7 /dev/sda  # 'b' means Block device!

```

### CPU & Memory Analysis

```bash
$ lscpu                    # High-level summary of architecture, cores, and threads
$ cat /proc/cpuinfo        # Deep, raw kernel dump of every single logical processor

$ free -h                  # View total, used, and available RAM in (h)uman-readable format
$ cat /proc/meminfo        # Deep kernel dump of memory hardware and swapping

```

### General Hardware Discovery

```bash
$ sudo lshw                # Generates a massive, detailed hardware tree
$ sudo lshw -short         # Formats the hardware tree into a much cleaner, readable table

$ inxi -Fxz                # Full system spec summary (CPU, GPU, Network, Drives)
$ hwinfo --short           # Quick summary of hardware nodes

```

### Storage & Block Devices

```bash
$ lsblk                    # Visualizes all hard drives and their partitions in a tree format

$ sudo fdisk -l            # Lists all partition tables for all attached disks

```

### Storage Space & I/O

```bash
$ df -h                    # Show filesystem disk space usage (human-readable)

$ du -sh *                 # Summarize (s) the human-readable (h) size of everything (*) in this directory

$ iostat                   # View CPU statistics and input/output loads for devices/partitions

```

### USB and PCI Buses

```bash
$ lspci                    # List every device connected directly to the motherboard
$ lspci -v                 # Verbose mode: includes the exact kernel driver handling the physical device

$ lsusb                    # List attached webcams, mice, keyboards, and adapters
$ sudo usb-devices         # Extremely detailed text dump of USB topology and power limits

```

### Graphics and Audio

```bash
$ lspci | grep -i vga      # Instantly identify your AMD/NVIDIA/Intel graphics renderer
$ nvidia-smi               # If using NVIDIA, view live GPU temperature, VRAM usage, and active processes!

$ cat /proc/asound/cards   # Ask the kernel what sound cards it detects
$ aplay -l                 # List all physical audio playback devices (speakers/headphones)

```

### Network Interfaces

```bash
$ ip a                     # The modern standard to view network interfaces, MAC addresses, and IP blocks
$ ifconfig                 # The legacy standard (often requires installing net-tools)
$ ping google.com          # Send ICMP packets to test if the hardware is successfully routing to the internet

```

### Power and Batteries

```bash
$ acpi -V                  # Print every available detail about battery charge, adapters, and cooling states

$ upower -i /org/freedesktop/UPower/devices/battery_BAT0   # Deep diagnostics for laptop Battery 0

```

### Kernel Messages and BIOS

```bash
$ dmesg                    # Print the entire boot hardware initialization log
$ dmesg -w                 # Follow mode: Leave it open to watch the kernel react live as you plug/unplug hardware

$ sudo dmidecode           # Print detailed motherboard serial numbers, RAM clock speeds, and BIOS versions

```

## Filesystem & Storage

### Disk Partitioning (fdisk & parted)

```bash
$ sudo fdisk /dev/sdb        # Classic interactive MBR/GPT partition editor
$ sudo parted /dev/sdb       # Modern partitioning tool, supports GPT natively
$ sudo gdisk /dev/sdb        # GPT-focused partition editor

```

### Filesystem Formats (ext4, xfs, btrfs)

```bash
$ sudo mkfs.ext4 /dev/sdb1     # Format partition 1 with ext4
$ sudo mkfs.xfs  /dev/sdb2     # Format partition 2 with xfs
$ df -Th                        # View the type of every currently mounted filesystem

```

### Mounting & Unmounting Storage

```bash
$ sudo mkdir -p /mnt/data           # Step 1: Create an empty mount point directory
$ sudo mount /dev/sdb1 /mnt/data    # Step 2: Attach the new partition to that directory
$ ls /mnt/data                      # Now browse the drive's contents just like a normal folder!
$ sudo umount /mnt/data             # Step 3: Safely detach the drive when finished

```

### Persistent Mounts (/etc/fstab)

```bash
$ sudo blkid /dev/sdb1              # Get the UUID for the drive (safer than using /dev name)
$ cat /etc/fstab                    # View current permanent mounts
$ sudo mount -a                     # Test fstab by mounting everything declared in it (catch typos!)

```

### Inodes & the VFS

```bash
$ ls -i <filename>             # Display the inode number of a file
$ df -i                        # Show inode usage (you can run OUT of inodes even with free disk space!)
$ stat <filename>              # Show full inode metadata: size, timestamps, inode number, etc.

```

### Hard Links & Soft Links

```bash
$ ln original.txt hardlink.txt     # Create a hard link (no 'softlink' flag needed)

$ ln -s /var/www/html /webroot      # Create a convenient shortcut at /webroot
$ ls -la /webroot                   # Shows: /webroot -> /var/www/html

```

### Disk Space Management

```bash
$ df -h                    # Human readable: shows how full every partition is

$ du -sh /var/log/*        # See the sizes of everything in the log directory
$ du -sh /* 2>/dev/null   # A quick health check: see the top-level folder sizes from root

$ du -ah /home | sort -rh | head -20    # Find the 20 largest files/folders in /home

```

### Swap Space

```bash
$ sudo fallocate -l 4G /swapfile    # Create a 4 Gigabyte empty file
$ sudo chmod 600 /swapfile          # Secure it so only root can read it
$ sudo mkswap /swapfile             # Tell the kernel this file is a swap area
$ sudo swapon /swapfile             # Activate the new swap immediately
$ free -h                           # Verify the swap total increased!

```

### LVM (Logical Volume Manager)

```bash
$ sudo pvcreate /dev/sdb           # Create a Physical Volume from /dev/sdb
$ sudo vgcreate my_vg /dev/sdb    # Create a Volume Group called 'my_vg'
$ sudo lvcreate -L 50G -n data my_vg  # Carve a 50GB Logical Volume named 'data'
$ sudo lvextend -L +20G /dev/my_vg/data  # Grow the volume by 20GB ONLINE (no downtime!)

```

## Boot & Kernel

### BIOS, UEFI & POST

```bash
$ sudo dmidecode -t bios     # View detailed BIOS/UEFI version and vendor from the firmware

```

### GRUB Bootloader

```bash
$ cat /boot/grub/grub.cfg         # View the generated GRUB configuration
$ sudo nano /etc/default/grub     # Edit GRUB defaults (e.g., add splash=0 for verbose boot)
$ sudo update-grub                # Re-generate grub.cfg from templates (Debian/Ubuntu)
$ sudo grub2-mkconfig -o /boot/grub2/grub.cfg   # Red Hat equivalent

```

### The Linux Kernel

```bash
$ uname -r                         # Print the exact running kernel version
$ uname -a                         # Print all system info (kernel, arch, hostname)
$ ls /boot                         # See all installed kernel files

```

### Kernel Modules

```bash
$ lsmod                           # List all currently loaded kernel modules
$ modinfo bluetooth               # View detailed info (author, license) about a module
$ sudo modprobe bluetooth         # Safely load the bluetooth driver + its dependencies
$ sudo modprobe -r bluetooth      # Safely UNLOAD the bluetooth driver

```

### systemd and Targets

```bash
$ systemctl get-default           # See what target (mode) the system boots into
$ sudo systemctl set-default multi-user.target   # Boot into text-only mode (no GUI)
$ sudo systemctl isolate graphical.target        # Switch to graphical mode RIGHT NOW

```

### Managing Services (systemctl)

```bash
$ sudo systemctl status nginx     # Full health check + recent error log
$ sudo systemctl start nginx      # Start immediately
$ sudo systemctl stop nginx       # Stop immediately
$ sudo systemctl restart nginx    # Stop and restart (brief downtime)
$ sudo systemctl reload nginx     # Reload config WITHOUT dropping connections!

$ sudo systemctl enable nginx     # Start automatically on EVERY boot
$ sudo systemctl disable nginx    # Remove from boot sequence
$ sudo systemctl is-enabled nginx # Check if it is boot-enabled

```

### journalctl (System Logs)

```bash
$ journalctl -xe                   # Show recent log entries with extended explanations for errors
$ journalctl -u nginx              # Show ONLY the logs from the nginx service
$ journalctl -f                    # Follow mode: watch new log lines appear in real time
$ journalctl --since "1 hour ago" # Show only the last hour of logs
$ journalctl -p err                # Show ONLY error-level (and worse) messages

```

### Boot Troubleshooting

```bash
$ sudo mount -o remount,rw /       # Make the root filesystem writable in recovery mode
$ sudo fsck /dev/sda1              # Check and repair a corrupted filesystem

```

## System Administration

### Automated Tasks (Cron)

```bash
$ crontab -e              # Open your personal crontab for editing
$ crontab -l              # List your scheduled jobs
$ sudo crontab -e         # Edit the root user's cron jobs

# MIN  HOUR  DOM  MON  DOW   COMMAND
  30    2    *    *    *    /usr/local/bin/backup-db.sh   # Every day at 2:30 AM
  */15  *    *    *    *    /opt/scripts/healthcheck.sh   # Every 15 minutes
  0     9    *    *    1-5  /home/user/morning-report.sh  # Weekdays at 9 AM
# DOM=Day of Month, DOW=Day of Week (0=Sunday)

```

### Systemd Timers

```bash
$ systemctl list-timers --all       # See all system timers and their next trigger time
$ sudo systemctl enable --now mytask.timer   # Activate and start a timer immediately

```

### System Logging

```bash
$ tail -f /var/log/syslog              # Follow the master system log in real-time
$ grep "Failed password" /var/log/auth.log  # Hunt for SSH brute-force evidence

```

### Log Rotation (logrotate)

```bash
$ cat /etc/logrotate.conf             # View the global default logrotate configuration
$ ls /etc/logrotate.d/               # Per-application rotation rules (nginx, apache, etc.)
$ sudo logrotate -d /etc/logrotate.conf   # Dry-run: see what WOULD happen without doing it

/var/log/nginx/access.log {
    weekly
    rotate 52
    compress
    missingok
}

```

### Resource Monitoring

```bash
$ top                   # Classic real-time process and resource monitor
$ htop                  # Enhanced interactive version of top (requires install)
$ vmstat 5              # Show virtual memory, CPU, and I/O stats every 5 seconds
$ iostat -x 5           # Show extended disk I/O statistics every 5 seconds
$ sar -u 5 10           # Sample CPU utilization 10 times, every 5 seconds (from sysstat)

```

### Backup Strategies (tar & rsync)

```bash
$ tar -czvf /backup/website-$(date +%F).tar.gz /var/www/html/
# c=Create, z=gzip compress, v=Verbose, f=output filename
# Result: website-2026-03-07.tar.gz

$ rsync -avz /var/www/html/ user@backupserver:/backups/html/
# -a=Archive mode (preserves permissions/times), v=Verbose, z=compress in transit

```

### Disk Integrity (fsck)

```bash
$ sudo umount /dev/sdb1              # Step 1: Unmount the suspicious partition
$ sudo fsck -n /dev/sdb1            # Step 2: Dry run - find errors without fixing
$ sudo fsck -y /dev/sdb1            # Step 3: Interactive repair (auto-yes all fixes)

```

### User Auditing

```bash
$ who                      # Who is currently logged in RIGHT NOW
$ w                        # Like 'who' but also shows WHAT each user is actively doing
$ last                     # Full login history (read from /var/log/wtmp)
$ lastfailed               # Show failed login attempts (great for spotting attacks)
$ sudo aureport -l         # If auditd is running: full security-relevant event report
$ sudo auditctl -w /etc/passwd -p wa  # Watch for writes to /etc/passwd

```

## Networking

### IP Addressing & Interfaces

```bash
$ ip addr                  # Show all interfaces and their assigned IP addresses
$ ip addr show eth0        # Show info for a specific interface only
$ ip route                 # Show the routing table (find the default gateway)
$ ifconfig                 # Legacy tool (install via net-tools if missing)

```

### Connectivity Testing (ping & traceroute)

```bash
$ ping -c 4 google.com         # Send 4 ICMP packets to test reachability
$ traceroute google.com        # Show every hop (router) the packet travels through
$ tracepath google.com         # Like traceroute but no root required
$ mtr google.com               # Combines ping + traceroute into a live, dynamic view

```

### DNS & Name Resolution

```bash
$ dig google.com               # Full DNS lookup with detailed section output
$ dig google.com MX            # Look up MX (mail exchange) records specifically
$ host google.com              # Simpler DNS lookup command
$ nslookup google.com          # Legacy DNS lookup (still widely used)
$ cat /etc/resolv.conf         # See which DNS server your system queries

```

### Ports & Active Connections (ss)

```bash
$ ss -tulpn                    # TCP/UDP, Listening ports, Process names, Numeric (no DNS resolve)
$ ss -s                        # Quick summary of socket counts by type
$ netstat -tulpn               # Legacy equivalent using the net-tools package

```

### SSH (Secure Shell)

```bash
$ ssh user@192.168.1.100         # Connect by IP
$ ssh user@server.example.com -p 2222   # Connect on custom port
$ scp file.txt user@server:/remote/path/  # Securely copy a file TO the server
$ scp user@server:/remote/file.txt ./    # Securely copy a file FROM the server

$ ssh-keygen -t ed25519            # Generate a modern cryptographic key pair
$ ssh-copy-id user@server          # Push your public key to the server

```

### Firewall Basics (UFW)

```bash
$ sudo ufw status verbose        # View all active rules and the default policy
$ sudo ufw default deny incoming # GOLDEN RULE: Block everything by default
$ sudo ufw default allow outgoing # Allow all outbound connections by default
$ sudo ufw allow ssh             # Allow SSH (port 22) through the firewall
$ sudo ufw allow 80/tcp          # Allow HTTP web traffic
$ sudo ufw allow 443/tcp         # Allow HTTPS encrypted web traffic
$ sudo ufw enable                # Activate the firewall

```

### Network File Transfer (rsync, wget, curl)

```bash
$ wget https://example.com/file.tar.gz          # Download a file from the internet
$ curl -O https://example.com/file.zip          # Download silently with curl
$ curl -I https://google.com                    # Fetch ONLY the HTTP response headers
$ rsync -avz /local/dir/ user@server:/remote/  # Sync a directory (only changed files)

```

### Network Monitoring (tcpdump & netstat)

```bash
$ sudo tcpdump -i eth0              # Capture all packets on interface eth0
$ sudo tcpdump -i eth0 port 80     # Capture ONLY HTTP traffic
$ sudo tcpdump -i eth0 -w file.pcap  # Save capture to file (open in Wireshark)
$ netstat -rn                       # Show the kernel routing table (legacy)

```

## Security

### User Security & Password Policies

```bash
$ sudo passwd john             # Manually set John's password
$ sudo chage -l john          # View John's password aging configuration
$ sudo chage -M 90 john       # Set maximum password age to 90 days
$ sudo chage -E 2026-12-31 john       # Set hard account expiration date
$ sudo passwd -l john         # LOCK John's account (prepends ! to hash)
$ sudo passwd -u john         # UNLOCK John's account

```

### File Permissions & ACLs

```bash
$ chmod 600 ~/.ssh/id_rsa     # Owner read/write, no one else (MUST for SSH keys!)
$ chmod 755 /usr/local/bin/myscript  # Owner rwx, group+others rx (standard script)
$ chown alice:devs project/   # Change owner to alice, group to devs
$ getfacl file.txt            # View extended ACL (if set)
$ setfacl -m u:bob:r-- file.txt      # Grant bob read-only access via ACL

```

### SSH Hardening

```bash
# Edit /etc/ssh/sshd_config with sudo and change:
PermitRootLogin no             # Never allow root to log in directly
PasswordAuthentication no      # Disable password auth, require keys only
Port 2222                      # Change the default port to reduce bot noise
AllowUsers alice bob           # Whitelist specific users
$ sudo systemctl restart sshd  # Apply changes

```

### Fail2Ban (Intrusion Prevention)

```bash
$ sudo apt install fail2ban          # Install on Debian/Ubuntu
$ sudo systemctl enable --now fail2ban  # Enable and start it
$ sudo fail2ban-client status           # See all active jails
$ sudo fail2ban-client status sshd      # See stats for the SSH jail (bans, failures)
$ sudo fail2ban-client set sshd unbanip 1.2.3.4  # Manually unban an IP

```

### Firewall Rules (iptables)

```bash
$ sudo iptables -L -nv           # List all rules with packet counters
$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT   # Allow SSH
$ sudo iptables -A INPUT -j DROP   # Drop everything else (MUST be last!)
$ sudo iptables-save > /etc/iptables/rules.v4   # Persist rules across reboots

```

### SELinux & AppArmor (MAC)

```bash
$ sestatus                     # Check SELinux mode (Enforcing/Permissive/Disabled)
$ sudo setenforce 0            # Temporarily switch to Permissive mode (logs but doesn't block)
$ ls -Z /var/www/html/         # Show the SELinux security context of files

$ sudo aa-status               # View profiles and their modes
$ sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx  # Put nginx in enforcing mode

```

### Audit Logging (auditd)

```bash
$ sudo systemctl status auditd         # Is the audit daemon running?
$ sudo auditctl -w /etc/passwd -p wa   # Watch /etc/passwd for writes (w) and attribute changes (a)
$ sudo ausearch -f /etc/passwd         # Search audit logs for events related to /etc/passwd
$ sudo aureport -l                     # Generate a login/authentication summary report

```

### Vulnerability Scanning & Hardening

```bash
$ sudo nmap -sV localhost        # Scan your own machine for open ports and service versions
$ sudo nmap -A 192.168.1.0/24   # Scan your entire local network segment
$ sudo lynis audit system        # Run a comprehensive security hardening audit report
$ sudo chkrootkit               # Scan for signs of rootkits on the running system
$ sudo rkhunter --check         # Alternative rootkit hunter scan

```

## Virtualization

### Virtual Machines (KVM/QEMU)

```bash
$ virsh list --all             # Command-line interface to list all VMs on the host
$ virsh start web_server_vm    # Start a specific VM
$ virt-manager                 # The popular graphical GUI to click-and-create VMs

```

### Containers (Docker / Podman)

```bash
$ docker pull nginx:latest       # Download the official Nginx web server image
$ docker run -d -p 8080:80 nginx # Run it detached (-d), mapping host port 8080 to container port 80
$ docker ps                      # See that it is running! (Navigate to HTTP://localhost:8080)
$ docker logs [container_id]     # View the internal output of the container
$ docker exec -it [id] /bin/bash # "SSH" directly into the running container

```

## Monitoring & Troubleshooting

### System Diagnostics

```bash
$ free -h          # Show RAM utilization in Human-readable format

$ df -Th           # Disk Free: View total space and filesystem Types on all drives
$ du -sh /var/log/ # Disk Usage: Calculate the total size of a specific directory
$ ncdu /           # (Optional Install) Incredible interactive tool to hunt down large files

$ iostat -xz 1     # Monitor hard drive read/write speeds in real-time
$ vmstat 1         # Watch virtual memory swapping (if swap is high, you need more RAM)

```

### Network Diagnostics

```bash
$ ip link show         # Look for state UP

$ ip addr show

$ ip route             # Find the 'default via' IP
$ ping [gateway_ip]

$ ping -c 4 8.8.8.8    # Ping Google's public DNS

$ ping -c 4 google.com
$ dig +short github.com # Directly test DNS resolution

```

