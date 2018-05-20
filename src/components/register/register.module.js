import angular from 'angular';
import uiRouter from 'angular-ui-router';
import RegisterComponent from './register.component';

const RegisterModule = angular
    .module('register', [uiRouter])
    .component('register', RegisterComponent)
    .name

export default RegisterModule