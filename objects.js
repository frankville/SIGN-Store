function User(){
	this.fullname = "";
	this.username = "";
	this.password = "";
	this.email = "";
	this.photo = new Object();
	this.addresses = new Array();
	this.phones = new Array();
}

function SalesUser(){
	User.call(this);
	this.salesSessions = new Array();
}

SalesUser.prototype = new User();
SalesUser.prototype.constructor = SalesUser;

function AdminUser(){
	User.call(this);
	this.adminSessions = new Array();
}

AdminUser.prototype = new User();
AdminUser.prototype.constructor = AdminUser;

function OwnerUser(){
	User.call(this);
	this.sessions = new Array();
}

OwnerUser.prototype = new User();
OwnerUser.prototype.constructor = OwnerUser;

function Phone(){
	this.phoneNumber = 0;
	this.phoneType="";
	this.toString = function(){
		return phoneNumber+" ("+phoneType")";
	}
}

function Session(){
	this.datetimeSession = new Date();
}

function SalesSession(){
	Session.call(this);
	this.initialBalance = 0;
	this.finalBalance = 0;
	this.pointOfSale = new PointOfSale();	
}

SalesSession.prototype = new Session();
salesSessions.prototype.constructor = SalesSession;


function PointOfSale(){
	this.posName = "";
	this.posAddress = "";
	this.posPhones = new Array();
}



