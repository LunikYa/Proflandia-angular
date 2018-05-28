import angular from 'angular';
import Login from './login/login.module';
import Register from './register/register.module';
import Home from './homePage/home.module';

const rootModule = angular
  .module('app.components', [
    Login,
    Register,
    Home
  ])
  .name;

export default rootModule;