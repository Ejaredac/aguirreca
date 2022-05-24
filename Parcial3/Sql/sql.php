<?php
    $idlib = $_POST['idlib'];
    $hostname = 'localhost';
    $database = '19100140';
    $username = 'root';
    $password = '';
    $port = '3306';


    try{
        $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);

    }
    catch(PDOException $ex){
        echo "Error en la base de datos";
        echo $ex -> getMessage();
        exit();

    }

    try{
        $consultasql = "select * from libro where idlibro =".$idlib;
        $consulta = $con -> prepare($consultasql);
        $consulta -> execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
    }
    catch(PDOException $ex){
        echo "Error en la base de datos";
        echo $ex -> getMessage();
        exit();

    }
    echo json_encode($resultado);
?>
