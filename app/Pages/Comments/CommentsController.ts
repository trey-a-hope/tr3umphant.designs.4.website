module App.Comments {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class CommentsController {
        comments: Array<Comment> = new Array<Comment>();

        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
        }
    }

    export class Comment{
        id: string;
        imageDownloadUrl: string;
        profileName: string;
        postDateTime: string;
        message: string;
    }

    angular.module('tr3umphant-designs').controller('CommentsController', CommentsController);
}