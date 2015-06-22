var app = angular.module('app', []);
app.controller('doCtrl', function($scope, $http) {
    $scope.reqs = [{
        type: 'get',
        p: 'JSON'
    }, {
        type: 'get',
        p: 'JSONP'
    }, {
        type: 'get',
        p: 'TEXT'
    }, {
        type: 'post',
        p: 'JSON'
    }, {
        type: 'post',
        p: 'JSONP'
    }, {
        type: 'post',
        p: 'TEXT'
    }, {
        type: 'jsonp',
        p: 'JSONP'
    }];
});
app.controller('reqCtrl', function($scope, $http) {
    $scope.url = 'https://script.google.com/macros/s/AKfycbyIb3ZdA_SZY3UyVpNZSAdGsFiSZYuIzoAMwk-VK50_3YNaqlw/exec?' + $scope.req.p + '=' + $scope.req.type + '&callback=JSON_CALLBACK';
    var settings = {
        method: $scope.req.type,
        url: $scope.url,
        data: {}
    };
    if ($scope.req.type == 'post') settings.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    $http(settings).then(function(data) {
        $scope.class = 'success';
        delete data.config.url;
        $scope.data = data;
    }, function(data) {
        $scope.class = 'danger';
        delete data.config.url;
        $scope.data = data;
    })
});
