declare module App.Pages.Home {
    class HomeController {
        $scope: any;
        $timeout: ng.ITimeoutService;
        speedMs: number;
        stringA: string;
        stringB: string;
        count: number;
        descending: boolean;
        static $inject: string[];
        constructor($scope: any, $timeout: ng.ITimeoutService);
        countUp: () => void;
    }
}
