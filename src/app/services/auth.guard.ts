import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class authGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.userService.IsLoggedIn();
        if (!isAuthenticated) {
            this.router.navigate(['login']);
        }
        return isAuthenticated;
    }
}