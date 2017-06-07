module App.Pages.Home {

    export class HomeController {
        speedMs: number = 150;
        stringA: string = 'T';
        stringB: string = 'r3umphant.Designs';
        count: number = 0;
        descending: boolean = false;
        //Tr3umphant.Designs

        static $inject = ['$scope', '$timeout'];
        constructor(public $scope: any, public $timeout: ng.ITimeoutService){
            $timeout(this.countUp, this.speedMs);
        }

        countUp = (): void => {
            if(this.stringA.length == 1){
                this.descending = false;
                this.speedMs = 150;
            }
            else if(this.stringA.length == this.stringB.length + 1){
                this.descending = true;
                this.speedMs = 100;
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