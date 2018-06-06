class adderPopupController {
    constructor($scope,  $state, $rootScope) {
       this.$rootScope = $rootScope
       this.$state = $state
    }

$onInit(){
    this.profession = this.$rootScope.addedProfession || 'none'
}
goToAccount(){
    this.$state.go('accountPage');
}
goToProf(){
    this.$state.go('professionPage', {profession: this.profession || ''});
}
}
adderPopupController.$inject = ['$scope', '$state', '$rootScope'];

export default adderPopupController