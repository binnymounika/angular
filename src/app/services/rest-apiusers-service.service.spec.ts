import { TestBed } from '@angular/core/testing';

import { RestAPIUsersServiceService } from './rest-apiusers-service.service';

describe('RestAPIUsersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestAPIUsersServiceService = TestBed.get(RestAPIUsersServiceService);
    expect(service).toBeTruthy();
  });
});
