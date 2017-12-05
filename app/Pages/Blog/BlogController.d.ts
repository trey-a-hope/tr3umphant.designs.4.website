declare module App.Pages.Blog {
    import Blog = Models.Blog;
    import MyFirebaseRef = Services.MyFirebaseRef;
    class BlogController {
        $scope: ng.IScope;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        $state: ng.ui.IStateService;
        blogs: Array<Blog>;
        newBlog: Blog;
        showBlogForm: boolean;
        isLoading: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef, $state: ng.ui.IStateService);
        viewBlog: (blog: Blog) => void;
    }
}
