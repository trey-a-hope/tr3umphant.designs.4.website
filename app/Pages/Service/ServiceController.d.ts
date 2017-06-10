declare module App.Pages.Service {
    class ServiceController {
        $scope: any;
        $state: ng.ui.IStateService;
        totalCost: number;
        depositCost: number;
        baseDevelopmentCost: number;
        baseDevelopment: boolean;
        numberOfPages: number;
        pageCost: number;
        domainNameCost: number;
        domainName: boolean;
        websiteHostingCost: number;
        websiteHosting: boolean;
        emailFunctionalityCost: number;
        emailFunctionality: boolean;
        databaseIntegrationCost: number;
        databaseIntegration: boolean;
        userAuthenticationCost: number;
        userAuthentication: boolean;
        storageCost: number;
        storage: boolean;
        ecommerceCost: number;
        ecommerce: boolean;
        ongoingWebsiteMaintenanceCost: number;
        ongoingWebsiteMaintenance: boolean;
        numberOfGoogleAPIs: number;
        googleAPICost: number;
        static $inject: string[];
        constructor($scope: any, $state: ng.ui.IStateService);
        calculate: () => void;
        sendQuoteToContact: () => void;
    }
}
