var App;
(function (App) {
    var GraphicDesign;
    (function (GraphicDesign) {
        var GraphicDesignController = (function () {
            function GraphicDesignController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
            }
            GraphicDesignController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
            return GraphicDesignController;
        }());
        GraphicDesign.GraphicDesignController = GraphicDesignController;
        angular.module('tr3umphant-designs').controller('GraphicDesignController', GraphicDesignController);
    })(GraphicDesign = App.GraphicDesign || (App.GraphicDesign = {}));
})(App || (App = {}));
//# sourceMappingURL=GraphicDesignController.js.map