const modules = [
    {
        title: "Getting Started",
        desc: "What is Linux? Get started with choosing a distribution and installation.",
        icon: "getting_started",
        question: "Who is the original creator of the Linux kernel?",
        options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Richard Stallman"],
        answer: 1
    },
    {
        title: "Command Line",
        desc: "Learn the fundamentals of the command line, navigating files, and more.",
        icon: "command_line",
        question: "Which command shows the absolute path of your current working directory?",
        options: ["dir", "whereami", "pwd", "ls -p"],
        answer: 2
    },
    {
        title: "Text-Fu",
        desc: "Learn basic text manipulation and navigation.",
        icon: "text_fu",
        question: "What flag would you use with 'rm' to recursively delete a directory?",
        options: ["-r", "-d", "-all", "-f"],
        answer: 0
    },
    {
        title: "Advanced Text-Fu",
        desc: "Navigate text like a Linux spider monkey with Vim and Emacs.",
        icon: "advanced_text_fu",
        question: "Which command is used to search for a specific pattern inside a file?",
        options: ["find", "search", "grep", "look"],
        answer: 2
    },
    {
        title: "User Management",
        desc: "Learn about user roles and management.",
        icon: "user_management",
        question: "What numeric mode represents 'rwxr-xr-x' permissions?",
        options: ["644", "777", "755", "700"],
        answer: 2
    },
    {
        title: "Permissions",
        desc: "Learn about permission levels and modifying permissions.",
        icon: "permissions",
        question: "What is the command to view the reference manual for 'ls'?",
        options: ["help ls", "ls --manual", "man ls", "info ls"],
        answer: 2
    },
    {
        title: "Processes",
        desc: "Learn about the running processes on the system.",
        icon: "processes",
        question: "Which tool is used to securely log into a remote Linux machine?",
        options: ["telnet", "ssh", "ftp", "rlogin"],
        answer: 1
    },
    {
        title: "Packages",
        desc: "Learn all about dpkg, apt-get, rpm, and yum package management tools.",
        icon: "packages",
        question: "What 'shebang' line should be at the top of a standard bash script?",
        options: ["#!/bin/sh", "#!/usr/bin/bash", "#!/bin/bash", "Any of these"],
        answer: 3
    }
];

// Lesson Content Data
const lessonsContent = {
    "Getting Started": [
        {
            title: "Linux History",
            content: `
                <h1>1. Linux History</h1>
                <p>Welcome to your <strong>Linux Journey</strong>! If you're ready to dive into the powerful world of Linux, you've come to the right place. My name is Penguin Pete, and I'll be your guide. To get started, let's explore a brief history of Linux.</p>
                <h2>The Predecessors of Linux</h2>
                <p>To understand how Linux was created, we must go back to 1969 when Ken Thompson and Dennis Ritchie of Bell Laboratories developed the UNIX operating system. It was later rewritten in the C programming language, which made it portable and led to its widespread adoption.</p>
                <div class="timeline-img">
                    <img src="assets/images/linux_timeline.png" alt="Linux History Timeline">
                </div>
                <p>Over a decade later, Richard Stallman initiated the GNU (a recursive acronym for "GNU's Not UNIX") project. The goal was to create a completely free and open-source UNIX-like operating system. While the GNU project produced many essential components, including the GNU General Public License (GPL), its own kernel, named Hurd, was not completed in time.</p>
                <h2>The Role of the Kernel</h2>
                <p>The kernel is the core component of an operating system. It acts as a bridge, allowing the hardware to communicate with the software. The kernel manages system resources, such as the CPU, memory, and peripheral devices. Essentially, the kernel controls everything that happens on your system. While other UNIX-like systems such as BSD and MINIX were being developed, they all lacked a freely available and unified kernel.</p>
            `,
            exercises: [
                "Getting Started with Linux - Begin your Linux journey by learning essential terminal commands like echo, date, and basic calculations.",
                "Your First Linux Lab - This introductory lab guides you through the classic 'Hello, World!' program in Linux."
            ],
            quiz: {
                question: "Who developed the Linux kernel?",
                options: ["Richard Stallman", "Linus Torvalds", "Ken Thompson", "Dennis Ritchie"],
                answer: 1
            }
        },
        {
            title: "Choosing a Distribution",
            content: `
                <h1>2. Choosing a Linux Distribution</h1>
                <p>A Linux distribution (often shortened to "distro") is an operating system made as a collection of software, including the Linux kernel and, often, a package management system.</p>
                <p>With hundreds of distributions available, choosing your first one can be overwhelming. Here are the most popular families:</p>
                <ul>
                    <li><strong>Debian Family:</strong> Known for stability. Includes Ubuntu, Linux Mint, and Kali Linux.</li>
                    <li><strong>Red Hat Family:</strong> Enterprise-focused. Includes Fedora and CentOS.</li>
                    <li><strong>Arch Family:</strong> For advanced users who want total control.</li>
                </ul>
                <p>For beginners, we highly recommend <strong>Ubuntu</strong> or <strong>Linux Mint</strong> due to their ease of use and massive community support.</p>
            `,
            exercises: [
                "Install your first distro - Try Ubuntu in a virtual machine or as a live USB.",
                "Explore the desktop environment - Learn about GNOME, KDE, and XFCE."
            ],
            quiz: {
                question: "Which distribution is highly recommended for beginners?",
                options: ["Arch Linux", "Ubuntu", "Gentoo", "Slackware"],
                answer: 1
            }
        }
    ]
};

