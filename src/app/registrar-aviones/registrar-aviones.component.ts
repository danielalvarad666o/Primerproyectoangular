import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-aviones',
  templateUrl: './registrar-aviones.component.html',
  styleUrls: ['./registrar-aviones.component.css']
})
export class RegistrarAvionesComponent {
  Avionesfrom!: FormGroup ;
  conductor: any[] = [];
  showAlert: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    this.Avionesfrom = this.formBuilder.group({
      id_piloto: ['', Validators.required],
      
      Airoliniea: ['',Validators.required]
     
    });
    this.getConductor();
  }


  getConductor() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    
    const url1 = 'http://127.0.0.1:8000/api/conductor';
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
  
      if (this.Avionesfrom.valid) {
        this.http.post(url, this.Avionesfrom.value, httpOptions).subscribe(
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
