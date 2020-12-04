<?php

require "./Models/Comentarios.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$message = new Message;
$message->nome = $_POST['nome'];
$message->msg = $_POST['msg'];

$validate = $message->sendMessage();

if ($validate == true) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}
