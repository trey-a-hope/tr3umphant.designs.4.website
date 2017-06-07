declare module App.About {
    import MyFirebaseRef = Services.MyFirebaseRef;
    class AboutController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        showImage: boolean;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef);
        viewMyResume: () => void;
    }
}
