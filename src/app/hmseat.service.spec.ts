import { TestBed } from '@angular/core/testing';

import { HmseatService } from './hmseat.service';

describe('HmseatService', () => {
  let service: HmseatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmseatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
