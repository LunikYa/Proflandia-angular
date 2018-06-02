class AccountPageController {
    constructor(AccountPageService, $location) {
        this.AccountPageService = AccountPageService;
        this.exitToLocation = ('/');
        this.modalWindowText = 'Вы уверенны, что хотите выйти?';
        this.$location=$location;
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.user = res);
        this.AccountPageService.getUserProfessionsAndLevelFromApi().then(res => this.userProfessions = console.log(res.professions));
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
    $onDestroy(){
        if(this.$location.$$path==='/') {
            localStorage.clear();
        }
    }
}

export default AccountPageController