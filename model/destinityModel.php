<?php

class destinityModel
{
    private $conn;
    private $table = 'destinos';

    public function __construct($db)
    {
        $this->conn = $db;
    }
    //Función obtener destinos

    public function getDestinity()
    {
        $query = "
        SELECT d.idDestino, d.ciudadDestino, d.idPais, p.nombrePais 
        FROM destinos d
        JOIN paises p ON d.idPais = p.idPais
    ";
    $stmt = $this->conn->query($query);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    /* Función para actualizar la descripción de un país
    public function updateCountryDescription($idPais, $descripcion)
    {
        $query = "UPDATE " . $this->table . " SET descripcion = :descripcion WHERE idPais = :idPais";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':idPais', $idPais);
        return $stmt->execute();
    }*/
}
