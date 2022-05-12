$(document).ready(function(){
    $('#btn1').click(function(){
        $('#alert1').show();
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
    $.post('practicaajax.php',{},function(data){
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
    ajaxRequest.open("GET","practicaajax.php",true);
    ajaxRequest.send();
}