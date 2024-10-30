import { CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";

export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router:Router ) { }
  canActivate() {
   if(this.userService.isAuthenticate()){
    return true;
   }
   this.router.navigate(['/login']);
    return false;
  }
}