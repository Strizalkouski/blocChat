(function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }
     
     angular
         .module('bloc-chat', ['ui.router','ngCookies', 'firebase','ui.bootstrap'])
         .config(config);
 })();