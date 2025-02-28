<?php

require_once './model/countryModel.php';
require_once './model/destinityModel.php'; 
require_once './config/database.php';

class DestinityController 
{
    private $db;
    private $destinityModel;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->destinityModel = new destinityModel($this->db);
    }

       // Método para obtener un destino
    public function getDestinity($idDestino)
    {
        return $this->destinityModel->getDestinity($idDestino); 
    }

      //Función para listar destinos
     public function listDestinity()
     {
         return $this->destinityModel->getDestinity(); 
     }
/*
    // Modificar el método de acción para manejar consulta
    public function updateDestinationAction()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            exit("Método no permitido");
        }

        // Manejar consulta
        if (isset($_POST['consultar'])) {
            $idDestino = filter_input(INPUT_POST, 'idDestino', FILTER_SANITIZE_NUMBER_INT);
            $destinationData = $this->getDestinity($idDestino);
            // Aquí deberías pasar los datos a la vista (necesitarías un sistema de plantillas)
            $_SESSION['destinationData'] = $destinationData; // Ejemplo usando sesiones
            header("Location: /destinos");
            exit();
        }
        $ciudadDestino = filter_input(INPUT_POST, 'ciudadDestino', FILTER_SANITIZE_STRING);
    }*/
    public function updateDestinationAction()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            exit("Método no permitido");
        }
    
        if (isset($_POST['consultar'])) {
            $idDestino = filter_input(INPUT_POST, 'idDestino', FILTER_SANITIZE_NUMBER_INT);
    
            if (!$idDestino) {
                echo "ID de destino no válido.";
                return;
            }
    
            // Obtener datos de la base de datos
            $destinationData = $this->destinityModel->getDestinationById($idDestino);
    
            if (!$destinationData) {
                echo "Destino no encontrado.";
                return;
            }
    
            // Guardar datos en sesión
            session_start();
            $_SESSION['destinationData'] = $destinationData;
    
            // Redirigir a la vista de edición
            header("Location: index.php?action=consolaDestino");
            exit();
        }
    }
}
/* 
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
