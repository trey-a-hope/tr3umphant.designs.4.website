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
                    this.generateBlogTag = function (title) {
                        var _title = '';
                        title = title.toLowerCase();
                        for (var i = 0; i < title.length; i++) {
                            title[i] == ' ' ? _title += '_' : _title += title[i];
                        }
                        return _title;
                    };
                    this.viewBlog = function (blog) {
                        _this.$state.go('full-blog', {
                            blog: blog
                        });
                    };
                    this.toggleBlogForm = function () {
                        _this.showBlogForm = !_this.showBlogForm;
                    };
                    this.saveBlog = function () {
                        var newPostKey = _this.myFirebaseRef.blogDatabaseRef.push().key.toString();
                        _this.newBlog.id = newPostKey;
                        _this.newBlog.postDateTime = new Date().toDateString();
                        _this.newBlog.tag = _this.generateBlogTag(_this.newBlog.title);
                        _this.myFirebaseRef.blogDatabaseRef.child(_this.newBlog.id).update(_this.newBlog);
                        _this.toggleBlogForm();
                    };
                    this.myFirebaseRef.blogDatabaseRef.on('child_added', function (snapshot) {
                        _this.blogs.push(snapshot.val());
                        if (!_this.$scope.$$phase) {
                            _this.isLoading = false;
                            _this.$scope.$digest();
                        }
                    });
                    $scope.$watch('isLoading', function () { });
                }
                return BlogController;
            }());
            BlogController.$inject = ['$scope', '$http', 'MyFirebaseRef', '$state'];
            Blog_1.BlogController = BlogController;
            angular.module('tr3umphant-designs').controller('BlogController', BlogController);
        })(Blog = Pages.Blog || (Pages.Blog = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=BlogController.js.map