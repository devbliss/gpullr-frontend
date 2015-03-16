'use strict';
angular.module('dashboardModule')
    .controller('dashboardCtrl', ['$scope', '$rootScope', '$interval', 'pullRequestService', 'UserSettingsService',
        function ($scope, $rootScope, $interval, pullRequestService, userSettingsService) {

            var updatePullRequestsInterval,
                getPullRequests;

            getPullRequests = function () {
                pullRequestService.getPullRequests().then(function (pullRequests) {
                    $scope.pullRequests = pullRequests;
                    $rootScope.$emit('changeRequestCount', pullRequests.length);
                });
            };

            getPullRequests();

            updatePullRequestsInterval = $interval(getPullRequests, 60000);

            $scope.$on('$destroy', function () {
                    $interval.cancel(updatePullRequestsInterval);
                    updatePullRequestsInterval = undefined;
                }
            );

            $rootScope.$on('changeAssignee', function () {
                getPullRequests();
            });

            $rootScope.$on('updateUser', function (event, user) {
                $scope.user = user;
            });

            $scope.orderPrList = function (sortOrder) {
                var user = angular.copy($scope.user);
                if (user.userSettingsDto === null) {
                    user.userSettingsDto = {
                        orderOptionDto: sortOrder
                    };
                } else {
                    user.userSettingsDto.orderOptionDto = sortOrder;
                }
                userSettingsService.persistOrderSettings(user).then(function (res) {
                    getPullRequests();
                });
            }

        }]
);
