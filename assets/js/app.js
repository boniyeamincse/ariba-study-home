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

// Lesson Content Data - loaded from external file

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

        const tModule = translations[currentLang].modules[index] || module;

        card.innerHTML = `
            <img src="assets/images/${module.icon}.png" alt="${tModule.title}" class="module-icon">
            <h3 class="module-title">${tModule.title}</h3>
            <p class="module-desc">${tModule.desc}</p>
            <div class="status-badge ${statusClass}" data-i18n="${statusClass}">${statusText}</div>
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

// View Management
const hubView = document.getElementById('hubView');
const linuxView = document.getElementById('linuxView');
const lessonView = document.getElementById('lessonView');
const enterLinuxBtn = document.getElementById('enterLinux');
const backToHubBtn = document.getElementById('backToHub');

const footer = document.querySelector('footer');

function showView(viewName) {
    hubView.style.display = 'none';
    linuxView.style.display = 'none';
    lessonView.style.display = 'none';

    if (viewName === 'hub') {
        hubView.style.display = 'block';
    } else if (viewName === 'linux') {
        linuxView.style.display = 'block';
    } else if (viewName === 'lesson') {
        lessonView.style.display = 'block';
    }
}

if (enterLinuxBtn) {
    enterLinuxBtn.onclick = () => showView('linux');
}

if (backToHubBtn) {
    backToHubBtn.onclick = () => showView('hub');
}

// i18n State
let currentLang = localStorage.getItem('aribaLang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('aribaLang', lang);

    // Set RTL direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }

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
    document.getElementById('breadcrumbModule').innerText = tUI.breadcrumb_linux;
    document.getElementById('breadcrumbTopic').innerText = lesson.title;
    document.getElementById('lessonContent').innerHTML = lesson.content;

    // Sidebar
    const subTopicList = document.getElementById('subTopicList');
    subTopicList.innerHTML = '';
    lessons.forEach((l, i) => {
        const li = document.createElement('li');
        li.className = `sub-topic-item ${i === currentLessonIndex ? 'active' : ''}`;
        const direction = document.documentElement.getAttribute('dir');
        if (direction === 'rtl') {
            li.innerHTML = `<span class="check-mark">✓</span> ${l.title} .${i + 1}`;
        } else {
            li.innerHTML = `${i + 1}. ${l.title} <span class="check-mark">✓</span>`;
        }
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
            // Module Finished Flow
            const moduleIndex = modules.findIndex(m => m.title === currentModule);
            if (moduleIndex === unlockedIndex && unlockedIndex < modules.length - 1) {
                unlockedIndex++;
                localStorage.setItem('linuxStudy_unlockedIndex', unlockedIndex);
            }
            renderModules();
            showView('linux');

            if (unlockedIndex === modules.length) {
                alert("Congratulations! You've completed all modules.");
            }
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
    // Set initial direction based on saved language
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
    }

    translateUI();
    renderModules();
}
