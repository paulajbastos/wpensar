//Main Controller
App.controller('MainController', MainController);
MainController.$inject = ["$scope", "$rootScope", "$location", "$http", "AppMainService", "APPService", "$timeout"];
function MainController($scope, $rootScope, $location, $http, AppMainService, APPService, $timeout){

    var ctrl = this;

    $scope.currentYear = new Date().getFullYear();

    $scope.isActive = function (route) {
	    if(route === $location.path())
			return true; 
	}
}
