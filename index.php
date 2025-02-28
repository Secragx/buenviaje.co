<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once './controller/tourController.php';
require_once './controller/countryController.php';
require_once './controller/destinityController.php';

$tourController = new tourController();
$countryController = new countryController();
$destinityController = new DestinityController();

$action = $_GET['action'] ?? 'dashboard';

switch ($action) {
    case 'consolaPaises':
        include './view/console_country.php';
        break;

    case 'consolaDestino':
        if (isset($_SESSION['destinationData'])) {
            $destinationData = $_SESSION['destinationData'];
            unset($_SESSION['destinationData']);  // Limpiar la sesión después de usarla
        }
        include './view/console_destinity.php';
        break;

    case 'consolaTour':
        include './view/console_tour.php';
        break;

    case 'updateDestination':  
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['consultar'])) {
            $destinityController->updateDestinationAction();
        }
        break;

    default:
        include './view/dashboard.php';
        break;
}
?>