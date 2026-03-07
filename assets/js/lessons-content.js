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
    ]
};
