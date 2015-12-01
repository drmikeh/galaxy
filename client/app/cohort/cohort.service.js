'use strict';

angular.module('galaxyApp')
  .service('cohortService', function() {
    this.cohort = {
      name: 'ATL WDI #5',
      students: [
        { name: 'Clark Kent', age: 27 },
        { name: 'Bruce Wayne', age: 33 },
        { name: 'Oliver Queen', age: 24 },
        { name: 'Barry Allen', age: 21 }
      ]
    };
  });
