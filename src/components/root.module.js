import angular from 'angular';
import Login from './login/login.module';
// import Register from './register/register.module';

const rootModule = angular
  .module('app.components', [
    // Login,
    // Register
  ])
  .name;

export default rootModule;