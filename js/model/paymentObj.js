/* @paymentObj()
 * @author: Xavier Pérez Grau
 * @date: 17/02/2017
 * @description: Object payment
 * @Attributes:
 * 		id: id of the payment
 * 		price: price of the payment
 * 		payMethod: method of payment
 * 		cardNumber: number of credit card
 *    IBAN number: bank number
 *    charity: checkbox to charity (2€ always)
 * @methods:
 * 		construct
 * 		set's and get's foor each attribute
 * 		arrayToString(): transforms an array ob objects to a well formated string with the attributes
 * 		toString(): transforms an object to well formated string with the attributes
 *
*/
function reviewObj ()
{
	//Attributes declaration
	this.id;
	this.rate;
	this.opinion;
	this.email;


	//Methods declaration
	this.construct = function (id,price,payMethod)
	{
		this.setId(id);
		this.setPrice(rate);
		this.setPayMethod(payMethod);
	}

	this.setId = function (id){this.id=id;}
	this.setPrice = function (price){this.price=price;}
	this.setOpinion = function (opinion){this.payMethod=payMethod;}


	this.getId = function () {return this.id;}
	this.getPrice = function () {return this.price;}
	this.getPayMethod = function () {return this.payMethod;}


	this.toString = function ()
	{
		var payString ="PAYMENT - ID="+this.getId()+" PRICE ="+this.getPrice();
		payString +=" PAYMENT METHOD="+this.getPayMethod();
		return payString;
	}
}
