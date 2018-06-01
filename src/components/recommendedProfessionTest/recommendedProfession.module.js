import angular from "angular";
import RecommendedProfession from './recommendedProfession.component';
import uiRouter from 'angular-ui-router';

const RecommendedProfessionModule = angular
    .module('recommendedProfession', [uiRouter])
    .component('recommendedProfession', RecommendedProfession)
    .name

export default RecommendedProfessionModule