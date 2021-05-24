<?php 
	header('Access-Control-Allow-Origin:*');
	include_once 'conexion.php';

	 switch($_SERVER['REQUEST_METHOD']){
	 	case 'GET':
	 		//Si no recibe parametros, regresa todos los nombres de alumnos
	 		$con = conectar();
	 		$query = "select nombre,apellidos from asistencias group by nombre";
	 		$res=mysqli_query($con,$query);
            $json= array();

            while($fila=mysqli_fetch_assoc($res))
                $json[] = $fila;

            mysqli_close($con);
            echo json_encode($json);
	 	break;

	 }


?>