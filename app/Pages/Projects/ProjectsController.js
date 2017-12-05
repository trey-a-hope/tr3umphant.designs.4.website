var App;
(function (App) {
    var Projects;
    (function (Projects) {
        var ProjectsController = (function () {
            function ProjectsController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
            }
            ProjectsController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
            return ProjectsController;
        }());
        Projects.ProjectsController = ProjectsController;
        angular.module('tr3umphant-designs').controller('ProjectsController', ProjectsController);
    })(Projects = App.Projects || (App.Projects = {}));
})(App || (App = {}));
//# sourceMappingURL=ProjectsController.js.map