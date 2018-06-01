class ModalWindowController {
    constructor($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
        this.modalWindowText = this.$scope.$parent.$ctrl.modalWindowText;
    }

    closeModal() {
        this.$scope.$parent.$ctrl.showModalWindow = false;
    }

    exit() {
        this.$location.path(this.$scope.$parent.$ctrl.exitToLocation);
    }
}

export default ModalWindowController