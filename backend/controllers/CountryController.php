<?php
include_once "../config/database.php";
include_once "../models/Country.php";

class CountryController {
    private $db;
    private $country;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->country = new Country($this->db);
    }

    // List countries
    public function listCountries() {
        return $this->country->getCountry();
    }

    // Update country description
    public function updateCountryDescription($idPais, $descripcion){
        return $this->country->updateCountryDescription($idPais, $descripcion);
    }    
}

// Manejo de la acción updateDescription
if (isset($_GET['action']) && $_GET['action'] === 'updateDescription') {
    $idPais = $_POST['id_pais'];
    $descripcion = $_POST['descripcion'];

    $countryController = new CountryController();
    $result = $countryController->updateCountryDescription($idPais, $descripcion);

    if ($result) {
        echo "Descripción actualizada correctamente.";
    } else {
        echo "Error al actualizar la descripción.";
    }
}

?>
