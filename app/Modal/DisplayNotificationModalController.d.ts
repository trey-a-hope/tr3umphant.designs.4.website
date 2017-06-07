declare module App.Modal {
    class DisplayNotificationModalController {
        $modalInstance: angular.ui.bootstrap.IModalServiceInstance;
        notificationMessage: string;
        header: string;
        acknowledgeButtonText: string;
        success: boolean;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, notificationMessage: string, header: string, acknowledgeButtonText: string, success: boolean);
        acknowledge: () => void;
    }
}
