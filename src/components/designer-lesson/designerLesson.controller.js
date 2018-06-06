class DesignerLessonController {
    constructor($scope, $state, service) {
        this.$state = $state
        this.service = service
    }
    putLessonLevelUp() {
        this.service.putLevelUp(localStorage.getItem('useremail'))
            .then(res=>{
                console.log(res)
                this.$state.go('accountPage')
            })
    }
};

DesignerLessonController.$inject = ['$scope', '$state', 'designerLesson'];

export default DesignerLessonController