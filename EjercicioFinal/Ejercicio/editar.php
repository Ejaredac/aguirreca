<?php
    $idlib = $_POST['idlib'];
    $hostname = 'localhost';
    $database = '19100140';
    $username = 'root';
    $password = '';
    $port = '3306';
    $n =$_POST['n'];
    $g = $_POST['g'];
    $ge = $_POST['ge'];
    $p = $_POST['p'];
    $a = $_POST['a'];
    $ad = $_POST['ad'];
    $c = $_POST['c'];
    $r = $_POST['r'];


    try{
        echo "Jalo";
        $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);

    }
    catch(PDOException $ex){
        echo "Error en la base de datos";
        echo $ex -> getMessage();
        exit();

    }

    try{
      
        $consultasql = "UPDATE `19100140`.`libro`
        SET
        `nombrelibro` = '$n',
        `gusto` = '$g',
        `genero` = '$ge',
        `personajefav` = '$p',
        `arcofav` = '$a',
        `adult` = $ad,
        `calificacion` = '$c',
        `recomendacion` = $r
        WHERE `idlibro` = $idlib";
        $consulta = $con -> prepare($consultasql);
        $consulta -> execute();
        
        $consulta->closeCursor();
    }
    catch(PDOException $ex){
        echo "Error en la base de datos";
        echo $ex -> getMessage();
        exit();

    }
    
?>
