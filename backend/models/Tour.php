<?php

class Tour
{
    private $conn;
    private $table = 'tours';

    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Get Tour
    public function getTour()
    {
        $query = "SELECT t.idTour, t.nombreTour, t.idDestino, d.ciudadDestino, t.precio, t.descripcion, t.fechaInicio, t.fechaFin 
            FROM tours t 
            JOIN destinos d ON t.idDestino = d.idDestino";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    // Create tour
    public function createTour(
        $nombreTour,
        $idDestino,
        $precio,
        $descripcion,
        $fechaInicio,
        $fechaFin
    ) {
        $query = "INSERT INTO " . $this->table . "(nombreTour, idDestino, precio, descripcion, fechaInicio, fechaFin) 
          VALUES (:nombreTour, :idDestino, :precio, :descripcion, :fechaInicio, :fechaFin)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':nombreTour', $nombreTour);
        $stmt->bindParam(':idDestino', $idDestino);
        $stmt->bindParam(':precio', $precio);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':fechaInicio', $fechaInicio);
        $stmt->bindParam(':fechaFin', $fechaFin);
        return $stmt->execute();
    }

    // Delete Tour
    public function deleteTour($idTour)
    {
        $query = "DELETE FROM " . $this->table . " WHERE idTour = :idTour";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':idTour', $idTour);
        return $stmt->execute();
    }


    // Update Tour Flexible
    public function updateTour($idTour, $datos){
        if (empty($datos)) {
            return false; 
        }

        $query = "UPDATE " . $this->table . " SET ";
        $values = [];
        foreach ($datos as $campo => $valor) {
            $query .= "$campo = :$campo, ";
            $values[":$campo"] = $valor;
        }

        $query = rtrim($query, ", ") . " WHERE idTour = :idTour";
        $values[":idTour"] = $idTour;
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($values);
    }
}
