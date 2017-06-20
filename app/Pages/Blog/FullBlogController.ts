module App.Pages.Blog {
    import Blog = Models.Blog;
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class FullBlogController {
        blog: Blog = null;

        static $inject = ['$scope', '$http', 'MyFirebaseRef', '$state', '$location'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef, public $state: ng.ui.IStateService, public $location: ng.ILocationService){
            /* Url was manually entered... */
            if(this.$state.params.blog == null){
                /* Get blog tag from URL */
                var path = $location.absUrl();
                var n = path.lastIndexOf('/');
                var tag = path.substring(n + 1);
                /* Serach for blog based on tag */
                this.myFirebaseRef.blogDatabaseRef.orderByChild("tag").equalTo(tag).on('child_added', (snapshot: FirebaseDataSnapshot) => {
                    this.blog = snapshot.val();
                    /* Increment view count */
                    this.myFirebaseRef.blogDatabaseRef.child(this.blog.id).child('views').set(this.blog.views + 1);
                    /* Refresh UI. */
                    if(!this.$scope.$$phase){
                        this.$scope.$apply();
                    }
                });
            }
            /* Was taken to blog through clicking on a blog... */
            else{
                this.blog = this.$state.params.blog;
                $location.path('/blog/' + this.blog.tag);
            }
            /* Scroll to the top of the page. */
            window.scrollTo(0, 0);
        }

        back = (): void => {
            this.$state.go('blogs');
        }

        share = (provider: string): void => {
            /* Increment share count */
            this.blog.shares += 1;
            this.myFirebaseRef.blogDatabaseRef.child(this.blog.id).child('shares').set(this.blog.shares);
            /* Prepare share content */
            var url: string = this.$location.absUrl();
            var text: string = 'Blog - ' + this.blog.title;
            switch(provider){
                case 'TWITTER':
                /* Increment view count */
                    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                case 'FACEBOOK':
                    window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&title='+encodeURIComponent(text)+'&description='+encodeURIComponent('Check out this blog I found on td4.tr3umphant-designs.com'), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                case 'LINKEDIN':
                    window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                default:
                    break;
            }
        }
    }
    angular.module('tr3umphant-designs').controller('FullBlogController', FullBlogController);
}