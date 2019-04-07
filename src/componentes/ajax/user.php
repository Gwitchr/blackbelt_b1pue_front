<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");


    $rest_json = file_get_contents("php://input");

    $_POST = json_decode($rest_json, true);

    if (empty($_POST['email']) && empty($_POST['password'])) die();

    $correo = strip_tags(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL));
    $pass   = strip_tags(filter_var($_POST['password'], FILTER_SANITIZE_STRING));

    $datos = array("correo"=>$correo,"mood"=>$pass);

    echo $datos;

?>