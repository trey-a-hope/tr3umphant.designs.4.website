declare var firebase: any;

class Tr3umphantDesigns{
    constructor(){
        /* Module Setup */
        angular.module('tr3umphant-designs', [
            'ui.router',
            'ngSanitize'
        ])
        /* Parent App Controller */
        .controller('ParentController', class ParentController {
            static $inject = ['$state'];
            constructor(public $state: ng.ui.IStateService){
                
            }
        });
    }
}

     
new Tr3umphantDesigns();