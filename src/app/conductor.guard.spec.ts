import { TestBed } from '@angular/core/testing';

import { ConductorGuard } from './conductor.guard';

describe('ConductorGuard', () => {
  let guard: ConductorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConductorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
