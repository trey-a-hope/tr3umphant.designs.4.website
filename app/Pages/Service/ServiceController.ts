module App.Pages.Service {

    export class ServiceController {
        numberOfPages: number = 0;
        pageCost: number = 25.99;
        databaseIntegrationCost: number = 99.99;
        databaseIntegration: boolean = false;
        userAuthenticationCost: number = 79.99;
        userAuthentication: boolean = false;
        websiteHostingCost: number = 59.99;
        websiteHosting: boolean = false;
        domainNameCost: number = 9.99;
        domainName: boolean = false;
        ecommerceCost: number = 189.99;
        ecommerce: boolean = false;
        ongoingWebsiteMaintenanceCost: number = 29.99;
        ongoingWebsiteMaintenance: boolean = false;
        storageCost: number = 59.99;
        storage: boolean = false;
        totalCost: number;
        static $inject = ['$scope', '$state'];
        constructor(public $scope: any, public $state: ng.ui.IStateService){
        }

        calculate = (): void => {
            this.totalCost = 0;
            this.totalCost += this.numberOfPages * this.pageCost;
            this.domainName ? this.totalCost += this.domainNameCost : null;
            this.databaseIntegration ? this.totalCost += this.databaseIntegrationCost : null;
            this.userAuthentication ? this.totalCost += this.userAuthenticationCost : null;
            this.websiteHosting ? this.totalCost += this.websiteHostingCost : null;
            this.ecommerce ? this.totalCost += this.ecommerceCost : null;
            this.ongoingWebsiteMaintenance ? this.totalCost += this.ongoingWebsiteMaintenanceCost : null;
            this.storage ? this.totalCost += this.storageCost : null;
        }

        sendQuoteToContact = (): void => {
            var message = 'goog booger';
            this.$state.go('contact', { message: message });
        }

    }
    angular.module('tr3umphant-designs').controller('ServiceController', ServiceController);
}