class LoginController {
    constructor($scope, $state, LoginService, ValidateService) {
        this.LoginService    = LoginService
        this.ValidateService = ValidateService
        this.$state          = $state
        this.emailClass      = 'disable-input'
        this.passwordClass   = 'disable-input'
    }
    loginUser(event) {
        const form = event.target;
        
        if(this.validateForm(form)) {
            const user = {
                email: form.email.value,
                password: form.password.value
            }
            this.LoginService.loginUser(user).then(
                res => {
                    console.log(res)
                    localStorage.setItem('token', res.token)
                    localStorage.setItem('useremail', res.email)
                    localStorage.setItem('user', JSON.stringify(res))
                    this.$state.go('accountPage')
                },
                rej => {
                    console.log('reject', rej)
                    this.emailError = rej.data
                    this.emailClass = 'error-input' 
                }
            )
        }   
    }
    validateForm(form) {
        let result = true;

        for (let i = 0; i < form.length; i++) {
            if(form[i].tagName === 'INPUT'){
                result = this[`isValid${form[i].type}`](form[i])
            }
        }
        return result
    }
    isValidemail(input) {
        const email = this.ValidateService.isValidemail(input)

        this.emailError = email.error ? email.message : ''
        this.emailClass = email.error ? 'error-input' : 'accept-input'

        return !email.error
    }
    isValidpassword(input){
        const pass = this.ValidateService.isValidpassword(input);

        this.passwordError = pass.error ? pass.message : ''
        this.passwordClass =  pass.error ? 'error-input' : 'accept-input'

        return !pass.error       
    }
    hideStatus(event) {
        this[`${event.target.type}Error`] = ''
        this[`${event.target.type}Class`]  = 'disable-input'
    }
};

LoginController.$inject = ['$scope', '$state', 'LoginService', 'ValidateService'];

export default LoginController