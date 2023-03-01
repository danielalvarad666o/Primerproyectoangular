import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editaravion',
  templateUrl: './editaravion.component.html',
  styleUrls: ['./editaravion.component.css']
})
export class EditaravionComponent {
  avionForm: FormGroup;
  conductores: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.avionForm = this.formBuilder.group({
      id_piloto: ['', Validators.required],
      Airolinea: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el id del avión de la URL
    const id = this.route.snapshot.paramMap.get('id');

    // Hacer la solicitud GET a la API de Laravel para obtener la información de los conductores
    const urlConductores = 'http://127.0.0.1:8000/api/conductor';
    this.http.get(urlConductores).subscribe(
      (response: any) => {
        this.conductores = response['0'];
      },
      (error) => {
        console.log(error);
      }
    );

    // Hacer la solicitud GET a la API de Laravel para obtener la información del avión
    const urlAvion = `http://127.0.0.1:8000/api/avion/${id}`;
    this.http.get(urlAvion).subscribe(
      (response: any) => {
        // Establecer los valores del formulario con la información del avión
        this.avionForm.patchValue({
          id_piloto: response['id_piloto'],
          Airolinea: response['Airolinea']
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Obtener el id del avión de la URL
    const id = this.route.snapshot.paramMap.get('id');

    // Hacer la solicitud PUT a la API de Laravel para actualizar la información del avión
    const url = `http://127.0.0.1:8000/api/conductoryordi/actualizar3/${id}`;
    const data = {
      id_piloto: this.avionForm.get('id_piloto')?.value,
      Airolinea: this.avionForm.get('Airolinea')?.value
    };
    this.http.put(url, data).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/aviones']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
