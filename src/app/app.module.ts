import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConductorGuard } from './conductor.guard';
import {SeguroGuard} from './seguro.guard';
import {HospitalGuard} from './hospital.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from './login/login.component';
import { RegistrarceComponent } from './registrarce/registrarce.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NumerodeverificacionComponent } from './numerodeverificacion/numerodeverificacion.component';
import { AuthGuard } from './auth.guard';
import { UnselectableDirective } from './unselectable.directive';
import { RegistrarConductorComponent } from './registrar-conductor/registrar-conductor.component';
import { RegistrarAvionesComponent } from './registrar-aviones/registrar-aviones.component';
import { RegiHospitalComponent } from './regi-hospital/regi-hospital.component';
import { SeguroComponent } from './seguro/seguro.component';
import { ConductorComponent } from './conductor/conductor.component';
import { VerconductorComponent } from './verconductor/verconductor.component';
import { ChefComponent } from './chef/chef.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { TipodeplatoComponent } from './tipodeplato/tipodeplato.component';
import { EditarconductorComponent } from './editarconductor/editarconductor.component';



const appRoute:Routes=[
{path:'login',component:LoginComponent,canActivate: [AuthGuard]},
{path:'Registrarce',component:RegistrarceComponent,canActivate: [AuthGuard]},
{path:'authentication',component:NumerodeverificacionComponent,canActivate: [AuthGuard]},
{path:'registrarhopital',component:RegiHospitalComponent,canActivate:[HospitalGuard]},
{path:'registrarseguro',component:SeguroComponent,canActivate: [SeguroGuard]},
{path:'registrarconductor',component:ConductorComponent,canActivate: [ConductorGuard]},
{path:'registraravion',component:RegistrarAvionesComponent},
{path:'registrarchef',component:ChefComponent},
{path:'registrarIngrediente',component:IngredientesComponent},
{ path: 'editarconductor/:id', component: EditarconductorComponent },

{path:'verconductor',component:VerconductorComponent
},
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TituloComponent,
    EmpresasComponent,
    LoginComponent,
    RegistrarceComponent,
    NumerodeverificacionComponent,
    UnselectableDirective,
    RegistrarConductorComponent,
    RegistrarAvionesComponent,
    RegiHospitalComponent,
    SeguroComponent,
    ConductorComponent,
    VerconductorComponent,
    ChefComponent,
    IngredientesComponent,
    TipodeplatoComponent,
    EditarconductorComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,[ReactiveFormsModule],
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
