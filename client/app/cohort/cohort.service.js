'use strict';

angular.module('galaxyApp')
  .service('cohortService', function () {
    this.cohort = {
      name: 'ATL WDI #5',
      students: [
        { name: 'Clark Kent', age: 27 },
        { name: 'Bruce Wayne', age: 33 },
        { name: 'Oliver Queen', age: 24 },
        { name: 'Barbara Gordon', age: 22 },
        { name: 'Barry Allen', age: 21 },
        { name: 'Tony Stark', age: 21 },
        { name: 'Elon Musk', age: 39 },
        { name: 'Steve Jobs', age: 44 }
      ]
    };
  });
