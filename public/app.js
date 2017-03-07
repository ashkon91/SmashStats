angular
.module('SmashStats', [
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'ngSanitize',
    'chart.js',
    'angular-progress-arc',
    'timer',
    'angular-google-analytics'
    ])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login',{
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            params:{
              from: null,
              who: null
            }
        })
        .state('newPlayer', {
            url:'/newPlayer',
            templateUrl: 'views/newPlayer.html',
            controller: 'NewPlayerCtrl'
        })
        .state('register', {
            url:'/register',
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
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
            url: '/addFriendly_A',
            templateUrl: 'views/addFriendly.html',
            controller: 'AddFriendlyCtrl'
        })
        .state('addFriendlyRe', {
            url: '/addFriendly_B',
            templateUrl: 'views/addFriendlyRedesign.html',
            controller: 'AddFriendlyReCtrl'
        })
        .state('practice', {
            url: '/practice',
            templateUrl: 'views/practice.html',
            controller: 'PracticeCtrl',
            params: {
                tech: null
            }
        });


})
.controller(function($scope, $rootScope){
    $rootScope.isLoggedIn = true;
})
.config(['AnalyticsProvider', function (AnalyticsProvider) {
   // Add configuration code as desired
   AnalyticsProvider.setAccount('UA-93163212-1');  //UU-XXXXXXX-X should be your tracking code
   //AnalyticsProvider.setExperimentId('12345');
}]).run(['Analytics', function(Analytics) { }]);
