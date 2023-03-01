import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veravion',
  templateUrl: './veravion.component.html',
  styleUrls: ['./veravion.component.css']
})
export class VeravionComponent {
  Avionesfrom!: FormGroup;
  conductor: any[] = [];
  showAlert: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getConductores();
  }
  activarConductor(id: number) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    
    const url = `http://127.0.0.1:8000/api/conductor/activar/${id}`;
    
    this.http.put(url, {}, httpOptions).subscribe(
      (response) => {
        this.getConductores();
        console.log(response);
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  getConductores() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };

    const url1 = 'http://127.0.0.1:8000/api/conductoryordi/info3';
    this.http.get(url1, httpOptions).subscribe(
      (response: any) => {
        console.log(response[0]);

        this.conductor = response[0];

        console.log(this.conductor);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  borrarConductor(id: number) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };

    const url = `http://127.0.0.1:8000/api/conductoryordi/borrar3/${id}`;
    this.http.delete(url, httpOptions).subscribe(
      (response) => {
        console.log(response);
        this.getConductores(); // Actualiza la tabla después de eliminar el conductor
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
