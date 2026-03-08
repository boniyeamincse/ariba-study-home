<?php
// backend/api/models/Progress.php

require_once __DIR__ . '/../config/database.php';

class Progress {
    private $db;
    private $table = 'user_progress';

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function getUserProgress($userId) {
        $query = "SELECT lesson_id, status, completed_at FROM " . $this->table . " WHERE user_id = :user_id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':user_id', $userId);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function updateProgress($userId, $lessonId, $status) {
        $completedAt = ($status === 'completed') ? date('Y-m-d H:i:s') : null;
        
        $query = "INSERT INTO " . $this->table . " (user_id, lesson_id, status, completed_at) 
                  VALUES (:user_id, :lesson_id, :status, :completed_at)
                  ON DUPLICATE KEY UPDATE status = VALUES(status), completed_at = VALUES(completed_at)";
        
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':user_id', $userId);
        $stmt->bindParam(':lesson_id', $lessonId);
        $stmt->bindParam(':status', $status);
        $stmt->bindParam(':completed_at', $completedAt);
        
        return $stmt->execute();
    }
}
