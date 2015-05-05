'use strict';
angular.module('loginModule')
    .controller('oauthCtrl',
    /* jshint maxparams:false */
    ['$scope', '$state', '$stateParams', '$cookieStore', 'userService', 'STATE_DASHBOARD', 'STATE_LOGIN',
        function ($scope, $state, $stateParams, $cookieStore, userService, STATE_DASHBOARD, STATE_LOGIN) {
            var cookieState = $cookieStore.get('state');
            $cookieStore.remove('state');

            if (typeof(cookieState) === 'undefined') {
                $scope.errorMessage = 'Verification failed';
                $state.go(STATE_LOGIN);
            } else if (cookieState !== $stateParams.state) {
                $scope.errorMessage = 'Verification failed';
                $state.go(STATE_LOGIN);
            } else {
                userService.authenticateAndLogInUser($stateParams.code).then(
                    function () {
                        $state.go(STATE_DASHBOARD);
                    }, function (error) {
                        $scope.errorMessage = error;
                        $state.go(STATE_LOGIN);
                    }
                );
            }

        }]);
