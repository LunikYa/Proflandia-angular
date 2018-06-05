import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import HeaderComponent  from './header.component';

const HeaderModule = angular
    .module('headerComponent', [uiRouter])
    .component('headerComponent', HeaderComponent)
    .name

export default HeaderModule