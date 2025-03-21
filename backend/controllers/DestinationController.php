<?php
include_once "../config/database.php";
include_once "../models/Country.php";
include_once "../models/Destination.php";

class DestinationController {
    private $db;
    private $destination;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->destination = new Destination($this->db);
    }

    // List destinations
    public function listDestinations() {
        return $this->destination->getDestination();
    }

    // Create destination
    public function createDestination($ciudadDestino, $idPais){
        return $this->destination->createDestination($ciudadDestino, $idPais);
    }  
    
    // Delete destination
    public function deleteDestination($idDestino){
        return $this->destination->deleteDestination($idDestino);
    }
}
?>
