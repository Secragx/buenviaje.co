<?php
class Database {
    private $host = "localhost";
    private $port = "3307"; 
    private $db_name = "turismo_web";
    private $username = "root";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};port={$this->port};dbname={$this->db_name}",
                $this->username,
                $this->password,
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
            );
            $this->conn->exec("SET NAMES utf8");
        } catch (PDOException $exception) {
            throw new Exception("Error en la conexión a la base de datos");
        }
        return $this->conn;
    }
}
?>


