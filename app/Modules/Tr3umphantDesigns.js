var Tr3umphantDesigns = (function () {
    function Tr3umphantDesigns() {
        angular.module('tr3umphant-designs', [
            'ui.router',
            'ngSanitize'
        ])
            .directive('staticInclude', function ($http, $templateCache, $compile) {
            return function (scope, element, attrs) {
                var templatePath = attrs.staticInclude;
                $http.get(templatePath, { cache: $templateCache }).success(function (response) {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope);
                });
            };
        });
    }
    return Tr3umphantDesigns;
}());
new Tr3umphantDesigns();
//# sourceMappingURL=Tr3umphantDesigns.js.map