import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isMinuteEvenGuard } from './is-minute-even.guard';

describe('isMinuteEvenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isMinuteEvenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
