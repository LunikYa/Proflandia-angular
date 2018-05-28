import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import LoginComponent  from './login.component';
import LoginService    from './login.service';
import ValidateService from '../../heplers/validate.service';

const LoginModule = angular
    .module('login', [uiRouter])
    .service('LoginService', LoginService)
    .service('ValidateService', ValidateService)
    .component('login', LoginComponent)
    .name

export default LoginModule