
$(document).ready(function () {

$("#saveUserButton").click(function(event){
	event.preventDefault();
	SalesUser nvo = getSalesUserData();
	addNewSalesUser(nvo);
});

});


function getSalesUserData(){
	SalesUser u = new SalesUser();
	u.username = $("#usuario").val();
	u.fullname = $("#fullname").val();
	u.password = $("#password").val();
	u.email = $("#email").val();
	u.photo = $("#photo").val();
	u.phones = $("#phones").options;
	u.addresses = $("#addresses").options;
	u.SalesSessions = new Array();
	return u;
}


var addNewSalesUser = function(salesUser) {
  	
  // Use transaction oncomplete to make sure the objectStore creation is 
  // finished before adding data into it.
  if(usuario.nombre != "") {
  	  	var transac = database.transaction(["SalesUsers"],"readwrite");
  		var salesUsers = transac.objectStore("SalesUsers");

 	 	var request = salesUsers.add(salesUser);
 		transac.oncomplete = function (event) {
 			getUsuarios();
 			showSuccessMsg("Exito! usuario agregado");
 			clearUserForm();
 		};   		
 		transac.onerror = function(event){
 			usersErrMsg("Error de IndexedDB al agregar un nuevo usuario");
 		}

 	}else {
 		usersErrMsg("Tenés que proporcionar un usuario y una contraseña");
	 }


 };

var getSalesUsers = function (){
	var array = new Array();

	var salesUsers = database.transaction("SalesUsers").objectStore("SalesUsers");

salesUsers.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
  	SalesUser newUser = new SalesUser();
  	u.username = cursor.key;
  	u.fullname = cursor.value.fullname;
  	u.password = cursor.value.password;
	u.email = cursor.value.email;
	u.photo = cursor.value.photo;
	u.phones = cursor.value.phones;
	u.addresses = cursor.value.addresses;
	u.SalesSessions = cursor.value.SalesSessions;
  	array.push(newUser);
    cursor.continue();
  }
  else {
     reloadSalesUsers(array);
  }
};

salesUsers.openCursor().onerror = function (event){
	alert("error en getusuarios!!");
}

};

function deleteUser(user){
var request = database.transaction(["SalesUsers"], "readwrite")
                .objectStore("SalesUsers")
                .delete(user);
request.onsuccess = function(event) {
	salesUsersSuccessMsg("Borraste el usuario "+user.username+" con éxito");
};
};


var reloadSalesUsers = function(salesUsers){
	$("#salesUsersList tbody tr").remove();

	// Check to see if we have any results.
	if (!salesUsers){
	return;
	}

	for(var i=0;i < salesUsers.length; i++){
		var row = "<tr>"+
		var phones = "<select>";
		var  addresses = "";
		var SalesSessions = "";
		for (var x = 0; i < salesUsers[i].phones.length; x++) {
		 	phones = phones+"<option>"salesUsers[i].phones[x].toString()+"</option>";
		};
		phones = phones+"</select>";
		for (var x = 0; i < salesUsers[i].addresses.length; x++) {
		 	addresses = addresses+salesUsers[i].addresses[x];
		};
		addresses = addresses+"</select>";

		"<td>"+salesUsers[i].fullname+"</td>"+
		"<td>"+salesUsers[i].username+"</td>"+
		"<td>"+salesUsers[i].password+"</td>"+
		"<td>"+salesUsers[i].email+"</td>"+
		"<td>"+salesUsers[i].photo+"</td>"+
		"<td>"+phones+"</td>"+
		"<td>"+addresses+"</td>"+
		"<td>"+"<button class='form-control'>x</button></td>"+
		"</tr>";
		$("#salesUsersList").append(row);

	};

	$('#salesUsersList tbody tr :button').click(function(e){
 				deleteUser($(this).closest('tr').find(".username").text());
   				$(this).closest('tr').remove();
   				$('#salesUsersList tbody tr').remove();
	});
	};

	function clearUserForm(){
			$("#username").val("");
			$("#password").val("");
			$("#email").val("");
			$("#userPhoto").attr("src","...");
			$("#addresses").val("");
			$("#alcahuete").fadeOut("fast");
			for (var i = 0; i $("#phones").length; i++) {
					$("#phones").remove(i);
			};
			for (var i = 0; i $("#addresses").length; i++) {
					$("#addresses").remove(i);
			};

	};

