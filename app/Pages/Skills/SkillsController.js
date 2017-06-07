var App;
(function (App) {
    var Skills;
    (function (Skills) {
        var SkillsController = (function () {
            function SkillsController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.openResume = function () {
                    window.open("https://drive.google.com/open?id=0B0_tFXHHRl4tUl9uS2dwb05WWDQ");
                };
            }
            return SkillsController;
        }());
        SkillsController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
        Skills.SkillsController = SkillsController;
        angular.module('tr3umphant-designs').controller('SkillsController', SkillsController);
    })(Skills = App.Skills || (App.Skills = {}));
})(App || (App = {}));
//# sourceMappingURL=SkillsController.js.map