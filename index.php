<?php

require_once './controller/tourController.php';

$tourController = new tourController();

$action = $_GET['action'] ?? 'dashboard';

switch ($action) {
    case 'insertTour':
        if ($_SERVER["REQUEST_METHOD" == "POST"]){
            $tours=$tourController->insertTour();
        }else{
            include './view/insert_tour.php';
        }
        break;
    
    default:
        include './view/dashboard.php';

        break;
}