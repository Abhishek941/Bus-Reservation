import { TestBed } from '@angular/core/testing';

import { ChseatService } from './chseat.service';

describe('ChseatService', () => {
  let service: ChseatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChseatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
