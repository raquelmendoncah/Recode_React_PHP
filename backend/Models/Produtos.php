
<?php

require "Connection.php";

class Product
{
  public $id_produto;
  public $id_categoria;
  public $descricao;
  public $imagem;
  public $preco;
  public $preco_final;
  public $id;
  public $categoria;

  public static function getAll()
  {
    $connection = Connection::getDb();

    $stmt = $connection->query("SELECT * FROM fullstackraquel.produto pro JOIN fullstackraquel.categoria cat ON pro.id_categoria = cat.id");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}
