export default class LoginService {
    constructor($http) {
        this.$http = $http;
    }
    postUser() {
        event.preventDefault()
      return this.$http.post('http://127.0.0.1:3000/login', {email: 'test', password: '123456'}).then(response => response.data);
    }
  }