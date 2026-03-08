<?php
/**
 * Step 3: Database Configuration (Password & Test)
 */
$db_pass = $_SESSION['install']['db_pass'] ?? '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['test_connection'])) {
    $host = $_SESSION['install']['db_host'];
    $name = $_SESSION['install']['db_name'];
    $user = $_SESSION['install']['db_user'];
    $pass = $_POST['db_pass'];

    try {
        $dsn = "mysql:host=$host;dbname=$name;charset=utf8mb4";
        $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        
        // If successful, save password to session and proceed
        $_SESSION['install']['db_pass'] = $pass;
        header("Location: index.php?step=4");
        exit;
    } catch (PDOException $e) {
        $error = "Connection failed: " . $e->getMessage();
    }
}
?>

<h2>Database Configuration</h2>
<p>Enter the password for your database user. We will attempt to connect to the database to verify settings.</p>

<?php if ($error): ?>
    <div class="error-box" style="color: var(--error-color); background: #fee2e2; padding: 10px; border-radius: 6px; margin-bottom: 20px;">
        <?php echo htmlspecialchars($error); ?>
    </div>
<?php endif; ?>

<form method="POST">
    <div class="form-group">
        <label for="db_pass">Database Password</label>
        <input type="password" id="db_pass" name="db_pass" value="<?php echo htmlspecialchars($db_pass); ?>" placeholder="Enter password (leave blank if none)">
    </div>

    <div class="btn-group">
        <button type="submit" name="test_connection" class="btn-primary">
            Test Connection & Continue
        </button>
    </div>
</form>
