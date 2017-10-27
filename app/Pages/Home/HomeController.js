var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Home;
        (function (Home) {
            var HomeController = (function () {
                function HomeController($scope, $timeout) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$timeout = $timeout;
                    this.speedMs = 200;
                    this.stringA = 'D';
                    this.stringB = 'evelopment At The Click of A Finger';
                    this.count = 0;
                    this.descending = false;
                    this.countUp = function () {
                        if (_this.stringA.length == 1) {
                            _this.descending = false;
                            _this.speedMs = 200;
                        }
                        else if (_this.stringA.length == _this.stringB.length + 1) {
                            _this.descending = true;
                            _this.speedMs = 150;
                        }
                        if (!_this.descending) {
                            _this.stringA += _this.stringB[_this.count];
                            _this.count++;
                        }
                        else {
                            _this.stringA = _this.stringA.substr(0, _this.stringA.length - 1);
                            _this.count = 0;
                        }
                        _this.$timeout(_this.countUp, _this.speedMs);
                    };
                    this.stringA += this.stringB;
                }
                return HomeController;
            }());
            HomeController.$inject = ['$scope', '$timeout'];
            Home.HomeController = HomeController;
            angular.module('tr3umphant-designs').controller('HomeController', HomeController);
        })(Home = Pages.Home || (Pages.Home = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map