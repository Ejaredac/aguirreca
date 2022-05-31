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
       
        idlibro=prompt("Teclee id del libro");

        $.post('buscar.php',{idlib:idlibro},function(data){
            console.log(data);
            refrescarbusqueda(data);
        },'json');

        
    });
    $('#btnEliminar').click(function(){
        idlibro = prompt("Teclee el id del libro");
        $.post('eliminar.php',{idlib:idlibro},function(data){
            eliminarbusqueda(data);
        },'json');
    });
    $('#btnAgregar').click(function(){
        let nom = document.getElementById("inHistoriaPreferida").value;
        let gusto = document.getElementById("textQueTeGusto").value;
        let genero = document.getElementById("spanGenero").value;
        let personaje = document.getElementById("inPersonajeFavorito").value;
        let arco = document.getElementById("inArcoFavorito").value;
        let adulto = document.getElementById("chkAdultos").checked;
        let cali = document.getElementById("rangoCalificacion").value;
        let recom = document.getElementById("radSi1").checked;

        $.post('agregar.php',{n:nom , g:gusto , ge:genero , p:personaje, a:arco , ad:adulto , c:cali ,r:recom},function(data){
            agregar(data);
        })
    });
    $('#btnEditar').click(function(){
        idlibro = prompt("Teclee el id del libro");
        let nom = document.getElementById("inHistoriaPreferida").value;
        let gusto = document.getElementById("textQueTeGusto").value;
        let genero = document.getElementById("spanGenero").value;
        let personaje = document.getElementById("inPersonajeFavorito").value;
        let arco = document.getElementById("inArcoFavorito").value;
        let adulto = document.getElementById("chkAdultos").checked;
        let cali = document.getElementById("rangoCalificacion").value;
        let recom = document.getElementById("radSi1").checked;

        $.post('editar.php',{n:nom , g:gusto , ge:genero , p:personaje, a:arco , ad:adulto , c:cali ,r:recom,idlib:idlibro},function(data){
            editar(data);
        })
    });
});
var idlibro = 0;
function updateTextInput(val) {
    document.getElementById('inCali').value=val; 
  }

function ajaxFunction(){
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();
    $.post('buscar.php',{},function(data){
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
    ajaxRequest.open("GET","buscar.php",true);
    ajaxRequest.send();
}
function refrescarbusqueda(data){
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
function eliminarbusqueda(data){

}
function agregar(data){

}
function editar(data){

}