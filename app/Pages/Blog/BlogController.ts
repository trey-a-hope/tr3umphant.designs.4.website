module App.Pages.Blog {
    import Blog = Models.Blog
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class BlogController {
        blogs: Array<Blog> = new Array<Blog>();
        newBlog: Blog = new Blog();
        showBlogForm: boolean = false;
        isLoading: boolean = false;

        static $inject = ['$scope', '$http', 'MyFirebaseRef', '$state'];
        constructor(public $scope: ng.IScope, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef, public $state: ng.ui.IStateService){
            this.myFirebaseRef.blogDatabaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
                this.blogs.push(snapshot.val());
                /* Refresh UI. */
                if(!this.$scope.$$phase){
                    this.isLoading = false;
                    this.$scope.$digest();
                }
            });
            /* Set a watch on the isLoading variable to know when firebase has returned with result. */
            $scope.$watch('isLoading', () => {});
        }

        generateBlogTag = (title: string): string => {
            var _title = '';
            /* Lowercase Title */
            title = title.toLowerCase();
            /* Remove spaces between title. */
            for(var i = 0; i < title.length; i++){
                title[i] == ' ' ? _title += '_' : _title += title[i];
            }
            return _title;
        }

        viewBlog = (blog: Blog): void => {
            this.$state.go('full-blog', {
                blog: blog
            });
        }

        toggleBlogForm = (): void => {
            this.showBlogForm = !this.showBlogForm;
        }

        saveBlog = (): void => {
            var newPostKey: string = this.myFirebaseRef.blogDatabaseRef.push().key.toString();
            this.newBlog.id = newPostKey;
            this.newBlog.postDateTime = new Date().toDateString();
            this.newBlog.tag = this.generateBlogTag(this.newBlog.title);
            this.myFirebaseRef.blogDatabaseRef.child(this.newBlog.id).update(this.newBlog);
            this.toggleBlogForm();
        }

    }
    angular.module('tr3umphant-designs').controller('BlogController', BlogController);
}