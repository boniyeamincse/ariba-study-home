<?php
/**
 * Step 4: Admin Credentials & Finalize
 */
$admin_user = $_SESSION['install']['admin_user'] ?? 'admin';
$admin_email = $_SESSION['install']['admin_email'] ?? 'admin@example.com';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['install_now'])) {
    $admin_user = $_POST['admin_user'];
    $admin_email = $_POST['admin_email'];
    $admin_pass = $_POST['admin_pass'];
    
    // 1. Prepare DB connection
    $host = $_SESSION['install']['db_host'];
    $name = $_SESSION['install']['db_name'];
    $user = $_SESSION['install']['db_user'];
    $pass = $_SESSION['install']['db_pass'];

    try {
        $dsn = "mysql:host=$host;charset=utf8mb4";
        $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        
        // 2. Create database if not exists
        $pdo->exec("CREATE DATABASE IF NOT EXISTS `$name` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
        $pdo->exec("USE `$name` text");
        
        // 3. Run Schema
        $schema = file_get_contents('../../backend/sql/schema.sql');
        if ($schema) {
            $pdo->exec($schema);
        }
        
        // 4. Run Initial Data
        $initialData = file_get_contents('../../backend/sql/initial_data.sql');
        if ($initialData) {
            // Split by ';' and execute one by one if it's large, but let's try exec first
            $pdo->exec($initialData);
        }
        
        // 5. Create Admin User
        $hashedPass = password_hash($admin_pass, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$admin_user, $admin_email, $hashedPass]);
        
        // 6. Update config/constants.php
        $constantsPath = '../../backend/api/config/constants.php';
        $constantsContent = "<?php
// backend/api/config/constants.php

define('DB_HOST', '" . addslashes($host) . "');
define('DB_NAME', '" . addslashes($name) . "');
define('DB_USER', '" . addslashes($user) . "');
define('DB_PASS', '" . addslashes($pass) . "');
define('DB_CHARSET', 'utf8mb4');

define('API_SECRET', '" . bin2hex(random_bytes(16)) . "');
";
        file_put_contents($constantsPath, $constantsContent);
        
        // 7. Success! Save admin info to session and proceed
        $_SESSION['install']['admin_user'] = $admin_user;
        header("Location: index.php?step=5");
        exit;
    } catch (Exception $e) {
        $error = "Installation failed: " . $e->getMessage();
    }
}
?>

<h2>Admin Setup & Installation</h2>
<p>Almost there! Please create your administrator account and click the button to finalize the installation.</p>

<?php if ($error): ?>
    <div class="error-box" style="color: var(--error-color); background: #fee2e2; padding: 10px; border-radius: 6px; margin-bottom: 20px;">
        <?php echo htmlspecialchars($error); ?>
    </div>
<?php endif; ?>

<form method="POST">
    <div class="form-group">
        <label for="admin_user">Admin Username</label>
        <input type="text" id="admin_user" name="admin_user" value="<?php echo htmlspecialchars($admin_user); ?>" required>
    </div>

    <div class="form-group">
        <label for="admin_email">Admin Email</label>
        <input type="email" id="admin_email" name="admin_email" value="<?php echo htmlspecialchars($admin_email); ?>" required>
    </div>

    <div class="form-group">
        <label for="admin_pass">Admin Password</label>
        <input type="password" id="admin_pass" name="admin_pass" required>
    </div>

    <div class="btn-group">
        <button type="submit" name="install_now" class="btn-primary">
            Finalize & Install
        </button>
    </div>
</form>
