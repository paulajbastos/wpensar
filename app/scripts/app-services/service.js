App.service("APPService", APPService);
APPService.$inject = ["$http", "$q", "AppMainService"];
function APPService($http, $q, AppMainService){
    var servico = this;

    servico.GetProdutos = function (filtro, settings) {
        $http.get('http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/produtos').success(function(data) {
            //console.log("Get Products");
            settings.onSuccess(data);            
            //console.log(data);
        });
    };

    servico.GetProduto = function (id, settings) {
        $http.get('http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/produtos/'+ id).success(function(data) {
            //console.log("Get Products");
            settings.onSuccess(data);            
            //console.log(data);
        });
    };
    
    servico.AddProdutos = function (filtro, settings) {
        $http.post('http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/produtos').success(function(data) {
            //console.log("Add Products");
            //console.log(filtro);
            
            settings.onSuccess(data);            
            //console.log(data);
        });
    };

    servico.DeleteProdutos = function (filtro, settings) {
        
        $http.delete('http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/produtos/filtro').success(function(data) {
            //console.log("Get Products");
            settings.onSuccess(data);            
            //console.log(data);
        });
    };
    
    servico.GetCompras = function (filtro, settings) {
        //$http.get('http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/compras?produto=-49547412').success(function(data) {
        $http.get('http://private-85ad8-querotrabalharnawpensar.apiary-mock.com/api/compras').success(function(data) {
            //console.log("Get Compras");
            settings.onSuccess(data);            
            //console.log(data);
        });
    };

};