import {ApiUrl} from "../../constants/constants";
class RecommendedProfessionService {
    constructor($http) {
        this.$http = $http;
        this.userEmail = localStorage.getItem('useremail');
    }
    putUserRecommendedProfessionToApi(userRecommendedProfession) {
        debugger
        return this.$http.put(ApiUrl + '/recomended-profession', {email:this.userEmail, profession:userRecommendedProfession})
            .then(response => response.data)
    }
}
export default RecommendedProfessionService