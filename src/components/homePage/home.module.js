import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import HomeComponent  from './home.component';
// import HomeService    from './login.service';

const HomeModule = angular
    .module('home', [uiRouter])
    // .service('LoginService', LoginService)
    .component('home', HomeComponent)
    .name

export default HomeModule