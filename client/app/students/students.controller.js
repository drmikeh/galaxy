'use strict';

angular.module('galaxyApp')
  .controller('StudentsCtrl', function (Auth, cohortService) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;

    // TODO: sample data
    this.cohort = cohortService.cohort;
  });
