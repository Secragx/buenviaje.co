<?php
class Rol {
    private $conn;
    private $table = "roles";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get rol
    public function getRol() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>