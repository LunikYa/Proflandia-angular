import {ApiUrl} from "../../constants/constants";
class RecommendedProfessionService {
    constructor($http) {
        this.$http = $http;
    }
    putUserRecommendedProfessionToApi(userRecommendedProfession) {
        this.userEmail = localStorage.getItem('useremail');
        return this.$http.put(ApiUrl + '/recomended-profession', {email:this.userEmail, profession:userRecommendedProfession});
    }
}
export default RecommendedProfessionService