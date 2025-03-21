<?php
class Destination {
    private $conn;
    private $table = "destinos";

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get destination
    public function getDestination(){
        $query = "SELECT d.idDestino, d.ciudadDestino, d.idPais, p.nombrePais 
        FROM destinos d
        JOIN paises p ON d.idPais = p.idPais";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Create destination
    public function createDestination($ciudadDestino, $idPais){
        $query = "INSERT INTO " . $this->table . " (ciudadDestino, idPais) VALUES (:ciudadDestino, :idPais)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':ciudadDestino', $ciudadDestino);
        $stmt->bindParam(':idPais', $idPais);
        return $stmt->execute();
    }

    // Eliminar destino
    public function deleteDestination($idDestino){
        $query = "DELETE FROM " . $this->table . " WHERE idDestino = :idDestino";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':idDestino', $idDestino);
        return $stmt->execute();
    }
}
?>
