import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const status = localStorage.getItem('status');
    const token = localStorage.getItem('token');

    // Si el status es 1, la sesión está activa, así que redirige a la página de inicio
    if (status === '1') {
      this.router.navigate(['/home']);
      return false;
    }

    // Si no hay token, entonces el usuario no ha iniciado sesión, así que permitir acceso a login o register
    if (!token) {
      return true;
    }

    // Si el usuario ha iniciado sesión y está intentando acceder a la página de login o registro, redirigir a la página de inicio
    if (state.url === '/login' || state.url === '/Registrarce') {
      this.router.navigate(['/home']);
      return false;
    }

    // Permitir el acceso a la ruta
    return true;
}


}

