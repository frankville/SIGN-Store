$(document).ready(function(){

	$("#listaAlu").click(function (event){
		showControlPanel();
	});

	$("#formResumenIngresos").submit(function( event ){
		event.preventDefault();


	});
});

function showControlPanel(){
		event.preventDefault();
			alert("entra");
		$("#homePan").fadeOut("fast");
		$("#ctrlListaAlu").fadeIn("slow");
		$("#visor").fadeIn("slow");

}

function getListaAlu(){

		$.ajax ({
		type: "GET",
		url: "http://localhost/listaAlu",
		//contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: {
			jsonObj: JSON.stringify(sesion)
		},
		success: function (data, status, jqXHR) {
			darRespuesta(data.status);
		},
		error: function(xhrequest, ErrorText, thrownError) {
            mostrarError(thrownError + ": " + ErrorText);
        }

	});
}