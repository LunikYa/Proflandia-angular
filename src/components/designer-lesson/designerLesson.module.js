import angular         from 'angular';
import uiRouter        from 'angular-ui-router';
import DesignerLessonComponent  from './designerLesson.component';
import DesignerLessonService    from './designerLesson.service';

const DesignerLessonModule = angular
    .module('designerLesson', [uiRouter])
    .service('designerLesson', DesignerLessonService)
    .component('designerLesson', DesignerLessonComponent)
    .name

export default DesignerLessonModule