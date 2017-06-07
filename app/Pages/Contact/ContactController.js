var App;
(function (App) {
    var Contact;
    (function (Contact) {
        var ToastMessage = (function () {
            function ToastMessage() {
            }
            return ToastMessage;
        }());
        Contact.ToastMessage = ToastMessage;
        var ContactController = (function () {
            function ContactController($scope, $http, $location, emailService, $state) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.$location = $location;
                this.emailService = emailService;
                this.$state = $state;
                this.message = '';
                this.messageLimit = 400;
                this.attemptedSend = false;
                this.toastMessages = new Array();
                this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.prepareToastMessages = function () {
                    _this.$http.get('json/Quotes.json')
                        .then(function (response) {
                        _this.toastMessages = response.data;
                    })
                        .catch(function (error) {
                    });
                };
                this.sendEmail = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        var to = 'tr3umphant.designs@gmail.com';
                        var subject = 'New Contact - ' + _this.fullName + ' via ' + _this.email;
                        var body = _this.message;
                        _this.emailService.sendEmail(to, subject, body)
                            .then(function (result) {
                            _this.fullName = _this.email = _this.message = '';
                            form.$setPristine();
                            toastr.success('Message sent.');
                        })
                            .catch(function (error) {
                            toastr.error('Could not send message at this time.');
                        });
                    }
                    else {
                        toastr.error('There were errors in your submission.');
                    }
                };
                this.share = function (provider) {
                    var url = 'http://treyahope.tr3umphant-designs.com';
                    var text = 'Check out this development service called Tr3umphant.Designs!';
                    switch (provider) {
                        case 'TWITTER':
                            window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                            break;
                        case 'FACEBOOK':
                            window.open('http://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                            break;
                        case 'LINKEDIN':
                            window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                            break;
                        default:
                            break;
                    }
                };
                this.footerClick = function () {
                    var rand = Math.floor((Math.random() * _this.toastMessages.length) + 0);
                    var toastMessage = _this.toastMessages[rand];
                };
                if (this.$state.params.message != null) {
                    this.message = this.$state.params.message;
                }
                this.prepareToastMessages();
            }
            return ContactController;
        }());
        ContactController.$inject = ['$scope', '$http', '$location', 'EmailService', '$state'];
        Contact.ContactController = ContactController;
        angular.module('tr3umphant-designs').controller('ContactController', ContactController);
    })(Contact = App.Contact || (App.Contact = {}));
})(App || (App = {}));
//# sourceMappingURL=ContactController.js.map