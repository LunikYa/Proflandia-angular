import {ApiUrl} from "../../constants/constants";
class AccountPageService {
    constructor($http) {
        this.$http = $http;
    }
    getUserFromApi() {
        this.userEmail = localStorage.getItem('useremail');
        return this.$http.get(ApiUrl + '/user/' + this.userEmail)
            .then(response => response.data)
    }
}
export default AccountPageService