import { TestBed } from '@angular/core/testing';

import { RegAuthService } from './reg-auth.service';

describe('RegAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegAuthService = TestBed.get(RegAuthService);
    expect(service).toBeTruthy();
  });
});
