declare module App.Pages.Service {
    class ServiceController {
        $scope: any;
        $state: ng.ui.IStateService;
        numberOfPages: number;
        pageCost: number;
        databaseIntegrationCost: number;
        databaseIntegration: boolean;
        userAuthenticationCost: number;
        userAuthentication: boolean;
        websiteHostingCost: number;
        websiteHosting: boolean;
        domainNameCost: number;
        domainName: boolean;
        ecommerceCost: number;
        ecommerce: boolean;
        ongoingWebsiteMaintenanceCost: number;
        ongoingWebsiteMaintenance: boolean;
        storageCost: number;
        storage: boolean;
        baseDevelopmentCost: number;
        baseDevelopment: boolean;
        numberOfGoogleAPIs: number;
        googleAPICost: number;
        emailFunctionalityCost: number;
        emailFunctionality: boolean;
        totalCost: number;
        static $inject: string[];
        constructor($scope: any, $state: ng.ui.IStateService);
        calculate: () => void;
        sendQuoteToContact: () => void;
    }
}
