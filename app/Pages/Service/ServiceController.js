var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Service;
        (function (Service) {
            var ServiceController = (function () {
                function ServiceController($scope, $state) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$state = $state;
                    this.baseDevelopmentCost = 250.00;
                    this.baseDevelopment = true;
                    this.numberOfPages = 0;
                    this.pageCost = 25.99;
                    this.domainNameCost = 9.99;
                    this.domainName = false;
                    this.websiteHostingCost = 59.99;
                    this.websiteHosting = false;
                    this.emailFunctionalityCost = 19.99;
                    this.emailFunctionality = false;
                    this.databaseIntegrationCost = 99.99;
                    this.databaseIntegration = false;
                    this.userAuthenticationCost = 79.99;
                    this.userAuthentication = false;
                    this.storageCost = 59.99;
                    this.storage = false;
                    this.ecommerceCost = 189.99;
                    this.ecommerce = false;
                    this.ongoingWebsiteMaintenanceCost = 29.99;
                    this.ongoingWebsiteMaintenance = false;
                    this.numberOfGoogleAPIs = 0;
                    this.googleAPICost = 29.99;
                    this.calculate = function () {
                        _this.totalCost = 0;
                        _this.totalCost += _this.baseDevelopmentCost;
                        _this.totalCost += _this.numberOfPages * _this.pageCost;
                        _this.domainName ? _this.totalCost += _this.domainNameCost : null;
                        _this.websiteHosting ? _this.totalCost += _this.websiteHostingCost : null;
                        _this.emailFunctionality ? _this.totalCost += _this.emailFunctionalityCost : null;
                        _this.databaseIntegration ? _this.totalCost += _this.databaseIntegrationCost : null;
                        _this.userAuthentication ? _this.totalCost += _this.userAuthenticationCost : null;
                        _this.storage ? _this.totalCost += _this.storageCost : null;
                        _this.ecommerce ? _this.totalCost += _this.ecommerceCost : null;
                        _this.ongoingWebsiteMaintenance ? _this.totalCost += _this.ongoingWebsiteMaintenanceCost : null;
                        _this.totalCost += _this.numberOfGoogleAPIs * _this.googleAPICost;
                    };
                    this.sendQuoteToContact = function () {
                        var message = 'New request for website - ';
                        var features = new Array();
                        if (_this.numberOfPages > 0) {
                            features.push(_this.numberOfPages + ' pages');
                        }
                        if (_this.domainName) {
                            features.push('domain name');
                        }
                        if (_this.websiteHosting) {
                            features.push('website hosting');
                        }
                        if (_this.emailFunctionality) {
                            features.push('email functionality');
                        }
                        if (_this.databaseIntegration) {
                            features.push('database integration');
                        }
                        if (_this.userAuthentication) {
                            features.push('user authentication');
                        }
                        if (_this.storage) {
                            features.push('storage');
                        }
                        if (_this.ecommerce) {
                            features.push('ecommerce');
                        }
                        if (_this.ongoingWebsiteMaintenance) {
                            features.push('ongoing web maintenance');
                        }
                        if (_this.numberOfGoogleAPIs > 0) {
                            features.push(_this.numberOfGoogleAPIs + ' Google apis');
                        }
                        for (var i = 0; i < features.length; i++) {
                            if (i == features.length - 1) {
                                message += features[i];
                            }
                            else {
                                message += features[i] + ', ';
                            }
                        }
                        message += '; estimate including $' + _this.baseDevelopmentCost.toFixed(2) + ' base development fee - $' + _this.totalCost.toFixed(2);
                        _this.$state.go('contact', { message: message });
                    };
                }
                return ServiceController;
            }());
            ServiceController.$inject = ['$scope', '$state'];
            Service.ServiceController = ServiceController;
            angular.module('tr3umphant-designs').controller('ServiceController', ServiceController);
        })(Service = Pages.Service || (Pages.Service = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ServiceController.js.map