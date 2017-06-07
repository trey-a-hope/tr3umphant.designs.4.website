module App.Projects {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class ProjectsController {
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
        }

    }
    angular.module('tr3umphant-designs').controller('ProjectsController', ProjectsController);
}