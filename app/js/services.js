'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('FlickrApp.services', []).
  factory('flickrAPIservice', function($http) {

      var flickrAPI = {};
      flickrAPI.getPhotos = function() {
        return $http({
          method: 'JSONP', 
          url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK'
        });
      }
    return flickrAPI;
  });
