// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('REApp').controller('roomReservationController', ['$scope', '$window', function($scope, $window) {
		//Properties
    //$scope.reservation --> la variable creada por el form
		$scope.reservation = new reservationObj();

		$scope.reservation.setCheckInDate(new Date());


		//Scope variables
		$scope.showAction;
		$scope.checkInTime = ["08:00", "09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];

		//Date pickers scope variables and functions
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yyyy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		$scope.checkInDate = {
			opened: false
		};

		$scope.openCheckInDate = function() {
			$scope.checkInDate.opened = true;
		};

		this.submit = function() {
			console.log($scope.reservation);
		};

		$scope.openCheckInDate= function (){
			$scope.checkInDate.opened=true;
		};

	}]);

	angular.module('REApp').directive("roomReservationForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/room-reservation-form.html",
			controller:function(){

			},
			controllerAs: 'roomReservationForm'
		};
	});
})();


//Own code
/*
	Datepicker functions
*/
// Disable weekend selection
function disabled(data) {
	var date = data.date,
	mode = data.mode;
	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}
