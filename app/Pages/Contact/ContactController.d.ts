declare var toastr: any;
declare module App.Contact {
    import EmailService = App.Services.EmailService;
    class ToastMessage {
        title: string;
        subTitle: string;
        class: string;
    }
    class ContactController {
        $scope: ng.IScope;
        $http: ng.IHttpService;
        $location: ng.ILocationService;
        emailService: EmailService;
        $state: ng.ui.IStateService;
        fullName: string;
        email: string;
        message: string;
        messageLimit: number;
        attemptedSend: boolean;
        toastMessages: Array<ToastMessage>;
        emailRegex: RegExp;
        static $inject: string[];
        constructor($scope: ng.IScope, $http: ng.IHttpService, $location: ng.ILocationService, emailService: EmailService, $state: ng.ui.IStateService);
        prepareToastMessages: () => void;
        sendEmail: (form: any) => void;
        share: (provider: string) => void;
        footerClick: () => void;
    }
}
