import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  tienePermisoCrearSeguro = false;
  tienePermisoCrearConductor = false;
  tienePermisoCrearHospital = false;
  tienePermisoCrearTipoavion = false;
  tienepermisoingrediente=false;
  tieneperrmisochef = false;
  isLoggedIn = false;
  tokens = "";

  constructor(private http: HttpClient, private router: Router) {}
    
  ngOnInit(){
    const token = localStorage.getItem('token');
    

    if (token) {
      this.tokens = token;
      this.isLoggedIn = true;}

      // Realizamos la petición al endpoint de validación del permiso para crear seguro
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Autorización': `Bearer ${this.tokens}` // Se cambia Portador por Bearer
      });
      const urlTipoavion = 'http://127.0.0.1:8000/api/validaciontipoavion';
      const urlConductor = 'http://127.0.0.1:8000/api/validacionConductor'
      const urlHospital = 'http://127.0.0.1:8000/api/validacionHospital';
      const urlseguro = 'http://127.0.0.1:8000/api/validacionseguro';
      const urlchef = 'http://127.0.0.1:8000/api/validacioncheef';
      const urlingrediente = 'http://127.0.0.1:8000/api/validacionIngredinet';


      this.http.get(urlingrediente, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (reponseingrediente: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (reponseingrediente) {
            this.tienepermisoingrediente = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tienepermisoingrediente = false;
          }
        }
      );




      this.http.get(urlConductor, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (reponseConductor: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (reponseConductor) {
            this.tienePermisoCrearConductor = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tienePermisoCrearConductor = false;
          }
        }
      );



      this.http.get(urlConductor, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (reponseConductor: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (reponseConductor) {
            this.tienePermisoCrearConductor = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tienePermisoCrearConductor = false;
          }
        }
      );


      this.http.get(urlTipoavion, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (responseavion: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (responseavion) {
            this.tienePermisoCrearTipoavion = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tienePermisoCrearTipoavion = false;
          }
        }
      );




      this.http.get(urlHospital, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (responsehospital: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (responsehospital) {
            this.tienePermisoCrearHospital = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tienePermisoCrearHospital = false;
          }
        }
      );





















      this.http.get(urlchef, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (responsechef: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (responsechef) {
            this.tieneperrmisochef = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tieneperrmisochef = false;
          }
        }
      );


























      this.http.get(urlseguro, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(
        (response: any) => {
          // Si la respuesta indica que el usuario tiene permiso para crear seguro, establecemos la variable en true
          if (response) {
            this.tienePermisoCrearSeguro = true;
          }
        },
        (error) => {
          // Si la respuesta indica que el usuario no tiene permiso para crear seguro, establecemos la variable en false
          if (error.status === 403 || error.status === 401) {
            this.tienePermisoCrearSeguro = false;
          }
        }
      );
  }

 

  logout() {
    const url = 'http://127.0.0.1:8000/api/cerrar';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokens}`
    });
    this.http.delete(url, { headers }).subscribe(
      response => {
        alert("Se cerro la session de manera correcta");
        
        localStorage.removeItem('token');
       
        this.isLoggedIn = false;
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    );
  }
}





function ngOnInit() {
  throw new Error('Function not implemented.');
}

