module App.About {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class AboutController {
        showImage: boolean = true;
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
            // var spotifyApi = new SpotifyWebApi();
            // spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
            //     .then(function(data) {
            //         console.log('Albums information', data);
            //     }, function(err) {
            //         console.error(err);
            //     });
        }

        viewMyResume = (): void => {
            window.open("https://drive.google.com/open?id=0B0_tFXHHRl4tUl9uS2dwb05WWDQ"); 
        }

    }
    angular.module('tr3umphant-designs').controller('AboutController', AboutController);
}