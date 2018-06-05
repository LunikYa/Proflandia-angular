class ProfessionController {
    constructor($scope, $state, professionService) {
        this.ProfessionService = professionService
        this.$state = $state
        this.lessonsForSlider = []
    }
    $onInit(){
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
                    this.lessonsForSlider = this.lessons.slice(0, 4)
                }                
            )
    }
};

ProfessionController.$inject = ['$scope', '$state', 'professionService'];

export default ProfessionController