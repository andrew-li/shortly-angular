angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = function($http) {
    Links.retrieveLinks().success(function (data) {
      $scope.data.links = data;
    });
  };

  $scope.getLinks();

});
