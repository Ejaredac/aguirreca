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
    
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 4){
            document.getElementById('inHistoriaPreferida').value = ajaxRequest.responseText;
        }
    }
    ajaxRequest.open("GET","practicaajax.php",true);
    ajaxRequest.send();
}