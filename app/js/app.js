'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


angular.module('FlickrApp', [
  'FlickrApp.controllers',
  'FlickrApp.services',
  'FlickrApp.filters',
  'ngRoute',
  'ngSanitize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/photos", {templateUrl: "partials/photos.html", controller: "listController"}).
  when("/photos/:id", {templateUrl: "partials/photo.html", controller: "photoController"}).
  otherwise({redirectTo: '/photos'});
}]);
