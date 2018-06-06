import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import adderPopupComponent  from './adderPopup.component';

const adderPopupModule = angular
    .module('adderPopup', [uiRouter])
    .component('adderPopup', adderPopupComponent)
    .name

export default adderPopupModule