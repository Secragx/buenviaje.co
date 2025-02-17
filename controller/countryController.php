<?php

require_once './model/countryModel.php';
require_once './config/database.php';

class countryController{
    private $db;
    private $countryModel;

    public function __construct(){
        $database = new Database();
        $this->db =$database->getConnection();
        $this->countryModel = new countryModel($this->db);
    }
        
    public function insertCountry(){
        if ($_SERVER["REQUEST_METHOD"] = "POST"){
            $name_country = $_POST['nombrePais'];
            
            $this->countryModel->insertCountry($name_country);
            header("Location: index.php?action=dashboard");
        }
    }
}