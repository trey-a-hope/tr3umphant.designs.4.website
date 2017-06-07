var App;
(function (App) {
    var Services;
    (function (Services) {
        var ModalService = (function () {
            function ModalService($modal, $q, ngToast) {
                var _this = this;
                this.$modal = $modal;
                this.$q = $q;
                this.ngToast = ngToast;
                this.toastTypes = ['success', 'info', 'warning', 'danger'];
                this.displayNotification = function (notificationMessage, header, acknowledgeButtonText, success) {
                    _this.$modal.open({
                        templateUrl: 'app/modal/DisplayNotificationModalTemplate.html',
                        controller: 'DisplayNotificationModalController as vm',
                        size: 'md',
                        backdrop: 'static',
                        resolve: {
                            notificationMessage: function () {
                                return notificationMessage;
                            },
                            header: function () {
                                return header;
                            },
                            acknowledgeButtonText: function () {
                                return acknowledgeButtonText;
                            },
                            success: function () {
                                return success;
                            }
                        }
                    });
                };
                this.displayToast = function (title, subTitle, toastType) {
                    if (_this.toastTypes.indexOf(toastType) < 0) {
                        alert("Wrong toast type being passed in.");
                        return;
                    }
                    _this.ngToast.create({
                        className: toastType,
                        content: '<strong>' + title + '</strong>' + ' ' + subTitle
                    });
                };
            }
            return ModalService;
        }());
        ModalService.$inject = ['$modal', '$q', 'ngToast'];
        Services.ModalService = ModalService;
        angular.module('tr3umphant-designs').service('ModalService', ModalService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=ModalService.js.map