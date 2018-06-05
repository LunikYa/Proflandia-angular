import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/index.js';
import './assets/scss/main.scss';
// import httpLoaderFactory from './heplers/httpLoader.factory'

const App = angular
    .module('app', [
        Components,
        uiRouter
    ])
    .component('app', AppComponent)
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
        // $httpProvider.interceptors.push('httpLoaderInterceptor');
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
            .state('login', {
                url: '/login',
                component: 'login'
            })
            .state('register', {
                url: '/register',
                component: 'register'
            })
            .state('accountPage',{
                url: '/account-page',
                component: 'accountPage'
            })
            .state('recommendedProfession',{
                url: '/recommended-profession',
                component: 'recommendedProfession'
            })
            .state('adder', {
                url: '/adder',
                component: 'adder'
            })
            .state('professionPage', {
                url: '/profession/{profession}',
                component: 'professionPage'
            })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }])
    
export default App;
