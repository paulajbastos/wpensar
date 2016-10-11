//Produtos Controller
App.controller('ProdutosController', ProdutosController);
ProdutosController.$inject = ["$scope", "$rootScope", "$location", "$http", "AppMainService", "APPService", "$timeout"];
function ProdutosController($scope, $rootScope, $location, $http, AppMainService, APPService, $timeout){

    var ctrl = this;

    $scope.produtos = {};
    $scope.inserted = {};

    APPService.GetProdutos({}, {
        onSuccess: function (response) {
            $scope.produtos = response;
        }
    });

    $scope.addProduto = function() {
        $scope.inserted = {
            id: $scope.produtos.length+1,
            nome: ''
        };
        $scope.produtos.push($scope.inserted);
    }; 


    $scope.checkNome = function(data, id) {
        //console.log(data);
        if (data === null || data === undefined || data === "") {
            return "Preencha Nome";
        }
    }
        

    $scope.saveProdutos = function(data, id) {
        //console.log("saveProd = ");
        //console.log(data);
        angular.extend(data, {id: id});
        
        APPService.AddProdutos(data, {
            onSuccess: function (response) {
                //console.log(response);
            }
        });
        
    };

    $scope.cancelForm = function(rowform, index) {
        //console.log($scope.produtos[index].nome);

        if($scope.produtos[index].nome === null || $scope.produtos[index].nome === undefined || $scope.produtos[index].nome === ""){
            $scope.produtos.splice(index, 1);
        }
        
        rowform.$cancel();
    };

    $scope.removeProduto = function(index) {

        APPService.DeleteProdutos({id:index}, {
            onSuccess: function (response) {
                //console.log(response);
                $scope.produtos.splice(index, 1);
            }
        });

        
    };

    $scope.go = function ( path, id) {
        //console.log("path = " + path);
        $location.path(path+id);
        if(path=="produto"){

        }
    };
}