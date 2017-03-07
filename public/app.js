angular
.module('SmashStats', [
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'ngSanitize',
    'chart.js',
    'angular-progress-arc',
    'timer',
    'angular-google-analytics',
    'firebase'
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
.factory("Auth", ["$firebaseAuth",
function($firebaseAuth) {
    return $firebaseAuth();
}
])
.factory("User", ["$firebaseObject",
  function($firebaseObject) {
    return function(username) {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref("users").push();
      var profileRef = ref.child(username);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    }
  }
])
.controller(function($scope, $rootScope, Auth){
    $rootScope.isLoggedIn = true;

})
.config(['AnalyticsProvider', function (AnalyticsProvider) {
    // Add configuration code as desired
    AnalyticsProvider.setAccount('UA-93163212-1');  //UU-XXXXXXX-X should be your tracking code
    AnalyticsProvider.setExperimentId('OqTl88LgR5iVy_5sOCXbJg')
    // key : 142131724-0
}]).run(function(Analytics, $rootScope, Auth, $timeout, $state) {

    var variation = cxApi.chooseVariation();
    if(variation == 0){
        console.log("Original")
    }
    else if(variation == 1){
        console.log("Variant")
    }
    cxApi.setChosenVariation(variation);

    $rootScope.variation = variation;

    $timeout(function () {

        var firebaseUser = Auth.$getAuth();

        if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
            console.log("Name", firebaseUser.displayName)
            $rootScope.isLoggedIn = true;
        } else {
            $rootScope.isLoggedIn = false;
            console.log("Signed out");
            console.log($rootScope.activePage)
            if($rootScope.activePage != 'login'){
                $state.go("login")
            }
        }

    }, 350);




});
