// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('REApp').controller('personalDataController', ['$scope', '$window', function($scope, $window) {
		//Properties
		$scope.user = new userObj();


		//Scope variables
		$scope.showAction;

		this.submit = function() {
			//$scope.user.$setPristine();
			$scope.$parent.showAction = 2;
		};


	}]);

	angular.module('REApp').directive("personalDataForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/personal-data-form.html",
			controller:function(){

			},
			controllerAs: 'personalDataForm'
		};
	});
})();
