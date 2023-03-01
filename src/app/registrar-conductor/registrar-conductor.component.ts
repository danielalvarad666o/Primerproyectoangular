import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-conductor',
  templateUrl: './registrar-conductor.component.html',
  styleUrls: ['./registrar-conductor.component.css']
})

  export class RegistrarConductorComponent  {
    chefForm!: FormGroup ;
    showAlert: boolean = false;
  
    constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  
    ngOnInit(): void {
      this.chefForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        ap_paterno: ['', Validators.required],
        ap_materno: ['',Validators.required],
        nacionalidad: [null, Validators.required],
        edad: [null, [Validators.required, Validators.min(18), Validators.max(99)]],
      });
    }
  
    onSubmit() {
      const token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      };
      const url = 'http://127.0.0.1:8000/api/chefyordi';
  
      if (this.chefForm.valid) {
        this.http.post(url, this.chefForm.value, httpOptions).subscribe(
          (response) => {
            console.log(response);
            this.showAlert = true;
            setTimeout(() => {
              
              this.router.navigate(['/']);
            }, 2000); // Redirigir después de 6 segundos
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('El formulario no es válido');
      }
    }
  
  }
  


