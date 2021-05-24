<?php
    

    header('Access-Control-Allow-Origin:*');

    include_once 'conexion.php';
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Variables respuesta
            $nuevos = 0;
            $repetidos = 0;
            $errores = 0;
            //inserta los datos de asistencias
            $_POST = json_decode(file_get_contents('php://input'),true);
            $con = conectar();
            
            //Recorremos JSON para realizar insersiones/verificar datos repetido
            foreach($_POST as $reg){
                
                if(isset($reg['nombre']) and isset($reg['apellidos']) and isset($reg['fecha']) and isset($reg['hora_entrada'])and isset($reg['hora_salida']) and isset($reg['horas_permanencia'])){
                    //Generamos consulta
                    $query ="SELECT * from asistencias WHERE nombre='".$reg['nombre']."' and apellidos='".$reg['apellidos']."' and fecha='".$reg['fecha']."' and hora_entrada='".$reg['hora_entrada']."' and hora_salida='".$reg['hora_salida']."'";
                    $res = mysqli_query($con,$query);
                    if(mysqli_num_rows($res)==0){
                        //El registro no existe, lo inserta
                        $query="INSERT INTO asistencias(nombre,apellidos,fecha,hora_entrada,hora_salida,horas_permanencia)";
                        $query=$query."values('".$reg['nombre']."','".$reg['apellidos']."','".$reg['fecha']."','".$reg['hora_entrada']."','".$reg['hora_salida']."','".$reg['horas_permanencia']."')";
                        mysqli_query($con,$query);
                        $nuevos = $nuevos+1;

                    }else{
                        //El registro ya existe, informamos al cliente
                        $repetidos = $repetidos+1;
                    }
                
                 }else{
                    $errores = $errores+1;
                 }
             }

            mysqli_close($con);
            //Construimos respuesta en base a los resultados
            $res = array("nuevos"=>$nuevos,"repetidos"=>$repetidos,"errores"=>$errores);
            echo json_encode($res);
            
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