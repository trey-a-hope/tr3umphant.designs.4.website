module App.Pages.Blog {
    import Blog = Models.Blog;
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class FullBlogController {
        blog: Blog = null;

        static $inject = ['$scope', '$http', 'MyFirebaseRef', '$state', '$location'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef, public $state: ng.ui.IStateService, public $location: ng.ILocationService){
            /* Url was manually entered... */
            if(this.$state.params.blog == null){
                var tag = $location.search().title; 
                this.myFirebaseRef.blogDatabaseRef.orderByChild("tag").equalTo(tag).on('child_added', (snapshot: FirebaseDataSnapshot) => {
                    this.blog = snapshot.val();
                    /* Refresh UI. */
                    if(!this.$scope.$$phase){
                        this.$scope.$apply();
                    }
                });
            }
            /* Was taken to blog through clicking on a blog... */
            else{
                this.blog = this.$state.params.blog;
                $location.search('title', this.blog.tag);
            }
            /* Scroll to the top of the page. */
            window.scrollTo(0, 0);
        }

        back = (): void => {
            this.$state.go('blog');
        }

        share = (provider: string): void => {
            var url: string = this.$location.absUrl();
            var text: string = 'Check out this blog I just read via Tr3umphant.Designs';
            switch(provider){
                case 'TWITTER':
                    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                case 'FACEBOOK':
                    window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&title='+encodeURIComponent(text)+'&description='+encodeURIComponent('Check out this blog I found on Intercom.com'), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
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