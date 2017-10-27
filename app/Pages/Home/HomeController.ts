module App.Pages.Home {

    export class HomeController {
        speedMs: number = 200;
        stringA: string = 'D';
        stringB: string = 'evelopment At The Click of A Finger';
        count: number = 0;
        descending: boolean = false;

        static $inject = ['$scope', '$timeout'];
        constructor(public $scope: any, public $timeout: ng.ITimeoutService){
            this.stringA += this.stringB;
            $timeout(this.countUp, this.speedMs);
        }

        countUp = (): void => {
            if(this.stringA.length == 1){
                this.descending = false;
                this.speedMs = 200;
            }
            else if(this.stringA.length == this.stringB.length + 1){
                this.descending = true;
                this.speedMs = 150;
            }

            if(!this.descending){
                this.stringA += this.stringB[this.count];
                this.count++;
            }else{
                this.stringA = this.stringA.substr(0, this.stringA.length - 1);
                this.count = 0;
            }
    
            this.$timeout(this.countUp, this.speedMs);
        }


    }
    angular.module('tr3umphant-designs').controller('HomeController', HomeController);
}