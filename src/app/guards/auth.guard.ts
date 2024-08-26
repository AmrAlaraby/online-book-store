import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userPayload =localStorage.getItem('userPayload') ||sessionStorage.getItem('userPayload')
  if (userPayload && JSON.parse(userPayload).data.accessToken) {
    return true;}
  const router = inject(Router)
  router.navigate(['/login'])

return false
};
