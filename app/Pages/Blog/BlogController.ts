module App.Pages.Blog {
    import Blog             = Models.Blog
    import MyFirebaseRef    = Services.MyFirebaseRef;

    export class BlogController {
        blogs           : Array<Blog>   = new Array<Blog>();
        newBlog         : Blog          = new Blog();
        showBlogForm    : boolean       = false;
        isLoading       : boolean       = false;

        static $inject = ['$scope', '$http', 'MyFirebaseRef', '$state'];
        constructor(public $scope: ng.IScope, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef, public $state: ng.ui.IStateService){
            this.$http.get('json/Blogs.json')
                .then((response: any) => {
                    this.blogs = response.data;
                })
                .catch((error: any) => {
                });

            $scope.$watch('isLoading', () => {});
        }


        viewBlog = (blog: Blog): void => {
            this.$state.go('blog', {
                blog: blog
            });
        }

    }
    angular.module('tr3umphant-designs').controller('BlogController', BlogController);
}