class LoginController {
    constructor($scope, $state, $rootScope, AdderService) {
        this.AdderService = AdderService
        this.$rootScope = $rootScope;
        this.$state       = $state
        this.useremail    = localStorage.getItem('useremail')
        this.showPopup = false
    }
    $onInit(){
        this.showPopup = false
        this.AdderService.getUser(this.useremail).then(res => {
            this.$rootScope.tessssst = 'asdasdasd'
            this.user = res
            this.user.professions.forEach(el => {
                this[el.profession.name] = true
            });
        })
    }
    addNewProf(prof){
        this.AdderService.addProf(this.useremail, prof).then(
            res => {
                this[prof] = true;
                this.showPopup = true
                this.$rootScope.addedProfession = prof;
            }
        )
    }
};

LoginController.$inject = ['$scope', '$state', '$rootScope', 'AdderService'];

export default LoginController