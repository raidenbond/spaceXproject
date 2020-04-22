import { TestBed } from '@angular/core/testing';

import { LauncheService } from './launche.service';

describe('LauncheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LauncheService = TestBed.get(LauncheService);
    expect(service).toBeTruthy();
  });
});
