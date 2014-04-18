// var db = openDatabase("test", "1.0", "BD Prueba", 1024);  // Open SQLite Database
var sesion = null;



$("#usuario").keyup(function(event){
	if(event.which != 13){
			$("#alcahuete").fadeOut("fast");
	};	
});

$("#pass").keyup(function(event){
	if(event.which != 13){
			$("#alcahuete").fadeOut("fast");
	};
});

$("#formulario").submit(function(event){
	event.preventDefault();
		verifyCredentials($("#usuario").val(),$("#pass").val(), addSesion);

});

function hideLoadingBar(){
		$("#loaderContainer").fadeOut("fast");
}

var datosLogin = function  (nomus, passus) {
	this.j_username = nomus;
	this.j_password = passus;
};

function  loggedIn(){

		$("#marco").fadeOut("fast",function () {
			$("#menu").fadeIn("fast");
		});

		showSuccessMsg("Exito! tu usuario y password son validos");
};

