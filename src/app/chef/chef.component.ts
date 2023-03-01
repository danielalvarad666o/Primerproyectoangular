import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent {
  [x: string]: any;

  form: FormGroup;
  enviado = false;


  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      ap_paterno: ['', [Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      ap_materno: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]+")]],
      nacionalidad: ['', [Validators.required]],
      edad: ['', [Validators.required,Validators.min(18), Validators.max(78)]]
    });
  }
 
  
  get nombre() {
    return this.form.get('nombre') as FormControl;
  }

  get ap_paterno() {
    return this.form.get('ap_paterno')  as FormControl;
  }

  get ap_materno() {
    return this.form.get('ap_materno') as FormControl;
  }

  get nacionalidad() {
    return this.form.get('nacionalidad') as FormControl;
  }

 

  get edad() {
    return this.form.get('edad') as FormControl;
  }



  registrarUsuario() {
    const url = 'http://127.0.0.1:8000/api/chefyordi';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Agregar el token de localStorage
    });
  
    const body = {
      nombre: this.form.value.nombre,
      ap_paterno: this.form.value.ap_paterno,
      ap_materno: this.form.value.ap_materno,
      nacionalidad: this.form.value.nacionalidad,
      edad: this.form.value.edad
    };
  
    this.http.post<any>(url, body, { headers }).subscribe(
      response => {
        if (response && response.status && response.status >= 400) {
          alert(`Se produjo un error: ${response.statusText}`);
        } else {
          this.enviado = true;
          alert('El chef se inserto de manera correcta');
          this.router.navigate(['/']);
        }
      },
      error => {
        alert(`Se produjo un error: ${error.statusText}`);
      }
    );
  }
  
    
    

}
