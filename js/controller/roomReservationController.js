// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('REApp').controller('RoomEscapeReservationController', ['$scope', '$window', function($scope, $window) {
		//Properties
    //$scope.reservation --> la variable creada por el form
		$scope.reservation = new reservationObj();

		$scope.reservation.setCheckInDate(new Date());
		$scope.reservation.setCheckOutDate((new Date()).setDate((new Date()).getDate()+1));


		//Scope variables
		$scope.showAction;
		$scope.specialRequests=["Plus time", "Snack after Escape Room", "Soundtrack to go"];
		$scope.checkInTime = ["00:00", "01:00","02:00"];
		$scope.checkOutTime = ["00:00", "01:00","02:00"];

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

		$scope.checkOutDate = {
			opened: false
		};
		$scope.openCheckInDate = function() {
			$scope.checkInDate.opened = true;
		};

		$scope.openCheckOutDate = function() {
			$scope.checkOutDate.opened = true;
		};

		this.submit = function() {
			console.log($scope.reservation);
		};

		$scope.openCheckOutDate= function (){
			$scope.checkOutDate.opened=true;
		};
		$scope.openCheckInDate= function (){
			$scope.checkInDate.opened=true;
		};
		$scope.validateDates = function (){
			if($scope.reservation.getCheckOutDate() <= $scope.reservation.getCheckInDate()){

			}
			else{

			}
		}
	}]);

	angular.module('REApp').directive("hotelReservationForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/hotel-reservation-form.html",
			controller:function(){

			},
			controllerAs: 'hotelReservationForm'
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
