class AccountPageController {
    constructor(AccountPageService, $rootScope, $state) {
        this.AccountPageService = AccountPageService;
        this.$rootScope=$rootScope;
        this.$state = $state;
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.user = res);
        this.$rootScope.showModalWindow = false;
        this.$rootScope.modalWindowText = '';
    }
    exitAccount() {
        this.$rootScope.showModalWindow = true;
        this.$rootScope.modalWindowText = 'Вы уверенны, что хотите выйти?';
        this.$rootScope.exitToLocation = ('/');
    }


    goToAdder() {
        this.$state.go('adder')
    }

    toCurrentProfession(currentProfession) {
        this.$state.go('professionPage', {profession: currentProfession.name})
    }
}

export default AccountPageController