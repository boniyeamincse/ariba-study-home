<?php
// backend/api/models/Lesson.php

require_once __DIR__ . '/../config/database.php';

class Lesson {
    private $db;
    private $table = 'lessons';

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function getByModuleId($moduleId) {
        $query = "SELECT id, title, slug, order_index FROM " . $this->table . " WHERE module_id = :module_id ORDER BY order_index ASC";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':module_id', $moduleId);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function getBySlug($slug) {
        $query = "SELECT * FROM " . $this->table . " WHERE slug = :slug LIMIT 1";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':slug', $slug);
        $stmt->execute();
        $lesson = $stmt->fetch();

        if ($lesson) {
            $lesson['exercises'] = $this->getExercises($lesson['id']);
            $lesson['quiz'] = $this->getQuiz($lesson['id']);
        }

        return $lesson;
    }

    private function getExercises($lessonId) {
        $query = "SELECT description FROM exercises WHERE lesson_id = :lesson_id ORDER BY order_index ASC";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':lesson_id', $lessonId);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    private function getQuiz($lessonId) {
        $query = "SELECT question, options, correct_option_index as answer FROM quiz_questions WHERE lesson_id = :lesson_id LIMIT 1";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':lesson_id', $lessonId);
        $stmt->execute();
        $quiz = $stmt->fetch();
        
        if ($quiz) {
            $quiz['options'] = json_decode($quiz['options']);
        }
        
        return $quiz;
    }
}
