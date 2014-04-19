

function verifyCredentials(user,pwd, callback){
	var transac  = database.transaction(["users"],"readwrite");
	var users = transac.objectStore("users");
	var request = users.get(user);
	request.onsuccess = function(event){

		if(request.result != undefined){
			if((request.result.pass == pwd)){

				callback(request.result, transac);
			}else{
				showErrMsg("contraseña incorrecta");
			}
		}else{
			showErrMsg("el usuario no existe");

		}

	};

	request.onerror = function (event){
		showErrMsg("error de INDEXEDDB en verifyCredentials");
	};
};

function addSesion(usuario,transac) {

  var date  = new Date();

  	var sesion = new Sesion(date.toDateString(),date.toTimeString(),$("#listaSucs").val());
  	usuario.sesiones.push(sesion);
  	var objstore = transac.objectStore("usuarios");
 	 var req = objstore.put(usuario);

 	req.onsuccess = function (event) {
 			loggedIn();
 	};   		
 	req.onerror = function(event){
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

	for(var i=0;i < sesiones.length; i++){
		var fila = "<tr>"+"<td>"+sesiones[i].fecha+"</td>"+"<td>"+sesiones[i].hora+"</td>"
		+"<td>"+sesiones[i].sucursal+"</td>"+"</tr>";
		$("#listaSesiones").append(fila);

	};
};