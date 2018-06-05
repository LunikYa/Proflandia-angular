import {ApiUrl} from "../../constants/constants";
class AccountPageService {
    constructor($http) {
        this.$http = $http;
        this.userEmail = localStorage.getItem('useremail');
    }
    getUserFromApi() {
        return this.$http.get(ApiUrl + '/user/' + this.userEmail)
            .then(response => response.data)
    }
}
export default AccountPageService