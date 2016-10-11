//Main Controller
App.controller('LoginController', LoginController);
LoginController.$inject = ["$rootScope", "$location", "AuthenticationService"];
function LoginController( $rootScope, $location, AuthenticationService){

    var ctrl = this;
 
    ctrl.login = login;
    $rootScope.rootLogged = false;

    //console.log("rootLogged = " + $rootScope.rootLogged);

    initController();

    function initController() {
        // reset login status
        $rootScope.rootLogged = false;
        AuthenticationService.Logout();
        
    };

    function login() {
        ctrl.loading = true;
        AuthenticationService.Login(ctrl.username, ctrl.password, function (result) {
            if (result === true) {
                //is logged
                $rootScope.rootLogged = true;
                $location.path('/');
               
            } else {
                $rootScope.rootLogged = false;
                ctrl.error = 'Username or password is incorrect';
                ctrl.loading = false;
            }
        });
    };
}
