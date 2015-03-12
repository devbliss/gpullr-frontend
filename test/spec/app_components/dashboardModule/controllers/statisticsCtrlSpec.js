'use strict';

describe('statisticsCtrl', function () {
   var controller,
       $scope,
       tabs,
       $state;
       
   beforeEach(function () {
      module('dashboardModule');
      module('gpullr');
      module('appTemplates');

      inject(function ($controller, _$rootScope_, _$state_) {
          $scope = _$rootScope_.$new();
          $state = _$state_;
          
          tabs = [{state: 'stats.today', title: 'Day'},
                  {state: 'stats.last_7_days', title: 'Week'},
                  {state: 'stats.last_30_days', title: 'Month'},
                  {state: 'stats.all_time', title: 'All time'}];
         
          controller = $controller('statisticsCtrl', {
             $scope: $scope,
             $state: $state
          });
      });
   });
   
   describe('statisticsCtrl getRankinglist test', function () {
      
       it('check for correct inital call for rankingList with "today" ', function () {
           var tabsCount = 4;
           $scope.$digest();
           
           expect($scope.tabs.length).toEqual(tabsCount);
           
           for(var i = 0; i<tabsCount; i++) {
               expect($scope.tabs[i].state).toEqual(tabs[i].state);
               expect($scope.tabs[i].title).toEqual(tabs[i].title);
               expect($scope.tabs[i]).toEqual(tabs[i]);
           };
       });
   });
});