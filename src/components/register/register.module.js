import angular           from 'angular';
import uiRouter          from 'angular-ui-router';
import RegisterComponent from './register.component';
import RegisterService   from './register.service';
import ValidateService   from '../../heplers/validate.service';

const RegisterModule = angular
    .module('register', [uiRouter])
    .service('RegisterService', RegisterService)
    .service('ValidateService', ValidateService)
    .component('register', RegisterComponent)
    .name

export default RegisterModule