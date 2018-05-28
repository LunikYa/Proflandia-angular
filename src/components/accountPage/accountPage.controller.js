class AccountPageController {
    constructor(){
        this.modalWindowText='Вы уверенны, что хотите выйти?';
    }
    exitAccount() {
        this.showModalWindow = true;
    }

    addNewProfession() {
        console.log('addNewProfession')
    }
}

export default AccountPageController