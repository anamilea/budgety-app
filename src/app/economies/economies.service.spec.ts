import { TestBed } from '@angular/core/testing';

import { EconomiesService } from './economies.service';

describe('EconomiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EconomiesService = TestBed.get(EconomiesService);
    expect(service).toBeTruthy();
  });
});
