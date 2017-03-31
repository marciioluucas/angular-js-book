/**
 * Created by lukee on 3/31/17.
 */

app.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
    $scope.message = "Ola mundo!";
    }]);

app.controller('ShowCtrl', ['$scope',
    function ShowCtrl($scope) {
        $scope.message = "Mostrando mundo!";
    }]);