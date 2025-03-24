<?php
include_once "../config/database.php";
include_once "../models/Rol.php";

class RolController {
    private $db;
    private $rol;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->rol = new Rol($this->db);
    }

    // List countries
    public function listRoles() {
        return $this->rol->getRol();
    } 
}
?>