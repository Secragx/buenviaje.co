<?php

require_once './controller/tourController.php';
require_once './controller/countryController.php';

$tourController = new tourController();
$CountryController = new countryController();

$action = $_GET['action'] ?? 'dashboard';

switch ($action) {
    case 'insertTour':
        if ($_SERVER["REQUEST_METHOD" == "POST"]){
            $tours=$tourController->insertTour();
        }else{
            include './view/insert_tour.php';
        }
        break;
    case 'insertCountry':
        if ($_SERVER["REQUEST_METHOD" == "POST"]){
            $tours=$countryController->insertCountry();
        }else{
            include './view/insert_country.php';
        }
        break;
    
    default:
        include './view/dashboard.php';

        break;
}