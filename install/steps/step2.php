<?php
/**
 * Step 2: Database Setup
 */
$db_host = $_SESSION['install']['db_host'] ?? '127.0.0.1';
$db_name = $_SESSION['install']['db_name'] ?? 'linux_study';
$db_user = $_SESSION['install']['db_user'] ?? 'root';
?>

<h2>Database Setup</h2>
<p>Please enter your database connection details. These are typically provided by your hosting provider.</p>

<form method="POST">
    <div class="form-group">
        <label for="db_host">Database Host</label>
        <input type="text" id="db_host" name="db_host" value="<?php echo htmlspecialchars($db_host); ?>" required placeholder="e.g. localhost or 127.0.0.1">
    </div>

    <div class="form-group">
        <label for="db_name">Database Name</label>
        <input type="text" id="db_name" name="db_name" value="<?php echo htmlspecialchars($db_name); ?>" required placeholder="e.g. linux_study">
    </div>

    <div class="form-group">
        <label for="db_user">Database User</label>
        <input type="text" id="db_user" name="db_user" value="<?php echo htmlspecialchars($db_user); ?>" required placeholder="e.g. root">
    </div>

    <div class="btn-group">
        <button type="submit" class="btn-primary">
            Continue to Database Password
        </button>
    </div>
</form>
