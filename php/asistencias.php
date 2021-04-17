<?php
    

    header('Access-Control-Allow-Origin:*');

    include_once 'conexion.php';
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //inserta los datos de asistencias
            $_POST = json_decode(file_get_contents('php://input'),true);
            $con = conectar();
            //Construimos consulta
            //Verificamos que el registro no exista ya
            $query ="SELECT * from asistencias WHERE nombre='".$_POST['nombre']."' and apellidos='".$_POST['apellidos']."' and fecha='".$_POST['fecha']."' and hora_entrada='".$_POST['hora_entrada']."' and hora_salida='".$_POST['hora_salida']."'";
            $res = mysqli_query($con,$query);
            if(mysqli_num_rows($res)==0){
                //El registro no existe, lo inserta
                $query="INSERT INTO asistencias(nombre,apellidos,fecha,hora_entrada,hora_salida,horas_permanencia)";
                $query=$query."values('".$_POST['nombre']."','".$_POST['apellidos']."','".$_POST['fecha']."','".$_POST['hora_entrada']."','".$_POST['hora_salida']."','".$_POST['horas_permanencia'].":00');";
                mysqli_query($con,$query);
                mysqli_close($con);
                echo "Insertado correctamente";
            }else{
                //El registro ya existe, informamos al cliente
                mysqli_close($con);
                echo "Ya existe el registro";
            }

            break;
        case 'GET':
            $con=conectar();
            $query="";

            //Primer caso, no se define rango de fecha: devuelve todo
            if(!(isset($_GET['fecha_inicio']) and isset($_GET['fecha_fin']) ))
                $query="SELECT nombre,apellidos,fecha,hora_entrada,hora_salida,horas_permanencia FROM asistencias order by fecha desc";
            else    //Devuelve solo dentro de un rango de fechas
                $query="SELECT nombre,apellidos,fecha,hora_entrada,hora_salida,horas_permanencia FROM asistencias WHERE fecha BETWEEN '".$_GET['fecha_inicio']."' and '".$_GET['fecha_fin']."'";

            $res=mysqli_query($con,$query);
            $json= array();
            while($fila=mysqli_fetch_assoc($res))
                $json[] = $fila;
            echo json_encode($json);
            break;
    }

?>