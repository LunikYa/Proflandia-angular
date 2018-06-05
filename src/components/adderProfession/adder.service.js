export default class AdderService {
    constructor($http) {
        this.$http = $http;
    }
    getUser(email) {
        return this.$http.get(`http://proflandia.herokuapp.com/user/${email}`).then(response => response.data);
    }
    addProf(email, prof){
        return this.$http.put('http://proflandia.herokuapp.com/profession', {email: email, profession: prof}).then(response => response.data);
    }
  }
  