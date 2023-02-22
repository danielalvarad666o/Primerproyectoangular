import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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



const appRoute:Routes=[
{path:'login',component:LoginComponent},
{path:'Registrarce',component:RegistrarceComponent},
{path:'authentication',component:NumerodeverificacionComponent}
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
