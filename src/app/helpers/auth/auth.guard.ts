import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../../services/auth/token.service";


export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean => {
  if (inject(TokenService).isLoggedIn()){
    return true;
  } else {
    inject(Router).navigate(['/login']).then();
    return false;
  }
};
