<?php

require_once './model/countryModel.php';
require_once './config/database.php';

class countryController
{
    private $db;
    private $countryModel;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->countryModel = new countryModel($this->db);
    }

    // Función para listar países

    public function listCountry()
    {
        return $this->countryModel->getCountry();
    }
    // Función para actualizar la descripción de un país
    public function updateCountryDescription($idPais, $descripcion)
    {
        return $this->countryModel->updateCountryDescription($idPais, $descripcion);
    }
}
// Manejo de la acción updateDescription
if (isset($_GET['action']) && $_GET['action'] === 'updateDescription') {
    $idPais = $_POST['id_pais'];
    $descripcion = $_POST['descripcion'];

    $countryController = new countryController();
    $result = $countryController->updateCountryDescription($idPais, $descripcion);

    if ($result) {
        echo "Descripción actualizada correctamente.";
    } else {
        echo "Error al actualizar la descripción.";
    }
}
