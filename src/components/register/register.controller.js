class RegisterController {
    constructor($scope, $state, RegisterService, ValidateService) {
        this.RegisterService = RegisterService
        this.ValidateService = ValidateService

        this.emailClass      = 'disable-input'
        this.passwordClass   = 'disable-input'
        this.nameClass       = 'disable-input'
        this.surnameClass    = 'disable-input'
    }
    registerUser(event) {
        const form = event.target
        if(this.validateForm(form)) {
            const user = {
                email:    form.email.value,
                password: form.password.value,
                name:     form.name.value,
                surname:  form.surname.value
            }
            this.RegisterService.registerUser(user).then(
                res => {
                    console.log(res)
                    localStorage.setItem('token', res.token)
                },
                rej => console.log('reject', rej)
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
    isValidtext(input){
        const text = this.ValidateService.isValidtext(input);

        this[`${text.elem.name}Error`] = text.error ? text.message : ''
        this[`${text.elem.name}Class`] = text.error ? 'error-input' : 'accept-input'
        
        return !text.error
    }
    hideStatus(event) {
        this[`${event.target.name}Error`] = ''
        this[`${event.target.name}Class`] = 'disable-input'
    }
};

RegisterController.$inject = ['$scope', '$state', 'RegisterService', 'ValidateService'];

export default RegisterController