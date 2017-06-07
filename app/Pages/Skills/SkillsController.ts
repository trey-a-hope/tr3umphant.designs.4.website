module App.Skills {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class SkillsController {
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
        }

        openResume = (): void => {
            window.open("https://drive.google.com/open?id=0B0_tFXHHRl4tUl9uS2dwb05WWDQ"); 
        }

    }
    angular.module('tr3umphant-designs').controller('SkillsController', SkillsController);
}