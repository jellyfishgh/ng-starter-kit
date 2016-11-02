import angular from 'angular'

export default function start(application, controller) {
    const app = angular.module(application, [])
    app.controller(controller, ($scope, $http) => {
        $http.get('/data/indexes.json').then((response) => {
            $scope.indexes = response.data
        })
    })
}