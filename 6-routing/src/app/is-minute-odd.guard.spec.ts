import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isMinuteOddGuard } from './is-minute-odd.guard';

describe('isMinuteOddGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isMinuteOddGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
