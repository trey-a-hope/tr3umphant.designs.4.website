declare module App.Pages.Blog {
    import Blog = Models.Blog;
    import MyFirebaseRef = Services.MyFirebaseRef;
    class FullBlogController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        $state: ng.ui.IStateService;
        $location: ng.ILocationService;
        blog: Blog;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, $state: ng.ui.IStateService, $location: ng.ILocationService);
        back: () => void;
        share: (provider: string) => void;
    }
}
