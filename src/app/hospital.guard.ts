import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalGuard implements CanActivate {
  private baseUrl = 'http://127.0.0.1:8000/api/validacionHospital';
   
  constructor(
    private authService: AuthService, 
    private http: HttpClient, 
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.baseUrl, { headers }).pipe(
      map(() => true),
      catchError((error) => {
        if (error.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('rol');
          localStorage.removeItem('status');
          return of(this.router.parseUrl('/login')); // redirigir a la página de login
        } else if (error.status === 403) {
          alert("Usuario no autorizado")
          this.router.navigate(['/']);
          return of(false);
        }
        return of(false);
      })
    );
  }
}
