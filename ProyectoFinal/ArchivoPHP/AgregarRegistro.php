<?php
$hostname='localhost';
$database='L19100155';
$username='root';
$password='';
$port='3306';


try {
    $con = new PDO("mysql:host=$hostname;dbname=$database; port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

$nom = $_POST['par2'];
$Ape = $_POST['par3'];
$Edad = $_POST['par4'];
$Ocupacion = $_POST['par5'];
$Telefono = $_POST['par6'];
$Usernam = $_POST['par7'];
$Pass = $_POST['par8'];
$gener = $_POST['par9'];

try{
    $consultaSql = "insert into usuario (Nombre, ApPat, Edad, Ocupacion, Usuario, Telefono, Genero, Contrasena) values
                    ('$nom', '$Ape', '$Edad', '$Ocupacion', '$Usernam', '$Telefono', '$gener', '$Pass')";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta -> closeCursor();
}
catch (PDOException $e){
    echo "Error en la consulta";
    echo $e->getMessage();
}
?>