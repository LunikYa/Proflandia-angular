class AppController {
    constructor($transitions, CheckAccessService){
        this.$transitions = $transitions
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
            console.log(`token: ${!!token}, path: ${pathTo}`)
            if (pathTo !== 'register' &&
                pathTo !== 'login' &&
                pathTo !== 'home' && !token) {
                
                return transition.router.stateService.target('login')
            }
        })
        this.$transitions.onFinish({}, transition=>{
            loader.style.display = 'none'
        })
    }
}

AppController.$inject = ['$transitions'];

export default AppController