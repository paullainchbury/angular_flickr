var flickrControllers = angular.module('flickrControllers', []);

flickrControllers.controller('ListController', ['$scope', '$http',
  function ($scope, $http) {
    $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&?callback=JSON_CALLBACK").
    success(function(data, status, headers, config) {
      //The success function never gets called as the jsonp request returns jsonFlickrFeed?!
    }).
    error(function(data, status, headers, config) {
        $scope.error = true;
    });
    window.jsonFlickrFeed = function(data) {
      $scope.data = data["items"];
      console.log($scope.data);
    }
  }]);



flickrControllers.controller('DetailsController', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
    // $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&?callback=JSON_CALLBACK").
    // success(function(data, status, headers, config) {
    //   //The success function never gets called as the jsonp request returns jsonFlickrFeed?!
    // }).
    // error(function(data, status, headers, config) {
    //     $scope.error = true;
    // });
    // window.jsonFlickrFeed = function(data) {
    //   $scope.data = data["items"];

      $scope.whichItem = $routeParams.photoId;
      // console.log($scope.data);
    }]);




