var app = angular.module('cs', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        var initialImg = './../img/material-logo.png';
        $scope.mainImgUrl = initialImg;
        $scope.mainImg = {url: initialImg};
        $scope.images = [
            './../img/random-owl.jpg',
            './../img/8761.gif'
        ];
    }
]);