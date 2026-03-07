// Lesson Content Data
const lessonsContent = {
    "Getting Started": [
        {
            title: "What is Linux?",
            content: `
                <h1>What is Linux?</h1>
                <p>Linux is a free and open-source operating system that powers everything from smartphones to supercomputers. Unlike proprietary systems like Windows or macOS, Linux gives you complete control over your computer.</p>
                <h2>Key Characteristics</h2>
                <ul>
                    <li><strong>Open Source:</strong> The source code is freely available for anyone to view, modify, and distribute.</li>
                    <li><strong>Secure:</strong> Linux has a robust security model with built-in protections.</li>
                    <li><strong>Stable:</strong> Known for reliability and long uptimes.</li>
                    <li><strong>Flexible:</strong> Can run on anything from embedded devices to mainframes.</li>
                </ul>
                <h2>Why Learn Linux?</h2>
                <p>Linux skills are essential for developers, system administrators, and cybersecurity professionals. It's the backbone of cloud computing, web servers, and modern DevOps practices.</p>
            `,
            exercises: [
                "Explore Linux use cases - Research where Linux is used in the real world",
                "Compare operating systems - List differences between Linux, Windows, and macOS"
            ],
            quiz: {
                question: "What makes Linux different from Windows and macOS?",
                options: ["It's more expensive", "It's open source and free", "It only runs on servers", "It has no graphical interface"],
                answer: 1
            }
        },
        {
            title: "Linux History",
            content: `
                <h1>Linux History</h1>
                <p>Welcome to your <strong>Linux Journey</strong>! To understand Linux, we must explore its fascinating history.</p>
                <h2>The UNIX Era (1969)</h2>
                <p>The story begins in 1969 when Ken Thompson and Dennis Ritchie at Bell Laboratories developed the UNIX operating system. It was later rewritten in C, making it portable across different hardware platforms.</p>
                <div class="timeline-img">
                    <img src="assets/images/linux_timeline.png" alt="Linux History Timeline">
                </div>
                <h2>The GNU Project (1983)</h2>
                <p>In 1983, Richard Stallman launched the GNU Project (GNU's Not UNIX) to create a free UNIX-like operating system. The project produced essential tools like GCC compiler, Bash shell, and the GNU General Public License (GPL).</p>
                <h2>Birth of Linux (1991)</h2>
                <p>In 1991, Linus Torvalds, a Finnish computer science student, created the Linux kernel as a hobby project. He released it under the GPL, allowing anyone to use and modify it freely.</p>
                <h2>The Kernel's Role</h2>
                <p>The kernel is the core of an operating system. It manages hardware resources, memory, processes, and provides the interface between hardware and software. Linux kernel + GNU tools = Complete Operating System.</p>
            `,
            exercises: [
                "Timeline Exercise - Create a timeline of major Linux milestones from 1969 to present",
                "Research Project - Learn about Linus Torvalds and his first Linux announcement"
            ],
            quiz: {
                question: "Who created the Linux kernel?",
                options: ["Richard Stallman", "Linus Torvalds", "Ken Thompson", "Dennis Ritchie"],
                answer: 1
            }
        },
        {
            title: "Choosing a Linux Distribution",
            content: `
                <h1>Choosing a Linux Distribution</h1>
                <p>A Linux distribution (distro) is a complete operating system built around the Linux kernel, bundled with software packages, desktop environments, and package managers.</p>
                <h2>Distribution Families</h2>
                <p>There are three major families of Linux distributions:</p>
                <ul>
                    <li><strong>Debian-based:</strong> Known for stability and large software repositories</li>
                    <li><strong>Red Hat-based:</strong> Enterprise-focused with commercial support</li>
                    <li><strong>Arch-based:</strong> Rolling release model for advanced users</li>
                </ul>
                <h2>Factors to Consider</h2>
                <ul>
                    <li><strong>Purpose:</strong> Desktop, server, or specialized use?</li>
                    <li><strong>Experience Level:</strong> Beginner-friendly vs. advanced</li>
                    <li><strong>Hardware:</strong> System requirements and compatibility</li>
                    <li><strong>Support:</strong> Community size and documentation</li>
                    <li><strong>Package Management:</strong> APT, YUM, Pacman, etc.</li>
                </ul>
                <p>For beginners, we recommend starting with <strong>Ubuntu</strong> or <strong>Linux Mint</strong> due to their user-friendly interfaces and extensive community support.</p>
            `,
            exercises: [
                "Distribution Research - Compare 3 different Linux distributions",
                "Try Live USB - Boot a Linux distro from USB without installing"
            ],
            quiz: {
                question: "Which distribution is best recommended for beginners?",
                options: ["Arch Linux", "Ubuntu", "Gentoo", "Slackware"],
                answer: 1
            }
        },
        {
            title: "Debian",
            content: `
                <h1>Debian</h1>
                <p>Debian is one of the oldest and most respected Linux distributions, first released in 1993. It's known for its stability, security, and commitment to free software principles.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Stability:</strong> Thoroughly tested packages before release</li>
                    <li><strong>Package Management:</strong> APT (Advanced Package Tool) and dpkg</li>
                    <li><strong>Huge Repository:</strong> Over 59,000 packages available</li>
                    <li><strong>Multiple Architectures:</strong> Supports many hardware platforms</li>
                    <li><strong>Community-Driven:</strong> Developed by volunteers worldwide</li>
                </ul>
                <h2>Release Cycle</h2>
                <p>Debian has three branches:</p>
                <ul>
                    <li><strong>Stable:</strong> Rock-solid, recommended for production servers</li>
                    <li><strong>Testing:</strong> Next stable release, more recent packages</li>
                    <li><strong>Unstable (Sid):</strong> Cutting-edge, for developers</li>
                </ul>
                <h2>Who Should Use Debian?</h2>
                <p>Debian is ideal for servers, experienced users who value stability, and those who want a pure free software experience.</p>
            `,
            exercises: [
                "Explore Debian packages - Visit packages.debian.org and search for common software",
                "Learn APT commands - Practice apt-get update, upgrade, and install commands"
            ],
            quiz: {
                question: "What package manager does Debian use?",
                options: ["YUM", "Pacman", "APT", "Zypper"],
                answer: 2
            }
        },
        {
            title: "Red Hat Enterprise Linux",
            content: `
                <h1>Red Hat Enterprise Linux (RHEL)</h1>
                <p>Red Hat Enterprise Linux is a commercial Linux distribution designed for enterprise environments. It's known for stability, security, and professional support.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Enterprise Support:</strong> Professional 24/7 technical support</li>
                    <li><strong>Certification:</strong> Certified for enterprise applications</li>
                    <li><strong>Security:</strong> SELinux integration and security updates</li>
                    <li><strong>Long-term Support:</strong> 10+ years of support per release</li>
                    <li><strong>Package Management:</strong> YUM/DNF package manager</li>
                </ul>
                <h2>RHEL Ecosystem</h2>
                <ul>
                    <li><strong>Fedora:</strong> Community version, testing ground for RHEL</li>
                    <li><strong>CentOS:</strong> Free RHEL clone (now CentOS Stream)</li>
                    <li><strong>Rocky Linux:</strong> Community alternative to CentOS</li>
                    <li><strong>AlmaLinux:</strong> Another CentOS alternative</li>
                </ul>
                <h2>Who Should Use RHEL?</h2>
                <p>RHEL is perfect for businesses requiring enterprise-grade support, compliance certifications, and mission-critical stability.</p>
            `,
            exercises: [
                "Compare RHEL vs CentOS - Research the differences and use cases",
                "Explore Red Hat certifications - Learn about RHCSA and RHCE"
            ],
            quiz: {
                question: "What is the package manager used in RHEL?",
                options: ["APT", "YUM/DNF", "Pacman", "Portage"],
                answer: 1
            }
        },
        {
            title: "Ubuntu",
            content: `
                <h1>Ubuntu</h1>
                <p>Ubuntu is the most popular Linux distribution for desktops and servers. Based on Debian, it's developed by Canonical and focuses on ease of use and regular releases.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>User-Friendly:</strong> Easy installation and intuitive interface</li>
                    <li><strong>Regular Releases:</strong> New version every 6 months</li>
                    <li><strong>LTS Versions:</strong> Long-Term Support releases every 2 years (5 years support)</li>
                    <li><strong>Large Community:</strong> Extensive documentation and forums</li>
                    <li><strong>Software Center:</strong> Graphical app store for easy installation</li>
                </ul>
                <h2>Ubuntu Flavors</h2>
                <ul>
                    <li><strong>Ubuntu Desktop:</strong> GNOME desktop environment</li>
                    <li><strong>Kubuntu:</strong> KDE Plasma desktop</li>
                    <li><strong>Xubuntu:</strong> Xfce desktop (lightweight)</li>
                    <li><strong>Lubuntu:</strong> LXQt desktop (very lightweight)</li>
                    <li><strong>Ubuntu Server:</strong> For servers and cloud</li>
                </ul>
                <h2>Why Ubuntu?</h2>
                <p>Ubuntu is perfect for beginners, developers, and anyone wanting a reliable Linux desktop with excellent hardware support.</p>
            `,
            exercises: [
                "Try Ubuntu Live - Boot Ubuntu from USB and explore without installing",
                "Explore Ubuntu Software - Browse the Software Center and discover applications"
            ],
            quiz: {
                question: "How often does Ubuntu release LTS (Long-Term Support) versions?",
                options: ["Every 6 months", "Every year", "Every 2 years", "Every 5 years"],
                answer: 2
            }
        },
        {
            title: "Fedora",
            content: `
                <h1>Fedora</h1>
                <p>Fedora is a cutting-edge Linux distribution sponsored by Red Hat. It serves as a testing ground for technologies that eventually make their way into RHEL.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Latest Software:</strong> Always includes newest stable packages</li>
                    <li><strong>Innovation:</strong> First to adopt new technologies</li>
                    <li><strong>Security:</strong> SELinux enabled by default</li>
                    <li><strong>Workstation & Server:</strong> Editions for different use cases</li>
                    <li><strong>DNF Package Manager:</strong> Modern, fast package management</li>
                </ul>
                <h2>Fedora Editions</h2>
                <ul>
                    <li><strong>Workstation:</strong> For developers and desktop users</li>
                    <li><strong>Server:</strong> For system administrators</li>
                    <li><strong>IoT:</strong> For Internet of Things devices</li>
                    <li><strong>Spins:</strong> Alternative desktop environments (KDE, Xfce, etc.)</li>
                </ul>
                <h2>Release Cycle</h2>
                <p>Fedora releases a new version approximately every 6 months, with each version supported for about 13 months.</p>
                <h2>Who Should Use Fedora?</h2>
                <p>Fedora is ideal for developers, enthusiasts, and users who want the latest features and don't mind occasional updates.</p>
            `,
            exercises: [
                "Explore Fedora Spins - Visit getfedora.org and compare different desktop environments",
                "Learn DNF commands - Practice dnf install, update, and search"
            ],
            quiz: {
                question: "What company sponsors Fedora development?",
                options: ["Canonical", "Red Hat", "SUSE", "Debian Foundation"],
                answer: 1
            }
        },
        {
            title: "Linux Mint",
            content: `
                <h1>Linux Mint</h1>
                <p>Linux Mint is a user-friendly distribution based on Ubuntu, designed to provide a complete out-of-the-box experience with multimedia support and elegant desktop environments.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Beginner-Friendly:</strong> Easy to use with familiar interface</li>
                    <li><strong>Multimedia Ready:</strong> Codecs and plugins included</li>
                    <li><strong>Cinnamon Desktop:</strong> Beautiful and intuitive interface</li>
                    <li><strong>Stability:</strong> Based on Ubuntu LTS releases</li>
                    <li><strong>Software Manager:</strong> Easy application installation</li>
                </ul>
                <h2>Desktop Editions</h2>
                <ul>
                    <li><strong>Cinnamon:</strong> Modern, elegant (most popular)</li>
                    <li><strong>MATE:</strong> Traditional, lightweight</li>
                    <li><strong>Xfce:</strong> Very lightweight, fast</li>
                </ul>
                <h2>Why Linux Mint?</h2>
                <p>Linux Mint is perfect for Windows users transitioning to Linux. It provides a familiar experience with a Windows-like taskbar and menu.</p>
                <h2>Mint Tools</h2>
                <p>Mint includes custom tools like Update Manager, Backup Tool, and System Settings that make system management easier for beginners.</p>
            `,
            exercises: [
                "Compare Desktop Environments - Try Cinnamon, MATE, and Xfce in live mode",
                "Explore Mint Tools - Learn about Update Manager and Software Manager"
            ],
            quiz: {
                question: "Which desktop environment is most popular in Linux Mint?",
                options: ["GNOME", "KDE", "Cinnamon", "Unity"],
                answer: 2
            }
        },
        {
            title: "Gentoo",
            content: `
                <h1>Gentoo</h1>
                <p>Gentoo is a highly flexible, source-based Linux distribution that allows users to compile software optimized for their specific hardware.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Source-Based:</strong> Compile packages from source code</li>
                    <li><strong>Portage:</strong> Powerful package management system</li>
                    <li><strong>Customization:</strong> Complete control over every aspect</li>
                    <li><strong>USE Flags:</strong> Fine-tune software features</li>
                    <li><strong>Rolling Release:</strong> Always up-to-date</li>
                </ul>
                <h2>The Gentoo Philosophy</h2>
                <p>Gentoo follows the principle of "choice over convenience." Users decide exactly what gets installed and how it's configured.</p>
                <h2>Portage Package Manager</h2>
                <p>Portage is inspired by FreeBSD's ports system. It downloads source code, applies patches, and compiles software with your chosen optimizations.</p>
                <h2>Who Should Use Gentoo?</h2>
                <p>Gentoo is for advanced users who want maximum control, performance optimization, and deep understanding of Linux internals. Installation can take hours or days.</p>
                <h2>Learning Opportunity</h2>
                <p>Installing Gentoo is an excellent learning experience that teaches you how Linux works from the ground up.</p>
            `,
            exercises: [
                "Read Gentoo Handbook - Study the comprehensive installation guide",
                "Learn about USE flags - Understand how to customize package features"
            ],
            quiz: {
                question: "What makes Gentoo unique compared to other distributions?",
                options: ["It's the oldest distro", "It compiles from source", "It has no package manager", "It only runs on servers"],
                answer: 1
            }
        },
        {
            title: "Arch Linux",
            content: `
                <h1>Arch Linux</h1>
                <p>Arch Linux is a lightweight, flexible distribution that follows the KISS principle (Keep It Simple, Stupid). It provides a minimal base system that users build upon.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Rolling Release:</strong> Continuous updates, always current</li>
                    <li><strong>Pacman:</strong> Fast and powerful package manager</li>
                    <li><strong>AUR:</strong> Arch User Repository with 80,000+ packages</li>
                    <li><strong>Minimalist:</strong> Install only what you need</li>
                    <li><strong>Arch Wiki:</strong> Best Linux documentation available</li>
                </ul>
                <h2>The Arch Way</h2>
                <p>Arch follows these principles:</p>
                <ul>
                    <li><strong>Simplicity:</strong> Avoid unnecessary complexity</li>
                    <li><strong>Modernity:</strong> Latest stable software</li>
                    <li><strong>Pragmatism:</strong> Principles over ideology</li>
                    <li><strong>User-Centricity:</strong> For competent users</li>
                    <li><strong>Versatility:</strong> Build your own system</li>
                </ul>
                <h2>Installation</h2>
                <p>Arch has no graphical installer. You manually partition disks, install packages, and configure the system via command line.</p>
                <h2>Who Should Use Arch?</h2>
                <p>Arch is for experienced users who want a customized, cutting-edge system and enjoy hands-on configuration.</p>
            `,
            exercises: [
                "Explore Arch Wiki - Browse wiki.archlinux.org for comprehensive guides",
                "Learn Pacman - Study pacman commands: -S, -R, -Syu, -Ss"
            ],
            quiz: {
                question: "What is the Arch User Repository (AUR)?",
                options: ["Official package repository", "Community-maintained packages", "Arch documentation", "Package manager"],
                answer: 1
            }
        },
        {
            title: "openSUSE",
            content: `
                <h1>openSUSE</h1>
                <p>openSUSE is a stable, versatile Linux distribution sponsored by SUSE. It's known for its powerful administration tools and comes in two main versions.</p>
                <h2>Key Features</h2>
                <ul>
                    <li><strong>YaST:</strong> Comprehensive system administration tool</li>
                    <li><strong>Two Versions:</strong> Leap (stable) and Tumbleweed (rolling)</li>
                    <li><strong>Zypper:</strong> Fast package manager</li>
                    <li><strong>Btrfs:</strong> Advanced filesystem by default</li>
                    <li><strong>Snapper:</strong> Automatic system snapshots</li>
                </ul>
                <h2>openSUSE Leap vs Tumbleweed</h2>
                <ul>
                    <li><strong>Leap:</strong> Stable release, based on SUSE Linux Enterprise</li>
                    <li><strong>Tumbleweed:</strong> Rolling release, always latest packages</li>
                </ul>
                <h2>YaST Control Center</h2>
                <p>YaST (Yet another Setup Tool) is a powerful graphical and text-based tool for system configuration, making complex tasks simple.</p>
                <h2>Who Should Use openSUSE?</h2>
                <p>openSUSE is great for users who want stability (Leap) or cutting-edge software (Tumbleweed) with excellent administration tools.</p>
                <h2>Enterprise Connection</h2>
                <p>openSUSE Leap shares DNA with SUSE Linux Enterprise, making it ideal for learning enterprise Linux.</p>
            `,
            exercises: [
                "Explore YaST - Learn about YaST modules for network, users, and software",
                "Compare Leap and Tumbleweed - Understand the differences and use cases"
            ],
            quiz: {
                question: "What is YaST in openSUSE?",
                options: ["Package manager", "Desktop environment", "System administration tool", "File system"],
                answer: 2
            }
        },
        {
            title: "Installing Linux",
            content: `
                <h1>Installing Linux</h1>
                <p>Installing Linux is easier than ever. This guide covers the general installation process applicable to most distributions.</p>
                <h2>Pre-Installation Steps</h2>
                <ol>
                    <li><strong>Choose Your Distribution:</strong> Select based on your needs and experience</li>
                    <li><strong>Download ISO:</strong> Get the installation image from official website</li>
                    <li><strong>Verify Download:</strong> Check SHA256 checksum for integrity</li>
                    <li><strong>Create Bootable Media:</strong> Use tools like Rufus, Etcher, or dd</li>
                    <li><strong>Backup Data:</strong> Always backup important files first</li>
                </ol>
                <h2>Installation Methods</h2>
                <ul>
                    <li><strong>Dual Boot:</strong> Install alongside Windows/macOS</li>
                    <li><strong>Replace OS:</strong> Wipe existing system and install Linux</li>
                    <li><strong>Virtual Machine:</strong> Test without affecting your system</li>
                    <li><strong>Live USB:</strong> Run without installing</li>
                </ul>
                <h2>Installation Process</h2>
                <ol>
                    <li>Boot from USB/DVD</li>
                    <li>Select language and keyboard layout</li>
                    <li>Choose installation type</li>
                    <li>Partition disk (automatic or manual)</li>
                    <li>Set timezone and location</li>
                    <li>Create user account</li>
                    <li>Install bootloader (GRUB)</li>
                    <li>Complete installation and reboot</li>
                </ol>
                <h2>Post-Installation</h2>
                <ul>
                    <li>Update system packages</li>
                    <li>Install additional drivers</li>
                    <li>Configure system settings</li>
                    <li>Install essential software</li>
                </ul>
            `,
            exercises: [
                "Create a bootable USB - Use Rufus or Etcher to create installation media",
                "Practice in VM - Install Linux in VirtualBox or VMware first"
            ],
            quiz: {
                question: "What is the recommended first step before installing Linux?",
                options: ["Delete all files", "Backup important data", "Buy new hardware", "Uninstall antivirus"],
                answer: 1
            }
        },
        {
            title: "Virtual Machines & Containers",
            content: `
                <h1>Virtual Machines & Containers</h1>
                <p>Virtual machines and containers allow you to run Linux without installing it directly on your hardware. They're perfect for learning, testing, and development.</p>
                <h2>Virtual Machines (VMs)</h2>
                <p>A virtual machine is a complete computer system running inside your existing operating system.</p>
                <h3>Popular VM Software</h3>
                <ul>
                    <li><strong>VirtualBox:</strong> Free, cross-platform, beginner-friendly</li>
                    <li><strong>VMware Workstation:</strong> Professional features, free Player version</li>
                    <li><strong>QEMU/KVM:</strong> Linux native, high performance</li>
                    <li><strong>Hyper-V:</strong> Built into Windows Pro/Enterprise</li>
                </ul>
                <h3>VM Advantages</h3>
                <ul>
                    <li>Safe testing environment</li>
                    <li>Snapshots for easy rollback</li>
                    <li>Run multiple OS simultaneously</li>
                    <li>No risk to host system</li>
                </ul>
                <h2>Containers</h2>
                <p>Containers are lightweight, isolated environments that share the host kernel.</p>
                <h3>Container Technologies</h3>
                <ul>
                    <li><strong>Docker:</strong> Most popular, easy to use</li>
                    <li><strong>Podman:</strong> Daemonless, rootless alternative</li>
                    <li><strong>LXC/LXD:</strong> System containers</li>
                    <li><strong>Kubernetes:</strong> Container orchestration</li>
                </ul>
                <h3>Containers vs VMs</h3>
                <ul>
                    <li><strong>Containers:</strong> Lightweight, fast startup, share kernel</li>
                    <li><strong>VMs:</strong> Complete isolation, own kernel, more resources</li>
                </ul>
                <h2>When to Use Each</h2>
                <ul>
                    <li><strong>VMs:</strong> Learning Linux, testing different distros, complete isolation</li>
                    <li><strong>Containers:</strong> Application development, microservices, CI/CD</li>
                </ul>
            `,
            exercises: [
                "Install VirtualBox - Set up VirtualBox and create your first Linux VM",
                "Try Docker - Install Docker and run a simple Linux container",
                "Compare Performance - Test startup time and resource usage of VM vs container"
            ],
            quiz: {
                question: "What is the main difference between containers and virtual machines?",
                options: ["Containers are slower", "Containers share the host kernel", "VMs are more portable", "Containers need more resources"],
                answer: 1
            }
        }
    ],
    "Command Line": [
        {
            title: "The Shell",
            content: `
                <h1>The Shell</h1>
                <p>The shell is a command-line interface that allows you to interact with your operating system. It's one of the most powerful tools in Linux.</p>
                <h2>What is a Shell?</h2>
                <p>A shell is a program that takes commands from the keyboard and gives them to the operating system to perform. It's called a shell because it wraps around the kernel.</p>
                <h2>Types of Shells</h2>
                <ul>
                    <li><strong>Bash (Bourne Again Shell):</strong> Most popular, default on many systems</li>
                    <li><strong>Zsh (Z Shell):</strong> Feature-rich, highly customizable</li>
                    <li><strong>Fish (Friendly Interactive Shell):</strong> User-friendly with auto-suggestions</li>
                    <li><strong>Sh (Bourne Shell):</strong> Original Unix shell</li>
                    <li><strong>Ksh (Korn Shell):</strong> Combines features of sh and csh</li>
                </ul>
                <h2>The Terminal</h2>
                <p>The terminal (or terminal emulator) is the program that runs the shell. Popular terminals include GNOME Terminal, Konsole, Terminator, and iTerm2.</p>
                <h2>Shell Prompt</h2>
                <p>The prompt is where you type commands. A typical prompt looks like:</p>
                <pre>username@hostname:~$</pre>
                <ul>
                    <li><strong>username:</strong> Your login name</li>
                    <li><strong>hostname:</strong> Computer name</li>
                    <li><strong>~:</strong> Current directory (~ means home)</li>
                    <li><strong>$:</strong> Regular user (# for root)</li>
                </ul>
                <h2>Why Use the Shell?</h2>
                <ul>
                    <li>Faster than GUI for many tasks</li>
                    <li>Automation through scripts</li>
                    <li>Remote server management</li>
                    <li>Powerful text processing</li>
                    <li>System administration</li>
                </ul>
            `,
            exercises: [
                "Check your shell - Run: echo $SHELL to see which shell you're using",
                "Explore the prompt - Type commands and observe how the prompt behaves"
            ],
            quiz: {
                question: "What is the most commonly used shell in Linux?",
                options: ["Fish", "Zsh", "Bash", "Ksh"],
                answer: 2
            }
        },
        {
            title: "pwd, cd, ls",
            content: `
                <h1>Navigation Commands: pwd, cd, ls</h1>
                <p>These three commands are essential for navigating the Linux filesystem.</p>
                <h2>pwd - Print Working Directory</h2>
                <p>Shows your current location in the filesystem.</p>
                <pre>$ pwd
/home/username/Documents</pre>
                <h2>cd - Change Directory</h2>
                <p>Move between directories.</p>
                <pre>$ cd /var/log        # Go to /var/log
$ cd ..              # Go up one level
$ cd ~               # Go to home directory
$ cd -               # Go to previous directory
$ cd                 # Go to home (same as cd ~)</pre>
                <h3>Special Paths</h3>
                <ul>
                    <li><strong>.</strong> - Current directory</li>
                    <li><strong>..</strong> - Parent directory</li>
                    <li><strong>~</strong> - Home directory</li>
                    <li><strong>/</strong> - Root directory</li>
                    <li><strong>-</strong> - Previous directory</li>
                </ul>
                <h2>ls - List Directory Contents</h2>
                <p>Display files and directories.</p>
                <pre>$ ls                 # List files
$ ls -l              # Long format with details
$ ls -a              # Show hidden files
$ ls -lh             # Human-readable sizes
$ ls -la             # Combine options
$ ls -R              # Recursive listing
$ ls -t              # Sort by modification time</pre>
                <h3>Understanding ls -l Output</h3>
                <pre>-rw-r--r-- 1 user group 1234 Mar 7 10:30 file.txt</pre>
                <ul>
                    <li>Permissions: -rw-r--r--</li>
                    <li>Links: 1</li>
                    <li>Owner: user</li>
                    <li>Group: group</li>
                    <li>Size: 1234 bytes</li>
                    <li>Date: Mar 7 10:30</li>
                    <li>Name: file.txt</li>
                </ul>
            `,
            exercises: [
                "Navigate your system - Use cd to explore /etc, /var, and /usr directories",
                "Practice ls options - Try different combinations like ls -lah, ls -ltr"
            ],
            quiz: {
                question: "Which command shows your current directory?",
                options: ["cd", "ls", "pwd", "dir"],
                answer: 2
            }
        },
        {
            title: "touch, file, cat, less, history",
            content: `
                <h1>File Viewing Commands</h1>
                <h2>touch - Create Files or Update Timestamps</h2>
                <p>Create empty files or update modification times.</p>
                <pre>$ touch newfile.txt           # Create empty file
$ touch file1 file2 file3    # Create multiple files
$ touch existing.txt         # Update timestamp</pre>
                <h2>file - Determine File Type</h2>
                <p>Identify what type of file you're dealing with.</p>
                <pre>$ file document.pdf
document.pdf: PDF document, version 1.4
$ file script.sh
script.sh: Bash shell script, ASCII text executable
$ file image.jpg
image.jpg: JPEG image data</pre>
                <h2>cat - Concatenate and Display Files</h2>
                <p>Display file contents, combine files, or create new files.</p>
                <pre>$ cat file.txt              # Display file
$ cat file1 file2           # Display multiple files
$ cat file1 file2 > merged  # Combine files
$ cat > newfile.txt         # Create file (Ctrl+D to save)</pre>
                <h2>less - View Files Page by Page</h2>
                <p>Better for large files, allows scrolling and searching.</p>
                <pre>$ less largefile.log</pre>
                <h3>less Navigation</h3>
                <ul>
                    <li><strong>Space:</strong> Next page</li>
                    <li><strong>b:</strong> Previous page</li>
                    <li><strong>/pattern:</strong> Search forward</li>
                    <li><strong>?pattern:</strong> Search backward</li>
                    <li><strong>n:</strong> Next search result</li>
                    <li><strong>q:</strong> Quit</li>
                    <li><strong>G:</strong> Go to end</li>
                    <li><strong>g:</strong> Go to beginning</li>
                </ul>
                <h2>history - Command History</h2>
                <p>View and reuse previous commands.</p>
                <pre>$ history                # Show all commands
$ history 10             # Show last 10 commands
$ !100                   # Run command #100
$ !!                     # Run last command
$ !cat                   # Run last cat command
$ Ctrl+R                 # Search history interactively</pre>
            `,
            exercises: [
                "Create test files - Use touch to create several files, then view them with cat and less",
                "Explore history - Run various commands, then use history and try rerunning commands with !"
            ],
            quiz: {
                question: "Which command is best for viewing large log files?",
                options: ["cat", "touch", "less", "file"],
                answer: 2
            }
        },
        {
            title: "cp, mv, mkdir, rm",
            content: `
                <h1>File Management Commands</h1>
                <h2>cp - Copy Files and Directories</h2>
                <p>Duplicate files and directories.</p>
                <pre>$ cp source.txt destination.txt    # Copy file
$ cp file.txt /tmp/                 # Copy to directory
$ cp -r folder/ backup/             # Copy directory recursively
$ cp -i file.txt dest.txt           # Interactive (ask before overwrite)
$ cp -v file.txt dest.txt           # Verbose (show what's being done)
$ cp -p file.txt dest.txt           # Preserve attributes</pre>
                <h2>mv - Move or Rename Files</h2>
                <p>Move files to new locations or rename them.</p>
                <pre>$ mv oldname.txt newname.txt       # Rename file
$ mv file.txt /tmp/                 # Move to directory
$ mv file1 file2 /destination/      # Move multiple files
$ mv -i file.txt dest.txt           # Interactive mode
$ mv -v file.txt dest.txt           # Verbose mode</pre>
                <h2>mkdir - Make Directories</h2>
                <p>Create new directories.</p>
                <pre>$ mkdir newfolder                   # Create directory
$ mkdir dir1 dir2 dir3              # Create multiple
$ mkdir -p parent/child/grandchild  # Create nested directories
$ mkdir -v folder                   # Verbose output</pre>
                <h2>rm - Remove Files and Directories</h2>
                <p>Delete files and directories. <strong>Warning: No undo!</strong></p>
                <pre>$ rm file.txt                       # Remove file
$ rm file1 file2 file3              # Remove multiple files
$ rm -i file.txt                    # Interactive (ask confirmation)
$ rm -r folder/                     # Remove directory recursively
$ rm -rf folder/                    # Force remove (dangerous!)
$ rm -v file.txt                    # Verbose output</pre>
                <h3>Safety Tips</h3>
                <ul>
                    <li>Always use <code>-i</code> flag when learning</li>
                    <li>Double-check before using <code>rm -rf</code></li>
                    <li>Use <code>ls</code> first to verify what you're deleting</li>
                    <li>Never run <code>rm -rf /</code> (deletes everything!)</li>
                </ul>
            `,
            exercises: [
                "Practice copying - Create test files and copy them with different options",
                "Safe deletion - Create test directories and practice rm with -i flag first"
            ],
            quiz: {
                question: "Which flag is needed to copy a directory recursively?",
                options: ["-i", "-r", "-v", "-p"],
                answer: 1
            }
        },
        {
            title: "find",
            content: `
                <h1>find - Search for Files</h1>
                <p>The find command is a powerful tool for searching files and directories based on various criteria.</p>
                <h2>Basic Syntax</h2>
                <pre>$ find [path] [options] [expression]</pre>
                <h2>Find by Name</h2>
                <pre>$ find . -name "file.txt"          # Find exact name
$ find . -name "*.txt"              # Find all .txt files
$ find . -iname "FILE.txt"          # Case-insensitive search
$ find /home -name "*.log"          # Search in specific directory</pre>
                <h2>Find by Type</h2>
                <pre>$ find . -type f                    # Find files only
$ find . -type d                    # Find directories only
$ find . -type l                    # Find symbolic links</pre>
                <h2>Find by Size</h2>
                <pre>$ find . -size +100M                # Larger than 100MB
$ find . -size -10k                 # Smaller than 10KB
$ find . -size 50M                  # Exactly 50MB</pre>
                <h2>Find by Time</h2>
                <pre>$ find . -mtime -7                  # Modified in last 7 days
$ find . -mtime +30                 # Modified more than 30 days ago
$ find . -atime -1                  # Accessed in last 24 hours</pre>
                <h2>Find by Permissions</h2>
                <pre>$ find . -perm 644                  # Exact permissions
$ find . -perm -644                 # At least these permissions
$ find . -perm /u+w                 # User writable</pre>
                <h2>Execute Commands on Results</h2>
                <pre>$ find . -name "*.tmp" -delete     # Delete found files
$ find . -name "*.txt" -exec cat {} \;  # Run command on each
$ find . -type f -exec chmod 644 {} \;  # Change permissions</pre>
                <h2>Combining Conditions</h2>
                <pre>$ find . -name "*.log" -size +1M   # AND condition
$ find . -name "*.txt" -o -name "*.log"  # OR condition
$ find . ! -name "*.txt"            # NOT condition</pre>
            `,
            exercises: [
                "Find large files - Use find to locate files larger than 100MB on your system",
                "Clean old files - Find files modified more than 30 days ago in /tmp"
            ],
            quiz: {
                question: "Which find option searches for files by name (case-insensitive)?",
                options: ["-name", "-iname", "-type", "-size"],
                answer: 1
            }
        },
        {
            title: "help, man, whatis, alias, exit",
            content: `
                <h1>Help and Utility Commands</h1>
                <h2>help - Built-in Command Help</h2>
                <p>Get help for shell built-in commands.</p>
                <pre>$ help cd                           # Help for cd command
$ help                              # List all built-ins
$ help -m printf                    # Manual format</pre>
                <h2>man - Manual Pages</h2>
                <p>Comprehensive documentation for commands.</p>
                <pre>$ man ls                            # Manual for ls
$ man 5 passwd                      # Section 5 of passwd
$ man -k search                     # Search manual descriptions
$ man -f command                    # Same as whatis</pre>
                <h3>Manual Sections</h3>
                <ul>
                    <li><strong>1:</strong> User commands</li>
                    <li><strong>2:</strong> System calls</li>
                    <li><strong>3:</strong> Library functions</li>
                    <li><strong>4:</strong> Special files</li>
                    <li><strong>5:</strong> File formats</li>
                    <li><strong>6:</strong> Games</li>
                    <li><strong>7:</strong> Miscellaneous</li>
                    <li><strong>8:</strong> System administration</li>
                </ul>
                <h3>Navigating man Pages</h3>
                <ul>
                    <li><strong>Space:</strong> Next page</li>
                    <li><strong>b:</strong> Previous page</li>
                    <li><strong>/pattern:</strong> Search</li>
                    <li><strong>q:</strong> Quit</li>
                </ul>
                <h2>whatis - Brief Command Description</h2>
                <p>One-line description of commands.</p>
                <pre>$ whatis ls
ls (1) - list directory contents
$ whatis cp mv rm
cp (1) - copy files and directories
mv (1) - move (rename) files
rm (1) - remove files or directories</pre>
                <h2>alias - Create Command Shortcuts</h2>
                <p>Create custom shortcuts for commands.</p>
                <pre>$ alias ll='ls -lah'                # Create alias
$ alias                             # List all aliases
$ unalias ll                        # Remove alias
$ alias rm='rm -i'                  # Make rm safer</pre>
                <h3>Permanent Aliases</h3>
                <p>Add to ~/.bashrc or ~/.bash_aliases:</p>
                <pre>alias update='sudo apt update && sudo apt upgrade'
alias ..='cd ..'
alias ...='cd ../..'</pre>
                <h2>exit - Exit the Shell</h2>
                <p>Close the terminal or shell session.</p>
                <pre>$ exit                              # Exit with last status
$ exit 0                            # Exit with success status
$ exit 1                            # Exit with error status</pre>
            `,
            exercises: [
                "Explore man pages - Read man pages for 5 different commands",
                "Create useful aliases - Set up aliases for your most-used commands"
            ],
            quiz: {
                question: "Which command provides a one-line description of a command?",
                options: ["help", "man", "whatis", "info"],
                answer: 2
            }
        },
        {
            title: "Command-Line Shortcuts & Tips",
            content: `
                <h1>Command-Line Shortcuts & Tips</h1>
                <p>Master these shortcuts to become a command-line ninja!</p>
                <h2>Navigation Shortcuts</h2>
                <ul>
                    <li><strong>Ctrl + A:</strong> Move to beginning of line</li>
                    <li><strong>Ctrl + E:</strong> Move to end of line</li>
                    <li><strong>Ctrl + B:</strong> Move back one character</li>
                    <li><strong>Ctrl + F:</strong> Move forward one character</li>
                    <li><strong>Alt + B:</strong> Move back one word</li>
                    <li><strong>Alt + F:</strong> Move forward one word</li>
                </ul>
                <h2>Editing Shortcuts</h2>
                <ul>
                    <li><strong>Ctrl + U:</strong> Cut from cursor to beginning</li>
                    <li><strong>Ctrl + K:</strong> Cut from cursor to end</li>
                    <li><strong>Ctrl + W:</strong> Cut previous word</li>
                    <li><strong>Ctrl + Y:</strong> Paste (yank) cut text</li>
                    <li><strong>Ctrl + D:</strong> Delete character under cursor</li>
                    <li><strong>Ctrl + H:</strong> Delete character before cursor (backspace)</li>
                    <li><strong>Alt + D:</strong> Delete word after cursor</li>
                    <li><strong>Alt + Backspace:</strong> Delete word before cursor</li>
                </ul>
                <h2>History Shortcuts</h2>
                <ul>
                    <li><strong>Ctrl + R:</strong> Reverse search history</li>
                    <li><strong>Ctrl + P:</strong> Previous command (↑)</li>
                    <li><strong>Ctrl + N:</strong> Next command (↓)</li>
                    <li><strong>!!:</strong> Repeat last command</li>
                    <li><strong>!$:</strong> Last argument of previous command</li>
                    <li><strong>!*:</strong> All arguments of previous command</li>
                    <li><strong>!n:</strong> Run command number n from history</li>
                </ul>
                <h2>Control Shortcuts</h2>
                <ul>
                    <li><strong>Ctrl + C:</strong> Cancel current command</li>
                    <li><strong>Ctrl + Z:</strong> Suspend current process</li>
                    <li><strong>Ctrl + L:</strong> Clear screen (same as clear)</li>
                    <li><strong>Ctrl + S:</strong> Pause output</li>
                    <li><strong>Ctrl + Q:</strong> Resume output</li>
                    <li><strong>Ctrl + D:</strong> Exit shell (EOF)</li>
                </ul>
                <h2>Tab Completion</h2>
                <ul>
                    <li><strong>Tab:</strong> Auto-complete commands and filenames</li>
                    <li><strong>Tab Tab:</strong> Show all possible completions</li>
                </ul>
                <h2>Useful Tips</h2>
                <pre>$ cd -                              # Go to previous directory
$ mkdir -p path/to/nested/dir       # Create nested directories
$ command &                         # Run in background
$ command1 && command2              # Run command2 if command1 succeeds
$ command1 || command2              # Run command2 if command1 fails
$ command1 ; command2               # Run both regardless
$ command > file.txt                # Redirect output to file
$ command >> file.txt               # Append output to file
$ command 2> error.log              # Redirect errors
$ command &> all.log                # Redirect both output and errors</pre>
            `,
            exercises: [
                "Practice shortcuts - Spend 10 minutes using only keyboard shortcuts",
                "Master Ctrl+R - Use reverse search to find and rerun old commands"
            ],
            quiz: {
                question: "Which shortcut clears the terminal screen?",
                options: ["Ctrl + C", "Ctrl + L", "Ctrl + D", "Ctrl + Z"],
                answer: 1
            }
        },
        {
            title: "Environment Variables",
            content: `
                <h1>Environment Variables</h1>
                <p>Environment variables are dynamic values that affect the behavior of processes and programs in your shell.</p>
                <h2>What are Environment Variables?</h2>
                <p>They store information about your system environment, such as paths, user preferences, and system settings.</p>
                <h2>Viewing Environment Variables</h2>
                <pre>$ env                               # List all environment variables
$ printenv                          # Same as env
$ printenv HOME                     # Show specific variable
$ echo $HOME                        # Display variable value
$ echo $PATH                        # Show PATH variable</pre>
                <h2>Common Environment Variables</h2>
                <ul>
                    <li><strong>$HOME:</strong> User's home directory (/home/username)</li>
                    <li><strong>$USER:</strong> Current username</li>
                    <li><strong>$PATH:</strong> Directories to search for commands</li>
                    <li><strong>$SHELL:</strong> Current shell (/bin/bash)</li>
                    <li><strong>$PWD:</strong> Current working directory</li>
                    <li><strong>$OLDPWD:</strong> Previous working directory</li>
                    <li><strong>$LANG:</strong> System language and locale</li>
                    <li><strong>$EDITOR:</strong> Default text editor</li>
                    <li><strong>$TERM:</strong> Terminal type</li>
                </ul>
                <h2>Setting Variables</h2>
                <h3>Temporary (Current Session Only)</h3>
                <pre>$ MY_VAR="Hello World"              # Create variable
$ echo $MY_VAR                      # Display it
$ export MY_VAR="Hello"             # Make available to child processes</pre>
                <h3>Permanent (Add to ~/.bashrc or ~/.bash_profile)</h3>
                <pre>export EDITOR=vim
export PATH=$PATH:/new/directory
export MY_APP_CONFIG=/path/to/config</pre>
                <h2>The PATH Variable</h2>
                <p>PATH tells the shell where to look for executable files.</p>
                <pre>$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

# Add directory to PATH
$ export PATH=$PATH:/new/directory

# Add to beginning (higher priority)
$ export PATH=/new/directory:$PATH</pre>
                <h2>Unsetting Variables</h2>
                <pre>$ unset MY_VAR                      # Remove variable</pre>
                <h2>Special Variables</h2>
                <ul>
                    <li><strong>$?:</strong> Exit status of last command (0 = success)</li>
                    <li><strong>$$:</strong> Process ID of current shell</li>
                    <li><strong>$0:</strong> Name of the shell or script</li>
                    <li><strong>$1, $2, ...:</strong> Script arguments</li>
                    <li><strong>$#:</strong> Number of arguments</li>
                    <li><strong>$@:</strong> All arguments</li>
                </ul>
                <h2>Practical Examples</h2>
                <pre>$ export JAVA_HOME=/usr/lib/jvm/java-11
$ export PATH=$PATH:$JAVA_HOME/bin
$ export HISTSIZE=10000             # Increase history size
$ export HISTFILESIZE=20000</pre>
            `,
            exercises: [
                "Explore your environment - Use env to see all variables, then research 5 unfamiliar ones",
                "Customize PATH - Add a custom directory to your PATH and test it",
                "Create persistent variables - Add custom variables to ~/.bashrc"
            ],
            quiz: {
                question: "Which variable contains directories where the shell looks for commands?",
                options: ["$HOME", "$PATH", "$SHELL", "$USER"],
                answer: 1
            }
        }
    ],
    "Basic Text-Fu": [
        {
            title: "Standard I/O Redirection",
            content: `
                <h1>Standard I/O Redirection</h1>
                <p>Everything in Linux is a file, including your keyboard and your screen. Programs use three standard data streams:</p>
                <ul>
                    <li><strong>Standard Input (stdin / 0):</strong> Usually your keyboard.</li>
                    <li><strong>Standard Output (stdout / 1):</strong> Usually your screen.</li>
                    <li><strong>Standard Error (stderr / 2):</strong> Error messages, usually also on your screen.</li>
                </ul>
                <div class="code-block">
                    <pre>$ command > file   # Redirect stdout (overwrite)
$ command >> file  # Redirect stdout (append)
$ command 2> file  # Redirect stderr
$ command &> file  # Redirect both stdout and stderr
$ command < file   # Take input from file</pre>
                </div>
            `,
            exercises: ["Execute <code>ls /nonexistent 2> errors.log</code> and check the file content.", "Use <code>cat < /etc/hostname</code> to see your computer's name."],
            quiz: {
                question: "Which file descriptor represents Standard Error (stderr)?",
                options: ["0", "1", "2", "3"],
                answer: 2
            }
        },
        {
            title: "Pipes and Tee",
            content: `
                <h1>Pipes and the 'tee' Command</h1>
                <p>The pipe <code>|</code> is the most powerful tool in the Linux philosophy: "Do one thing and do it well, and work together."</p>
                <h2>What is a Pipe?</h2>
                <p>A pipe takes the <strong>stdout</strong> of the left command and sends it as <strong>stdin</strong> to the right command.</p>
                <div class="code-block">
                    <pre>$ ls -l /etc | less                # Page through a long list
$ ls /bin | grep "zip"             # Find zip-related binaries</pre>
                </div>
                <h2>The 'tee' Command</h2>
                <p>Named after a T-shaped pipe joint, <code>tee</code> splits the output. It saves to a file AND displays it to stdout.</p>
                <pre>$ ls | tee manifest.txt | wc -l    # Save list AND count files</pre>
            `,
            exercises: ["List the content of /etc and count the lines using <code>ls /etc | wc -l</code>", "Use <code>tee</code> to save the current date to 'date.txt' and see it on screen simultaneously."],
            quiz: {
                question: "What does the 'tee' command do?",
                options: ["Redirects only to files", "Redirects only to screen", "Sends output to a file and screen simultaneously", "Deletes the output after reading"],
                answer: 2
            }
        },
        {
            title: "Text Processing (cut, head, tail, sort, uniq)",
            content: `
                <h1>Basic Text Utilities</h1>
                <p>Linux offers a massive array of small tools that manipulate text data efficiently.</p>
                <ul>
                    <li><strong>env:</strong> List environment variables or run programs in modified env.</li>
                    <li><strong>cut:</strong> Extract sections from each line (columns/fields).</li>
                    <li><strong>head / tail:</strong> View the top or bottom of a file.</li>
                    <li><strong>sort:</strong> Arrange lines of text alphabetically or numerically.</li>
                    <li><strong>uniq:</strong> Removes duplicate lines (requires sorted input).</li>
                </ul>
                <div class="code-block">
                    <pre>$ cut -d: -f1 /etc/passwd            # Get list of usernames
$ head -n 5 /etc/passwd              # Show first 5 users
$ sort names.txt | uniq               # Get unique sorted names</pre>
                </div>
            `,
            exercises: ["Use <code>tail -f /var/log/syslog</code> (or any log) to see it update in real-time.", "Sort <code>/etc/group</code> alphabetically."],
            quiz: {
                question: "Which command would you use to see the last 10 lines of a file?",
                options: ["head", "cut", "tail", "nl"],
                answer: 2
            }
        },
        {
            title: "Advanced Utilities (expand, join, split, wc, nl)",
            content: `
                <h1>Expanding your Toolbelt</h1>
                <p>More specialized tools for structured data management.</p>
                <ul>
                    <li><strong>expand / unexpand:</strong> Convert tabs to spaces (and vice versa).</li>
                    <li><strong>join:</strong> Combine two files based on a common field (like a SQL JOIN).</li>
                    <li><strong>split:</strong> Break a large file into smaller pieces.</li>
                    <li><strong>wc:</strong> Word count (lines, words, characters).</li>
                    <li><strong>nl:</strong> Number the lines of a file.</li>
                </ul>
                <pre>$ wc -l file.txt                    # Count lines in a file
$ nl script.sh                       # Display script with line numbers</pre>
            `,
            exercises: ["Count how many unique users are on your system using a pipe.", "Split a large text file into 10-line chunks."],
            quiz: {
                question: "Which command counts the number of lines, words, and characters in a file?",
                options: ["nl", "wc", "count", "stat"],
                answer: 1
            }
        },
        {
            title: "Searching with Grep (grep, egrep, fgrep)",
            content: `
                <h1>Mastering Grep</h1>
                <p><code>grep</code> (Global Regular Expression Print) is the gold standard for searching text.</p>
                <ul>
                    <li><strong>grep:</strong> Basic searching.</li>
                    <li><strong>egrep:</strong> Extended grep (supports more complex regex).</li>
                    <li><strong>fgrep:</strong> Fixed grep (ignores special regex characters, very fast).</li>
                </ul>
                <div class="code-block">
                    <pre>$ grep "root" /etc/passwd            # Find root user
$ grep -i "linux" readme.txt         # Case-insensitive search
$ grep -r "TODO" ./src               # Recursive search in folder
$ grep -v "debug" app.log            # Invert match (exclude lines)</pre>
                </div>
            `,
            exercises: ["Search for your username in <code>/etc/passwd</code>", "List all lines in a log file that DO NOT contain 'error' using <code>-v</code>."],
            quiz: {
                question: "Which flag makes grep case-insensitive?",
                options: ["-v", "-r", "-i", "-c"],
                answer: 2
            }
        }
    ],
    "Advanced Text-Fu": [
        {
            title: "Regular Expressions (RegEx)",
            content: `
                <h1>Regular Expressions</h1>
                <p>RegEx is a powerful language for pattern matching in text. Many Linux tools like <code>grep</code>, <code>sed</code>, and <code>awk</code> use it.</p>
                <h2>Basic Syntax</h2>
                <ul>
                    <li><code>.</code> : Matches any single character.</li>
                    <li><code>^</code> : Matches the start of a line.</li>
                    <li><code>$</code> : Matches the end of a line.</li>
                    <li><code>[abc]</code> : Matches any character in the set (a, b, or c).</li>
                    <li><code>*</code> : Matches 0 or more occurrences of the preceding element.</li>
                </ul>
                <div class="code-block">
                    <pre>$ grep "^root" /etc/passwd       # Starts with root
$ grep "bash$" /etc/passwd       # Ends with bash
$ grep "o.o" words.txt           # Matches 'oto', 'o-o', etc.</pre>
                </div>
            `,
            exercises: ["Research 'Extended Regular Expressions' (ERE) and find the difference between <code>grep</code> and <code>egrep</code>."],
            quiz: {
                question: "Which character matches the start of a line in RegEx?",
                options: ["$", "*", "^", "."],
                answer: 2
            }
        },
        {
            title: "Vim Essentials",
            content: `
                <h1>The Vim Editor</h1>
                <p>Vim is a "modal" editor. It is extremely powerful but has a steep learning curve.</p>
                <h2>The Three Modes</h2>
                <ul>
                    <li><strong>Normal Mode (Default):</strong> For navigation and commands. Press <code>Esc</code> to return here.</li>
                    <li><strong>Insert Mode:</strong> For typing text. Press <code>i</code> to enter.</li>
                    <li><strong>Command Mode:</strong> For saving and exiting. Type <code>:</code>.</li>
                </ul>
                <div class="tip">Stuck in Vim? Press <strong>Esc</strong> then type <strong>:q!</strong> and Enter to quit without saving.</div>
                <h2>Navigation and Saving</h2>
                <pre>:w        # Save (write)
:q        # Quit
:wq       # Save and Quit
/pattern  # Search forward</pre>
            `,
            exercises: ["Open a file with <code>vim test.txt</code>, type 'Hello Linux', and save it."],
            quiz: {
                question: "How do you enter Insert Mode in Vim?",
                options: ["i", "a", "o", "All of the above"],
                answer: 3
            }
        },
        {
            title: "Sed and Awk Basics",
            content: `
                <h1>Stream Editing (sed & awk)</h1>
                <p>These tools allow you to modify text data without ever opening an editor.</p>
                <h2>sed (Stream Editor)</h2>
                <p>Primarily used for substitution (find and replace).</p>
                <div class="code-block">
                    <pre>$ sed 's/apple/orange/' file.txt     # Replace first apple
$ sed 's/apple/orange/g' file.txt    # Replace ALL apples</pre>
                </div>
                <h2>awk (Pattern Scanning)</h2>
                <p>Used for processing rows and columns (like a command-line spreadsheet).</p>
                <pre>$ awk -F: '{ print $1 }' /etc/passwd # Print usernames (first column)</pre>
            `,
            exercises: ["Use <code>sed</code> to capitalize all occurrences of 'linux' in a file.", "Use <code>awk</code> to print the 3rd column of <code>ls -l</code> output."],
            quiz: {
                question: "Which tool is better suited for processing column-based data?",
                options: ["sed", "cat", "awk", "touch"],
                answer: 2
            }
        }
    ],
    "User Management": [
        {
            title: "Users and Groups",
            content: `
                <h1>Users and Groups</h1>
                <p>Linux is a multi-user system. Every process and file is owned by a specific user and belongs to a group.</p>
                <h2>Core Concepts</h2>
                <ul>
                    <li><strong>UID (User ID):</strong> A unique number for each user. Root is always 0.</li>
                    <li><strong>GID (Group ID):</strong> A unique number for each group.</li>
                    <li><strong>Groups:</strong> Used to manage permissions for collections of users.</li>
                </ul>
                <h2>Critical Files</h2>
                <ul>
                    <li><code>/etc/passwd</code>: User account information.</li>
                    <li><code>/etc/shadow</code>: Secure user password information (encrypted).</li>
                    <li><code>/etc/group</code>: Group information.</li>
                </ul>
                <div class="tip">Type <code>id</code> to see your current UID, GID, and groups.</div>
            `,
            exercises: ["View the first few lines of <code>/etc/passwd</code> to see how users are defined."],
            quiz: {
                question: "Which file stores encrypted user passwords?",
                options: ["/etc/passwd", "/etc/group", "/etc/shadow", "/etc/config"],
                answer: 2
            }
        },
        {
            title: "Root and Sudo",
            content: `
                <h1>The Power of Root</h1>
                <p>The <strong>root</strong> user is the system administrator with absolute power. To prevent accidental damage, we use <strong>sudo</strong>.</p>
                <ul>
                    <li><strong>root:</strong> The superuser (UID 0).</li>
                    <li><strong>sudo:</strong> "SuperUser DO" - allows a regular user to run commands as root.</li>
                </ul>
                <div class="code-block">
                    <pre>$ sudo apt update     # Run as root
$ sudo -i             # Switch to a root shell (be careful!)</pre>
                </div>
            `,
            exercises: ["Check if you are in the <code>sudo</code> or <code>wheel</code> group using <code>groups</code>."],
            quiz: {
                question: "What is the UID of the root user?",
                options: ["1000", "1", "0", "100"],
                answer: 2
            }
        },
        {
            title: "Permissions and Ownership",
            content: `
                <h1>File Permissions</h1>
                <p>Every file has a 10-character permission string (e.g., <code>-rwxr-xr--</code>).</p>
                <h2>The String Breakdown</h2>
                <ul>
                    <li><code>-</code> (1st char): File type (d = directory, l = link).</li>
                    <li><code>rwx</code> (next 3): Owner permissions.</li>
                    <li><code>r-x</code> (next 3): Group permissions.</li>
                    <li><code>r--</code> (final 3): Others permissions.</li>
                </ul>
                <pre>$ chmod 755 file.sh    # Change permissions (rwxr-xr-x)
$ chown user:group file.txt # Change ownership</pre>
            `,
            exercises: ["Create a script, try to run it, then use <code>chmod +x</code> to make it executable."],
            quiz: {
                question: "What does the 'x' permission mean for a file?",
                options: ["Exit", "Execute", "Exclude", "Extra"],
                answer: 1
            }
        }
    ],
    "Processes & Jobs": [
        {
            title: "Monitoring Processes",
            content: `
                <h1>Managing Processes</h1>
                <p>A process is an instance of a running program. Tracking them is essential for system health.</p>
                <ul>
                    <li><strong>ps:</strong> Snapshot of current processes.</li>
                    <li><strong>top:</strong> Real-time dynamic view of processes.</li>
                    <li><strong>htop:</strong> An interactive, colorful version of top (highly recommended).</li>
                </ul>
                <div class="code-block">
                    <pre>$ ps aux           # List every process on the system
$ ps -u [username] # Processes for a specific user</pre>
                </div>
            `,
            exercises: ["Run <code>top</code> and identify which process is using the most CPU."],
            quiz: {
                question: "Which command provides a real-time, interactive view of system processes?",
                options: ["ps", "top", "ls", "grep"],
                answer: 1
            }
        },
        {
            title: "Signals and Termination",
            content: `
                <h1>Killing Processes</h1>
                <p>Sometimes processes get stuck or need to be stopped. We send <strong>Signals</strong> to tell them what to do.</p>
                <ul>
                    <li><strong>SIGTERM (15):</strong> Polite request to stop (default).</li>
                    <li><strong>SIGKILL (9):</strong> Forced, immediate termination (dangerous, no cleanup).</li>
                    <li><strong>SIGHUP (1):</strong> Hangup (often reloads configuration).</li>
                </ul>
                <pre>$ kill [PID]       # Send SIGTERM to Process ID
$ kill -9 [PID]    # Force kill
$ pkill [name]     # Kill by process name</pre>
            `,
            exercises: ["Learn how to find a PID using <code>pgrep</code> and then use <code>kill</code>."],
            quiz: {
                question: "Which signal number is used for a forced 'SIGKILL'?",
                options: ["1", "15", "9", "0"],
                answer: 2
            }
        }
    ],
    "Software Management": [
        { title: "Software Repositories", content: "<h1>Repos</h1><p>How Linux distributes software.</p>" },
        { title: "Package Managers", content: "<h1>Tools</h1><p>Usage of apt, yum, and dnf.</p>" },
        { title: "Archives & Source", content: "<h1>Compiling</h1><p>Tarballs and compiling from source.</p>" }
    ],
    "Devices & Hardware": [
        { title: "Device Files", content: "<h1>/dev</h1><p>Understanding block and character devices.</p>" },
        { title: "Hardware Discovery", content: "<h1>Discovery</h1><p>Using lsusb and lspci.</p>" },
        { title: "Mounting Storage", content: "<h1>Mount</h1><p>Attaching external drives.</p>" }
    ],
    "Filesystem & Storage": [
        { title: "Filesystem Hierarchy", content: "<h1>FHS</h1><p>The Linux directory structure.</p>" },
        { title: "Disk Partitioning", content: "<h1>Partitioning</h1><p>Fdisk, parted, and filesystems.</p>" },
        { title: "Mounting & fstab", content: "<h1>Persistence</h1><p>Configuring /etc/fstab.</p>" }
    ],
    "Boot & Kernel": [
        { title: "The Boot Process", content: "<h1>Boot</h1><p>From BIOS to Login prompt.</p>" },
        { title: "Intit Systems", content: "<h1>Systemd</h1><p>Managing services and targets.</p>" },
        { title: "Kernel Modules", content: "<h1>Modules</h1><p>Loading and unloading drivers.</p>" }
    ],
    "System Administration": [
        { title: "Automated Tasks", content: "<h1>Cron</h1><p>Scheduling jobs with cron and anacron.</p>" },
        { title: "System Logging", content: "<h1>Logs</h1><p>Managing /var/log and journald.</p>" }
    ],
    "Networking": [
        { title: "Networking Basics", content: "<h1>TCP/IP</h1><p>IP addresses and subnetting.</p>" },
        { title: "Network Tools", content: "<h1>Tools</h1><p>Ping, traceroute, and netstat.</p>" },
        { title: "SSH & Remote Access", content: "<h1>SSH</h1><p>Secure remote management.</p>" }
    ],
    "Security": [
        { title: "User Security", content: "<h1>Auth</h1><p>Password policies and authentication.</p>" },
        { title: "System Security", content: "<h1>Hardening</h1><p>SELinux and AppArmor basics.</p>" }
    ],
    "Scripting & Automation": [
        { title: "Bash Scripting", content: "<h1>Scripting</h1><p>Variables, loops, and logic.</p>" }
    ],
    "Virtualization": [
        { title: "Containers", content: "<h1>Docker</h1><p>Introduction to containerization.</p>" }
    ],
    "Monitoring & Troubleshooting": [
        { title: "Troubleshooting", content: "<h1>Diagnostics</h1><p>Analyzing system health.</p>" }
    ]
};