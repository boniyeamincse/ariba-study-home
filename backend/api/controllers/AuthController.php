<?php
// backend/api/controllers/AuthController.php

require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../utils/Response.php';

class AuthController {
    private $userModel;

    public function __construct() {
        $this->userModel = new User();
    }

    public function register($data) {
        if (empty($data['username']) || empty($data['email']) || empty($data['password'])) {
            Response::error('All fields are required');
        }

        if ($this->userModel->getByUsername($data['username'])) {
            Response::error('Username already exists');
        }

        if ($this->userModel->getByEmail($data['email'])) {
            Response::error('Email already exists');
        }

        if ($this->userModel->create($data['username'], $data['email'], $data['password'])) {
            Response::success('User registered successfully');
        } else {
            Response::error('Registration failed');
        }
    }

    public function login($data) {
        if (empty($data['username']) || empty($data['password'])) {
            Response::error('Username and password are required');
        }

        $user = $this->userModel->getByUsername($data['username']);

        if ($user && password_verify($data['password'], $user['password_hash'])) {
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            session_regenerate_id(true);
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            
            unset($user['password_hash']);
            Response::success('Login successful', $user);
        } else {
            Response::error('Invalid username or password', 401);
        }
    }

    public function logout() {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        session_destroy();
        Response::success('Logout successful');
    }

    public function getStatus() {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        if (isset($_SESSION['user_id'])) {
            Response::success('Authenticated', [
                'user_id' => $_SESSION['user_id'],
                'username' => $_SESSION['username']
            ]);
        } else {
            Response::error('Not authenticated', 401);
        }
    }
}
