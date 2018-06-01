class AccountPageController {
    constructor(AccountPageService) {
        this.AccountPageService = AccountPageService;
        this.exitToLocation=('/');
        this.modalWindowText='Вы уверенны, что хотите выйти?';
    }

    $onInit() {
        this.AccountPageService.getUserFromApi().then(res => this.userName = res['name']);
        this.AccountPageService.getUserProfessionsAndLevelFromApi().then(res => this.userProfessions = console.log(res.professions));
    }

    exitAccount() {
        this.showModalWindow = true;
    }

    goToProfession(event) {
        this.professionLessons=this.AccountPageService.getLessonsForProfessionFromApi(event.target.innerText).then(res=>console.log(res))
    }
    addNewProfession(){
        console.log('addNewProfession()')
    }
}

export default AccountPageController