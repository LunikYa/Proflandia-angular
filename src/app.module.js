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
    .factory('httpLoaderInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        let requestCount = 0;

        function startRequest(config) {
          if( !requestCount ) {
            $rootScope.$broadcast('httpLoaderStart');
          }
          requestCount++;
          return config;
        }
      
        function endRequest(arg) {
          if( !requestCount )
            return;
          
          requestCount--;
          if( !requestCount ) {
            $rootScope.$broadcast('httpLoaderEnd');
          }
          return arg;
        }
        function endRequestError(arg) {
            if( !requestCount )
            return;
          
          requestCount--;
          if( !requestCount ) {
            $rootScope.$broadcast('httpLoaderEnd');
          }
          return $q.reject(arg)
        }
        return {
          'request': startRequest,
          'requestError': endRequestError,
          'response': endRequest,
          'responseError': endRequestError
        };
      }])
    .component('app', AppComponent)
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
        $httpProvider.interceptors.push('httpLoaderInterceptor');
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
            .state('lessonPage', {
                url: '/lessons/designer',
                component: 'designerLesson'
            })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }])
    
export default App;
