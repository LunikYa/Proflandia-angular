class AccountPageController {
    constructor(AccountPageService) {
        this.AccountPageService = AccountPageService;
        this.exitToLocation = ('/');
        this.modalWindowText = 'Вы уверенны, что хотите выйти?';
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.user = res);
        this.AccountPageService.getUserProfessionsAndLevelFromApi().then(res => this.userProfessions = console.log(res.professions));
    }

    exitAccount() {
        this.showModalWindow = true;
    }

    addNewProfession(event) {
        this.professionLessons = this.AccountPageService.getLessonsForProfessionFromApi(event.target.innerText).then(res => console.log(res))
    }

    toThisProfession() {
        console.log('toThisProfession()')
    }
}

export default AccountPageController