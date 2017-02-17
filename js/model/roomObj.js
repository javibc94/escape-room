function roomObj ()
{
	//Attributes declaration
	this.name;
	this.type;
	this.numOfAdults;
	this.numOfChildren;
	this.specialRequests = new Array();
	this.PriceForPerson;



	//Methods declaration
	this.construct = function (id,name,surname,firstAddress,secondAddress, city, state, postalCode, numOfAdults, numOfChildren, phone, email, roomPreference, checkInDate, checkOutDate, checkInTime, checkOutTime, specialRequests, specialInstructions, PriceForPerson)
	{
		this.setName(name);
		this.setType(type);
		this.setNumOfAdults(numOfAdults);
		this.setNumOfChildren(numOfChildren);
		this.setSpecialRequests(specialRequests);
		this.setPriceForPerson(PriceForPerson);

	}

	this.setName = function (name){this.name=name;}
	this.setType = function (type){this.type=type;}
	this.setNumOfAdults = function (numOfAdults){this.numOfAdults=numOfAdults;}
	this.setNumOfChildren = function (numOfChildren){this.numOfChildren=numOfChildren;}
	this.setSpecialRequests = function (specialRequests){this.specialRequests=specialRequests;}
	this.setPriceForPerson = function (Price){this.PriceForPerson=Price;}

	this.addSpecialRequests = function (specialreq)
	{
		this.specialRequests.push(specialreq);
	}

	this.removeSpecialRequests = function (specialreq)
	{
		for (var i = 0; i < this.getSpecialRequests().length; i++)
		{
			if(this.getSpecialRequests()[i]==specialreq)
			{
				this.specialRequests.splice(i,1);
				break;
			}
		}

	}

	this.getName = function () {return this.name;}
	this.getType = function () {return this.surname;}
	this.getNumOfAdults = function () {return this.numOfAdults;}
	this.getNumOfChildren = function () {return this.numOfChildren;}
	this.getSpecialRequests = function () {return this.specialRequests;}
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
		reservationString +=" SPECIAL INS="+this.getSpecialInstructions();
		reservationString +=" PRICE FOR PERSON="+this.getPriceForPerson();
		return reservationString;
	}
}
