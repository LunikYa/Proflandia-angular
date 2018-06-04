class AccountPageController {
    constructor(AccountPageService, $rootScope) {
        this.AccountPageService = AccountPageService;
        this.exitToLocation = ('/');
        this.modalWindowText = 'Вы уверенны, что хотите выйти?';
        this.$rootScope=$rootScope;
        this.$rootScope.recommendedProfession=this.$rootScope.recommendedProfession||[];
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.user = res);
        this.AccountPageService.getUserProfessionsAndLevelFromApi().then(res => this.userProfessions = //res.professions);
            [{"profession":"cook","currentLevel":2},{"profession":"designer","currentLevel":4},
                {"profession":"teacher","currentLevel":6},{"profession":"builder","currentLevel":8},{"profession":"doctor","currentLevel":10}])
    }

    exitAccount() {
        this.showModalWindow = true;
    }

    addNewProfession() {
        console.log('addNewProfession()');
    }

    toCurrentProfession(currentProfession) {
        this.professionLessons = this.AccountPageService.getLessonsForProfessionFromApi(currentProfession).then(res => console.log(res))
    }
}

export default AccountPageController