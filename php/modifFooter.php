<?php
	
	header('Access-Control-Allow-Origin:*');
	include_once 'conexion.php';

	/*
		Utilizamos GET para obtener los datos actuales a modificar
		Utilizamos POST para enviar los nuevos cambios

	*/

	switch($_SERVER['REQUEST_METHOD']){
		
		case 'GET':
			$con = conectar();
			$query = 'SELECT * from datos_footer';
			$res = mysqli_query($con,$query);
			$json = array();

			while($fila = mysqli_fetch_assoc($res)){
				$json[] = $fila;
			}

			mysqli_close($con);
			echo json_encode($json);

		break;

		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'),true);
			$iteracion = 1;
			$con = conectar();
			$contador = 0;

			while($iteracion <10){
				//UPDATE `datos_footer` SET `nombre` = 'Sitio Web2', `valor` = 'Coordinación de Estudios Avanzados Facultad de Ingeniería', `mostrar` = b'1' WHERE `datos_footer`.`id` = 1 
				
				$nombre = "nombre".$iteracion;
				$dato = "dato".$iteracion;
				$query="";
				if($iteracion!=9){
					$query = "UPDATE datos_footer SET nombre = '".$_POST[$nombre]."' , valor='".$_POST[$dato]."' WHERE id='".$iteracion."' ";
				}else{
					$query = "UPDATE datos_footer SET valor='".$_POST[$dato]."' WHERE id='".$iteracion."' ";
				}

				if(mysqli_query($con,$query)){
					$contador = $contador +1;
				}
				
				$iteracion = $iteracion + 1;
			}
			echo $contador;

		break;


	}



?>