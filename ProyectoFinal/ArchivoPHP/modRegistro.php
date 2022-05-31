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
    $consultaSql = "update usuario set Nombre ='$nom', ApPat = '$Ape', Edad = '$Edad', Ocupacion = '$Ocupacion', Usuario = '$Usernam', Telefono = '$Telefono',  Genero = '$gener', Contrasena = '$Pass' where idUsuario = '$idUsuario'";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta -> closeCursor();
}
catch (PDOException $e){
    echo "Error en la consulta";
    echo $e->getMessage();
}

?>