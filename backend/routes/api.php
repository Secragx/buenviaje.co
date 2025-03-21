<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


include_once "../controllers/CountryController.php";
include_once "../controllers/DestinationController.php";
include_once "../controllers/TourController.php"; 


// Obtener la entidad de la URL (por ejemplo: ?entity=destinations)
$entity = $_GET["entity"] ?? "";
$method = $_SERVER["REQUEST_METHOD"];

if ($entity === "paises") {
    $controller = new CountryController();

    if ($method === "GET") {
        echo json_encode($controller->listCountries());
    } elseif ($method === "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        $idPais = $data["id_pais"] ?? null;
        $descripcion = $data["descripcion"] ?? null;

        if ($idPais && $descripcion) {
            $result = $controller->updateCountryDescription($idPais, $descripcion);
            echo json_encode(["success" => $result]);
        } else {
            echo json_encode(["error" => "Datos incompletos"]);
        }
    } else {
        echo json_encode(["message" => "Método no permitido para countries"]);
    }

} elseif ($entity === "destinos") {
    $controller = new DestinationController();

    if ($method === "GET") {
        echo json_encode($controller->listDestinations());
    } elseif ($method === "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        $ciudadDestino = $data["ciudadDestino"] ?? null;
        $idPais = $data["idPais"] ?? null;

        if ($ciudadDestino && $idPais) {
            $result = $controller->createDestination($ciudadDestino, $idPais);
            echo json_encode(["success" => $result]);
        } else {
            echo json_encode(["error" => "Datos incompletos"]);
        }
    } elseif ($method === "DELETE") {
        $data = json_decode(file_get_contents("php://input"), true);
        $idDestino = $data["idDestino"] ?? null;

        if ($idDestino) {
            $result = $controller->deleteDestination($idDestino);
            echo json_encode(["success" => $result]);
        } else {
            echo json_encode(["error" => "ID de destino no proporcionado"]);
        }
    } else {
        echo json_encode(["message" => "Método no permitido para destinations"]);
    }

} elseif ($entity === "tours") {
    $controller = new TourController();

    if ($method === "GET") {
        echo json_encode($controller->listTours());
    } elseif ($method === "POST") {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['nombreTour'], $data['idDestino'], $data['precio'], 
                   $data['descripcion'], $data['fechaInicio'], $data['fechaFin'])) {
            echo json_encode(["error" => "Todos los campos son obligatorios"]);
            exit;
        }

        $result = $controller->createTour($data);
        echo json_encode($result);

    } elseif ($method === "PUT") {
        $data = json_decode(file_get_contents("php://input"), true);
        $idTour = $_GET["idTour"] ?? null;

        if (!$idTour) {
            echo json_encode(["error" => "ID de tour no proporcionado"]);
            exit;
        }

        if (empty($data)) {
            echo json_encode(["error" => "No hay datos para actualizar"]);
            exit;
        }

        $result = $controller->updateTour($idTour, $data);
        echo json_encode($result);

    } elseif ($method === "DELETE") {
        $data = json_decode(file_get_contents("php://input"), true);
        $idTour = $data["idTour"] ?? null;

        if (!$idTour) {
            echo json_encode(["error" => "ID de tour no proporcionado"]);
            exit;
        }

        $result = $controller->deleteTour($idTour);
        echo json_encode($result);

    } else {
        echo json_encode(["message" => "Método no permitido para tours"]);
    }

} else {
    echo json_encode(["error" => "Entidad no reconocida"]);
}
?>