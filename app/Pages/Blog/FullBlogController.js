var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Blog;
        (function (Blog_1) {
            var FullBlogController = (function () {
                function FullBlogController($scope, $http, myFirebaseRef, $state, $location) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.$state = $state;
                    this.$location = $location;
                    this.blog = null;
                    this.back = function () {
                        _this.$state.go('blogs');
                    };
                    this.share = function (provider) {
                        _this.blog.shares += 1;
                        _this.myFirebaseRef.blogDatabaseRef.child(_this.blog.id).child('shares').set(_this.blog.shares);
                        var url = _this.$location.absUrl();
                        var text = 'Check out this blog I just read through Tr3umphant.Designs';
                        switch (provider) {
                            case 'TWITTER':
                                window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                                break;
                            case 'FACEBOOK':
                                window.open('http://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(text) + '&description=' + encodeURIComponent('Check out this blog I found on Intercom.com'), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                                break;
                            case 'LINKEDIN':
                                window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                                break;
                            default:
                                break;
                        }
                    };
                    if (this.$state.params.blog == null) {
                        var path = $location.absUrl();
                        var n = path.lastIndexOf('/');
                        var tag = path.substring(n + 1);
                        this.myFirebaseRef.blogDatabaseRef.orderByChild("tag").equalTo(tag).on('child_added', function (snapshot) {
                            _this.blog = snapshot.val();
                            _this.myFirebaseRef.blogDatabaseRef.child(_this.blog.id).child('views').set(_this.blog.views + 1);
                            if (!_this.$scope.$$phase) {
                                _this.$scope.$apply();
                            }
                        });
                    }
                    else {
                        this.blog = this.$state.params.blog;
                        $location.path('/blog/' + this.blog.tag);
                    }
                    window.scrollTo(0, 0);
                }
                return FullBlogController;
            }());
            FullBlogController.$inject = ['$scope', '$http', 'MyFirebaseRef', '$state', '$location'];
            Blog_1.FullBlogController = FullBlogController;
            angular.module('tr3umphant-designs').controller('FullBlogController', FullBlogController);
        })(Blog = Pages.Blog || (Pages.Blog = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=FullBlogController.js.map