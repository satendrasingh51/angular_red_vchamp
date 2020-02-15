import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegAuthService } from './reg-auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _regAuthService: RegAuthService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._regAuthService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this._router.navigate(['/login'])
      return false
    }
  }
}
