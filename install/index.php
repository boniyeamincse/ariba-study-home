<?php
/**
 * Ariba Study Portal - Application Installer
 */
session_start();

$step = isset($_GET['step']) ? (int)$_GET['step'] : 1;
if ($step < 1) $step = 1;
if ($step > 5) $step = 5;

// Basic configuration
$pageTitle = "Ariba Study - Installer (Step $step of 5)";

// Handle form submissions for each step (placeholder logic)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Save post data to session
    foreach ($_POST as $key => $value) {
        $_SESSION['install'][$key] = $value;
    }
    
    // Redirect to next step if valid (logic will be expanded in steps)
    $nextStep = $step + 1;
    if ($nextStep <= 5) {
        header("Location: index.php?step=$nextStep");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="install-container">
        <header class="install-header">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="Ariba Study" onerror="this.src='https://via.placeholder.com/150x40?text=Ariba+Study'">
            </div>
            <h1>Installation Wizard</h1>
        </header>

        <div class="progress-bar">
            <?php for ($i = 1; $i <= 5; $i++): ?>
                <div class="progress-step <?php echo $i <= $step ? 'active' : ''; ?> <?php echo $i < $step ? 'completed' : ''; ?>">
                    <span class="step-num"><?php echo $i; ?></span>
                </div>
            <?php endfor; ?>
        </div>

        <main class="install-content">
            <?php 
                $stepFile = "steps/step$step.php";
                if (file_exists($stepFile)) {
                    include $stepFile;
                } else {
                    echo "<h2>Step $step</h2><p>Coming soon...</p>";
                }
            ?>
        </main>

        <footer class="install-footer">
            <p>&copy; <?php echo date('Y'); ?> Ariba Study. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
