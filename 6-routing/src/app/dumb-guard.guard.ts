import { CanActivateFn } from '@angular/router';

type CanActivateJMLepen = CanActivateFn

export const dumbGuardGuard: CanActivateJMLepen = (route, state) => {
  // const userService = inject(UserService)
  // si ça renvoit vrai, alors on peut accéder à la route
  // Si ça renvoit faux, alors on ne peut pas accéder à la route. Le component n'est pas "activé"
  return true;
};
