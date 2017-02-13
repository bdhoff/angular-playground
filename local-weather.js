angular.module('weather', [])
.controller('Weather', function($scope, $http) {
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text%3D"summerville%2C sc")&format=json').
        then(function(response) {
        $scope.weather = response.data;
        $scope.localData = $scope.weather.query.results.channel;
    });
});