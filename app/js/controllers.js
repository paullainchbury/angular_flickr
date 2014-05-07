'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

angular.module('FlickrApp.controllers', []).
  controller('listController', function($scope) {
  }).
  controller('photoController', function($scope, $routeParams) {
    $scope.photo = $scope.photosList[$routeParams.id];
    $scope.description = $scope.photo.description;
    // Remove the first two paragraphs from the description which are not required
    var re = /<\/p>(?=)/;
    var newString = $scope.description.split(re);
    newString.splice(0, 2);
    $scope.description = newString.join();
    // Split up the tags string
    var tags = $scope.photo.tags.split(' ');
    $scope.tags = tags;
    console.log($scope.tags);
  }).
    controller('parentCtrl', function($scope, flickrAPIservice) {
      $scope.photosList = [];

      flickrAPIservice.getPhotos().success(function (response) {
          $scope.photosList = response.items;
      });
  });



