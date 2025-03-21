<?php
include_once '../models/Tour.php';
include_once '../config/database.php';

class TourController
{
    private $db;
    private $tour;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->tour = new Tour($this->db);
    }

    // Listar todos los tours
    public function listTours(){
        return $this->tour->getTour();
    }

    // Crear un nuevo tour
    public function createTour($data)
    {
        if (
            !isset($data['nombreTour'], $data['idDestino'], $data['precio'], 
                    $data['descripcion'], $data['fechaInicio'], $data['fechaFin'])
        ) {
            return ['status' => 'error', 'message' => 'Todos los campos son obligatorios'];
        }

        $result = $this->tour->createTour(
            $data['nombreTour'],
            $data['idDestino'],
            $data['precio'],
            $data['descripcion'],
            $data['fechaInicio'],
            $data['fechaFin']
        );

        return $result
            ? ['status' => 'success', 'message' => 'Tour creado correctamente']
            : ['status' => 'error', 'message' => 'Error al crear el tour'];
    }

    // Actualizar un tour existente
    public function updateTour($idTour, $data)
    {
        if (empty($data)) {
            return ['status' => 'error', 'message' => 'No hay datos para actualizar'];
        }

        $result = $this->tour->updateTour($idTour, $data);

        return $result
            ? ['status' => 'success', 'message' => 'Tour actualizado correctamente']
            : ['status' => 'error', 'message' => 'Error al actualizar el tour'];
    }

    // Eliminar un tour
    public function deleteTour($idTour)
    {
        $result = $this->tour->deleteTour($idTour);

        return $result
            ? ['status' => 'success', 'message' => 'Tour eliminado correctamente']
            : ['status' => 'error', 'message' => 'Error al eliminar el tour'];
    }
}
