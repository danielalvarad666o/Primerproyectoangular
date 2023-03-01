import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regi-hospital',
  templateUrl: './regi-hospital.component.html',
  styleUrls: ['./regi-hospital.component.css']
})
export class RegiHospitalComponent {
  hospitalfForm!: FormGroup ;
  seguros: any[] = [];
  conductor: any[] = [];
  showAlert: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  
    ngOnInit(): void {
      this.hospitalfForm = this.formBuilder.group({
        numero_de_seo: ['', Validators.required],
        no_de_seguro: ['', Validators.required],
        nombre_del_hospital: ['',Validators.required],
       
      });
      this.getSeguro();
    }


    getSeguro() {
      const token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        })
      };
      const url = 'http://127.0.0.1:8000/api/conductoryordi/info2';
      const url1 = 'http://127.0.0.1:8000/api/conductoryordi';
this.http.get(url1,httpOptions).subscribe(
  (response:any) => {
    console.log(response[0]);
    
    this.conductor = response[0];
    
    console.log(this.conductor);


  },
  (error) => {
    console.log(error);
  }
);



  
      this.http.get(url, httpOptions).subscribe(
        (response:any) => {
          console.log(response[0]);
          
          this.seguros = response[0];
          
          console.log(this.seguros);
      
      
        },
        (error) => {
          console.log(error);
        }
      );
    }














      onSubmit() {
        const token = localStorage.getItem('token');
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
        };
        const url = 'http://127.0.0.1:8000/api/conductoryordi/crear1';
    
        if (this.hospitalfForm.valid) {
          this.http.post(url, this.hospitalfForm.value, httpOptions).subscribe(
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

