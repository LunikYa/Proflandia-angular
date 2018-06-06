export default class ProfessionService {
    constructor($http) {
        this.$http = $http;
    }
    getProfession(profession) {
      return this.$http.get(`http://proflandia.herokuapp.com/lessons/${profession}`).then(response => response.data);
    }
    getProfessions() {
      return this.$http.get(`http://proflandia.herokuapp.com/professions`).then(response => response.data);
    }
    getUser(email) {
      return this.$http.get(`http://proflandia.herokuapp.com/user/${email}`).then(response => response.data);
    }
  }