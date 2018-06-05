import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import AdderComponent  from './adder.component';
import AdderService    from './adder.service';

const AdderModule = angular
    .module('adder', [uiRouter])
    .service('AdderService', AdderService)
    .component('adder', AdderComponent)
    .name

export default AdderModule