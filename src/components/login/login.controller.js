class LoginController {
    constructor($scope, $stat, LoginService) {
        this.LoginService = LoginService
    }
    post() {
        console.log('post', this.LoginService.postUser())
    }
};

LoginController.$inject = ['$scope', '$state', 'LoginService'];

export default LoginController