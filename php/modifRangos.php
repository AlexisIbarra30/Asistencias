<?php
	
	header('Access-Control-Allow-Origin:*');
	include_once 'conexion.php';

	/*
		GET para obtener todos los rangos actualmente registrados
		POST para actualizar los nuevos rangos ya validados
	*/

	switch($_SERVER['REQUEST_METHOD']){

		case 'GET':
			$con = conectar();
			$query ="SELECT programa_nombre,lim_inferior,lim_superior from programas";
			$json = array();
			$res = mysqli_query($con,$query);

			while($fila=mysqli_fetch_assoc($res))
				$json[] = $fila;

			mysqli_close($con);
			echo json_encode($json);
		break;

		case 'POST':
			$_POST = json_decode(file_get_contents('php://input'),true);
			$iteracion = 1;
			$con = conectar();

			while($iteracion<5){
				$lim1 ="r".$iteracion."i";
				$lim2 ="r".$iteracion."s";
				$query ="UPDATE programas SET lim_inferior ='".$_POST[$lim1]."',lim_superior= '".$_POST[$lim2]."' where id='".$iteracion."'";
				mysqli_query($con,$query);
				$iteracion = $iteracion +1;
			}
			mysqli_close($con);
			echo "correcto";

		break;
	}


?>