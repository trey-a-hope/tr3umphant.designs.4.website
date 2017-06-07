module App.GraphicDesign {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class GraphicDesignController {
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
        }

    }
    angular.module('tr3umphant-designs').controller('GraphicDesignController', GraphicDesignController);
}