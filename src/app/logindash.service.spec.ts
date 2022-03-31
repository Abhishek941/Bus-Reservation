import { TestBed } from '@angular/core/testing';

import { LogindashService } from './logindash.service';

describe('LogindashService', () => {
  let service: LogindashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogindashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
