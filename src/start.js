import angular from 'angular'

export default function start(application, controller) {
    const app = angular.module(application, [])
    app.controller(controller, [
        '$scope',
        '$http',
        ($scope, $http) => {
            $http.get('/data/indexes.json').then((response) => {
                $scope.indexes = response.data
            })
        }
    ])
    /**
        https://code.angularjs.org/1.5.8/docs/tutorial/step_07
        A Note on Minification
        压缩时要注意
    */
}