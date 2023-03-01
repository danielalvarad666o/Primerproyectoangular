import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  [x: string]: any;

  form: FormGroup;
  enviado = false;


  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
    this.form = this.formBuilder.group({
      ingredientes: ['', [Validators.required]],
      unidades: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.max(9)]],
     
    });
  }
 
  
  get ingredientes() {
    return this.form.get('ingredientes') as FormControl;
  }

  get unidades() {
    return this.form.get('unidades')  as FormControl;
  }



  registrarUsuario() {
    const url = 'http://127.0.0.1:8000/api/ingredienteyordi';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Agregar el token de localStorage
    });
  
    const body = {
      ingredientes: this.form.value.ingredientes,
      unidades: this.form.value.unidades,
     
    };
  
    this.http.post<any>(url, body, { headers }).subscribe(
      response => {
        if (response && response.status && response.status >= 400) {
          alert(`Se produjo un error: ${response.statusText}`);
          
        } else {
          this.enviado = true;
          alert('El Ingredinete se inserto de manera correcta');
          this.router.navigate(['/']);
        }
      },
      error => {
        alert(`Se produjo un error: ${error.statusText}`);
      }
    );
  }
  
    
    

}
