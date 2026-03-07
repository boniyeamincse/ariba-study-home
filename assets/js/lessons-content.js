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
            title: "stdout (Standard Out)",
            content: `
                <h1>stdout (Standard Out)</h1>
                <p>Welcome to Text-Fu! In Linux, everything is a file. When a command runs successfully and produces output, it sends that text to a special stream called <strong>Standard Output (stdout)</strong>. By default, stdout is connected to your terminal screen.</p>
                <h2>Redirecting stdout (>)</h2>
                <p>You can capture stdout and send it into a file instead of the screen using the <code>></code> (overwrite) or <code>>></code> (append) operators.</p>
                <div class="code-block">
                    <pre>$ echo "Hello, Linux!" > greeting.txt    # Creates or overwrites the file
$ echo "Welcome back." >> greeting.txt   # Appends to the end of the file
$ ls -l > files_list.txt                 # Saves the directory listing to a file</pre>
                </div>
                <div class="note"><strong>File Descriptor:</strong> stdout is formally known as file descriptor <code>1</code>. Typing <code>1></code> is exactly the same as typing <code>></code>.</div>
            `,
            exercises: ["Run <code>echo 'My first redirect' > test.txt</code>, then use <code>cat test.txt</code> to view it."],
            quiz: {
                question: "Which operator is used to append standard output to the end of an existing file without overwriting it?",
                options: [">", ">>", "<", "|"],
                answer: 1
            }
        },
        {
            title: "stdin (Standard In)",
            content: `
                <h1>stdin (Standard In)</h1>
                <p><strong>Standard Input (stdin)</strong> is the stream where commands expect to receive their input data. By default, stdin is connected to your keyboard.</p>
                <h2>Redirecting stdin (<)</h2>
                <p>You can force a command to read from a file instead of waiting for you to type on the keyboard using the <code><</code> operator.</p>
                <div class="code-block">
                    <pre>$ sort < unsorted_names.txt        # Sends the file contents into the 'sort' command
$ wc -l < script.sh                  # Counts the lines in the script</pre>
                </div>
                <div class="tip"><strong>File Descriptor:</strong> stdin is formally known as file descriptor <code>0</code>.</div>
            `,
            exercises: ["Use the cat command to read a file by redirecting stdin: <code>cat < /etc/hostname</code>"],
            quiz: {
                question: "Which file descriptor number represents Standard Input (stdin)?",
                options: ["0", "1", "2", "3"],
                answer: 0
            }
        },
        {
            title: "stderr (Standard Error)",
            content: `
                <h1>stderr (Standard Error)</h1>
                <p>When a command fails or produces a warning, it does <strong>not</strong> send that text to stdout. Instead, it uses a separate stream called <strong>Standard Error (stderr)</strong>. This ensures that error messages don't get mixed up with actual data.</p>
                <h2>Redirecting stderr (2>)</h2>
                <p>Because stderr is file descriptor <code>2</code>, you redirect it using <code>2></code>.</p>
                <div class="code-block">
                    <pre>$ ls /nonexistent_folder 2> error.log    # The error message goes to the file, not the screen
$ find / -name "secret" 2> /dev/null     # Throw away all "Permission denied" errors!</pre>
                </div>
                <h2>Redirecting Both</h2>
                <p>Sometimes you want to capture both successful output and errors into the same file.</p>
                <div class="code-block">
                    <pre>$ command > all_output.log 2>&1    # The classic way (redirect 2 into 1)
$ command &> all_output.log        # The modern, shorter way</pre>
                </div>
            `,
            exercises: ["Try running <code>ls /root 2> oops.txt</code> (as a normal user), then use <code>cat oops.txt</code> to see the captured 'Permission denied' error."],
            quiz: {
                question: "Which command safely discards all error messages (stderr) without cluttering the screen?",
                options: ["command > /dev/null", "command 2> /dev/null", "command < /dev/null", "command | /dev/null"],
                answer: 1
            }
        },
        {
            title: "pipe and tee",
            content: `
                <h1>Piping Commands Together</h1>
                <p>The pipe <code>|</code> takes the <strong>stdout</strong> of the command on the left, and plugs it directly into the <strong>stdin</strong> of the command on the right.</p>
                <div class="code-block">
                    <pre>$ ls -l /etc | less                # Pipe a massive list into a pager so you can scroll
$ ls /bin | grep "zip"             # Pipe the list into a filter that only shows "zip"</pre>
                </div>
                <h2>The 'tee' Command</h2>
                <p>Named after a T-shaped plumber's pipe, <code>tee</code> splits the stream. It saves the input to a file AND simultaneously passes it straight through to stdout.</p>
                <div class="code-block">
                    <pre>$ echo "Server started" | tee server.log      # Writes to file AND prints to screen
$ ls -l | tee contents.txt | grep "drwx"      # Save full list, but only screen-print directories</pre>
                </div>
            `,
            exercises: ["Run <code>ls -l /etc | tee my_etc.txt | head -n 5</code>. You will see the first 5 lines on screen, but if you check the file, it contains everything!"],
            quiz: {
                question: "What is the primary function of the pipe `|` character?",
                options: ["It saves output to a file.", "It connects the stdout of one command to the stdin of another.", "It runs two commands simultaneously in the background.", "It redirects stderr to stdout."],
                answer: 1
            }
        },
        {
            title: "env (Environment)",
            content: `
                <h1>Printing and Modifying Environment</h1>
                <p>The <code>env</code> command is used to print out a list of all your current environment variables (like PATH, USER, HOME), or to run a program in a modified environment without permanently changing your actual shell configuration.</p>
                <h2>Viewing Variables</h2>
                <div class="code-block">
                    <pre>$ env                     # Print all environment variables
$ env | grep USER         # Quickly find your USER variable</pre>
                </div>
                <h2>Running with Modified Variables</h2>
                <div class="code-block">
                    <pre>$ env EDITOR=nano visudo  # Temporarily forces the EDITOR variable to 'nano' just for this command
$ env -i bash             # Start a completely empty, wiped-clean bash shell for testing</pre>
                </div>
            `,
            exercises: ["Run <code>env | less</code> to browse through all the hidden variables your Linux system uses to track your session."],
            quiz: {
                question: "What does the `env -i` flag do when executing a command?",
                options: ["Installs the environment.", "Ignores the current environment, starting with an empty one.", "Interactive mode.", "Inverts the variables."],
                answer: 1
            }
        },
        {
            title: "cut",
            content: `
                <h1>Slicing Text Columns</h1>
                <p>The <code>cut</code> command removes sections from each line of a file. It is incredibly useful for extracting specific columns from structured data like CSVs or system logs.</p>
                <h2>Extracting by Delimiter (-d) and Field (-f)</h2>
                <p>The <code>/etc/passwd</code> file uses colons <code>:</code> to separate user data.</p>
                <div class="code-block">
                    <pre>$ cut -d: -f1 /etc/passwd            # Extract field 1 (usernames) using colon as delimiter
$ cut -d: -f1,7 /etc/passwd          # Extract field 1 (username) AND field 7 (shell)
$ echo "apple,banana,cherry" | cut -d, -f2  # Returns 'banana'</pre>
                </div>
                <h2>Extracting by Character (-c)</h2>
                <div class="code-block">
                    <pre>$ echo "abcdefgh" | cut -c2-5        # Extract characters 2 through 5 (returns 'bcde')</pre>
                </div>
            `,
            exercises: ["Use <code>cut -d: -f1 /etc/passwd</code> to generate a list of every user account on your machine."],
            quiz: {
                question: "If you have a comma-separated file, which flags tell `cut` to use commas and extract the 3rd column?",
                options: ["-c 3 -d ,", "-d , -f 3", "-s , -c 3", "-w , -f 3"],
                answer: 1
            }
        },
        {
            title: "paste",
            content: `
                <h1>Merging Lines of Files</h1>
                <p>While <code>cat</code> stacks files vertically (one after another), the <code>paste</code> command merges files <strong>horizontally</strong>, joining corresponding lines side-by-side.</p>
                <h2>Basic Usage</h2>
                <p>Imagine <code>names.txt</code> has "Alice" and "Bob", and <code>ages.txt</code> has "25" and "30".</p>
                <div class="code-block">
                    <pre>$ paste names.txt ages.txt 
Alice   25
Bob     30</pre>
                </div>
                <h2>Custom Delimiters</h2>
                <p>By default, <code>paste</code> uses a Tab character to separate the joined lines. You can change this using <code>-d</code>.</p>
                <div class="code-block">
                    <pre>$ paste -d "=" names.txt ages.txt
Alice=25
Bob=30</pre>
                </div>
            `,
            exercises: ["Create two small files using `echo` and `>`. Then use `paste` to merge them side-by-side on your screen."],
            quiz: {
                question: "What character does `paste` use by default to separate the merged lines?",
                options: ["Space", "Comma", "Tab", "Newline"],
                answer: 2
            }
        },
        {
            title: "head",
            content: `
                <h1>Viewing the Top of a File</h1>
                <p>The <code>head</code> command outputs the first part of a file. By default, it prints exactly the first 10 lines.</p>
                <h2>Basic Usage</h2>
                <div class="code-block">
                    <pre>$ head /var/log/syslog              # View the first 10 lines
$ head -n 5 /etc/passwd             # View exactly the first 5 lines</pre>
                </div>
                <h2>Extracting Bytes</h2>
                <p>Instead of lines, you can grab a specific number of bytes.</p>
                <div class="code-block">
                    <pre>$ head -c 20 /dev/urandom | base64  # Grab 20 random bytes for a rapid password generator</pre>
                </div>
            `,
            exercises: ["Run <code>head -n 3 /etc/os-release</code> to quickly check what flavor of Linux you are currently running."],
            quiz: {
                question: "By default, how many lines does the `head` command output if no `-n` flag is provided?",
                options: ["5", "10", "20", "50"],
                answer: 1
            }
        },
        {
            title: "tail",
            content: `
                <h1>Viewing the Bottom of a File</h1>
                <p>The <code>tail</code> command outputs the last part of a file. Like <code>head</code>, it defaults to 10 lines.</p>
                <h2>Basic Usage</h2>
                <div class="code-block">
                    <pre>$ tail /var/log/syslog              # View the last 10 lines (most recent logs)
$ tail -n 20 /var/log/auth.log      # View the last 20 lines</pre>
                </div>
                <h2>Following Live Logs (-f)</h2>
                <p>The most important feature of <code>tail</code> is the "follow" flag. It keeps the file open and instantly prints new lines to your screen the moment they are written by the system.</p>
                <div class="code-block">
                    <pre>$ tail -f /var/log/syslog           # Watch the system logs actively scroll in real-time
# Press Ctrl+C to exit follow mode!</pre>
                </div>
            `,
            exercises: ["Open a terminal and run <code>tail -f /var/log/syslog</code>. Open a second terminal and do something (like restart a service or plug in a USB) to watch the live output."],
            quiz: {
                question: "Which flag allows `tail` to continuously monitor a file and print new text as it is added?",
                options: ["-c", "-n", "-f", "-live"],
                answer: 2
            }
        },
        {
            title: "expand and unexpand",
            content: `
                <h1>Converting Tabs and Spaces</h1>
                <p>Tabs vs. Spaces is a classic programmer debate. The <code>expand</code> and <code>unexpand</code> tools settle the dispute by seamlessly converting between the two.</p>
                <h2>expand (Tabs to Spaces)</h2>
                <p>Converts all Tab characters into Spaces.</p>
                <div class="code-block">
                    <pre>$ expand code.py > fixed_code.py    # Replaces tabs with spaces (default is 8 spaces per tab)
$ expand -t 4 code.py               # Replaces each tab with exactly 4 spaces</pre>
                </div>
                <h2>unexpand (Spaces to Tabs)</h2>
                <p>Converts Spaces back into Tab characters.</p>
                <div class="code-block">
                    <pre>$ unexpand -a spaces.txt > tabs.txt # The -a flag forces it to convert ALL spaces, not just leading indentation</pre>
                </div>
            `,
            exercises: ["Create a file with deep tab indentation, then run <code>expand -t 2 file.txt</code> to compress the visual width."],
            quiz: {
                question: "If you want `expand` to replace every tab character with exactly 4 spaces, which option do you use?",
                options: ["-s 4", "-t 4", "-n 4", "--spaces=4"],
                answer: 1
            }
        },
        {
            title: "join and split",
            content: `
                <h1>Advanced File Data Management</h1>
                <h2>join (Relational Data)</h2>
                <p><code>join</code> works exactly like a SQL JOIN in an database. It merges the lines of two files that share a common field (column). <strong>Important: Both files must be sorted first!</strong></p>
                <div class="code-block">
                    <pre># file1 has: "1 Alice", file2 has "1 HR"
$ join file1.txt file2.txt          # Output: "1 Alice HR"</pre>
                </div>
                <h2>split (Breaking Large Files)</h2>
                <p>If you have a massive 10GB log file and need to email it or open it in a basic text editor, <code>split</code> breaks it into manageable chunks.</p>
                <div class="code-block">
                    <pre>$ split -l 1000 biglog.txt chunk_   # Splits into files of 1000 lines each (chunk_aa, chunk_ab...)
$ split -b 50M bigvideo.mp4 vpart_  # Splits a binary file into exactly 50 Megabyte pieces
$ cat vpart_* > bigvideo.mp4        # How to easily glue them back together!</pre>
                </div>
            `,
            exercises: ["Run <code>split -b 1M /var/log/syslog test_</code> and then <code>ls -l</code> to see the chopped up 1 Megabyte files."],
            quiz: {
                question: "What is a strict requirement for the two files before you can successfully use the `join` command on them?",
                options: ["They must have the same file extension.", "They must be exactly the same size.", "They must be sorted based on the join field.", "They must contain only numbers."],
                answer: 2
            }
        },
        {
            title: "sort",
            content: `
                <h1>Ordering Text</h1>
                <p>The <code>sort</code> command arranges lines of text sequentially. This is typically required before using commands like <code>uniq</code> or <code>join</code>.</p>
                <h2>Basic Sorting</h2>
                <div class="code-block">
                    <pre>$ sort fruits.txt                   # Sorted alphabetically (A to Z)
$ sort -r fruits.txt                # Reverse sort (Z to A)</pre>
                </div>
                <h2>Numeric Sorting</h2>
                <p>Alphabetical sort thinks "10" comes before "2". To sort mathematically, you must tell it to treat the text as numbers.</p>
                <div class="code-block">
                    <pre>$ sort -n prices.txt                # Sort numerically (1, 2, 10, 20)
$ sort -h sizes.txt                 # Human-readable numeric sort (handles 1K, 5M, 2G sizes!)</pre>
                </div>
                <h2>Sorting by Column</h2>
                <div class="code-block">
                    <pre>$ ls -l | sort -k 5 -n              # Sort directory listing by the 5th column (file size) numerically</pre>
                </div>
            `,
            exercises: ["Run <code>ls -lh /etc | sort -k 5 -h</code> to sort the files in /etc by their human-readable size."],
            quiz: {
                question: "Which flag allows `sort` to correctly order sizes like 500M and 2G?",
                options: ["-s", "-n", "-h", "-c"],
                answer: 2
            }
        },
        {
            title: "tr (Translate)",
            content: `
                <h1>Character Translation</h1>
                <p>The <code>tr</code> command translates, squashes, or deletes characters. It reads <strong>strictly from stdin</strong>, so it is almost universally used inside a pipe <code>|</code>.</p>
                <h2>Converting Case</h2>
                <div class="code-block">
                    <pre>$ echo "hello world" | tr 'a-z' 'A-Z'   # Output: HELLO WORLD</pre>
                </div>
                <h2>Deleting Characters (-d)</h2>
                <div class="code-block">
                    <pre>$ echo "Phone: 555-1234" | tr -d '-'    # Removes all hyphens</pre>
                </div>
                <h2>Squeezing Repeats (-s)</h2>
                <p>Perfect for cleaning up messy formatting with too many spaces.</p>
                <div class="code-block">
                    <pre>$ echo "Name       Age      City" | tr -s ' '  # Squeezes multiple spaces down to a single space</pre>
                </div>
            `,
            exercises: ["Use <code>cat /etc/hostname | tr 'a-z' 'A-Z'</code> to print your computer's name in all uppercase."],
            quiz: {
                question: "Why does the command `tr 'a-z' 'A-Z' file.txt` fail to work?",
                options: ["tr only works on numbers.", "tr does not accept file names as arguments; it strictly requires data from stdin.", "The syntax for uppercase is wrong.", "You need root privileges."],
                answer: 1
            }
        },
        {
            title: "uniq (Unique)",
            content: `
                <h1>Filtering Duplicate Lines</h1>
                <p>The <code>uniq</code> command filters out adjacent duplicate lines. <strong>Crucial concept: It only detects duplicates if they are right next to each other!</strong> This is why you almost always pipe data through <code>sort</code> first.</p>
                <h2>Finding Uniques</h2>
                <div class="code-block">
                    <pre>$ sort names.txt | uniq             # The standard way to get a list of unique names</pre>
                </div>
                <h2>Counting Occurrences (-c)</h2>
                <p>One of the most useful data analysis pipelines in all of Linux:</p>
                <div class="code-block">
                    <pre>$ sort access.log | uniq -c         # Groups the text and prints a count next to each unique line
$ sort access.log | uniq -c | sort -nr # Count occurrences, then sort highest-to-lowest (Top 10 list!)</pre>
                </div>
                <h2>Showing Only Duplicates (-d)</h2>
                <div class="code-block">
                    <pre>$ sort emails.txt | uniq -d         # Only print emails that appeared more than once</pre>
                </div>
            `,
            exercises: ["Create a file with some repeated words on different lines. Run `uniq` on it without sorting first to see it fail, then run `sort file.txt | uniq` to see it succeed."],
            quiz: {
                question: "To generate a 'Top 10' frequency list of items in a file, which sequence of commands is required?",
                options: ["uniq file.txt | sort -c", "sort file.txt | uniq -c | sort -n", "count file.txt | sort | head 10", "grep -c file.txt"],
                answer: 1
            }
        },
        {
            title: "wc and nl",
            content: `
                <h1>Counting and Numbering</h1>
                <h2>wc (Word Count)</h2>
                <p>Despite the name, <code>wc</code> counts lines, words, and characters.</p>
                <div class="code-block">
                    <pre>$ wc /etc/passwd                    # Outputs: Lines Words Characters Filename
$ wc -l /etc/passwd                 # Only output the Line count
$ ls -1 /etc | wc -l                # Amazing trick: Count exactly how many files are in a directory!</pre>
                </div>
                <h2>nl (Number Lines)</h2>
                <p>Sometimes you need to add reference line numbers to script output or configuration files.</p>
                <div class="code-block">
                    <pre>$ nl code.py                        # Prints the file with numbered lines
$ cat -n code.py                    # (Alternative using cat. Very similar result!)</pre>
                </div>
            `,
            exercises: ["Run <code>ls -1 /usr/bin | wc -l</code> to find out exactly how many command-line binaries your system has installed!"],
            quiz: {
                question: "If you want to quickly count how many files exist in the current directory, which pipeline works perfectly?",
                options: ["ls -l | num", "ls -1 | wc -l", "count *", "find . | nl"],
                answer: 1
            }
        },
        {
            title: "grep",
            content: `
                <h1>The Ultimate Search Tool (grep)</h1>
                <p><code>grep</code> (Global Regular Expression Print) searches text for patterns and returns the matching lines. It is arguably the most frequently used text command in Linux.</p>
                <h2>Core Grep Commands</h2>
                <div class="code-block">
                    <pre>$ grep "root" /etc/passwd           # Search for the exact word 'root'
$ ls -l | grep "drwx"               # Pipe output into grep to filter for directories
$ grep -i "failed" /var/log/auth.log # Case-insensitive (finds FAILED, Failed, failed)
$ grep -v "debug" app.log           # Invert match: Print all lines that DO NOT contain 'debug'</pre>
                </div>
                <h2>Investigation Tools</h2>
                <div class="code-block">
                    <pre>$ grep -r "TODO" ./src/             # Recursive: Search through every file in a folder!
$ grep -n "function" file.js        # Print the Line Number alongside the matches
$ grep -C 2 "error" server.log      # Context: Print the match AND 2 lines above/below it</pre>
                </div>
            `,
            exercises: ["Run <code>grep -r 'nameserver' /etc/</code> to find exactly which file configures your DNS servers."],
            quiz: {
                question: "Which grep flag is used to 'Invert' the match, returning only lines that do NOT contain the pattern?",
                options: ["-i", "-r", "-v", "-n"],
                answer: 2
            }
        }
    ],
    "Advanced Text-Fu": [
        {
            title: "regex (Regular Expressions)",
            content: `
                <h1>Regular Expressions (regex)</h1>
                <p>Regular expressions are powerful search patterns used across Linux tools like <code>grep</code>, <code>sed</code>, and <code>awk</code>.</p>
                <h2>Core Syntax</h2>
                <ul>
                    <li><code>.</code> : Matches any single character.</li>
                    <li><code>^</code> : Matches the start of a line.</li>
                    <li><code>$</code> : Matches the end of a line.</li>
                    <li><code>[abc]</code> : Matches character a, b, or c.</li>
                    <li><code>*</code> : Matches zero or more of the preceding character.</li>
                </ul>
                <div class="code-block">
                    <pre>$ grep "^root" /etc/passwd       # Find lines starting with 'root'
$ grep "bash$" /etc/passwd       # Find lines ending with 'bash'</pre>
                </div>
            `,
            exercises: ["Research and try matching a valid IP address using grep and regex on a log file."],
            quiz: {
                question: "Which regex character ties the match to the end of a line?",
                options: ["*", "^", "$", "."],
                answer: 2
            }
        },
        {
            title: "Text Editors",
            content: `
                <h1>Command Line Text Editors</h1>
                <p>When connecting to servers via SSH, you won't have a graphical interface like VS Code. You must master terminal-based text editors.</p>
                <h2>The Big Two</h2>
                <ul>
                    <li><strong>Vim:</strong> Fast, ubiquitous, and modal. Built into almost every Linux system by default.</li>
                    <li><strong>Emacs:</strong> Extremely powerful, extensible, macro-driven editor that some joke is an entire operating system.</li>
                </ul>
                <p>We also have <code>nano</code> for quick, simple edits without a learning curve.</p>
            `,
            exercises: ["Run <code>nano test.txt</code>, type some text, and follow the bottom menu (Ctrl+O to save, Ctrl+X to exit)."],
            quiz: {
                question: "Which of the following describes Vim?",
                options: ["A simple, non-modal editor", "A graphical-only editor", "A fast, ubiquitous, modal terminal editor", "A spreadsheet application"],
                answer: 2
            }
        },
        {
            title: "Vim (Vi Improved)",
            content: `
                <h1>Understanding Vim Modes</h1>
                <p>Vim is a <strong>modal</strong> editor, meaning the keys on your keyboard do completely different things depending on which mode you are in.</p>
                <h2>The 3 Core Modes</h2>
                <ol>
                    <li><strong>Normal Mode:</strong> The default mode. Used for navigation, copying, pasting, and deleting. You CANNOT type regular text here.</li>
                    <li><strong>Insert Mode:</strong> Used for actually typing text.</li>
                    <li><strong>Command (Visual) Mode:</strong> Accessed by typing <code>:</code> from Normal mode. Used to save, exit, or configure the editor.</li>
                </ol>
                <div class="tip"><strong>The Golden Rule:</strong> If you are ever confused in Vim, mash the <strong>Esc</strong> key several times to return safely to Normal Mode.</div>
            `,
            exercises: ["Open Vim by typing <code>vim</code>. Press <code>i</code> to enter Insert Mode. Press <code>Esc</code> to return to Normal Mode."],
            quiz: {
                question: "What is the default mode Vim starts in, where keys act as commands rather than typing text?",
                options: ["Insert Mode", "Command Mode", "Visual Mode", "Normal Mode"],
                answer: 3
            }
        },
        {
            title: "Vim Search Patterns",
            content: `
                <h1>Searching Inside Vim</h1>
                <p>Searching in Vim is blazing fast. You perform searches from <strong>Normal Mode</strong>.</p>
                <h2>Search Commands</h2>
                <ul>
                    <li><code>/pattern</code> : Search FORWARD through the document for 'pattern'.</li>
                    <li><code>?pattern</code> : Search BACKWARD through the document.</li>
                    <li><code>n</code> : Jump to the NEXT match in the same direction.</li>
                    <li><code>N</code> : Jump to the PREVIOUS match (reverse direction).</li>
                </ul>
                <div class="code-block">
                    <pre>/error        # Type this in normal mode and press Enter to find the word 'error'
n             # Press 'n' to go to the second 'error' occurrence</pre>
                </div>
            `,
            exercises: ["Open a large text file in Vim, type <code>/the</code>, press Enter, and cycle through matches using <code>n</code> and <code>N</code>."],
            quiz: {
                question: "While in Normal mode, which key initiates a forward search?",
                options: ["Ctrl+F", "/", "?", "s"],
                answer: 1
            }
        },
        {
            title: "Vim Navigation",
            content: `
                <h1>Moving the Cursor in Vim</h1>
                <p>In Normal mode, true Vim masters don't use the arrow keys. They keep their hands on the home row!</p>
                <h2>The Holy Movement Keys</h2>
                <ul>
                    <li><code>h</code> : Move Left</li>
                    <li><code>j</code> : Move Down</li>
                    <li><code>k</code> : Move Up</li>
                    <li><code>l</code> : Move Right</li>
                </ul>
                <h2>Advanced Jumping</h2>
                <ul>
                    <li><code>w</code> : Jump forward one word.</li>
                    <li><code>b</code> : Jump backward one word.</li>
                    <li><code>0</code> (zero) : Jump to the start of the line.</li>
                    <li><code>$</code> : Jump to the end of the line.</li>
                    <li><code>gg</code> : Jump to the very top of the file.</li>
                    <li><code>G</code> : Jump to the very bottom of the file.</li>
                </ul>
            `,
            exercises: ["Open Vim and force yourself to navigate a document using only h, j, k, l, w, and b. Do not touch the arrow keys!"],
            quiz: {
                question: "Which key combination jumps instantly to the very bottom of the file?",
                options: ["gg", "$", "G", "End"],
                answer: 2
            }
        },
        {
            title: "Vim Inserting and Appending Text",
            content: `
                <h1>Entering Insert Mode</h1>
                <p>To actually type words, you must transition from Normal to Insert mode. Vim gives you precise control over exactly <em>where</em> you start typing.</p>
                <h2>Insert vs. Append</h2>
                <ul>
                    <li><code>i</code> (Insert): Start typing exactly <em>before</em> the cursor block.</li>
                    <li><code>I</code> (Shift+i): Start typing at the very <em>beginning</em> of the current line.</li>
                    <li><code>a</code> (Append): Start typing exactly <em>after</em> the cursor block.</li>
                    <li><code>A</code> (Shift+a): Start typing at the very <em>end</em> of the current line.</li>
                    <li><code>o</code> : Open a brand new line <em>below</em> the current line and enter Insert mode.</li>
                    <li><code>O</code> (Shift+o): Open a brand new line <em>above</em> the current line.</li>
                </ul>
                <p>When you are done typing, always press <strong>Esc</strong> to return to Normal mode.</p>
            `,
            exercises: ["In Normal mode, move the cursor to the middle of a line. Press <code>A</code> to instantly jump to the end of the line and begin typing."],
            quiz: {
                question: "Which key instantly creates a new empty line BELOW your cursor and enters Insert mode?",
                options: ["i", "a", "o", "O"],
                answer: 2
            }
        },
        {
            title: "Vim Editing",
            content: `
                <h1>Deleting, Yanking, and Pasting</h1>
                <p>Vim treats editing like a language. You combine verbs (like delete) with nouns (like word or line).</p>
                <h2>Core Editing Verbs (Normal Mode)</h2>
                <ul>
                    <li><code>x</code> : Delete the single character under the cursor.</li>
                    <li><code>dw</code> : Delete Word (deletes from cursor to the end of the word).</li>
                    <li><code>dd</code> : Delete (Cut) the entire current line.</li>
                    <li><code>yy</code> : Yank (Copy) the entire current line.</li>
                    <li><code>p</code> : Paste the cut/copied text below the cursor.</li>
                    <li><code>u</code> : Undo your last change.</li>
                    <li><code>Ctrl + r</code> : Redo the undone change.</li>
                </ul>
                <div class="tip"><strong>Multipliers:</strong> You can put numbers in front of verbs! Typing <code>5dd</code> instantly deletes 5 lines!</div>
            `,
            exercises: ["Delete 3 lines at once by typing <code>3dd</code> in Normal mode, then press <code>u</code> to undo it."],
            quiz: {
                question: "What is the Normal mode command to copy (yank) 4 complete lines of text at once?",
                options: ["copy 4", "4yy", "y4y", "Ctrl+C 4"],
                answer: 1
            }
        },
        {
            title: "Vim Saving and Exiting",
            content: `
                <h1>The Most Important Commands</h1>
                <p>The number one question asked by new Linux users is "How do I exit Vim?" You must be in Normal mode (press Esc!), then type a colon <code>:</code> to enter Command mode at the bottom of the screen.</p>
                <h2>The Exit Commands</h2>
                <ul>
                    <li><code>:w</code> : Write (Save) the file, but stay inside Vim.</li>
                    <li><code>:q</code> : Quit Vim. (This will throw an error if you have unsaved changes).</li>
                    <li><code>:wq</code> : Write (Save) the file and Quit simultaneously.</li>
                    <li><code>:q!</code> : Quit FORCEFULLY. Discard any unsaved changes without asking!</li>
                </ul>
                <div class="code-block">
                    <pre>Esc         # 1. Ensure you are in Normal mode
:wq         # 2. Type colon, w, q
Enter       # 3. Press Enter to execute</pre>
                </div>
            `,
            exercises: ["Open a file, type some garbage text, and then exit by forcing it to quit without saving using <code>:q!</code>."],
            quiz: {
                question: "You made a horrible mistake editing a file and want to exit Vim immediately without saving any of your messy changes. What do you type?",
                options: [":w", ":wq", ":exit", ":q!"],
                answer: 3
            }
        },
        {
            title: "Emacs",
            content: `
                <h1>Introduction to GNU Emacs</h1>
                <p>Emacs is the other titan of terminal text editors. Unlike Vim's modal editing, Emacs uses a heavily <strong>chorded</strong> system, relying on modifier keys (Ctrl and Alt/Meta) pressed simultaneously with letters.</p>
                <h2>The Modifier Keys</h2>
                <ul>
                    <li><strong>C-</strong> refers to the <code>Ctrl</code> (Control) key.</li>
                    <li><strong>M-</strong> refers to the <code>Meta</code> key (which is the <code>Alt</code> key on modern PC keyboards, or <code>Option</code> on Mac).</li>
                </ul>
                <p>So, a command written as <code>C-x</code> means "Press and hold Control, then tap x".</p>
                <div class="tip">If a command says <code>C-x C-s</code>, you hold down Control, tap x, then tap s, then release Control.</div>
            `,
            exercises: ["Open your terminal and type <code>emacs -nw</code> to start Emacs in the console without opening a new GUI window."],
            quiz: {
                question: "In Emacs documentation, what keyboard key does the prefix `M-` typically represent on a modern PC?",
                options: ["Shift", "Ctrl", "Alt", "Windows Key"],
                answer: 2
            }
        },
        {
            title: "Emacs Manipulate Files",
            content: `
                <h1>Opening and Saving Files</h1>
                <p>In Emacs, opening a file is known as "finding" a file, and saving is "saving" the buffer.</p>
                <h2>File Commands</h2>
                <ul>
                    <li><code>C-x C-f</code> (Find File): Prompts you at the bottom to type the path of the file you want to open or create.</li>
                    <li><code>C-x C-s</code> (Save): Saves the current file/buffer.</li>
                    <li><code>C-x C-w</code> (Write File): "Save As" - saves the current buffer under a new filename.</li>
                </ul>
                <div class="code-block">
                    <pre>1. Press Ctrl+x, then Ctrl+f
2. Look at the bottom prompt
3. Type /tmp/notes.txt and press Enter
4. Type your notes
5. Press Ctrl+x, then Ctrl+s to save.</pre>
                </div>
            `,
            exercises: ["Open Emacs, use <code>C-x C-f</code> to create a file called <code>hello.txt</code>, type your name, and save it using <code>C-x C-s</code>."],
            quiz: {
                question: "Which chording sequence is used to 'Find' (open) a file in Emacs?",
                options: ["C-o", "C-x C-f", "M-f", "C-f"],
                answer: 1
            }
        },
        {
            title: "Emacs Buffer Navigation",
            content: `
                <h1>Moving the Point (Cursor)</h1>
                <p>In Emacs, the cursor is formally called the "Point". You navigate using Ctrl and Meta chords.</p>
                <h2>Basic Movement</h2>
                <ul>
                    <li><code>C-f</code> (Forward): Move forward one character.</li>
                    <li><code>C-b</code> (Backward): Move backward one character.</li>
                    <li><code>C-n</code> (Next): Move down to the next line.</li>
                    <li><code>C-p</code> (Previous): Move up to the previous line.</li>
                </ul>
                <h2>Jumping</h2>
                <ul>
                    <li><code>M-f</code> (Meta-Forward): Jump forward one full word.</li>
                    <li><code>M-b</code> (Meta-Backward): Jump backward one full word.</li>
                    <li><code>C-a</code> : Jump exactly to the beginning of the line.</li>
                    <li><code>C-e</code> : Jump exactly to the end of the line.</li>
                </ul>
            `,
            exercises: ["Type a long sentence in Emacs and practice jumping word-by-word using <code>Alt+f</code> and <code>Alt+b</code>."],
            quiz: {
                question: "Which Emacs shortcut jumps the cursor to the very end of the current line?",
                options: ["C-n", "M-f", "C-e", "C-a"],
                answer: 2
            }
        },
        {
            title: "Emacs Editing",
            content: `
                <h1>Cutting, Copying, and Pasting</h1>
                <p>Emacs has its own unique terminology for the clipboard. The clipboard is called the "Kill Ring".</p>
                <h2>The Terminology</h2>
                <ul>
                    <li><strong>Killing:</strong> Deleting/Cutting text (moves it into the Kill Ring).</li>
                    <li><strong>Yanking:</strong> Pasting text (pulls it out of the Kill Ring).</li>
                </ul>
                <h2>The Commands</h2>
                <ul>
                    <li><code>C-k</code> (Kill Line): Cuts text from the cursor to the end of the line.</li>
                    <li><code>C-w</code> (Kill Region): Cuts a highlighted selection of text.</li>
                    <li><code>M-w</code> (Copy Region): Copies a highlighted selection without deleting it.</li>
                    <li><code>C-y</code> (Yank): Pastes the previously killed or copied text.</li>
                    <li><code>C-/</code> or <code>C-_</code> : Undo your last change.</li>
                </ul>
            `,
            exercises: ["Move your cursor to the middle of a line, press <code>C-k</code> to kill the rest of the line, move down, and press <code>C-y</code> to yank it back."],
            quiz: {
                question: "In Emacs terminology, what does 'Yanking' do?",
                options: ["Deletes a line", "Copies a selection", "Pastes text from the kill ring", "Undoes the last action"],
                answer: 2
            }
        },
        {
            title: "Emacs Exiting and Help",
            content: `
                <h1>Getting Help and Safely Quitting</h1>
                <p>Emacs has a massive built-in documentation system.</p>
                <h2>Help Commands</h2>
                <ul>
                    <li><code>C-h ?</code> : Pull up the general Help menu.</li>
                    <li><code>C-h t</code> : Launch the interactive built-in Emacs Tutorial (highly recommended!).</li>
                    <li><code>C-h k</code> : Describe what a specific keyboard shortcut does.</li>
                    <li><code>C-g</code> : <strong>The Cancel Button.</strong> If you accidentally start a chord and get stuck, mash <code>C-g</code> repeatedly to abort the current command and return to normal editing.</li>
                </ul>
                <h2>Quitting Emacs</h2>
                <div class="code-block">
                    <pre>C-x C-c    # The absolute sequence to quit Emacs completely.
# (If you have unsaved files, it will ask you if you want to save them first).</pre>
                </div>
            `,
            exercises: ["Open Emacs and immediately press <code>C-h t</code> to load the famous built-in Emacs tutorial buffer!"],
            quiz: {
                question: "What is the crucial 'Cancel / Abort' sequence you should press if you get stuck in half of an Emacs command?",
                options: ["Esc Esc Esc", "C-c", "C-g", "C-d"],
                answer: 2
            }
        }
    ],
    "User Management": [
        {
            title: "Users & Groups Architecture",
            content: `
                <h1>Users and Groups</h1>
                <p>Linux is inherently a multi-user system. Every process running and every file stored is owned by a specific user and belongs to a primary group.</p>
                <h2>Core Concepts</h2>
                <ul>
                    <li><strong>UID (User ID):</strong> A unique number assigned to each user. <code>root</code> is always 0. Regular users usually start at 1000.</li>
                    <li><strong>GID (Group ID):</strong> A unique number for each group. A user can belong to multiple groups (e.g., <code>sudo</code>, <code>docker</code>, <code>audio</code>).</li>
                </ul>
                <h2>Critical Configuration Files</h2>
                <p>These plain text files store all user and group definitions:</p>
                <div class="code-block">
                    <pre>$ cat /etc/passwd   # Shows username:x:UID:GID:Comment:HomeDir:Shell
$ cat /etc/shadow   # Stores the actual encrypted passwords (requires root)
$ cat /etc/group    # Lists groups and their members</pre>
                </div>
                <div class="tip">Type the command <code>id</code> right now in a terminal. It will output your current username, UID, primary GID, and all the secondary groups you belong to.</div>
            `,
            exercises: ["View the last 5 lines of <code>/etc/passwd</code> using <code>tail -n 5 /etc/passwd</code> to see recently created users."],
            quiz: {
                question: "Which critical system file stores the encrypted passwords for user accounts?",
                options: ["/etc/passwd", "/etc/group", "/etc/shadow", "/etc/sudoers"],
                answer: 2
            }
        },
        {
            title: "Managing User Accounts",
            content: `
                <h1>Adding, Modifying, and Deleting Users</h1>
                <p>As a system administrator, you will frequently need to manage user access.</p>
                <h2>Creating and Deleting Users</h2>
                <p>You can use <code>useradd</code> to create users, but <code>adduser</code> is an interactive, friendlier script available on many distributions.</p>
                <div class="code-block">
                    <pre>$ sudo useradd -m -s /bin/bash alice  # Creates pure user 'alice' with a home dir and bash shell
$ sudo passwd alice                   # Set alice's password
$ sudo userdel -r alice               # Deletes 'alice' and completely removes her home directory</pre>
                </div>
                <h2>Modifying Users (usermod)</h2>
                <p>The <code>usermod</code> command is very powerful. A common use case is adding a user to a supplementary group.</p>
                <div class="code-block">
                    <pre>$ sudo groupadd developers            # Create a new group called 'developers'
$ sudo usermod -aG developers bob     # Append (-a) bob to the supplementary group (-G) 'developers'</pre>
                </div>
                <div class="note"><strong>Warning:</strong> Always use <code>-aG</code> with usermod. If you omit the <code>-a</code> (append), the user will be removed from all other groups!</div>
            `,
            exercises: ["Check which groups your current user belongs to by typing <code>groups</code>."],
            quiz: {
                question: "In the command `usermod -aG developers bob`, what does the `-a` flag do?",
                options: ["It assigns 'developers' as the primary group.", "It creates the group 'developers'.", "It Appends the user to the group without removing them from their existing groups.", "It Activates the user account."],
                answer: 2
            }
        },
        {
            title: "The Power of Root & Sudo",
            content: `
                <h1>Superuser Privileges</h1>
                <p>The <strong>root</strong> user is the god-mode administrator. Root can delete the entire operating system with a single command.</p>
                <h2>Why use Sudo?</h2>
                <p>Logging in directly as root is dangerous. Instead, administrators use their personal accounts and prefix dangerous commands with <code>sudo</code> ("SuperUser DO").</p>
                <ul>
                    <li>It provides an audit log (every sudo command is logged in <code>/var/log/auth.log</code>).</li>
                    <li>It asks for <em>your</em> password, not the root password.</li>
                    <li>If you leave your desk, a malicious co-worker can't ruin the system because sudo sessions timeout.</li>
                </ul>
                <h2>Sudo Commands</h2>
                <div class="code-block">
                    <pre>$ sudo apt update     # Run a single command with root privileges
$ sudo -i             # Switch to an interactive root shell (your prompt will change to #)
$ su - bob            # Switch user to 'bob' (requires bob's password)</pre>
                </div>
            `,
            exercises: ["Run <code>sudo -i</code> to become root, look at your prompt, and then type <code>exit</code> to return to your normal user."],
            quiz: {
                question: "Which of the following is NOT a benefit of using 'sudo' instead of logging in directly as root?",
                options: ["Sudo tracks commands in an audit log.", "Sudo requires the administrator to share the universal root password.", "Sudo privileges can be restricted to specific commands.", "Sudo sessions time out automatically for safety."],
                answer: 1
            }
        },
        {
            title: "File Permissions (chmod & chown)",
            content: `
                <h1>Ownership and Permissions</h1>
                <p>Every file and directory in Linux has an owner user, an owner group, and a strict set of permissions.</p>
                <h2>Understanding the Permission String</h2>
                <p>When you run <code>ls -l</code>, you see strings like <code>-rwxr-xr--</code>. Let's break it down:</p>
                <ul>
                    <li><code>-</code> (Char 1): The file type (<code>-</code> for file, <code>d</code> for directory, <code>l</code> for symlink).</li>
                    <li><code>rwx</code> (Chars 2-4): <strong>User (Owner)</strong> can Read, Write, and eXecute.</li>
                    <li><code>r-x</code> (Chars 5-7): <strong>Group</strong> can Read and eXecute, but cannot write.</li>
                    <li><code>r--</code> (Chars 8-10): <strong>Others (World)</strong> can only Read.</li>
                </ul>
                <h2>Changing Ownership (chown)</h2>
                <div class="code-block">
                    <pre>$ sudo chown alice:developers project.txt   # Changes owner to 'alice' and group to 'developers'
$ sudo chown -R bob:bob /var/www            # Recursively changes ownership of the entire folder</pre>
                </div>
                <h2>Changing Permissions (chmod)</h2>
                <p>You can use symbolic mode (easier to read) or octal/numeric mode (faster to type).</p>
                <div class="code-block">
                    <pre># Symbolic Mode (u=user, g=group, o=others, a=all)
$ chmod u+x script.sh          # Add eXecute permission for the User (Owner)
$ chmod g-w secret.txt         # Remove Write permission for the Group
$ chmod a=r file.txt           # Set exact permissions: All users can only Read

# Octal Mode (4=Read, 2=Write, 1=eXecute. Add them up!)
# 7 = 4+2+1 (rwx), 5 = 4+1 (r-x), 0 = ---
$ chmod 755 server.py          # User gets 7 (rwx), Group gets 5 (r-x), Others get 5 (r-x)
$ chmod 644 document.txt       # Standard file: User gets 6 (rw-), Group/Others get 4 (r--)</pre>
                </div>
            `,
            exercises: ["Create an empty file <code>touch mydata.txt</code>. Then strip all permissions from it <code>chmod 000 mydata.txt</code>. Try to <code>cat</code> it. Finally, restore it with <code>chmod 644 mydata.txt</code>."],
            quiz: {
                question: "In octal mode, what number represents read AND write permissions, but NOT execute? (4=Read, 2=Write, 1=Execute)",
                options: ["7", "5", "6", "3"],
                answer: 2
            }
        }
    ],
    "Processes & Jobs": [
        {
            title: "Introduction to Processes",
            content: `
                <h1>What is a Process?</h1>
                <p>In Linux, a process is an executing instance of a program. Every time you run a command, start an application, or log in, a new process is created.</p>
                <h2>Key Process Attributes</h2>
                <ul>
                    <li><strong>PID (Process ID):</strong> A unique geographical number assigned to every running process. When a process dies, its PID can be reused.</li>
                    <li><strong>PPID (Parent Process ID):</strong> The PID of the process that started this one. If you spawn a script from Bash, Bash is the Parent.</li>
                    <li><strong>UID / GID:</strong> Processes run with the permissions of the user and group who started them.</li>
                </ul>
                <div class="tip">The very first process started by the Linux Kernel is always <code>systemd</code> (or <code>init</code> on older systems), and it always has <strong>PID 1</strong>.</div>
            `,
            exercises: ["Research what happens to a 'Child' process if its 'Parent' process is suddenly killed before the Child finishes executing. (Hint: Look up 'Orphan processes')."],
            quiz: {
                question: "What is the Process ID (PID) of the very first process started by the Linux Kernel during boot?",
                options: ["PID 0", "PID 1", "PID 100", "PID 9999"],
                answer: 1
            }
        },
        {
            title: "Static Monitoring (ps)",
            content: `
                <h1>Taking a Snapshot with ps</h1>
                <p>The <code>ps</code> (Process Status) command provides a static snapshot of the current processes running on your system.</p>
                <h2>Common ps Flags</h2>
                <ul>
                    <li><code>ps</code> : Extremely basic. Only shows processes belonging to your current user terminal.</li>
                    <li><code>ps aux</code> : The industry standard. Shows <strong>A</strong>ll processes, belonging to all <strong>U</strong>sers, even those not attached to a terminal (<strong>X</strong>).</li>
                    <li><code>ps -ef</code> : The System V (UNIX) equivalent to <code>aux</code>. Forms a slightly cleaner tree-like format.</li>
                </ul>
                <div class="code-block">
                    <pre>$ ps aux | less                  # Pipe into less so you can scroll through hundreds of processes
$ ps aux | grep "nginx"          # Quickly find the PID of the Nginx web server</pre>
                </div>
            `,
            exercises: ["Run <code>ps aux</code> on your terminal. Try to find the process corresponding to the Bash shell you are currently typing in."],
            quiz: {
                question: "Which of these ps commands is the most common industry standard for viewing absolutely every running process on the system?",
                options: ["ps -all", "ps -u", "ps aux", "ps show"],
                answer: 2
            }
        },
        {
            title: "Dynamic Monitoring (top & htop)",
            content: `
                <h1>Real-Time Process Monitoring</h1>
                <p>While <code>ps</code> is a static photo, <code>top</code> and <code>htop</code> are live security cameras.</p>
                <h2>top</h2>
                <p><code>top</code> is installed on every UNIX machine in the world. It provides a live, updating view of the most resource-intensive processes.</p>
                <ul><li>Inside <code>top</code>, press <strong>M</strong> to sort by memory, or <strong>P</strong> to sort by CPU. Press <strong>q</strong> to quit.</li></ul>
                <h2>htop</h2>
                <p><code>htop</code> is a modern, much friendlier alternative to <code>top</code>. It provides color-coded CPU usage bars and allows you to scroll vertically and horizontally.</p>
                <div class="code-block">
                    <pre>$ top              # Launch the classic live monitor
$ htop             # Launch the modern interactive monitor (often needs to be installed via apt/yum)</pre>
                </div>
            `,
            exercises: ["Launch <code>top</code>. Observe the 'load average' numbers in the top right corner. Press <code>q</code> to exit when done."],
            quiz: {
                question: "What keyboard key do you press to cleanly exit the 'top' interactive monitor interface?",
                options: ["Esc", "Ctrl+C", "q", "x"],
                answer: 2
            }
        },
        {
            title: "Process States & Controlling Terminals",
            content: `
                <h1>Understanding the State</h1>
                <p>Look at the 'STAT' or 'S' column when running <code>ps aux</code> or <code>top</code>. A process isn't just "running"—it has a specific state.</p>
                <h2>Common Process States</h2>
                <ul>
                    <li><strong>R (Running):</strong> Actively executing on the CPU, or waiting in the runnable queue.</li>
                    <li><strong>S (Interruptible Sleep):</strong> Sleeping while waiting for an event (like user input or a timer). Most inactive processes sit in 'S'.</li>
                    <li><strong>D (Uninterruptible Sleep):</strong> Frozen, waiting for an I/O operation (like a slow hard drive) to finish. You generally cannot kill processes in 'D' state!</li>
                    <li><strong>Z (Zombie):</strong> A dead process whose Parent hasn't yet acknowledged its death. It consumes no resources except a PID slot.</li>
                </ul>
            `,
            exercises: ["Run <code>ps aux</code> and scan the STAT column. Notice how almost every process is in the 'S' (Sleep) state, waiting to be needed."],
            quiz: {
                question: "What does a 'Z' in the STAT column of the ps command indicate?",
                options: ["Zooming (High Priority)", "Zero (No RAM usage)", "Zombie (Dead process waiting for parent)", "Zipped (Compressed process)"],
                answer: 2
            }
        },
        {
            title: "The /proc Virtual Filesystem",
            content: `
                <h1>The Matrix of the Kernel: /proc</h1>
                <p>In Linux, "Everything is a file". This applies to running processes too! The <code>/proc</code> directory isn't a real folder on your hard drive; it is a <strong>virtual filesystem</strong> generated in RAM on-the-fly by the Linux Kernel.</p>
                <h2>Inspecting Processes via /proc</h2>
                <p>If you have a process running with PID 1234, there will be a folder named <code>/proc/1234/</code> containing every detail about it.</p>
                <div class="code-block">
                    <pre>$ cat /proc/cpuinfo     # Read raw hardware data straight from the kernel about your processor
$ cat /proc/meminfo     # View extreme detail regarding system memory layout

$ ls -l /proc/1         # View the internal secrets of the systemd process (PID 1)
$ cat /proc/1/status    # View human-readable status information about PID 1</pre>
                </div>
            `,
            exercises: ["Run <code>cat /proc/uptime</code> to ask the kernel exactly how many seconds the system has been running since boot."],
            quiz: {
                question: "Where does the /proc directory physically reside?",
                options: ["On the primary hard drive partition", "In the /etc directory", "It is an illusion; it exists entirely within system RAM/Kernel", "On the boot USB"],
                answer: 2
            }
        },
        {
            title: "Process Priority (nice and renice)",
            content: `
                <h1>Playing Nice with the CPU</h1>
                <p>Linux is a multi-tasking OS. The Kernel's "Scheduler" decides which process gets CPU time. You can influence this by altering a process's <strong>Niceness</strong>.</p>
                <h2>The Niceness Scale (-20 to 19)</h2>
                <ul>
                    <li><strong>19:</strong> Extremely Nice. "Please serve everyone else before me." (Lowest priority).</li>
                    <li><strong>0:</strong> Default Niceness. Standard priority.</li>
                    <li><strong>-20:</strong> Extremely selfish. "I demand maximum CPU time now." (Highest priority). Only Root can set negative nice values!</li>
                </ul>
                <div class="code-block">
                    <pre>$ nice -n 10 tar -czf backup.tar.gz /var/log/    # Start a CPU-heavy task as 'Nice' so it doesn't freeze the system
$ renice -n -5 -p 1234                           # Change an ALREADY RUNNING process (PID 1234) to a negative (high) priority. Requires sudo.</pre>
                </div>
            `,
            exercises: ["Start a heavy command with a very low priority by passing it through <code>nice -n 19</code>."],
            quiz: {
                question: "Which 'nice' value represents the absolute highest priority on the system (the most 'selfish' process)?",
                options: ["100", "0", "19", "-20"],
                answer: 3
            }
        },
        {
            title: "Sending Signals",
            content: `
                <h1>Communicating via Signals</h1>
                <p>Administrators manage processes using <strong>Signals</strong>—asynchronous notifications sent to a process. The <code>kill</code> command is primarily used to send signals, not just to murder processes.</p>
                <h2>The Big Three Signals</h2>
                <ol>
                    <li><strong>SIGINT (2 - Interrupt):</strong> Sent when you press <code>Ctrl+C</code> in the terminal. Asks the foreground process to interrupt what it is doing and exit.</li>
                    <li><strong>SIGTERM (15 - Terminate):</strong> The default signal sent by the <code>kill</code> command. A polite request to shut down, allowing the program to safely save data and close files.</li>
                    <li><strong>SIGKILL (9 - Kill):</strong> Forced, immediate termination by the kernel. The process doesn't even get a chance to clean up. This is a last resort.</li>
                </ol>
                <div class="code-block">
                    <pre>$ kill -l          # List all 64 unique signals available in your Linux kernel!</pre>
                </div>
            `,
            exercises: ["Run a command like <code>ping 8.8.8.8</code>. Notice it runs forever. Press <code>Ctrl+C</code> to send a SIGINT signal and politely interrupt it."],
            quiz: {
                question: "When you press Ctrl+C to stop a running command in the terminal, which numbered signal is silently sent beneath the hood?",
                options: ["2 (SIGINT)", "9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)"],
                answer: 0
            }
        },
        {
            title: "Terminating Processes",
            content: `
                <h1>The Kill Commands</h1>
                <p>When an application freezes or consumes out-of-control memory, you must act as the executioner.</p>
                <h2>Targeting by PID (kill)</h2>
                <p>The standard <code>kill</code> command requires you to find the exact numerical PID first (using <code>ps</code> or <code>pgrep</code>).</p>
                <div class="code-block">
                    <pre>$ kill 5678              # Polite Terminate (Sends SIGTERM 15) to PID 5678
$ kill -9 5678           # Force Murder (Sends SIGKILL 9) to PID 5678</pre>
                </div>
                <h2>Targeting by Name (pkill & killall)</h2>
                <p>If you have 10 frozen instances of a web browser, typing 10 PIDs is tedious.</p>
                <div class="code-block">
                    <pre>$ pkill firefox          # Politlely kills ANY process whose name contains 'firefox'
$ killall -9 nginx       # Force kills any process exactly named 'nginx'</pre>
                </div>
                <div class="note">Danger: <code>killall</code> kills everything that matches. Use <code>pgrep [name]</code> first to verify what you are about to massacre.</div>
            `,
            exercises: ["Use <code>sleep 1234 &</code> to create a dummy process. Find it using <code>pgrep sleep</code>, and then assassinate it using <code>kill -9 [PID]</code>."],
            quiz: {
                question: "You want to gracefully shut down a runaway Ruby script, but you only know its exact numerical PID is 8192. Which command is safest?",
                options: ["kill -9 8192", "pkill 8192", "kill 8192", "killall 8192"],
                answer: 2
            }
        },
        {
            title: "Background Jobs",
            content: `
                <h1>The Ampersand (&) and Jobs</h1>
                <p>If you run a script that takes 5 hours to complete, it will "block" your terminal window until finished. By utilizing <strong>Job Control</strong>, you can send it to the background and keep typing!</p>
                <h2>Starting a Job in the Background</h2>
                <p>Simply append an ampersand (<code>&</code>) to the end of any command.</p>
                <div class="code-block">
                    <pre>$ ./massive_backup_script.sh &
[1] 14522                # Bash tells you this is Job 1, mapped to PID 14522.</pre>
                </div>
                <h2>Listing Jobs</h2>
                <div class="code-block">
                    <pre>$ jobs                   # View all background jobs managed by your current terminal session</pre>
                </div>
            `,
            exercises: ["Launch the sleep command into the background by typing <code>sleep 300 &</code>. Validate it is running silently by typing <code>jobs</code>."],
            quiz: {
                question: "What symbol must be appended to the absolute end of a bash command to launch it quietly in the background?",
                options: ["*", "$", "&", "%"],
                answer: 2
            }
        },
        {
            title: "Foregrounding and Suspending",
            content: `
                <h1>Controlling Job Flow</h1>
                <p>What if you forgot the ampersand and accidentally blocked your terminal with a huge download?</p>
                <h2>Suspending (Ctrl+Z)</h2>
                <p>Pressing <code>Ctrl+Z</code> will immediately <strong>Suspend</strong> (pause) the foreground task and give you your terminal prompt back. The process enters 'T' state (Stopped).</p>
                <h2>Resuming (bg and fg)</h2>
                <p>Once a process is suspended, you can either resume it invisibly in the background (<code>bg</code>), or drag it back up into the foreground blocking view (<code>fg</code>).</p>
                <div class="code-block">
                    <pre>$ wget largefile.iso     # Oh no, it's blocking the terminal!
Ctrl+Z                   # Paused! Prompt returned.
$ bg                     # Command continues downloading in the background.

$ jobs                   # Check status of jobs
$ fg %1                  # Bring Job [1] back to the foreground to watch it finish.</pre>
                </div>
            `,
            exercises: ["Run <code>sleep 500</code>. Pause it using Ctrl+Z. Run <code>jobs</code> to see it 'Stopped'. Formally resume it using the <code>bg</code> command."],
            quiz: {
                question: "If a command is currently blocking your terminal, what keyboard shortcut will instantly pause it and return your interactive prompt?",
                options: ["Ctrl+C", "Ctrl+D", "Ctrl+B", "Ctrl+Z"],
                answer: 3
            }
        }
    ],
    "Software Management": [
        {
            title: "Software Distribution & Repositories",
            content: `
                <h1>Understanding Repositories</h1>
                <p>Unlike Windows or macOS where you hunt for installers on random websites, Linux traditionally provisions software through trusted, centralized <strong>repositories</strong> (repos).</p>
                <h2>How It Works</h2>
                <ul>
                    <li>A repository is a highly secure web server containing thousands of pre-compiled software packages.</li>
                    <li>Software is cryptographically signed to ensure it hasn't been tampered with.</li>
                    <li>Using repos guarantees you install software that is 100% compatible with your specific Linux version.</li>
                </ul>
                <div class="tip">The list of URLs your system trusts is stored in specific files. On Ubuntu/Debian, it's <code>/etc/apt/sources.list</code>.</div>
            `,
            exercises: ["Research what a 'PPA' (Personal Package Archive) is in the Ubuntu ecosystem and why you should be careful adding them."],
            quiz: {
                question: "What is the primary security benefit of downloading software via an official Linux repository rather than a random website?",
                options: ["It downloads faster", "The software is cryptographically signed and tested for compatibility", "It saves hard drive space", "It avoids needing an internet connection"],
                answer: 1
            }
        },
        {
            title: "dpkg (Debian Package Manager)",
            content: `
                <h1>The Core Debian Tool: dpkg</h1>
                <p><code>dpkg</code> is the foundational, low-level package manager for Debian-based systems (like Ubuntu and Mint). It installs individual <code>.deb</code> (Debian) package files.</p>
                <h2>Directly Installing .deb Files</h2>
                <div class="code-block">
                    <pre>$ sudo dpkg -i google-chrome-stable_current_amd64.deb</pre>
                </div>
                <h2>The Catch: Dependency Hell</h2>
                <p><code>dpkg</code> is "dumb". If Google Chrome requires 50 other hidden mini-packages (dependencies) to work, <code>dpkg</code> will simply fail and tell you they are missing. It will <strong>not</strong> go online to download them for you.</p>
                <div class="code-block">
                    <pre>$ dpkg -l                    # List ALL installed packages on the system
$ dpkg -L nginx              # List all files installed by a specific package</pre>
                </div>
            `,
            exercises: ["Run <code>dpkg -l | less</code> to scroll through the massive list of every single package currently installed on your Debian/Ubuntu machine."],
            quiz: {
                question: "What is the primary drawback of using the low-level `dpkg -i` command to install software?",
                options: ["It is too slow", "It only works on Red Hat", "It does not automatically resolve and download dependencies", "It requires a GUI"],
                answer: 2
            }
        },
        {
            title: "apt (Advanced Package Tool)",
            content: `
                <h1>The Smart Manager: apt</h1>
                <p>Because <code>dpkg</code> doesn't handle dependencies, Debian created <code>apt</code> (Advanced Package Tool). <code>apt</code> is a "high-level" manager. It talks to repositories, downloads required dependencies, and <em>then</em> feeds them to <code>dpkg</code> underneath!</p>
                <h2>The APT Workflow</h2>
                <div class="code-block">
                    <pre>$ sudo apt update                 # 1. Fetch the latest catalog of software from your repos
$ apt search "web server"         # 2. Search the catalog for keywords
$ sudo apt install nginx          # 3. Install the package AND all its dependencies
$ sudo apt upgrade                # Upgrade ALL installed software to the latest versions</pre>
                </div>
                <h2>Removing Software</h2>
                <div class="code-block">
                    <pre>$ sudo apt remove nginx           # Uninstall, but KEEP configuration files just in case
$ sudo apt purge nginx            # NUKE the program and erase ALL configuration files
$ sudo apt autoremove             # Clean up 'orphaned' dependencies you no longer need</pre>
                </div>
            `,
            exercises: ["Run <code>apt search vim</code>. How many packages on the repository mention the word 'vim'?"],
            quiz: {
                question: "Which APT command entirely removes a software package ALONG with all of its customized configuration files?",
                options: ["apt remove", "apt delete", "apt purge", "apt clear"],
                answer: 2
            }
        },
        {
            title: "rpm (Red Hat Package Manager)",
            content: `
                <h1>The Core Red Hat Tool: rpm</h1>
                <p>Just as Debian has <code>.deb</code> files and <code>dpkg</code>, the Red Hat family (RHEL, Fedora, CentOS, Rocky) uses <code>.rpm</code> files and the <code>rpm</code> command.</p>
                <h2>Using RPM</h2>
                <p>Like <code>dpkg</code>, <code>rpm</code> is the low-level tool. It installs local files but will <strong>fail</strong> if dependencies are missing.</p>
                <div class="code-block">
                    <pre>$ sudo rpm -ivh package.rpm       # Install, Verbose, display Hash marks (progress bar)
$ rpm -qa                         # Query All installed packages
$ rpm -qi bash                    # Query Information about a specific package
$ sudo rpm -e package_name        # Erase (uninstall) a package</pre>
                </div>
            `,
            exercises: ["If you have access to a Red Hat-based system, run <code>rpm -qa | grep ssh</code> to see SSH-related packages installed."],
            quiz: {
                question: "Which low-level package file format is native to the Red Hat Enterprise Linux family?",
                options: [".exe", ".deb", ".rpm", ".tar"],
                answer: 2
            }
        },
        {
            title: "yum and dnf (Fedora/RHEL)",
            content: `
                <h1>The Smart Managers: YUM and DNF</h1>
                <p>To solve RPM's dependency problem, Yellowdog Updater Modified (<code>yum</code>) was created. Recently, it has been replaced by Dandified YUM (<code>dnf</code>) which is much faster and uses less memory.</p>
                <h2>Using DNF (The modern standard)</h2>
                <p>The syntax for DNF is remarkably similar to APT.</p>
                <div class="code-block">
                    <pre>$ sudo dnf check-update           # See what needs updating
$ sudo dnf install httpd          # Install the Apache Web Server
$ sudo dnf remove httpd           # Remove a package</pre>
                </div>
                <h2>The Magic of DNF History</h2>
                <p>DNF has a feature APT lacks: highly robust transaction tracking.</p>
                <div class="code-block">
                    <pre>$ sudo dnf history                # See a numbered list of everything installed/removed
$ sudo dnf history undo 14        # Instantly rollback Transaction #14!</pre>
                </div>
            `,
            exercises: ["Compare the command to install Apache on Ubuntu (<code>apt install apache2</code>) vs Red Hat (<code>dnf install httpd</code>)."],
            quiz: {
                question: "Which unique feature of DNF allows administrators to easily 'undo' an entire software installation transaction?",
                options: ["dnf rollback", "dnf history undo", "dnf reverse", "apt revert"],
                answer: 1
            }
        },
        {
            title: "pacman (Arch Linux)",
            content: `
                <h1>Pacman: The Arch Package Manager</h1>
                <p>Arch Linux (and derivatives like Manjaro) uses <code>pacman</code>. It connects to the Arch User Repository (AUR) and main repos, renowned for always having the absolute latest "bleeding edge" software.</p>
                <h2>Pacman Syntax</h2>
                <p>Pacman uses flags rather than words (like 'install' or 'remove').</p>
                <div class="code-block">
                    <pre>$ sudo pacman -Syu                # Sync, y(refresh), upgrade. (The command to update the whole system)
$ sudo pacman -S neofetch         # Sync (Install) a specific package
$ sudo pacman -Rs neofetch        # Remove the package and its unused dependencies (s)</pre>
                </div>
                <div class="note">Arch Linux is a "Rolling Release" distribution. Instead of upgrading from "Ubuntu 22 to Ubuntu 24", <code>pacman -Syu</code> continuously rolls your system forward forever.</div>
            `,
            exercises: ["Research the Arch User Repository (AUR) and learn why it makes Arch Linux uniquely powerful for developers."],
            quiz: {
                question: "In Arch Linux, which command is famously used to update all repositories and upgrade the entire system simultaneously?",
                options: ["pacman -update", "pacman -Syu", "apt upgrade", "dnf update"],
                answer: 1
            }
        },
        {
            title: "Universal Packages (Snap & Flatpak)",
            content: `
                <h1>Solving the Dependency Nightmare</h1>
                <p>Linux has fragmentation. A <code>.deb</code> package for Ubuntu won't work on Fedora, and vice versa. Worse, different apps need different versions of the same background libraries.</p>
                <h2>The Solution: Universal Containers</h2>
                <p><strong>Snaps</strong> (by Canonical/Ubuntu) and <strong>Flatpaks</strong> bundle all required dependencies <em>inside</em> the package itself! They run in a sandbox, separate from your core OS.</p>
                <div class="code-block">
                    <pre>$ snap install spotify            # Works exactly the same on Ubuntu, Fedora, or Arch
$ flatpak install flathub gimp    # Universal install of the GIMP image editor</pre>
                </div>
                <div class="tip">The tradeoff? Universal packages take up much more hard drive space and memory because they duplicate dependencies.</div>
            `,
            exercises: ["Run <code>snap list</code> or <code>flatpak list</code> on your desktop to see what containerized apps you are running."],
            quiz: {
                question: "What is the primary drawback of using universal packaging formats like Snap or Flatpak?",
                options: ["They are insecure", "They only work on Ubuntu", "They consume significantly more disk space and memory", "They require compiling from source"],
                answer: 2
            }
        },
        {
            title: "tar (Tape Archive)",
            content: `
                <h1>Beyond Repositories: Tarballs</h1>
                <p>Not everything is in a repository. System administrators move masses of files around using <code>tar</code> (Tape ARchive). It bundles multiple files into a single large file (a tarball), but it does <strong>not</strong> compress them by default.</p>
                <h2>Creating an Archive</h2>
                <ul>
                    <li><code>-c</code> : Create</li>
                    <li><code>-v</code> : Verbose (show what it's packing)</li>
                    <li><code>-f</code> : File (must be the last flag before the filename!)</li>
                </ul>
                <div class="code-block">
                    <pre>$ tar -cvf backup.tar /var/log/   # Bundles the entire log directory into one file</pre>
                </div>
                <h2>Extracting an Archive</h2>
                <div class="code-block">
                    <pre>$ tar -xvf backup.tar             # eXtracts the archive into the current directory</pre>
                </div>
            `,
            exercises: ["Create a directory with a few text files, and bundle them into a single <code>archive.tar</code> using <code>tar -cvf</code>."],
            quiz: {
                question: "What does the 'f' flag in the tar command specify?",
                options: ["Force the creation", "Fast mode", "File name follows immediately", "Format to ZIP"],
                answer: 2
            }
        },
        {
            title: "Compression (gzip and bzip2)",
            content: `
                <h1>Squeezing Files</h1>
                <p><code>tar</code> bundles, but <code>gzip</code> compresses. Linux combines them into the famous <code>.tar.gz</code> extension.</p>
                <h2>Compressing Tarballs on the Fly</h2>
                <p>You can tell <code>tar</code> to instantly compress everything using the <code>-z</code> flag (for gzip).</p>
                <div class="code-block">
                    <pre>$ tar -czvf web_backup.tar.gz /var/www/html/    # Create, Zip, Verbose, File
$ tar -xzvf web_backup.tar.gz                   # eXtract, Zip(decompress), Verbose, File</pre>
                </div>
                <h2>Alternative: bzip2</h2>
                <p>Use the <code>-j</code> flag instead of <code>-z</code> to use bzip2 compression. It compresses much smaller than gzip, but takes longer CPU time to do it. The extension becomes <code>.tar.bz2</code>.</p>
            `,
            exercises: ["Find the largest file in your Documents and compress it using standard <code>gzip [filename]</code>. Check how much smaller it got using <code>ls -lh</code>!"],
            quiz: {
                question: "Which flag is added to the tar command to tell it to compress the archive using gzip, resulting in a .tar.gz file?",
                options: ["-z", "-g", "-c", "-p"],
                answer: 0
            }
        },
        {
            title: "Compiling from Source",
            content: `
                <h1>The Old Ways: make and gcc</h1>
                <p>Sometimes, developers release bare source code. To run it, you must use a compiler (like <code>gcc</code>) to translate the <code>.c</code> text files into a binary executable.</p>
                <h2>The Holy Trinity of Compiling</h2>
                <p>Almost all source code follows this three-step ritual:</p>
                <div class="code-block">
                    <pre># 1. Inspects your system to ensure you have necessary background libraries
$ ./configure

# 2. Reades the "Makefile" and actually compiles the code into binary
$ make

# 3. Copies the finished binary payload into system folders like /usr/local/bin
$ sudo make install</pre>
                </div>
                <div class="tip">Compiling a massive program like the Linux Kernel or a web browser from source can take several hours depending on your CPU!</div>
            `,
            exercises: ["Research why the <code>build-essential</code> package on Ubuntu is absolutely necessary before you attempt to compile anything."],
            quiz: {
                question: "In the standard Linux compilation workflow, what does the './configure' script do?",
                options: ["Translates code to binary", "Installs the executable", "Deletes old files", "Inspects the system to ensure dependencies exist before compiling"],
                answer: 3
            }
        }
    ],
    "Devices & Hardware": [
        {
            title: "Everything is a File (/dev)",
            content: `
                <h1>The /dev Directory</h1>
                <p>In Linux, physical hardware is represented as special files in the <code>/dev</code> directory. To interact with the hardware, the kernel simply reads from or writes to these files.</p>
                <h2>Common Device Files</h2>
                <ul>
                    <li><strong>/dev/sda, /dev/sdb:</strong> Traditional hard drives (SATA/SCSI).</li>
                    <li><strong>/dev/nvme0n1:</strong> Modern NVMe solid-state drives.</li>
                    <li><strong>/dev/tty1:</strong> Your keyboard/screen terminal workspace.</li>
                </ul>
                <div class="code-block">
                    <pre>$ ls -l /dev/sda
brw-rw---- 1 root disk 8, 0 Mar  7 /dev/sda  # 'b' means Block device!</pre>
                </div>
            `,
            exercises: ["Run <code>ls -l /dev/null</code> and check its permissions. Note the 'c' indicating a Character device."],
            quiz: {
                question: "What does the 'b' stand for at the beginning of the file permissions string for /dev/sda?",
                options: ["Binary", "Block device", "Basic file", "Background process"],
                answer: 1
            }
        },
        {
            title: "CPU & Memory Analysis",
            content: `
                <h1>Inspecting the Brain and RAM</h1>
                <p>Before deploying heavy applications, you need to know your compute capacity.</p>
                <h2>CPU Details</h2>
                <div class="code-block">
                    <pre>$ lscpu                    # High-level summary of architecture, cores, and threads
$ cat /proc/cpuinfo        # Deep, raw kernel dump of every single logical processor</pre>
                </div>
                <h2>Memory (RAM) Details</h2>
                <div class="code-block">
                    <pre>$ free -h                  # View total, used, and available RAM in (h)uman-readable format
$ cat /proc/meminfo        # Deep kernel dump of memory hardware and swapping</pre>
                </div>
            `,
            exercises: ["Run <code>free -h</code> and check your 'available' memory vs 'free' memory. Linux caches files in RAM, so 'available' is the true metric."],
            quiz: {
                question: "Which command provides a quick, human-readable summary of your total and available RAM?",
                options: ["cat /proc/meminfo", "lscpu", "free -h", "htop"],
                answer: 2
            }
        },
        {
            title: "General Hardware Discovery",
            content: `
                <h1>The Master Auditors: lshw and inxi</h1>
                <p>When you need a complete manifest of the entire physical machine, these tools extract everything from the motherboard to the network cards.</p>
                <h2>lshw (Hardware Lister)</h2>
                <p><code>lshw</code> extracts detailed information from the system DMI and kernel.</p>
                <div class="code-block">
                    <pre>$ sudo lshw                # Generates a massive, detailed hardware tree
$ sudo lshw -short         # Formats the hardware tree into a much cleaner, readable table</pre>
                </div>
                <h2>inxi & hwinfo</h2>
                <p>Often installed on modern distros, these provide beautifully formatted summaries.</p>
                <div class="code-block">
                    <pre>$ inxi -Fxz                # Full system spec summary (CPU, GPU, Network, Drives)
$ hwinfo --short           # Quick summary of hardware nodes</pre>
                </div>
            `,
            exercises: ["Run <code>sudo lshw -short</code> to see a list of device classes like 'processor', 'memory', 'bridge', and 'network'."],
            quiz: {
                question: "Which flag is appended to lshw to output the hardware tree into a clean, easy-to-read table?",
                options: ["-table", "-format", "-short", "-list"],
                answer: 2
            }
        },
        {
            title: "Storage & Block Devices",
            content: `
                <h1>Mapping Hard Drives</h1>
                <p>Managing disks is a core sysadmin duty. You must visualize the storage hierarchy.</p>
                <h2>Listing Block Devices</h2>
                <div class="code-block">
                    <pre>$ lsblk                    # Visualizes all hard drives and their partitions in a tree format</pre>
                </div>
                <h2>Partition Tables</h2>
                <p>To see exactly how a drive is mathematically sliced up (sectors and cylinders):</p>
                <div class="code-block">
                    <pre>$ sudo fdisk -l            # Lists all partition tables for all attached disks</pre>
                </div>
            `,
            exercises: ["Run <code>lsblk</code>. Identify your primary hard drive (usually sda or nvme0n1) and see how many partitions exist beneath it."],
            quiz: {
                question: "Which command visualizes your hard drives and their partitions in a hierarchical tree layout?",
                options: ["lshw", "lsblk", "fdisk", "df"],
                answer: 1
            }
        },
        {
            title: "Storage Space & I/O",
            content: `
                <h1>Analyzing Disk Usage</h1>
                <p>Knowing <em>what</em> hardware you have is step one. Knowing how full it is step two.</p>
                <h2>Disk Free (df)</h2>
                <p>Shows total overall space available on mounted partitions.</p>
                <div class="code-block">
                    <pre>$ df -h                    # Show filesystem disk space usage (human-readable)</pre>
                </div>
                <h2>Disk Usage (du)</h2>
                <p>Analyzes the size of specific folders and files.</p>
                <div class="code-block">
                    <pre>$ du -sh *                 # Summarize (s) the human-readable (h) size of everything (*) in this directory</pre>
                </div>
                <h2>Input/Output Statistics</h2>
                <div class="code-block">
                    <pre>$ iostat                   # View CPU statistics and input/output loads for devices/partitions</pre>
                </div>
            `,
            exercises: ["Navigate to <code>/var/log</code> and run <code>sudo du -sh * | sort -h</code> to find the largest log files."],
            quiz: {
                question: "You want to find out how much space the current directory and its contents are consuming on the hard drive. Which command isolates this data?",
                options: ["df -h", "du -sh *", "iostat", "lsblk"],
                answer: 1
            }
        },
        {
            title: "USB and PCI Buses",
            content: `
                <h1>Peripheral Communication</h1>
                <p>Components connect to the motherboard via internal "Buses" (PCI) or external ports (USB).</p>
                <h2>PCI Devices (Internal)</h2>
                <div class="code-block">
                    <pre>$ lspci                    # List every device connected directly to the motherboard
$ lspci -v                 # Verbose mode: includes the exact kernel driver handling the physical device</pre>
                </div>
                <h2>USB Devices (External)</h2>
                <div class="code-block">
                    <pre>$ lsusb                    # List attached webcams, mice, keyboards, and adapters
$ sudo usb-devices         # Extremely detailed text dump of USB topology and power limits</pre>
                </div>
            `,
            exercises: ["Run <code>lspci | grep -i network</code> to isolate the make and model of your WiFi or Ethernet card."],
            quiz: {
                question: "Which command lists hardware connected to the motherboard's internal expansion slots (like Graphics Cards and Network Interfaces)?",
                options: ["lsusb", "lspci", "lsblk", "lscpu"],
                answer: 1
            }
        },
        {
            title: "Graphics and Audio",
            content: `
                <h1>Sensory Hardware</h1>
                <p>Linux is increasingly used for gaming and multimedia. Identifying GPUs and Sound cards is critical.</p>
                <h2>Graphics Cards (GPU)</h2>
                <div class="code-block">
                    <pre>$ lspci | grep -i vga      # Instantly identify your AMD/NVIDIA/Intel graphics renderer
$ nvidia-smi               # If using NVIDIA, view live GPU temperature, VRAM usage, and active processes!</pre>
                </div>
                <h2>Audio Devices</h2>
                <p>Advanced Linux Sound Architecture (ALSA) handles audio hardware.</p>
                <div class="code-block">
                    <pre>$ cat /proc/asound/cards   # Ask the kernel what sound cards it detects
$ aplay -l                 # List all physical audio playback devices (speakers/headphones)</pre>
                </div>
            `,
            exercises: ["Run <code>aplay -l</code> to see how your computer lists its audio outputs. If you use HDMI, your GPU might be listed as a sound card!"],
            quiz: {
                question: "If you have an NVIDIA graphics card installed with proprietary drivers, which command provides a live monitor of its temperature and VRAM usage?",
                options: ["nvidia-top", "nvidia-smi", "gpu-monitor", "lspci -vga"],
                answer: 1
            }
        },
        {
            title: "Network Interfaces",
            content: `
                <h1>Connectivity Hardware</h1>
                <p>We'll dive deep into Networking later, but you first must verify the physical or virtual adapter is functioning.</p>
                <h2>Network Adapters</h2>
                <div class="code-block">
                    <pre>$ ip a                     # The modern standard to view network interfaces, MAC addresses, and IP blocks
$ ifconfig                 # The legacy standard (often requires installing net-tools)
$ ping google.com          # Send ICMP packets to test if the hardware is successfully routing to the internet</pre>
                </div>
                <div class="tip">Interfaces usually start with 'e' for Ethernet (like <code>enp3s0</code>) and 'w' for Wireless (like <code>wlan0</code>).</div>
            `,
            exercises: ["Run <code>ip a</code>. Find the interface named <code>lo</code> (loopback) and note its IPv4 address (it should be 127.0.0.1)."],
            quiz: {
                question: "Which command is the modern, standard method to view all available network interfaces alongside their assigned IP addresses?",
                options: ["netstat", "ip a", "ifconfig", "lspci"],
                answer: 1
            }
        },
        {
            title: "Power and Batteries",
            content: `
                <h1>Energy Management</h1>
                <p>If you are running Linux on a laptop or a server attached to a UPS (Uninterruptible Power Supply), querying power states is vital.</p>
                <h2>Advanced Configuration and Power Interface (ACPI)</h2>
                <div class="code-block">
                    <pre>$ acpi -V                  # Print every available detail about battery charge, adapters, and cooling states</pre>
                </div>
                <h2>UPower (Universal Power)</h2>
                <p>UPower communicates with the D-Bus to query modern desktop environments.</p>
                <div class="code-block">
                    <pre>$ upower -i /org/freedesktop/UPower/devices/battery_BAT0   # Deep diagnostics for laptop Battery 0</pre>
                </div>
            `,
            exercises: ["If you are on a laptop, run <code>acpi -V</code> to check your battery percentage and thermal zone temperatures."],
            quiz: {
                question: "Which command generates a text summary of your laptop's battery charge and thermal cooling states?",
                options: ["power-stat", "acpi -V", "lshw -battery", "top"],
                answer: 1
            }
        },
        {
            title: "Kernel Messages and BIOS",
            content: `
                <h1>Deep Diagnostics</h1>
                <p>When hardware breaks, you must query the Kernel and the BIOS itself.</p>
                <h2>The Kernel Ring Buffer (dmesg)</h2>
                <p><code>dmesg</code> prints all messages generated by the kernel. If you plug in a broken USB drive, the kernel will complain here.</p>
                <div class="code-block">
                    <pre>$ dmesg                    # Print the entire boot hardware initialization log
$ dmesg -w                 # Follow mode: Leave it open to watch the kernel react live as you plug/unplug hardware</pre>
                </div>
                <h2>Desktop Management Interface (SMBIOS)</h2>
                <p>Extracts data straight from the motherboard's BIOS/UEFI firmware without needing to reboot the machine!</p>
                <div class="code-block">
                    <pre>$ sudo dmidecode           # Print detailed motherboard serial numbers, RAM clock speeds, and BIOS versions</pre>
                </div>
            `,
            exercises: ["Open a terminal and run <code>dmesg -w</code>. Physically plug a USB flash drive into your computer. Watch the text instantly scroll as the kernel detects and mounts the hardware!"],
            quiz: {
                question: "Which command continuously monitors the kernel's internal ring buffer, displaying live messages when new hardware is plugged in?",
                options: ["dmesg -w", "htop", "syslog", "lshw -live"],
                answer: 0
            }
        }
    ],
    "Filesystem & Storage": [
        {
            title: "Filesystem Hierarchy Standard (FHS)",
            content: `
                <h1>The One-Root Tree</h1>
                <p>Unlike Windows with its lettered drives (C:, D:), Linux has only <strong>one</strong> root (<code>/</code>). Every single file on the system — regardless of which drive it is physically stored on — appears somewhere under this single root tree, defined by the Filesystem Hierarchy Standard.</p>
                <h2>Key Directories</h2>
                <ul>
                    <li><code>/</code> — The Root. The absolute top of the tree.</li>
                    <li><code>/etc</code> — System-wide configuration files (e.g., <code>/etc/ssh/sshd_config</code>).</li>
                    <li><code>/home</code> — Personal user data (e.g., <code>/home/alice</code>).</li>
                    <li><code>/var</code> — Variable data: logs, databases, web files that grow constantly.</li>
                    <li><code>/bin</code> & <code>/usr/bin</code> — Essential user command executables.</li>
                    <li><code>/sbin</code> & <code>/usr/sbin</code> — System administrator binaries (require root).</li>
                    <li><code>/tmp</code> — Temporary files wiped clean at every reboot.</li>
                    <li><code>/proc</code> & <code>/sys</code> — Virtual kernel filesystems (inspected earlier).</li>
                </ul>
            `,
            exercises: ["Navigate to <code>/var/log</code> and list the file sizes using <code>ls -lh</code>. This is where your system constantly writes events."],
            quiz: {
                question: "Which directory holds system-wide configuration files for installed services?",
                options: ["/bin", "/home", "/var", "/etc"],
                answer: 3
            }
        },
        {
            title: "Disk Partitioning (fdisk & parted)",
            content: `
                <h1>Slicing a Physical Drive</h1>
                <p>A raw hard drive has no structure. Before you can store files, you must divide it into <strong>partitions</strong> — logical regions with defined boundaries.</p>
                <h2>Partition Schemes</h2>
                <ul>
                    <li><strong>MBR (Master Boot Record):</strong> The old standard. Max 4 primary partitions, max 2TB per drive.</li>
                    <li><strong>GPT (GUID Partition Table):</strong> The modern replacement. Supports 128 partitions, drives up to 9.4 Zettabytes.</li>
                </ul>
                <h2>The Tools</h2>
                <div class="code-block">
                    <pre>$ sudo fdisk /dev/sdb        # Classic interactive MBR/GPT partition editor
$ sudo parted /dev/sdb       # Modern partitioning tool, supports GPT natively
$ sudo gdisk /dev/sdb        # GPT-focused partition editor</pre>
                </div>
            `,
            exercises: ["Run <code>sudo fdisk -l</code> to list all partition tables. Identify the partition scheme (MBR or GPT) of your primary drive."],
            quiz: {
                question: "Which partition table format is the modern standard, supports 128+ partitions, and removes the 2TB drive limit?",
                options: ["MBR", "FAT32", "GPT", "ext4"],
                answer: 2
            }
        },
        {
            title: "Filesystem Formats (ext4, xfs, btrfs)",
            content: `
                <h1>Formatting: Creating the Index</h1>
                <p>A partition is just empty space. A <strong>filesystem</strong> is the structure written onto the partition that tells the kernel how to organize, name, and find every single file stored within it.</p>
                <h2>Linux Filesystem Types</h2>
                <ul>
                    <li><strong>ext4:</strong> The default, rock-solid choice for most Linux desktops and servers. Fast, reliable, and widely supported.</li>
                    <li><strong>xfs:</strong> High-performance, excellent for large files and heavy parallel I/O. Preferred in enterprise settings (Red Hat default).</li>
                    <li><strong>btrfs:</strong> Modern, feature-rich filesystem with built-in snapshots, RAID, and data integrity checksums.</li>
                </ul>
                <div class="code-block">
                    <pre>$ sudo mkfs.ext4 /dev/sdb1     # Format partition 1 with ext4
$ sudo mkfs.xfs  /dev/sdb2     # Format partition 2 with xfs
$ df -Th                        # View the type of every currently mounted filesystem</pre>
                </div>
            `,
            exercises: ["Run <code>df -Th</code> and look at the 'Type' column. Identify what filesystem your root partition (/) uses."],
            quiz: {
                question: "Which command is used to create (format) an ext4 filesystem on a newly created partition?",
                options: ["fdisk", "mkfs.ext4", "mount", "parted"],
                answer: 1
            }
        },
        {
            title: "Mounting & Unmounting Storage",
            content: `
                <h1>Attaching Storage to the Tree</h1>
                <p>Because Linux has only one directory tree, adding a new hard drive means <strong>mounting</strong> it — attaching it to an empty folder so its contents appear there, seamlessly integrated with the rest of the filesystem.</p>
                <h2>The mount Command</h2>
                <div class="code-block">
                    <pre>$ sudo mkdir -p /mnt/data           # Step 1: Create an empty mount point directory
$ sudo mount /dev/sdb1 /mnt/data    # Step 2: Attach the new partition to that directory
$ ls /mnt/data                      # Now browse the drive's contents just like a normal folder!
$ sudo umount /mnt/data             # Step 3: Safely detach the drive when finished</pre>
                </div>
                <div class="note">You <strong>cannot</strong> unmount a drive if any process has a file open on it. Use <code>lsof /mnt/data</code> to find and kill the culprit first.</div>
            `,
            exercises: ["Run <code>mount | grep -v '^none'</code> to see a list of every storage device and virtual filesystem currently mounted."],
            quiz: {
                question: "After running 'sudo mount /dev/sdb1 /mnt/data', where will the drive's contents appear?",
                options: ["Under /dev/sdb1", "Directly at /", "Under /mnt/data", "At /media/"],
                answer: 2
            }
        },
        {
            title: "Persistent Mounts (/etc/fstab)",
            content: `
                <h1>Surviving Reboots</h1>
                <p>A manual <code>mount</code> command only lasts until you reboot. To make a drive mount <em>automatically and permanently</em> on every boot, you declare it in the <strong>File System Table</strong>.</p>
                <h2>The /etc/fstab File</h2>
                <p>Each line specifies one filesystem to mount. The 6 tab-separated fields are:</p>
                <ol>
                    <li><strong>Device</strong> (e.g., <code>/dev/sdb1</code> or <code>UUID=abc123</code>)</li>
                    <li><strong>Mount Point</strong> (e.g., <code>/mnt/data</code>)</li>
                    <li><strong>Filesystem Type</strong> (e.g., <code>ext4</code>)</li>
                    <li><strong>Options</strong> (e.g., <code>defaults</code>)</li>
                    <li><strong>Dump</strong> (backup flag, almost always <code>0</code>)</li>
                    <li><strong>Pass</strong> (filesystem check order. Use <code>2</code> for non-root drives.)</li>
                </ol>
                <div class="code-block">
                    <pre>$ sudo blkid /dev/sdb1              # Get the UUID for the drive (safer than using /dev name)
$ cat /etc/fstab                    # View current permanent mounts
$ sudo mount -a                     # Test fstab by mounting everything declared in it (catch typos!)</pre>
                </div>
                <div class="tip">Always use the UUID instead of <code>/dev/sdb1</code>. Device letter order can change when drives are added or swapped!</div>
            `,
            exercises: ["Run <code>cat /etc/fstab</code>. Compare the mount points listed there against what <code>mount</code> shows as currently active."],
            quiz: {
                question: "After editing /etc/fstab, which command lets you test the configuration and mount all declared entries without rebooting?",
                options: ["mount --all", "sudo fstab -test", "sudo mount -a", "sudo reload fstab"],
                answer: 2
            }
        },
        {
            title: "Inodes & the VFS",
            content: `
                <h1>How Files Are Really Stored</h1>
                <p>When you save a file, Linux splits it into two parts: its <strong>data blocks</strong> (the raw content) and its <strong>inode</strong> (a tiny metadata record). A filename is just a label pointing to an inode number.</p>
                <h2>The Inode</h2>
                <p>An inode stores everything <em>about</em> a file except its name: owner, permissions, size, timestamps, and pointers to the data blocks where the content is physically written on disk.</p>
                <div class="code-block">
                    <pre>$ ls -i <filename>             # Display the inode number of a file
$ df -i                        # Show inode usage (you can run OUT of inodes even with free disk space!)
$ stat <filename>              # Show full inode metadata: size, timestamps, inode number, etc.</pre>
                </div>
            `,
            exercises: ["Run <code>stat /etc/hostname</code> to see the complete inode metadata for a system file, including access and modification times."],
            quiz: {
                question: "What critical piece of information does a file's inode store?",
                options: ["The filename", "The file's metadata and pointer to its data blocks", "The partition table", "The mount point"],
                answer: 1
            }
        },
        {
            title: "Hard Links & Soft Links",
            content: `
                <h1>Multiple Names for Files</h1>
                <p>Linux has two types of file links.</p>
                <h2>Hard Links</h2>
                <p>A hard link is a <strong>second directory entry pointing to the exact same inode</strong> (and thus the same data). The file only disappears from disk when ALL hard links are deleted.</p>
                <div class="code-block">
                    <pre>$ ln original.txt hardlink.txt     # Create a hard link (no 'softlink' flag needed)</pre>
                </div>
                <h2>Soft (Symbolic) Links</h2>
                <p>A soft link (symlink) is like a <strong>shortcut or alias</strong>. It points to the <em>name</em> of a file, not its inode. If the original is deleted, the symlink breaks.</p>
                <div class="code-block">
                    <pre>$ ln -s /var/www/html /webroot      # Create a convenient shortcut at /webroot
$ ls -la /webroot                   # Shows: /webroot -> /var/www/html</pre>
                </div>
            `,
            exercises: ["Create a file called <code>test.txt</code>, then create a symlink to it using <code>ln -s test.txt link.txt</code>. Delete <code>test.txt</code> and see what happens to <code>link.txt</code>."],
            quiz: {
                question: "What is the key difference between a hard link and a symbolic (soft) link?",
                options: ["Hard links can only link directories", "Soft links point to the inode directly, hard links point to the name", "Hard links point to the same inode; soft links point to the filename", "They are functionally identical"],
                answer: 2
            }
        },
        {
            title: "Disk Space Management",
            content: `
                <h1>Monitoring Space Consumption</h1>
                <p>A full disk is one of the most common causes of server crashes and application failures.</p>
                <h2>df (Disk Free)</h2>
                <p>Shows overall available space per mounted filesystem/partition.</p>
                <div class="code-block">
                    <pre>$ df -h                    # Human readable: shows how full every partition is</pre>
                </div>
                <h2>du (Disk Usage)</h2>
                <p>Drills down to see <em>which specific directories and files</em> are consuming the space.</p>
                <div class="code-block">
                    <pre>$ du -sh /var/log/*        # See the sizes of everything in the log directory
$ du -sh /* 2>/dev/null   # A quick health check: see the top-level folder sizes from root</pre>
                </div>
                <h2>Finding Space Hogs</h2>
                <div class="code-block">
                    <pre>$ du -ah /home | sort -rh | head -20    # Find the 20 largest files/folders in /home</pre>
                </div>
            `,
            exercises: ["Run <code>df -h</code> on your system. Is any partition above 80% full? That's the warning threshold for a production server."],
            quiz: {
                question: "You need to find which specific subdirectory within /var is consuming the most disk space. Which command is best suited?",
                options: ["df -h /var", "lsblk /var", "du -sh /var/*", "fdisk /var"],
                answer: 2
            }
        },
        {
            title: "Swap Space",
            content: `
                <h1>Overflow RAM on Disk</h1>
                <p><strong>Swap</strong> is a designated area of the hard drive that the Linux kernel uses as overflow memory when physical RAM is full. It is much slower than RAM but prevents Out-Of-Memory (OOM) crashes.</p>
                <h2>Creating a Swap File</h2>
                <p>A permanent swap partition is configured at install time, but you can add a <strong>swap file</strong> to an existing system without repartitioning!</p>
                <div class="code-block">
                    <pre>$ sudo fallocate -l 4G /swapfile    # Create a 4 Gigabyte empty file
$ sudo chmod 600 /swapfile          # Secure it so only root can read it
$ sudo mkswap /swapfile             # Tell the kernel this file is a swap area
$ sudo swapon /swapfile             # Activate the new swap immediately
$ free -h                           # Verify the swap total increased!</pre>
                </div>
            `,
            exercises: ["Run <code>free -h</code> and inspect the 'Swap' row. Is any swap currently in use? Heavy swap usage signals the system is under memory pressure."],
            quiz: {
                question: "What is the purpose of Linux Swap space?",
                options: ["A backup of the RAM content", "A disk area used as overflow memory when RAM is full", "Temporary file storage for /tmp", "A specialized filesystem for logs"],
                answer: 1
            }
        },
        {
            title: "LVM (Logical Volume Manager)",
            content: `
                <h1>Flexible Storage Abstraction</h1>
                <p>Traditional disk partitions are rigid — you can't easily resize them without downtime. <strong>LVM</strong> (Logical Volume Manager) adds a flexible virtualization layer between physical disks and the filesystem.</p>
                <h2>Key LVM Concepts</h2>
                <ul>
                    <li><strong>Physical Volume (PV):</strong> A raw disk or partition you "donate" to LVM (e.g., <code>/dev/sdb</code>).</li>
                    <li><strong>Volume Group (VG):</strong> A pool combining one or more PVs into one large, unified resource.</li>
                    <li><strong>Logical Volume (LV):</strong> A flexible partition carved out from the VG. This is what you format and mount.</li>
                </ul>
                <div class="code-block">
                    <pre>$ sudo pvcreate /dev/sdb           # Create a Physical Volume from /dev/sdb
$ sudo vgcreate my_vg /dev/sdb    # Create a Volume Group called 'my_vg'
$ sudo lvcreate -L 50G -n data my_vg  # Carve a 50GB Logical Volume named 'data'
$ sudo lvextend -L +20G /dev/my_vg/data  # Grow the volume by 20GB ONLINE (no downtime!)</pre>
                </div>
            `,
            exercises: ["Run <code>sudo lvs</code> or <code>sudo pvs</code> to check if LVM is already configured on your system."],
            quiz: {
                question: "What is LVM's key advantage over traditional disk partitions?",
                options: ["LVM partitions run faster", "LVM allows logical volumes to be resized dynamically without downtime", "LVM prevents data loss", "LVM is required for ext4"],
                answer: 1
            }
        }
    ],
    "Boot & Kernel": [
        {
            title: "BIOS, UEFI & POST",
            content: `
                <h1>Before Linux Loads</h1>
                <p>When you press the power button, it's the <strong>firmware</strong> that wakes up first — long before the operating system even knows you exist.</p>
                <h2>POST (Power-On Self-Test)</h2>
                <p>The very first thing the firmware does is run POST: a rapid health check on the CPU, RAM, storage, and graphics card to confirm everything is wired correctly.</p>
                <h2>BIOS vs UEFI</h2>
                <ul>
                    <li><strong>BIOS (Legacy):</strong> The original 1970s firmware standard. 16-bit, max 2TB drives, MBR partition tables only.</li>
                    <li><strong>UEFI (Modern):</strong> Replaced BIOS in ~2010. Supports GPT disks up to 9ZB, Secure Boot protection, and has its own built-in shell.</li>
                </ul>
                <div class="code-block">
                    <pre>$ sudo dmidecode -t bios     # View detailed BIOS/UEFI version and vendor from the firmware</pre>
                </div>
            `,
            exercises: ["Run <code>sudo dmidecode -t bios</code> to read the raw firmware version of your motherboard without rebooting."],
            quiz: {
                question: "What is the key advantage of UEFI over legacy BIOS?",
                options: ["UEFI runs faster games", "UEFI supports GPT disks beyond 2TB and includes Secure Boot", "UEFI only works with Linux", "UEFI has no graphics interface"],
                answer: 1
            }
        },
        {
            title: "GRUB Bootloader",
            content: `
                <h1>The Boot Menu: GRUB</h1>
                <p>After UEFI/BIOS finds the boot drive, control is handed to the <strong>GRUB bootloader</strong> (GRand Unified Bootloader). GRUB presents the OS/kernel selection menu, then loads whichever kernel you choose into RAM.</p>
                <h2>Interacting with GRUB</h2>
                <p>When the kernel update goes wrong, administrators edit the GRUB menu at boot time to select an older working kernel, or to add boot parameters.</p>
                <div class="code-block">
                    <pre>$ cat /boot/grub/grub.cfg         # View the generated GRUB configuration
$ sudo nano /etc/default/grub     # Edit GRUB defaults (e.g., add splash=0 for verbose boot)
$ sudo update-grub                # Re-generate grub.cfg from templates (Debian/Ubuntu)
$ sudo grub2-mkconfig -o /boot/grub2/grub.cfg   # Red Hat equivalent</pre>
                </div>
            `,
            exercises: ["View your <code>/boot/grub/grub.cfg</code> file. Find the 'menuentry' blocks that represent each bootable kernel installed."],
            quiz: {
                question: "After editing /etc/default/grub, which command must you run to apply changes by regenerating the GRUB configuration file?",
                options: ["systemctl restart grub", "reboot", "sudo update-grub", "grub --apply"],
                answer: 2
            }
        },
        {
            title: "The Linux Kernel",
            content: `
                <h1>The Core of the OS</h1>
                <p>The Linux <strong>Kernel</strong> is the innermost layer of the operating system. It mediates every interaction between software and hardware. GRUB loads the compressed kernel image into RAM and hands it control.</p>
                <h2>Kernel Initialization</h2>
                <ol>
                    <li>Kernel unpacks itself and initializes core subsystems (memory, interrupts).</li>
                    <li>Mounts the <strong>initramfs</strong> (initial RAM filesystem) — a temporary mini root filesystem with just enough tools to mount the real root partition.</li>
                    <li>Mounts the real root filesystem (<code>/</code>) from disk.</li>
                    <li>Starts the init system (<code>systemd</code>) as PID 1.</li>
                </ol>
                <div class="code-block">
                    <pre>$ uname -r                         # Print the exact running kernel version
$ uname -a                         # Print all system info (kernel, arch, hostname)
$ ls /boot                         # See all installed kernel files</pre>
                </div>
            `,
            exercises: ["Run <code>uname -a</code> to print your full system information including kernel version, architecture, and compile date."],
            quiz: {
                question: "What is the purpose of the 'initramfs' during the early stages of Linux boot?",
                options: ["It's a GUI boot screen", "It's a temporary mini-filesystem giving the kernel tools to load the real root filesystem", "It initializes hardware drivers permanently", "It is the main swap partition"],
                answer: 1
            }
        },
        {
            title: "Kernel Modules",
            content: `
                <h1>Loadable Drivers</h1>
                <p>Including every possible hardware driver inside one massive kernel binary would make it enormous. Instead, Linux uses <strong>kernel modules</strong> — separate driver files that can be dynamically loaded and unloaded into the running kernel without rebooting.</p>
                <div class="code-block">
                    <pre>$ lsmod                           # List all currently loaded kernel modules
$ modinfo bluetooth               # View detailed info (author, license) about a module
$ sudo modprobe bluetooth         # Safely load the bluetooth driver + its dependencies
$ sudo modprobe -r bluetooth      # Safely UNLOAD the bluetooth driver</pre>
                </div>
                <div class="tip">To make a module load automatically on every boot, add its name to a file in <code>/etc/modules-load.d/</code>.</div>
            `,
            exercises: ["Run <code>lsmod | wc -l</code> to count how many kernel modules are currently loaded on your system."],
            quiz: {
                question: "Which command safely loads a kernel module AND automatically resolves and loads any dependencies it requires?",
                options: ["lsmod", "insmod", "modprobe", "loadmod"],
                answer: 2
            }
        },
        {
            title: "systemd and Targets",
            content: `
                <h1>The Init System</h1>
                <p>Once the kernel is loaded, it starts <strong>systemd</strong> (PID 1). Systemd then starts all services, mounts drives, and configures the network in parallel — making boot times dramatically faster than older init systems.</p>
                <h2>Targets (Replacing Runlevels)</h2>
                <p>Systemd uses <strong>targets</strong> to define what state the system boots into, replacing the old SysV runlevels.</p>
                <div class="code-block">
                    <pre>$ systemctl get-default           # See what target (mode) the system boots into
$ sudo systemctl set-default multi-user.target   # Boot into text-only mode (no GUI)
$ sudo systemctl isolate graphical.target        # Switch to graphical mode RIGHT NOW</pre>
                </div>
            `,
            exercises: ["Run <code>systemctl get-default</code> to see if your machine boots into a <code>graphical.target</code> (desktop) or <code>multi-user.target</code> (server)."],
            quiz: {
                question: "Which command shows the current default systemd target that the system boots into?",
                options: ["systemctl status", "systemctl get-default", "runlevel", "init show"],
                answer: 1
            }
        },
        {
            title: "Managing Services (systemctl)",
            content: `
                <h1>systemctl: The Service Manager</h1>
                <p>The primary tool for interacting with systemd is <code>systemctl</code>. You use it to start, stop, enable, and diagnose services (background daemons).</p>
                <h2>Essential Commands</h2>
                <div class="code-block">
                    <pre>$ sudo systemctl status nginx     # Full health check + recent error log
$ sudo systemctl start nginx      # Start immediately
$ sudo systemctl stop nginx       # Stop immediately
$ sudo systemctl restart nginx    # Stop and restart (brief downtime)
$ sudo systemctl reload nginx     # Reload config WITHOUT dropping connections!</pre>
                </div>
                <h2>Making Services Persistent</h2>
                <div class="code-block">
                    <pre>$ sudo systemctl enable nginx     # Start automatically on EVERY boot
$ sudo systemctl disable nginx    # Remove from boot sequence
$ sudo systemctl is-enabled nginx # Check if it is boot-enabled</pre>
                </div>
            `,
            exercises: ["Run <code>systemctl status sshd</code> to see the full status and last 10 log lines of your SSH service."],
            quiz: {
                question: "Which systemctl command reloads a service's configuration WITHOUT stopping active connections?",
                options: ["restart", "refresh", "reload", "update"],
                answer: 2
            }
        },
        {
            title: "journalctl (System Logs)",
            content: `
                <h1>The Unified Log</h1>
                <p>All systemd-managed services write their logs into the <strong>systemd Journal</strong>, a binary data store. <code>journalctl</code> is your query tool.</p>
                <div class="code-block">
                    <pre>$ journalctl -xe                   # Show recent log entries with extended explanations for errors
$ journalctl -u nginx              # Show ONLY the logs from the nginx service
$ journalctl -f                    # Follow mode: watch new log lines appear in real time
$ journalctl --since "1 hour ago" # Show only the last hour of logs
$ journalctl -p err                # Show ONLY error-level (and worse) messages</pre>
                </div>
            `,
            exercises: ["Run <code>journalctl -u sshd --since today</code> to view all SSH server log entries generated today."],
            quiz: {
                question: "Which journalctl flag filters the output to ONLY show logs from a specific service unit?",
                options: ["-s", "-f", "-u", "-p"],
                answer: 2
            }
        },
        {
            title: "Boot Troubleshooting",
            content: `
                <h1>Recovery Mode</h1>
                <p>When a system fails to boot normally — perhaps due to a filesystem error, a bad kernel module, or a broken <code>/etc/fstab</code> — you must enter recovery mode to fix it.</p>
                <h2>Entering Recovery Mode</h2>
                <ol>
                    <li>Hold <strong>Shift</strong> (BIOS) or press <strong>Esc</strong> repeatedly (UEFI) during boot to force the GRUB menu to appear.</li>
                    <li>Select <strong>'Advanced options'</strong> and then the <strong>(recovery mode)</strong> kernel entry.</li>
                    <li>Use the <code>root</code> shell option to get a <code>root</code> terminal.</li>
                </ol>
                <div class="code-block">
                    <pre>$ sudo mount -o remount,rw /       # Make the root filesystem writable in recovery mode
$ sudo fsck /dev/sda1              # Check and repair a corrupted filesystem</pre>
                </div>
            `,
            exercises: ["Research how to boot into 'single-user mode' on your specific Linux distribution's GRUB menu."],
            quiz: {
                question: "After making changes in Recovery Mode, which command ensures the root filesystem is writable before you can edit files?",
                options: ["chmod 777 /", "sudo mount -o remount,rw /", "fsck /", "systemctl start disk"],
                answer: 1
            }
        }
    ],
    "System Administration": [
        {
            title: "Automated Tasks (Cron)",
            content: `
                <h1>Scheduling with Cron</h1>
                <p>The <code>cron</code> daemon is the classic Linux task scheduler. It runs quietly in the background, executing commands at precise intervals without any human interaction.</p>
                <h2>Managing Your Crontab</h2>
                <div class="code-block">
                    <pre>$ crontab -e              # Open your personal crontab for editing
$ crontab -l              # List your scheduled jobs
$ sudo crontab -e         # Edit the root user's cron jobs</pre>
                </div>
                <h2>Crontab Syntax (5 Time Fields)</h2>
                <div class="code-block">
                    <pre># MIN  HOUR  DOM  MON  DOW   COMMAND
  30    2    *    *    *    /usr/local/bin/backup-db.sh   # Every day at 2:30 AM
  */15  *    *    *    *    /opt/scripts/healthcheck.sh   # Every 15 minutes
  0     9    *    *    1-5  /home/user/morning-report.sh  # Weekdays at 9 AM
# DOM=Day of Month, DOW=Day of Week (0=Sunday)</pre>
                </div>
            `,
            exercises: ["Use the online tool <a href='https://crontab.guru' target='_blank'>crontab.guru</a> to decipher the cron expression <code>0 18 * * 1-5</code>. When does it run?"],
            quiz: {
                question: "In the cron expression `*/15 * * * *`, what does `*/15` in the minute field mean?",
                options: ["Run at minute 15 exactly", "Run exactly 15 times per day", "Run every 15 minutes", "Run for 15 minutes"],
                answer: 2
            }
        },
        {
            title: "Systemd Timers",
            content: `
                <h1>The Modern Alternative to Cron</h1>
                <p>Systemd provides its own, more powerful timer mechanism. Unlike cron, systemd timers log output to the journal, handle missed events on next boot, and support powerful time expressions.</p>
                <h2>Anatomy of a Timer</h2>
                <p>Each timer requires two files: a <code>.timer</code> unit and a matching <code>.service</code> unit.</p>
                <div class="code-block">
                    <pre>$ systemctl list-timers --all       # See all system timers and their next trigger time
$ sudo systemctl enable --now mytask.timer   # Activate and start a timer immediately</pre>
                </div>
                <div class="tip">Unlike cron, a systemd timer with <code>Persistent=true</code> will run missed jobs automatically when the machine next boots up, making it perfect for laptops.</div>
            `,
            exercises: ["Run <code>systemctl list-timers</code> to see all active systemd timers, including important system maintenance tasks like <code>apt-daily.timer</code>."],
            quiz: {
                question: "What key advantage do systemd timers have over cron jobs?",
                options: ["They run faster", "They can run missed jobs on next boot and log to the journal", "They support more complex time schedules", "All of the above"],
                answer: 1
            }
        },
        {
            title: "System Logging",
            content: `
                <h1>Where to Find Evidence</h1>
                <p>When crashes happen or systems get breached, forensic analysis starts in the logs.</p>
                <h2>Traditional Text Logs (/var/log)</h2>
                <div class="code-block">
                    <pre>$ tail -f /var/log/syslog              # Follow the master system log in real-time
$ grep "Failed password" /var/log/auth.log  # Hunt for SSH brute-force evidence</pre>
                </div>
                <h2>Important Log Files</h2>
                <ul>
                    <li><code>/var/log/syslog</code> (Debian) or <code>/var/log/messages</code> (RedHat) — General system activity.</li>
                    <li><code>/var/log/auth.log</code> (Debian) or <code>/var/log/secure</code> (RedHat) — All authentication events.</li>
                    <li><code>/var/log/kern.log</code> — Kernel-level events and driver messages.</li>
                    <li><code>/var/log/dpkg.log</code> — History of every package installed or removed.</li>
                </ul>
            `,
            exercises: ["Run <code>grep 'sudo' /var/log/auth.log | tail -20</code> to see the last 20 sudo commands executed on the system."],
            quiz: {
                question: "Which log file on a Debian/Ubuntu system records all authentication events, including failed SSH logins?",
                options: ["/var/log/syslog", "/var/log/kern.log", "/var/log/auth.log", "/var/log/messages"],
                answer: 2
            }
        },
        {
            title: "Log Rotation (logrotate)",
            content: `
                <h1>Preventing Log Files from Filling Disks</h1>
                <p>Log files grow forever. The <code>logrotate</code> utility automatically renames, compresses, and eventually deletes old log files, preventing your <code>/var/log</code> partition from filling up and crashing the server.</p>
                <div class="code-block">
                    <pre>$ cat /etc/logrotate.conf             # View the global default logrotate configuration
$ ls /etc/logrotate.d/               # Per-application rotation rules (nginx, apache, etc.)
$ sudo logrotate -d /etc/logrotate.conf   # Dry-run: see what WOULD happen without doing it</pre>
                </div>
                <h2>A Sample Rule</h2>
                <div class="code-block">
                    <pre>/var/log/nginx/access.log {
    weekly
    rotate 52
    compress
    missingok
}</pre>
                </div>
            `,
            exercises: ["Look inside <code>/etc/logrotate.d/</code> to see how a specific service's log rotation is configured."],
            quiz: {
                question: "What is the primary purpose of the logrotate utility?",
                options: ["Monitor logs for errors", "Parse logs and send alerts", "Automatically compress and remove old log files to save disk space", "Forward logs to a remote server"],
                answer: 2
            }
        },
        {
            title: "Resource Monitoring",
            content: `
                <h1>Watching System Health</h1>
                <p>A responsible sysadmin constantly checks CPU, RAM, and load average to catch performance problems before they become outages.</p>
                <div class="code-block">
                    <pre>$ top                   # Classic real-time process and resource monitor
$ htop                  # Enhanced interactive version of top (requires install)
$ vmstat 5              # Show virtual memory, CPU, and I/O stats every 5 seconds
$ iostat -x 5           # Show extended disk I/O statistics every 5 seconds
$ sar -u 5 10           # Sample CPU utilization 10 times, every 5 seconds (from sysstat)</pre>
                </div>
                <div class="tip">The <strong>Load Average</strong> (shown by top and vmstat) represents how many processes are waiting for CPU. On a 4-core machine, a load above 4 means the CPU is overwhelmed.</div>
            `,
            exercises: ["Run <code>htop</code> and press <code>F6</code> to sort by Memory usage. Identify which processes are consuming the most RAM."],
            quiz: {
                question: "On a server with 4 CPU cores, approximately what load average value indicates the CPUs are saturated (100% utilized)?",
                options: ["1.0", "4.0", "0.25", "100"],
                answer: 1
            }
        },
        {
            title: "Backup Strategies (tar & rsync)",
            content: `
                <h1>The Sysadmin's Insurance Policy</h1>
                <p>You need two types of backups: full archives for disaster recovery, and incremental syncs for changes.</p>
                <h2>Full Archive (tar)</h2>
                <div class="code-block">
                    <pre>$ tar -czvf /backup/website-$(date +%F).tar.gz /var/www/html/
# c=Create, z=gzip compress, v=Verbose, f=output filename
# Result: website-2026-03-07.tar.gz</pre>
                </div>
                <h2>Incremental Sync (rsync)</h2>
                <p><code>rsync</code> copies only the <em>differences</em> since the last backup — extremely fast for large directories.</p>
                <div class="code-block">
                    <pre>$ rsync -avz /var/www/html/ user@backupserver:/backups/html/
# -a=Archive mode (preserves permissions/times), v=Verbose, z=compress in transit</pre>
                </div>
            `,
            exercises: ["Create a compressed tar backup of your <code>/etc</code> directory using <code>sudo tar -czvf /tmp/etc-backup.tar.gz /etc</code>."],
            quiz: {
                question: "Why is rsync preferred over a simple tar+scp for repeated backups of large directories?",
                options: ["rsync is more secure", "rsync only transfers changed files, making it much faster for incremental updates", "rsync creates a single archive file", "rsync is built into the kernel"],
                answer: 1
            }
        },
        {
            title: "Disk Integrity (fsck)",
            content: `
                <h1>Checking and Repairing Filesystems</h1>
                <p>Improper shutdowns, power failures, or hardware errors can cause filesystem corruption. <code>fsck</code> (File System Consistency Check) diagnoses and repairs these issues.</p>
                <div class="note">You <strong>MUST</strong> unmount or use a read-only partition before running fsck. Running it on a live mounted filesystem is extremely dangerous!</div>
                <div class="code-block">
                    <pre>$ sudo umount /dev/sdb1              # Step 1: Unmount the suspicious partition
$ sudo fsck -n /dev/sdb1            # Step 2: Dry run - find errors without fixing
$ sudo fsck -y /dev/sdb1            # Step 3: Interactive repair (auto-yes all fixes)</pre>
                </div>
            `,
            exercises: ["View your system's automatically scheduled filesystem check history by running <code>sudo tune2fs -l /dev/sda1 | grep 'Last checked'</code>."],
            quiz: {
                question: "What critical precaution must be taken BEFORE running fsck on a partition?",
                options: ["Reboot the system first", "The partition must be unmounted", "Backup the partition table with fdisk", "Enable journaling first"],
                answer: 1
            }
        },
        {
            title: "User Auditing",
            content: `
                <h1>Who Did What, and When?</h1>
                <p>In multi-user environments, accountability is critical. These tools tell you who is on the system and what they have done.</p>
                <div class="code-block">
                    <pre>$ who                      # Who is currently logged in RIGHT NOW
$ w                        # Like 'who' but also shows WHAT each user is actively doing
$ last                     # Full login history (read from /var/log/wtmp)
$ lastfailed               # Show failed login attempts (great for spotting attacks)
$ sudo aureport -l         # If auditd is running: full security-relevant event report
$ sudo auditctl -w /etc/passwd -p wa  # Watch for writes to /etc/passwd</pre>
                </div>
            `,
            exercises: ["Run <code>last | head -20</code> to see the last 20 login sessions, including remote IP addresses."],
            quiz: {
                question: "Which command shows not only who is logged in, but also what command they are currently executing?",
                options: ["who", "last", "w", "users"],
                answer: 2
            }
        }
    ],
    "Networking": [
        {
            title: "IP Addressing & Interfaces",
            content: `
                <h1>Network Interfaces</h1>
                <p>Every network interface (Ethernet, WiFi, loopback) is assigned an IP address. The modern tool is <code>ip</code>, replacing the deprecated <code>ifconfig</code>.</p>
                <div class="code-block">
                    <pre>$ ip addr                  # Show all interfaces and their assigned IP addresses
$ ip addr show eth0        # Show info for a specific interface only
$ ip route                 # Show the routing table (find the default gateway)
$ ifconfig                 # Legacy tool (install via net-tools if missing)</pre>
                </div>
                <h2>Common Interface Names</h2>
                <ul>
                    <li><code>lo</code> — Loopback (127.0.0.1, points back to yourself).</li>
                    <li><code>eth0</code>, <code>enp3s0</code> — Wired Ethernet.</li>
                    <li><code>wlan0</code>, <code>wlp2s0</code> — Wireless (WiFi).</li>
                </ul>
            `,
            exercises: ["Run <code>ip addr</code> and identify the IP of your primary network card. Is it a private (192.168.x.x / 10.x.x.x) or public IP?"],
            quiz: {
                question: "Which modern command replaces the deprecated 'ifconfig' for viewing IP addresses on Linux?",
                options: ["netstat", "ip addr", "route", "arp"],
                answer: 1
            }
        },
        {
            title: "Connectivity Testing (ping & traceroute)",
            content: `
                <h1>Diagnosing Network Paths</h1>
                <p>Before blaming code, always verify the network path is actually functional.</p>
                <div class="code-block">
                    <pre>$ ping -c 4 google.com         # Send 4 ICMP packets to test reachability
$ traceroute google.com        # Show every hop (router) the packet travels through
$ tracepath google.com         # Like traceroute but no root required
$ mtr google.com               # Combines ping + traceroute into a live, dynamic view</pre>
                </div>
            `,
            exercises: ["Run <code>mtr google.com</code>. Watch the packet loss column. Any non-zero value at a hop indicates potential congestion or filtering."],
            quiz: {
                question: "Which command shows the entire path packets travel from your computer to a remote host, one router 'hop' at a time?",
                options: ["ping", "ip route", "traceroute", "ss"],
                answer: 2
            }
        },
        {
            title: "DNS & Name Resolution",
            content: `
                <h1>Translating Names to IPs</h1>
                <p>DNS (Domain Name System) converts human-readable domains (google.com) into machine-readable IP addresses (142.250.80.78).</p>
                <div class="code-block">
                    <pre>$ dig google.com               # Full DNS lookup with detailed section output
$ dig google.com MX            # Look up MX (mail exchange) records specifically
$ host google.com              # Simpler DNS lookup command
$ nslookup google.com          # Legacy DNS lookup (still widely used)
$ cat /etc/resolv.conf         # See which DNS server your system queries</pre>
                </div>
            `,
            exercises: ["Run <code>dig google.com</code> and find the 'ANSWER SECTION'. Note the IP address returned and compare it across different networks."],
            quiz: {
                question: "Which configuration file specifies the DNS server IP address that the Linux system uses for name resolution?",
                options: ["/etc/hosts", "/etc/dns.conf", "/etc/resolv.conf", "/etc/network/dns"],
                answer: 2
            }
        },
        {
            title: "Ports & Active Connections (ss)",
            content: `
                <h1>Socket Statistics</h1>
                <p><code>ss</code> (Socket Statistics) is the modern replacement for <code>netstat</code>. It lists active network connections and which programs are listening on which ports.</p>
                <div class="code-block">
                    <pre>$ ss -tulpn                    # TCP/UDP, Listening ports, Process names, Numeric (no DNS resolve)
$ ss -s                        # Quick summary of socket counts by type
$ netstat -tulpn               # Legacy equivalent using the net-tools package</pre>
                </div>
                <div class="tip">The -l flag filters to only show <strong>Listening</strong> ports. Any port that appears in <code>ss -tulpn</code> is potentially accessible to the network and should be firewall-reviewed!</div>
            `,
            exercises: ["Run <code>sudo ss -tulpn</code> and look at the 'Process' column. Identify what process is listening on port 22 (SSH)."],
            quiz: {
                question: "Which command shows all open TCP/UDP ports along with the process name that owns each listening socket?",
                options: ["ping -l", "dig --ports", "ss -tulpn", "ip addr show"],
                answer: 2
            }
        },
        {
            title: "SSH (Secure Shell)",
            content: `
                <h1>Remote Server Management</h1>
                <p><code>ssh</code> uses strong encryption to allow you to securely log into and run commands on remote servers across untrusted networks.</p>
                <div class="code-block">
                    <pre>$ ssh user@192.168.1.100         # Connect by IP
$ ssh user@server.example.com -p 2222   # Connect on custom port
$ scp file.txt user@server:/remote/path/  # Securely copy a file TO the server
$ scp user@server:/remote/file.txt ./    # Securely copy a file FROM the server</pre>
                </div>
                <h2>Key-Based Authentication (No Passwords!)</h2>
                <div class="code-block">
                    <pre>$ ssh-keygen -t ed25519            # Generate a modern cryptographic key pair
$ ssh-copy-id user@server          # Push your public key to the server</pre>
                </div>
            `,
            exercises: ["Run <code>ssh-keygen -t ed25519</code> to create an SSH key pair. Inspect the public key content with <code>cat ~/.ssh/id_ed25519.pub</code>."],
            quiz: {
                question: "Which command securely copies a file between systems using the SSH protocol?",
                options: ["rcp", "ftp", "scp", "cp -r"],
                answer: 2
            }
        },
        {
            title: "Firewall Basics (UFW)",
            content: `
                <h1>Controlling Network Access</h1>
                <p><strong>UFW</strong> (Uncomplicated Firewall) is the friendly front-end for the powerful but complex <code>iptables</code> kernel firewall system. It lets you define which traffic is permitted with simple, readable rules.</p>
                <div class="code-block">
                    <pre>$ sudo ufw status verbose        # View all active rules and the default policy
$ sudo ufw default deny incoming # GOLDEN RULE: Block everything by default
$ sudo ufw default allow outgoing # Allow all outbound connections by default
$ sudo ufw allow ssh             # Allow SSH (port 22) through the firewall
$ sudo ufw allow 80/tcp          # Allow HTTP web traffic
$ sudo ufw allow 443/tcp         # Allow HTTPS encrypted web traffic
$ sudo ufw enable                # Activate the firewall</pre>
                </div>
            `,
            exercises: ["Run <code>sudo ufw status</code>. Is your firewall active? (WARNING: Before enabling, ALWAYS run <code>sudo ufw allow ssh</code> first if on a remote server!)"],
            quiz: {
                question: "What is the 'golden rule' when setting up a new UFW firewall policy?",
                options: ["Allow all incoming traffic first, then deny specific threats", "Deny all incoming traffic by default, then selectively allow required services", "Disable the firewall during setup", "Allow all ports under 1024"],
                answer: 1
            }
        },
        {
            title: "Network File Transfer (rsync, wget, curl)",
            content: `
                <h1>Moving Data Across Networks</h1>
                <div class="code-block">
                    <pre>$ wget https://example.com/file.tar.gz          # Download a file from the internet
$ curl -O https://example.com/file.zip          # Download silently with curl
$ curl -I https://google.com                    # Fetch ONLY the HTTP response headers
$ rsync -avz /local/dir/ user@server:/remote/  # Sync a directory (only changed files)</pre>
                </div>
                <div class="tip"><code>rsync</code> is the gold standard for network syncing because it computes checksums and only transfers <em>differences</em>, making repeat transfers extremely fast.</div>
            `,
            exercises: ["Use <code>curl -I https://google.com</code> to view the HTTP response headers. Note the 'Content-Type', 'Server', and redirect status codes returned."],
            quiz: {
                question: "Which tool synchronizes directories over a network by only transferring files that have changed since the last sync?",
                options: ["wget", "ftp", "curl", "rsync"],
                answer: 3
            }
        },
        {
            title: "Network Monitoring (tcpdump & netstat)",
            content: `
                <h1>Packet Capture & Analysis</h1>
                <p><code>tcpdump</code> is a command-line packet analyzer. It captures raw network traffic flowing through an interface, which is invaluable for debugging protocols or detecting intrusions.</p>
                <div class="code-block">
                    <pre>$ sudo tcpdump -i eth0              # Capture all packets on interface eth0
$ sudo tcpdump -i eth0 port 80     # Capture ONLY HTTP traffic
$ sudo tcpdump -i eth0 -w file.pcap  # Save capture to file (open in Wireshark)
$ netstat -rn                       # Show the kernel routing table (legacy)</pre>
                </div>
            `,
            exercises: ["Run <code>sudo tcpdump -i lo port 22 -c 5</code> and then SSH to localhost in another terminal. Watch the packets appear!"],
            quiz: {
                question: "Which tcpdump flag saves captured packets to a file for later analysis in a tool like Wireshark?",
                options: ["-f", "-r", "-w", "-s"],
                answer: 2
            }
        }
    ],
    "Security": [
        {
            title: "User Security & Password Policies",
            content: `
                <h1>Account Hardening</h1>
                <p>The first line of defense is strong, expiring passwords. If an account is compromised, you must be able to detect it and lock it down immediately.</p>
                <div class="code-block">
                    <pre>$ sudo passwd john             # Manually set John's password
$ sudo chage -l john          # View John's password aging configuration
$ sudo chage -M 90 john       # Set maximum password age to 90 days
$ sudo chage -E 2026-12-31 john       # Set hard account expiration date
$ sudo passwd -l john         # LOCK John's account (prepends ! to hash)
$ sudo passwd -u john         # UNLOCK John's account</pre>
                </div>
            `,
            exercises: ["Run <code>chage -l $USER</code> to inspect your own account's password aging policy."],
            quiz: {
                question: "Which command is used to view or change password expiration and account aging policies?",
                options: ["passwd", "usermod", "chage", "chmod"],
                answer: 2
            }
        },
        {
            title: "File Permissions & ACLs",
            content: `
                <h1>Discretionary Access Control</h1>
                <p>Linux uses three permission classes (owner, group, others) and three permission types (read, write, execute). This provides basic Discretionary Access Control (DAC).</p>
                <div class="code-block">
                    <pre>$ chmod 600 ~/.ssh/id_rsa     # Owner read/write, no one else (MUST for SSH keys!)
$ chmod 755 /usr/local/bin/myscript  # Owner rwx, group+others rx (standard script)
$ chown alice:devs project/   # Change owner to alice, group to devs
$ getfacl file.txt            # View extended ACL (if set)
$ setfacl -m u:bob:r-- file.txt      # Grant bob read-only access via ACL</pre>
                </div>
                <div class="note"><code>chmod 777</code> on a file grants <strong>all</strong> users full read/write/execute. On a server, this is almost always a dangerous misconfiguration!</div>
            `,
            exercises: ["Check your SSH private key with <code>ls -la ~/.ssh/id_rsa</code>. It MUST show <code>-rw-------</code> (600). SSH will refuse to use it if it's world-readable!"],
            quiz: {
                question: "Which permission value (in octal notation) gives only the file owner read and write access, and denies all access to group and others?",
                options: ["755", "644", "600", "777"],
                answer: 2
            }
        },
        {
            title: "SSH Hardening",
            content: `
                <h1>Securing Remote Access</h1>
                <p>SSH exposure to the internet makes it a constant target for brute-force attacks. These configuration changes significantly reduce the attack surface.</p>
                <div class="code-block">
                    <pre># Edit /etc/ssh/sshd_config with sudo and change:
PermitRootLogin no             # Never allow root to log in directly
PasswordAuthentication no      # Disable password auth, require keys only
Port 2222                      # Change the default port to reduce bot noise
AllowUsers alice bob           # Whitelist specific users
$ sudo systemctl restart sshd  # Apply changes</pre>
                </div>
                <div class="tip">After disabling password auth, ensure you have working key-based auth <em>before</em> restarting sshd, or you will lock yourself out!</div>
            `,
            exercises: ["Review your SSH server configuration: <code>sudo cat /etc/ssh/sshd_config | grep -v '^#' | grep .</code>. Is PermitRootLogin set to no?"],
            quiz: {
                question: "What is the most important sshd_config change to make after setting up key-based authentication?",
                options: ["Change the default SSH port", "Set PasswordAuthentication no", "Enable X11 forwarding", "Reduce the connection timeout"],
                answer: 1
            }
        },
        {
            title: "Fail2Ban (Intrusion Prevention)",
            content: `
                <h1>Automatic IP Banning</h1>
                <p><strong>Fail2ban</strong> monitors log files for repeated authentication failures and dynamically adds firewall rules to ban attacking IP addresses for a configurable period.</p>
                <div class="code-block">
                    <pre>$ sudo apt install fail2ban          # Install on Debian/Ubuntu
$ sudo systemctl enable --now fail2ban  # Enable and start it
$ sudo fail2ban-client status           # See all active jails
$ sudo fail2ban-client status sshd      # See stats for the SSH jail (bans, failures)
$ sudo fail2ban-client set sshd unbanip 1.2.3.4  # Manually unban an IP</pre>
                </div>
                <div class="tip">The default SSH jail bans any IP that fails 5 logins within 10 minutes. You can tune <code>maxretry</code> and <code>bantime</code> in <code>/etc/fail2ban/jail.local</code>.</div>
            `,
            exercises: ["Install and start Fail2ban, then run <code>sudo fail2ban-client status sshd</code> to see how many bots are already attacking your SSH port."],
            quiz: {
                question: "What does Fail2ban do when it detects an IP address with too many failed login attempts?",
                options: ["It restarts the SSH service", "It adds a firewall rule to temporarily block that IP", "It alerts the system administrator by email", "It disables the user account"],
                answer: 1
            }
        },
        {
            title: "Firewall Rules (iptables)",
            content: `
                <h1>The Kernel Firewall</h1>
                <p><code>iptables</code> is the underlying kernel firewall framework that UFW, Fail2ban, and Docker all use under the hood. Understanding it gives you ultimate control.</p>
                <div class="code-block">
                    <pre>$ sudo iptables -L -nv           # List all rules with packet counters
$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT   # Allow SSH
$ sudo iptables -A INPUT -j DROP   # Drop everything else (MUST be last!)
$ sudo iptables-save > /etc/iptables/rules.v4   # Persist rules across reboots</pre>
                </div>
                <div class="note">iptables rules are evaluated <strong>top to bottom</strong>. The first matching rule wins. Always add specific ACCEPT rules before a global DROP rule!</div>
            `,
            exercises: ["Run <code>sudo iptables -L -nv</code> to see the low-level firewall rules currently in effect. You may see rules added by UFW or Docker."],
            quiz: {
                question: "In iptables, rules are evaluated in order. If you add a DROP all rule BEFORE your ACCEPT ssh rule, what happens?",
                options: ["SSH still works because ACCEPT rules always win", "SSH is blocked because DROP is matched first", "iptables reorders rules automatically", "Only UFW rules matter"],
                answer: 1
            }
        },
        {
            title: "SELinux & AppArmor (MAC)",
            content: `
                <h1>Mandatory Access Control</h1>
                <p>Standard Linux permissions are <em>Discretionary</em> — a compromised web server process can read any file the webserver user can access. <strong>MAC</strong> layers enforce policy-based rules that <em>kernel</em> enforces, regardless of the process's identity.</p>
                <h2>SELinux (Red Hat / Fedora)</h2>
                <div class="code-block">
                    <pre>$ sestatus                     # Check SELinux mode (Enforcing/Permissive/Disabled)
$ sudo setenforce 0            # Temporarily switch to Permissive mode (logs but doesn't block)
$ ls -Z /var/www/html/         # Show the SELinux security context of files</pre>
                </div>
                <h2>AppArmor (Ubuntu / Debian)</h2>
                <div class="code-block">
                    <pre>$ sudo aa-status               # View profiles and their modes
$ sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx  # Put nginx in enforcing mode</pre>
                </div>
            `,
            exercises: ["Run <code>sestatus</code> (Red Hat) or <code>sudo aa-status</code> (Ubuntu/Debian) to see if MAC is enabled on your system."],
            quiz: {
                question: "If a web server running as www-data is compromised, how does SELinux prevent access to /home/user/ files?",
                options: ["It monitors the process for suspicious activity", "Its policy context restricts the web server process from accessing files outside its defined scope", "It changes the file owner automatically", "It blocks all network connections"],
                answer: 1
            }
        },
        {
            title: "Audit Logging (auditd)",
            content: `
                <h1>The Security Audit Log</h1>
                <p>The Linux Audit Daemon (<code>auditd</code>) provides a comprehensive security event logging system. Unlike syslog, it cannot be silenced by a compromised process running as root (the kernel writes it directly).</p>
                <div class="code-block">
                    <pre>$ sudo systemctl status auditd         # Is the audit daemon running?
$ sudo auditctl -w /etc/passwd -p wa   # Watch /etc/passwd for writes (w) and attribute changes (a)
$ sudo ausearch -f /etc/passwd         # Search audit logs for events related to /etc/passwd
$ sudo aureport -l                     # Generate a login/authentication summary report</pre>
                </div>
            `,
            exercises: ["Run <code>sudo aureport --summary</code> to get a high-level summary of all security events recorded by the kernel audit system."],
            quiz: {
                question: "Which tool writes security audit events DIRECTLY to kernel ring buffer, making them impossible for a compromised root process to tamper with?",
                options: ["syslog", "journald", "auditd", "rsyslog"],
                answer: 2
            }
        },
        {
            title: "Vulnerability Scanning & Hardening",
            content: `
                <h1>Proactive Security Assessment</h1>
                <p>Do not wait for an incident. Regularly scan your own systems to find vulnerabilities before attackers do.</p>
                <div class="code-block">
                    <pre>$ sudo nmap -sV localhost        # Scan your own machine for open ports and service versions
$ sudo nmap -A 192.168.1.0/24   # Scan your entire local network segment
$ sudo lynis audit system        # Run a comprehensive security hardening audit report
$ sudo chkrootkit               # Scan for signs of rootkits on the running system
$ sudo rkhunter --check         # Alternative rootkit hunter scan</pre>
                </div>
            `,
            exercises: ["Install and run <code>sudo lynis audit system</code>. Review the 'Hardening index' score and the 'Suggestions' section at the end of the report."],
            quiz: {
                question: "Which tool runs a comprehensive security hardening audit of a Linux system and provides a 'Hardening Index' score?",
                options: ["nmap", "ncal", "lynis", "fail2ban"],
                answer: 2
            }
        }
    ],
    "Virtualization": [
        {
            title: "Virtual Machines (KVM/QEMU)",
            content: `
                <h1>Hardware Virtualization</h1>
                <p>Virtual Machines (VMs) emulate an entire set of physical hardware, allowing you to run a full Guest OS completely disjointed from the Host OS.</p>
                <h2>The Linux Hypervisor Stack</h2>
                <ul>
                    <li><strong>KVM (Kernel-based Virtual Machine):</strong> A module built directly into the Linux kernel that allows it to function as a Type-1 hypervisor (direct hardware access).</li>
                    <li><strong>QEMU:</strong> Software that actually emulates the fake motherboards, CPUs, and disk controllers.</li>
                    <li><strong>libvirt:</strong> The management API that ties it all together.</li>
                </ul>
                <div class="code-block">
                    <pre>$ virsh list --all             # Command-line interface to list all VMs on the host
$ virsh start web_server_vm    # Start a specific VM
$ virt-manager                 # The popular graphical GUI to click-and-create VMs</pre>
                </div>
            `,
            exercises: ["Research <code>virt-manager</code>. It is the open-source equivalent to VMware Workstation or VirtualBox, but it runs natively via KVM with near bare-metal performance."],
            quiz: {
                question: "Which component of the Linux Virtualization stack is actually built directly into the core Linux kernel?",
                options: ["QEMU", "virt-manager", "libvirt", "KVM"],
                answer: 3
            }
        },
        {
            title: "Containers (Docker / Podman)",
            content: `
                <h1>OS-Level Virtualization</h1>
                <p>VMs are heavy; they require booting a second operating system. Containers are incredibly lightweight because they <strong>share the Host OS's kernel</strong> while pretending to be independent machines.</p>
                <h2>How do they work?</h2>
                <p>Linux features called <strong>Namespaces</strong> isolate the container (giving it a fake process tree, fake network), while <strong>cgroups</strong> throttle its resource usage (preventing it from using 100% CPU).</p>
                <h2>Docker Basics</h2>
                <div class="code-block">
                    <pre>$ docker pull nginx:latest       # Download the official Nginx web server image
$ docker run -d -p 8080:80 nginx # Run it detached (-d), mapping host port 8080 to container port 80
$ docker ps                      # See that it is running! (Navigate to HTTP://localhost:8080)
$ docker logs [container_id]     # View the internal output of the container
$ docker exec -it [id] /bin/bash # "SSH" directly into the running container</pre>
                </div>
            `,
            exercises: ["If you have Docker installed, run <code>docker run -it ubuntu /bin/bash</code> to instantly pop a shell inside a pristine Ubuntu sandbox. Type <code>exit</code> to destroy it."],
            quiz: {
                question: "Why do Docker containers start up in milliseconds, whereas Virtual Machines take minutes to boot?",
                options: ["Containers do not require hard drives.", "Containers share the running host kernel and skip the entire OS boot sequence.", "Containers execute in RAM only.", "Docker uses a highly compressed image format."],
                answer: 1
            }
        }
    ],
    "Monitoring & Troubleshooting": [
        {
            title: "System Diagnostics",
            content: `
                <h1>Analyzing Resource Bottlenecks</h1>
                <p>When a Linux server grinds to a halt, you need to quickly identify the constraint: Memory, Disk space, or I/O?</p>
                <h2>Memory Analysis</h2>
                <div class="code-block">
                    <pre>$ free -h          # Show RAM utilization in Human-readable format</pre>
                </div>
                <div class="note"><strong>Crucial Tip:</strong> Linux caches file data in unused RAM to dramatically speed up read times. Do not panic if the "free" column is near 0. Always look at the <strong>"available"</strong> column to see how much RAM you have left to start new applications!</div>
                <h2>Disk Space Analysis</h2>
                <div class="code-block">
                    <pre>$ df -Th           # Disk Free: View total space and filesystem Types on all drives
$ du -sh /var/log/ # Disk Usage: Calculate the total size of a specific directory
$ ncdu /           # (Optional Install) Incredible interactive tool to hunt down large files</pre>
                </div>
                <h2>I/O Performance</h2>
                <div class="code-block">
                    <pre>$ iostat -xz 1     # Monitor hard drive read/write speeds in real-time
$ vmstat 1         # Watch virtual memory swapping (if swap is high, you need more RAM)</pre>
                </div>
            `,
            exercises: ["Run <code>df -Th</code>. Identify which filesystem holds your <code>/</code> (root) directory and see what percentage is used."],
            quiz: {
                question: "When running the `free -h` command, which column indicates the true amount of RAM you have left to start new applications?",
                options: ["total", "used", "free", "available"],
                answer: 3
            }
        },
        {
            title: "Network Diagnostics",
            content: `
                <h1>The Troubleshooting Chain</h1>
                <p>If a Linux server loses network connectivity, guessing is inefficient. Systematically diagnose the OSI model layers from the bottom up.</p>
                <h2>The 5-Step Connectivity Test</h2>
                <ol>
                    <li>Are the physical cables/virtual adapters connected?
                        <pre>$ ip link show         # Look for state UP</pre></li>
                    <li>Did the DHCP server give me an IP address?
                        <pre>$ ip addr show</pre></li>
                    <li>Can I reach other machines on my local LAN? (Find gateway first)
                        <pre>$ ip route             # Find the 'default via' IP
$ ping [gateway_ip]</pre></li>
                    <li>Can packets route out to the global internet?
                        <pre>$ ping -c 4 8.8.8.8    # Ping Google's public DNS</pre></li>
                    <li>Is DNS successfully converting domain names to IP addresses?
                        <pre>$ ping -c 4 google.com
$ dig +short github.com # Directly test DNS resolution</pre></li>
                </ol>
                <div class="tip">If step 4 (ping 8.8.8.8) succeeds, but step 5 (ping google.com) fails with "Temporary failure in name resolution", your internet works but your DNS is broken. Edit <code>/etc/resolv.conf</code> to fix it.</div>
            `,
            exercises: ["Follow the 5-step test above on your own machine. Find your default gateway using <code>ip route</code> and ping it."],
            quiz: {
                question: "If you can successfully ping an external IP address (like 8.8.8.8) but cannot reach a domain name (like google.com), what is the most likely culprit?",
                options: ["Your ethernet cable is unplugged", "Your router is powered off", "Your DNS server is misconfigured or unreachable", "Your ISP blocked your IP address"],
                answer: 2
            }
        }
    ]
};