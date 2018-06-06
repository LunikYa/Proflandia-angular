import angular from "angular";
import RecommendedProfession from './recommendedProfession.component';
import uiRouter from 'angular-ui-router';
import RecommendedProfessionService from "./recommendedProfession.service";

const RecommendedProfessionModule = angular
    .module('recommendedProfession', [uiRouter])
    .component('recommendedProfession', RecommendedProfession)
    .service('RecommendedProfessionService',RecommendedProfessionService)
    .name

export default RecommendedProfessionModule