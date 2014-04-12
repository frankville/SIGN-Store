$(document).ready(function(){
	$("#cargaSesiones").submit(function(event){
		event.preventDefault();
		verifyCredentials($("#nomUs").val(),$("#passUs").val(),addSesion);
	});
});


function Sesion(f,h,s){
	this.fecha = f;
	this.hora = h;
	this.sucursal = s;	
};

function verifyCredentials(user,pwd, callback){
	var transac  = baseDatos.transaction(["usuarios"],"readwrite");
	var usuarios = transac.objectStore("usuarios");
	var request = usuarios.get(user);
	request.onsuccess = function(event){
		if(request.result != undefined){
			if((request.result.pass == pwd)){
				callback(request.result, transac);
			}else{
				showErrMsg("No pasaste la verificacion");
			}
		}else{
			showErrMsg("No pasaste la verificacion");
		}

	};
	request.onerror = function (event){
		showErrMsg("error de INDEXEDDB en verifyCredentials");
	};
};


function addSesion(usuario,transac) {
	  // Use transaction oncomplete to make sure the objectStore creation is 
  // finished before adding data into it.

  var date  = new Date();

  	var sesion = new Sesion(date.toDateString(),date.toTimeString(),$("#listaSucs").val());
  	usuario.sesiones.push(sesion);
  	var objstore = transac.objectStore("usuarios");
 	 var req = objstore.put(usuario);
 	  		alert("aca llega");

 	transac.oncomplete = function (event) {
 			loggedIn();
 	};   		
 	transac.onerror = function(event){
 		alert("Error en put request");
 	}

};


function getSesiones(nombreUsuario) {

	var usuarios = baseDatos.transaction("usuarios").objectStore("usuarios");
	var request = usuarios.get(nombreUsuario);
	request.onsuccess = function(event) {
  	    	recargarSesiones(event.target.result.sesiones);
	};
	request.onerror = function(event){
		alert("Error al getSesiones");
	}
};


function recargarSesiones(sesiones) {
	// Clear out sesiones table
	$("#listaSesiones tbody tr").remove();
	// Check to see if we have any results.
	if (!sesiones){
	return;
	}
 
	// Loop over the current list of girls and add them
	// to the visual list.
	for(var i=0;i < sesiones.length; i++){
		var fila = "<tr>"+"<td>"+sesiones[i].fecha+"</td>"+"<td>"+sesiones[i].hora+"</td>"
		+"<td>"+sesiones[i].sucursal+"</td>"+"</tr>";
		$("#listaSesiones").append(fila);

	};
};