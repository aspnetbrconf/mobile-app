angular
.module('aspnetbrapp', ['ionic', 'common'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})
.constant('Configuration', {
  serviceUrl: 'http://localhost:5000/api/v1'
})
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
   .state('eventmenu', {
     url: "/event",
     abstract: true,
     templateUrl: "templates/menu.html"
   })
   .state('eventmenu.home', {
     url: "/home",
     views: {
       'menuContent' :{
         templateUrl: "templates/home.html",
         controller: "eventController"
       }
     }
   })

   .state('eventmenu.schedule', {
     url: "/schedule",
     views: {
       'menuContent' :{
         templateUrl: "templates/schedule.html"
        // controller: "scheduleController"
       }
     }
   })
   .state('eventmenu.checkin', {
     url: "/check-in",
     views: {
       'menuContent' :{
         templateUrl: "templates/check-in.html",
         controller: "CheckinCtrl"
       }
     }
   })
   .state('eventmenu.attendees', {
     url: "/attendees",
     views: {
       'menuContent' :{
         templateUrl: "templates/attendees.html",
         controller: "AttendeesCtrl"
       }
     }
   })

 $urlRouterProvider.otherwise("/event/home");

});
