<?php 
	header('Access-Control-Allow-Origin:*');
	include_once 'conexion.php';

	/*
		Parametros:
		usuario: Nombre de usuario
		password: contraseña para ingresar
		tipo_usuario: Valor de 0 para usuario y 1 para administrador

		GET devuelve verdadero o falso en caso de existir dicho usuario
		POST inserta un nuevo usuario a la base


		Respuestas al agregar un usuario:
		- usuario repetido
		- campos vacios
		- correcto

		Respuestas al consultar usuario (login)
		- JSON con valor de campo valido -> true si existe  / false si no existe
		- texto plano "campos vacios"
	*/

	switch($_SERVER['REQUEST_METHOD']){

		

		case 'POST':

			$_POST = json_decode(file_get_contents('php://input'),true);
			$json = array();

			if(isset($_POST['nombre']) and isset($_POST['apellidos']) and isset($_POST['usuario']) and isset($_POST['password']) and isset($_POST['tipo_usuario'])){
				$con = conectar();

				//verificamos que no exista ya el usuario (ver si no se repite el nombre o el usuario)
				$query = "SELECT * from usuarios where nombre like '".$_POST['nombre']."' and apellidos like '".$_POST['apellidos']."' and usuario = '".$_POST['usuario']."'";
				$res = mysqli_query($con,$query);

				if(mysqli_num_rows($res)==0){
					$query = "INSERT INTO usuarios (nombre,apellidos,usuario,password,tipo_usuario) VALUES ('".$_POST['nombre']."','".$_POST['apellidos']."','".$_POST['usuario']."','".$_POST['password']."','".$_POST['tipo_usuario']."')";
					mysqli_query($con,$query);
					echo json_encode($query);	
				}else{
					echo json_encode('usuario repetido');
				}

				
			}else{
				echo json_encode("Campos vacios");
			}	
			
			break;

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
				echo json_encode('campos vacios');
			}
			break;

	}
?>