'use strict';

describe('Service: cohortService', function () {

  // load the service's module
  beforeEach(module('galaxyApp'));

  // instantiate service
  var cohortService;
  beforeEach(inject(function (_cohort_) {
    cohortService = _cohortService_;
  }));

  it('should do something', function () {
    expect(!!cohortService).toBe(true);
  });

});
