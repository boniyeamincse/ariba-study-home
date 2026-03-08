<?php
/**
 * Step 1: System Requirements
 */

$requirements = [
    'php_version' => [
        'name' => 'PHP Version (>= 7.4)',
        'status' => version_compare(PHP_VERSION, '7.4.0', '>='),
        'value' => PHP_VERSION
    ],
    'pdo' => [
        'name' => 'PDO Extension',
        'status' => extension_loaded('pdo'),
        'value' => extension_loaded('pdo') ? 'Installed' : 'Missing'
    ],
    'pdo_mysql' => [
        'name' => 'PDO MySQL Extension',
        'status' => extension_loaded('pdo_mysql'),
        'value' => extension_loaded('pdo_mysql') ? 'Installed' : 'Missing'
    ],
    'writable_config' => [
        'name' => 'Config Directory Writable',
        'status' => is_writable('../backend/api/config'),
        'value' => is_writable('../backend/api/config') ? 'Writable' : 'Not Writable'
    ]
];

$allOk = true;
foreach ($requirements as $req) {
    if (!$req['status']) {
        $allOk = false;
        break;
    }
}
?>

<h2>System Requirements</h2>
<p>Before we begin, we need to check if your server meets the minimum requirements to run Ariba Study.</p>

<div class="requirements-list">
    <?php foreach ($requirements as $req): ?>
        <div class="requirement-item">
            <span class="req-name"><?php echo $req['name']; ?></span>
            <span class="status-icon <?php echo $req['status'] ? 'success' : 'error'; ?>">
                <?php echo $req['status'] ? '✓' : '✗'; ?> 
                <small>(<?php echo $req['value']; ?>)</small>
            </span>
        </div>
    <?php endforeach; ?>
</div>

<form method="POST">
    <div class="btn-group">
        <button type="submit" class="btn-primary" <?php echo !$allOk ? 'disabled' : ''; ?>>
            Continue to Database Setup
        </button>
    </div>
</form>
