<?php
// backend/api/controllers/ProgressController.php

require_once __DIR__ . '/../models/Progress.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/AuthMiddleware.php';

class ProgressController {
    private $progressModel;

    public function __construct() {
        $this->progressModel = new Progress();
    }

    public function getProgress() {
        $userId = AuthMiddleware::check();
        $progress = $this->progressModel->getUserProgress($userId);
        Response::success('Progress retrieved', $progress);
    }

    public function update($data) {
        $userId = AuthMiddleware::check();
        
        if (empty($data['lesson_id']) || empty($data['status'])) {
            Response::error('Lesson ID and status are required');
        }

        if ($this->progressModel->updateProgress($userId, $data['lesson_id'], $data['status'])) {
            Response::success('Progress updated successfully');
        } else {
            Response::error('Failed to update progress');
        }
    }
}
