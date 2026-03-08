<?php
// backend/api/models/Module.php

require_once __DIR__ . '/../config/database.php';

class Module {
    private $db;
    private $table = 'modules';

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function getAll() {
        $query = "SELECT * FROM " . $this->table . " ORDER BY id ASC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function getBySlug($slug) {
        $query = "SELECT * FROM " . $this->table . " WHERE slug = :slug LIMIT 1";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':slug', $slug);
        $stmt->execute();
        return $stmt->fetch();
    }
}
