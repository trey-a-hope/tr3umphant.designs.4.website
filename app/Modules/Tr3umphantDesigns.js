var Tr3umphantDesigns = (function () {
    function Tr3umphantDesigns() {
        angular.module('tr3umphant-designs', [
            'ui.router',
            'ngSanitize'
        ])
            .controller('ParentController', (_a = (function () {
                function ParentController($state) {
                    this.$state = $state;
                }
                return ParentController;
            }()),
            _a.$inject = ['$state'],
            _a));
        var _a;
    }
    return Tr3umphantDesigns;
}());
new Tr3umphantDesigns();
//# sourceMappingURL=Tr3umphantDesigns.js.map