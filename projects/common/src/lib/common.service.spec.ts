import { TestBed } from '@angular/core/testing';

import { NgxAspnCommonService } from './common.service';

describe('NgxAspnCommonService', () => {
  let service: NgxAspnCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAspnCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
