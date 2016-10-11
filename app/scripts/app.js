'use strict';

var App = angular.module('App', ['ngRoute', 'ui.router', 'ngMessages', 'xeditable', 'ngMockE2E', 'ngStorage']);

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',  function($stateProvider, $locationProvider, $urlRouterProvider) {

	// default route
    $urlRouterProvider.otherwise("/produtos");

    // app routes
    $stateProvider
        .state('produtos', {
            url: '/produtos',
            templateUrl: 'views/produtos.html',
            controller: 'ProdutosController',resolve: {
		    	delay: function($q, $timeout) {
		        	var delay = $q.defer();
		        	$timeout(delay.resolve, 1000);
		        	return delay.promise;
		      	}
		    },
            controllerAs: 'ctrl',
            data : { pageTitle: 'Produtos' }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController',resolve: {
	            // I will cause a 1 second delay
		    	delay: function($q, $timeout) {
		        	var delay = $q.defer();
		        	$timeout(delay.resolve, 1000);
		        	return delay.promise;
		      	}
        	},
            controllerAs: 'ctrl',
            data : { pageTitle: 'Login' }
    	})
        .state('compras', {
            url: '/compras',
            templateUrl: 'views/compras.html',
            controller: 'ComprasController',resolve: {
                // I will cause a 1 second delay
                delay: function($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1000);
                    return delay.promise;
                }
            },
            data : { pageTitle: 'Compras' }
        })
        .state('produto', {
            url: '/produto/:productId',
            templateUrl: 'views/produto.html',
            controller: 'ProdutoController',resolve: {
                // I will cause a 1 second delay
                delay: function($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1000);
                    return delay.promise;
                }
            },
            data : { pageTitle: 'Produto' }
        });

        $locationProvider.html5Mode(true);
}]);


App.run(['$rootScope', '$http', '$location', '$localStorage', function($rootScope, $http, $location, $localStorage)
{ 
    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
        $rootScope.rootLogged = true;
        $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var publicPages = ['/login'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$localStorage.currentUser) {
            $rootScope.rootLogged = false;
            $location.path('/login');
        }
    });

    
}]);