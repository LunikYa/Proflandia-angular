import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import ProfessionComponent  from './profession.component';
import ProfessionService    from './profession.service';

const ProfessionModule = angular
    .module('professionPage', [uiRouter])
    .service('professionService', ProfessionService)
    .component('professionPage', ProfessionComponent)
    .name

export default ProfessionModule