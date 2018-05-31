import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AccountPageComponent from './accountPage.component';
import AccountPageService from "./accountPage.service";

const AccountPageModule = angular
    .module('accountPage', [uiRouter])
    .component('accountPage', AccountPageComponent)
    .service('AccountPageService',AccountPageService)
    .name

export default AccountPageModule