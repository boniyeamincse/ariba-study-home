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

### Monitoring Processes

```bash
$ ps aux           # Standard command to see EVERY process on the system
$ ps -u root       # See processes owned by the root user
$ top              # Interactive monitor. Press 'q' to quit.

```

### Signals and Termination

```bash
$ kill 1234        # Send SIGTERM (15) to PID 1234
$ kill -9 1234     # Send SIGKILL (9) to PID 1234
$ pkill firefox    # Kill all processes named 'firefox' (very useful!)

```

### Background Jobs

```bash
$ sleep 300 &      # Starts sleep in the background
[1] 4567           # Output: [Job Number] PID

$ jobs             # List all background jobs in the current terminal session
$ fg %1            # Bring Job 1 to the foreground (blocks terminal again)
$ bg %1            # Resume a paused Job 1 in the background

```

## Software Management

### Package Managers (apt, dnf, pacman)

```bash
$ sudo apt update               # Step 1: Fetch list of latest updates from repos
$ sudo apt upgrade              # Step 2: Actually install the available updates
$ apt search "web server"       # Search for a package containing keywords
$ sudo apt install nginx        # Install a package
$ sudo apt remove nginx         # Remove a package (keeps config files)
$ sudo apt purge nginx          # Completely erase package AND its configs
$ sudo apt autoremove           # Clean up unused dependencies (Very important!)

$ sudo dnf search apache
$ sudo dnf install httpd
$ sudo dnf history              # View transaction history to undo installations!

```

### Archives and Source Code

```bash
$ tar -xzvf source-code.tar.gz   # Extract an archive

$ ./configure    # Checks system for required libraries
$ make           # Compiles the source code into binaries
$ sudo make install # Copies binaries to system folders (like /usr/local/bin)

```

## Devices & Hardware

### Everything is a File (/dev)

```bash
$ ls -l /dev/sda
brw-rw---- 1 root disk 8, 0 Mar  7 /dev/sda  # 'b' means Block device!

```

### Hardware Discovery Tools

```bash
$ lshw -short                  # List ALL hardware in a compact table (requires root)
$ lspci | grep -i vga          # Find your graphics card model
$ lsusb                        # List attached USB devices (webcams, adapters)
$ lscpu                        # Get the exact CPU model, cores, and threads
$ lsblk                        # Visualize your hard drives and their partitions

$ sudo apt install lm-sensors  # Install the sensors package
$ sensors                      # Check CPU and motherboard temperatures

```

## Filesystem & Storage

### Disk Partitioning and Formatting

```bash
$ sudo fdisk /dev/sdb    # Opens the interactive partition tool for a 2nd drive

$ sudo mkfs.ext4 /dev/sdb1 # Creates an ext4 filesystem on partition 1 of sdb

```

### Mounting and /etc/fstab

```bash
$ sudo mkdir -p /mnt/backup          # First, create an empty mount point folder
$ sudo mount /dev/sdb1 /mnt/backup   # Hook the drive into the folder
$ sudo umount /mnt/backup            # Safely unhook the drive (unmount)

# Inside /etc/fstab
# Device        Mount_Point    Filesystem    Options     Dump  Pass
/dev/sdb1       /mnt/backup    ext4          defaults    0     2

```

## Boot & Kernel

### Managing Services (systemd)

```bash
$ sudo systemctl status nginx     # Check if a service is running and see its recent logs
$ sudo systemctl start nginx      # Start it right now
$ sudo systemctl stop nginx       # Stop it right now
$ sudo systemctl restart nginx    # Stop and start it (causes brief downtime)

$ sudo systemctl enable nginx     # Start automatically when the server boots
$ sudo systemctl disable nginx    # Do NOT start on boot
$ sudo systemctl is-enabled nginx # Check if it will start on boot

```

### Kernel Modules

```bash
$ lsmod                           # List all currently loaded modules
$ modinfo bluetooth               # View detailed info about a specific module (e.g., who wrote it)
$ sudo modprobe -r bluetooth      # Safely unload a module and its dependencies
$ sudo modprobe bluetooth         # Safely load the module back into the kernel

```

## System Administration

### Automated Tasks (Cron)

