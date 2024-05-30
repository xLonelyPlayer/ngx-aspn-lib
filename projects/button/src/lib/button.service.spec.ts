import { TestBed } from '@angular/core/testing';

import { NgxAspnButtonService } from './button.service';

describe('NgxAspnButtonService', () => {
  let service: NgxAspnButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAspnButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
