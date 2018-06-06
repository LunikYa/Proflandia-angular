export default class DesignerLessonService {
    constructor($http) {
        this.$http = $http;
    }
    putLevelUp(email) {
      return this.$http.put(`http://proflandia.herokuapp.com/user/levelup`, {email: email, profession: 'designer'}).then(response => response.data);
    }
  }