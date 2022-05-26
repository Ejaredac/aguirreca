$(document).ready(function(){
    $('#btn1').click(function(){
        $('#alert1').show();
        let promesa = new Promise(function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function(){
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.responseText);
                }
            };
            solicitud.open("GET","ejerciciofinal.txt",true);
            solicitud.send();
        });
        promesa.then(function(value){document.getElementById("enca").innerHTML=value;});
    });
    $('#btn2').click(function(){
        $('#modal1').show();
    });
    $('#btncerrar').click(function(){
        $('#modal1').hide();
    });
    $('#btnfetch').click(function(){
        var promesa = fetch('ejerciciofinal.php');
        promesa.then(respuesta => respuesta.json()).then(function(datos){console.log(datos)});
        
    });

    $('#btnCerraralert').click(function(){
        $('#alert1').hide();
    });
    $('#btnConsulta').click(function(){
       
        let idlibro=prompt("Teclee id del libro");

        $.post('ejerciciofinal.php',{idlib:idlibro},function(data){
            console.log(data);
            refrescar(data);
        },'json');

        
    });
});

function updateTextInput(val) {
    document.getElementById('inCali').value=val; 
  }

function ajaxFunction(){
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();
    $.post('ejerciciofinal.php',{},function(data){
        console.log(data);
        $('#inHistoriaPreferida').val(data.idHistoria);
        $('#textQueTeGusto').val(data.gustostr);
        $('#inPersonajeFavorito').val(data.personaje);
        $('#inArcoFavorito').val(data.arco);
    },'json');
    ajaxRequest.onreadystatechange = function(){
        var idhistoria;
        var gusto, genero;
        var personaje, arco;
        var edad, punt;
        var recomendado;

    }
    ajaxRequest.open("GET","ejerciciofinal.php",true);
    ajaxRequest.send();
}
function refrescar(data){
    console.log(data);
    $('#inHistoriaPreferida').val(data.nombrelibro);
    $('#textQueTeGusto').val(data.gusto);
    $('#spanGenero').val(data.genero);
    $('#inPersonajeFavorito').val(data.personajefav);
    $('#inArcoFavorito').val(data.arcofav);
    document.getElementById('chkAdultos').checked = data.adult;
    document.getElementById('inCali').value=data.calificacion;
    document.getElementById('rangoCalificacion').value = data.calificacion;
    var rec = data.recomendacion;
    if(rec == true){
    document.getElementById('radSi1').checked = true;
    document.getElementById('radNo2').checked = false;
    }
    else{
    document.getElementById('radNo2').checked = true;
    document.getElementById('radSi1').checked = false;
    }
}
