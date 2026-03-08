<?php
// backend/api/index.php

require_once __DIR__ . '/utils/Response.php';
require_once __DIR__ . '/models/Module.php';
require_once __DIR__ . '/models/Lesson.php';
require_once __DIR__ . '/controllers/AuthController.php';
require_once __DIR__ . '/controllers/ProgressController.php';

// Session Start
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Simple Router
$request_uri = $_SERVER['REQUEST_URI'];
$base_path = '/backend/api';

// Strip base path and query strings
$path = str_replace($base_path, '', $request_uri);
$path = explode('?', $path)[0];
$path = trim($path, '/');

$parts = explode('/', $path);
$resource = $parts[0] ?? '';
$action = $parts[1] ?? '';

// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

try {
    switch ($resource) {
        case 'auth':
            $auth = new AuthController();
            switch ($action) {
                case 'register': $auth->register($input); break;
                case 'login': $auth->login($input); break;
                case 'logout': $auth->logout(); break;
                case 'status': $auth->getStatus(); break;
                default: Response::error('Invalid auth action', 404);
            }
            break;

        case 'modules':
            $moduleModel = new Module();
            if ($action === '') {
                Response::success('Modules retrieved', $moduleModel->getAll());
            } else {
                $module = $moduleModel->getBySlug($action);
                if ($module) {
                    $lessonModel = new Lesson();
                    $module['lessons'] = $lessonModel->getByModuleId($module['id']);
                    Response::success('Module retrieved', $module);
                } else {
                    Response::error('Module not found', 404);
                }
            }
            break;

        case 'lessons':
            if ($action !== '') {
                $lessonModel = new Lesson();
                $lesson = $lessonModel->getBySlug($action);
                if ($lesson) {
                    Response::success('Lesson retrieved', $lesson);
                } else {
                    Response::error('Lesson not found', 404);
                }
            } else {
                Response::error('Lesson slug required');
            }
            break;

        case 'progress':
            $progress = new ProgressController();
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $progress->update($input);
            } else {
                $progress->getProgress();
            }
            break;

        default:
            Response::error('Resource not found: ' . $resource, 404);
            break;
    }
} catch (Exception $e) {
    Response::error($e->getMessage(), 500);
}