// State
let unlockedIndex = parseInt(localStorage.getItem('linuxStudy_unlockedIndex')) || 0;
let currentModule = null;
let currentLessonIndex = 0;

const modulesGrid = document.getElementById('modulesGrid');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const quizOverlay = document.getElementById('quizOverlay');
const quizTitle = document.getElementById('quizTitle');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const closeQuiz = document.getElementById('closeQuiz');

function renderModules() {
    if (!modulesGrid) return;
    modulesGrid.innerHTML = '';
    modules.forEach((module, index) => {
        const isLocked = index > unlockedIndex;
        const isCompleted = index < unlockedIndex;

        const card = document.createElement('div');
        card.className = `module-card ${isLocked ? 'locked' : 'unlocked'} ${isCompleted ? 'completed' : ''}`;

        let statusText = 'Locked';
        let statusClass = 'locked';

        if (isCompleted) {
            statusText = 'Completed';
            statusClass = 'completed';
        } else if (!isLocked) {
            statusText = 'Available';
            statusClass = 'unlocked';
        }

        card.innerHTML = `
            <img src="assets/images/${module.icon}.png" alt="${module.title}" class="module-icon">
            <h3 class="module-title">${module.title}</h3>
            <p class="module-desc">${module.desc}</p>
            <div class="status-badge ${statusClass}">${statusText}</div>
        `;

        if (!isLocked) {
            card.onclick = () => startLesson(module.title);
        }

        modulesGrid.appendChild(card);
    });

    if (progressBar) {
        const progressPercent = Math.round((unlockedIndex / modules.length) * 100);
        progressBar.style.width = `${progressPercent}%`;
    }
}

function openQuiz(index) {
    if (index < unlockedIndex) {
        // Already completed, maybe show content instead of re-quizzing?
        // For now, let's allow re-quizzing or just show a message.
        // The prompt says "hide the quiz" once answered correctly, but let's make it accessible.
    }

    currentQuizModuleIndex = index;
    const module = modules[index];

    quizTitle.innerText = `Module ${index + 1}: ${module.title}`;
    quizQuestion.innerText = module.question;
    quizFeedback.innerText = '';
    quizFeedback.className = 'quiz-feedback';

    quizOptions.innerHTML = '';
    module.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.innerText = option;
        btn.onclick = () => checkAnswer(i);
        quizOptions.appendChild(btn);
    });

    quizOverlay.style.display = 'flex';
}

