'use strict';

/* Filters */

angular.module('FlickrApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).
  filter('userName', function() {
    return function(string) {
      var re = /\(([^)]+)\)/
      return string.match(re)[1];
    };
});
