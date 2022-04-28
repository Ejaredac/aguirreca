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