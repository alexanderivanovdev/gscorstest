var app = angular.module('app', []);
app.controller('doCtrl', function($scope, $http) {
    $scope.reqs = [{
        type: 'get',
        p: 'JSON'
    }, {
        type: 'get',
        p: 'JSONP'
    }, {
        type: 'post',
        p: 'JSON'
    }, {
        type: 'post',
        p: 'JSONP'
    }, {
        type: 'jsonp',
        p: 'JSONP'
    }, {
        type: 'jsonp',
        p: 'JSON'
    }];
});
app.controller('reqCtrl', function($scope, $http) {
    $scope.url = 'https://script.google.com/macros/s/AKfycbyIb3ZdA_SZY3UyVpNZSAdGsFiSZYuIzoAMwk-VK50_3YNaqlw/exec?' + $scope.req.p + '=' + $scope.req.type + '&callback=JSON_CALLBACK';
    $http({method: $scope.req.type, url : $scope.url}).success(function(data) {
    	$scope.class = 'success';
    	$scope.data = JSON.stringify(data);
    }).error(function(err){
    	$scope.class = 'err';
    	$scope.data = JSON.stringify(err);

    });
});
