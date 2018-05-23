import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PersonalAreaComponent from './personalArea.component';
import PersonalAreaController from './personalArea.controller';

const PersonalAreaModule = angular
    .module('personalArea', [uiRouter])
    .component('personalArea', PersonalAreaComponent)
    .name

export default PersonalAreaModule