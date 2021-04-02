import { TestBed } from '@angular/core/testing';

import { RequetWebService } from './requet-web.service';

describe('RequetWebService', () => {
  let service: RequetWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequetWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
