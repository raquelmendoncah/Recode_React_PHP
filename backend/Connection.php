
<?php

class Connection
{
  public static function getDb()
  {
    $conn = new PDO(
      "mysql:host=localhost;dbname=fullstackraquel;charset=utf8",
      "root",
      ""
    );

    if ($conn) {
      return $conn;
    } else {
      return "<h1>Erro ao realizar conexão</h1>";
    }
  }
}
