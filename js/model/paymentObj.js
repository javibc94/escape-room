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
function PaymentObj ()
{
	//Attributes declaration
	this.id;
	this.price;
	this.payMethod;
	this.creditCard;
	this.iban;
	this.charity;


	//Methods declaration
	this.construct = function (id,price,payMethod,creditCard,iban,charity)
	{
		this.setId(id);
		this.setPrice(price);
		this.setPayMethod(payMethod);
		this.setIban(iban);
		this.setCharity(charity);
	}

	this.setId = function (id){this.id=id;}
	this.setPrice = function (price){this.price=price;}
	this.setPayMethod = function (payMethod){this.payMethod=payMethod;}
	this.setCreditCard = function (creditCard){this.creditCard=creditCard;}
	this.setIban = function (iban){this.iban=iban;}
	this.setCharity = function (charity){this.charity=charity;}


	this.getId = function () {return this.id;}
	this.getPrice = function () {return this.price;}
	this.getPayMethod = function () {return this.payMethod;}
	this.getCreditCard = function(){return this.creditCard;}
	this.getIban = function(){return this.iban;}
	this.getCharity = function(){return this.charity;}


	this.toString = function ()
	{
		var payString ="PAYMENT - ID="+this.getId()+" PRICE ="+this.getPrice();
		payString +=" PAYMENT METHOD="+this.getPayMethod();
		return payString;
	}
}
