<?php
class DocType {
    private $conn;
    private $table = "tiposDocumento";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get document types
    public function getDocType() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>