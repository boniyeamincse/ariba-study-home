<?php
$basePath = '../';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | Ariba Study</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .auth-page {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 80vh;
            padding: 2rem;
        }
        .auth-card {
            background: white;
            padding: 3rem;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            width: 100%;
            max-width: 450px;
            text-align: center;
        }
        .auth-card h1 { margin-bottom: 0.5rem; color: var(--text-primary); }
        .auth-card p { color: var(--text-secondary); margin-bottom: 2rem; }
        .auth-form { text-align: left; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
        .form-group input { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: 12px; font-size: 1rem; }
        .btn-auth { width: 100%; padding: 1rem; background: var(--accent-color); color: white; border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; margin-top: 1rem; }
        .btn-auth:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2); }
        .auth-footer { margin-top: 2rem; color: var(--text-secondary); font-size: 0.95rem; }
        .auth-footer a { color: var(--accent-color); text-decoration: none; font-weight: 600; }
        .error-msg { color: #ef4444; background: #fee2e2; padding: 0.75rem; border-radius: 8px; margin-bottom: 1.5rem; display: none; font-size: 0.9rem; }
        .success-msg { color: #059669; background: #d1fae5; padding: 0.75rem; border-radius: 8px; margin-bottom: 1.5rem; display: none; font-size: 0.9rem; }
    </style>
</head>
<body class="page-layout">
    <?php include '../includes/header.php'; ?>

    <main class="auth-page">
        <div class="auth-card">
            <h1 data-i18n="signup_title">Join Us</h1>
            <p data-i18n="signup_subtitle">Create an account to track your progress and start your journey.</p>
            
            <div id="errorMsg" class="error-msg"></div>
            <div id="successMsg" class="success-msg"></div>

            <form id="signupForm" class="auth-form">
                <div class="form-group">
                    <label for="username" data-i18n="username">Username</label>
                    <input type="text" id="username" required>
                </div>
                <div class="form-group">
                    <label for="email" data-i18n="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password" data-i18n="password">Password</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" class="btn-auth" data-i18n="signup_btn">Create Account</button>
            </form>

            <div class="auth-footer">
                <span data-i18n="have_account">Already have an account?</span>
                <a href="login.php" data-i18n="login">Login</a>
            </div>
        </div>
    </main>

    <?php include '../includes/footer.php'; ?>

    <script src="../assets/js/i18n/en.js"></script>
    <script src="../assets/js/i18n/bn.js"></script>
    <script src="../assets/js/i18n/ar.js"></script>
    <script src="../assets/js/components.js"></script>
    <script src="../assets/js/auth.js"></script>
    <script>
        document.getElementById('signupForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const pass = document.getElementById('password').value;
            const errorDiv = document.getElementById('errorMsg');
            const successDiv = document.getElementById('successMsg');

            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';

            const result = await Auth.register(user, email, pass);
            if (result.success) {
                successDiv.textContent = 'Account created successfully! Redirecting to login...';
                successDiv.style.display = 'block';
                setTimeout(() => window.location.href = 'login.php', 2000);
            } else {
                errorDiv.textContent = result.error;
                errorDiv.style.display = 'block';
            }
        });
    </script>
</body>
</html>
