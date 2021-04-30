<?php 
	header('Access-Control-Allow-Origin:*');
	include_once 'conexion.php';

	switch($_SERVER['REQUEST_METHOD']){

		case 'GET':
			if(isset($_GET['usuario']) and isset($_GET['password']) and isset($_GET['tipo_usuario'])){
				//Validar usuario para login: devolver {valido:true/false}
				$con = conectar();
				$query = "select * from usuarios where usuario='".$_GET['usuario']."' and password ='".$_GET['password'].
				"' and tipo_usuario='".$_GET['tipo_usuario']."'";
				$json = array();

				$res = mysqli_query($con,$query);

				if(mysqli_num_rows($res)==0){
					//No existe el usuario
					$json = array("valido"=>false);
				}else{
					$json = array("valido"=>true);
				}
				mysqli_close($con);
				echo json_encode($json);

			}else{
				//No hay parametros, devuelve todos los usuarios

			}
		break;

	}
?>