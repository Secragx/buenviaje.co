<?php

require_once './model/tourModel.php';
require_once './config/database.php';

class TourController{
    private $db;
    private $tourModel;

    public function __construct(){
        $database = new Database();
        $this->db =$database->getConnection();
        $this->tourModel = new tourModel($this->db);
    }
        
    public function insertTour(){
        if ($_SERVER["REQUEST_METHOD"] =  "POST"){
            $name_tour = $_POST['nombreTour'];
            $id_destinity = $_POST['idDestino'];
            $price = $_POST['precio'];
            $description = $_POST['descripcion'];
            $start_date = $_POST['fechaInicio'];
            $end_date = $_POST['fechaFin'];

            $image = $_FILES['imagen']['name'];
            $target_dir = "images/";
            $target_file = $target_dir . basename($image);
            move_uploaded_file($_FILES["imagen"]["tmp_name"], $target_file);

            $this->tourModel->insertTour($name_tour, $id_destinity, $price, $description, $start_date, $end_date, $image);
            header("Location: index.php?action=dashboard");
        }
    }
}
