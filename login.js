// var db = openDatabase("test", "1.0", "BD Prueba", 1024);  // Open SQLite Database
var sesion = null;

$(document).ready(function(){

	$("#loaderContainer").fadeOut("fast");
});


$("#usuario").keyup(function(){
	$("#alcahuete").fadeOut("fast");
});
$("#pass").keyup(function(){
	$("#alcahuete").fadeOut("fast");
});
$("#formulario").submit(function(event){
	event.preventDefault();
	$("#formulario").fadeOut("fast",function () {
			$("#loaderContainer").fadeIn("fast");
	});

	verifyCredentials($("#usuario").val(),$("#pass").val(), darRespuesta);
	/* 
$("#usuario").show("fast",function(){});
		$("#pass").show("fast",function(){});
		$("#spin").fadeOut("fast");
	*/

});

var datosLogin = function  (nomus, passus) {
	this.j_username = nomus;
	this.j_password = passus;
};

var darRespuesta = function(result,transac){
			if(result != 0 ){

		$("#marco").fadeOut("fast",function () {
			$("#menu").fadeIn("fast");
		});
		$("#alcahuete").text("Exito! tu usuario y password son validos");
		$("#alcahuete").removeClass("alert-info");
		$("#alcahuete").removeClass("alert-danger");
		$("#alcahuete").removeClass("collapse");
		$("#alcahuete").addClass("alert-success");

	}else{
		$("#loaderContainer").fadeOut("fast",function () {
			$("#formulario").fadeIn("fast");
		});
		<!--
		$("#alcahuete").text("Error! tu usuario y password NO son validos");
		$("#alcahuete").removeClass("alert-info");
		$("#alcahuete").removeClass("alert-success");
		$("#alcahuete").removeClass("collapse");
		$("#alcahuete").addClass("alert-danger");
		-->
	};

};

var mostrarError = function(data){
	setTimeout(function(){
		$("#loaderContainer").fadeOut("fast",function () {
			$("#formulario").fadeIn("fast");
		});
	$("#alcahuete").text("Error en http request: "+data);
		$("#alcahuete").removeClass("alert-info");
		$("#alcahuete").removeClass("alert-success");
		$("#alcahuete").removeClass("collapse");
		$("#alcahuete").addClass("alert-danger");
	}, 2000);
};


