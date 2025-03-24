<?php
include_once "../config/database.php";
include_once "../models/DocType.php";

class DocTypeController {
    private $db;
    private $docType;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->docType = new Doctype($this->db);
    }

    // List countries
    public function listDocTypes() {
        return $this->docType->getDocType();
    } 
}
?>