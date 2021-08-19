import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  canActivate() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.toastr.error('Debe iniciar sesion primero');
      this.router.navigate(['auth/login']);
      return false;
    }
  }

}
