class ModalWindowController {
    constructor($scope, $location, $rootScope) {
        this.$scope = $scope;
        this.$location = $location;
        this.$rootScope = $rootScope;
    }
    closeModal() {
        this.$rootScope.showModalWindow = false;
    }
    exit() {
        this.$location.path(this.$rootScope.exitToLocation);
        if(this.$location.$$path==='/') {
            localStorage.clear();
        }
    }
}
export default ModalWindowController