'use strict';

angular.module('galaxyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.attendance', {
        url: 'attendance',
        templateUrl: 'app/attendance/attendance.html',
        controller: 'AttendanceCtrl',
        controllerAs: 'ctrl'
      });
  });
