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

	//verifyCredentials($("#usuario").val(),$("#pass").val(), addSesion);

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
			$("#ventas").fadeIn("fast");
		});

		showSuccessMsg("Exito! tu usuario y password son validos");
};

function showErrMsg(msg){

		$("#alcahuete").text(msg);
		$("#alcahuete").removeClass("alert-info");
		$("#alcahuete").removeClass("alert-success");
		$("#alcahuete").addClass("alert-danger");
		$("#alcahuete").fadeIn("fast");
}

function showSuccessMsg(msg){

			$("#alcahuete").text(msg);
		$("#alcahuete").removeClass("alert-info");
		$("#alcahuete").removeClass("alert-danger");
		$("#alcahuete").removeClass("collapse");
		$("#alcahuete").addClass("alert-success");
		$("#alcahuete").fadeIn("fast");

}