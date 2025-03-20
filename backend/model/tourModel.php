<?php

class tourModel
{
    private $conn;
    private $table = 'tours';

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function insertTour($name_tour, $id_destinity, $price, $description, $start_date, $end_date, $image)
    {
        $query = "INSERT INTO " . $this->table . "(nombreTour, idDestino, precio, descripcion, fechaInicio, fechaFin, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$name_tour, $id_destinity, $price, $description, $start_date, $end_date, $image]);
    }
}
