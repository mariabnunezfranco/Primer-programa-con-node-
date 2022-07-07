

<?php

//primer paso conectar con la base de datos 
//comprobar que se conecta con la base de datos-->mostrar por pantalla por ejemplo 
//ver en qué variable se encuentran los datos introducidos y traerlos
//leer los parámetros de la base de datos y compararlo con los introducidos.


//$servername = "(localdb)\\MSSQLLocalDB";
$servername = "localhost"
$database = "MyCompany";

// Create connection
$conn = mysqli_connect($servername,"","", $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

//tomamos los valores introducidos 
$mail= $_POST['mail'];
$password= $_POST['password'];


$consulta_mysql="select * from Users(Password, Email) VALUES ('$mail','$password')";
$resultado_consulta_mysql=mysql_query($consulta_mysql,$conn);
mysqli_close($conn);

$registro=mysql_fetch_array($resultado_consulta_mysql)
echo $registro['Password']."<br>";





?>