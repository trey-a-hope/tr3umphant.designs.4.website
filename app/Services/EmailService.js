var App;
(function (App) {
    var Services;
    (function (Services) {
        var EmailService = (function () {
            function EmailService($http) {
                var _this = this;
                this.$http = $http;
                this.sendEmail = function (to, subject, body) {
                    return _this.$http({
                        method: 'POST',
                        url: 'php/sendEmail.php',
                        data: { to: to, subject: subject, body: body },
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    });
                };
            }
            EmailService.$inject = ['$http'];
            return EmailService;
        }());
        Services.EmailService = EmailService;
        angular.module('tr3umphant-designs').service('EmailService', EmailService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=EmailService.js.map