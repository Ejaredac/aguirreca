<?php
    
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
      
        $consultasql = "INSERT INTO libro(nombrelibro,gusto,genero,personajefav,arcofav,adult,calificacion,recomendacion) VALUES 
        ('$n','$g','$ge','$p','$a',$ad,'$c',$r)";
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
