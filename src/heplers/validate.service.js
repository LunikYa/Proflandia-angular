export default class ValidateService {
    isValidemail(input) {
        let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regExpEmail.test(input.value)) {
            return {error: true, message: '*Емейл не валидный', elem: input}
        } else {
            return {error: false, message: '', elem: input}
        }
    }
    isValidpassword(input) {
        if (input.value.length < 6) {
            return {error: true, message: '*Пароль должен быть не менее 6 символв', elem: input}
        }
        return {error: false, message: '', elem: input}
    }
    isValidtext(input) {
        if (/[^\wа-яА-Я]|\d/g.test(input.value)) {
            return {error: true, message: 'Это поле не должно содержать специальных символов', elem: input}
        }
        else if (input.value.length < 3) {
            return {error: true, message: '*Это поле должно быть не менее 3 символов', elem: input}
        }  
        return {error: false, message: '', elem: input}
    }
}