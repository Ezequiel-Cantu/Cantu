<?php

define("server", "localhost");
define("user", "root");
define("password", "");
define("database", "L19100155");

$con = mysqli_connect(server, user, password, database);

    $response = mysqli_query($con, 'select * from usuario');
?>
<!DOCTYPE html> 
<html> 
	<head> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
		<title> Fetch Data From Database </title> 
	</head> 
	<body> 
    <!-- <div class=""> -->
	<table  class="table table-responsive"> 
    <thead class="thead-dark">
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Edad</th>
        <th scope="col">Ocupacion</th>
        <th scope="col">Usuario</th>
        <th scope="col">Telefono</th>
        <th scope="col">Genero</th>	  
        <th scope="col">Contrasena</th>	  
    </thead>
		
		<?php while($fetch=mysqli_fetch_array($response)) 
		{ 
		?> 
        <tbody>
		<tr> 
            <th scope="row"><?php echo $fetch['idUsuario']; ?></th> 
		    <td><?php echo $fetch['Nombre']; ?></td> 
		    <td><?php echo $fetch['ApPat']; ?></td> 
		    <td><?php echo $fetch['Edad']; ?></td> 
            <td><?php echo $fetch['Ocupacion']; ?></td> 
            <td><?php echo $fetch['Usuario']; ?></td> 
            <td><?php echo $fetch['Telefono']; ?></td> 
            <td><?php echo $fetch['Genero']; ?></td> 
            <td><?php echo $fetch['Contrasena']; ?></td> 
		</tr> 
        </tbody>
	<?php 
               } 
          ?> 

	</table>
    <!-- </div> -->
	</body> 
	</html>