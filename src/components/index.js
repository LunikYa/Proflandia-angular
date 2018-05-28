import angular from 'angular';
import Login from './login/login.module';
import PersonalArea from './accountPage/accountPage.module';
import Register from './register/register.module';
import ModalWindow from './modalWindow/modalWindow.module';

const rootModule = angular
    .module('app.components', [
        Login,
        Register,
        PersonalArea,
        ModalWindow
    ])
    .name;

export default rootModule;