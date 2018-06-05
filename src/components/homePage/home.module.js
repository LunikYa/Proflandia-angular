import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import HomeComponent  from './home.component';

const HomeModule = angular
    .module('home', [uiRouter])
    .component('home', HomeComponent)
    .name

export default HomeModule