function checkAnswer(optionIndex) {
    const module = modules[currentQuizModuleIndex];
    if (optionIndex === module.answer) {
        quizFeedback.innerText = "✓ Correct! Logic unlocked.";
        quizFeedback.className = "quiz-feedback feedback-right";

        setTimeout(() => {
            if (currentQuizModuleIndex === unlockedIndex) {
                unlockedIndex++;
                localStorage.setItem('linuxStudy_unlockedIndex', unlockedIndex);
            }
            quizOverlay.style.display = 'none';
            renderModules();

            if (unlockedIndex === modules.length) {
                alert("Congratulations! You've completed all modules.");
            }
        }, 1000);
    } else {
        quizFeedback.innerText = "✗ Try again! Remember the terminal never lies.";
        quizFeedback.className = "quiz-feedback feedback-wrong";
    }
}

closeQuiz.onclick = () => {
    quizOverlay.style.display = 'none';
};

// Close on background click
quizOverlay.onclick = (e) => {
    if (e.target === quizOverlay) quizOverlay.style.display = 'none';
};

// View Management
const hubView = document.getElementById('hubView');
const linuxView = document.getElementById('linuxView');
const lessonView = document.getElementById('lessonView');
const enterLinuxBtn = document.getElementById('enterLinux');
const backToHubBtn = document.getElementById('backToHub');

const footer = document.querySelector('footer');

// i18n State
let currentLang = localStorage.getItem('aribaLang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('aribaLang', lang);
    translateUI();
    renderModules();
    if (lessonView.style.display === 'block') renderLesson();
}

function translateUI() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang].ui[key]) {
            el.innerText = translations[currentLang].ui[key];
        }
    });

    // Update switcher value
    if (langSelect) langSelect.value = currentLang;
}

const langSelect = document.getElementById('langSelect');
if (langSelect) {
    langSelect.onchange = (e) => setLanguage(e.target.value);
}

function renderModules() {
    if (!modulesGrid) return;
    modulesGrid.innerHTML = '';

    // Get translated versions of module info
    const tModules = translations[currentLang].modules;
    const tUI = translations[currentLang].ui;

    modules.forEach((module, index) => {
        const isLocked = index > unlockedIndex;
        const isCompleted = index < unlockedIndex;

        const card = document.createElement('div');
        card.className = `module-card ${isLocked ? 'locked' : 'unlocked'} ${isCompleted ? 'completed' : ''}`;

        let statusText = tUI.locked;
        let statusClass = 'locked';

        if (isCompleted) {
            statusText = tUI.completed;
            statusClass = 'completed';
        } else if (!isLocked) {
            statusText = tUI.enter_module;
            statusClass = 'unlocked';
        }

        const tModule = tModules[index] || module;

        card.innerHTML = `
            <img src="assets/images/${module.icon}.png" alt="${tModule.title}" class="module-icon">
            <h3 class="module-title">${tModule.title}</h3>
            <p class="module-desc">${tModule.desc}</p>
            <div class="status-badge ${statusClass}">${statusText}</div>
        `;

        if (!isLocked) {
            card.onclick = () => startLesson(module.title);
        }

        modulesGrid.appendChild(card);
    });

    if (progressBar) {
        const progressPercent = Math.round((unlockedIndex / modules.length) * 100);
        progressBar.style.width = `${progressPercent}%`;
    }
}

// Update startLesson to handle title mapping
function getOriginalTitle(translatedTitle) {
    const tModules = translations[currentLang].modules;
    const index = tModules.findIndex(m => m.title === translatedTitle);
    if (index !== -1) return modules[index].title;
    return translatedTitle;
}

