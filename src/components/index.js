import angular from 'angular';
import Login from './login/login.module';
import PersonalArea from './accountPage/accountPage.module';
import Register from './register/register.module';
import ModalWindow from './modalWindow/modalWindow.module';
import Home from './homePage/home.module';
import RecommendedProfession from './recommendedProfessionTest/recommendedProfession.module';
import HeaderComponent from './header/header.module';
import ProfessionPage from './professionPage/profession.module';
import Adder from './adderProfession/adder.module';
import AdderPopup from './adder-popup/adderPopup.module'
import DesignerLesson from './designer-lesson/designerLesson.module'
const rootModule = angular
    .module('app.components', [
        Login,
        Register,
        PersonalArea,
        ModalWindow,
        Home,
        RecommendedProfession,
        HeaderComponent,
        ProfessionPage,
        Adder,
        AdderPopup,
        DesignerLesson
    ])
    .name;

export default rootModule;