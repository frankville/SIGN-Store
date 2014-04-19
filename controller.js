
var database ;

$( document ).ready( function(){
	initDatabase();

});


var initDatabase = function () {
var request = window.indexedDB.open('SIGN-Store', 1);
request.onerror = function(event) {
	showErrMsg("El navegador no soporta IndexedDB :/ "+JSON.stringify(event));
};
request.onsuccess = function(event) {

	database = request.result;
	getUsers();

baseDatos.onerror = function ( event ){
	showErrMsg("Database error! "+event.target.errorCode);

};


};


request.onupgradeneeded = function (event){

	  var db = event.target.result;

  var usuarios = db.createObjectStore("SalesUsers", { keyPath: "username" });
    usuarios.createIndex("fullname", "fullname", { unique: false });
  usuarios.createIndex("password", "password", { unique: false });
  usuarios.createIndex("photo", "photo", { unique: false });
  usuarios.createIndex("email", "email", { unique: false });
    usuarios.createIndex("addresses", "addresses", { unique: false });
  usuarios.createIndex("phones", "phones", { unique: false });
  usuarios.createIndex("SalesSessions", "SalesSessions", { unique: false });

  var usuarios = db.createObjectStore("AdminUsers", { keyPath: "username" });
    usuarios.createIndex("fullname", "fullname", { unique: false });
  usuarios.createIndex("password", "password", { unique: false });
  usuarios.createIndex("photo", "photo", { unique: false });
  usuarios.createIndex("email", "email", { unique: false });
    usuarios.createIndex("addresses", "addresses", { unique: false });
  usuarios.createIndex("phones", "phones", { unique: false });
  usuarios.createIndex("AdminSessions", "AdminSessions", { unique: false });


};


};