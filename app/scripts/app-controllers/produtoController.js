//Produto Controller
App.controller('ProdutoController', ProdutoController);
ProdutoController.$inject = ["$scope", "$rootScope", "$routeParams", "$http", "AppMainService", "APPService", "$timeout"];
function ProdutoController($scope, $rootScope, $routeParams, $http, AppMainService, APPService, $timeout){

    var ctrl = this;

    $scope.produto = {};
    $scope.produto_id = $routeParams.productId;

    //console.log("Page Produto id = " + $scope.produto_id);

    APPService.GetProduto($scope.produto_id, {
        onSuccess: function (response) {
            $scope.produto = response;
            //console.log($scope.produto);
        }
    });

    $scope.buyProduto = function(id){

        //console.log("BuyProduto");
        //console.log("id = " +  id);

        APPService.BuyProdutos({nome:produtoAdd}, {
            onSuccess: function (response) {
                //console.log("response");
                //console.log(response);
                $scope.compras.push(angular.copy(response));
            }
        });

    } 
}
