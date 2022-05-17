<?php
    

    $registro['idHistoria'] =  'El heroe de las mil caras';
    $registro['gustostr'] = 'Que el libro hay sido muy inspirador y epico';
    $registro['genero'] = 'Aventura Epica';
    $registro['personaje'] = 'EL HEROE';
    $registro['arco'] = 'LA CAIDA DEL HEROE';
    $registro['mayoriaedad'] = 'true';
    $registro['puntuacion'] = '99';
    $registro['recomendado'] = 'si';

    $registroJSON = json_encode($registro);
    echo $registroJSON;
?>
