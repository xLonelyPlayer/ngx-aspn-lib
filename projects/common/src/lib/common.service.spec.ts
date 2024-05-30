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

  describe('isNumber', () => {
    it('["", "a", "1a", "1a.0", "true", "false", {}, undefined, null, []] should be false', () => {
      ["", "a", "1a", "1a.0", "true", "false", {}, undefined, null, []].forEach((value: unknown) => {
        expect(service.isNumber(value)).toBeFalse();
      })
    })

    it('["0", "1", "2.2", "0.0"] should be true', () => {
      ["0", "1", "2.2", "0.0"].forEach((value: unknown) => {
        expect(service.isNumber(value)).toBeTruthy();
      });
    })
  });
});