function startLesson(moduleTitle) {
    currentModule = moduleTitle; // Store original title for content lookup
    currentLessonIndex = 0;
    showView('lesson');
    renderLesson();
}

function renderLesson() {
    const lessons = lessonsContent[currentModule] || [{ title: "Content Coming Soon", content: "<p>We are working on this content!</p>" }];
    const lesson = lessons[currentLessonIndex];
    const tUI = translations[currentLang].ui;

    // Map module title for display
    const moduleIndex = modules.findIndex(m => m.title === currentModule);
    const displayTitle = translations[currentLang].modules[moduleIndex]?.title || currentModule;

    document.getElementById('lessonModuleTitle').innerText = displayTitle;
    document.getElementById('breadcrumbModule').innerText = 'Linux';
    document.getElementById('breadcrumbTopic').innerText = lesson.title;
    document.getElementById('lessonContent').innerHTML = lesson.content;

    // Sidebar
    const subTopicList = document.getElementById('subTopicList');
    subTopicList.innerHTML = '';
    lessons.forEach((l, i) => {
        const li = document.createElement('li');
        li.className = `sub-topic-item ${i === currentLessonIndex ? 'active' : ''}`;
        li.innerHTML = `${i + 1}. ${l.title} <span class="check-mark">✓</span>`;
        li.onclick = () => {
            currentLessonIndex = i;
            renderLesson();
        };
        subTopicList.appendChild(li);
    });

    // UI Static Labels
    document.querySelector('.panel-section h3').innerText = tUI.exercises;
    document.querySelectorAll('.panel-section h3')[1].innerText = tUI.quiz;
    document.getElementById('submitLessonQuiz').innerText = tUI.submit;

    // Exercises
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';
    if (lesson.exercises) {
        lesson.exercises.forEach(ex => {
            const li = document.createElement('li');
            li.innerText = ex;
            exerciseList.appendChild(li);
        });
    } else {
        exerciseList.innerHTML = `<li>${tUI.completed}</li>`;
    }

    // Quiz
    const quizQuestion = document.getElementById('lessonQuizQuestion');
    const quizOptions = document.getElementById('lessonQuizOptions');
    const submitBtn = document.getElementById('submitLessonQuiz');

    if (lesson.quiz) {
        quizQuestion.innerText = lesson.quiz.question;
        quizOptions.innerHTML = '';
        lesson.quiz.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = opt;
            btn.onclick = () => {
                const allBtns = quizOptions.querySelectorAll('.btn-option');
                allBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                submitBtn.style.display = 'block';
                submitBtn.onclick = () => checkLessonQuiz(i, lesson.quiz.answer);
            };
            quizOptions.appendChild(btn);
        });
    } else {
        quizQuestion.innerText = "No quiz for this topic.";
        quizOptions.innerHTML = '';
        submitBtn.style.display = 'none';
    }

    // Nav
    document.getElementById('prevTopic').style.visibility = currentLessonIndex > 0 ? 'visible' : 'hidden';
    document.getElementById('prevTopic').innerText = tUI.prev_topic;
    document.getElementById('nextTopic').innerText = currentLessonIndex < lessons.length - 1 ? tUI.next_topic : tUI.finish_module;

    document.getElementById('prevTopic').onclick = () => {
        currentLessonIndex--;
        renderLesson();
    };

    document.getElementById('nextTopic').onclick = () => {
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
            renderLesson();
        } else {
            showView('linux');
        }
    };
}

function checkLessonQuiz(selectedIndex, correctIndex) {
    const feedback = document.getElementById('lessonQuizFeedback');
    const tUI = translations[currentLang].ui;
    if (selectedIndex === correctIndex) {
        feedback.innerText = tUI.correct;
        feedback.style.color = "var(--success-color)";
    } else {
        feedback.innerText = tUI.incorrect;
        feedback.style.color = "var(--error-color)";
    }
}

// Initial render
if (modulesGrid) {
    translateUI();
    renderModules();
}
