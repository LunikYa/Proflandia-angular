class AccountPageController {
    constructor(AccountPageService, $rootScope, $state) {
        this.AccountPageService = AccountPageService;
        this.exitToLocation = ('/');
        this.modalWindowText = 'Вы уверенны, что хотите выйти?';
        this.$rootScope=$rootScope;
        this.$rootScope.recommendedProfession=this.$rootScope.recommendedProfession||[];
        this.$state = $state
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.user = res);
        this.AccountPageService.getUserProfessionsAndLevelFromApi().then(res => this.userProfessions = res.professions);       
    }

    exitAccount() {
        this.showModalWindow = true;
    }

    goToAdder() {
        this.$state.go('adder')
    }

    toCurrentProfession(currentProfession) {
        this.$state.go('professionPage', {profession: currentProfession.name})
    }
}

export default AccountPageController