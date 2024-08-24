import { TestBed } from '@angular/core/testing';

import { RestaurationService } from './restauration.service';

describe('RestaurationService', () => {
  let service: RestaurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
