<?php

require "./Models/Comentarios.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$message = Message::getAll();

echo json_encode($message);
