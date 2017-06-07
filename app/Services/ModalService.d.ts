declare module App.Services {
    class ModalService {
        $modal: ng.ui.bootstrap.IModalService;
        $q: ng.IQService;
        ngToast: any;
        toastTypes: string[];
        static $inject: string[];
        constructor($modal: ng.ui.bootstrap.IModalService, $q: ng.IQService, ngToast: any);
        displayNotification: (notificationMessage: string, header: string, acknowledgeButtonText: string, success?: boolean) => void;
        displayToast: (title: string, subTitle: string, toastType: string) => void;
    }
}