```bash
$ crontab -e      # Edit your personal cron jobs
$ crontab -l      # List your scheduled jobs
$ sudo crontab -e # Edit the root user's cron jobs (for system tasks)

* * * * * /path/to/command
| | | | |
| | | | +---- Day of week (0-7, Sunday is 0 or 7)
| | | +------ Month (1-12)
| | +-------- Day of month (1-31)
| +---------- Hour (0-23)
+------------ Minute (0-59)

# Run a backup script every day at 2:30 AM
30 2 * * * /usr/local/bin/backup-db.sh

# Clear a temp folder every Monday at midnight
0 0 * * 1 rm -rf /tmp/scratch/*

# Run a health check script every 15 minutes
*/15 * * * * /opt/scripts/healthcheck.sh >> /var/log/health.log

```

### System Logging

```bash
$ tail -f /var/log/syslog              # 'Follow' the log: watch entries appear in real-time
$ grep "Failed password" /var/log/auth.log # Hunt for unauthorized SSH brute-force attempts

$ journalctl -xe                       # Show recent errors with extended explanations
$ journalctl -u nginx                  # Show logs ONLY for the Nginx web server service
$ journalctl --since "1 hour ago"      # Filter logs strictly by time

```

## Networking

### Networking Basics (IP & Interfaces)

```bash
$ ip addr show       # Show IP addresses and network interfaces (e.g., eth0, wlan0)
$ ip route           # Show the routing table (default gateway)

```

### Network Troubleshooting Tools

```bash
$ ping -c 4 google.com         # Send exactly 4 pings
$ dig example.com                # Get DNS info
$ ss -tulpn                      # Show all listening ports and the processes owning them

```

### SSH (Secure Shell)

```bash
$ ssh user@192.168.1.100      # Connect to an IP as 'user'
$ ssh user@example.com -p 2222 # Connect on a custom port instead of default 22

$ scp local_file.txt user@server:/remote/path/    # Copy from local to remote
$ scp user@server:/remote/file.txt ./local_dir/   # Copy from remote to local

```

## Security

### User Security & Passwords

```bash
$ passwd                       # Change your own password
$ sudo passwd john             # Change John's password
$ sudo chage -l john           # View John's password aging info
$ sudo chage -E 2024-12-31 john # Set account expiration date

```

### Firewalls (UFW & iptables)

```bash
$ sudo ufw status verbose      # See active rules
$ sudo ufw default deny incoming # Golden rule: Block everything by default!
$ sudo ufw allow ssh           # Punch a hole for SSH (Port 22)
$ sudo ufw allow 80/tcp        # Allow HTTP web traffic
$ sudo ufw allow 443/tcp       # Allow HTTPS secure web traffic
$ sudo ufw enable              # Turn the firewall on

```

### System Hardening (SELinux / AppArmor)

```bash
$ sestatus                     # Get detailed SELinux status
$ sudo setenforce 0                 # Temporarily put SELinux into Permissive (logging only) mode

$ sudo aa-status               # Check which applications are confined

```

## Scripting & Automation

### Bash Scripting Basics

```bash
#!/bin/bash
# A simple system info script
echo "=== System Information ==="
echo "Date: $(date)"
echo "Uptime: $(uptime -p)"
echo "Free Memory: $(free -h | grep Mem | awk '{print $4}')"

$ chmod +x sysinfo.sh          # Make it executable
$ ./sysinfo.sh                 # Run it! (Current directory requires the ./ prefix)

```

### Variables, Loops, and Logic

```bash
#!/bin/bash
BACKUP_DIR="/backup/$(date +%Y-%m-%d)"  # Command substitution
read -p "Enter username: " USERNAME       # Prompt for user input
echo "Creating backup for $USERNAME in $BACKUP_DIR"

#!/bin/bash
if [ -d "/var/www/html" ]; then
    echo "Web server directory exists!"
elif [ -f "/etc/nginx/nginx.conf" ]; then
    echo "Nginx config found, but no web dir."
else
    echo "No web server detected."
fi

#!/bin/bash
# Backup all .txt files by appending .bak
for file in *.txt; do
    cp "$file" "${file}.bak"
    echo "Backed up $file"
done

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

