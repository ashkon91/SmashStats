angular
.module('SmashStats', [
    'ui.router',
    'ui.bootstrap'
])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
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
        /*    params: {
                key:value
            },*/
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
        .state('addFriendly', {
            url: '/addFriendly',
            templateUrl: 'views/addFriendly.html',
            controller: 'AddFriendlyCtrl'
        })
});
