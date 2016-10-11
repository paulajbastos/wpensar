App.service('AppMainService', ["$rootScope", "$http", function ($rootScope, $http){

    var servico = this;

    servico.RequestAjax = function ($q, method, url, data, settings) {

        if (method == null || method == undefined)
            method = "GET";

        if (data == null || data == undefined)
            data = {};

        /* -----------------------------------
            Requisições
        ------------------------------------*/

        /*Carregador da Página*/
        $rootScope.pageloading = true;

        $http({
            method: method,
            url: url,
            data: data,
        }).then(function (response) {
            var serverData = response.data;

            if (serverData.sucesso == true) {

                if (typeof settings.onSuccess == 'function')
                    $q.defer().resolve(settings.onSuccess(response));
                else
                    $q.defer().resolve(response);
            }
            else {
                var msgErro = 'Ocorreu um erro. Entre em contato com o suporte.';

                if (typeof settings.onFail == 'function')
                    settings.onFail(msgErro, response);

                $q.defer().reject(msgErro);
            }

        }, function () {
            $q.defer().reject();
        }).finally(function () {
            $rootScope.pageloading = false;
        });

        return $q.defer().promise;
    };
}]);
/*************************//***************************/