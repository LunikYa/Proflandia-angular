class ModalWindowController {
    constructor($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
        this.modalWindowText = this.$scope.$parent.$ctrl.modalWindowText;
    }

    closeModal() {
        this.$scope.$parent.$ctrl.showModalWindow = false;
    }

    exitAccount() {
        this.$location.path('/');
    }
}

export default ModalWindowController