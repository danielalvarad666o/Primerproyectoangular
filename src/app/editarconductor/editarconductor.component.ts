import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-editarconductor',
  templateUrl: './editarconductor.component.html',
  styleUrls: ['./editarconductor.component.css']
})
export class EditarconductorComponent implements OnInit {
  id: any;
  conductorForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.conductorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      A_paterno: ['', Validators.required],
      A_materno: ['', Validators.required],
      edad: ['', Validators.required],
    });
    this.id = this.route.snapshot.params['id'];

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

    const url1 = `http://127.0.0.1:8000/api/conductor/${this.id}`;
    this.http.get(url1, httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.conductorForm.patchValue({
          nombre: response.nombre,
          A_paterno: response.A_paterno,
          A_materno: response.A_materno,
          edad: response.edad,
        });
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

    const conductor = {
      nombre: this.conductorForm.get('nombre')?.value,
      A_paterno: this.conductorForm.get('A_paterno')?.value,
      A_materno: this.conductorForm.get('A_materno')?.value,
      edad: this.conductorForm.get('edad')?.value,
    };

    const url1 = `http://127.0.0.1:8000/api/conductoryordi/actualizar/${this.id}`;
    this.http.put(url1, conductor, httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/verconductor']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
