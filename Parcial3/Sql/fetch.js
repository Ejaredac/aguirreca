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
            solicitud.open("GET","fetch.txt",true);
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
        //var promesa = fetch('fetch.php');
        //promesa.then(respuesta => respuesta.json()).then(function(datos){console.log(datos)});
        console.log('dde');
        let idvar=prompt("Teclee id del libro");

        $.post('fetch.php',{idlibro:idvar},function(data){
            refrescar(data);
        },'json');
    });

    $('#btnCerraralert').click(function(){
        $('#alert1').hide();
    });
    $('#btnConsulta').click(function(){
        
    });
});

function updateTextInput(val) {
    document.getElementById('inCali').value=val; 
  }

function ajaxFunction(){
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();
    $.post('fetch.php',{},function(data){
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
    ajaxRequest.open("GET","fetch.php",true);
    ajaxRequest.send();
}
function refrescar(data){
    console.log(data);
    $('#inHistoriaPreferida').val(data.idlibro);
}
