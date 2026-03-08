<?php
/**
 * Step 5: Success
 */
$admin_user = $_SESSION['install']['admin_user'] ?? 'Admin';
?>

<div class="success-message">
    <div class="success-icon">🎉</div>
    <h2>Installation Complete!</h2>
    <p>Ariba Study has been successfully installed on your server.</p>
    
    <div class="congratulations" style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: left;">
        <h3 style="color: #166534; margin-bottom: 10px;">Congratulations, <?php echo htmlspecialchars($admin_user); ?>!</h3>
        <p style="margin-bottom: 0;">Your admin account is ready. You can now log in to manage modules, track lessons, and more.</p>
    </div>

    <p style="color: var(--error-color); font-weight: 600; font-size: 13px;">
        ⚠️ For security reasons, please delete or rename the <code>install/</code> folder now.
    </p>

    <div class="btn-group" style="justify-content: center;">
        <a href="../pages/login.php" class="btn-primary" style="text-decoration: none; display: inline-block;">
            Go to Login Page
        </a>
    </div>
</div>
