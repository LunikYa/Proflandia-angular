class LoginController {
    constructor(service) {
      this.service = service;
    }
    // validateForm = (event) => {
    //     let result = true,
    //         form = event.target;
    //     for (let i = 0; i < form.length; i++) {
    //         if (form[i].type === 'email') {
    //             if (!this.isValidemail(form[i])) {
    //                 result = false
    //             }
    //         } else if (form[i].type === 'password') {
    //             if (!this.isValidpassword(form[i])) {
    //                 result = false
    //             }
    //         }
    //     }
    //     if(result)
    //         this.props.loginUser(form);
            
    //     event.preventDefault()
    // }

    // isValidemail = (input) => {
    //     let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //         if (!regExpEmail.test(input.value)) {
    //             this.showError('*Email is not valid', input)
    //             return false
    //         } else{
    //             this.setState({ email: { error: '', accepted: true } });
    //             return true
    //         }
    // }

    // isValidpassword = (input) => {
    //     if (/\W/.test(input.value)) {
    //         this.showError('*Password can`t include special character', input)
    //         return false
    //     }
    //     else if (input.value.length < 6) {
    //         this.showError('*Password must be 6 or more characters', input)
    //         return false
    //     }
    //     else{
    //         this.setState({ password: { error: '',  accepted: true } })
    //         return true
    //     }   
    // }

    // showError = (error, input) => {
    //     let erroredState = { error: error,  accepted: false }

    //     if(input.name === 'email'){
    //         this.setState({ email: {...erroredState} });
    //     } else if (input.name === 'password') {            
    //         this.setState({ password: {...erroredState} });
    //     }
    // }

    // hideStatus = (elem) => {
    //     let defaultState = { error: '', accepted: false };

    //     if (elem.name === 'email') {
    //         this.setState({ email: { ...defaultState } });
    //     } else if (elem.name === 'password') {
    //         this.setState({ password: { ...defaultState } });
    //     }
    // }
  }
  
  LoginController.$inject = ['service'];
  
  export default LoginController;