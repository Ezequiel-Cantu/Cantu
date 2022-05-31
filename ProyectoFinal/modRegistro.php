<?php
include('conexion.php');

$nom = $_POST['par2'];
$Ape = $_POST['par3'];
$Edad = $_POST['par4'];
$Ocupacion = $_POST['par5'];
$Telefono = $_POST['par6'];
$Usernam = $_POST['par7'];
$Pass = $_POST['par8'];
$gener = $_POST['par9'];

try{
    $consultaSql = "update Usuario set Nombre ='$nom', ApPat = '$Ape', Edad = '$Edad', Ocupacion = '$Ocupacion', Telefono = '$Telefono', Usuario = '$Usernam', Contrasena = '$Pass', Genero = '$gener'";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta -> closeCursor();
}
catch (PDOException $e){
    echo "Error en la consulta";
    echo $e->getMessage();
}

?>