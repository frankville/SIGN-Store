$(document).ready(function(){

	$("#linkUsuario").click(function (event){
		event.preventDefault();
		showUsuarioPanel();
	});

	$("#formResumenIngresos").submit(function( event ){

	});
});

function showUsuarioPanel(){
		$("#homePan").fadeOut("fast");
		$("#panelUsuario").fadeIn("fast");
}
