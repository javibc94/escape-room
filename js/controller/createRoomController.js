// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('REApp').controller('createRoomController', ['$scope', '$window', function($scope, $window) {
		//Properties
		//the created room in this controller
		$scope.room = new roomObj();


		//Scope variables
		$scope.showAction;

		this.submit = function() {
			//$scope.user.$setPristine();
			$scope.$parent.showAction = 2;
		};
		this.create = function(){
			$scope.$parent.rooms.push($scope.room);
		}


	}]);

	angular.module('REApp').directive("createRoomForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/create-room.html",
			controller:function(){

			},
			controllerAs: 'createRoomForm'
		};
	});
})();
