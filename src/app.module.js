import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/index.js';
import './assets/scss/main.scss';

const App = angular
    .module('app', [
        Components,
        uiRouter
    ])
    .component('app', AppComponent)
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('login', {
                url: '/',
                component: 'login'
            })
            .state('register', {
                url: '/register',
                component: 'register'
            })
            .state('accountPage',{
                url: '/accountPage',
                component: 'accountPage'
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('')
    }])

export default App;

