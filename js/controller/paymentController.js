// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('REApp').controller('paymentController', ['$scope', '$window', function($scope, $window) {
		//Properties
		$scope.user = new paymentObj();


		//Scope variables
		$scope.action;

		this.submit = function() {
			//$scope.user.$setPristine();
      //launches the popup with the bill
			//$scope.$parent.showAction = 3;
			this.doPopUp();
		};
		
		this.doPopUp = function() {
			//this method shows the popup with payment information	
		};


	}]);

	angular.module('REApp').directive("paymentForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/payment-form.html",
			controller:function(){

			},
			controllerAs: 'paymentForm'
		};
	});
})();
