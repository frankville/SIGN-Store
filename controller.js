

//var db = openDatabase("test", "1.0", "BD Prueba", 1024);  // Open SQLite Database

var baseDatos ;

$( document ).ready( function(){
	initDatabase();

	//getUsuarios(recargarUsuarios);
});


var initDatabase = function () {
var request = window.indexedDB.open('SIGN-Store', 1);
request.onerror = function(event) {
	showErrMsg("El navegador no soporta IndexedDB :/ "+JSON.stringify(event));
};
request.onsuccess = function(event) {

	baseDatos = request.result;
	getUsuarios();

baseDatos.onerror = function ( event ){
	//generic error handler for all errors asociated with this db 
	showErrMsg("Database error! "+event.target.errorCode);



};


};



request.onupgradeneeded = function (event){
	//este evento se dispara si estamos queriendo inicializar una version superior 
	//a la que se uso cuando se creo la bd
	//aca se tienen que crear los objetos ("tablas")
	  var db = event.target.result;
  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique.
  var usuarios = db.createObjectStore("usuarios", { keyPath: "nombre" });
  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  usuarios.createIndex("pass", "pass", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  usuarios.createIndex("email", "email", { unique: false });

  usuarios.createIndex("sesiones", "sesiones", { unique: false });



};


};


