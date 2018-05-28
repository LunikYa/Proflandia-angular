export default class ValidateService {
    isValidemail(input) {
        let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regExpEmail.test(input.value)) {
            return {error: true, message: '*Email is not valid', elem: input}
        } else {
            return {error: false, message: '', elem: input}
        }
    }
    isValidpassword(input) {
        if (/\W/.test(input.value)) {
            return {error: true, message: '*Password can`t include special character', elem: input}
        }
        else if (input.value.length < 6) {
            return {error: true, message: '*Password must be 6 or more characters', elem: input}
        }
        return {error: false, message: '', elem: input}
    }
    isValidtext(input) {
        if (/\W|\d/.test(input.value[0])) {
            return {error: true, message: '*First char must be letter', elem: input}
        }
        else if (input.value.length < 3) {
            return {error: true, message: '*This field must be 3 or more characters', elem: input}
        }  
        return {error: false, message: '', elem: input}
    }
}