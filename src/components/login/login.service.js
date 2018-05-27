export default class LoginService {
    constructor($http) {
        this.$http = $http;
    }
    loginUser(user) {
      return this.$http.post('http://127.0.0.1:3000/login', user).then(response => response.data);
    }
  }