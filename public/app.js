angular
.module('SmashStats', [
    'ui.router',
    'ui.bootstrap'
])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login',{
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .state('newPlayer', {
            url:'/newPlayer',
            templateUrl: 'views/newPlayer.html',
            controller: 'NewPlayerCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .state('more', {
            url: '/more',
            templateUrl: 'views/more.html',
            controller: 'MoreCtrl'
        })
        .state('stats', {
            url: '/stats',

            templateUrl: 'views/stats.html',
            controller: 'StatsCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'views/settings.html',
            controller: 'SettingsCtrl'
        })
        .state('train', {
            url: '/train',
            templateUrl: 'views/train.html',
            controller: 'TrainCtrl'
        })
        .state('tech', {
            url: '/tech',
            templateUrl: 'views/tech.html',
            controller: 'TechCtrl',
            params: {
                tech: null
            }
        })
        .state('addPrac', {
            url: '/addPrac',
            templateUrl: 'views/addPrac.html',
            controller: 'AddPracCtrl'
        })
        .state('addFriendly', {
            url: '/addFriendly',
            templateUrl: 'views/addFriendly.html',
            controller: 'AddFriendlyCtrl'
        })
})
.controller(function($scope, $rootScope){
    $rootScope.isLoggedIn = true;
});
