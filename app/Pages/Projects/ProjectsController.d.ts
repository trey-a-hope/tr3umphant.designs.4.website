declare module App.Projects {
    import MyFirebaseRef = Services.MyFirebaseRef;
    class ProjectsController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef);
    }
}
