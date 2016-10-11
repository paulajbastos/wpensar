//Compras Controller
App.controller('ComprasController', ComprasController);
ComprasController.$inject = ["$scope", "$rootScope", "$location", "$http", "AppMainService", "APPService", "$timeout"];
function ComprasController($scope, $rootScope, $location, $http, AppMainService, APPService, $timeout){

    var ctrl = this;

    $scope.compras = {};


    APPService.GetCompras({}, {
        onSuccess: function (response) {
            $scope.compras = response;
            //console.log($scope.compras);
        }
    });

    $scope.go = function ( path, id) {
        //console.log("path = " + path);
        $location.path(path+id);
    };
}