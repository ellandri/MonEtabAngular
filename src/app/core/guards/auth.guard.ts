import { CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { inject } from "@angular/core";




export function authGuard(){
  const userService = inject(UserService)
  const router = inject(Router)
  if (userService.isAuthenticate()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
}