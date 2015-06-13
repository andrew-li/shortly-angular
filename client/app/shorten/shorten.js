angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(loc) {
    Links.sendLink(loc).success(function() {});
  };
});


