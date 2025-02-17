<?php

class countryModel
{
    private $conn;
    private $table = 'paises';

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function insertCountry($name_country)
    {
        $query = "INSERT INTO " . $this->table . "(nombrePais) VALUES (?)";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$name_country]);
    }
}
