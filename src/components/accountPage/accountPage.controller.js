class AccountPageController {
    constructor(AccountPageService, $rootScope) {
        this.AccountPageService = AccountPageService;
        this.$rootScope = $rootScope;
        this.$rootScope.recommendedProfession = this.$rootScope.recommendedProfession || [];
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.user = res);
        this.$rootScope.showModalWindow = false;
        this.$rootScope.modalWindowText = '';
    }

    exitAccount() {
        this.$rootScope.showModalWindow = true;
        this.$rootScope.modalWindowText = 'Вы уверенны, что хотите выйти?'
        this.$rootScope.exitToLocation = ('/');
    }

    addNewProfession() {
        console.log('addNewProfession()');
    }

    toCurrentProfession(currentProfession) {
        console.log(currentProfession);
    }
}

export default AccountPageController