class ProfessionController {
    constructor($scope, $state, professionService) {
        this.ProfessionService = professionService
        this.$state = $state
        this.lessonsForSlider = []
    }
    $onInit(){
        setTimeout(()=>$('#gallery').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3}), 2000)
     
        this.ProfessionService.getProfessions()
            .then(res => {
                for(let i = 0; i < res.length; i++){
                    if(res[i].name === this.$state.params.profession) {
                        this.profession = res[i]
                        this.imageClass = `prof-image-title prof-image-title-${this.profession.name}`
                        break
                    }
                }
            })
        this.ProfessionService.getProfession(this.$state.params.profession)
            .then(
                res => {
                    this.lessons = res
                    this.lessonsForSlider = this.lessons 
                }                
            )
        this.ProfessionService.getUser(localStorage.getItem('useremail'))
            .then(res => {
                this.user = res
                this.checkUserLevel()
            })
    }
    checkUserLevel() {
        for(let i = 0; i < this.user.professions.length; i++) {
            if(this.user.professions[i] && this.user.professions[i].profession.name === this.$state.params.profession) {
                this.currentLevel = this.user.professions[i].currentLevel;
            }
        }        
    }
    goToLesson(lesson){
        this.$state.go('lessonPage', {lesson: lesson})
    }
};

ProfessionController.$inject = ['$scope', '$state', 'professionService'];

export default ProfessionController