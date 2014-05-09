'use strict';

/* Directives */


angular.module('FlickrApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
//   directive('backButton', function(){
//     return {
//       restrict: 'A',
 
//       link: function(scope, element, attrs) {
//         element.bind('click', goBack);
 
//         function goBack() {
//           history.back();
//           scope.$apply();
//         }
//       }
//     }
// });
  // directive('back', ['$window', function($window) {
  //       return {
  //           restrict: 'A',
  //           link: function (scope, elem, attrs) {
  //               elem.bind('click', function () {
  //                   $window.history.back();
  //               });
  //           }
  //       };
  //   }]);
//   directive('backButton', function(){
//     return {
//       restrict: 'A',

//       link: function(scope, element, attrs) {
//         element.bind('click', function () {
//           history.back();
//           scope.$apply();
//         })
//       }
//     };
// });


