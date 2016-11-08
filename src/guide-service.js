import angular from 'angular'

angular.module('myServiceModule', [])
    .controller('MyController', ['$scope', 'notify', ($scope, notify) => {
        $scope.callNotify = (msg) => {
            notify(msg)
        }
    }])
    .factory('notify', ['$window', (win) => {
        let msgs = []
        return (msg) => {
            msgs.push(msg)
            if(msgs.length === 3) {
                win.alert(msgs.join('\n'))
                msgs = []
            }
        }
    }])