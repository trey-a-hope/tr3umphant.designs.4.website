var App;
(function (App) {
    var About;
    (function (About) {
        var PortfolioController = (function () {
            function PortfolioController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
            }
            return PortfolioController;
        }());
        PortfolioController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
        About.PortfolioController = PortfolioController;
        angular.module('tr3umphant-designs').controller('PortfolioController', PortfolioController);
    })(About = App.About || (App.About = {}));
})(App || (App = {}));
//# sourceMappingURL=PortfolioController.js.map