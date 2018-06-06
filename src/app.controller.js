class AppController {
    constructor($scope, $transitions, CheckAccessService){
        this.$transitions = $transitions
        this.$scope = $scope
        this.isShownLoader = true
        this.init()
    }
    init(){
        const loader = document.getElementById('js-loader')
        this.$transitions.onBefore({}, transition => {
            loader.style.display = 'block'
        })
        this.$transitions.onStart({}, (transition) => {
            const pathTo = transition.to().name;
            const token = localStorage.getItem('token')

            if (pathTo !== 'register' &&
                pathTo !== 'login' &&
                pathTo !== 'home' && !token) {
                
                return transition.router.stateService.target('home')
            }
        })
        this.$transitions.onFinish({}, transition=>{
            loader.style.display = 'none'
        })
        this.$scope.$on('httpLoaderStart', function(event, toState, toParams, fromState, fromParams) {
            document.getElementById('http-loader').style.display = 'block'
        });
        this.$scope.$on('httpLoaderEnd', function(event, toState, toParams, fromState, fromParams) {
            setTimeout(()=>{document.getElementById('http-loader').style.display = 'none'}, 1500)
        });
    }
}

AppController.$inject = ['$scope', '$transitions'];

export default AppController