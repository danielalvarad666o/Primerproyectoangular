import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrarce',
  templateUrl: './registrarce.component.html',
  styleUrls: ['./registrarce.component.css']
})


export class RegistrarceComponent {
  [x: string]: any;

  form: FormGroup;
  enviado = false;


  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmacion: ['', [Validators.required,this.matchPassword('password')]]
    });
  }
  matchPassword(otherControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const otherControl = control.root.get(otherControlName);
      return (otherControl && control.value !== otherControl.value) ? { match: true } : null;
    };
  }
  
  get name() {
    return this.form.get('name') as FormControl;
  }

  get email() {
    return this.form.get('email')  as FormControl;
  }

  get telefono() {
    return this.form.get('telefono') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

 

  get confirmacion() {
    return this.form.get('confirmacion') as FormControl;
  }



  registrarUsuario() {
   
  

    const url = 'http://127.0.0.1:8000/api/user/regis';

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.set('name', this.form.value.name);
    body.set('email', this.form.value.email);
    body.set('telefono', this.form.value.telefono);
    body.set('password', this.form.value.password);

    this.http.post<any>(url, body.toString(), { headers }).subscribe(
      response => {
        if (response && response.status && response.status >= 400) {
          alert(`Se produjo un error: ${response.statusText}`);
        } else {
          this.enviado = true;
          alert('SOLICITUD VALIDA ,Checar su correo electronico para seguir con el procediemiento');
          
          this.router.navigate(['/authentication']); 
        }
      },
      
    );

      }
    
    
}
