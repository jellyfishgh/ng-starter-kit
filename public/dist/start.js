'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = start;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start(application, controller) {
    var app = _angular2.default.module(application, []);
    app.controller(controller, ['$scope', '$http', function ($scope, $http) {
        $http.get('/data/indexes.json').then(function (response) {
            $scope.indexes = response.data;
        });
    }]);
    /**
        https://code.angularjs.org/1.5.8/docs/tutorial/step_07
        A Note on Minification
        压缩时要注意
    */
}