import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class authGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router,
        private storageService: LocalStorageService,
        private jwtHelper: JwtHelperService
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var token = this.storageService.getStorage('jwt');
        if (token && !this.jwtHelper.isTokenExpired(token))
            return true;
        else
            this.router.navigate(['login']);
        return false;
    }
}