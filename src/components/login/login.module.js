import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginComponent from './login.component';
import LoginService from './login.service';

const LoginModule = angular
    .module('login', [uiRouter])
    .service('LoginService', LoginService)
    .component('login', LoginComponent)
    .name

export default LoginModule