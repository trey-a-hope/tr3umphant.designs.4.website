var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Blog;
        (function (Blog_1) {
            var Blog = App.Models.Blog;
            var BlogController = (function () {
                function BlogController($scope, $http, myFirebaseRef, $state) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                    this.$state = $state;
                    this.blogs = new Array();
                    this.newBlog = new Blog();
                    this.showBlogForm = false;
                    this.isLoading = false;
                    this.viewBlog = function (blog) {
                        _this.$state.go('blog', {
                            blog: blog
                        });
                    };
                    this.$http.get('json/Blogs.json')
                        .then(function (response) {
                        _this.blogs = response.data;
                    })
                        .catch(function (error) {
                    });
                    $scope.$watch('isLoading', function () { });
                }
                BlogController.$inject = ['$scope', '$http', 'MyFirebaseRef', '$state'];
                return BlogController;
            }());
            Blog_1.BlogController = BlogController;
            angular.module('tr3umphant-designs').controller('BlogController', BlogController);
        })(Blog = Pages.Blog || (Pages.Blog = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=BlogController.js.map