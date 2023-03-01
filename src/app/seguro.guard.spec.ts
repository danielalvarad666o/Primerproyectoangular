import { TestBed } from '@angular/core/testing';

import { SeguroGuard } from './seguro.guard';

describe('SeguroGuard', () => {
  let guard: SeguroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeguroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
