function userObj ()
{
	//Attributes declaration
	this.name;
	this.lastName;
	this.email;
	this.phone;
	this.dni;

	//Methods declaration
	this.construct = function (name, lastName, email, phone, dni) {
		this.setName(name);
    this.setLastName(lastName);
    this.setEmail(email);
    this.setPhone(phone);
    this.setDni(dni);
	}

	this.setName = function (name){this.name=name;}
	this.setLastName = function (lastName){this.lastName=lastName;}
	this.setEmail = function (email){this.email=email;}
	this.setPhone = function (phone){this.phone=phone;}
	this.setDni = function (dni){this.dni=dni;}

	this.getName = function () {return this.name;}
	this.getLastName = function () {return this.lastName;}
	this.getEmail = function () {return this.email;}
	this.getPhone = function () {return this.phone;}
	this.getDni = function () {return this.dni;}
}
