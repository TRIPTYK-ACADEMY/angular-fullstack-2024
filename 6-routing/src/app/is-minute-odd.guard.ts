import { CanActivateFn } from '@angular/router';

export const isMinuteOddGuard: CanActivateFn = (route, state) => {
  const today = new Date();
  const currentMinutes = today.getMinutes();
  // Si la minute est impair, il y aura un reste à la division entre currentMinute et 2
  return currentMinutes % 2 !== 0;
};
