import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent {
  seguroForm!: FormGroup;
  conductores: any[] = [];
  showAlert = false;
 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seguroForm = this.formBuilder.group({
      id_paciente: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      numero_de_seguro: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      nombre_del_seguro: ['', Validators.required]
    });

    this.getConductores();
  }

  getConductores() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    const url = 'http://127.0.0.1:8000/api/conductor';

    this.http.get(url, httpOptions).subscribe(
      (response: any) => {
        console.log(response[0]);
        
        this.conductores = response[0];
        
        console.log(this.conductores);
    
    
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
        Authorization: `Bearer ${token}`
      })
    };
    const url = 'http://127.0.0.1:8000/api/conductoryordi/crear2';

    if (this.seguroForm.valid) {
      this.http.post(url, this.seguroForm.value, httpOptions).subscribe(
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
