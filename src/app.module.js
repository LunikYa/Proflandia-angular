import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import rootModule from './components/root.module';
import './assets/scss/main.scss';

const App = angular
  .module('app', [
    rootModule,
    uiRouter
  ])
  .component('app', AppComponent)
  .name;

export default App;

