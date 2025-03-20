<?php
class Database {
    private $host = "localhost";
    private $port = "3307"; // Asegúrate de usar el puerto correcto
    private $db_name = "turismo_web";
    private $username = "root";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            die("Error en la conexión: " . $exception->getMessage());
        }
        return $this->conn;
    }
}
?>
