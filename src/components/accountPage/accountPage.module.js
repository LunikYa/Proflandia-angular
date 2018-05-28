import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AccountPageComponent from './accountPage.component';

const AccountPageModule = angular
    .module('accountPage', [uiRouter])
    .component('accountPage', AccountPageComponent)
    .name

export default AccountPageModule