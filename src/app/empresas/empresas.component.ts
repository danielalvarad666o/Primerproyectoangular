import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  nombreEmpresa: string = '';
  habilitarCuado=false;
  usuRegistro=false;
 
  llamarempresa(event: any) {
    event.preventDefault(); // Evita que el formulario se recargue
    const nombre = event.target.nombre.value;
    this.nombreEmpresa = nombre;
  }
constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
