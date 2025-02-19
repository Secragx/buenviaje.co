<?php

require_once './model/countryModel.php';
require_once './model/destinityModel.php';
require_once './config/database.php';

class destinityController
{
    private $db;
    private $destinityModel;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->destinityModel = new destinityModel($this->db);
    }

    // Función para listar países

    public function listDestinity()
    {
        return $this->destinityModel->getDestinity();
    }
    /* Función para actualizar la descripción de un país
    public function updateCountryDescription($idPais, $descripcion)
    {
        return $this->destinityModel->updateCountryDescription($idPais, $descripcion);
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
    }*/
}
