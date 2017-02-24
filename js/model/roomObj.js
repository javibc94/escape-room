function roomObj ()
{
	//Attributes declaration
	this.name;
	this.type;
	this.description;
	this.numOfAdults;
	this.numOfChildren;
	this.PriceForPerson;



	//Methods declaration
	this.construct = function (name,type,desc,numOfAdults, numOfChildren, PriceForPerson)
	{
		this.setName(name);
		this.setType(type);
		this.setDescpription(desc);
		this.setNumOfAdults(numOfAdults);
		this.setNumOfChildren(numOfChildren);
		this.setPriceForPerson(PriceForPerson);

	}

	this.setName = function (name){this.name=name;}
	this.setType = function (type){this.type=type;}
	this.setDescpription = function(desc){this.description=desc;}
	this.setNumOfAdults = function (numOfAdults){this.numOfAdults=numOfAdults;}
	this.setNumOfChildren = function (numOfChildren){this.numOfChildren=numOfChildren;}
	this.setPriceForPerson = function (Price){this.PriceForPerson=Price;}

	this.getName = function () {return this.name;}
	this.getType = function () {return this.surname;}
	this.getDescription = function(){return this.description;}
	this.getNumOfAdults = function () {return this.numOfAdults;}
	this.getNumOfChildren = function () {return this.numOfChildren;}
	this.getPriceForPerson = function () {return this.PriceForPerson;}

	this.validate = function ()
	{
		var errors = new Array();

		try
		{
			if(this.getName().length == 0 || this.getName().match(/^[A-ZÑ][a-zA-Zñá-ú\s]+$/)==null)
			{
				errors.push("Name must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Name must be informed and contain only letters");
		}

		try
		{
			if(this.getType().length == 0)
			{
				errors.push("Type must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Type must be informed and contain only letters");
		}

		return errors;
	}

	this.toString = function (){
		var reservationString ="ESCAPE ROOM - NAME="+this.getName()+" TYPE="+this.getType();
		reservationString +=" MAX ADULTS="+this.getNumOfAdults();
		reservationString +=" MAX CHILDREN="+this.getNumOfChildren();
		reservationString +=" PRICE FOR PERSON="+this.getPriceForPerson();
		return reservationString;
	}
}
