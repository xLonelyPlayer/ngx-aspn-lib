import { TestBed } from '@angular/core/testing';

import { NgxAspnInputService } from './input.service';

describe('NgxAspnInputService', () => {
  let service: NgxAspnInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAspnInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
