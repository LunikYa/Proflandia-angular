class RecommendedProfessionController {
    constructor($location, $rootScope, RecommendedProfessionService) {
        this.location = $location;
        this.$rootScope = $rootScope;
        this.RecommendedProfessionService=RecommendedProfessionService;
        this.recommendedProfessionArray=[];
    }

    $onInit() {
        this.$rootScope.showModalWindow = false;
        this.$rootScope.modalWindowText = '';
    }

    exit() {
        this.$rootScope.showModalWindow = true;
        this.$rootScope.modalWindowText = 'Вы уверенны, что хотите закончить прохождение теста и выйти?';
        this.$rootScope.exitToLocation = ('/');
    }

    returnToAccount() {
        this.$rootScope.showModalWindow = true;
        this.$rootScope.modalWindowText = 'Вы уверенны, что хотите закончить прохождение теста и вернутся в аккаунт?';
        this.$rootScope.exitToLocation = ('/account-page');
    }

    getResult() {
        let resultOfRecommendedTest = 0;
        let resultsOfTestArray = [];
        for (let i in this) {
            if (typeof(this[i]) === 'number') {
                resultsOfTestArray.push(this[i]);
            }
        }
        if (resultsOfTestArray.length < 10) {
            this.$rootScope.showModalWindow = true;
            this.$rootScope.modalWindowText = 'Вы ответили не на все вопросы! Желаете закончить прохождение теста без получения результатa?';
            this.$rootScope.exitToLocation = ('/account-page');
        }
        else {
            resultOfRecommendedTest = resultsOfTestArray.reduce((x, y) => x + y);
            if (resultOfRecommendedTest >= 8) {
                this.recommendedProfessionArray=['строитель', 'врач'];
            }
            else if (resultOfRecommendedTest >= 5 && resultOfRecommendedTest <= 7) {
                this.recommendedProfessionArray=['врач', 'учитель'];
            }
            else if (resultOfRecommendedTest >= 3 && resultOfRecommendedTest <= 5) {
                this.recommendedProfessionArray=['учитель', 'повар'];
            }
            else {
                this.recommendedProfessionArray=['повар', 'дизайнер'];
            }
            this.$rootScope.RecommendedProfession=this.recommendedProfessionArray;
            this.RecommendedProfessionService.putUserRecommendedProfessionToApi(this.recommendedProfessionArray);
            this.location.path('/account-page');
        }
    }
}

export default RecommendedProfessionController