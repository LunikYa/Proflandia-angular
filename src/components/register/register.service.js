export default class LoginService {
    constructor($http) {
        this.$http = $http;
    }
    registerUser(user) {
      return this.$http.post('http://proflandia.herokuapp.com/register', user).then(response => response.data);
    }
  }