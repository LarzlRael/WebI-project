import { TestBed } from '@angular/core/testing';

import { ReqApiService } from './req-api.service';

describe('ReqApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqApiService = TestBed.get(ReqApiService);
    expect(service).toBeTruthy();
  });
});
