declare module App.GraphicDesign {
    import MyFirebaseRef = Services.MyFirebaseRef;
    class GraphicDesignController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef);
    }
}
