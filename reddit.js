angular.module('reddit', [])
.controller('News', function($scope, $http) {
    $http.get('http://www.reddit.com/r/news/new.json').
        then(function(response) {
        $scope.listing = response.data;
    });
});