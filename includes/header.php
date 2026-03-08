<?php
// includes/header.php
// $basePath should be defined in the parent file (e.g., '' for root, '../' for subpages)
if (!isset($basePath)) $basePath = '';
?>
<header class="main-header">
    <nav class="navbar">
        <div class="container nav-container">
            <div class="logo">
                <a href="<?php echo $basePath; ?>index.php">
                    <span class="logo-icon">📚</span>
                    <span class="logo-text" data-i18n="ariba_study">Ariba Study</span>
                </a>
            </div>

            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav-menu">
                <li><a href="<?php echo $basePath; ?>index.php" data-i18n="nav_home">Home</a></li>
                <li><a href="<?php echo $basePath; ?>index.php#learning" data-i18n="nav_learning">Learning</a></li>
                <li><a href="<?php echo $basePath; ?>pages/courses.php" data-i18n="nav_courses">Courses</a></li>
                <li><a href="<?php echo $basePath; ?>pages/about.php" data-i18n="nav_about">About</a></li>
                <li><a href="<?php echo $basePath; ?>pages/contact.php" data-i18n="nav_contact">Contact</a></li>
            </ul>

            <div class="nav-actions">
                <div id="auth-container"></div>
                <select id="headerLangSelect" class="lang-select">
                    <option value="en">English</option>
                    <option value="bn">বাংলা</option>
                    <option value="ar">العربية</option>
                </select>
            </div>
        </div>
    </nav>
</header>
