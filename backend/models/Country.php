<?php
class Country {
    private $conn;
    private $table = "paises";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get country
    public function getCountry() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Set description
    public function updateCountryDescription($idPais, $descripcion){
        $query = "UPDATE " . $this->table . " SET descripcion = :descripcion WHERE idPais = :idPais";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':idPais', $idPais);
        return $stmt->execute();
    }

    // Agregar un usuario
    //public function agregarUsuario($nombre) {
    //    $query = "INSERT INTO " . $this->table . " (nombre) VALUES (:nombre)";
    //    $stmt = $this->conn->prepare($query);
    //    $stmt->bindParam(":nombre", $nombre);
    //    return $stmt->execute();
    //}
}
?>
