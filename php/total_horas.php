<?php
    include_once 'conexion.php';

    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');

    $con=conectar();
    $query="SELECT nombre,apellidos,SEC_TO_TIME(SUM(TIME_TO_SEC(horas_permanencia))) as total_horas from asistencias where fecha BETWEEN '".$_GET['fecha_inicio']."' and '".$_GET['fecha_fin']."' group by nombre";
    $res = mysqli_query($con,$query);
    //Generamos JSON
    if(mysqli_num_rows($res)==0){
        echo "Sin registros";
    }else{
        $json= array();
        while($fila=mysqli_fetch_assoc($res))
            $json[] = $fila;
        echo json_encode($json);
    }
    
?>