<?php

class destinityModel
{
    private $conn;
    private $table = 'destinos';

    public function __construct($db)
    {
        $this->conn = $db;
    }
    // Función obtener paises

    public function getDestinity()
    {
        $query = "SELECT d.idDestino, d.ciudadDestino, d.idPais, p.nombrePais 
        FROM destinos d
        JOIN paises p ON d.idPais = p.idPais
    ";
        $stmt = $this->conn->query($query);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    // Obtener destino por ID
    public function getDestinationById($idDestino)
    {
        $query = "SELECT * FROM destinos WHERE idDestino = :idDestino";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":idDestino", $idDestino, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Actualizar destino
    public function updateDestination($idDestino, $ciudadDestino, $idPais)
    {
        $query = "UPDATE destinos SET ciudadDestino = :ciudadDestino, idPais = :idPais WHERE idDestino = :idDestino";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':idDestino', $idDestino);
        $stmt->bindParam(':ciudadDestino', $ciudadDestino);
        $stmt->bindParam(':idPais', $idPais);
        return $stmt->execute();
    }

    // Crear destino
    public function createDestination($ciudadDestino, $idPais)
    {
        $query = "INSERT INTO destinos (ciudadDestino, idPais) VALUES (:ciudadDestino, :idPais)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':ciudadDestino', $ciudadDestino);
        $stmt->bindParam(':idPais', $idPais);
        return $stmt->execute();
    }

    // Eliminar destino
    public function deleteDestination($idDestino)
    {
        $query = "DELETE FROM destinos WHERE idDestino = :idDestino";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':idDestino', $idDestino);
        return $stmt->execute();
    }
}
