<?php
ini_set('display_errors', 1);  // Mostrar errores
ini_set('display_startup_errors', 1);  // Mostrar errores al iniciar PHP
error_reporting(E_ALL);  // Reportar todos los errores

require_once './controller/tourController.php';
require_once './controller/countryController.php';

$tourController = new tourController();
$countryController = new countryController();

$action = $_GET['action'] ?? 'dashboard';

switch ($action) {
    case 'consolaPaises':
        include './view/console_country.php';
        break;

    case 'consolaTour':
        include './view/console_tour.php';
        break;

    default:
        include './view/dashboard.php';
        break;
}
