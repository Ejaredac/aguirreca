//window.onload = function () {
//	document.getElementById("idcontent").addEventListener("click", function (evento) {
//		document.getElementById(evento.target.id).classList.toggle("cajacambio");
//	});
//}
$(document).ready(function(){
	$('#idcontent').click(function(e){
		$(e.target).toggleClass('cajaCambio');
	})
})
