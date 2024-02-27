import { CanActivateFn } from '@angular/router';

export const isMinuteEvenGuard: CanActivateFn = (route, state) => {
  const today = new Date();
  const currentMinute = today.getMinutes();
  return currentMinute % 2 === 0;
};
