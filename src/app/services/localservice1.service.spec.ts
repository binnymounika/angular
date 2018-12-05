import { TestBed } from '@angular/core/testing';

import { Localservice1Service } from './localservice1.service';

describe('Localservice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Localservice1Service = TestBed.get(Localservice1Service);
    expect(service).toBeTruthy();
  });
});
