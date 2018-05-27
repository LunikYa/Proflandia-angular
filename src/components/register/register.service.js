export default class LoginService {
    constructor($http) {
        this.$http = $http;
    }
    registerUser(user) {
      return this.$http.post('http://127.0.0.1:3000/register', user).then(response => response.data);
    }
  }