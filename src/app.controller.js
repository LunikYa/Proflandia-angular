class AppController {
    constructor($transitions, CheckAccessService){
        this.$transitions = $transitions
        this.CheckAccess()
    }
    CheckAccess(){
        this.$transitions.onStart({}, (transition)=>{
            const pathTo = transition.to().name;
            const token = localStorage.getItem('token')
            console.log(`token: ${!!token}, path: ${pathTo}`)
            if (pathTo !== 'register' &&
                pathTo !== 'login' &&
                pathTo !== 'home' && !token) {
                
                return transition.router.stateService.target('login')
            }
        })
    }
    
}

AppController.$inject = ['$transitions'];

export default AppController