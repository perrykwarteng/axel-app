import { TestBed } from '@angular/core/testing';

import { AxleServiceService } from './axle-service.service';

describe('AxleServiceService', () => {
  let service: AxleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
