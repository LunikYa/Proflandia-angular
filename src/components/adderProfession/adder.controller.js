class LoginController {
    constructor($scope, $state, AdderService) {
        this.AdderService = AdderService
        this.$state       = $state
        this.useremail    = localStorage.getItem('useremail')
    }
    $onInit(){
        this.AdderService.getUser(this.useremail).then(res => {
            this.user = res
            this.user.professions.forEach(el => {
                this[el.profession.name] = true
            });
        })
    }
    addNewProf(prof){
        this.AdderService.addProf(this.useremail, prof).then(
            res => {
                console.log(res)
                this[prof] = true;
                this.$state.go('professionPage', {profession: prof});
            }
        )
    }
};

LoginController.$inject = ['$scope', '$state', 'AdderService'];

export default LoginController