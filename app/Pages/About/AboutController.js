var App;
(function (App) {
    var About;
    (function (About) {
        var AboutController = (function () {
            function AboutController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.showImage = true;
                this.viewMyResume = function () {
                    window.open("https://drive.google.com/open?id=0B0_tFXHHRl4tUl9uS2dwb05WWDQ");
                };
            }
            return AboutController;
        }());
        AboutController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
        About.AboutController = AboutController;
        angular.module('tr3umphant-designs').controller('AboutController', AboutController);
    })(About = App.About || (App.About = {}));
})(App || (App = {}));
//# sourceMappingURL=AboutController.js.map