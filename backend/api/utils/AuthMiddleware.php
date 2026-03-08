<?php
// backend/api/utils/AuthMiddleware.php

require_once __DIR__ . '/Response.php';

class AuthMiddleware {
    public static function check() {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        
        if (!isset($_SESSION['user_id'])) {
            Response::error('Unauthorized access', 401);
        }
        
        return $_SESSION['user_id'];
    }
}
