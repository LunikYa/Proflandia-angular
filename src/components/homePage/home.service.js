export default class LoginService {
    constructor($http) {
        this.$http = $http;
    }
    loginUser(user) {
      return this.$http.post('http://proflandia.herokuapp.com/login', user).then(response => response.data);
    }
  }