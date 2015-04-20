'use strict';

angular.module('dashboardModule')
    .directive('dvbRankingList', function () {
        return {
            replace: true,
            scope: {
                ranking: '=rankdata',
                user: '=userdata'
            },
            restrict: 'A',
            controller:['$scope', 'UserNameService', function($scope, UserNameService){$scope.getName = UserNameService.getName;}],
            templateUrl: 'app_components/dashboardModule/views/rankingList.html'
        };
    });
