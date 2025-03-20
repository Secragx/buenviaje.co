<?php

class countryModel
{
    private $conn;
    private $table = 'paises';

    public function __construct($db)
    {
        $this->conn = $db;
    }
    // Función obtener paises

    public function getCountry()
    {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->query($query);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    // Función para actualizar la descripción de un país
    public function updateCountryDescription($idPais, $descripcion)
    {
        $query = "UPDATE " . $this->table . " SET descripcion = :descripcion WHERE idPais = :idPais";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':idPais', $idPais);
        return $stmt->execute();
    }
}
