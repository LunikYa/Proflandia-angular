import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PersonalAreaComponent from './personalArea.component';

const PersonalAreaModule = angular
    .module('personalArea', [uiRouter])
    .component('personalArea', PersonalAreaComponent)
    .name

export default PersonalAreaModule