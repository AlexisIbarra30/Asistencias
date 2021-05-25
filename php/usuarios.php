<?php 
	header('Access-Control-Allow-Origin:*');
	include_once 'conexion.php';

	/*
		Para VALIDAR un usuario: (usuario, password,tipo_usuario)
			METODO GET, enviar usuario, password y tipo_usuario en formato JSON. Retorna JSON del tipo {"validar":true/false}

		Para LISTAR TODOS los usuarios: (sin parametros)
			METODO GET, sin parametros. Retorna JSON con los datos: nombre, aoellidos, usuario y tipo_usuario (no retorna contraseña)

		Para AGREGAR un usuario: (nombre, apellidos,usuario,password,tipo_usuario)
			METODO POST, enviar nombre, apellidos, usuario, password, tipo_usuario en formato JSON. Retorna "correcto", "usuario repetido" o "campos vacios"

		Para ACTUALIZAR usuario: (id,nombre, apellidos,usuario,password,tipo_usuario)
			METODO POST, agregando el ID a los mismos datos para agregar usuario(nombre,apellidos, etc). Retorna "correcto", "usuario repetido" o "campos vacios"

		Para ELIMINAR usuario: (id)
			METODO GET, enviando unicamente el ID del usuario en formato "JSON". Presupone que el usuario con dicho ID existe, por lo que siempre es correcto
			
	*/

	switch($_SERVER['REQUEST_METHOD']){

		
		//POST para agregar y actualizar
		case 'POST':

			$_POST = json_decode(file_get_contents('php://input'),true);
			$json = array();

			if(isset($_POST['nombre']) and isset($_POST['apellidos']) and isset($_POST['usuario']) and isset($_POST['password']) and isset($_POST['tipo_usuario'])){
				$con = conectar();

				//verificamos que no exista ya el usuario (ver si no se repite el nombre o el usuario)
				$query = "SELECT * from usuarios where nombre like '".$_POST['nombre']."' and apellidos like '".$_POST['apellidos']."' and usuario = '".$_POST['usuario']."'";
				$res = mysqli_query($con,$query);

				if(mysqli_num_rows($res)==0){

					$query="";

					if(isset($_POST['id'])){
						//Si viene el id, significa que se actualiza el registro
						$query = "UPDATE usuarios SET nombre= '".$_POST['nombre']."',apellidos='".$_POST['apellidos']."',usuario = '".$_POST['usuario']."',password='".$_POST['password']."', tipo_usuario = ".$_POST['tipo_usuario']." where id=".$_POST['id'];
					}else{
						//si no viene el id, se inserta nuevo registro
						$query = "INSERT INTO usuarios (nombre,apellidos,usuario,password,tipo_usuario) VALUES ('".$_POST['nombre']."','".$_POST['apellidos']."','".$_POST['usuario']."','".$_POST['password']."','".$_POST['tipo_usuario']."')";
					}

					mysqli_query($con,$query);
					echo json_encode("correcto");	
				}else{
					echo json_encode('usuario repetido');
				}

				
			}
			else{
				echo json_encode("Campos vacios");
			}	
			
			break;

		case 'GET':
			$_GET = json_decode(file_get_contents('php://input'),true);

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

			}else if(isset($_GET['id']) and !isset($_GET['nombre']) and !isset($_GET['apellidos']) and !isset($_GET['usuario']) and !isset($_GET['password'])){
				//Si solo viene el ID en metodo GET, significa que borrará al usuario
				$con = conectar();
				$query = "DELETE from usuarios where id=".$_GET['id'];
				mysqli_query($con,$query);
				mysqli_close($con);
				echo json_encode('Borrado: ID'.$_GET['id']);
			}
			else{
				//Si no viene ninguna variable, devolver todos los usuarios
				$con = conectar();
				$query ="SELECT id,nombre,apellidos,usuario,tipo_usuario from usuarios";
				$json = array();

				$res = mysqli_query($con,$query);

				while($fila=mysqli_fetch_assoc($res))
                	$json[] = $fila;
                mysqli_close($con);
                echo json_encode($json);

			}
			break;
		
	}
?>