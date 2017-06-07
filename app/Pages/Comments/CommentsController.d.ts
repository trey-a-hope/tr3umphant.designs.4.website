declare module App.Comments {
    import MyFirebaseRef = Services.MyFirebaseRef;
    class CommentsController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        comments: Array<Comment>;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef);
    }
    class Comment {
        id: string;
        imageDownloadUrl: string;
        profileName: string;
        postDateTime: string;
        message: string;
    }
}
