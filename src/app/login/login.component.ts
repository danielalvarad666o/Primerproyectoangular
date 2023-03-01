import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  showAlert: boolean = false;
  form: FormGroup;
  enviado = false;
  rol = "";
  iniciandoSesion = true; // variable para controlar si el usuario está iniciando sesión o registrándose

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
    
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.form.get('email')  as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  iniciarsession() {
    const url = 'http://127.0.0.1:8000/api/user/registro';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('email', this.form.value.email);
    body.set('password', this.form.value.password);
  
    this.http.post<any>(url, body.toString(), { headers }).subscribe(
      response => {
        if (response && response.user.status == 0) {
          alert(`No se puede iniciar sesión porque el usuario está deshabilitado.`);
        } else if (response && response.token) {
          localStorage.setItem('token', response.token);
         // guardar el status en el local storage
          this.showAlert=true;
          
          setTimeout(() => {
            location.reload();
            this.router.navigate(['']);
          }, 2000);
          
          // Redirige al usuario a la página de inicio después de iniciar sesión
        } else {
          alert(`Se produjo un error: ${response.statusText}`);
        }
      },
      error => {
        alert('Hubo un error al intentar iniciar sesión.');
      }
    );
  
    this.iniciandoSesion = true; // establecer la variable en true para mostrar el formulario de inicio de sesión
  }
  
}
