'use strict';

angular.module('galaxyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.students', {
        url: 'students',
        templateUrl: 'app/students/students.html',
        controller: 'StudentsCtrl',
        controllerAs: 'ctrl'
      });
  });
