'use strict';
var Routing;
(function (Routing) {
    var Route = (function () {
        function Route($stateProvider, $urlRouteProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouteProvider = $urlRouteProvider;
            this.$stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/Pages/Home/HomeTemplate.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('about', {
                url: '/about',
                templateUrl: 'app/Pages/About/AboutTemplate.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('service', {
                url: '/service',
                templateUrl: 'app/Pages/Service/ServiceTemplate.html',
                controller: 'ServiceController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('projects', {
                url: '/projects',
                templateUrl: 'app/Pages/Projects/ProjectsTemplate.html',
                controller: 'ProjectsController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('reviews', {
                url: '/reviews',
                templateUrl: 'app/Pages/Comments/CommentsTemplate.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('blogs', {
                url: '/blogs',
                templateUrl: 'app/Pages/Blog/BlogTemplate.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('blog', {
                url: '/blog/{path:.*}',
                templateUrl: 'app/Pages/Blog/FullBlogTemplate.html',
                controller: 'FullBlogController',
                controllerAs: 'vm',
                params: {
                    blog: null
                }
            });
            this.$stateProvider.state('contact', {
                url: '/contact',
                templateUrl: 'app/Pages/Contact/ContactTemplate.html',
                controller: 'ContactController',
                controllerAs: 'vm',
                params: {
                    message: null
                }
            });
            this.$urlRouteProvider.otherwise('/');
        }
        return Route;
    }());
    Routing.Route = Route;
})(Routing || (Routing = {}));
angular.module('tr3umphant-designs').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        return new Routing.Route($stateProvider, $urlRouterProvider);
    }]);
//# sourceMappingURL=Routing.js.map