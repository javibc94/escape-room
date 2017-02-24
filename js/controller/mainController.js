
// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
  angular.module('REApp').controller('MainController', ['$scope', '$window', function($scope, $window) {
    $scope.showAction = 0;
    $scope.rooms=[];

    //attributes
    this.room = new roomObj();
    this.initData = function(){
      this.room.construct("Escape from m6","Terror","The amazing adventure to escape from the class!!!",10,15,10);
      $scope.rooms.push(this.room);
    }
	}]);


})();
