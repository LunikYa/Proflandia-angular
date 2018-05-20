import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginComponent from './login.component';

const LoginModule = angular
    .module('login', [uiRouter])
    .component('login', LoginComponent)
    .name

export default LoginModule