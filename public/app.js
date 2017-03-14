angular
.module('SmashStats', [
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'ngSanitize',
    'chart.js',
    'angular-progress-arc',
    'timer',
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
  function($firebaseObject, Auth) {
      return function(id) {
          var ref = firebase.database().ref('users');

          var obj = $firebaseObject(ref);
          console.log(obj)
          obj.$loaded().then(function() {
              console.log(obj)
              // create a reference to the database node where we will store our data
              if(obj[id] == undefined || obj[id] == null){
                  //initalize user
                  obj[id] = {
                      "Stage" : {
                          "Battlefield": {
                              "win": 0,
                              "loss" : 0
                          },
                          "Final Destination" : {
                              "win": 0,
                              "loss" : 0
                          },
                          "Dreamland" : {
                              "win" : 0,
                              "loss" : 0
                          },
                          "Yoshi's Story" : {
                              "win" : 0,
                              "loss" : 0
                          },
                          "Pokemon Stadium" : {
                              "win" : 0,
                              "loss" : 0
                          },
                          "Fountain of Dreams" : {
                              "win" : 0,
                              "loss" : 0
                          }
                      },
                      "Opponents": {
                      }
                  }
                obj.$save();
              }

              return $firebaseObject(ref.child(id))
          });
          return $firebaseObject(ref.child(id))
      }

  }
])
.controller(function($scope, $rootScope, Auth){
    $rootScope.isLoggedIn = true;

})
.run(function($rootScope, Auth, $timeout, $state) {

    $timeout(function () {

        var firebaseUser = Auth.$getAuth();

        if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
            console.log("Name:", firebaseUser.displayName)
            $rootScope.isLoggedIn = true;
            if($rootScope.activePage == 'login'){
                $state.go("home")
            }
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
