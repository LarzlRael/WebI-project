import { TestBed } from '@angular/core/testing';

import { TesingService } from './tesing.service';

describe('TesingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesingService = TestBed.get(TesingService);
    expect(service).toBeTruthy();
  });
});
