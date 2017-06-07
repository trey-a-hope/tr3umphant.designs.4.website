declare module App.Skills {
    import MyFirebaseRef = Services.MyFirebaseRef;
    class SkillsController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef);
        openResume: () => void;
    }
}
