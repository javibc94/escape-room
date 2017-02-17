/* @reservationObj()
* @author: Xavier Pérez Grau
* @date: 17/02/2017
* @description: Object reservation
* @Attributes:
* 		id: id for the reservation
User: object user who makes the reservation
numOfAdults;
numOfChildren;
checkInDate;
checkOutDate;
checkInTime;
checkOutTime;
specialRequirements;
totalPrice;
* @methods:
* 		construct
* 		set's and get's foor each attribute
* 		toString(): transforms an object to well formated string with the attributes
*
*/

function reservationObj ()
{
	//Attributes declaration
	this.checkInDate;//date
	this.checkInTime;
	this.nPlayers;
	this.type;
	this.totalPrice;

	//Methods declaration
	this.construct = function (checkInDate, checkInTime, nPlayers, type, totalPrice)
	{
		this.setCheckInDate(checkInDate);
		this.setCheckInTime(checkInTime);
		this.setNPlayers(nPlayers);
		this.setType(type);
		this.setTotalPrice(totalPrice);

	}

	this.setCheckInDate = function (checkInDate){this.checkInDate=checkInDate;}
	this.setCheckOutDate = function (checkOutDate){this.checkOutDate=checkOutDate;}
	this.setCheckInTime = function (checkInTime){this.checkInTime=checkInTime;}
	this.setCheckOutTime = function (checkOutTime){this.checkOutTime=checkOutTime;}
	this.setSpecialRequests = function (specialRequests){this.specialRequests=specialRequests;}
	this.setTotalPrice = function (totalPrice){this.totalPrice=totalPrice;}

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

	this.getId = function () {return this.id;}
	this.getUser = function () {return this.user;}
	this.getNameOfEscape = function (){return this.nameOfEscape;}
	this.getNumOfAdults = function () {return this.numOfAdults;}
	this.getNumOfChildren = function () {return this.numOfChildren;}
	this.getCheckInDate = function () {return this.checkInDate;}
	this.getCheckOutDate = function () {return this.checkOutDate;}
	this.getCheckInTime = function () {return this.checkInTime;}
	this.getCheckOutTime = function () {return this.checkOutTime;}
	this.getSpecialRequests = function () {return this.specialRequests;}
	this.getTotalPrice = function () {return this.totalPrice;}

	this.validate = function ()
	{
		var errors = new Array();

		try
		{
			if(this.getSurname().length == 0)
			{
				errors.push("Surname must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Surname must be informed and contain only letters");
		}

		return errors;
	}

	this.toString = function (){//falta mostrar bien user
		var reservationString ="RESERVATION - ID="+this.getId()+" FIRST NAME="+this.getUser();
		reservationString +=" ADULTS="+this.getNumOfAdults();
		reservationString +=" CHILDREN="+this.getNumOfChildren();
		reservationString +=" CHECK IN DATE="+this.getCheckInDate()+" CHECK OUT DATE="+this.getCheckOutDate();
		reservationString +=" CHECK IN TIME="+this.getCheckInTime()+" CHECK OUT TIME="+this.getCheckOutTime()+" SPECIAL REQ="+this.getSpecialRequests()+" SPECIAL INS="+this.getSpecialInstructions();
		reservationString +=" TOTAL PRICE="+this.getTotalPrice();//aqui va ";"
		return reservationString;
	}
}
