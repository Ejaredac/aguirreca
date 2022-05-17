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
            solicitud.open("GET","getHeader.txt",true);
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
    

})

function updateTextInput(val) {
    document.getElementById('inCali').value=val; 
  }

function ajaxFunction(){
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();
    $.post('promesa.php',{},function(data){
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
    ajaxRequest.open("GET","promesa.php",true);
    ajaxRequest.send();
}

