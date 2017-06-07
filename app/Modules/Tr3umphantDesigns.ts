declare var firebase: any;

class Tr3umphantDesigns{
    constructor(){
        /* Module Setup */
        angular.module('tr3umphant-designs', [
            'ui.router',
            'ngSanitize'
        ])
        /* Directive - Static Include - Used for ng-include to keep parent scope through templates */
        .directive('staticInclude', ($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService) => {
            return (scope: ng.IScope, element: any, attrs: any): any => {
                var templatePath = attrs.staticInclude;
                $http.get(templatePath, { cache: $templateCache }).success((response: any) => {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope);
                });
            };
        });
    }
}
new Tr3umphantDesigns();